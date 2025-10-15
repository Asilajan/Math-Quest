import { describe, it, expect } from 'vitest';
import {
  genAddRelativeNumbers,
  genSubtractRelativeNumbers,
  genMultiplyRelativeNumbers,
  genDivideRelativeNumbers,
} from '../generators/relative-numbers';
import { solveRelativeNumber, generateSteps } from '../solver/relative-numbers';

describe('Relative Numbers Generators', () => {
  describe('genAddRelativeNumbers', () => {
    it('should generate addition exercises', () => {
      const exercise = genAddRelativeNumbers(12345, 3);
      expect(exercise.type).toBe('relative_number');
      expect(exercise.operation).toBe('add');
      expect(exercise.operands.length).toBeGreaterThan(0);
      expect(exercise.question).toBeTruthy();
      expect(exercise.solution).toBeTruthy();
    });

    it('should generate consistent results with same seed', () => {
      const ex1 = genAddRelativeNumbers(999, 5);
      const ex2 = genAddRelativeNumbers(999, 5);
      expect(ex1.question).toBe(ex2.question);
      expect(ex1.solution).toBe(ex2.solution);
    });

    it('should generate different results with different seeds', () => {
      const ex1 = genAddRelativeNumbers(111, 5);
      const ex2 = genAddRelativeNumbers(222, 5);
      expect(ex1.question).not.toBe(ex2.question);
    });
  });

  describe('genSubtractRelativeNumbers', () => {
    it('should generate subtraction exercises', () => {
      const exercise = genSubtractRelativeNumbers(12345, 5);
      expect(exercise.type).toBe('relative_number');
      expect(exercise.operation).toBe('subtract');
      expect(exercise.operands.length).toBeGreaterThan(0);
    });
  });

  describe('genMultiplyRelativeNumbers', () => {
    it('should generate multiplication exercises', () => {
      const exercise = genMultiplyRelativeNumbers(12345, 4);
      expect(exercise.type).toBe('relative_number');
      expect(exercise.operation).toBe('multiply');
      expect(exercise.operands.length).toBeGreaterThan(0);
      // Should not contain 0 or 1
      expect(exercise.operands.every((n) => n !== 0 && n !== 1)).toBe(true);
    });
  });

  describe('genDivideRelativeNumbers', () => {
    it('should generate division exercises', () => {
      const exercise = genDivideRelativeNumbers(12345, 6);
      expect(exercise.type).toBe('relative_number');
      expect(exercise.operation).toBe('divide');
      expect(exercise.operands.length).toBe(2);
      expect(exercise.operands[1]).not.toBe(0); // No division by zero
    });

    it('should always result in integer division', () => {
      for (let i = 0; i < 20; i++) {
        const exercise = genDivideRelativeNumbers(1000 + i, 5);
        const solution = solveRelativeNumber(exercise);
        expect(Number.isInteger(Number(solution))).toBe(true);
      }
    });
  });
});

describe('Relative Numbers Solver', () => {
  it('should solve addition correctly', () => {
    const exercise = genAddRelativeNumbers(42, 5);
    const solution = solveRelativeNumber(exercise);
    const expected = exercise.operands.reduce((sum, n) => sum + n, 0).toString();
    expect(solution).toBe(expected);
  });

  it('should solve subtraction correctly', () => {
    const exercise = genSubtractRelativeNumbers(42, 5);
    const solution = solveRelativeNumber(exercise);
    const expected = exercise.operands.reduce((result, n, i) => {
      if (i === 0) return n;
      return result - n;
    }, 0).toString();
    expect(solution).toBe(expected);
  });

  it('should solve multiplication correctly', () => {
    const exercise = genMultiplyRelativeNumbers(42, 5);
    const solution = solveRelativeNumber(exercise);
    const expected = exercise.operands.reduce((product, n) => product * n, 1).toString();
    expect(solution).toBe(expected);
  });

  it('should solve division correctly', () => {
    const exercise = genDivideRelativeNumbers(42, 5);
    const solution = solveRelativeNumber(exercise);
    const expected = (exercise.operands[0] / exercise.operands[1]).toString();
    expect(solution).toBe(expected);
  });

  it('should generate steps for all operations', () => {
    const addEx = genAddRelativeNumbers(1, 5);
    const addSteps = generateSteps(addEx);
    expect(addSteps.length).toBeGreaterThan(0);

    const subEx = genSubtractRelativeNumbers(2, 5);
    const subSteps = generateSteps(subEx);
    expect(subSteps.length).toBeGreaterThan(0);

    const mulEx = genMultiplyRelativeNumbers(3, 5);
    const mulSteps = generateSteps(mulEx);
    expect(mulSteps.length).toBeGreaterThan(0);

    const divEx = genDivideRelativeNumbers(4, 5);
    const divSteps = generateSteps(divEx);
    expect(divSteps.length).toBeGreaterThan(0);
  });
});
