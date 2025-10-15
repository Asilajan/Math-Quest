import { FractionExercise } from '../types';

/**
 * Calculate the greatest common divisor (GCD) using Euclidean algorithm
 */
function gcd(a: number, b: number): number {
  a = Math.abs(a);
  b = Math.abs(b);
  while (b !== 0) {
    const temp = b;
    b = a % b;
    a = temp;
  }
  return a;
}

/**
 * Calculate the least common multiple (LCM)
 */
function lcm(a: number, b: number): number {
  return Math.abs(a * b) / gcd(a, b);
}

/**
 * Simplify a fraction to its lowest terms
 */
function simplifyFraction(numerator: number, denominator: number): { num: number; den: number } {
  if (denominator === 0) {
    throw new Error('Division by zero');
  }

  const divisor = gcd(numerator, denominator);
  let num = numerator / divisor;
  let den = denominator / divisor;

  // Keep denominator positive
  if (den < 0) {
    num = -num;
    den = -den;
  }

  return { num, den };
}

/**
 * Format fraction as string (simplified)
 * Returns "a/b" for fractions, "c" for integers
 */
function formatFraction(numerator: number, denominator: number): string {
  const simplified = simplifyFraction(numerator, denominator);

  if (simplified.den === 1) {
    return simplified.num.toString();
  }

  return `${simplified.num}/${simplified.den}`;
}

/**
 * Solve a fraction exercise and return the solution as a simplified string
 */
export function solveFraction(exercise: FractionExercise): string {
  const [frac1, frac2] = exercise.operands;

  let resultNum: number;
  let resultDen: number;

  switch (exercise.operation) {
    case 'add': {
      // Find common denominator
      const commonDen = lcm(frac1.denominator, frac2.denominator);
      const num1 = frac1.numerator * (commonDen / frac1.denominator);
      const num2 = frac2.numerator * (commonDen / frac2.denominator);
      resultNum = num1 + num2;
      resultDen = commonDen;
      break;
    }

    case 'subtract': {
      const commonDen = lcm(frac1.denominator, frac2.denominator);
      const num1 = frac1.numerator * (commonDen / frac1.denominator);
      const num2 = frac2.numerator * (commonDen / frac2.denominator);
      resultNum = num1 - num2;
      resultDen = commonDen;
      break;
    }

    case 'multiply': {
      resultNum = frac1.numerator * frac2.numerator;
      resultDen = frac1.denominator * frac2.denominator;
      break;
    }

    case 'divide': {
      // Division is multiplication by reciprocal
      resultNum = frac1.numerator * frac2.denominator;
      resultDen = frac1.denominator * frac2.numerator;
      break;
    }

    default:
      throw new Error(`Unknown operation: ${exercise.operation}`);
  }

  return formatFraction(resultNum, resultDen);
}

/**
 * Get detailed solution steps for a fraction exercise
 */
export function getSolutionSteps(exercise: FractionExercise): string[] {
  const [frac1, frac2] = exercise.operands;
  const steps: string[] = [];

  switch (exercise.operation) {
    case 'add':
    case 'subtract': {
      const op = exercise.operation === 'add' ? '+' : '-';
      if (frac1.denominator === frac2.denominator) {
        steps.push(`Les dénominateurs sont identiques (${frac1.denominator})`);
        steps.push(
          `On ${exercise.operation === 'add' ? 'additionne' : 'soustrait'} les numérateurs: ${frac1.numerator} ${op} ${frac2.numerator}`
        );
      } else {
        const commonDen = lcm(frac1.denominator, frac2.denominator);
        steps.push(`Trouver le dénominateur commun: PPCM(${frac1.denominator}, ${frac2.denominator}) = ${commonDen}`);
        const mult1 = commonDen / frac1.denominator;
        const mult2 = commonDen / frac2.denominator;
        steps.push(
          `Convertir: ${frac1.numerator}/${frac1.denominator} = ${frac1.numerator * mult1}/${commonDen}, ${frac2.numerator}/${frac2.denominator} = ${frac2.numerator * mult2}/${commonDen}`
        );
        steps.push(
          `${frac1.numerator * mult1}/${commonDen} ${op} ${frac2.numerator * mult2}/${commonDen} = ${frac1.numerator * mult1 + (exercise.operation === 'add' ? 1 : -1) * frac2.numerator * mult2}/${commonDen}`
        );
      }
      steps.push(`Simplifier le résultat`);
      break;
    }

    case 'multiply': {
      steps.push(`Multiplier les numérateurs: ${frac1.numerator} × ${frac2.numerator}`);
      steps.push(`Multiplier les dénominateurs: ${frac1.denominator} × ${frac2.denominator}`);
      steps.push(`Simplifier le résultat`);
      break;
    }

    case 'divide': {
      steps.push(`Inverser la seconde fraction: ${frac2.numerator}/${frac2.denominator} → ${frac2.denominator}/${frac2.numerator}`);
      steps.push(`Multiplier: ${frac1.numerator}/${frac1.denominator} × ${frac2.denominator}/${frac2.numerator}`);
      steps.push(`Simplifier le résultat`);
      break;
    }
  }

  return steps;
}
