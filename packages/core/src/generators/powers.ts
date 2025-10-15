import { PowerExercise } from '../types';
import { SeededRNG } from '../rng';

/**
 * Generate power evaluation exercise: calculate a^n
 * Difficulty progression:
 * 1-3: Small bases (2-5) and small exponents (2-4)
 * 4-6: Larger bases (2-10) and exponents (2-5)
 * 7-10: Powers of 10 and negative exponents
 */
export function genEvaluatePower(
  seed: number,
  difficulty: number
): PowerExercise {
  const rng = new SeededRNG(seed);
  const skillId = 'powers_evaluate';

  let base: number;
  let exponent: number;

  if (difficulty <= 3) {
    // Easy: small bases and exponents
    base = rng.nextInt(2, 6); // 2, 3, 4, 5
    exponent = rng.nextInt(2, 5); // 2, 3, 4
  } else if (difficulty <= 6) {
    // Medium: larger bases
    base = rng.nextInt(2, 11); // 2-10
    exponent = rng.nextInt(2, 6); // 2-5
  } else {
    // Hard: powers of 10 or negative exponents
    if (rng.nextFloat() < 0.5) {
      // Powers of 10
      base = 10;
      exponent = rng.nextInt(2, 8); // 10^2 to 10^7
    } else {
      // Negative exponents (with base 10 or small numbers)
      base = rng.nextFloat() < 0.7 ? 10 : rng.nextInt(2, 6);
      exponent = -rng.nextInt(1, 5); // -1 to -4
    }
  }

  const question = `Calculer : ${base}^${exponent}`;
  const solution = Math.pow(base, exponent).toString();

  return {
    id: `${skillId}_${seed}`,
    skillId,
    difficulty,
    seed,
    type: 'power',
    operation: 'evaluate',
    base,
    exponent,
    question,
    solution,
  };
}

/**
 * Generate power multiplication exercise: a^n × a^m = a^(n+m)
 * Same base, add exponents
 */
export function genMultiplyPowers(
  seed: number,
  difficulty: number
): PowerExercise {
  const rng = new SeededRNG(seed);
  const skillId = 'powers_multiply';

  let base: number;
  let exp1: number;
  let exp2: number;

  if (difficulty <= 3) {
    // Easy: small exponents, base 10 or small numbers
    base = rng.nextFloat() < 0.6 ? 10 : rng.nextInt(2, 6);
    exp1 = rng.nextInt(2, 6);
    exp2 = rng.nextInt(2, 6);
  } else if (difficulty <= 6) {
    // Medium: mix of positive exponents
    base = rng.nextFloat() < 0.5 ? 10 : rng.nextInt(2, 8);
    exp1 = rng.nextInt(2, 8);
    exp2 = rng.nextInt(2, 8);
  } else {
    // Hard: negative exponents possible
    base = rng.nextFloat() < 0.5 ? 10 : rng.nextInt(2, 6);
    exp1 = rng.nextInt(-5, 8);
    exp2 = rng.nextInt(-5, 8);
  }

  const terms = [
    { base, exponent: exp1 },
    { base, exponent: exp2 },
  ];

  const formatExp = (exp: number) => (exp < 0 ? `(${exp})` : exp.toString());
  const question = `Simplifier : ${base}^${formatExp(exp1)} × ${base}^${formatExp(exp2)}`;
  const resultExp = exp1 + exp2;
  const solution = `${base}^${resultExp}`;

  return {
    id: `${skillId}_${seed}`,
    skillId,
    difficulty,
    seed,
    type: 'power',
    operation: 'multiply',
    terms,
    question,
    solution,
  };
}

/**
 * Generate power division exercise: a^n ÷ a^m = a^(n-m)
 * Same base, subtract exponents
 */
export function genDividePowers(
  seed: number,
  difficulty: number
): PowerExercise {
  const rng = new SeededRNG(seed);
  const skillId = 'powers_divide';

  let base: number;
  let exp1: number;
  let exp2: number;

  if (difficulty <= 3) {
    // Easy: positive exponents, exp1 > exp2
    base = rng.nextFloat() < 0.6 ? 10 : rng.nextInt(2, 6);
    exp1 = rng.nextInt(4, 10);
    exp2 = rng.nextInt(2, exp1);
  } else if (difficulty <= 6) {
    // Medium: any positive exponents
    base = rng.nextFloat() < 0.5 ? 10 : rng.nextInt(2, 8);
    exp1 = rng.nextInt(2, 12);
    exp2 = rng.nextInt(2, 12);
  } else {
    // Hard: negative exponents possible
    base = rng.nextFloat() < 0.5 ? 10 : rng.nextInt(2, 6);
    exp1 = rng.nextInt(-5, 12);
    exp2 = rng.nextInt(-5, 12);
  }

  const terms = [
    { base, exponent: exp1 },
    { base, exponent: exp2 },
  ];

  const formatExp = (exp: number) => (exp < 0 ? `(${exp})` : exp.toString());
  const question = `Simplifier : ${base}^${formatExp(exp1)} ÷ ${base}^${formatExp(exp2)}`;
  const resultExp = exp1 - exp2;
  const solution = `${base}^${resultExp}`;

  return {
    id: `${skillId}_${seed}`,
    skillId,
    difficulty,
    seed,
    type: 'power',
    operation: 'divide',
    terms,
    question,
    solution,
  };
}

/**
 * Generate power of power exercise: (a^n)^m = a^(n×m)
 * Multiply exponents
 */
export function genPowerOfPower(
  seed: number,
  difficulty: number
): PowerExercise {
  const rng = new SeededRNG(seed);
  const skillId = 'powers_power_of_power';

  let base: number;
  let exp1: number;
  let exp2: number;

  if (difficulty <= 3) {
    // Easy: small exponents
    base = rng.nextFloat() < 0.6 ? 10 : rng.nextInt(2, 6);
    exp1 = rng.nextInt(2, 5);
    exp2 = rng.nextInt(2, 4);
  } else if (difficulty <= 6) {
    // Medium: larger exponents
    base = rng.nextFloat() < 0.5 ? 10 : rng.nextInt(2, 8);
    exp1 = rng.nextInt(2, 6);
    exp2 = rng.nextInt(2, 5);
  } else {
    // Hard: negative exponents possible
    base = rng.nextFloat() < 0.5 ? 10 : rng.nextInt(2, 6);
    exp1 = rng.nextInt(-4, 6);
    exp2 = rng.nextInt(-3, 5);
  }

  const formatExp = (exp: number) => (exp < 0 ? `(${exp})` : exp.toString());
  const question = `Simplifier : (${base}^${formatExp(exp1)})^${formatExp(exp2)}`;
  const resultExp = exp1 * exp2;
  const solution = `${base}^${resultExp}`;

  return {
    id: `${skillId}_${seed}`,
    skillId,
    difficulty,
    seed,
    type: 'power',
    operation: 'power_of_power',
    base,
    exponent: exp1,
    terms: [{ base, exponent: exp1 }, { base, exponent: exp2 }],
    question,
    solution,
  };
}

/**
 * Generate a mixed power simplification exercise
 * Combines multiple operations
 */
export function genSimplifyPowers(
  seed: number,
  difficulty: number
): PowerExercise {
  const rng = new SeededRNG(seed);

  // Choose a random operation type for simplification
  const opType = rng.nextInt(0, 3);

  if (opType === 0) {
    return genMultiplyPowers(seed, difficulty);
  } else if (opType === 1) {
    return genDividePowers(seed, difficulty);
  } else {
    return genPowerOfPower(seed, difficulty);
  }
}
