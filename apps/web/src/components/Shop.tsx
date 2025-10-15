import { useState } from 'react';
import { motion } from 'framer-motion';
import { RPGCard } from './RPGCard';
import { SHOP_CATALOG, ShopItem, getItemsByCategory } from '@math-app/core';
import { Coins, ShoppingBag, Sparkles, Crown, Shirt, Glasses, Palette, Zap, Check } from 'lucide-react';

interface ShopProps {
  coins: number;
  inventory: string[];
  onPurchase: (itemId: string) => void;
}

export function Shop({ coins, inventory, onPurchase }: ShopProps) {
  const [selectedCategory, setSelectedCategory] = useState<ShopItem['category']>('hat');

  const categories = [
    { id: 'hat' as const, label: 'Chapeaux', icon: Crown },
    { id: 'body' as const, label: 'Vêtements', icon: Shirt },
    { id: 'accessory' as const, label: 'Accessoires', icon: Glasses },
    { id: 'theme' as const, label: 'Thèmes', icon: Palette },
    { id: 'bonus' as const, label: 'Bonus', icon: Zap },
  ];

  const items = getItemsByCategory(selectedCategory);

  const getRarityGradient = (rarity: ShopItem['rarity']) => {
    switch (rarity) {
      case 'common':
        return 'from-slate-700 to-slate-800 border-slate-500';
      case 'rare':
        return 'from-blue-700 to-blue-800 border-blue-500';
      case 'epic':
        return 'from-purple-700 to-purple-800 border-purple-500';
      case 'legendary':
        return 'from-yellow-700 to-yellow-800 border-yellow-500';
    }
  };

  const getRarityGlow = (rarity: ShopItem['rarity']) => {
    switch (rarity) {
      case 'common':
        return 'shadow-slate-500/20';
      case 'rare':
        return 'shadow-blue-500/40';
      case 'epic':
        return 'shadow-purple-500/50';
      case 'legendary':
        return 'shadow-yellow-500/60';
    }
  };

  const getRarityLabel = (rarity: ShopItem['rarity']) => {
    switch (rarity) {
      case 'common':
        return 'Commun';
      case 'rare':
        return 'Rare';
      case 'epic':
        return 'Épique';
      case 'legendary':
        return 'Légendaire';
    }
  };

  const canAfford = (price: number) => coins >= price;
  const isOwned = (itemId: string) => inventory.includes(itemId);

  return (
    <div className="space-y-6">
      {/* Header with coins - RPG Style */}
      <RPGCard variant="gold" glow>
        <div className="p-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="relative">
                <div className="absolute inset-0 bg-yellow-500 rounded-lg blur-md opacity-50" />
                <div className="relative w-14 h-14 bg-gradient-to-br from-yellow-600 to-orange-700 rounded-lg flex items-center justify-center border-2 border-yellow-500">
                  <ShoppingBag className="text-yellow-100" size={28} />
                </div>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-yellow-200 tracking-wide uppercase">Marchand d'Artefacts</h2>
                <p className="text-yellow-100/70 text-sm">Équipe-toi pour tes quêtes mathématiques</p>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/10 to-orange-500/10 rounded-lg blur" />
              <div className="relative bg-gradient-to-br from-yellow-900/80 to-orange-900/80 border-2 border-yellow-600 rounded-lg px-6 py-3">
                <div className="flex items-center gap-2">
                  <Coins className="text-yellow-400" size={28} />
                  <motion.span
                    key={coins}
                    initial={{ scale: 1.3, color: '#fbbf24' }}
                    animate={{ scale: 1, color: '#fef3c7' }}
                    className="text-3xl font-bold"
                  >
                    {coins}
                  </motion.span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </RPGCard>

      {/* Category selector - RPG Style */}
      <RPGCard>
        <div className="p-4">
          <div className="flex gap-3 overflow-x-auto pb-2">
            {categories.map((cat) => {
              const Icon = cat.icon;
              const isActive = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`relative group flex items-center gap-2 px-6 py-3 rounded-lg transition-all whitespace-nowrap font-semibold uppercase tracking-wide text-sm ${
                    isActive
                      ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg shadow-indigo-500/50 scale-105'
                      : 'bg-slate-700/50 text-slate-300 hover:text-white hover:bg-slate-600/70 hover:scale-105'
                  }`}
                >
                  {isActive && (
                    <div className="absolute inset-0 bg-gradient-to-r from-indigo-400/20 to-purple-400/20 rounded-lg animate-pulse" />
                  )}
                  <Icon size={18} className="relative z-10" />
                  <span className="relative z-10">{cat.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      </RPGCard>

      {/* Items grid - RPG Style */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {items.map((item, index) => {
          const owned = isOwned(item.id);
          const affordable = canAfford(item.price);

          return (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="relative"
            >
              {/* Glow effect for legendary items */}
              {item.rarity === 'legendary' && (
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/30 to-orange-500/30 rounded-lg blur-xl animate-pulse" />
              )}
              {item.rarity === 'epic' && (
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-lg blur-lg" />
              )}

              <div className={`relative bg-gradient-to-br ${getRarityGradient(item.rarity)} border-2 rounded-lg overflow-hidden shadow-lg ${getRarityGlow(item.rarity)} transition-all hover:scale-105 hover:shadow-2xl`}>
                {/* Corner decorations */}
                <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-yellow-500/30" />
                <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-yellow-500/30" />
                <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-yellow-500/30" />
                <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-yellow-500/30" />

                {/* Owned badge */}
                {owned && (
                  <div className="absolute top-3 right-3 z-10">
                    <div className="relative">
                      <div className="absolute inset-0 bg-green-500 rounded-full blur opacity-50" />
                      <div className="relative bg-gradient-to-br from-green-500 to-green-600 text-white text-xs px-3 py-1.5 rounded-full font-bold flex items-center gap-1 border border-green-400">
                        <Check size={12} />
                        POSSÉDÉ
                      </div>
                    </div>
                  </div>
                )}

                <div className="p-5 space-y-4">
                  {/* Item header */}
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Sparkles size={18} className={item.rarity === 'legendary' ? 'text-yellow-400' : item.rarity === 'epic' ? 'text-purple-400' : item.rarity === 'rare' ? 'text-blue-400' : 'text-slate-400'} />
                      <h3 className="text-lg font-bold text-white tracking-wide">{item.name}</h3>
                    </div>
                    <div className={`inline-block px-2 py-0.5 rounded text-xs font-bold uppercase tracking-wider ${
                      item.rarity === 'legendary' ? 'bg-yellow-500/20 text-yellow-300 border border-yellow-500/30' :
                      item.rarity === 'epic' ? 'bg-purple-500/20 text-purple-300 border border-purple-500/30' :
                      item.rarity === 'rare' ? 'bg-blue-500/20 text-blue-300 border border-blue-500/30' :
                      'bg-slate-500/20 text-slate-300 border border-slate-500/30'
                    }`}>
                      {getRarityLabel(item.rarity)}
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-slate-200 min-h-[40px]">
                    {item.description}
                  </p>

                  {/* Bonus effect */}
                  {item.bonusEffect && (
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 rounded blur" />
                      <div className="relative bg-slate-900/60 border border-indigo-500/30 rounded-lg p-3">
                        <div className="flex items-start gap-2">
                          <Zap size={14} className="text-indigo-400 mt-0.5 flex-shrink-0" />
                          <div>
                            <p className="text-xs font-bold text-indigo-300 uppercase">Effet magique</p>
                            <p className="text-xs text-slate-300 mt-1">
                              {getBonusDescription(item.bonusEffect)}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Price and buy button */}
                  <div className="flex items-center justify-between pt-2 border-t border-slate-600/50">
                    <div className="flex items-center gap-2">
                      <Coins className="text-yellow-400" size={20} />
                      <span className="font-bold text-xl text-yellow-200">{item.price}</span>
                    </div>
                    <button
                      disabled={owned || !affordable}
                      onClick={() => onPurchase(item.id)}
                      className={`px-4 py-2 rounded-lg font-bold text-sm uppercase tracking-wide transition-all ${
                        owned
                          ? 'bg-slate-600 text-slate-400 cursor-not-allowed'
                          : !affordable
                          ? 'bg-red-900/50 text-red-300 border border-red-700 cursor-not-allowed'
                          : 'bg-gradient-to-r from-green-600 to-emerald-600 text-white hover:from-green-500 hover:to-emerald-500 shadow-lg hover:shadow-green-500/50 hover:scale-105 active:scale-95'
                      }`}
                    >
                      {owned ? 'Possédé' : !affordable ? 'Trop cher' : 'Acheter'}
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {items.length === 0 && (
        <RPGCard>
          <div className="p-12 text-center">
            <ShoppingBag className="mx-auto text-slate-500 mb-4" size={48} />
            <p className="text-slate-400 text-lg">Aucun artefact disponible dans cette catégorie.</p>
            <p className="text-slate-500 text-sm mt-2">Reviens plus tard pour découvrir de nouveaux objets !</p>
          </div>
        </RPGCard>
      )}
    </div>
  );
}

function getBonusDescription(bonusEffect: ShopItem['bonusEffect']): string {
  if (!bonusEffect) return '';

  switch (bonusEffect.type) {
    case 'xp_multiplier':
      const xpBonus = Math.round((bonusEffect.value - 1) * 100);
      return bonusEffect.duration
        ? `+${xpBonus}% XP pendant ${bonusEffect.duration} exercices`
        : `+${xpBonus}% XP permanent`;
    case 'coin_multiplier':
      const coinBonus = Math.round((bonusEffect.value - 1) * 100);
      return bonusEffect.duration
        ? `+${coinBonus}% pièces pendant ${bonusEffect.duration} exercices`
        : `+${coinBonus}% pièces permanent`;
    case 'hint_discount':
      const discount = Math.round(bonusEffect.value * 100);
      return `${discount}% de réduction sur les indices`;
    case 'theme_unlock':
      return 'Débloque un nouveau thème';
    default:
      return '';
  }
}
