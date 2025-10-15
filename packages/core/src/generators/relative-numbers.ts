import { RelativeNumberExercise } from '../types';
import { SeededRNG } from '../rng';

/**
 * Generate addition of relative numbers
 * Difficulty progression:
 * 1-3: Small positive and negative numbers (-10 to 10)
 * 4-6: Larger numbers (-50 to 50), can have 3+ operands
 * 7-10: Very large numbers (-100 to 100), 3-4 operands
 */
export function genAddRelativeNumbers(
  seed: number,
  difficulty: number
): RelativeNumberExercise {
  const rng = new SeededRNG(seed);
  const skillId = 'relative_numbers_addition';

  // Determine range and number of operands based on difficulty
  let range: number;
  let numOperands: number;

  if (difficulty <= 3) {
    range = 10;
    numOperands = 2;
  } else if (difficulty <= 6) {
    range = 50;
    numOperands = rng.nextInt(2, 4); // 2 or 3 operands
  } else {
    range = 100;
    numOperands = rng.nextInt(3, 5); // 3 or 4 operands
  }

  // Generate operands
  const operands: number[] = [];
  for (let i = 0; i < numOperands; i++) {
    const num = rng.nextInt(-range, range + 1);
    // Avoid 0 for more interesting exercises
    if (num === 0 && rng.nextFloat() > 0.3) {
      operands.push(rng.nextInt(-range, range + 1));
    } else {
      operands.push(num);
    }
  }

  // Format question with proper signs
  const questionParts = operands.map((n, i) => {
    if (i === 0) {
      return n.toString();
    } else if (n >= 0) {
      return `+ ${n}`;
    } else {
      return `- ${Math.abs(n)}`;
    }
  });

  const question = questionParts.join(' ');
  const solution = operands.reduce((sum, n) => sum + n, 0).toString();

  return {
    id: `${skillId}_${seed}`,
    skillId,
    difficulty,
    seed,
    type: 'relative_number',
    operands,
    operation: 'add',
    question: `Calculer : ${question}`,
    solution,
  };
}

/**
 * Generate subtraction of relative numbers
 */
export function genSubtractRelativeNumbers(
  seed: number,
  difficulty: number
): RelativeNumberExercise {
  const rng = new SeededRNG(seed);
  const skillId = 'relative_numbers_subtraction';

  let range: number;
  let numOperands: number;

  if (difficulty <= 3) {
    range = 10;
    numOperands = 2;
  } else if (difficulty <= 6) {
    range = 50;
    numOperands = 2;
  } else {
    range = 100;
    numOperands = rng.nextInt(2, 4); // 2 or 3 operands
  }

  const operands: number[] = [];
  for (let i = 0; i < numOperands; i++) {
    operands.push(rng.nextInt(-range, range + 1));
  }

  // Format as subtraction
  const questionParts = operands.map((n, i) => {
    if (i === 0) {
      return n.toString();
    } else {
      // Subtraction: a - b
      if (n >= 0) {
        return `- (${n})`;
      } else {
        return `- (${n})`;
      }
    }
  });

  const question = questionParts.join(' ');
  const solution = operands.reduce((result, n, i) => {
    if (i === 0) return n;
    return result - n;
  }, 0).toString();

  return {
    id: `${skillId}_${seed}`,
    skillId,
    difficulty,
    seed,
    type: 'relative_number',
    operands,
    operation: 'subtract',
    question: `Calculer : ${question}`,
    solution,
  };
}

/**
 * Generate multiplication of relative numbers
 */
export function genMultiplyRelativeNumbers(
  seed: number,
  difficulty: number
): RelativeNumberExercise {
  const rng = new SeededRNG(seed);
  const skillId = 'relative_numbers_multiplication';

  let range: number;
  let numOperands: number;

  if (difficulty <= 3) {
    range = 10;
    numOperands = 2;
  } else if (difficulty <= 6) {
    range = 15;
    numOperands = rng.nextInt(2, 4); // 2 or 3 operands
  } else {
    range = 20;
    numOperands = rng.nextInt(3, 5); // 3 or 4 operands
  }

  const operands: number[] = [];
  for (let i = 0; i < numOperands; i++) {
    let num = rng.nextInt(-range, range + 1);
    // Avoid 0 and 1 for more interesting exercises
    while (num === 0 || num === 1) {
      num = rng.nextInt(-range, range + 1);
    }
    operands.push(num);
  }

  // Format question
  const questionParts = operands.map((n) => {
    if (n < 0) {
      return `(${n})`;
    }
    return n.toString();
  });

  const question = questionParts.join(' × ');
  const solution = operands.reduce((product, n) => product * n, 1).toString();

  return {
    id: `${skillId}_${seed}`,
    skillId,
    difficulty,
    seed,
    type: 'relative_number',
    operands,
    operation: 'multiply',
    question: `Calculer : ${question}`,
    solution,
  };
}

/**
 * Generate division of relative numbers
 * Always generates divisions that result in integers
 */
export function genDivideRelativeNumbers(
  seed: number,
  difficulty: number
): RelativeNumberExercise {
  const rng = new SeededRNG(seed);
  const skillId = 'relative_numbers_division';

  let range: number;

  if (difficulty <= 3) {
    range = 5;
  } else if (difficulty <= 6) {
    range = 10;
  } else {
    range = 15;
  }

  // Generate divisor first (non-zero, non-one)
  let divisor = rng.nextInt(-range, range + 1);
  while (divisor === 0 || divisor === 1 || divisor === -1) {
    divisor = rng.nextInt(-range, range + 1);
  }

  // Generate quotient
  const quotient = rng.nextInt(-range, range + 1);

  // Calculate dividend to ensure integer result
  const dividend = divisor * quotient;

  const operands = [dividend, divisor];

  // Format question
  const dividendStr = dividend < 0 ? `(${dividend})` : dividend.toString();
  const divisorStr = divisor < 0 ? `(${divisor})` : divisor.toString();

  const question = `${dividendStr} ÷ ${divisorStr}`;
  const solution = quotient.toString();

  return {
    id: `${skillId}_${seed}`,
    skillId,
    difficulty,
    seed,
    type: 'relative_number',
    operands,
    operation: 'divide',
    question: `Calculer : ${question}`,
    solution,
  };
}
