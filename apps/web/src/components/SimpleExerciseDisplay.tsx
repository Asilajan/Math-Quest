import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Coins, Sparkles, CheckCircle2 } from 'lucide-react';
import { RPGCard } from './RPGCard';

interface SimpleExerciseDisplayProps {
  question: string;
  onValidate: (answer: string) => void;
  onRequestHint: () => void;
  feedback: 'correct' | 'incorrect' | null;
  disabled: boolean;
  hp: number;
  maxHp: number;
  difficulty?: number;
  multipleChoice?: {
    choices: string[];
    correctAnswer: string;
  } | null;
}

export function SimpleExerciseDisplay({
  question,
  onValidate,
  onRequestHint,
  feedback,
  disabled,
  hp,
  maxHp,
  difficulty = 1,
  multipleChoice = null,
}: SimpleExerciseDisplayProps) {
  const [answer, setAnswer] = useState('');
  const [selectedChoice, setSelectedChoice] = useState<string | null>(null);
  const [showCoins, setShowCoins] = useState(false);

  const isMultipleChoice = multipleChoice !== null;

  // Reset answer when question changes
  useEffect(() => {
    setAnswer('');
    setSelectedChoice(null);
    setShowCoins(false);
  }, [question]);

  // Show coins animation on correct answer
  useEffect(() => {
    if (feedback === 'correct') {
      setShowCoins(true);
      setTimeout(() => setShowCoins(false), 2000);
    }
  }, [feedback]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isMultipleChoice) {
      if (selectedChoice && !disabled) {
        onValidate(selectedChoice);
      }
    } else {
      if (answer.trim() && !disabled) {
        onValidate(answer.trim());
      }
    }
  };

  const handleChoiceClick = (choice: string) => {
    if (!disabled) {
      setSelectedChoice(choice);
      // Auto-submit after selection
      onValidate(choice);
    }
  };

  return (
    <div className="relative w-full space-y-6">
      {/* HP Bar */}
      <RPGCard>
        <div className="p-4">
          <div className="flex items-center gap-4">
            <Heart className="text-red-400" size={24} fill="currentColor" />
            <div className="flex-1">
              <div className="flex items-center justify-between mb-2">
                <span className="text-white font-bold text-sm uppercase tracking-wide">
                  Points de vie
                </span>
                <span className="text-white font-bold text-sm">
                  {hp}/{maxHp}
                </span>
              </div>
              <div className="flex gap-2">
                {[...Array(maxHp)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: i * 0.05 }}
                    className={`flex-1 h-6 rounded ${
                      i < hp
                        ? 'bg-gradient-to-br from-red-500 to-red-700 border-2 border-red-300 shadow-lg shadow-red-500/50'
                        : 'bg-slate-700/50 border-2 border-slate-600'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </RPGCard>

      {/* Question Card */}
      <RPGCard variant="gold" glow>
        <div className="p-8">
          <div className="text-center space-y-4">
            <div className="inline-block">
              <div className="relative">
                <div className="absolute inset-0 bg-yellow-500 rounded-full blur-lg opacity-50" />
                <div className="relative w-16 h-16 bg-gradient-to-br from-yellow-600 to-orange-700 rounded-full flex items-center justify-center border-4 border-yellow-500 mx-auto mb-4">
                  <span className="text-3xl font-bold text-yellow-100">?</span>
                </div>
              </div>
            </div>
            <h2 className="text-3xl font-bold text-yellow-200 tracking-wide">Résous ce problème</h2>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/10 to-orange-500/10 rounded-lg blur" />
              <div className="relative bg-slate-900/60 border-2 border-yellow-600/50 rounded-lg p-8">
                <p className="text-4xl font-bold text-white">{question}</p>
              </div>
            </div>
            <p className="text-yellow-100/60 text-sm">
              Niveau {difficulty}/10 • Entre ta réponse ci-dessous
            </p>
          </div>
        </div>
      </RPGCard>

      {/* Answer Input */}
      <RPGCard>
        <div className="p-6">
          {isMultipleChoice ? (
            // Multiple Choice Mode
            <div className="space-y-4">
              <label className="block text-sm font-semibold text-indigo-300 uppercase tracking-wide mb-4 text-center">
                Choisis la bonne réponse
              </label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {multipleChoice!.choices.map((choice, index) => {
                  const isSelected = selectedChoice === choice;
                  const isCorrect = feedback === 'correct' && isSelected;
                  const isWrong = feedback === 'incorrect' && isSelected;

                  return (
                    <motion.button
                      key={index}
                      type="button"
                      onClick={() => handleChoiceClick(choice)}
                      disabled={disabled}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className={`relative group px-6 py-6 rounded-lg font-bold text-xl transition-all shadow-lg ${
                        isCorrect
                          ? 'bg-gradient-to-r from-green-600 to-emerald-600 border-2 border-green-400 shadow-green-500/50 scale-105'
                          : isWrong
                            ? 'bg-gradient-to-r from-red-600 to-orange-600 border-2 border-red-400 shadow-red-500/50 scale-105'
                            : isSelected
                              ? 'bg-gradient-to-r from-indigo-600 to-purple-600 border-2 border-indigo-400 shadow-indigo-500/50 scale-105'
                              : 'bg-gradient-to-r from-slate-700 to-slate-800 border-2 border-slate-600 hover:from-indigo-700 hover:to-purple-700 hover:border-indigo-500 hover:shadow-indigo-500/30 hover:scale-105'
                      } ${disabled ? 'cursor-not-allowed opacity-70' : 'cursor-pointer'}`}
                    >
                      <div className="absolute inset-0 bg-gradient-to-t from-white/0 to-white/10 rounded-lg" />
                      <div className="relative flex items-center justify-between gap-4">
                        <span className="text-white flex-1 text-left">{choice}</span>
                        {isSelected && (
                          <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ type: 'spring', duration: 0.4 }}
                          >
                            <CheckCircle2
                              className={
                                isCorrect
                                  ? 'text-green-200'
                                  : isWrong
                                    ? 'text-red-200'
                                    : 'text-indigo-200'
                              }
                              size={28}
                            />
                          </motion.div>
                        )}
                      </div>
                    </motion.button>
                  );
                })}
              </div>
              <div className="flex justify-center pt-2">
                <button
                  type="button"
                  onClick={onRequestHint}
                  disabled={disabled}
                  className="relative group px-6 py-3 bg-gradient-to-r from-yellow-600 to-amber-600 hover:from-yellow-500 hover:to-amber-500 text-white rounded-lg font-bold text-sm uppercase tracking-wide transition-all shadow-lg hover:shadow-yellow-500/50 disabled:opacity-50 disabled:cursor-not-allowed hover:scale-105 active:scale-95"
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-white/0 to-white/20 rounded-lg" />
                  <span className="relative">💡 Besoin d&apos;aide ?</span>
                </button>
              </div>
            </div>
          ) : (
            // Text Input Mode
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="relative">
                <label className="block text-sm font-semibold text-indigo-300 uppercase tracking-wide mb-2">
                  Ta réponse
                </label>
                <input
                  type="text"
                  value={answer}
                  onChange={(e) => setAnswer(e.target.value)}
                  disabled={disabled}
                  placeholder="Entre ta réponse..."
                  className="w-full px-6 py-4 bg-slate-900/50 border-2 border-slate-600 rounded-lg text-white text-2xl font-semibold text-center focus:outline-none focus:border-indigo-400 focus:ring-2 focus:ring-indigo-400/50 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                  autoFocus
                />
              </div>

              <div className="flex gap-3">
                <button
                  type="submit"
                  disabled={disabled || !answer.trim()}
                  className="flex-1 relative group px-6 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white rounded-lg font-bold text-lg uppercase tracking-wide transition-all shadow-lg hover:shadow-indigo-500/50 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:shadow-none hover:scale-105 active:scale-95"
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-white/0 to-white/20 rounded-lg" />
                  <span className="relative">✓ Valider</span>
                </button>

                <button
                  type="button"
                  onClick={onRequestHint}
                  disabled={disabled}
                  className="relative group px-6 py-4 bg-gradient-to-r from-yellow-600 to-amber-600 hover:from-yellow-500 hover:to-amber-500 text-white rounded-lg font-bold text-lg uppercase tracking-wide transition-all shadow-lg hover:shadow-yellow-500/50 disabled:opacity-50 disabled:cursor-not-allowed hover:scale-105 active:scale-95"
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-white/0 to-white/20 rounded-lg" />
                  <span className="relative">💡 Aide</span>
                </button>
              </div>
            </form>
          )}

          {/* Feedback */}
          <AnimatePresence>
            {feedback === 'correct' && (
              <motion.div
                initial={{ opacity: 0, y: -10, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0 }}
                className="relative mt-4"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-lg blur" />
                <div className="relative bg-gradient-to-r from-green-900/80 to-emerald-900/80 border-2 border-green-500 rounded-lg p-4">
                  <p className="text-green-200 text-center font-bold text-lg">
                    ✓ Excellente réponse ! Tu gagnes de l&apos;or et de l&apos;expérience !
                  </p>
                </div>
              </motion.div>
            )}

            {feedback === 'incorrect' && (
              <motion.div
                initial={{ opacity: 0, y: -10, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0 }}
                className="relative mt-4"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-red-500/20 to-orange-500/20 rounded-lg blur" />
                <div className="relative bg-gradient-to-r from-red-900/80 to-orange-900/80 border-2 border-red-500 rounded-lg p-4">
                  <p className="text-red-200 text-center font-bold text-lg">
                    ✗ Incorrect ! Tu perds 1 point de vie. Réessaie !
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </RPGCard>

      {/* Coin animation */}
      <AnimatePresence>
        {showCoins && (
          <div className="fixed inset-0 pointer-events-none z-50">
            {[...Array(12)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute"
                style={{
                  left: '50%',
                  top: '50%',
                }}
                initial={{
                  x: 0,
                  y: 0,
                  scale: 0,
                  opacity: 1,
                }}
                animate={{
                  x: (Math.random() - 0.5) * 400,
                  y: (Math.random() - 0.5) * 400,
                  scale: [0, 2, 1, 0],
                  opacity: [1, 1, 1, 0],
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 1.5,
                  delay: i * 0.08,
                  ease: 'easeOut',
                }}
              >
                <div className="relative">
                  <div className="absolute inset-0 bg-yellow-400 rounded-full blur-lg" />
                  <Coins className="relative text-yellow-500" size={48} />
                </div>
              </motion.div>
            ))}
            <motion.div
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: [0, 1.5, 1], opacity: [0, 1, 0] }}
              transition={{ duration: 1.5 }}
            >
              <div className="relative">
                <div className="absolute inset-0 bg-yellow-400 rounded-full blur-2xl" />
                <div className="relative bg-gradient-to-br from-yellow-500 to-orange-600 rounded-full px-8 py-4 border-4 border-yellow-400">
                  <div className="flex items-center gap-3">
                    <Sparkles className="text-yellow-100" size={32} />
                    <span className="text-4xl font-bold text-yellow-100">+OR</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
