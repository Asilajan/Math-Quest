import { useState, useEffect, useRef, useMemo } from 'react';
import './Enemy.css';

// États possibles d'un ennemi
type EnemyState = 'spawning' | 'moving' | 'combat' | 'dead';

interface EnemyProps {
  // Propriétés du combat
  onReachCombat?: () => void;
  onDeath?: () => void;
  isHit?: boolean;

  // Lifecycle callbacks
  onMount?: () => void;
  onUnmount?: () => void;

  // Configuration
  difficulty?: number;
  canvasWidth?: number;
  platformY?: number;

  // Debug
  debug?: boolean;
}

// Configuration constante
const CONFIG = {
  // Spawn
  SPAWN_OFFSET: 50, // Distance hors écran à droite

  // Mouvement
  MOVE_SPEED: 1.5, // Pixels par frame
  COMBAT_POSITION_RATIO: 0.65, // Position d'arrêt (65% de la largeur)
  STOP_THRESHOLD: 5, // Distance pour considérer "arrivé"

  // Sprite
  SPRITE_WIDTH: 96,
  SPRITE_HEIGHT: 64,
  BASE_SCALE: 2.5,
  SPRITE_PADDING: 1, // Padding pour éviter le texture bleeding

  // Hitbox
  HITBOX_WIDTH: 80,
  HITBOX_HEIGHT: 50,
  HITBOX_OFFSET_X: 8,
  HITBOX_OFFSET_Y: 7,

  // HP
  BASE_HP: 3,
};

