// Magic system for skill tree

export type MagicElement = 'fire' | 'water' | 'lightning' | 'ice' | 'earth' | 'wind' | 'shadow' | 'light';

export interface MagicSpell {
  id: string;
  name: string;
  element: MagicElement;
  description: string;
  icon: string; // Emoji or icon
  unlockedBy: string; // Skill ID that unlocks this magic
  requiredMastery: number; // 0-100, usually 100 for full unlock
  tier: 1 | 2 | 3; // Magic tier/power level
}

export interface UnlockedMagic {
  spellId: string;
  unlockedAt: number; // Timestamp
}

// All available magic spells in the game
export const MAGIC_SPELLS: MagicSpell[] = [
  // Tier 1 - Fractions
  {
    id: 'fireball',
    name: 'Boule de Feu',
    element: 'fire',
    description: 'Lance une boule de feu dévastatrice. Débloquée en maîtrisant l\'addition de fractions.',
    icon: '🔥',
    unlockedBy: 'fractions_addition',
    requiredMastery: 100,
    tier: 1,
  },
  {
    id: 'water_wave',
    name: 'Vague Aquatique',
    element: 'water',
    description: 'Invoque une vague d\'eau purificatrice. Débloquée en maîtrisant la soustraction de fractions.',
    icon: '🌊',
    unlockedBy: 'fractions_subtraction',
    requiredMastery: 100,
    tier: 1,
  },
  {
    id: 'ice_shard',
    name: 'Éclat de Glace',
    element: 'ice',
    description: 'Projette des éclats de glace tranchants. Débloquée en maîtrisant la multiplication de fractions.',
    icon: '❄️',
    unlockedBy: 'fractions_multiplication',
    requiredMastery: 100,
    tier: 1,
  },
  {
    id: 'earth_shield',
    name: 'Bouclier Terrestre',
    element: 'earth',
    description: 'Crée un bouclier de pierre protecteur. Débloquée en maîtrisant la division de fractions.',
    icon: '🛡️',
    unlockedBy: 'fractions_division',
    requiredMastery: 100,
    tier: 1,
  },

  // Tier 1 - Relative Numbers
  {
    id: 'lightning_bolt',
    name: 'Éclair Foudroyant',
    element: 'lightning',
    description: 'Frappe avec la puissance de la foudre. Débloquée en maîtrisant l\'addition de nombres relatifs.',
    icon: '⚡',
    unlockedBy: 'relative_numbers_addition',
    requiredMastery: 100,
    tier: 1,
  },
  {
    id: 'wind_slash',
    name: 'Lame de Vent',
    element: 'wind',
    description: 'Tranche l\'air avec une lame de vent. Débloquée en maîtrisant la soustraction de nombres relatifs.',
    icon: '🌪️',
    unlockedBy: 'relative_numbers_subtraction',
    requiredMastery: 100,
    tier: 1,
  },
  {
    id: 'shadow_bind',
    name: 'Emprise des Ombres',
    element: 'shadow',
    description: 'Immobilise les ennemis dans les ténèbres. Débloquée en maîtrisant la multiplication de nombres relatifs.',
    icon: '🌑',
    unlockedBy: 'relative_numbers_multiplication',
    requiredMastery: 100,
    tier: 1,
  },
  {
    id: 'light_heal',
    name: 'Rayon Lumineux',
    element: 'light',
    description: 'Soigne les blessures avec la lumière. Débloquée en maîtrisant la division de nombres relatifs.',
    icon: '✨',
    unlockedBy: 'relative_numbers_division',
    requiredMastery: 100,
    tier: 1,
  },

  // Tier 2 - Powers
  {
    id: 'inferno',
    name: 'Brasier Infernal',
    element: 'fire',
    description: 'Déchaîne un brasier destructeur. Débloquée en maîtrisant le calcul de puissances.',
    icon: '🔥',
    unlockedBy: 'powers_evaluate',
    requiredMastery: 100,
    tier: 2,
  },
  {
    id: 'thunder_storm',
    name: 'Tempête de Foudre',
    element: 'lightning',
    description: 'Invoque une tempête électrique. Débloquée en maîtrisant la multiplication de puissances.',
    icon: '⛈️',
    unlockedBy: 'powers_multiply',
    requiredMastery: 100,
    tier: 2,
  },
  {
    id: 'blizzard',
    name: 'Blizzard Arctique',
    element: 'ice',
    description: 'Gèle tout sur son passage. Débloquée en maîtrisant la division de puissances.',
    icon: '🌨️',
    unlockedBy: 'powers_divide',
    requiredMastery: 100,
    tier: 2,
  },
  {
    id: 'void_collapse',
    name: 'Effondrement du Vide',
    element: 'shadow',
    description: 'Fait s\'effondrer l\'espace-temps. Débloquée en maîtrisant les puissances de puissances.',
    icon: '🌀',
    unlockedBy: 'powers_power_of_power',
    requiredMastery: 100,
    tier: 2,
  },

  // Tier 2 - Equations
  {
    id: 'force_push',
    name: 'Poussée Cinétique',
    element: 'wind',
    description: 'Repousse les ennemis avec une force invisible. Débloquée en maîtrisant les équations simples.',
    icon: '💨',
    unlockedBy: 'equations_simple',
    requiredMastery: 100,
    tier: 2,
  },
  {
    id: 'gravity_well',
    name: 'Puits Gravitationnel',
    element: 'earth',
    description: 'Crée un champ de gravité intense. Débloquée en maîtrisant les équations à deux étapes.',
    icon: '🌍',
    unlockedBy: 'equations_two_step',
    requiredMastery: 100,
    tier: 2,
  },
  {
    id: 'mirror_shield',
    name: 'Bouclier Miroir',
    element: 'light',
    description: 'Renvoie les attaques à l\'expéditeur. Débloquée en maîtrisant les variables des deux côtés.',
    icon: '🪞',
    unlockedBy: 'equations_variable_both_sides',
    requiredMastery: 100,
    tier: 2,
  },

  // Tier 2 - Proportions
  {
    id: 'time_slow',
    name: 'Ralentissement Temporel',
    element: 'ice',
    description: 'Ralentit le temps pour les ennemis. Débloquée en maîtrisant la proportionnalité directe.',
    icon: '⏱️',
    unlockedBy: 'proportions_direct',
    requiredMastery: 100,
    tier: 2,
  },
  {
    id: 'energy_drain',
    name: 'Drain d\'Énergie',
    element: 'shadow',
    description: 'Absorbe l\'énergie vitale des ennemis. Débloquée en maîtrisant les pourcentages.',
    icon: '💀',
    unlockedBy: 'proportions_percentage',
    requiredMastery: 100,
    tier: 2,
  },
  {
    id: 'dimension_scale',
    name: 'Distorsion Dimensionnelle',
    element: 'wind',
    description: 'Modifie la taille et les proportions. Débloquée en maîtrisant les échelles.',
    icon: '📏',
    unlockedBy: 'proportions_scale',
    requiredMastery: 100,
    tier: 2,
  },

  // Tier 3 - Literal Calculation
  {
    id: 'reality_expand',
    name: 'Expansion de la Réalité',
    element: 'light',
    description: 'Étend l\'espace et le temps. Débloquée en maîtrisant le développement.',
    icon: '🌟',
    unlockedBy: 'literal_expand',
    requiredMastery: 100,
    tier: 3,
  },
  {
    id: 'essence_factor',
    name: 'Factorisation de l\'Essence',
    element: 'shadow',
    description: 'Décompose la matière en ses composants. Débloquée en maîtrisant la factorisation.',
    icon: '⚗️',
    unlockedBy: 'literal_factor',
    requiredMastery: 100,
    tier: 3,
  },
  {
    id: 'chaos_simplify',
    name: 'Ordre dans le Chaos',
    element: 'earth',
    description: 'Simplifie et ordonne les forces chaotiques. Débloquée en maîtrisant la simplification.',
    icon: '☯️',
    unlockedBy: 'literal_simplify',
    requiredMastery: 100,
    tier: 3,
  },
  {
    id: 'variable_mastery',
    name: 'Maîtrise des Variables',
    element: 'lightning',
    description: 'Contrôle total sur les variables de combat. Débloquée en maîtrisant la substitution.',
    icon: '🎯',
    unlockedBy: 'literal_substitute',
    requiredMastery: 100,
    tier: 3,
  },
];

