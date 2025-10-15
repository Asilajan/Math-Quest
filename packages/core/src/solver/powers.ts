import { PowerExercise } from '../types';

/**
 * Solve a power exercise and provide step-by-step solution
 */
export function solvePowerExercise(exercise: PowerExercise): {
  solution: string;
  steps: string[];
  numericValue?: number;
} {
  const steps: string[] = [];

  switch (exercise.operation) {
    case 'evaluate':
      return solveEvaluate(exercise, steps);
    case 'multiply':
      return solveMultiply(exercise, steps);
    case 'divide':
      return solveDivide(exercise, steps);
    case 'power_of_power':
      return solvePowerOfPower(exercise, steps);
    case 'simplify':
      // Simplify uses the same logic as the specific operations
      if (exercise.terms && exercise.terms.length === 2) {
        if (exercise.question.includes('×')) {
          return solveMultiply(exercise, steps);
        } else if (exercise.question.includes('÷')) {
          return solveDivide(exercise, steps);
        }
      }
      return { solution: exercise.solution, steps };
    default:
      return { solution: exercise.solution, steps };
  }
}

function solveEvaluate(
  exercise: PowerExercise,
  steps: string[]
): { solution: string; steps: string[]; numericValue: number } {
  const { base, exponent } = exercise;

  if (base === undefined || exponent === undefined) {
    return { solution: exercise.solution, steps, numericValue: 0 };
  }

  if (exponent === 0) {
    steps.push(`Toute puissance d'exposant 0 est égale à 1`);
    steps.push(`${base}^0 = 1`);
    return { solution: '1', steps, numericValue: 1 };
  }

  if (exponent === 1) {
    steps.push(`Toute puissance d'exposant 1 est égale à la base`);
    steps.push(`${base}^1 = ${base}`);
    return { solution: base.toString(), steps, numericValue: base };
  }

  if (exponent < 0) {
    steps.push(`Pour un exposant négatif : a^(-n) = 1/a^n`);
    const positiveExp = -exponent;
    const positiveResult = Math.pow(base, positiveExp);
    steps.push(`${base}^${exponent} = 1/${base}^${positiveExp} = 1/${positiveResult}`);
    const result = Math.pow(base, exponent);
    return { solution: result.toString(), steps, numericValue: result };
  }

  // Positive exponent
  if (base === 10) {
    steps.push(`Puissance de 10 : 10^${exponent} = 1 suivi de ${exponent} zéros`);
  } else if (exponent === 2) {
    steps.push(`${base}^2 = ${base} × ${base}`);
  } else if (exponent === 3) {
    steps.push(`${base}^3 = ${base} × ${base} × ${base}`);
  } else {
    steps.push(`${base}^${exponent} = ${base} multiplié par lui-même ${exponent} fois`);
  }

  const result = Math.pow(base, exponent);
  steps.push(`${base}^${exponent} = ${result}`);

  return { solution: result.toString(), steps, numericValue: result };
}

function solveMultiply(
  exercise: PowerExercise,
  steps: string[]
): { solution: string; steps: string[] } {
  if (!exercise.terms || exercise.terms.length !== 2) {
    return { solution: exercise.solution, steps };
  }

  const [term1, term2] = exercise.terms;
  const base = term1.base;
  const exp1 = term1.exponent;
  const exp2 = term2.exponent;

  steps.push(`Règle du produit de puissances : a^n × a^m = a^(n+m)`);
  steps.push(`Même base (${base}), on additionne les exposants`);

  const formatExp = (exp: number) => (exp < 0 ? `(${exp})` : exp.toString());

  if (exp1 < 0 || exp2 < 0) {
    steps.push(`${base}^${formatExp(exp1)} × ${base}^${formatExp(exp2)} = ${base}^(${exp1} + ${exp2})`);
  } else {
    steps.push(`${base}^${exp1} × ${base}^${exp2} = ${base}^(${exp1} + ${exp2})`);
  }

  const resultExp = exp1 + exp2;
  steps.push(`${base}^${exp1} × ${base}^${exp2} = ${base}^${resultExp}`);

  return { solution: `${base}^${resultExp}`, steps };
}

