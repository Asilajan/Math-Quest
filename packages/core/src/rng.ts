/**
 * Mulberry32 PRNG - Fast and reliable seedable random number generator
 * Returns a function that generates deterministic pseudo-random numbers in [0, 1)
 */
export function createRNG(seed: number): () => number {
  let state = seed;
  return function () {
    state = (state + 0x6d2b79f5) | 0;
    let t = Math.imul(state ^ (state >>> 15), 1 | state);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

/**
 * Generate a random integer between min and max (inclusive) using the RNG
 */
export function randomInt(rng: () => number, min: number, max: number): number {
  return Math.floor(rng() * (max - min + 1)) + min;
}

/**
 * Choose a random element from an array
 */
export function randomChoice<T>(rng: () => number, array: T[]): T {
  return array[Math.floor(rng() * array.length)];
}

/**
 * Seeded RNG class wrapper for convenience
 */
export class SeededRNG {
  private rng: () => number;

  constructor(seed: number) {
    this.rng = createRNG(seed);
  }

  /**
   * Generate a random float between 0 (inclusive) and 1 (exclusive)
   */
  nextFloat(): number {
    return this.rng();
  }

  /**
   * Generate a random integer between min (inclusive) and max (exclusive)
   */
  nextInt(min: number, max: number): number {
    return Math.floor(this.rng() * (max - min)) + min;
  }

  /**
   * Choose a random element from an array
   */
  choice<T>(array: T[]): T {
    return array[Math.floor(this.rng() * array.length)];
  }
}
