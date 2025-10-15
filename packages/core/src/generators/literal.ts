import { LiteralExercise } from '../types';
import { SeededRNG } from '../rng';

/**
 * Generate expansion: a(bx + c)
 * Difficulty 1-4
 */
export function genExpand(
  seed: number,
  difficulty: number
): LiteralExercise {
  const rng = new SeededRNG(seed);
  const skillId = 'literal_expand';

  const a = rng.nextInt(2, 11);
  const b = rng.nextInt(1, 11);
  const c = rng.nextInt(-10, 11);

  const cStr = c >= 0 ? `+ ${c}` : `- ${Math.abs(c)}`;
  const expression = `${a}(${b}x ${cStr})`;

  const resultCoef = a * b;
  const resultConst = a * c;
  const resultStr = resultConst >= 0
    ? `${resultCoef}x + ${resultConst}`
    : `${resultCoef}x - ${Math.abs(resultConst)}`;

  const question = `Développer : ${expression}`;
  const solution = resultStr;

  return {
    id: `${skillId}_${seed}`,
    skillId,
    difficulty,
    seed,
    type: 'literal',
    operation: 'expand',
    expression,
    question,
    solution,
  };
}

/**
 * Generate factorization: ax + ab = a(x + b)
 * Difficulty 5-7
 */
export function genFactor(
  seed: number,
  difficulty: number
): LiteralExercise {
  const rng = new SeededRNG(seed);
  const skillId = 'literal_factor';

  const a = rng.nextInt(2, 11);
  const b = rng.nextInt(1, 11);
  const c = rng.nextInt(-10, 11);

  // Generate: ax + ac = a(x + c)
  const coef = a * b;
  const constant = a * c;

  const constStr = constant >= 0 ? `+ ${constant}` : `- ${Math.abs(constant)}`;
  const expression = `${coef}x ${constStr}`;

  const cStr = c >= 0 ? `+ ${c}` : `- ${Math.abs(c)}`;
  const factored = `${a}(${b}x ${cStr})`;

  const question = `Factoriser : ${expression}`;
  const solution = factored;

  return {
    id: `${skillId}_${seed}`,
    skillId,
    difficulty,
    seed,
    type: 'literal',
    operation: 'factor',
    expression,
    question,
    solution,
  };
}

/**
 * Generate simplification: combine like terms
 * Difficulty 3-6
 */
export function genSimplify(
  seed: number,
  difficulty: number
): LiteralExercise {
  const rng = new SeededRNG(seed);
  const skillId = 'literal_simplify';

  const a = rng.nextInt(1, 11);
  const b = rng.nextInt(1, 11);
  const c = rng.nextInt(-10, 11);
  const d = rng.nextInt(-10, 11);

  const bStr = b >= 0 ? `+ ${b}x` : `- ${Math.abs(b)}x`;
  const cStr = c >= 0 ? `+ ${c}` : `- ${Math.abs(c)}`;
  const dStr = d >= 0 ? `+ ${d}` : `- ${Math.abs(d)}`;

  const expression = `${a}x ${bStr} ${cStr} ${dStr}`;

  const xCoef = a + b;
  const constant = c + d;
  const constResultStr = constant >= 0 ? `+ ${constant}` : `- ${Math.abs(constant)}`;

  const solution = constant === 0 ? `${xCoef}x` : `${xCoef}x ${constResultStr}`;
  const question = `Simplifier : ${expression}`;

  return {
    id: `${skillId}_${seed}`,
    skillId,
    difficulty,
    seed,
    type: 'literal',
    operation: 'simplify',
    expression,
    question,
    solution,
  };
}

/**
 * Generate substitution: calculate expression value for x = n
 * Difficulty 2-5
 */
export function genSubstitute(
  seed: number,
  difficulty: number
): LiteralExercise {
  const rng = new SeededRNG(seed);
  const skillId = 'literal_substitute';

  const a = rng.nextInt(1, 11);
  const b = rng.nextInt(-10, 11);
  const x = rng.nextInt(-5, 6);

  const bStr = b >= 0 ? `+ ${b}` : `- ${Math.abs(b)}`;
  const expression = `${a}x ${bStr}`;

  const result = a * x + b;

  const question = `Calculer ${expression} pour x = ${x}`;
  const solution = result.toString();

  return {
    id: `${skillId}_${seed}`,
    skillId,
    difficulty,
    seed,
    type: 'literal',
    operation: 'substitute',
    expression,
    variable: 'x',
    value: x,
    question,
    solution,
  };
}
