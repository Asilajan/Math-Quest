import { LiteralExercise } from '../types';
import { compareAnswers } from '../checkers/compare';

/**
 * Solve a literal calculation exercise
 */
export function solveLiteralExercise(exercise: LiteralExercise): string {
  return exercise.solution;
}

/**
 * Check if the user's answer matches the correct solution for a literal exercise
 */
export function checkLiteralAnswer(
  userAnswer: string,
  exercise: LiteralExercise
): boolean {
  const correctSolution = solveLiteralExercise(exercise);
  return compareAnswers(userAnswer, correctSolution);
}