function solveDivide(
  exercise: PowerExercise,
  steps: string[]
): { solution: string; steps: string[] } {
  if (!exercise.terms || exercise.terms.length !== 2) {
    return { solution: exercise.solution, steps };
  }

  const [term1, term2] = exercise.terms;
  const base = term1.base;
  const exp1 = term1.exponent;
  const exp2 = term2.exponent;

  steps.push(`Règle du quotient de puissances : a^n ÷ a^m = a^(n-m)`);
  steps.push(`Même base (${base}), on soustrait les exposants`);

  const formatExp = (exp: number) => (exp < 0 ? `(${exp})` : exp.toString());

  if (exp1 < 0 || exp2 < 0) {
    steps.push(`${base}^${formatExp(exp1)} ÷ ${base}^${formatExp(exp2)} = ${base}^(${exp1} - ${exp2})`);
  } else {
    steps.push(`${base}^${exp1} ÷ ${base}^${exp2} = ${base}^(${exp1} - ${exp2})`);
  }

  const resultExp = exp1 - exp2;

  if (exp2 < 0) {
    steps.push(`${base}^${exp1} ÷ ${base}^(${exp2}) = ${base}^(${exp1} - (${exp2})) = ${base}^${resultExp}`);
  } else {
    steps.push(`${base}^${exp1} ÷ ${base}^${exp2} = ${base}^${resultExp}`);
  }

  return { solution: `${base}^${resultExp}`, steps };
}

function solvePowerOfPower(
  exercise: PowerExercise,
  steps: string[]
): { solution: string; steps: string[] } {
  if (!exercise.terms || exercise.terms.length !== 2) {
    return { solution: exercise.solution, steps };
  }

  const [term1, term2] = exercise.terms;
  const base = term1.base;
  const exp1 = term1.exponent;
  const exp2 = term2.exponent;

  steps.push(`Règle de la puissance de puissance : (a^n)^m = a^(n×m)`);
  steps.push(`On multiplie les exposants`);

  const formatExp = (exp: number) => (exp < 0 ? `(${exp})` : exp.toString());

  steps.push(`(${base}^${formatExp(exp1)})^${formatExp(exp2)} = ${base}^(${exp1} × ${exp2})`);

  const resultExp = exp1 * exp2;
  steps.push(`(${base}^${formatExp(exp1)})^${formatExp(exp2)} = ${base}^${resultExp}`);

  return { solution: `${base}^${resultExp}`, steps };
}

/**
 * Check if a user's answer matches the correct solution for a power exercise
 * Handles various formats: numeric values, power notation, fractions
 */
export function checkPowerAnswer(
  userAnswer: string,
  exercise: PowerExercise
): boolean {
  const cleaned = userAnswer.trim().toLowerCase().replace(/\s+/g, '');
  const solutionCleaned = exercise.solution.trim().toLowerCase().replace(/\s+/g, '');

  // Direct match
  if (cleaned === solutionCleaned) {
    return true;
  }

  // Try to parse as power notation: base^exponent
  const powerMatch = cleaned.match(/^(\d+)\^(-?\d+)$/);
  const solutionMatch = solutionCleaned.match(/^(\d+)\^(-?\d+)$/);

  if (powerMatch && solutionMatch) {
    const userBase = parseInt(powerMatch[1]);
    const userExp = parseInt(powerMatch[2]);
    const solBase = parseInt(solutionMatch[1]);
    const solExp = parseInt(solutionMatch[2]);

    return userBase === solBase && userExp === solExp;
  }

  // For evaluate exercises, check numeric value
  if (exercise.operation === 'evaluate') {
    try {
      const userNum = parseFloat(cleaned);
      const solNum = parseFloat(solutionCleaned);

      // Allow small floating point differences
      return Math.abs(userNum - solNum) < 0.0001;
    } catch {
      return false;
    }
  }

  return false;
}
