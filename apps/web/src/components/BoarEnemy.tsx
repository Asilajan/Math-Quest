import { useState, useEffect, memo, useRef } from 'react';
import './BoarEnemy.css';

type BoarState = 'spawning' | 'walking' | 'arrived' | 'idle' | 'hit' | 'defeated';

interface BoarEnemyProps {
  isHit?: boolean;
  isDefeated?: boolean;
  difficulty?: number;
  resetKey?: string;
}

// Constants for positioning
const SPAWN_POSITION = 300; // Start position (pixels to the right, off screen)
const TARGET_POSITION = 0;  // Final position (center-right of parent)
const WALK_SPEED = 2;       // Pixels per frame
const ARRIVAL_THRESHOLD = 10; // Distance to consider "arrived"

function BoarEnemyComponent({ isHit, isDefeated, difficulty = 1, resetKey }: BoarEnemyProps) {
  const [state, setState] = useState<BoarState>('spawning');
  const [positionX, setPositionX] = useState(SPAWN_POSITION);
  const animationFrameRef = useRef<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Debug: log re-renders (remove in production)
  if (import.meta.env.DEV) {
    console.log('🐗 BoarEnemy render:', { isHit, isDefeated, difficulty, resetKey, state, positionX });
  }

  // Reset spawn when question changes
  useEffect(() => {
    if (resetKey) {
      // Cancel any ongoing animation
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }

      // Reset to spawn position
      setPositionX(SPAWN_POSITION);
      setState('spawning');

      // Start walking after a brief delay
      setTimeout(() => {
        setState('walking');
      }, 100);
    }
  }, [resetKey]);

  // Walking movement loop using requestAnimationFrame
  useEffect(() => {
    if (state === 'walking') {
      const walk = () => {
        setPositionX((prevX) => {
          const newX = prevX - WALK_SPEED;

          // Check if arrived at destination
          if (newX <= TARGET_POSITION + ARRIVAL_THRESHOLD) {
            setState('arrived');
            return TARGET_POSITION;
          }

          return newX;
        });

        animationFrameRef.current = requestAnimationFrame(walk);
      };

      animationFrameRef.current = requestAnimationFrame(walk);

      return () => {
        if (animationFrameRef.current) {
          cancelAnimationFrame(animationFrameRef.current);
        }
      };
    }
  }, [state]);

  // State transitions
  useEffect(() => {
    if (isDefeated && state !== 'defeated') {
      setState('defeated');
    } else if (isHit && state === 'idle') {
      setState('hit');
      const timer = setTimeout(() => {
        setState('idle');
      }, 600);
      return () => clearTimeout(timer);
    } else if (state === 'arrived') {
      // Transition to idle after arriving
      const timer = setTimeout(() => {
        setState('idle');
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [isHit, isDefeated, state]);

  const scale = 0.4 + (difficulty * 0.05);

  // Determine sprite animation based on state
  const spriteClass =
    state === 'walking' ? 'sprite-walk' :
    state === 'hit' || state === 'defeated' ? 'sprite-hit' :
    'sprite-idle';

  return (
    <div
        ref={containerRef}
        className={`boar-container ${state}`}
        style={{
          width: `${96 * scale}px`,
          height: `${64 * scale}px`,
          transform: `translateX(${positionX}px) translateZ(0)`,
          transition: state === 'arrived' ? 'transform 0.3s ease-out' : 'none',
        }}
      >
        <div
          className={`boar-sprite ${spriteClass}`}
        />

        {/* Health bar - only show when idle or hit, not during spawn/walk */}
        {difficulty > 3 && state !== 'defeated' && state !== 'spawning' && state !== 'walking' && state !== 'arrived' && (
          <div
            className="absolute -top-6 left-0 right-0"
          >
            <div className="bg-slate-800/80 border border-slate-600 rounded-full h-2 overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-red-600 to-red-400 transition-all duration-500"
                style={{ width: isHit ? '0%' : '100%' }}
              />
            </div>
          </div>
        )}

        {/* Difficulty indicator - only show when idle or hit, not during spawn/walk */}
        {difficulty > 5 && state !== 'defeated' && state !== 'spawning' && state !== 'walking' && state !== 'arrived' && (
          <div
            className="absolute -top-10 right-0 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded-full border-2 border-red-400"
          >
            ⚠️ Lv.{difficulty}
          </div>
        )}
      </div>
  );
}

// Custom comparator to prevent unnecessary re-renders
function arePropsEqual(prev: BoarEnemyProps, next: BoarEnemyProps) {
  return (
    prev.isHit === next.isHit &&
    prev.isDefeated === next.isDefeated &&
    prev.difficulty === next.difficulty &&
    prev.resetKey === next.resetKey
  );
}

export const BoarEnemy = memo(BoarEnemyComponent, arePropsEqual);
