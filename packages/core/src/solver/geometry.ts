import { GeometryExercise } from '../types';

/**
 * Solve geometry exercises and return the solution with steps
 */
export function solveGeometry(exercise: GeometryExercise): {
  solution: string;
  steps: string[];
} {
  const { operation, dimensions, angles } = exercise;

  switch (operation) {
    case 'triangle_area':
      return solveTriangleArea(dimensions.base, dimensions.height);

    case 'rectangle_area':
      return solveRectangleArea(dimensions.length, dimensions.width);

    case 'circle_area':
      return solveCircleArea(dimensions.radius);

    case 'circle_perimeter':
      return solveCirclePerimeter(dimensions.radius);

    case 'rectangle_perimeter':
      return solveRectanglePerimeter(dimensions.length, dimensions.width);

    case 'triangle_perimeter':
      return solveTrianglePerimeter(dimensions.side1, dimensions.side2, dimensions.side3);

    case 'pythagorean_theorem':
      return solvePythagoreanTheorem(dimensions);

    case 'angle_sum_triangle':
      return solveAngleSumTriangle(angles!.angle1, angles!.angle2);

    default:
      return { solution: '0', steps: ['Opération non supportée'] };
  }
}

/**
 * Solve triangle area: Area = (base × height) / 2
 */
function solveTriangleArea(base: number, height: number): { solution: string; steps: string[] } {
  const area = (base * height) / 2;
  const steps = [
    `Formule : Aire = (base × hauteur) / 2`,
    `Aire = (${base} × ${height}) / 2`,
    `Aire = ${base * height} / 2`,
    `Aire = ${area} cm²`,
  ];
  return { solution: area.toString(), steps };
}

/**
 * Solve rectangle area: Area = length × width
 */
function solveRectangleArea(length: number, width: number): { solution: string; steps: string[] } {
  const area = length * width;
  const steps = [
    `Formule : Aire = longueur × largeur`,
    `Aire = ${length} × ${width}`,
    `Aire = ${area} cm²`,
  ];
  return { solution: area.toString(), steps };
}

/**
 * Solve circle area: Area = π × r²
 */
function solveCircleArea(radius: number): { solution: string; steps: string[] } {
  const area = Math.PI * radius * radius;
  const roundedArea = Math.round(area * 10) / 10;
  const steps = [
    `Formule : Aire = π × r²`,
    `Aire = π × ${radius}²`,
    `Aire = π × ${radius * radius}`,
    `Aire ≈ ${area.toFixed(2)} cm²`,
    `Aire ≈ ${roundedArea} cm² (arrondi au dixième)`,
  ];
  return { solution: roundedArea.toString(), steps };
}

/**
 * Solve circle perimeter: Perimeter = 2 × π × r
 */
function solveCirclePerimeter(radius: number): { solution: string; steps: string[] } {
  const perimeter = 2 * Math.PI * radius;
  const roundedPerimeter = Math.round(perimeter * 10) / 10;
  const steps = [
    `Formule : Périmètre = 2 × π × r`,
    `Périmètre = 2 × π × ${radius}`,
    `Périmètre ≈ ${perimeter.toFixed(2)} cm`,
    `Périmètre ≈ ${roundedPerimeter} cm (arrondi au dixième)`,
  ];
  return { solution: roundedPerimeter.toString(), steps };
}

/**
 * Solve rectangle perimeter: Perimeter = 2 × (length + width)
 */
function solveRectanglePerimeter(length: number, width: number): { solution: string; steps: string[] } {
  const perimeter = 2 * (length + width);
  const steps = [
    `Formule : Périmètre = 2 × (longueur + largeur)`,
    `Périmètre = 2 × (${length} + ${width})`,
    `Périmètre = 2 × ${length + width}`,
    `Périmètre = ${perimeter} cm`,
  ];
  return { solution: perimeter.toString(), steps };
}

/**
 * Solve triangle perimeter: Perimeter = side1 + side2 + side3
 */
function solveTrianglePerimeter(
  side1: number,
  side2: number,
  side3: number
): { solution: string; steps: string[] } {
  const perimeter = side1 + side2 + side3;
  const steps = [
    `Formule : Périmètre = côté1 + côté2 + côté3`,
    `Périmètre = ${side1} + ${side2} + ${side3}`,
    `Périmètre = ${perimeter} cm`,
  ];
  return { solution: perimeter.toString(), steps };
}

/**
 * Solve Pythagorean theorem: a² + b² = c²
 */
function solvePythagoreanTheorem(dimensions: Record<string, number>): { solution: string; steps: string[] } {
  const { a, b, c } = dimensions;

  if (c === undefined) {
    // Find hypotenuse: c = √(a² + b²)
    const cSquared = a * a + b * b;
    const hypotenuse = Math.sqrt(cSquared);
    const roundedHypotenuse = Math.round(hypotenuse * 10) / 10;

    const steps = [
      `Théorème de Pythagore : a² + b² = c²`,
      `${a}² + ${b}² = c²`,
      `${a * a} + ${b * b} = c²`,
      `${cSquared} = c²`,
      `c = √${cSquared}`,
      `c ≈ ${hypotenuse.toFixed(2)} cm`,
      `c ≈ ${roundedHypotenuse} cm (arrondi au dixième)`,
    ];
    return { solution: roundedHypotenuse.toString(), steps };
  } else {
    // Find one side: b = √(c² - a²)
    const bSquared = c * c - a * a;
    const side = Math.sqrt(bSquared);
    const roundedSide = Math.round(side * 10) / 10;

    const steps = [
      `Théorème de Pythagore : a² + b² = c²`,
      `${a}² + b² = ${c}²`,
      `${a * a} + b² = ${c * c}`,
      `b² = ${c * c} - ${a * a}`,
      `b² = ${bSquared}`,
      `b = √${bSquared}`,
      `b ≈ ${side.toFixed(2)} cm`,
      `b ≈ ${roundedSide} cm (arrondi au dixième)`,
    ];
    return { solution: roundedSide.toString(), steps };
  }
}

/**
 * Solve angle sum in triangle: sum = 180°
 */
function solveAngleSumTriangle(angle1: number, angle2: number): { solution: string; steps: string[] } {
  const angle3 = 180 - angle1 - angle2;
  const steps = [
    `La somme des angles d'un triangle est 180°`,
    `angle1 + angle2 + angle3 = 180°`,
    `${angle1}° + ${angle2}° + angle3 = 180°`,
    `${angle1 + angle2}° + angle3 = 180°`,
    `angle3 = 180° - ${angle1 + angle2}°`,
    `angle3 = ${angle3}°`,
  ];
  return { solution: angle3.toString(), steps };
}

/**
 * Check if an answer is correct for a geometry exercise
 * Allows for small floating-point differences
 */
export function checkGeometryAnswer(exercise: GeometryExercise, userAnswer: string): boolean {
  const { solution } = solveGeometry(exercise);
  const correctAnswer = parseFloat(solution);
  const userAnswerNum = parseFloat(userAnswer.replace(',', '.'));

  if (isNaN(userAnswerNum) || isNaN(correctAnswer)) {
    return false;
  }

  // Allow 0.1 tolerance for rounding differences
  return Math.abs(userAnswerNum - correctAnswer) < 0.15;
}
