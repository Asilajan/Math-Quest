export type ErrorType =
  | 'calculation'
  | 'simplification'
  | 'sign'
  | 'denominator'
  | 'other';

export interface Skill {
  skillId: string;
  name: string;
  syllabusRef: string;
  generatorParams?: Record<string, any>;
}

export interface Exercise {
  id: string;
  skillId: string;
  difficulty: number; // 0-10
  seed: number;
  type: 'fraction' | 'percentage' | 'equation' | 'relative_number' | 'power' | 'proportion' | 'literal' | 'geometry';
  question: string;
  solution: string;
  steps?: string[];
}

export interface FractionExercise extends Exercise {
  type: 'fraction';
  operands: { numerator: number; denominator: number }[];
  operation: 'add' | 'subtract' | 'multiply' | 'divide';
}

export interface RelativeNumberExercise extends Exercise {
  type: 'relative_number';
  operands: number[];
  operation: 'add' | 'subtract' | 'multiply' | 'divide';
}

export interface PowerExercise extends Exercise {
  type: 'power';
  operation: 'simplify' | 'multiply' | 'divide' | 'power_of_power' | 'evaluate';
  base?: number;
  exponent?: number;
  // For operations with multiple powers
  terms?: { base: number; exponent: number }[];
}

export interface EquationExercise extends Exercise {
  type: 'equation';
  operation: 'simple' | 'two_step' | 'variable_both_sides' | 'with_parentheses';
  // Equation in the form: ax + b = cx + d
  a: number;
  b: number;
  c: number;
  d: number;
}

export interface ProportionExercise extends Exercise {
  type: 'proportion';
  operation: 'direct' | 'percentage' | 'scale' | 'speed';
  values: number[];
  unknown: 'a' | 'b' | 'c' | 'd'; // Position of unknown in proportion a/b = c/d
}

export interface LiteralExercise extends Exercise {
  type: 'literal';
  operation: 'expand' | 'factor' | 'simplify' | 'substitute';
  expression: string;
  // For substitution
  variable?: string;
  value?: number;
}

export interface GeometryExercise extends Exercise {
  type: 'geometry';
  operation:
    | 'triangle_area'
    | 'rectangle_area'
    | 'circle_area'
    | 'circle_perimeter'
    | 'triangle_perimeter'
    | 'rectangle_perimeter'
    | 'pythagorean_theorem'
    | 'thales_theorem'
    | 'angle_sum_triangle'
    | 'parallel_lines_angles';
  shape: 'triangle' | 'rectangle' | 'circle' | 'parallelogram' | 'trapezoid';
  // Dimensions stored as key-value pairs
  dimensions: Record<string, number>;
  // For angle problems
  angles?: Record<string, number>;
}

export interface Attempt {
  attemptId: string;
  skillId: string;
  difficulty: number;
  itemId: string;
  answer: string;
  correct: boolean;
  timeSec: number;
  hintsUsed: number;
  errorType?: ErrorType;
  timestamp: number;
}

export interface MasteryScore {
  skillId: string;
  mastery: number; // 0-100
  lastSeen: number;
  nextReview: number;
}

export interface Session {
  sessionId: string;
  startedAt: number;
  durationSec: number;
  scoreTotal: number;
  attempts: Attempt[];
}
