import { ShopItem } from './types';

// Catalogue complet des items disponibles dans la boutique
export const SHOP_CATALOG: ShopItem[] = [
  // === ARMES ===
  {
    id: 'wooden_sword',
    name: 'Épée en bois',
    description: 'Une simple épée pour commencer. +5% dégâts',
    price: 50,
    category: 'weapon',
    rarity: 'common',
    icon: '🗡️',
    bonusEffect: {
      type: 'damage_boost',
      value: 5,
      description: '+5% de dégâts contre les monstres',
    },
  },
  {
    id: 'iron_sword',
    name: 'Épée en fer',
    description: 'Une arme solide pour les aventuriers. +10% dégâts',
    price: 150,
    category: 'weapon',
    rarity: 'common',
    icon: '⚔️',
    bonusEffect: {
      type: 'damage_boost',
      value: 10,
      description: '+10% de dégâts contre les monstres',
    },
  },
  {
    id: 'magic_staff',
    name: 'Bâton magique',
    description: 'Augmente les pièces gagnées. +15% pièces',
    price: 200,
    category: 'weapon',
    rarity: 'rare',
    icon: '🪄',
    bonusEffect: {
      type: 'coin_multiplier',
      value: 15,
      description: '+15% de pièces par victoire',
    },
  },
  {
    id: 'legendary_blade',
    name: 'Lame légendaire',
    description: 'Arme ultime ! +20% dégâts et +10% XP',
    price: 500,
    category: 'weapon',
    rarity: 'legendary',
    icon: '🗡️',
    bonusEffect: {
      type: 'damage_boost',
      value: 20,
      description: '+20% dégâts et +10% XP',
    },
  },

  // === ARMURES ===
  {
    id: 'leather_armor',
    name: 'Armure en cuir',
    description: 'Protection de base. +5% défense',
    price: 80,
    category: 'armor',
    rarity: 'common',
    icon: '🛡️',
    bonusEffect: {
      type: 'defense_boost',
      value: 5,
      description: 'Réduit la difficulté des problèmes de 5%',
    },
  },
  {
    id: 'iron_armor',
    name: 'Armure en fer',
    description: 'Bonne protection. +10% défense',
    price: 200,
    category: 'armor',
    rarity: 'rare',
    icon: '🛡️',
    bonusEffect: {
      type: 'defense_boost',
      value: 10,
      description: 'Réduit la difficulté des problèmes de 10%',
    },
  },
  {
    id: 'dragon_armor',
    name: 'Armure de dragon',
    description: 'Protection légendaire ! +20% défense',
    price: 600,
    category: 'armor',
    rarity: 'legendary',
    icon: '🐉',
    bonusEffect: {
      type: 'defense_boost',
      value: 20,
      description: 'Réduit fortement la difficulté des problèmes',
    },
  },

  // === POUVOIRS / BONUS ===
  {
    id: 'pikachu_tail',
    name: 'Queue de Pikachu',
    description: 'Augmente ta barre de vie de 1 PV !',
    price: 150,
    category: 'power',
    rarity: 'epic',
    icon: '⚡',
    bonusEffect: {
      type: 'max_hp_boost',
      value: 1,
      description: '+1 PV maximum (permanent)',
    },
  },
  {
    id: 'ai_hints_pack',
    name: 'Pack Indices IA',
    description: '10 indices IA pour t\'aider !',
    price: 100,
    category: 'power',
    rarity: 'rare',
    icon: '🤖',
    bonusEffect: {
      type: 'ai_hints',
      value: 10,
      description: 'Obtiens 10 indices générés par IA',
    },
  },
  {
    id: 'hint_discount',
    name: 'Réduction Indices',
    description: 'Les indices coûtent 50% moins cher',
    price: 150,
    category: 'power',
    rarity: 'rare',
    icon: '💡',
    bonusEffect: {
      type: 'hint_discount',
      value: 50,
      description: '-50% sur le coût des indices',
    },
  },
  {
    id: 'xp_booster',
    name: 'Booster XP',
    description: '+25% XP pendant 10 exercices',
    price: 120,
    category: 'power',
    rarity: 'rare',
    icon: '⭐',
    bonusEffect: {
      type: 'xp_multiplier',
      value: 25,
      duration: 10,
      description: '+25% XP sur les 10 prochains exercices',
    },
  },
  {
    id: 'coin_magnet',
    name: 'Aimant à pièces',
    description: '+50% pièces pendant 10 exercices',
    price: 180,
    category: 'power',
    rarity: 'epic',
    icon: '🧲',
    bonusEffect: {
      type: 'coin_multiplier',
      value: 50,
      duration: 10,
      description: '+50% de pièces sur les 10 prochains exercices',
    },
  },

  // === DÉBLOCAGES DE CONTENU ===
  {
    id: 'unlock_geometry',
    name: 'Débloquer Géométrie',
    description: 'Accède au chapitre Géométrie !',
    price: 300,
    category: 'bonus',
    rarity: 'epic',
    icon: '📐',
    bonusEffect: {
      type: 'content_unlock',
      value: 1,
      description: 'Débloque le chapitre Géométrie',
    },
  },
  {
    id: 'unlock_algebra',
    name: 'Débloquer Algèbre',
    description: 'Accède au chapitre Algèbre !',
    price: 300,
    category: 'bonus',
    rarity: 'epic',
    icon: '📊',
    bonusEffect: {
      type: 'content_unlock',
      value: 2,
      description: 'Débloque le chapitre Algèbre',
    },
  },
  {
    id: 'video_tutorials_1',
    name: 'Vidéos Tutoriels Niveau 1',
    description: 'Vidéos explicatives pour débutants',
    price: 250,
    category: 'bonus',
    rarity: 'rare',
    icon: '🎥',
    bonusEffect: {
      type: 'video_unlock',
      value: 1,
      description: 'Débloque les vidéos tutoriels niveau 1',
    },
  },
  {
    id: 'video_tutorials_2',
    name: 'Vidéos Tutoriels Niveau 2',
    description: 'Vidéos explicatives avancées',
    price: 400,
    category: 'bonus',
    rarity: 'epic',
    icon: '🎥',
    bonusEffect: {
      type: 'video_unlock',
      value: 2,
      description: 'Débloque les vidéos tutoriels niveau 2',
    },
  },

  // === COSMÉTIQUES ===
  {
    id: 'wizard_hat',
    name: 'Chapeau de magicien',
    description: 'Style magique !',
    price: 100,
    category: 'hat',
    rarity: 'rare',
    icon: '🧙',
  },
  {
    id: 'crown',
    name: 'Couronne royale',
    description: 'Pour les champions !',
    price: 300,
    category: 'hat',
    rarity: 'epic',
    icon: '👑',
  },
  {
    id: 'ninja_outfit',
    name: 'Tenue de ninja',
    description: 'Discrétion et style',
    price: 250,
    category: 'body',
    rarity: 'epic',
    icon: '🥷',
  },
];

// Helper functions
export function getItemById(id: string): ShopItem | undefined {
  return SHOP_CATALOG.find((item) => item.id === id);
}

export function getItemsByCategory(category: ShopItem['category']): ShopItem[] {
  return SHOP_CATALOG.filter((item) => item.category === category);
}

export function getItemsByRarity(rarity: ShopItem['rarity']): ShopItem[] {
  return SHOP_CATALOG.filter((item) => item.rarity === rarity);
}

export const CATEGORY_LABELS: Record<ShopItem['category'], string> = {
  weapon: '⚔️ Armes',
  armor: '🛡️ Armures',
  power: '✨ Pouvoirs',
  bonus: '🎁 Bonus',
  hat: '🎩 Chapeaux',
  body: '👕 Tenues',
  accessory: '💍 Accessoires',
  theme: '🎨 Thèmes',
};

export const RARITY_COLORS: Record<ShopItem['rarity'], string> = {
  common: 'text-gray-400',
  rare: 'text-blue-400',
  epic: 'text-purple-400',
  legendary: 'text-orange-400',
};
