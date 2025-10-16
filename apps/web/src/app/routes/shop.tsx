import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { RPGCard } from '@/components/RPGCard';
import { useCharacter } from '@/contexts/CharacterContext';
import {
  ShoppingBag,
  Coins,
  Check,
  Lock,
  Sparkles,
  Shield,
  Zap,
  Gift,
  Crown,
  Shirt,
} from 'lucide-react';
import { SHOP_CATALOG, CATEGORY_LABELS, RARITY_COLORS, type ShopItem } from '@math-app/core';

export default function Shop() {
  const { character, purchaseItem, increaseMaxHP } = useCharacter();
  const [selectedCategory, setSelectedCategory] = useState<ShopItem['category'] | 'all'>('all');
  const [purchaseSuccess, setPurchaseSuccess] = useState<string | null>(null);
  const [purchaseError, setPurchaseError] = useState<string | null>(null);

  const handlePurchase = (item: ShopItem) => {
    // Check if already owned
    if (character.inventory.includes(item.id)) {
      setPurchaseError('Tu possèdes déjà cet item !');
      setTimeout(() => setPurchaseError(null), 3000);
      return;
    }

    // Check if enough coins
    if (character.coins < item.price) {
      setPurchaseError('Pas assez de pièces !');
      setTimeout(() => setPurchaseError(null), 3000);
      return;
    }

    // Purchase item
    const success = purchaseItem(item.id, item.price);
    if (success) {
      // Apply special effects
      if (item.bonusEffect?.type === 'max_hp_boost') {
        increaseMaxHP(item.bonusEffect.value);
      }

      setPurchaseSuccess(item.id);
      setTimeout(() => setPurchaseSuccess(null), 2000);
    }
  };

  const filteredItems =
    selectedCategory === 'all'
      ? SHOP_CATALOG
      : SHOP_CATALOG.filter((item) => item.category === selectedCategory);

  const categories: Array<ShopItem['category'] | 'all'> = [
    'all',
    'weapon',
    'armor',
    'power',
    'bonus',
    'hat',
    'body',
  ];

  const getCategoryIcon = (category: ShopItem['category'] | 'all') => {
    switch (category) {
      case 'all':
        return <ShoppingBag size={18} />;
      case 'weapon':
        return <Zap size={18} />;
      case 'armor':
        return <Shield size={18} />;
      case 'power':
        return <Sparkles size={18} />;
      case 'bonus':
        return <Gift size={18} />;
      case 'hat':
        return <Crown size={18} />;
      case 'body':
        return <Shirt size={18} />;
      default:
        return <ShoppingBag size={18} />;
    }
  };

  const getCategoryLabel = (category: ShopItem['category'] | 'all') => {
    if (category === 'all') return '🛒 Tout';
    return CATEGORY_LABELS[category];
  };

  return (
    <div className="max-w-7xl mx-auto space-y-6">
      {/* Header */}
      <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}>
        <RPGCard variant="gold" glow>
          <div className="p-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="relative">
                  <div className="absolute inset-0 bg-yellow-500 rounded-lg blur-md opacity-50" />
                  <div className="relative w-16 h-16 bg-gradient-to-br from-yellow-600 to-orange-700 rounded-lg flex items-center justify-center border-2 border-yellow-500">
                    <ShoppingBag className="text-yellow-100" size={32} />
                  </div>
                </div>
                <div>
                  <h1 className="text-3xl font-bold text-yellow-200 tracking-wide uppercase">
                    Boutique Magique
                  </h1>
                  <p className="text-yellow-100/70 mt-1">
                    Améliore ton équipement et débloquer de nouveaux pouvoirs !
                  </p>
                </div>
              </div>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 rounded-lg blur" />
                <div className="relative bg-gradient-to-br from-yellow-900/80 to-orange-900/80 border-2 border-yellow-600 rounded-lg px-6 py-4">
                  <p className="text-xs text-yellow-200 uppercase tracking-wide">Ton trésor</p>
                  <div className="flex items-center gap-2 mt-1">
                    <Coins className="text-yellow-400" size={24} />
                    <span className="text-3xl font-bold text-yellow-100">{character.coins}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </RPGCard>
      </motion.div>

      {/* Category Filter */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <RPGCard>
          <div className="p-4">
            <div className="flex items-center gap-3 flex-wrap justify-center">
              <span className="text-sm font-bold text-slate-200 uppercase tracking-wide">
                Catégorie :
              </span>
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`relative flex items-center gap-2 px-4 py-2 rounded-lg transition-all font-semibold uppercase tracking-wide text-sm ${
                    selectedCategory === category
                      ? 'bg-gradient-to-r from-yellow-600 to-orange-600 text-white shadow-lg shadow-yellow-500/50 scale-105'
                      : 'bg-slate-700/50 text-slate-300 hover:text-white hover:bg-slate-600/70 hover:scale-105'
                  }`}
                >
                  {selectedCategory === category && (
                    <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 to-orange-400/20 rounded-lg animate-pulse" />
                  )}
                  <span className="relative z-10">{getCategoryIcon(category)}</span>
                  <span className="relative z-10">{getCategoryLabel(category)}</span>
                </button>
              ))}
            </div>
          </div>
        </RPGCard>
      </motion.div>

      {/* Purchase Feedback */}
      <AnimatePresence>
        {purchaseSuccess && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.9 }}
            className="fixed top-20 left-1/2 -translate-x-1/2 z-50"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-green-500/40 rounded-lg blur-xl animate-pulse" />
              <div className="relative bg-gradient-to-r from-green-600 to-emerald-600 text-white px-6 py-4 rounded-lg shadow-2xl border-2 border-green-400">
                <div className="flex items-center gap-3">
                  <Check size={24} />
                  <span className="font-bold">Achat réussi ! 🎉</span>
                </div>
              </div>
            </div>
          </motion.div>
        )}
        {purchaseError && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.9 }}
            className="fixed top-20 left-1/2 -translate-x-1/2 z-50"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-red-500/40 rounded-lg blur-xl animate-pulse" />
              <div className="relative bg-gradient-to-r from-red-600 to-orange-600 text-white px-6 py-4 rounded-lg shadow-2xl border-2 border-red-400">
                <div className="flex items-center gap-3">
                  <Lock size={24} />
                  <span className="font-bold">{purchaseError}</span>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Items Grid */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
      >
        {filteredItems.map((item, index) => {
          const isOwned = character.inventory.includes(item.id);
          const canAfford = character.coins >= item.price;
          const rarityColor = RARITY_COLORS[item.rarity];

          return (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
            >
              <RPGCard
                variant={
                  item.rarity === 'legendary'
                    ? 'gold'
                    : item.rarity === 'epic'
                      ? 'silver'
                      : 'bronze'
                }
              >
                <div className="p-5">
                  {/* Item Header */}
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div className={`text-4xl ${isOwned ? 'grayscale opacity-50' : ''}`}>
                        {item.icon || '📦'}
                      </div>
                      <div>
                        <h3 className={`font-bold text-lg ${rarityColor}`}>{item.name}</h3>
                        <p className={`text-xs uppercase font-semibold ${rarityColor}`}>
                          {item.rarity}
                        </p>
                      </div>
                    </div>
                    {isOwned && (
                      <div className="bg-green-500/20 border border-green-500 rounded-full p-1.5">
                        <Check className="text-green-400" size={16} />
                      </div>
                    )}
                  </div>

                  {/* Description */}
                  <p className="text-slate-300 text-sm mb-3">{item.description}</p>

                  {/* Bonus Effect */}
                  {item.bonusEffect && (
                    <div className="bg-indigo-900/30 border border-indigo-600/50 rounded-lg p-3 mb-3">
                      <p className="text-indigo-300 text-xs font-semibold uppercase mb-1">
                        Effet bonus
                      </p>
                      <p className="text-indigo-200 text-sm">
                        {item.bonusEffect.description || `+${item.bonusEffect.value}%`}
                      </p>
                    </div>
                  )}

                  {/* Price and Purchase Button */}
                  <div className="flex items-center justify-between mt-4">
                    <div className="flex items-center gap-2">
                      <Coins className="text-yellow-400" size={20} />
                      <span className="text-2xl font-bold text-yellow-100">{item.price}</span>
                    </div>
                    <button
                      onClick={() => handlePurchase(item)}
                      disabled={isOwned || !canAfford}
                      className={`relative px-4 py-2 rounded-lg font-bold uppercase text-sm transition-all ${
                        isOwned
                          ? 'bg-slate-700/50 text-slate-500 cursor-not-allowed'
                          : !canAfford
                            ? 'bg-red-900/50 text-red-300 cursor-not-allowed'
                            : 'bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-500 hover:to-emerald-500 text-white shadow-lg hover:shadow-green-500/50 hover:scale-105 active:scale-95'
                      }`}
                    >
                      {isOwned ? (
                        <span className="flex items-center gap-2">
                          <Check size={16} />
                          Possédé
                        </span>
                      ) : !canAfford ? (
                        <span className="flex items-center gap-2">
                          <Lock size={16} />
                          Trop cher
                        </span>
                      ) : (
                        'Acheter'
                      )}
                    </button>
                  </div>
                </div>
              </RPGCard>
            </motion.div>
          );
        })}
      </motion.div>

      {/* Empty State */}
      {filteredItems.length === 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center py-20"
        >
          <RPGCard>
            <div className="p-12">
              <ShoppingBag className="mx-auto text-slate-600 mb-4" size={64} />
              <h3 className="text-2xl font-bold text-slate-400 mb-2">
                Aucun item dans cette catégorie
              </h3>
              <p className="text-slate-500">
                Sélectionne une autre catégorie pour voir les items disponibles.
              </p>
            </div>
          </RPGCard>
        </motion.div>
      )}
    </div>
  );
}