export function Enemy({
  onReachCombat,
  onDeath,
  isHit = false,
  onMount,
  onUnmount,
  difficulty = 1,
  canvasWidth = 800,
  platformY = 0,
  debug = false,
}: EnemyProps) {
  // État principal
  const [state, setState] = useState<EnemyState>('spawning');
  const [position, setPosition] = useState({ x: 0, y: platformY });
  const [hp, setHp] = useState(CONFIG.BASE_HP + Math.floor(difficulty / 2));
  const [isBeingHit, setIsBeingHit] = useState(false);

  // Refs pour l'animation
  const animationFrameRef = useRef<number | null>(null);
  const hasReachedCombat = useRef(false);
  const onReachCombatRef = useRef(onReachCombat);
  const onDeathRef = useRef(onDeath);
  const isMountedRef = useRef(true);

  // Position cible pour le combat (mémoïsée pour éviter les recalculs)
  const targetX = useMemo(() => canvasWidth * CONFIG.COMBAT_POSITION_RATIO, [canvasWidth]);

  // Calcul de la taille basée sur la difficulté (arrondi pour éviter le rendu partiel)
  const scale = CONFIG.BASE_SCALE * (1 + difficulty * 0.05);
  const width = Math.round(CONFIG.SPRITE_WIDTH * scale);
  const height = Math.round(CONFIG.SPRITE_HEIGHT * scale);

  // Garder les refs des callbacks à jour sans déclencher de re-render
  useEffect(() => {
    onReachCombatRef.current = onReachCombat;
  }, [onReachCombat]);

  useEffect(() => {
    onDeathRef.current = onDeath;
  }, [onDeath]);

  // Lifecycle : signaler le mount/unmount au parent
  useEffect(() => {
    isMountedRef.current = true;
    onMount?.();
    return () => {
      isMountedRef.current = false;
      onUnmount?.();
    };
  }, [onMount, onUnmount]);

  // Initialisation : spawn hors écran
  useEffect(() => {
    setPosition({
      x: canvasWidth + CONFIG.SPAWN_OFFSET,
      y: platformY,
    });

    // Démarrer le mouvement après un court délai
    const timer = setTimeout(() => {
      setState('moving');
    }, 100);

    return () => clearTimeout(timer);
  }, [canvasWidth, platformY]);

  // Boucle de mouvement - deps minimales pour éviter les réinitialisations
  useEffect(() => {
    if (state !== 'moving') return;

    const move = () => {
      // Ne pas relancer le RAF si le composant est unmounted
      if (!isMountedRef.current) return;

      setPosition((prev) => {
        const newX = prev.x - CONFIG.MOVE_SPEED;

        // Vérifier si arrivé à la position de combat
        if (newX <= targetX + CONFIG.STOP_THRESHOLD) {
          setState('combat');
          if (!hasReachedCombat.current) {
            hasReachedCombat.current = true;
            onReachCombatRef.current?.();
          }
          return { ...prev, x: targetX };
        }

        return { ...prev, x: newX };
      });

      // Ne relancer le RAF que si le composant est toujours monté
      if (isMountedRef.current) {
        animationFrameRef.current = requestAnimationFrame(move);
      }
    };

    animationFrameRef.current = requestAnimationFrame(move);

    return () => {
      if (animationFrameRef.current !== null) {
        cancelAnimationFrame(animationFrameRef.current);
        animationFrameRef.current = null;
      }
    };
  }, [state, targetX]); // Deps minimales: seulement state et targetX

  // Gestion des hits - deps minimales
  useEffect(() => {
    if (isHit && state === 'combat' && !isBeingHit) {
      setIsBeingHit(true);
      setHp((prev) => {
        const newHp = prev - 1;

        if (newHp <= 0) {
          setState('dead');
          setTimeout(() => onDeathRef.current?.(), 800);
        }

        return Math.max(0, newHp);
      });

      // Réinitialiser l'état de hit après l'animation
      setTimeout(() => {
        setIsBeingHit(false);
      }, 600);
    }
  }, [isHit, state, isBeingHit]); // Deps minimales: pas de callback externe

  // Déterminer l'animation sprite
  const getSpriteClass = () => {
    if (state === 'dead') return 'sprite-hit'; // Animation de mort
    if (isBeingHit) return 'sprite-hit';
    if (state === 'moving') return 'sprite-walk';
    return 'sprite-idle';
  };

  // Déterminer les classes CSS
  const containerClasses = ['enemy-container', state, isBeingHit ? 'being-hit' : '']
    .filter(Boolean)
    .join(' ');

  // Arrondir les positions pour éviter le rendu partiel
  const roundedX = Math.round(position.x);
  const roundedY = Math.round(position.y);

  return (
    <div
      className={containerClasses}
      style={{
        position: 'absolute',
        left: 0,
        top: 0,
        width: `${width}px`,
        height: `${height}px`,
        transform: `translate3d(${roundedX}px, ${roundedY}px, 0)`,
        zIndex: 25,
        overflow: 'visible',
      }}
    >
      {/* Sprite */}
      <div
        className={`enemy-sprite ${getSpriteClass()}`}
        style={{
          width: '100%',
          height: '100%',
          imageRendering: 'pixelated',
        }}
      />

      {/* Barre de vie (visible uniquement en combat) */}
      {state === 'combat' && difficulty > 3 && (
        <div
          className="enemy-hp-bar"
          style={{
            position: 'absolute',
            top: '-20px',
            left: '0',
            right: '0',
            height: '6px',
            background: 'rgba(0,0,0,0.3)',
            borderRadius: '3px',
            overflow: 'hidden',
          }}
        >
          <div
            style={{
              width: `${(hp / (CONFIG.BASE_HP + Math.floor(difficulty / 2))) * 100}%`,
              height: '100%',
              background: 'linear-gradient(to right, #ef4444, #dc2626)',
              transition: 'width 0.3s ease-out',
            }}
          />
        </div>
      )}

      {/* Niveau de difficulté */}
      {state === 'combat' && difficulty > 5 && (
        <div
          className="enemy-level"
          style={{
            position: 'absolute',
            top: '-35px',
            right: '0',
            background: '#dc2626',
            color: 'white',
            padding: '2px 8px',
            borderRadius: '12px',
            fontSize: '12px',
            fontWeight: 'bold',
            border: '2px solid #ef4444',
          }}
        >
          Lv.{difficulty}
        </div>
      )}

      {/* Debug: Hitbox visible */}
      {debug && (
        <div
          style={{
            position: 'absolute',
            left: `${CONFIG.HITBOX_OFFSET_X * scale}px`,
            top: `${CONFIG.HITBOX_OFFSET_Y * scale}px`,
            width: `${CONFIG.HITBOX_WIDTH * scale}px`,
            height: `${CONFIG.HITBOX_HEIGHT * scale}px`,
            border: '2px solid red',
            background: 'rgba(255, 0, 0, 0.1)',
            pointerEvents: 'none',
          }}
        />
      )}

      {/* Debug: Info */}
      {debug && (
        <div
          style={{
            position: 'absolute',
            top: '-60px',
            left: '0',
            background: 'rgba(0, 0, 0, 0.8)',
            color: 'white',
            padding: '4px 8px',
            borderRadius: '4px',
            fontSize: '10px',
            whiteSpace: 'nowrap',
          }}
        >
          State: {state} | X: {Math.round(position.x)} | HP: {hp}
        </div>
      )}
    </div>
  );
}
