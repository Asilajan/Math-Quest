import { RelativeNumberExercise } from '../types';

/**
 * Solve a relative number exercise
 * Returns the solution as a string
 */
export function solveRelativeNumber(exercise: RelativeNumberExercise): string {
  const { operands, operation } = exercise;

  switch (operation) {
    case 'add':
      return operands.reduce((sum, n) => sum + n, 0).toString();

    case 'subtract':
      return operands.reduce((result, n, i) => {
        if (i === 0) return n;
        return result - n;
      }, 0).toString();

    case 'multiply':
      return operands.reduce((product, n) => product * n, 1).toString();

    case 'divide':
      if (operands.length !== 2) {
        throw new Error('Division requires exactly 2 operands');
      }
      if (operands[1] === 0) {
        throw new Error('Division by zero');
      }
      const result = operands[0] / operands[1];
      // Check if result is an integer
      if (Math.floor(result) !== result) {
        throw new Error('Division does not result in an integer');
      }
      return result.toString();

    default:
      throw new Error(`Unknown operation: ${operation}`);
  }
}

/**
 * Generate step-by-step solution for relative numbers
 */
export function generateSteps(exercise: RelativeNumberExercise): string[] {
  const { operands, operation } = exercise;
  const steps: string[] = [];

  switch (operation) {
    case 'add': {
      steps.push('Addition de nombres relatifs :');

      // Count positive and negative numbers
      const positives = operands.filter((n) => n > 0);
      const negatives = operands.filter((n) => n < 0);

      if (positives.length > 0) {
        const sumPos = positives.reduce((s, n) => s + n, 0);
        steps.push(`Somme des positifs : ${positives.join(' + ')} = ${sumPos}`);
      }

      if (negatives.length > 0) {
        const sumNeg = negatives.reduce((s, n) => s + n, 0);
        steps.push(
          `Somme des négatifs : ${negatives.map((n) => `(${n})`).join(' + ')} = ${sumNeg}`
        );
      }

      const total = operands.reduce((s, n) => s + n, 0);
      if (positives.length > 0 && negatives.length > 0) {
        const sumPos = positives.reduce((s, n) => s + n, 0);
        const sumNeg = negatives.reduce((s, n) => s + n, 0);
        steps.push(`Résultat : ${sumPos} + (${sumNeg}) = ${total}`);
      } else {
        steps.push(`Résultat : ${total}`);
      }
      break;
    }

    case 'subtract': {
      steps.push('Soustraction de nombres relatifs :');
      steps.push('Soustraire un nombre = Ajouter son opposé');

      let current = operands[0];
      steps.push(`Départ : ${current}`);

      for (let i = 1; i < operands.length; i++) {
        const prev = current;
        current = current - operands[i];
        steps.push(`${prev} - (${operands[i]}) = ${prev} + (${-operands[i]}) = ${current}`);
      }
      break;
    }

    case 'multiply': {
      steps.push('Multiplication de nombres relatifs :');
      steps.push('Règle des signes : + × + = +, + × - = -, - × + = -, - × - = +');

      // Count negative numbers
      const negCount = operands.filter((n) => n < 0).length;
      const signResult = negCount % 2 === 0 ? '+' : '-';

      steps.push(
        `Nombre de facteurs négatifs : ${negCount} → Le résultat est ${signResult === '+' ? 'positif' : 'négatif'}`
      );

      const absProduct = operands.reduce((p, n) => p * Math.abs(n), 1);
      const result = operands.reduce((p, n) => p * n, 1);

      steps.push(
        `Produit des valeurs absolues : ${operands.map((n) => Math.abs(n)).join(' × ')} = ${absProduct}`
      );
      steps.push(`Résultat : ${result}`);
      break;
    }

    case 'divide': {
      steps.push('Division de nombres relatifs :');
      steps.push('Règle des signes : + ÷ + = +, + ÷ - = -, - ÷ + = -, - ÷ - = +');

      const [dividend, divisor] = operands;
      const sign =
        (dividend < 0 && divisor < 0) || (dividend >= 0 && divisor >= 0) ? '+' : '-';

      steps.push(
        `Signe du résultat : ${dividend < 0 ? '-' : '+'} ÷ ${divisor < 0 ? '-' : '+'} = ${sign}`
      );

      const absResult = Math.abs(dividend) / Math.abs(divisor);
      steps.push(
        `Division des valeurs absolues : ${Math.abs(dividend)} ÷ ${Math.abs(divisor)} = ${absResult}`
      );

      const result = dividend / divisor;
      steps.push(`Résultat : ${result}`);
      break;
    }
  }

  return steps;
}
