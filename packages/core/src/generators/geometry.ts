import { GeometryExercise } from '../types';
import { createRNG, randomInt } from '../rng';

/**
 * Generate triangle area exercise
 * Formula: Area = (base × height) / 2
 * Difficulty 0-3: small integers
 * Difficulty 4-7: larger integers, sometimes decimal results
 * Difficulty 8-10: complex numbers, decimal values
 */
export function genTriangleArea(seed: number, difficulty: number): GeometryExercise {
  const rng = createRNG(seed);
  const clampedDifficulty = Math.max(0, Math.min(10, difficulty));

  let base: number, height: number;

  if (clampedDifficulty <= 3) {
    base = randomInt(rng, 3, 10);
    height = randomInt(rng, 3, 10);
  } else if (clampedDifficulty <= 7) {
    base = randomInt(rng, 5, 20);
    height = randomInt(rng, 5, 20);
  } else {
    base = randomInt(rng, 10, 30);
    height = randomInt(rng, 10, 30);
  }

  const question = `Calcule l'aire d'un triangle de base ${base} cm et de hauteur ${height} cm.`;
  const itemId = `geometry_triangle_area_${seed}`;

  return {
    id: itemId,
    skillId: 'geometry_triangle_area',
    difficulty: clampedDifficulty,
    seed,
    type: 'geometry',
    operation: 'triangle_area',
    shape: 'triangle',
    dimensions: { base, height },
    question,
    solution: '',
    steps: [],
  };
}

/**
 * Generate rectangle area exercise
 * Formula: Area = length × width
 */
export function genRectangleArea(seed: number, difficulty: number): GeometryExercise {
  const rng = createRNG(seed);
  const clampedDifficulty = Math.max(0, Math.min(10, difficulty));

  let length: number, width: number;

  if (clampedDifficulty <= 3) {
    length = randomInt(rng, 3, 12);
    width = randomInt(rng, 3, 12);
  } else if (clampedDifficulty <= 7) {
    length = randomInt(rng, 8, 25);
    width = randomInt(rng, 5, 20);
  } else {
    length = randomInt(rng, 15, 40);
    width = randomInt(rng, 10, 35);
  }

  const question = `Calcule l'aire d'un rectangle de longueur ${length} cm et de largeur ${width} cm.`;
  const itemId = `geometry_rectangle_area_${seed}`;

  return {
    id: itemId,
    skillId: 'geometry_rectangle_area',
    difficulty: clampedDifficulty,
    seed,
    type: 'geometry',
    operation: 'rectangle_area',
    shape: 'rectangle',
    dimensions: { length, width },
    question,
    solution: '',
    steps: [],
  };
}

/**
 * Generate circle area exercise
 * Formula: Area = π × r²
 */
export function genCircleArea(seed: number, difficulty: number): GeometryExercise {
  const rng = createRNG(seed);
  const clampedDifficulty = Math.max(0, Math.min(10, difficulty));

  let radius: number;

  if (clampedDifficulty <= 3) {
    radius = randomInt(rng, 2, 8);
  } else if (clampedDifficulty <= 7) {
    radius = randomInt(rng, 5, 15);
  } else {
    radius = randomInt(rng, 10, 25);
  }

  const question = `Calcule l'aire d'un cercle de rayon ${radius} cm (arrondis au dixième près).`;
  const itemId = `geometry_circle_area_${seed}`;

  return {
    id: itemId,
    skillId: 'geometry_circle_area',
    difficulty: clampedDifficulty,
    seed,
    type: 'geometry',
    operation: 'circle_area',
    shape: 'circle',
    dimensions: { radius },
    question,
    solution: '',
    steps: [],
  };
}

/**
 * Generate circle perimeter exercise
 * Formula: Perimeter = 2 × π × r
 */
export function genCirclePerimeter(seed: number, difficulty: number): GeometryExercise {
  const rng = createRNG(seed);
  const clampedDifficulty = Math.max(0, Math.min(10, difficulty));

  let radius: number;

  if (clampedDifficulty <= 3) {
    radius = randomInt(rng, 2, 8);
  } else if (clampedDifficulty <= 7) {
    radius = randomInt(rng, 5, 15);
  } else {
    radius = randomInt(rng, 10, 25);
  }

  const question = `Calcule le périmètre d'un cercle de rayon ${radius} cm (arrondis au dixième près).`;
  const itemId = `geometry_circle_perimeter_${seed}`;

  return {
    id: itemId,
    skillId: 'geometry_circle_perimeter',
    difficulty: clampedDifficulty,
    seed,
    type: 'geometry',
    operation: 'circle_perimeter',
    shape: 'circle',
    dimensions: { radius },
    question,
    solution: '',
    steps: [],
  };
}

/**
 * Generate Pythagorean theorem exercise
 * Formula: a² + b² = c²
 * Find the hypotenuse or one of the sides
 */
