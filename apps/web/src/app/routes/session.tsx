import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import { RPGCard } from '@/components/RPGCard';
import { SimpleExerciseDisplay } from '@/components/SimpleExerciseDisplay';
import { HintDrawer } from '@/components/HintDrawer';
import { useCharacter } from '@/contexts/CharacterContext';
import {
  Trophy,
  Clock,
  Zap,
  Star,
  Swords,
  Coins,
  Sparkles,
  Scroll,
  Brain,
  Calculator,
  Percent,
  Variable,
  Skull,
  RotateCcw,
} from 'lucide-react';
import {
  genAddFractions,
  genSubtractFractions,
  genAddRelativeNumbers,
  genSubtractRelativeNumbers,
  genMultiplyRelativeNumbers,
  genDivideRelativeNumbers,
  genEvaluatePower,
  genMultiplyPowers,
  genDividePowers,
  genPowerOfPower,
  genSimpleEquation,
  genTwoStepEquation,
  genVariableBothSides,
  genEquationWithParentheses,
  genDirectProportion,
  genPercentage,
  genScale,
  genSpeed,
  genExpand,
  genFactor,
  genSimplify,
  genSubstitute,
  solveFraction,
  solveRelativeNumber,
  solvePowerExercise,
  solveEquationExercise,
  solveProportionExercise,
  solveLiteralExercise,
  compareAnswers,
  selectDifficulty,
  calculateXPReward,
  calculateCoinsReward,
  calculateEquippedBonuses,
  type FractionExercise,
  type RelativeNumberExercise,
  type PowerExercise,
  type EquationExercise,
  type ProportionExercise,
  type LiteralExercise,
  type Exercise,
} from '@math-app/core';

// Mock current mastery - would come from Firebase
const CURRENT_MASTERY = 55;

// Exercise types to practice
type ExerciseType =
  | 'fractions'
  | 'relative_numbers'
  | 'powers'
  | 'equations'
  | 'proportions'
  | 'literal';

