// Gamification system types

export interface PlayerCharacter {
  name: string; // Character name
  level: number;
  xp: number;
  coins: number; // Currency earned from correct answers
  hp: number; // Current HP
  maxHp: number; // Maximum HP
  inventory: string[]; // Item IDs owned
  equippedItems: {
    hat?: string;
    body?: string;
    accessory?: string;
  };
  unlockedMagic: string[]; // Magic spell IDs unlocked
  skillMastery: { [skillId: string]: number }; // Skill ID -> Mastery (0-100)
}

export interface ShopItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: 'weapon' | 'armor' | 'power' | 'hat' | 'body' | 'accessory' | 'theme' | 'bonus';
  rarity: 'common' | 'rare' | 'epic' | 'legendary';
  pixelArt?: string; // SVG or data for rendering
  icon?: string; // Emoji or icon
  bonusEffect?: BonusEffect;
}

export interface BonusEffect {
  type:
    | 'hint_discount'
    | 'xp_multiplier'
    | 'coin_multiplier'
    | 'theme_unlock'
    | 'ai_hints'
    | 'easier_problems'
    | 'content_unlock'
    | 'video_unlock'
    | 'damage_boost'
    | 'defense_boost'
    | 'max_hp_boost';
  value: number; // Percentage or absolute value
  duration?: number; // In exercises, if temporary
  description?: string; // User-friendly description
}

export interface XPReward {
  baseXP: number;
  speedBonus: number;
  noHintBonus: number;
  streakBonus: number;
  total: number;
}

export interface LevelConfig {
  level: number;
  xpRequired: number; // Total XP needed to reach this level
  rewards?: {
    coins?: number;
    items?: string[];
    bonuses?: BonusEffect[];
  };
}

// XP calculation constants
export const XP_CONFIG = {
  BASE_XP: 15, // Base XP (increased from 10)
  DIFFICULTY_MULTIPLIER: 5, // XP per difficulty level
  SPEED_BONUS_THRESHOLD: 30, // seconds
  SPEED_BONUS_MULTIPLIER: 0.5, // 50% bonus for speed
  NO_HINT_BONUS_MULTIPLIER: 0.3, // 30% bonus for no hints
  STREAK_MULTIPLIER: 0.1, // 10% bonus per streak day
  PERFECT_BONUS: 10, // Bonus XP for perfect (fast + no hints)
  LEVEL_BASE: 100, // XP needed for level 2
  LEVEL_MULTIPLIER: 1.5, // Each level requires 1.5x more XP
};

// Coins calculation constants
export const COINS_CONFIG = {
  BASE_COINS: 8,
  DIFFICULTY_MULTIPLIER: 3, // Coins per difficulty level
  SPEED_BONUS_MULTIPLIER: 0.4, // 40% bonus for speed
  NO_HINT_BONUS_MULTIPLIER: 0.25, // 25% bonus for no hints
  PERFECT_BONUS: 5, // Bonus coins for perfect (fast + no hints)
};

// Calculate XP required for a given level
export function getXPForLevel(level: number): number {
  if (level <= 1) return 0;
  return Math.floor(
    XP_CONFIG.LEVEL_BASE * Math.pow(XP_CONFIG.LEVEL_MULTIPLIER, level - 2)
  );
}

// Calculate total XP needed from level 1 to target level
export function getTotalXPForLevel(level: number): number {
  let total = 0;
  for (let i = 2; i <= level; i++) {
    total += getXPForLevel(i);
  }
  return total;
}

// Calculate level from total XP
export function getLevelFromXP(totalXP: number): { level: number; currentXP: number; xpForNext: number } {
  let level = 1;
  let xpSoFar = 0;

  while (true) {
    const xpForNextLevel = getXPForLevel(level + 1);
    if (xpSoFar + xpForNextLevel > totalXP) {
      break;
    }
    xpSoFar += xpForNextLevel;
    level++;
  }

  return {
    level,
    currentXP: totalXP - xpSoFar,
    xpForNext: getXPForLevel(level + 1),
  };
}

// Calculate XP reward for an exercise
export function calculateXPReward(
  timeSec: number,
  hintsUsed: number,
  streakDays: number,
  difficulty: number = 1 // Difficulty from 1-10
): XPReward {
  // Base XP increases with difficulty (15 + difficulty * 5)
  // Difficulty 1 = 20 XP, Difficulty 5 = 40 XP, Difficulty 10 = 65 XP
  const baseXP = XP_CONFIG.BASE_XP + (difficulty * XP_CONFIG.DIFFICULTY_MULTIPLIER);

  // Speed bonus: 50% of base XP if under threshold
  const isFast = timeSec < XP_CONFIG.SPEED_BONUS_THRESHOLD;
  const speedBonus = isFast ? Math.floor(baseXP * XP_CONFIG.SPEED_BONUS_MULTIPLIER) : 0;

  // No hint bonus: 30% of base XP
  const noHints = hintsUsed === 0;
  const noHintBonus = noHints ? Math.floor(baseXP * XP_CONFIG.NO_HINT_BONUS_MULTIPLIER) : 0;

  // Streak bonus: 10% of base XP per streak day
  const streakBonus = Math.floor(baseXP * streakDays * XP_CONFIG.STREAK_MULTIPLIER);

  // Perfect bonus: if both fast AND no hints (extra reward for excellence!)
  const perfectBonus = (isFast && noHints) ? XP_CONFIG.PERFECT_BONUS : 0;

  return {
    baseXP,
    speedBonus,
    noHintBonus,
    streakBonus,
    total: baseXP + speedBonus + noHintBonus + streakBonus + perfectBonus,
  };
}

// Calculate coins earned
export function calculateCoinsReward(
  timeSec: number,
  hintsUsed: number,
  difficulty: number = 1 // Difficulty from 1-10
): number {
  // Base coins increase with difficulty (8 + difficulty * 3)
  // Difficulty 1 = 11 coins, Difficulty 5 = 23 coins, Difficulty 10 = 38 coins
  const baseCoins = COINS_CONFIG.BASE_COINS + (difficulty * COINS_CONFIG.DIFFICULTY_MULTIPLIER);

  // Speed bonus: 40% of base coins
  const isFast = timeSec < XP_CONFIG.SPEED_BONUS_THRESHOLD;
  const speedBonus = isFast ? Math.floor(baseCoins * COINS_CONFIG.SPEED_BONUS_MULTIPLIER) : 0;

  // No hint bonus: 25% of base coins
  const noHints = hintsUsed === 0;
  const noHintBonus = noHints ? Math.floor(baseCoins * COINS_CONFIG.NO_HINT_BONUS_MULTIPLIER) : 0;

  // Perfect bonus: extra coins for excellence
  const perfectBonus = (isFast && noHints) ? COINS_CONFIG.PERFECT_BONUS : 0;

  return baseCoins + speedBonus + noHintBonus + perfectBonus;
}
