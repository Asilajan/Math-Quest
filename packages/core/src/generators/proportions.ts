import { ProportionExercise } from '../types';
import { SeededRNG } from '../rng';

/**
 * Generate direct proportion: a/b = c/d, find the unknown
 * Difficulty 1-4
 */
export function genDirectProportion(
  seed: number,
  difficulty: number
): ProportionExercise {
  const rng = new SeededRNG(seed);
  const skillId = 'proportions_direct';

  // Generate proportion values
  const ratio = rng.nextInt(2, 11);
  const a = rng.nextInt(1, 11);
  const b = a * ratio;

  const c = rng.nextInt(1, 11);
  const d = c * ratio;

  // Choose which value to hide
  const unknowns: Array<'a' | 'b' | 'c' | 'd'> = ['a', 'b', 'c', 'd'];
  const unknown = unknowns[rng.nextInt(0, 4)];

  let question: string;
  const values = [a, b, c, d];

  if (unknown === 'a') {
    question = `Si ${b} correspond à ${c}, à combien correspond ${d} ?`;
  } else if (unknown === 'b') {
    question = `Si ${a} correspond à ${c}, à combien correspond ${d} ?`;
  } else if (unknown === 'c') {
    question = `Si ${a} correspond à ${b}, à combien correspond ${d} ?`;
  } else {
    question = `Si ${a} correspond à ${b}, à combien correspond ${c} ?`;
  }

  const solution = values[unknowns.indexOf(unknown)].toString();

  return {
    id: `${skillId}_${seed}`,
    skillId,
    difficulty,
    seed,
    type: 'proportion',
    operation: 'direct',
    values,
    unknown,
    question,
    solution,
  };
}

/**
 * Generate percentage calculation
 * Difficulty 3-6
 */
export function genPercentage(
  seed: number,
  difficulty: number
): ProportionExercise {
  const rng = new SeededRNG(seed);
  const skillId = 'proportions_percentage';

  if (difficulty <= 4) {
    // Simple: Calculate percentage of a number
    const percent = rng.nextInt(1, 11) * 5; // 5, 10, 15, ..., 50
    const total = rng.nextInt(10, 201);
    const result = (percent / 100) * total;

    const question = `Calculer ${percent}% de ${total}`;
    const solution = result % 1 === 0 ? result.toString() : result.toFixed(2);

    return {
      id: `${skillId}_${seed}`,
      skillId,
      difficulty,
      seed,
      type: 'proportion',
      operation: 'percentage',
      values: [percent, total, result, 100],
      unknown: 'c',
      question,
      solution,
    };
  } else {
    // Find what percentage one number is of another
    const part = rng.nextInt(1, 51);
    const total = rng.nextInt(part + 10, 201);
    const percent = (part / total) * 100;

    const question = `${part} représente quel pourcentage de ${total} ?`;
    const solution = percent % 1 === 0 ? `${percent}%` : `${percent.toFixed(2)}%`;

    return {
      id: `${skillId}_${seed}`,
      skillId,
      difficulty,
      seed,
      type: 'proportion',
      operation: 'percentage',
      values: [percent, total, part, 100],
      unknown: 'a',
      question,
      solution,
    };
  }
}

/**
 * Generate scale/map problems
 * Difficulty 5-8
 */
export function genScale(
  seed: number,
  difficulty: number
): ProportionExercise {
  const rng = new SeededRNG(seed);
  const skillId = 'proportions_scale';

  const scales = [
    { ratio: 100, name: '1:100' },
    { ratio: 1000, name: '1:1000' },
    { ratio: 10000, name: '1:10000' },
    { ratio: 100000, name: '1:100000' },
  ];

  const scaleIdx = Math.min(Math.floor(difficulty / 3), scales.length - 1);
  const scale = scales[scaleIdx];

  const mapDistance = rng.nextInt(1, 21);
  const realDistance = mapDistance * scale.ratio;

  const question = `Sur une carte à l'échelle ${scale.name}, ${mapDistance} cm représentent quelle distance réelle en mètres ?`;
  const solution = (realDistance / 100).toString(); // Convert cm to m

  return {
    id: `${skillId}_${seed}`,
    skillId,
    difficulty,
    seed,
    type: 'proportion',
    operation: 'scale',
    values: [mapDistance, scale.ratio, realDistance / 100, 100],
    unknown: 'c',
    question,
    solution,
  };
}

/**
 * Generate speed/distance/time problems
 * Difficulty 6-9
 */
export function genSpeed(
  seed: number,
  difficulty: number
): ProportionExercise {
  const rng = new SeededRNG(seed);
  const skillId = 'proportions_speed';

  const speed = rng.nextInt(5, 21) * 5; // 25, 30, ..., 100 km/h
  const time = rng.nextInt(1, 7); // hours
  const distance = speed * time;

  const problemType = rng.nextInt(0, 3);

  let question: string;
  let solution: string;
  let unknown: 'a' | 'b' | 'c' | 'd';

  if (problemType === 0) {
    // Find distance
    question = `Une voiture roule à ${speed} km/h pendant ${time} heures. Quelle distance parcourt-elle ?`;
    solution = `${distance}`;
    unknown = 'c';
  } else if (problemType === 1) {
    // Find speed
    question = `Une voiture parcourt ${distance} km en ${time} heures. Quelle est sa vitesse moyenne ?`;
    solution = `${speed}`;
    unknown = 'a';
  } else {
    // Find time
    question = `Une voiture roule à ${speed} km/h et parcourt ${distance} km. Combien de temps met-elle ?`;
    solution = `${time}`;
    unknown = 'b';
  }

  return {
    id: `${skillId}_${seed}`,
    skillId,
    difficulty,
    seed,
    type: 'proportion',
    operation: 'speed',
    values: [speed, time, distance, 1],
    unknown,
    question,
    solution,
  };
}
