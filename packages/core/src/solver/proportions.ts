import { ProportionExercise } from '../types';
import { compareAnswers } from '../checkers/compare';

/**
 * Solve a proportion exercise
 */
export function solveProportionExercise(exercise: ProportionExercise): string {
  return exercise.solution;
}

/**
 * Check if the user's answer matches the correct solution for a proportion
 */
export function checkProportionAnswer(
  userAnswer: string,
  exercise: ProportionExercise
): boolean {
  const correctSolution = solveProportionExercise(exercise);
  return compareAnswers(userAnswer, correctSolution);
}
