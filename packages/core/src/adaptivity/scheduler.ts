/**
 * Calculate next review time using simplified SM-2 algorithm
 * @param mastery - Current mastery level (0-100)
 * @param lastSeen - Timestamp of last review
 * @returns Next review timestamp
 */
export function getNextReviewTime(mastery: number, lastSeen: number): number {
  // Convert mastery to ease factor (1.3 to 2.5)
  // Higher mastery = longer intervals
  const easeFactor = 1.3 + (mastery / 100) * 1.2;

  // Determine interval in days based on mastery
  let intervalDays: number;

  if (mastery < 30) {
    intervalDays = 1; // Review tomorrow
  } else if (mastery < 50) {
    intervalDays = 2; // Review in 2 days
  } else if (mastery < 70) {
    intervalDays = 4; // Review in 4 days
  } else if (mastery < 85) {
    intervalDays = 7; // Review in a week
  } else {
    intervalDays = 14; // Review in 2 weeks
  }

  // Apply ease factor
  intervalDays = Math.round(intervalDays * easeFactor);

  // Convert to milliseconds and add to lastSeen
  const intervalMs = intervalDays * 24 * 60 * 60 * 1000;
  return lastSeen + intervalMs;
}

/**
 * Check if a skill is due for review
 * @param nextReview - Scheduled next review timestamp
 * @param currentTime - Current timestamp
 * @returns True if review is due
 */
export function isDueForReview(nextReview: number, currentTime: number): boolean {
  return currentTime >= nextReview;
}

/**
 * Calculate optimal review schedule for multiple skills
 * @param skills - Array of skills with mastery and lastSeen info
 * @param currentTime - Current timestamp
 * @returns Sorted array of skillIds by review priority
 */
export function planReviewSchedule(
  skills: Array<{ skillId: string; mastery: number; lastSeen: number; nextReview: number }>,
  currentTime: number
): string[] {
  // Calculate priority score for each skill
  const scoredSkills = skills.map((skill) => {
    let priority = 0;

    // Factor 1: Is it due?
    if (isDueForReview(skill.nextReview, currentTime)) {
      priority += 100;
      // How overdue?
      const daysOverdue = (currentTime - skill.nextReview) / (1000 * 60 * 60 * 24);
      priority += daysOverdue * 10;
    }

    // Factor 2: Lower mastery needs more practice
    priority += (100 - skill.mastery) * 0.5;

    // Factor 3: Skills not seen in a while (even if not due)
    const daysSinceLastSeen = (currentTime - skill.lastSeen) / (1000 * 60 * 60 * 24);
    if (daysSinceLastSeen > 7) {
      priority += daysSinceLastSeen;
    }

    return { skillId: skill.skillId, priority };
  });

  // Sort by priority (highest first)
  scoredSkills.sort((a, b) => b.priority - a.priority);

  return scoredSkills.map((s) => s.skillId);
}
