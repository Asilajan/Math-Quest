// Course system types

export interface CourseSection {
  id: string;
  title: string;
  content: string; // Markdown content
  order: number;
}

export interface CourseExample {
  id: string;
  title: string;
  problem: string;
  solution: string;
  steps: string[];
  explanation?: string;
}

export interface CourseLesson {
  id: string;
  skillId: string; // Links to skill from exercises
  title: string;
  description: string;
  icon?: string; // Icon name or emoji
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  estimatedTime: number; // In minutes
  sections: CourseSection[];
  examples: CourseExample[];
  keyPoints: string[]; // Main takeaways
  prerequisites?: string[]; // Other lesson IDs that should be completed first
  relatedLessons?: string[]; // Suggestions for next lessons
}

export interface CourseChapter {
  id: string;
  title: string;
  description: string;
  theme: 'fire' | 'water' | 'lightning' | 'ice' | 'earth' | 'wind' | 'shadow' | 'arcane';
  icon: string;
  lessons: CourseLesson[];
  order: number;
  gradeLevel: '4eme' | '3eme' | '5eme'; // French grade levels
}

export interface CourseProgress {
  lessonId: string;
  completed: boolean;
  lastAccessed: number;
  timeSpent: number; // In seconds
  notesCount: number;
}
