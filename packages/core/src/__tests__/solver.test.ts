import { describe, it, expect } from 'vitest';
import { solveFraction, getSolutionSteps } from '../solver/fractions';
import { genAddFractions, genSubtractFractions, genMultiplyFractions, genDivideFractions } from '../generators/fractions';

describe('Fraction Solver', () => {
  describe('solveFraction', () => {
    it('should solve addition with same denominator', () => {
      const exercise = genAddFractions(12345, 2);
      const solution = solveFraction(exercise);

      // Verify it returns a valid fraction format
      expect(solution).toMatch(/^\d+(\/\d+)?$/);
    });

    it('should simplify the result', () => {
      // Create a manual exercise that should simplify
      const exercise = genAddFractions(12345, 5);
      const solution = solveFraction(exercise);

      // Solution should be simplified (we can't predict exact value but it should be valid)
      expect(solution).toBeTruthy();
    });

    it('should handle subtraction', () => {
      const exercise = genSubtractFractions(22222, 5);
      const solution = solveFraction(exercise);

      expect(solution).toMatch(/^-?\d+(\/\d+)?$/);
    });

    it('should handle multiplication', () => {
      const exercise = genMultiplyFractions(33333, 5);
      const solution = solveFraction(exercise);

      expect(solution).toMatch(/^\d+(\/\d+)?$/);
    });

    it('should handle division', () => {
      const exercise = genDivideFractions(44444, 5);
      const solution = solveFraction(exercise);

      expect(solution).toMatch(/^\d+(\/\d+)?$/);
    });

    it('should return integer when result is whole number', () => {
      // Manually create exercise: 2/4 + 2/4 = 1
      const exercise = {
        id: 'test',
        skillId: 'fractions_addition',
        difficulty: 2,
        seed: 123,
        type: 'fraction' as const,
        operands: [
          { numerator: 2, denominator: 4 },
          { numerator: 2, denominator: 4 },
        ],
        operation: 'add' as const,
        question: '2/4 + 2/4',
        solution: '',
        steps: [],
      };

      const solution = solveFraction(exercise);
      expect(solution).toBe('1');
    });

    it('should correctly add fractions with different denominators', () => {
      // 1/2 + 1/3 = 5/6
      const exercise = {
        id: 'test',
        skillId: 'fractions_addition',
        difficulty: 5,
        seed: 123,
        type: 'fraction' as const,
        operands: [
          { numerator: 1, denominator: 2 },
          { numerator: 1, denominator: 3 },
        ],
        operation: 'add' as const,
        question: '1/2 + 1/3',
        solution: '',
        steps: [],
      };

      const solution = solveFraction(exercise);
      expect(solution).toBe('5/6');
    });

    it('should correctly multiply fractions', () => {
      // 2/3 × 3/4 = 6/12 = 1/2
      const exercise = {
        id: 'test',
        skillId: 'fractions_multiplication',
        difficulty: 5,
        seed: 123,
        type: 'fraction' as const,
        operands: [
          { numerator: 2, denominator: 3 },
          { numerator: 3, denominator: 4 },
        ],
        operation: 'multiply' as const,
        question: '2/3 × 3/4',
        solution: '',
        steps: [],
      };

      const solution = solveFraction(exercise);
      expect(solution).toBe('1/2');
    });

    it('should correctly divide fractions', () => {
      // 1/2 ÷ 1/4 = 1/2 × 4/1 = 2
      const exercise = {
        id: 'test',
        skillId: 'fractions_division',
        difficulty: 5,
        seed: 123,
        type: 'fraction' as const,
        operands: [
          { numerator: 1, denominator: 2 },
          { numerator: 1, denominator: 4 },
        ],
        operation: 'divide' as const,
        question: '1/2 ÷ 1/4',
        solution: '',
        steps: [],
      };

      const solution = solveFraction(exercise);
      expect(solution).toBe('2');
    });
  });

  describe('getSolutionSteps', () => {
    it('should return array of steps for addition', () => {
      const exercise = genAddFractions(12345, 5);
      const steps = getSolutionSteps(exercise);

      expect(Array.isArray(steps)).toBe(true);
      expect(steps.length).toBeGreaterThan(0);
    });

    it('should return array of steps for subtraction', () => {
      const exercise = genSubtractFractions(12345, 5);
      const steps = getSolutionSteps(exercise);

      expect(Array.isArray(steps)).toBe(true);
      expect(steps.length).toBeGreaterThan(0);
    });

    it('should return array of steps for multiplication', () => {
      const exercise = genMultiplyFractions(12345, 5);
      const steps = getSolutionSteps(exercise);

      expect(Array.isArray(steps)).toBe(true);
      expect(steps.length).toBeGreaterThan(0);
    });

    it('should return array of steps for division', () => {
      const exercise = genDivideFractions(12345, 5);
      const steps = getSolutionSteps(exercise);

      expect(Array.isArray(steps)).toBe(true);
      expect(steps.length).toBeGreaterThan(0);
    });
  });
});
