import { EquationExercise } from '../types';
import { compareAnswers } from '../checkers/compare';

/**
 * Solve an equation exercise and return step-by-step solution
 */
export function solveEquationExercise(exercise: EquationExercise): string {
  const { a, b, c, d, operation } = exercise;

  if (operation === 'simple') {
    if (a === 1) {
      // x + b = d => x = d - b
      const result = d - b;
      return `x = ${result}`;
    } else {
      // ax = d => x = d / a
      const result = d / a;
      return result % 1 === 0 ? `x = ${result}` : `x = ${d}/${a}`;
    }
  }

  if (operation === 'two_step') {
    // ax + b = d => x = (d - b) / a
    const numerator = d - b;
    const result = numerator / a;
    return result % 1 === 0 ? `x = ${result}` : `x = ${numerator}/${a}`;
  }

  if (operation === 'variable_both_sides') {
    // ax + b = cx + d => (a - c)x = d - b => x = (d - b) / (a - c)
    const numerator = d - b;
    const denominator = a - c;
    const result = numerator / denominator;
    return result % 1 === 0 ? `x = ${result}` : `x = ${numerator}/${denominator}`;
  }

  if (operation === 'with_parentheses') {
    // a(x + b) = d => x + b = d/a => x = d/a - b
    const quotient = d / a;
    const result = quotient - b;
    return result % 1 === 0 ? `x = ${result}` : `x = ${d}/${a} - ${b}`;
  }

  return 'x = 0';
}

/**
 * Check if the user's answer matches the correct solution for an equation
 */
export function checkEquationAnswer(
  userAnswer: string,
  exercise: EquationExercise
): boolean {
  const correctSolution = solveEquationExercise(exercise);
  return compareAnswers(userAnswer, correctSolution);
}

/**
 * Generate step-by-step solution explanation
 */
export function explainEquationSteps(exercise: EquationExercise): string[] {
  const { a, b, c, d, operation } = exercise;
  const steps: string[] = [];

  if (operation === 'simple') {
    if (a === 1) {
      steps.push(`Équation de départ : x ${b >= 0 ? '+' : ''} ${b} = ${d}`);
      steps.push(`Soustraire ${b} des deux côtés`);
      steps.push(`x = ${d} - ${b >= 0 ? b : `(${b})`}`);
      steps.push(`x = ${d - b}`);
    } else {
      steps.push(`Équation de départ : ${a}x = ${d}`);
      steps.push(`Diviser les deux côtés par ${a}`);
      const result = d / a;
      steps.push(result % 1 === 0 ? `x = ${result}` : `x = ${d}/${a}`);
    }
  }

  if (operation === 'two_step') {
    const bStr = b >= 0 ? `+ ${b}` : `- ${Math.abs(b)}`;
    steps.push(`Équation de départ : ${a}x ${bStr} = ${d}`);
    steps.push(`Soustraire ${b >= 0 ? b : `(${b})`} des deux côtés`);
    steps.push(`${a}x = ${d - b}`);
    steps.push(`Diviser les deux côtés par ${a}`);
    const result = (d - b) / a;
    steps.push(result % 1 === 0 ? `x = ${result}` : `x = ${d - b}/${a}`);
  }

  if (operation === 'variable_both_sides') {
    const bStr = b >= 0 ? `+ ${b}` : `- ${Math.abs(b)}`;
    const dStr = d >= 0 ? `+ ${d}` : `- ${Math.abs(d)}`;
    steps.push(`Équation de départ : ${a}x ${bStr} = ${c}x ${dStr}`);
    steps.push(`Soustraire ${c}x des deux côtés`);
    steps.push(`${a - c}x ${bStr} = ${d}`);
    steps.push(`Soustraire ${b >= 0 ? b : `(${b})`} des deux côtés`);
    steps.push(`${a - c}x = ${d - b}`);
    steps.push(`Diviser les deux côtés par ${a - c}`);
    const result = (d - b) / (a - c);
    steps.push(result % 1 === 0 ? `x = ${result}` : `x = ${d - b}/${a - c}`);
  }

  if (operation === 'with_parentheses') {
    const bStr = b >= 0 ? `+ ${b}` : `- ${Math.abs(b)}`;
    steps.push(`Équation de départ : ${a}(x ${bStr}) = ${d}`);
    steps.push(`Diviser les deux côtés par ${a}`);
    steps.push(`x ${bStr} = ${d / a}`);
    steps.push(`Soustraire ${b >= 0 ? b : `(${b})`} des deux côtés`);
    const result = d / a - b;
    steps.push(`x = ${result}`);
  }

  return steps;
}
