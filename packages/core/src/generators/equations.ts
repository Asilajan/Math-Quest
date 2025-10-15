import { EquationExercise } from '../types';
import { SeededRNG } from '../rng';

/**
 * Generate simple equation: x + a = b or ax = b
 * Difficulty 1-3
 */
export function genSimpleEquation(
  seed: number,
  difficulty: number
): EquationExercise {
  const rng = new SeededRNG(seed);
  const skillId = 'equations_simple';

  let a = 1;
  let b: number;
  let c = 0;
  let d: number;
  let question: string;

  if (difficulty <= 2) {
    // Very simple: x + a = b
    b = rng.nextInt(-10, 11);
    d = rng.nextInt(-10, 11);
    question = `Résoudre : x ${b >= 0 ? '+' : ''} ${b} = ${d}`;
  } else {
    // Simple multiplication: ax = b
    a = rng.nextInt(2, 11);
    d = a * rng.nextInt(-10, 11);
    question = `Résoudre : ${a}x = ${d}`;
    b = 0;
  }

  const solution = `x = ${d - b}`;

  return {
    id: `${skillId}_${seed}`,
    skillId,
    difficulty,
    seed,
    type: 'equation',
    operation: 'simple',
    a,
    b,
    c,
    d,
    question,
    solution,
  };
}

/**
 * Generate two-step equation: ax + b = c
 * Difficulty 4-6
 */
export function genTwoStepEquation(
  seed: number,
  difficulty: number
): EquationExercise {
  const rng = new SeededRNG(seed);
  const skillId = 'equations_two_step';

  const a = rng.nextInt(2, 11);
  const b = rng.nextInt(-20, 21);
  const x = rng.nextInt(-10, 11); // Solution
  const d = a * x + b; // Calculate right side

  const bStr = b >= 0 ? `+ ${b}` : `- ${Math.abs(b)}`;
  const question = `Résoudre : ${a}x ${bStr} = ${d}`;
  const solution = `x = ${x}`;

  return {
    id: `${skillId}_${seed}`,
    skillId,
    difficulty,
    seed,
    type: 'equation',
    operation: 'two_step',
    a,
    b,
    c: 0,
    d,
    question,
    solution,
  };
}

/**
 * Generate equation with variable on both sides: ax + b = cx + d
 * Difficulty 7-9
 */
export function genVariableBothSides(
  seed: number,
  difficulty: number
): EquationExercise {
  const rng = new SeededRNG(seed);
  const skillId = 'equations_variable_both_sides';

  const a = rng.nextInt(2, 11);
  const c = rng.nextInt(2, 11);

  // Make sure a ≠ c to have a unique solution
  if (a === c) {
    return genVariableBothSides(seed + 1, difficulty);
  }

  const b = rng.nextInt(-20, 21);
  const d = rng.nextInt(-20, 21);

  const bStr = b >= 0 ? `+ ${b}` : `- ${Math.abs(b)}`;
  const dStr = d >= 0 ? `+ ${d}` : `- ${Math.abs(d)}`;

  const question = `Résoudre : ${a}x ${bStr} = ${c}x ${dStr}`;

  // Solution: (d - b) / (a - c)
  const numerator = d - b;
  const denominator = a - c;

  let solution: string;
  if (numerator % denominator === 0) {
    solution = `x = ${numerator / denominator}`;
  } else {
    solution = `x = ${numerator}/${denominator}`;
  }

  return {
    id: `${skillId}_${seed}`,
    skillId,
    difficulty,
    seed,
    type: 'equation',
    operation: 'variable_both_sides',
    a,
    b,
    c,
    d,
    question,
    solution,
  };
}

/**
 * Generate equation with parentheses: a(x + b) = c
 * Difficulty 8-10
 */
export function genEquationWithParentheses(
  seed: number,
  difficulty: number
): EquationExercise {
  const rng = new SeededRNG(seed);
  const skillId = 'equations_with_parentheses';

  const a = rng.nextInt(2, 8);
  const b = rng.nextInt(-10, 11);
  const x = rng.nextInt(-10, 11); // Solution
  const d = a * (x + b); // Calculate right side

  const bStr = b >= 0 ? `+ ${b}` : `- ${Math.abs(b)}`;
  const question = `Résoudre : ${a}(x ${bStr}) = ${d}`;
  const solution = `x = ${x}`;

  return {
    id: `${skillId}_${seed}`,
    skillId,
    difficulty,
    seed,
    type: 'equation',
    operation: 'with_parentheses',
    a,
    b,
    c: 0,
    d,
    question,
    solution,
  };
}
