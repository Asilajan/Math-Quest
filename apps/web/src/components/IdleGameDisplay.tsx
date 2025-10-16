import { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Coins, Heart } from 'lucide-react';
import { Enemy } from './Enemy';

interface IdleGameDisplayProps {
  question: string;
  onValidate: (answer: string) => void;
  onRequestHint: () => void;
  feedback: 'correct' | 'incorrect' | null;
  disabled: boolean;
  hp: number;
  maxHp: number;
  difficulty?: number; // Exercise difficulty (1-10)
}

type GameState = 'running' | 'combat' | 'victory';

export function IdleGameDisplay({
  question,
  onValidate,
  onRequestHint,
  feedback,
  disabled,
  hp,
  maxHp,
  difficulty = 1,
}: IdleGameDisplayProps) {
  const [answer, setAnswer] = useState('');
  const [gameState, setGameState] = useState<GameState>('running');
  const [frameIndex, setFrameIndex] = useState(0);
  const [showCoins, setShowCoins] = useState(false);
  const [monsterDefeated, setMonsterDefeated] = useState(false);
  const [isAttacking, setIsAttacking] = useState(false);

  // Ref pour empêcher le spawn de plusieurs ennemis simultanément
  const enemyExistsRef = useRef(false);
  const canSpawnRef = useRef(true);

  // Reset game state when question changes
  useEffect(() => {
    setAnswer('');
    setGameState('running'); // Enemy will set to 'combat' when it arrives
    setFrameIndex(0);
    setShowCoins(false);
    setMonsterDefeated(false);
    setIsAttacking(false);

    // Empêcher le spawn immédiat pour éviter les doublons
    canSpawnRef.current = false;
    const spawnTimer = setTimeout(() => {
      canSpawnRef.current = true;
    }, 300);

    return () => clearTimeout(spawnTimer);
  }, [question]);

  // Animate sprite frames based on game state
  useEffect(() => {
    let interval: number;

    if (isAttacking) {
      // Attack animation (4 frames)
      interval = setInterval(() => {
        setFrameIndex((prev) => (prev + 1) % 4);
      }, 80);
    } else {
      // Idle animation (4 frames)
      interval = setInterval(() => {
        setFrameIndex((prev) => (prev + 1) % 4);
      }, 150);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isAttacking]);

  // NOTE: Hero movement disabled - Enemy now handles its own arrival
  // The hero stays in position and Enemy comes to him
  // Enemy calls onReachCombat() to trigger combat state

  // Handle correct answer - defeat monster and stay in victory
  useEffect(() => {
    if (feedback === 'correct' && gameState === 'combat') {
      setShowCoins(true);
      setIsAttacking(true);
      setMonsterDefeated(true);

      // Attack animation
      setTimeout(() => {
        setIsAttacking(false);
        setGameState('victory');
      }, 500);

      // Hide coins and prepare for next question
      setTimeout(() => {
        setShowCoins(false);
      }, 2000);
    }
  }, [feedback, gameState]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (answer.trim() && !disabled && gameState === 'combat') {
      onValidate(answer.trim());
    }
  };

  // Mémoïser les callbacks pour éviter les re-renders intempestifs de l'Enemy
  const handleEnemyMount = useCallback(() => {
    enemyExistsRef.current = true;
  }, []);

  const handleEnemyUnmount = useCallback(() => {
    enemyExistsRef.current = false;
  }, []);

  const handleEnemyDeath = useCallback(() => {
    setMonsterDefeated(true);
  }, []);

  const handleReachCombat = useCallback(() => {
    setGameState('combat');
  }, []);

  return (
    <div className="relative w-full">
      {/* Game Scene */}
      <div className="relative rounded-lg overflow-visible" style={{ height: '400px' }}>
        {/* Background image */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: 'url(/assets/forest/Background.png)',
            backgroundRepeat: 'repeat-x',
            backgroundSize: 'auto 100%',
            backgroundPosition: 'center',
            imageRendering: 'pixelated',
          }}
        />

        {/* Ground/Floor layer - using grass tiles */}
        <div
          className="absolute bottom-0 left-0 right-0"
          style={{
            height: '80px',
            backgroundImage: 'url(/assets/forest/Tiles.png)',
            backgroundPosition: '0 -16px',
            backgroundRepeat: 'repeat-x',
            backgroundSize: '256px auto',
            imageRendering: 'pixelated',
          }}
        />

        {/* HP Bar */}
        <div className="absolute top-2 left-4 flex items-center gap-2 bg-black/60 backdrop-blur-sm px-3 py-2 rounded-lg border-2 border-red-600/50">
          <Heart className="text-red-400" size={20} fill="currentColor" />
          <div className="flex gap-1">
            {[...Array(maxHp)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: i * 0.05 }}
                className={`w-6 h-6 rounded ${
                  i < hp
                    ? 'bg-gradient-to-br from-red-500 to-red-700 border-2 border-red-300'
                    : 'bg-slate-700/50 border-2 border-slate-600'
                }`}
              />
            ))}
          </div>
          <span className="text-white font-bold text-sm ml-1">
            {hp}/{maxHp}
          </span>
        </div>

        {/* Progress bar removed - Enemy handles its own movement */}

        {/* Hero Character - stays in position */}
        <motion.div className="absolute bottom-24 z-20" style={{ left: '20%' }}>
          <div
            className="relative"
            style={{
              width: '80px',
              height: '80px',
              backgroundImage: isAttacking
                ? 'url(/assets/forest/Attack-Sheet.png)'
                : 'url(/assets/forest/Idle-Sheet.png)',
              backgroundPosition: `${-frameIndex * 80}px 0`,
              backgroundSize: isAttacking ? '320px 80px' : '320px 80px',
              imageRendering: 'pixelated',
              transform: 'scale(2.5)',
              transformOrigin: 'bottom center',
            }}
          />
          {/* Shadow */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-20 h-3 bg-black/30 rounded-full blur-sm" />
        </motion.div>

        {/* Monster - Enemy Component */}
        {!monsterDefeated && canSpawnRef.current && !enemyExistsRef.current && (
          <Enemy
            key={question} // Remount on new question
            isHit={isAttacking}
            onMount={handleEnemyMount}
            onUnmount={handleEnemyUnmount}
            onDeath={handleEnemyDeath}
            onReachCombat={handleReachCombat}
            difficulty={difficulty}
            canvasWidth={800}
            platformY={100}
            debug={false} // Hitbox invisible
          />
        )}

        {/* Question bubble - only shown in combat */}
        <AnimatePresence>
          {gameState === 'combat' && !disabled && (
            <motion.div
              initial={{ scale: 0, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0, opacity: 0, y: -20 }}
              className="absolute top-12 left-1/2 -translate-x-1/2 w-3/4 max-w-md z-30"
            >
              {/* Speech bubble tail */}
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-0 h-0 border-l-8 border-r-8 border-t-8 border-transparent border-t-white/95" />

              <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-xl border-4 border-red-500">
                <p className="text-2xl font-bold text-center text-gray-800">{question}</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Coin animation */}
        <AnimatePresence>
          {showCoins && (
            <>
              {[...Array(8)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute z-40"
                  initial={{
                    x: '50%',
                    y: '50%',
                    scale: 0,
                    opacity: 1,
                  }}
                  animate={{
                    x: `${50 + (Math.random() - 0.5) * 60}%`,
                    y: `${30 + (Math.random() - 0.5) * 30}%`,
                    scale: [0, 2, 1],
                    opacity: [1, 1, 0],
                    rotate: [0, 360],
                  }}
                  exit={{ opacity: 0 }}
                  transition={{
                    duration: 1.5,
                    delay: i * 0.08,
                    ease: 'easeOut',
                  }}
                >
                  <div className="relative">
                    <div className="absolute inset-0 bg-yellow-400 rounded-full blur-lg" />
                    <Coins className="relative text-yellow-500" size={40} />
                  </div>
                </motion.div>
              ))}
            </>
          )}
        </AnimatePresence>

        {/* Combat indicator */}
        {gameState === 'combat' && (
          <div className="absolute top-4 right-4 bg-red-500/80 backdrop-blur-sm px-4 py-2 rounded-lg border-2 border-red-300 animate-pulse">
            <p className="text-white font-bold text-sm uppercase tracking-wide">⚔️ Combat !</p>
          </div>
        )}
      </div>

      {/* Input form - only shown in combat */}
      <AnimatePresence>
        {gameState === 'combat' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="mt-6"
          >
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-red-500/20 to-orange-500/20 rounded-lg blur" />
                <div className="relative bg-slate-800/90 backdrop-blur-sm border-2 border-red-500/50 rounded-lg p-6">
                  <label className="block text-sm font-semibold text-red-300 uppercase tracking-wide mb-2">
                    Résous pour attaquer ! ⚔️
                  </label>
                  <input
                    type="text"
                    value={answer}
                    onChange={(e) => setAnswer(e.target.value)}
                    disabled={disabled}
                    placeholder="Entre ta réponse..."
                    className="w-full px-4 py-3 bg-slate-900/50 border-2 border-slate-600 rounded-lg text-white text-xl font-semibold focus:outline-none focus:border-red-400 focus:ring-2 focus:ring-red-400/50 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                    autoFocus
                  />

                  <div className="flex gap-3 mt-4">
                    <button
                      type="submit"
                      disabled={disabled || !answer.trim()}
                      className="flex-1 relative group px-6 py-3 bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-500 hover:to-orange-500 text-white rounded-lg font-bold uppercase tracking-wide transition-all shadow-lg hover:shadow-red-500/50 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:shadow-none"
                    >
                      <div className="absolute inset-0 bg-gradient-to-t from-white/0 to-white/20 rounded-lg" />
                      <span className="relative">⚔️ Attaquer</span>
                    </button>

                    <button
                      type="button"
                      onClick={onRequestHint}
                      disabled={disabled}
                      className="relative group px-6 py-3 bg-gradient-to-r from-yellow-600 to-amber-600 hover:from-yellow-500 hover:to-amber-500 text-white rounded-lg font-bold uppercase tracking-wide transition-all shadow-lg hover:shadow-yellow-500/50 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      <div className="absolute inset-0 bg-gradient-to-t from-white/0 to-white/20 rounded-lg" />
                      <span className="relative">💡 Aide</span>
                    </button>
                  </div>

                  {/* Feedback */}
                  {feedback === 'incorrect' && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mt-4 p-3 bg-red-900/50 border-2 border-red-500 rounded-lg"
                    >
                      <p className="text-red-200 text-center font-semibold">
                        ❌ Raté ! Le monstre résiste !
                      </p>
                    </motion.div>
                  )}
                </div>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
