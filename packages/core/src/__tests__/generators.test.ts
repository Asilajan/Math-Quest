import { describe, it, expect } from 'vitest';
import { genAddFractions, genSubtractFractions, genMultiplyFractions } from '../generators/fractions';

describe('Fraction Generators', () => {
  describe('genAddFractions', () => {
    it('should generate reproducible exercises with the same seed', () => {
      const seed = 12345;
      const difficulty = 5;

      const exercise1 = genAddFractions(seed, difficulty);
      const exercise2 = genAddFractions(seed, difficulty);

      expect(exercise1).toEqual(exercise2);
    });

    it('should generate different exercises with different seeds', () => {
      const difficulty = 5;

      const exercise1 = genAddFractions(12345, difficulty);
      const exercise2 = genAddFractions(67890, difficulty);

      expect(exercise1.operands).not.toEqual(exercise2.operands);
    });

    it('should generate valid fractions (no zero denominators)', () => {
      const exercise = genAddFractions(12345, 5);

      expect(exercise.operands[0].denominator).not.toBe(0);
      expect(exercise.operands[1].denominator).not.toBe(0);
      expect(exercise.operands[0].numerator).toBeGreaterThan(0);
      expect(exercise.operands[1].numerator).toBeGreaterThan(0);
    });

    it('should generate easier exercises for low difficulty', () => {
      const exercise = genAddFractions(12345, 2);

      // Low difficulty should have smaller numbers and same denominators
      expect(exercise.operands[0].denominator).toBe(exercise.operands[1].denominator);
      expect(exercise.operands[0].denominator).toBeLessThanOrEqual(6);
    });

    it('should generate harder exercises for high difficulty', () => {
      const exercise = genAddFractions(12345, 9);

      // High difficulty can have larger numbers
      expect(
        exercise.operands[0].denominator > 6 || exercise.operands[1].denominator > 6
      ).toBe(true);
    });

    it('should clamp difficulty to valid range', () => {
      const exerciseNegative = genAddFractions(12345, -5);
      const exerciseTooHigh = genAddFractions(12345, 20);

      expect(exerciseNegative.difficulty).toBe(0);
      expect(exerciseTooHigh.difficulty).toBe(10);
    });
  });

  describe('genSubtractFractions', () => {
    it('should generate reproducible exercises', () => {
      const seed = 11111;
      const exercise1 = genSubtractFractions(seed, 5);
      const exercise2 = genSubtractFractions(seed, 5);

      expect(exercise1).toEqual(exercise2);
    });

    it('should ensure result is non-negative for easy exercises', () => {
      const exercise = genSubtractFractions(22222, 2);
      const [frac1, frac2] = exercise.operands;

      // For easy subtraction, first fraction should be larger
      expect(frac1.numerator).toBeGreaterThanOrEqual(frac2.numerator);
    });

    it('should have correct operation type', () => {
      const exercise = genSubtractFractions(12345, 5);
      expect(exercise.operation).toBe('subtract');
    });
  });

  describe('genMultiplyFractions', () => {
    it('should generate reproducible exercises', () => {
      const seed = 99999;
      const exercise1 = genMultiplyFractions(seed, 5);
      const exercise2 = genMultiplyFractions(seed, 5);

      expect(exercise1).toEqual(exercise2);
    });

    it('should generate valid multiplication exercises', () => {
      const exercise = genMultiplyFractions(12345, 5);

      expect(exercise.operation).toBe('multiply');
      expect(exercise.operands).toHaveLength(2);
      expect(exercise.question).toContain('×');
    });
  });
});