export function genPythagoreanTheorem(seed: number, difficulty: number): GeometryExercise {
  const rng = createRNG(seed);
  const clampedDifficulty = Math.max(0, Math.min(10, difficulty));

  let a: number, b: number, c: number;
  const findHypotenuse = randomInt(rng, 0, 1) === 1;

  if (clampedDifficulty <= 3) {
    // Easy: Pythagorean triples
    const triples = [[3, 4, 5], [5, 12, 13], [8, 15, 17], [7, 24, 25]];
    const triple = triples[randomInt(rng, 0, triples.length - 1)];
    [a, b, c] = triple;
  } else if (clampedDifficulty <= 7) {
    // Medium: multiples of Pythagorean triples or simple calculations
    const triples = [[3, 4, 5], [5, 12, 13], [8, 15, 17]];
    const triple = triples[randomInt(rng, 0, triples.length - 1)];
    const multiplier = randomInt(rng, 1, 3);
    [a, b, c] = triple.map(x => x * multiplier);
  } else {
    // Hard: any reasonable values
    a = randomInt(rng, 5, 20);
    b = randomInt(rng, 5, 20);
    c = Math.sqrt(a * a + b * b);
  }

  let question: string;
  let dimensions: Record<string, number>;

  if (findHypotenuse) {
    question = `Dans un triangle rectangle, les deux côtés de l'angle droit mesurent ${a} cm et ${b} cm. Calcule la longueur de l'hypoténuse (arrondis au dixième près si nécessaire).`;
    dimensions = { a, b };
  } else {
    question = `Dans un triangle rectangle, l'hypoténuse mesure ${c} cm et un côté mesure ${a} cm. Calcule la longueur de l'autre côté (arrondis au dixième près si nécessaire).`;
    dimensions = { a, c };
  }

  const itemId = `geometry_pythagorean_${seed}`;

  return {
    id: itemId,
    skillId: 'geometry_pythagorean_theorem',
    difficulty: clampedDifficulty,
    seed,
    type: 'geometry',
    operation: 'pythagorean_theorem',
    shape: 'triangle',
    dimensions,
    question,
    solution: '',
    steps: [],
  };
}

/**
 * Generate angle sum in triangle exercise
 * The sum of angles in a triangle is 180°
 */
export function genAngleSumTriangle(seed: number, difficulty: number): GeometryExercise {
  const rng = createRNG(seed);
  const clampedDifficulty = Math.max(0, Math.min(10, difficulty));

  let angle1: number, angle2: number;

  if (clampedDifficulty <= 3) {
    // Easy: simple angles
    angle1 = randomInt(rng, 30, 80);
    angle2 = randomInt(rng, 30, 80);
  } else if (clampedDifficulty <= 7) {
    // Medium: one angle is given as an expression
    angle1 = randomInt(rng, 40, 70);
    angle2 = randomInt(rng, 40, 70);
  } else {
    // Hard: complex angles
    angle1 = randomInt(rng, 35, 75);
    angle2 = randomInt(rng, 35, 75);
  }

  const question = `Dans un triangle, deux angles mesurent ${angle1}° et ${angle2}°. Calcule la mesure du troisième angle.`;
  const itemId = `geometry_angle_sum_triangle_${seed}`;

  return {
    id: itemId,
    skillId: 'geometry_angle_sum_triangle',
    difficulty: clampedDifficulty,
    seed,
    type: 'geometry',
    operation: 'angle_sum_triangle',
    shape: 'triangle',
    dimensions: {},
    angles: { angle1, angle2 },
    question,
    solution: '',
    steps: [],
  };
}

/**
 * Generate rectangle perimeter exercise
 * Formula: Perimeter = 2 × (length + width)
 */
export function genRectanglePerimeter(seed: number, difficulty: number): GeometryExercise {
  const rng = createRNG(seed);
  const clampedDifficulty = Math.max(0, Math.min(10, difficulty));

  let length: number, width: number;

  if (clampedDifficulty <= 3) {
    length = randomInt(rng, 4, 12);
    width = randomInt(rng, 3, 10);
  } else if (clampedDifficulty <= 7) {
    length = randomInt(rng, 8, 25);
    width = randomInt(rng, 5, 20);
  } else {
    length = randomInt(rng, 15, 40);
    width = randomInt(rng, 10, 35);
  }

  const question = `Calcule le périmètre d'un rectangle de longueur ${length} cm et de largeur ${width} cm.`;
  const itemId = `geometry_rectangle_perimeter_${seed}`;

  return {
    id: itemId,
    skillId: 'geometry_rectangle_perimeter',
    difficulty: clampedDifficulty,
    seed,
    type: 'geometry',
    operation: 'rectangle_perimeter',
    shape: 'rectangle',
    dimensions: { length, width },
    question,
    solution: '',
    steps: [],
  };
}

/**
 * Generate triangle perimeter exercise
 * Formula: Perimeter = side1 + side2 + side3
 */
export function genTrianglePerimeter(seed: number, difficulty: number): GeometryExercise {
  const rng = createRNG(seed);
  const clampedDifficulty = Math.max(0, Math.min(10, difficulty));

  let side1: number, side2: number, side3: number;

  if (clampedDifficulty <= 3) {
    side1 = randomInt(rng, 3, 10);
    side2 = randomInt(rng, 3, 10);
    side3 = randomInt(rng, 3, 10);
  } else if (clampedDifficulty <= 7) {
    side1 = randomInt(rng, 5, 20);
    side2 = randomInt(rng, 5, 20);
    side3 = randomInt(rng, 5, 20);
  } else {
    side1 = randomInt(rng, 10, 30);
    side2 = randomInt(rng, 10, 30);
    side3 = randomInt(rng, 10, 30);
  }

  const question = `Calcule le périmètre d'un triangle dont les côtés mesurent ${side1} cm, ${side2} cm et ${side3} cm.`;
  const itemId = `geometry_triangle_perimeter_${seed}`;

  return {
    id: itemId,
    skillId: 'geometry_triangle_perimeter',
    difficulty: clampedDifficulty,
    seed,
    type: 'geometry',
    operation: 'triangle_perimeter',
    shape: 'triangle',
    dimensions: { side1, side2, side3 },
    question,
    solution: '',
    steps: [],
  };
}
