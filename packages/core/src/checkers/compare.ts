/**
 * Normalize a string by removing spaces and converting to lowercase
 */
function normalizeString(str: string): string {
  return str.replace(/\s+/g, '').toLowerCase();
}

/**
 * Parse a fraction string like "3/4" or "5" into numerator and denominator
 * Returns null if invalid format
 */
function parseFraction(str: string): { num: number; den: number } | null {
  const normalized = normalizeString(str);

  // Check for division by zero or invalid characters
  if (!/^-?\d+(\/\d+)?$/.test(normalized)) {
    return null;
  }

  if (normalized.includes('/')) {
    const parts = normalized.split('/');
    const num = parseInt(parts[0], 10);
    const den = parseInt(parts[1], 10);

    if (den === 0 || isNaN(num) || isNaN(den)) {
      return null;
    }

    return { num, den };
  } else {
    const num = parseInt(normalized, 10);
    if (isNaN(num)) {
      return null;
    }
    return { num, den: 1 };
  }
}

/**
 * Calculate GCD for fraction comparison
 */
function gcd(a: number, b: number): number {
  a = Math.abs(a);
  b = Math.abs(b);
  while (b !== 0) {
    const temp = b;
    b = a % b;
    a = temp;
  }
  return a;
}

/**
 * Check if two fractions are equivalent
 */
function areFractionsEquivalent(
  frac1: { num: number; den: number },
  frac2: { num: number; den: number }
): boolean {
  // Simplify both fractions
  const gcd1 = gcd(frac1.num, frac1.den);
  const gcd2 = gcd(frac2.num, frac2.den);

  const simple1 = { num: frac1.num / gcd1, den: frac1.den / gcd1 };
  const simple2 = { num: frac2.num / gcd2, den: frac2.den / gcd2 };

  // Handle negative denominators
  if (simple1.den < 0) {
    simple1.num = -simple1.num;
    simple1.den = -simple1.den;
  }
  if (simple2.den < 0) {
    simple2.num = -simple2.num;
    simple2.den = -simple2.den;
  }

  return simple1.num === simple2.num && simple1.den === simple2.den;
}

/**
 * Compare user answer with correct solution
 * Handles various formats: integers, fractions, equivalent fractions
 * @param userAnswer - The answer provided by the user
 * @param correctSolution - The correct solution
 * @returns True if answers are equivalent
 */
export function compareAnswers(userAnswer: string, correctSolution: string): boolean {
  // Normalize both answers
  const userNormalized = normalizeString(userAnswer);
  const correctNormalized = normalizeString(correctSolution);

  // Direct string match (after normalization)
  if (userNormalized === correctNormalized) {
    return true;
  }

  // Try parsing as fractions
  const userFrac = parseFraction(userAnswer);
  const correctFrac = parseFraction(correctSolution);

  // If both are valid fractions, check equivalence
  if (userFrac && correctFrac) {
    return areFractionsEquivalent(userFrac, correctFrac);
  }

  // If parsing failed or they're not equivalent
  return false;
}

/**
 * Provide feedback on a wrong answer
 * @param userAnswer - The user's answer
 * @param correctSolution - The correct solution
 * @returns Feedback message
 */
export function getFeedback(userAnswer: string, correctSolution: string): string {
  const userFrac = parseFraction(userAnswer);
  const correctFrac = parseFraction(correctSolution);

  if (!userFrac) {
    return "Le format de votre réponse n'est pas valide. Utilisez le format 'a/b' pour les fractions.";
  }

  if (!correctFrac) {
    return 'Erreur interne: solution incorrecte.';
  }

  // Check if fraction needs simplification
  const userGcd = gcd(userFrac.num, userFrac.den);
  if (userGcd > 1) {
    return 'Votre réponse peut être simplifiée. Réduisez la fraction à sa forme la plus simple.';
  }

  // Check if it's just a sign error
  if (
    Math.abs(userFrac.num) === Math.abs(correctFrac.num) &&
    userFrac.den === correctFrac.den &&
    userFrac.num !== correctFrac.num
  ) {
    return "Vérifiez le signe de votre réponse.";
  }

  // Check if denominator is wrong but numerator is close
  if (
    userFrac.num === correctFrac.num &&
    userFrac.den !== correctFrac.den
  ) {
    return 'Le numérateur est correct, mais vérifiez le dénominateur.';
  }

  return 'Réponse incorrecte. Revoyez vos calculs.';
}