export default function Session() {
  const location = useLocation();
  const [exerciseType, setExerciseType] = useState<ExerciseType>('fractions');
  const [exercise, setExercise] = useState<Exercise | null>(null);
  const [correctSolution, setCorrectSolution] = useState<string>('');
  const [feedback, setFeedback] = useState<'correct' | 'incorrect' | null>(null);
  const [score, setScore] = useState(0);
  const [exerciseCount, setExerciseCount] = useState(0);
  const [startTime, setStartTime] = useState<number>(0);
  const [hintsUsed, setHintsUsed] = useState(0);
  const [aiCallsRemaining, setAiCallsRemaining] = useState(20);

  // Gamification
  const { character, addXP, addCoins, loseHP, resetHP } = useCharacter();
  const [lastReward, setLastReward] = useState<{ xp: number; coins: number } | null>(null);
  const [gameOver, setGameOver] = useState(false);

  // Auto-advance state
  const [countdown, setCountdown] = useState<number>(0);

  // Hint drawer state
  const [hintDrawerOpen, setHintDrawerOpen] = useState(false);
  const [hintContent, setHintContent] = useState<{
    errorInsights?: string;
    hint?: string;
    firstStep?: string;
  }>({});

  // Check if exercise type was passed from lesson page
  useEffect(() => {
    const state = location.state as { exerciseType?: ExerciseType } | null;
    if (state?.exerciseType) {
      setExerciseType(state.exerciseType);
    }
  }, [location.state]);

  // Load initial exercise
  useEffect(() => {
    loadNextExercise();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Reload exercise when exercise type changes
  useEffect(() => {
    loadNextExercise();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [exerciseType]);

  // Auto-advance countdown timer
  useEffect(() => {
    if (countdown > 0) {
      const timer = setTimeout(() => {
        setCountdown(countdown - 1);
      }, 1000);
      return () => clearTimeout(timer);
    } else if (countdown === 0 && feedback === 'correct' && lastReward) {
      // Countdown finished, load next exercise
      handleNextExercise();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [countdown, feedback, lastReward]);

  const loadNextExercise = () => {
    const difficulty = selectDifficulty(CURRENT_MASTERY);
    const seed = Date.now() + Math.floor(Math.random() * 10000);

    let newExercise: Exercise;
    let solution: string;

    if (exerciseType === 'fractions') {
      // Randomly choose between addition and subtraction for fractions
      const operation = Math.random() > 0.5 ? 'add' : 'subtract';
      newExercise =
        operation === 'add'
          ? genAddFractions(seed, difficulty)
          : genSubtractFractions(seed, difficulty);
      solution = solveFraction(newExercise as FractionExercise);
    } else if (exerciseType === 'relative_numbers') {
      // Relative numbers: choose from all 4 operations
      const operations = [
        () => genAddRelativeNumbers(seed, difficulty),
        () => genSubtractRelativeNumbers(seed, difficulty),
        () => genMultiplyRelativeNumbers(seed, difficulty),
        () => genDivideRelativeNumbers(seed, difficulty),
      ];
      const randomOp = operations[Math.floor(Math.random() * operations.length)];
      newExercise = randomOp();
      solution = solveRelativeNumber(newExercise as RelativeNumberExercise);
    } else if (exerciseType === 'powers') {
      // Powers: choose from all operations
      const operations = [
        () => genEvaluatePower(seed, difficulty),
        () => genMultiplyPowers(seed, difficulty),
        () => genDividePowers(seed, difficulty),
        () => genPowerOfPower(seed, difficulty),
      ];
      const randomOp = operations[Math.floor(Math.random() * operations.length)];
      newExercise = randomOp();
      solution = solvePowerExercise(newExercise as PowerExercise).solution;
    } else if (exerciseType === 'equations') {
      // Equations: choose based on difficulty
      const operations = [
        () => genSimpleEquation(seed, difficulty),
        () => genTwoStepEquation(seed, difficulty),
        () => genVariableBothSides(seed, difficulty),
        () => genEquationWithParentheses(seed, difficulty),
      ];
      const randomOp = operations[Math.floor(Math.random() * operations.length)];
      newExercise = randomOp();
      solution = solveEquationExercise(newExercise as EquationExercise);
    } else if (exerciseType === 'proportions') {
      // Proportions: choose from various types
      const operations = [
        () => genDirectProportion(seed, difficulty),
        () => genPercentage(seed, difficulty),
        () => genScale(seed, difficulty),
        () => genSpeed(seed, difficulty),
      ];
      const randomOp = operations[Math.floor(Math.random() * operations.length)];
      newExercise = randomOp();
      solution = solveProportionExercise(newExercise as ProportionExercise);
    } else {
      // Literal calculation: choose from operations
      const operations = [
        () => genExpand(seed, difficulty),
        () => genFactor(seed, difficulty),
        () => genSimplify(seed, difficulty),
        () => genSubstitute(seed, difficulty),
      ];
      const randomOp = operations[Math.floor(Math.random() * operations.length)];
      newExercise = randomOp();
      solution = solveLiteralExercise(newExercise as LiteralExercise);
    }

    setExercise(newExercise);
    setCorrectSolution(solution);
    setFeedback(null);
    setStartTime(Date.now());
    setHintsUsed(0);
  };

  const handleValidate = async (userAnswer: string) => {
    if (!exercise || !correctSolution) return;

    const isCorrect = compareAnswers(userAnswer, correctSolution);
    setFeedback(isCorrect ? 'correct' : 'incorrect');

    if (isCorrect) {
      // Calculate time and rewards
      const timeTaken = Math.floor((Date.now() - startTime) / 1000);

      // Calculate bonuses from equipped items
      const bonuses = calculateEquippedBonuses(character.equippedItems, character.inventory);

      // Calculate base rewards (NOW WITH DIFFICULTY!)
      const streakDays = 7; // TODO: Get from Firebase
      const difficulty = exercise.difficulty; // Use the actual exercise difficulty
      const xpReward = calculateXPReward(timeTaken, hintsUsed, streakDays, difficulty);
      const coinsReward = calculateCoinsReward(timeTaken, hintsUsed, difficulty);

      // Apply bonuses from equipped items
      const finalXP = Math.floor(xpReward.total * bonuses.xpMultiplier);
      const finalCoins = Math.floor(coinsReward * bonuses.coinMultiplier);

      // Update character
      addXP(finalXP);
      addCoins(finalCoins);

      // Store reward for display (with breakdown)
      setLastReward({ xp: finalXP, coins: finalCoins });

      // Update score and count
      setScore((prev) => prev + finalCoins);
      setExerciseCount((prev) => prev + 1);

      // Start auto-advance countdown (3 seconds)
      setCountdown(3);
    } else {
      // Lose 1 HP on incorrect answer
      loseHP();

      // Check for Game Over
      if (character.hp <= 1) {
        // Will be 0 after loseHP()
        setGameOver(true);
      }

      // Show error explanation if AI calls remaining
      if (aiCallsRemaining > 0) {
        setAiCallsRemaining((prev) => prev - 1);

        // Simulate AI response (in production, call real AI API)
        let mockAiResponse;
        if (exercise.type === 'fraction') {
          const fracEx = exercise as FractionExercise;
          mockAiResponse = {
            errorInsights:
              "Il semble que tu aies fait une erreur de calcul lors de l'addition des numérateurs.",
            hint: "Pense à trouver d'abord un dénominateur commun avant d'additionner les fractions.",
            firstStep: `Commence par trouver le PPCM de ${fracEx.operands[0].denominator} et ${fracEx.operands[1].denominator}.`,
          };
        } else {
          mockAiResponse = {
            errorInsights: "Vérifie les signes et l'opération demandée.",
            hint: 'Rappelle-toi des règles sur les nombres relatifs.',
            firstStep: 'Identifie le signe de chaque nombre et applique la règle correspondante.',
          };
        }

        setHintContent(mockAiResponse);
        setHintDrawerOpen(true);
      }
    }
  };

  const handleRequestHint = () => {
    if (aiCallsRemaining > 0) {
      setAiCallsRemaining((prev) => prev - 1);
      setHintsUsed((prev) => prev + 1);

      // Simulate AI hint (in production, call real AI API)
      const mockHint = {
        hint: "Rappel : pour additionner des fractions, il faut qu'elles aient le même dénominateur.",
      };

      setHintContent(mockHint);
      setHintDrawerOpen(true);
    }
  };

  const handleNextExercise = () => {
    setLastReward(null); // Clear reward display
    setCountdown(0); // Reset countdown
    loadNextExercise();
  };

  const handleGameOverRestart = () => {
    // Reset HP to max
    resetHP();
    // Reset game over state
    setGameOver(false);
    // Reset other states
    setScore(0);
    setExerciseCount(0);
    setFeedback(null);
    setAiCallsRemaining(20);
    // Load new exercise
    loadNextExercise();
  };

  if (!exercise) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-indigo-600 border-t-transparent rounded-full animate-spin mx-auto mb-4" />
          <p className="text-gray-600">Chargement de l&apos;exercice...</p>
        </div>
      </div>
    );
  }

  const getSkillName = () => {
    if (exercise.type === 'fraction') {
      return exercise.skillId === 'fractions_addition'
        ? 'Addition de fractions'
        : 'Soustraction de fractions';
    } else if (exercise.type === 'relative_number') {
      const opNames: Record<string, string> = {
        relative_numbers_addition: 'Addition de nombres relatifs',
        relative_numbers_subtraction: 'Soustraction de nombres relatifs',
        relative_numbers_multiplication: 'Multiplication de nombres relatifs',
        relative_numbers_division: 'Division de nombres relatifs',
      };
      return opNames[exercise.skillId] || 'Nombres relatifs';
    } else if (exercise.type === 'power') {
      const opNames: Record<string, string> = {
        powers_evaluate: 'Calcul de puissances',
        powers_multiply: 'Multiplication de puissances',
        powers_divide: 'Division de puissances',
        powers_power_of_power: 'Puissance de puissance',
      };
      return opNames[exercise.skillId] || 'Puissances';
    } else if (exercise.type === 'equation') {
      const opNames: Record<string, string> = {
        equations_simple: 'Équations simples',
        equations_two_step: 'Équations à deux étapes',
        equations_variable_both_sides: 'Équations avec variables des deux côtés',
        equations_with_parentheses: 'Équations avec parenthèses',
      };
      return opNames[exercise.skillId] || 'Équations';
    } else if (exercise.type === 'proportion') {
      const opNames: Record<string, string> = {
        proportions_direct: 'Proportionnalité directe',
        proportions_percentage: 'Pourcentages',
        proportions_scale: 'Échelles',
        proportions_speed: 'Vitesse/Distance/Temps',
      };
      return opNames[exercise.skillId] || 'Proportionnalité';
    } else {
      const opNames: Record<string, string> = {
        literal_expand: 'Développement',
        literal_factor: 'Factorisation',
        literal_simplify: 'Simplification',
        literal_substitute: 'Substitution',
      };
      return opNames[exercise.skillId] || 'Calcul littéral';
    }
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Exercise Type Selector - RPG Style */}
      <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}>
        <RPGCard>
          <div className="p-4">
            <div className="flex items-center justify-center gap-4 flex-wrap">
              <div className="flex items-center gap-2">
                <Scroll className="text-yellow-400" size={20} />
                <span className="text-sm font-bold text-slate-200 uppercase tracking-wide">
                  Choisis ton défi :
                </span>
              </div>
              <div className="flex gap-3">
                <button
                  onClick={() => {
                    setExerciseType('fractions');
                    setScore(0);
                    setExerciseCount(0);
                  }}
                  className={`relative flex items-center gap-2 px-6 py-2.5 rounded-lg transition-all font-semibold uppercase tracking-wide text-sm ${
                    exerciseType === 'fractions'
                      ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg shadow-indigo-500/50 scale-105'
                      : 'bg-slate-700/50 text-slate-300 hover:text-white hover:bg-slate-600/70 hover:scale-105'
                  }`}
                >
                  {exerciseType === 'fractions' && (
                    <div className="absolute inset-0 bg-gradient-to-r from-indigo-400/20 to-purple-400/20 rounded-lg animate-pulse" />
                  )}
                  <Sparkles size={16} className="relative z-10" />
                  <span className="relative z-10">Fractions</span>
                </button>
                <button
                  onClick={() => {
                    setExerciseType('relative_numbers');
                    setScore(0);
                    setExerciseCount(0);
                  }}
                  className={`relative flex items-center gap-2 px-6 py-2.5 rounded-lg transition-all font-semibold uppercase tracking-wide text-sm ${
                    exerciseType === 'relative_numbers'
                      ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg shadow-indigo-500/50 scale-105'
                      : 'bg-slate-700/50 text-slate-300 hover:text-white hover:bg-slate-600/70 hover:scale-105'
                  }`}
                >
                  {exerciseType === 'relative_numbers' && (
                    <div className="absolute inset-0 bg-gradient-to-r from-indigo-400/20 to-purple-400/20 rounded-lg animate-pulse" />
                  )}
                  <Brain size={16} className="relative z-10" />
                  <span className="relative z-10">Nombres relatifs</span>
                </button>
                <button
                  onClick={() => {
                    setExerciseType('powers');
                    setScore(0);
                    setExerciseCount(0);
                  }}
                  className={`relative flex items-center gap-2 px-6 py-2.5 rounded-lg transition-all font-semibold uppercase tracking-wide text-sm ${
                    exerciseType === 'powers'
                      ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg shadow-indigo-500/50 scale-105'
                      : 'bg-slate-700/50 text-slate-300 hover:text-white hover:bg-slate-600/70 hover:scale-105'
                  }`}
                >
                  {exerciseType === 'powers' && (
                    <div className="absolute inset-0 bg-gradient-to-r from-indigo-400/20 to-purple-400/20 rounded-lg animate-pulse" />
                  )}
                  <Star size={16} className="relative z-10" />
                  <span className="relative z-10">Puissances</span>
                </button>
                <button
                  onClick={() => {
                    setExerciseType('equations');
                    setScore(0);
                    setExerciseCount(0);
                  }}
                  className={`relative flex items-center gap-2 px-6 py-2.5 rounded-lg transition-all font-semibold uppercase tracking-wide text-sm ${
                    exerciseType === 'equations'
                      ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg shadow-indigo-500/50 scale-105'
                      : 'bg-slate-700/50 text-slate-300 hover:text-white hover:bg-slate-600/70 hover:scale-105'
                  }`}
                >
                  {exerciseType === 'equations' && (
                    <div className="absolute inset-0 bg-gradient-to-r from-indigo-400/20 to-purple-400/20 rounded-lg animate-pulse" />
                  )}
                  <Calculator size={16} className="relative z-10" />
                  <span className="relative z-10">Équations</span>
                </button>
                <button
                  onClick={() => {
                    setExerciseType('proportions');
                    setScore(0);
                    setExerciseCount(0);
                  }}
                  className={`relative flex items-center gap-2 px-6 py-2.5 rounded-lg transition-all font-semibold uppercase tracking-wide text-sm ${
                    exerciseType === 'proportions'
                      ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg shadow-indigo-500/50 scale-105'
                      : 'bg-slate-700/50 text-slate-300 hover:text-white hover:bg-slate-600/70 hover:scale-105'
                  }`}
                >
                  {exerciseType === 'proportions' && (
                    <div className="absolute inset-0 bg-gradient-to-r from-indigo-400/20 to-purple-400/20 rounded-lg animate-pulse" />
                  )}
                  <Percent size={16} className="relative z-10" />
                  <span className="relative z-10">Proportionnalité</span>
                </button>
                <button
                  onClick={() => {
                    setExerciseType('literal');
                    setScore(0);
                    setExerciseCount(0);
                  }}
                  className={`relative flex items-center gap-2 px-6 py-2.5 rounded-lg transition-all font-semibold uppercase tracking-wide text-sm ${
                    exerciseType === 'literal'
                      ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg shadow-indigo-500/50 scale-105'
                      : 'bg-slate-700/50 text-slate-300 hover:text-white hover:bg-slate-600/70 hover:scale-105'
                  }`}
                >
                  {exerciseType === 'literal' && (
                    <div className="absolute inset-0 bg-gradient-to-r from-indigo-400/20 to-purple-400/20 rounded-lg animate-pulse" />
                  )}
                  <Variable size={16} className="relative z-10" />
                  <span className="relative z-10">Calcul littéral</span>
                </button>
              </div>
            </div>
          </div>
        </RPGCard>
      </motion.div>

      {/* Session Header - RPG Style */}
      <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}>
        <RPGCard variant="gold" glow>
          <div className="p-6">
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div className="flex items-center gap-4">
                <div className="relative">
                  <div className="absolute inset-0 bg-red-500 rounded-lg blur-md opacity-50" />
                  <div className="relative w-14 h-14 bg-gradient-to-br from-red-600 to-orange-700 rounded-lg flex items-center justify-center border-2 border-red-500">
                    <Swords className="text-red-100" size={28} />
                  </div>
                </div>
                <div>
                  <h1 className="text-2xl font-bold text-yellow-200 tracking-wide uppercase">
                    Quête en cours
                  </h1>
                  <p className="text-yellow-100/70 text-sm mt-1">
                    <span className="font-semibold">Compétence :</span> {getSkillName()}
                  </p>
                </div>
              </div>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-lg blur" />
                <div className="relative bg-gradient-to-br from-blue-900/80 to-cyan-900/80 border-2 border-blue-600 rounded-lg px-6 py-3">
                  <p className="text-xs text-blue-200 uppercase tracking-wide">Aide Magique</p>
                  <div className="flex items-center gap-2 mt-1">
                    <Sparkles className="text-cyan-400" size={20} />
                    <span className="text-2xl font-bold text-cyan-100">{aiCallsRemaining}/20</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </RPGCard>
      </motion.div>

      {/* Stats Bar - RPG Style */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <div className="grid grid-cols-3 gap-4">
          <RPGCard variant="gold">
            <div className="p-4 flex items-center gap-3">
              <div className="relative">
                <div className="absolute inset-0 bg-yellow-500 rounded-full blur opacity-40" />
                <div className="relative w-12 h-12 bg-gradient-to-br from-yellow-600 to-orange-600 rounded-full flex items-center justify-center border-2 border-yellow-400">
                  <Coins className="text-yellow-100" size={24} />
                </div>
              </div>
              <div>
                <p className="text-xs text-yellow-200/70 uppercase tracking-wide font-semibold">
                  Trésor
                </p>
                <motion.p
                  key={score}
                  initial={{ scale: 1.2, color: '#fbbf24' }}
                  animate={{ scale: 1, color: '#fef3c7' }}
                  className="text-2xl font-bold"
                >
                  {score}
                </motion.p>
              </div>
            </div>
          </RPGCard>

          <RPGCard variant="silver">
            <div className="p-4 flex items-center gap-3">
              <div className="relative">
                <div className="absolute inset-0 bg-indigo-500 rounded-full blur opacity-40" />
                <div className="relative w-12 h-12 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-full flex items-center justify-center border-2 border-indigo-400">
                  <Swords className="text-indigo-100" size={24} />
                </div>
              </div>
              <div>
                <p className="text-xs text-slate-300 uppercase tracking-wide font-semibold">
                  Combats
                </p>
                <motion.p
                  key={exerciseCount}
                  initial={{ scale: 1.2 }}
                  animate={{ scale: 1 }}
                  className="text-2xl font-bold text-white"
                >
                  {exerciseCount}
                </motion.p>
              </div>
            </div>
          </RPGCard>

          <RPGCard variant="bronze">
            <div className="p-4 flex items-center gap-3">
              <div className="relative">
                <div className="absolute inset-0 bg-red-500 rounded-full blur opacity-40" />
                <div className="relative w-12 h-12 bg-gradient-to-br from-red-600 to-orange-600 rounded-full flex items-center justify-center border-2 border-red-400">
                  <Zap className="text-red-100" size={24} />
                </div>
              </div>
              <div>
                <p className="text-xs text-orange-200/70 uppercase tracking-wide font-semibold">
                  Niveau
                </p>
                <p className="text-2xl font-bold text-orange-100">{exercise.difficulty}/10</p>
              </div>
            </div>
          </RPGCard>
        </div>
      </motion.div>

      {/* Simple Exercise Display */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2 }}
      >
        <SimpleExerciseDisplay
          question={exercise.question}
          onValidate={handleValidate}
          onRequestHint={handleRequestHint}
          feedback={feedback}
          disabled={feedback === 'correct'}
          hp={character.hp}
          maxHp={character.maxHp}
          difficulty={exercise.difficulty}
        />
      </motion.div>

      {/* Reward Display - RPG Style */}
      {feedback === 'correct' && lastReward && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          className="flex justify-center"
        >
          <div className="relative">
            {/* Epic glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-green-500/40 via-emerald-500/40 to-green-500/40 rounded-lg blur-2xl animate-pulse" />

            <RPGCard variant="gold" glow>
              <div className="p-8">
                <div className="text-center space-y-6">
                  {/* Victory header */}
                  <div className="space-y-2">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: 'spring', duration: 0.6 }}
                      className="flex justify-center"
                    >
                      <div className="relative">
                        <div className="absolute inset-0 bg-green-500 rounded-full blur-xl opacity-60 animate-pulse" />
                        <div className="relative w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center border-4 border-green-400">
                          <Trophy className="text-white" size={32} />
                        </div>
                      </div>
                    </motion.div>
                    <h3 className="text-3xl font-bold text-green-300 uppercase tracking-wide">
                      Victoire !
                    </h3>
                    <p className="text-green-100/70">Récompenses obtenues</p>
                  </div>

                  {/* Rewards */}
                  <div className="flex items-center justify-center gap-4">
                    <motion.div
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.2 }}
                      className="relative"
                    >
                      <div className="absolute inset-0 bg-purple-500/20 rounded-lg blur" />
                      <div className="relative bg-gradient-to-br from-purple-900/80 to-indigo-900/80 border-2 border-purple-500 rounded-lg px-6 py-4">
                        <div className="flex items-center gap-3">
                          <Sparkles className="text-purple-400" size={24} />
                          <div className="text-left">
                            <p className="text-xs text-purple-300 uppercase font-semibold">
                              Expérience
                            </p>
                            <p className="text-2xl font-bold text-purple-100">+{lastReward.xp}</p>
                          </div>
                        </div>
                      </div>
                    </motion.div>

                    <motion.div
                      initial={{ x: 20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.3 }}
                      className="relative"
                    >
                      <div className="absolute inset-0 bg-yellow-500/20 rounded-lg blur" />
                      <div className="relative bg-gradient-to-br from-yellow-900/80 to-orange-900/80 border-2 border-yellow-500 rounded-lg px-6 py-4">
                        <div className="flex items-center gap-3">
                          <Coins className="text-yellow-400" size={24} />
                          <div className="text-left">
                            <p className="text-xs text-yellow-300 uppercase font-semibold">Or</p>
                            <p className="text-2xl font-bold text-yellow-100">
                              +{lastReward.coins}
                            </p>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </div>

                  {/* Auto-advance countdown */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="mt-6"
                  >
                    <div className="flex items-center justify-center gap-3 text-green-300">
                      <Clock size={18} className="animate-pulse" />
                      <p className="text-sm font-semibold">
                        Prochain combat dans{' '}
                        <span className="text-xl font-bold text-green-200">{countdown}</span>s
                      </p>
                    </div>
                    <button
                      onClick={handleNextExercise}
                      className="mt-3 text-xs text-green-400 hover:text-green-300 underline transition-colors"
                    >
                      Passer maintenant
                    </button>
                  </motion.div>
                </div>
              </div>
            </RPGCard>
          </div>
        </motion.div>
      )}

      {/* Game Over Screen - RPG Style */}
      {gameOver && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
        >
          <motion.div
            initial={{ scale: 0.8, y: 50 }}
            animate={{ scale: 1, y: 0 }}
            transition={{ type: 'spring', duration: 0.6 }}
            className="relative max-w-lg w-full mx-4"
          >
            {/* Ominous glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-red-500/40 via-orange-500/40 to-red-500/40 rounded-lg blur-2xl animate-pulse" />

            <RPGCard>
              <div className="p-10">
                <div className="text-center space-y-6">
                  {/* Game Over header */}
                  <div className="space-y-3">
                    <motion.div
                      initial={{ scale: 0, rotate: -180 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{ type: 'spring', duration: 0.8, delay: 0.2 }}
                      className="flex justify-center"
                    >
                      <div className="relative">
                        <div className="absolute inset-0 bg-red-500 rounded-full blur-xl opacity-60 animate-pulse" />
                        <div className="relative w-20 h-20 bg-gradient-to-br from-red-600 to-orange-700 rounded-full flex items-center justify-center border-4 border-red-500">
                          <Skull className="text-white" size={40} />
                        </div>
                      </div>
                    </motion.div>
                    <motion.h2
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                      className="text-4xl font-bold text-red-400 uppercase tracking-wide"
                    >
                      Game Over
                    </motion.h2>
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.5 }}
                      className="text-slate-300 text-lg"
                    >
                      Tu as épuisé tous tes points de vie !
                    </motion.p>
                  </div>

                  {/* Stats Summary */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    className="bg-slate-800/50 border-2 border-slate-700 rounded-lg p-6 space-y-3"
                  >
                    <h3 className="text-yellow-300 font-bold uppercase tracking-wide mb-4">
                      Résumé de la quête
                    </h3>
                    <div className="flex justify-between items-center">
                      <span className="text-slate-300">Combats gagnés :</span>
                      <span className="text-white font-bold text-xl">{exerciseCount}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-slate-300">Or collecté :</span>
                      <div className="flex items-center gap-2">
                        <Coins className="text-yellow-400" size={20} />
                        <span className="text-yellow-100 font-bold text-xl">{score}</span>
                      </div>
                    </div>
                  </motion.div>

                  {/* Tip */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8 }}
                    className="bg-indigo-900/30 border border-indigo-600/50 rounded-lg p-4"
                  >
                    <p className="text-indigo-300 text-sm">
                      💡 Astuce : Visite la boutique pour acheter une Queue de Pikachu et augmenter
                      ton nombre de PV max !
                    </p>
                  </motion.div>

                  {/* Restart Button */}
                  <motion.button
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.9 }}
                    onClick={handleGameOverRestart}
                    className="relative group w-full px-8 py-4 bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-500 hover:to-orange-500 text-white rounded-lg font-bold text-lg uppercase tracking-wide transition-all shadow-lg hover:shadow-red-500/50 hover:scale-105 active:scale-95"
                  >
                    <div className="absolute inset-0 bg-gradient-to-t from-white/0 to-white/20 rounded-lg" />
                    <div className="relative flex items-center justify-center gap-3">
                      <RotateCcw size={24} />
                      <span>Recommencer</span>
                    </div>
                  </motion.button>
                </div>
              </div>
            </RPGCard>
          </motion.div>
        </motion.div>
      )}

      {/* Hint Drawer */}
      <HintDrawer
        open={hintDrawerOpen}
        onClose={() => setHintDrawerOpen(false)}
        errorInsights={hintContent.errorInsights}
        hint={hintContent.hint}
        firstStep={hintContent.firstStep}
      />

      {/* Debug Info (remove in production) */}
      {import.meta.env.DEV && (
        <RPGCard>
          <div className="p-4">
            <h3 className="text-sm font-bold text-yellow-400 uppercase mb-2">Debug Info</h3>
            <div className="text-xs font-mono text-slate-300 space-y-1">
              <p>Seed: {exercise.seed}</p>
              <p>Solution: {correctSolution}</p>
              <p>Difficulty: {exercise.difficulty}</p>
            </div>
          </div>
        </RPGCard>
      )}
    </div>
  );
}
