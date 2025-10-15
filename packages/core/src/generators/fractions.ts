import { FractionExercise } from '../types';
import { createRNG, randomInt } from '../rng';

/**
 * Generate addition fraction exercise based on seed and difficulty
 * Difficulty 0-3: small numbers, same denominator
 * Difficulty 4-7: different denominators, simplification sometimes needed
 * Difficulty 8-10: larger numbers, complex simplification
 */
export function genAddFractions(seed: number, difficulty: number): FractionExercise {
  const rng = createRNG(seed);
  const clampedDifficulty = Math.max(0, Math.min(10, difficulty));

  let num1, den1, num2, den2;

  if (clampedDifficulty <= 3) {
    // Easy: same denominator, small numbers
    den1 = den2 = randomInt(rng, 2, 6);
    num1 = randomInt(rng, 1, den1 - 1);
    num2 = randomInt(rng, 1, den1 - num1);
  } else if (clampedDifficulty <= 7) {
    // Medium: different denominators
    den1 = randomInt(rng, 2, 8);
    den2 = randomInt(rng, 2, 8);
    num1 = randomInt(rng, 1, den1);
    num2 = randomInt(rng, 1, den2);
  } else {
    // Hard: larger numbers
    den1 = randomInt(rng, 3, 12);
    den2 = randomInt(rng, 3, 12);
    num1 = randomInt(rng, 1, den1);
    num2 = randomInt(rng, 1, den2);
  }

  const operands = [
    { numerator: num1, denominator: den1 },
    { numerator: num2, denominator: den2 },
  ];

  const question = `${num1}/${den1} + ${num2}/${den2}`;
  const itemId = `fraction_add_${seed}`;

  return {
    id: itemId,
    skillId: 'fractions_addition',
    difficulty: clampedDifficulty,
    seed,
    type: 'fraction',
    operands,
    operation: 'add',
    question,
    solution: '', // Will be computed by solver
    steps: [],
  };
}

/**
 * Generate subtraction fraction exercise
 */
export function genSubtractFractions(seed: number, difficulty: number): FractionExercise {
  const rng = createRNG(seed);
  const clampedDifficulty = Math.max(0, Math.min(10, difficulty));

  let num1, den1, num2, den2;

  if (clampedDifficulty <= 3) {
    // Easy: same denominator, result is positive
    den1 = den2 = randomInt(rng, 2, 6);
    num1 = randomInt(rng, 2, den1);
    num2 = randomInt(rng, 1, num1 - 1);
  } else if (clampedDifficulty <= 7) {
    // Medium: different denominators
    den1 = randomInt(rng, 2, 8);
    den2 = randomInt(rng, 2, 8);
    num1 = randomInt(rng, 1, den1);
    num2 = randomInt(rng, 1, den2);
    // Ensure result is positive by potentially swapping
    if (num1 * den2 < num2 * den1) {
      [num1, den1, num2, den2] = [num2, den2, num1, den1];
    }
  } else {
    // Hard: larger numbers
    den1 = randomInt(rng, 3, 12);
    den2 = randomInt(rng, 3, 12);
    num1 = randomInt(rng, 1, den1);
    num2 = randomInt(rng, 1, den2);
    if (num1 * den2 < num2 * den1) {
      [num1, den1, num2, den2] = [num2, den2, num1, den1];
    }
  }

  const operands = [
    { numerator: num1, denominator: den1 },
    { numerator: num2, denominator: den2 },
  ];

  const question = `${num1}/${den1} - ${num2}/${den2}`;
  const itemId = `fraction_subtract_${seed}`;

  return {
    id: itemId,
    skillId: 'fractions_subtraction',
    difficulty: clampedDifficulty,
    seed,
    type: 'fraction',
    operands,
    operation: 'subtract',
    question,
    solution: '', // Will be computed by solver
    steps: [],
  };
}

/**
 * Generate multiplication fraction exercise
 */
export function genMultiplyFractions(seed: number, difficulty: number): FractionExercise {
  const rng = createRNG(seed);
  const clampedDifficulty = Math.max(0, Math.min(10, difficulty));

  let num1, den1, num2, den2;

  if (clampedDifficulty <= 3) {
    den1 = randomInt(rng, 2, 5);
    den2 = randomInt(rng, 2, 5);
    num1 = randomInt(rng, 1, 4);
    num2 = randomInt(rng, 1, 4);
  } else if (clampedDifficulty <= 7) {
    den1 = randomInt(rng, 2, 8);
    den2 = randomInt(rng, 2, 8);
    num1 = randomInt(rng, 1, 7);
    num2 = randomInt(rng, 1, 7);
  } else {
    den1 = randomInt(rng, 2, 12);
    den2 = randomInt(rng, 2, 12);
    num1 = randomInt(rng, 1, 10);
    num2 = randomInt(rng, 1, 10);
  }

  const operands = [
    { numerator: num1, denominator: den1 },
    { numerator: num2, denominator: den2 },
  ];

  const question = `${num1}/${den1} × ${num2}/${den2}`;
  const itemId = `fraction_multiply_${seed}`;

  return {
    id: itemId,
    skillId: 'fractions_multiplication',
    difficulty: clampedDifficulty,
    seed,
    type: 'fraction',
    operands,
    operation: 'multiply',
    question,
    solution: '',
    steps: [],
  };
}

/**
 * Generate division fraction exercise
 */
export function genDivideFractions(seed: number, difficulty: number): FractionExercise {
  const rng = createRNG(seed);
  const clampedDifficulty = Math.max(0, Math.min(10, difficulty));

  let num1, den1, num2, den2;

  if (clampedDifficulty <= 3) {
    den1 = randomInt(rng, 2, 5);
    den2 = randomInt(rng, 2, 5);
    num1 = randomInt(rng, 1, 4);
    num2 = randomInt(rng, 1, 4);
  } else if (clampedDifficulty <= 7) {
    den1 = randomInt(rng, 2, 8);
    den2 = randomInt(rng, 2, 8);
    num1 = randomInt(rng, 1, 7);
    num2 = randomInt(rng, 1, 4); // Keep divisor smaller
  } else {
    den1 = randomInt(rng, 2, 12);
    den2 = randomInt(rng, 2, 12);
    num1 = randomInt(rng, 1, 10);
    num2 = randomInt(rng, 1, 7);
  }

  const operands = [
    { numerator: num1, denominator: den1 },
    { numerator: num2, denominator: den2 },
  ];

  const question = `${num1}/${den1} ÷ ${num2}/${den2}`;
  const itemId = `fraction_divide_${seed}`;

  return {
    id: itemId,
    skillId: 'fractions_division',
    difficulty: clampedDifficulty,
    seed,
    type: 'fraction',
    operands,
    operation: 'divide',
    question,
    solution: '',
    steps: [],
  };
}
