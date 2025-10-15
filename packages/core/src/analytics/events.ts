/**
 * Analytics event types for tracking user interactions
 */

export interface BaseEvent {
  userId: string;
  timestamp: number;
  sessionId?: string;
}

export interface ExerciseStartedEvent extends BaseEvent {
  type: 'exercise_started';
  skillId: string;
  difficulty: number;
  itemId: string;
}

export interface ExerciseCompletedEvent extends BaseEvent {
  type: 'exercise_completed';
  skillId: string;
  difficulty: number;
  itemId: string;
  correct: boolean;
  timeSec: number;
  hintsUsed: number;
}

export interface HintRequestedEvent extends BaseEvent {
  type: 'hint_requested';
  skillId: string;
  itemId: string;
  hintType: 'first_step' | 'error_explanation' | 'general_hint';
}

export interface SessionStartedEvent extends BaseEvent {
  type: 'session_started';
  sessionId: string;
}

export interface SessionEndedEvent extends BaseEvent {
  type: 'session_ended';
  sessionId: string;
  durationSec: number;
  exercisesCompleted: number;
  scoreTotal: number;
}

export interface MasteryUpdatedEvent extends BaseEvent {
  type: 'mastery_updated';
  skillId: string;
  oldMastery: number;
  newMastery: number;
}

export interface StreakUpdatedEvent extends BaseEvent {
  type: 'streak_updated';
  streakDays: number;
  isNewRecord: boolean;
}

export interface AchievementUnlockedEvent extends BaseEvent {
  type: 'achievement_unlocked';
  achievementId: string;
  achievementName: string;
}

export type AnalyticsEvent =
  | ExerciseStartedEvent
  | ExerciseCompletedEvent
  | HintRequestedEvent
  | SessionStartedEvent
  | SessionEndedEvent
  | MasteryUpdatedEvent
  | StreakUpdatedEvent
  | AchievementUnlockedEvent;

/**
 * Track an analytics event
 * In a real implementation, this would send to analytics service
 */
export function trackEvent(event: AnalyticsEvent): void {
  // For MVP, just log to console
  // In production, send to Firebase Analytics, Mixpanel, etc.
  console.log('[Analytics]', event.type, event);
}

/**
 * Create a session ID
 */
export function createSessionId(): string {
  return `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
}
