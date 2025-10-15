import { ShopItem } from './types';

// Catalog of purchasable items
export const SHOP_ITEMS: ShopItem[] = [
  // Hats
  {
    id: 'hat_basic_cap',
    name: 'Casquette basique',
    description: 'Une casquette simple pour commencer',
    price: 50,
    category: 'hat',
    rarity: 'common',
  },
  {
    id: 'hat_wizard',
    name: 'Chapeau de magicien',
    description: '+10% XP sur tous les exercices',
    price: 200,
    category: 'hat',
    rarity: 'rare',
    bonusEffect: {
      type: 'xp_multiplier',
      value: 1.1,
    },
  },
  {
    id: 'hat_crown',
    name: 'Couronne royale',
    description: '+20% XP et +15% pièces',
    price: 500,
    category: 'hat',
    rarity: 'legendary',
    bonusEffect: {
      type: 'xp_multiplier',
      value: 1.2,
    },
  },

  // Body items
  {
    id: 'body_tshirt',
    name: 'T-shirt bleu',
    description: 'Un t-shirt confortable',
    price: 30,
    category: 'body',
    rarity: 'common',
  },
  {
    id: 'body_scientist',
    name: 'Blouse de scientifique',
    description: 'Les indices coûtent 50% moins cher',
    price: 250,
    category: 'body',
    rarity: 'epic',
    bonusEffect: {
      type: 'hint_discount',
      value: 0.5,
    },
  },

  // Accessories
  {
    id: 'acc_glasses',
    name: 'Lunettes',
    description: 'Pour mieux voir les exercices',
    price: 75,
    category: 'accessory',
    rarity: 'common',
  },
  {
    id: 'acc_calculator',
    name: 'Calculatrice magique',
    description: '+15% pièces par exercice',
    price: 180,
    category: 'accessory',
    rarity: 'rare',
    bonusEffect: {
      type: 'coin_multiplier',
      value: 1.15,
    },
  },

  // Themes
  {
    id: 'theme_dark',
    name: 'Thème sombre',
    description: 'Interface en mode sombre',
    price: 100,
    category: 'theme',
    rarity: 'common',
    bonusEffect: {
      type: 'theme_unlock',
      value: 1,
    },
  },
  {
    id: 'theme_ocean',
    name: 'Thème océan',
    description: 'Couleurs inspirées de la mer',
    price: 150,
    category: 'theme',
    rarity: 'rare',
    bonusEffect: {
      type: 'theme_unlock',
      value: 2,
    },
  },
  {
    id: 'theme_sunset',
    name: 'Thème coucher de soleil',
    description: 'Dégradés chaleureux',
    price: 200,
    category: 'theme',
    rarity: 'epic',
    bonusEffect: {
      type: 'theme_unlock',
      value: 3,
    },
  },

  // Bonus items
  {
    id: 'bonus_double_xp',
    name: 'XP doublé (10 exercices)',
    description: 'Gagne 2x plus d\'XP pendant 10 exercices',
    price: 120,
    category: 'bonus',
    rarity: 'rare',
    bonusEffect: {
      type: 'xp_multiplier',
      value: 2,
      duration: 10,
    },
  },
  {
    id: 'bonus_coin_rush',
    name: 'Rush de pièces (5 exercices)',
    description: 'Gagne 3x plus de pièces pendant 5 exercices',
    price: 100,
    category: 'bonus',
    rarity: 'epic',
    bonusEffect: {
      type: 'coin_multiplier',
      value: 3,
      duration: 5,
    },
  },
];

// Get items by category
export function getItemsByCategory(category: ShopItem['category']): ShopItem[] {
  return SHOP_ITEMS.filter((item) => item.category === category);
}

// Get item by ID
export function getItemById(id: string): ShopItem | undefined {
  return SHOP_ITEMS.find((item) => item.id === id);
}

// Calculate total bonuses from equipped items
export function calculateEquippedBonuses(
  equippedItems: { hat?: string; body?: string; accessory?: string },
  inventory: string[]
): {
  xpMultiplier: number;
  coinMultiplier: number;
  hintDiscount: number;
} {
  const equipped = [
    equippedItems.hat,
    equippedItems.body,
    equippedItems.accessory,
  ].filter((id): id is string => id !== undefined && inventory.includes(id));

  let xpMultiplier = 1;
  let coinMultiplier = 1;
  let hintDiscount = 0;

  equipped.forEach((itemId) => {
    const item = getItemById(itemId);
    if (!item?.bonusEffect) return;

    switch (item.bonusEffect.type) {
      case 'xp_multiplier':
        xpMultiplier *= item.bonusEffect.value;
        break;
      case 'coin_multiplier':
        coinMultiplier *= item.bonusEffect.value;
        break;
      case 'hint_discount':
        hintDiscount = Math.max(hintDiscount, item.bonusEffect.value);
        break;
    }
  });

  return { xpMultiplier, coinMultiplier, hintDiscount };
}