// Get magic spell by ID
export function getMagicSpellById(id: string): MagicSpell | undefined {
  return MAGIC_SPELLS.find((spell) => spell.id === id);
}

// Get magic spell unlocked by a skill
export function getMagicBySkill(skillId: string): MagicSpell | undefined {
  return MAGIC_SPELLS.find((spell) => spell.unlockedBy === skillId);
}

// Get all magic spells for an element
export function getMagicByElement(element: MagicElement): MagicSpell[] {
  return MAGIC_SPELLS.filter((spell) => spell.element === element);
}

// Get element color for UI
export function getElementColor(element: MagicElement): {
  gradient: string;
  border: string;
  glow: string;
  text: string;
} {
  switch (element) {
    case 'fire':
      return {
        gradient: 'from-red-600 via-orange-500 to-yellow-500',
        border: 'border-red-500',
        glow: 'shadow-red-500/50',
        text: 'text-red-400',
      };
    case 'water':
      return {
        gradient: 'from-blue-600 via-cyan-500 to-teal-500',
        border: 'border-blue-500',
        glow: 'shadow-blue-500/50',
        text: 'text-blue-400',
      };
    case 'lightning':
      return {
        gradient: 'from-yellow-600 via-yellow-400 to-white',
        border: 'border-yellow-500',
        glow: 'shadow-yellow-500/50',
        text: 'text-yellow-400',
      };
    case 'ice':
      return {
        gradient: 'from-cyan-600 via-blue-400 to-indigo-500',
        border: 'border-cyan-500',
        glow: 'shadow-cyan-500/50',
        text: 'text-cyan-400',
      };
    case 'earth':
      return {
        gradient: 'from-green-700 via-emerald-600 to-green-500',
        border: 'border-green-500',
        glow: 'shadow-green-500/50',
        text: 'text-green-400',
      };
    case 'wind':
      return {
        gradient: 'from-slate-500 via-gray-400 to-slate-300',
        border: 'border-slate-400',
        glow: 'shadow-slate-400/50',
        text: 'text-slate-300',
      };
    case 'shadow':
      return {
        gradient: 'from-purple-900 via-violet-800 to-purple-700',
        border: 'border-purple-600',
        glow: 'shadow-purple-600/50',
        text: 'text-purple-400',
      };
    case 'light':
      return {
        gradient: 'from-yellow-300 via-white to-yellow-200',
        border: 'border-yellow-300',
        glow: 'shadow-yellow-300/50',
        text: 'text-yellow-200',
      };
  }
}
