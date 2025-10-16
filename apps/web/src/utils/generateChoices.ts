/**
 * Generate multiple choice options for exercises
 * Returns the correct answer and 3 distractors (wrong answers)
 */

import { Exercise } from '@math-app/core';

export interface MultipleChoiceOptions {
  choices: string[];
  correctAnswer: string;
}

/**
 * Generate distractor answers based on the correct solution
 */
export function generateChoices(
  exercise: Exercise,
  correctSolution: string
): MultipleChoiceOptions {
  const distractors: string[] = [];

  if (exercise.type === 'fraction') {
    distractors.push(...generateFractionDistractors(correctSolution));
  } else if (exercise.type === 'relative_number') {
    distractors.push(...generateRelativeNumberDistractors(correctSolution));
  } else if (exercise.type === 'power') {
    distractors.push(...generatePowerDistractors(correctSolution));
  } else if (exercise.type === 'equation') {
    distractors.push(...generateEquationDistractors(correctSolution));
  } else if (exercise.type === 'proportion') {
    distractors.push(...generateProportionDistractors(correctSolution));
  } else if (exercise.type === 'literal') {
    distractors.push(...generateLiteralDistractors(correctSolution));
  }

  // Ensure we have exactly 3 distractors
  while (distractors.length < 3) {
    const randomOffset = Math.floor(Math.random() * 10) - 5;
    const numericValue = parseFloat(correctSolution);
    if (!isNaN(numericValue)) {
      const distractor = String(numericValue + randomOffset);
      if (!distractors.includes(distractor) && distractor !== correctSolution) {
        distractors.push(distractor);
      }
    } else {
      // For non-numeric answers, add variations
      distractors.push(correctSolution + ' + 1');
    }
  }

  // Take only first 3 distractors
  const finalDistractors = distractors.slice(0, 3);

  // Shuffle choices (correct answer + 3 distractors)
  const choices = [correctSolution, ...finalDistractors];
  shuffleArray(choices);

  return {
    choices,
    correctAnswer: correctSolution,
  };
}

function generateFractionDistractors(correctSolution: string): string[] {
  const distractors: string[] = [];

  // Parse fraction (e.g., "3/4")
  const match = correctSolution.match(/^(-?\d+)\/(\d+)$/);
  if (match) {
    const num = parseInt(match[1]);
    const den = parseInt(match[2]);

    // Common errors:
    // 1. Wrong numerator
    distractors.push(`${num + 1}/${den}`);
    distractors.push(`${num - 1}/${den}`);
    // 2. Wrong denominator
    distractors.push(`${num}/${den + 1}`);
    distractors.push(`${num}/${den - 1}`);
    // 3. Inverted fraction
    if (den !== num) {
      distractors.push(`${den}/${num}`);
    }
  } else if (!isNaN(parseInt(correctSolution))) {
    // Integer result
    const num = parseInt(correctSolution);
    distractors.push(String(num + 1));
    distractors.push(String(num - 1));
    distractors.push(String(num * 2));
  }

  return distractors.filter((d, index, self) => d !== correctSolution && self.indexOf(d) === index);
}

function generateRelativeNumberDistractors(correctSolution: string): string[] {
  const distractors: string[] = [];
  const num = parseInt(correctSolution);

  if (!isNaN(num)) {
    // Common errors with signs
    distractors.push(String(-num)); // Opposite sign
    distractors.push(String(num + 1));
    distractors.push(String(num - 1));
    distractors.push(String(num * 2));
    distractors.push(String(Math.abs(num))); // Absolute value
  }

  return distractors.filter((d, index, self) => d !== correctSolution && self.indexOf(d) === index);
}

function generatePowerDistractors(correctSolution: string): string[] {
  const distractors: string[] = [];
  const num = parseInt(correctSolution);

  if (!isNaN(num)) {
    // Common power errors
    distractors.push(String(num + 1));
    distractors.push(String(num - 1));
    distractors.push(String(num * 2));
    distractors.push(String(Math.floor(num / 2)));
    distractors.push(String(-num));
  } else {
    // For expression answers like "2^5"
    distractors.push(correctSolution.replace(/\^(\d+)/, (_, exp) => `^${parseInt(exp) + 1}`));
    distractors.push(correctSolution.replace(/\^(\d+)/, (_, exp) => `^${parseInt(exp) - 1}`));
  }

  return distractors.filter((d, index, self) => d !== correctSolution && self.indexOf(d) === index);
}

function generateEquationDistractors(correctSolution: string): string[] {
  const distractors: string[] = [];

  // Parse "x = value" format
  const match = correctSolution.match(/x\s*=\s*(-?\d+\.?\d*)/);
  if (match) {
    const value = parseFloat(match[1]);
    distractors.push(`x = ${value + 1}`);
    distractors.push(`x = ${value - 1}`);
    distractors.push(`x = ${-value}`);
    distractors.push(`x = ${value * 2}`);
    distractors.push(`x = ${value / 2}`);
  } else {
    // Fallback for other formats
    const numMatch = correctSolution.match(/-?\d+\.?\d*/);
    if (numMatch) {
      const num = parseFloat(numMatch[0]);
      distractors.push(correctSolution.replace(String(num), String(num + 1)));
      distractors.push(correctSolution.replace(String(num), String(num - 1)));
    }
  }

  return distractors.filter((d, index, self) => d !== correctSolution && self.indexOf(d) === index);
}

function generateProportionDistractors(correctSolution: string): string[] {
  const distractors: string[] = [];
  const num = parseFloat(correctSolution);

  if (!isNaN(num)) {
    // Common proportion errors
    distractors.push(String((num * 1.1).toFixed(2)));
    distractors.push(String((num * 0.9).toFixed(2)));
    distractors.push(String((num + 10).toFixed(2)));
    distractors.push(String((num - 10).toFixed(2)));
    distractors.push(String((num * 2).toFixed(2)));
  }

  return distractors.filter((d, index, self) => d !== correctSolution && self.indexOf(d) === index);
}

function generateLiteralDistractors(correctSolution: string): string[] {
  const distractors: string[] = [];

  // For literal expressions, create variations
  // This is tricky, so we'll create simple variations

  // Add/remove spaces
  distractors.push(correctSolution.replace(/\s+/g, ''));

  // Change signs
  if (correctSolution.includes('+')) {
    distractors.push(correctSolution.replace('+', '-'));
  }
  if (correctSolution.includes('-')) {
    distractors.push(correctSolution.replace('-', '+'));
  }

  // Change coefficient
  const coeffMatch = correctSolution.match(/(\d+)([a-z])/i);
  if (coeffMatch) {
    const coeff = parseInt(coeffMatch[1]);
    distractors.push(correctSolution.replace(coeffMatch[1], String(coeff + 1)));
    distractors.push(correctSolution.replace(coeffMatch[1], String(coeff - 1)));
  }

  return distractors.filter((d, index, self) => d !== correctSolution && self.indexOf(d) === index);
}

/**
 * Fisher-Yates shuffle algorithm
 */
function shuffleArray<T>(array: T[]): void {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}
