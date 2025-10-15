/**
 * Calculate new mastery score based on ELO-like system
 * @param currentMastery - Current mastery level (0-100)
 * @param difficulty - Exercise difficulty (0-10)
 * @param correct - Whether the answer was correct
 * @param timeSec - Time taken to answer in seconds
 * @returns New mastery score (0-100)
 */
export function calcElo(
  currentMastery: number,
  difficulty: number,
  correct: boolean,
  timeSec: number
): number {
  // Normalize difficulty to 0-100 scale to match mastery
  const normalizedDifficulty = (difficulty / 10) * 100;

  // Expected performance based on difference between mastery and difficulty
  const diff = currentMastery - normalizedDifficulty;
  const expectedScore = 1 / (1 + Math.pow(10, -diff / 40));

  // Actual score: 1 if correct, 0 if incorrect
  const actualScore = correct ? 1 : 0;

  // K-factor: determines how much the rating changes
  // Higher for low mastery (learning phase), lower for high mastery
  const kFactor = currentMastery < 50 ? 32 : currentMastery < 75 ? 24 : 16;

  // Time bonus/penalty (optional refinement)
  // Fast correct answers get a small bonus, slow answers get a penalty
  let timeModifier = 1.0;
  if (correct && timeSec < 20) {
    timeModifier = 1.1; // 10% bonus for quick correct answers
  } else if (timeSec > 120) {
    timeModifier = 0.9; // 10% penalty for very slow answers
  }

  // Calculate rating change
  const change = kFactor * (actualScore - expectedScore) * timeModifier;

  // Apply change and clamp to [0, 100]
  const newMastery = Math.max(0, Math.min(100, currentMastery + change));

  return Math.round(newMastery * 10) / 10; // Round to 1 decimal place
}

/**
 * Select next difficulty level based on current mastery
 * @param mastery - Current mastery level (0-100)
 * @returns Recommended difficulty (0-10)
 */
export function selectDifficulty(mastery: number): number {
  // Convert mastery (0-100) to difficulty (0-10)
  // Add slight randomness to avoid monotony
  const baseDifficulty = (mastery / 100) * 10;
  
  // Add some variance: ±1 difficulty level
  const variance = (Math.random() - 0.5) * 2;
  const difficulty = baseDifficulty + variance;

  // Clamp to [0, 10]
  return Math.max(0, Math.min(10, Math.round(difficulty)));
}

/**
 * Determine if a skill needs review based on mastery and time since last seen
 * @param mastery - Current mastery level (0-100)
 * @param lastSeenTimestamp - Timestamp when skill was last practiced
 * @param currentTimestamp - Current timestamp
 * @returns Priority score (higher = more urgent)
 */
export function getReviewPriority(
  mastery: number,
  lastSeenTimestamp: number,
  currentTimestamp: number
): number {
  const daysSinceLastSeen = (currentTimestamp - lastSeenTimestamp) / (1000 * 60 * 60 * 24);

  // Lower mastery needs more frequent review
  const masteryFactor = (100 - mastery) / 100;

  // Time decay: longer since last seen increases priority
  const timeFactor = Math.log(daysSinceLastSeen + 1);

  // Combined priority
  return masteryFactor * 50 + timeFactor * 50;
}
