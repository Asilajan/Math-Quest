import { describe, it, expect } from 'vitest';
import {
  genEvaluatePower,
  genMultiplyPowers,
  genDividePowers,
  genPowerOfPower,
  genSimplifyPowers,
} from '../generators/powers';
import { solvePowerExercise, checkPowerAnswer } from '../solver/powers';

describe('Power Generators', () => {
  describe('genEvaluatePower', () => {
    it('should generate a basic power evaluation exercise', () => {
      const exercise = genEvaluatePower(123, 2);
      expect(exercise.type).toBe('power');
      expect(exercise.operation).toBe('evaluate');
      expect(exercise.base).toBeDefined();
      expect(exercise.exponent).toBeDefined();
      expect(exercise.question).toContain('Calculer');
      expect(exercise.question).toContain('^');
    });

    it('should use small numbers for low difficulty', () => {
      const exercise = genEvaluatePower(456, 1);
      expect(exercise.base).toBeGreaterThanOrEqual(2);
      expect(exercise.base).toBeLessThanOrEqual(5);
      expect(exercise.exponent).toBeGreaterThanOrEqual(2);
      expect(exercise.exponent).toBeLessThanOrEqual(4);
    });

    it('should include powers of 10 for high difficulty', () => {
      // Test multiple seeds to find a power of 10
      let foundPowerOf10 = false;
      for (let seed = 700; seed < 750; seed++) {
        const exercise = genEvaluatePower(seed, 8);
        if (exercise.base === 10) {
          foundPowerOf10 = true;
          expect(exercise.exponent).toBeGreaterThan(0);
          break;
        }
      }
      expect(foundPowerOf10).toBe(true);
    });

    it('should be deterministic with same seed', () => {
      const ex1 = genEvaluatePower(789, 5);
      const ex2 = genEvaluatePower(789, 5);
      expect(ex1.base).toBe(ex2.base);
      expect(ex1.exponent).toBe(ex2.exponent);
      expect(ex1.question).toBe(ex2.question);
    });
  });

  describe('genMultiplyPowers', () => {
    it('should generate a power multiplication exercise', () => {
      const exercise = genMultiplyPowers(234, 3);
      expect(exercise.type).toBe('power');
      expect(exercise.operation).toBe('multiply');
      expect(exercise.terms).toBeDefined();
      expect(exercise.terms?.length).toBe(2);
      expect(exercise.question).toContain('×');
      expect(exercise.question).toContain('Simplifier');
    });

    it('should have the same base for both terms', () => {
      const exercise = genMultiplyPowers(567, 5);
      expect(exercise.terms).toBeDefined();
      if (exercise.terms) {
        expect(exercise.terms[0].base).toBe(exercise.terms[1].base);
      }
    });

    it('should produce correct solution format', () => {
      const exercise = genMultiplyPowers(890, 4);
      expect(exercise.solution).toContain('^');
      // Solution should be base^(exp1+exp2)
      if (exercise.terms) {
        const expectedBase = exercise.terms[0].base;
        expect(exercise.solution).toContain(expectedBase.toString());
      }
    });
  });

  describe('genDividePowers', () => {
    it('should generate a power division exercise', () => {
      const exercise = genDividePowers(345, 3);
      expect(exercise.type).toBe('power');
      expect(exercise.operation).toBe('divide');
      expect(exercise.terms).toBeDefined();
      expect(exercise.terms?.length).toBe(2);
      expect(exercise.question).toContain('÷');
      expect(exercise.question).toContain('Simplifier');
    });

    it('should have the same base for both terms', () => {
      const exercise = genDividePowers(678, 6);
      expect(exercise.terms).toBeDefined();
      if (exercise.terms) {
        expect(exercise.terms[0].base).toBe(exercise.terms[1].base);
      }
    });
  });

  describe('genPowerOfPower', () => {
    it('should generate a power of power exercise', () => {
      const exercise = genPowerOfPower(456, 4);
      expect(exercise.type).toBe('power');
      expect(exercise.operation).toBe('power_of_power');
      expect(exercise.terms).toBeDefined();
      expect(exercise.question).toContain('Simplifier');
      expect(exercise.question).toMatch(/\(/); // Should have parentheses
    });

    it('should produce correct solution format', () => {
      const exercise = genPowerOfPower(789, 5);
      expect(exercise.solution).toContain('^');
      // Solution should be base^(exp1*exp2)
      if (exercise.terms) {
        const expectedBase = exercise.terms[0].base;
        expect(exercise.solution).toContain(expectedBase.toString());
      }
    });
  });

  describe('genSimplifyPowers', () => {
    it('should generate one of the power operations', () => {
      const exercise = genSimplifyPowers(111, 5);
      expect(exercise.type).toBe('power');
      expect(['multiply', 'divide', 'power_of_power']).toContain(exercise.operation);
    });
  });
});

describe('Power Solver', () => {
  describe('solvePowerExercise - evaluate', () => {
    it('should correctly solve 2^3', () => {
      const exercise = genEvaluatePower(1, 1);
      // Manually create a simple exercise to control values
      const simpleEx = {
        ...exercise,
        base: 2,
        exponent: 3,
        question: 'Calculer : 2^3',
        solution: '8',
      };
      const result = solvePowerExercise(simpleEx);
      expect(result.solution).toBe('8');
      expect(result.steps.length).toBeGreaterThan(0);
      expect(result.numericValue).toBe(8);
    });

    it('should handle power of 0', () => {
      const exercise = genEvaluatePower(1, 1);
      const zeroEx = {
        ...exercise,
        base: 5,
        exponent: 0,
        question: 'Calculer : 5^0',
        solution: '1',
      };
      const result = solvePowerExercise(zeroEx);
      expect(result.solution).toBe('1');
      expect(result.steps).toContainEqual(expect.stringContaining('exposant 0'));
    });

    it('should handle negative exponents', () => {
      const exercise = genEvaluatePower(1, 1);
      const negEx = {
        ...exercise,
        base: 2,
        exponent: -2,
        question: 'Calculer : 2^-2',
        solution: '0.25',
      };
      const result = solvePowerExercise(negEx);
      expect(parseFloat(result.solution)).toBe(0.25);
      expect(result.steps).toContainEqual(expect.stringContaining('négatif'));
    });
  });

  describe('solvePowerExercise - multiply', () => {
    it('should correctly solve power multiplication', () => {
      const exercise = genMultiplyPowers(1, 1);
      const mulEx = {
        ...exercise,
        terms: [
          { base: 3, exponent: 4 },
          { base: 3, exponent: 2 },
        ],
        question: 'Simplifier : 3^4 × 3^2',
        solution: '3^6',
      };
      const result = solvePowerExercise(mulEx);
      expect(result.solution).toBe('3^6');
      expect(result.steps).toContainEqual(expect.stringContaining('produit'));
      expect(result.steps).toContainEqual(expect.stringContaining('additionne'));
    });
  });

  describe('solvePowerExercise - divide', () => {
    it('should correctly solve power division', () => {
      const exercise = genDividePowers(1, 1);
      const divEx = {
        ...exercise,
        terms: [
          { base: 5, exponent: 7 },
          { base: 5, exponent: 3 },
        ],
        question: 'Simplifier : 5^7 ÷ 5^3',
        solution: '5^4',
      };
      const result = solvePowerExercise(divEx);
      expect(result.solution).toBe('5^4');
      expect(result.steps).toContainEqual(expect.stringContaining('quotient'));
      expect(result.steps).toContainEqual(expect.stringContaining('soustrait'));
    });
  });

  describe('solvePowerExercise - power of power', () => {
    it('should correctly solve power of power', () => {
      const exercise = genPowerOfPower(1, 1);
      const powEx = {
        ...exercise,
        terms: [
          { base: 2, exponent: 3 },
          { base: 2, exponent: 4 },
        ],
        question: 'Simplifier : (2^3)^4',
        solution: '2^12',
      };
      const result = solvePowerExercise(powEx);
      expect(result.solution).toBe('2^12');
      expect(result.steps).toContainEqual(expect.stringContaining('puissance de puissance'));
      expect(result.steps).toContainEqual(expect.stringContaining('multiplie'));
    });
  });

  describe('checkPowerAnswer', () => {
    it('should accept correct power notation', () => {
      const exercise = genMultiplyPowers(1, 1);
      exercise.solution = '10^5';
      expect(checkPowerAnswer('10^5', exercise)).toBe(true);
      expect(checkPowerAnswer(' 10^5 ', exercise)).toBe(true);
    });

    it('should accept correct numeric answers for evaluate', () => {
      const exercise = genEvaluatePower(1, 1);
      exercise.operation = 'evaluate';
      exercise.solution = '8';
      expect(checkPowerAnswer('8', exercise)).toBe(true);
      expect(checkPowerAnswer('8.0', exercise)).toBe(true);
    });

    it('should reject incorrect answers', () => {
      const exercise = genMultiplyPowers(1, 1);
      exercise.solution = '10^5';
      expect(checkPowerAnswer('10^6', exercise)).toBe(false);
      expect(checkPowerAnswer('9^5', exercise)).toBe(false);
      expect(checkPowerAnswer('wrong', exercise)).toBe(false);
    });

    it('should handle negative exponents in answers', () => {
      const exercise = genDividePowers(1, 8);
      exercise.solution = '10^-2';
      expect(checkPowerAnswer('10^-2', exercise)).toBe(true);
    });
  });
});
