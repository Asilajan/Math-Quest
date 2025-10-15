import { useState } from 'react';
import { motion } from 'framer-motion';
import { Drawer } from '@/components/ui/drawer';
import { RPGCard } from './RPGCard';
import { getItemById, ShopItem } from '@math-app/core';
import { Check, X, Sparkles, Zap, Shield, ShoppingBag } from 'lucide-react';

interface InventoryDrawerProps {
  open: boolean;
  onClose: () => void;
  inventory: string[];
  equippedItems: {
    hat?: string;
    body?: string;
    accessory?: string;
  };
  onEquip: (itemId: string, slot: 'hat' | 'body' | 'accessory') => void;
  onUnequip: (slot: 'hat' | 'body' | 'accessory') => void;
}

export function InventoryDrawer({
  open,
  onClose,
  inventory,
  equippedItems,
  onEquip,
  onUnequip,
}: InventoryDrawerProps) {
  const [selectedCategory, setSelectedCategory] = useState<'hat' | 'body' | 'accessory'>('hat');

  const categories = [
    { id: 'hat' as const, label: 'Chapeaux', icon: Shield },
    { id: 'body' as const, label: 'Vêtements', icon: ShoppingBag },
    { id: 'accessory' as const, label: 'Accessoires', icon: Sparkles },
  ];

  const items = inventory
    .map((id) => getItemById(id))
    .filter((item): item is ShopItem => item !== undefined && item.category === selectedCategory);

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

  const isEquipped = (itemId: string) => {
    return Object.values(equippedItems).includes(itemId);
  };

  const handleEquip = (itemId: string, category: 'hat' | 'body' | 'accessory') => {
    if (isEquipped(itemId)) {
      onUnequip(category);
    } else {
      onEquip(itemId, category);
    }
  };

  return (
    <Drawer open={open} onClose={onClose} title="📦 Inventaire du Héros">
      <div className="space-y-6 p-2">
        {/* Description */}
        <div className="text-center">
          <p className="text-sm text-slate-300">
            Équipe tes artefacts pour obtenir des bonus magiques
          </p>
        </div>

        {/* Category selector - RPG Style */}
        <div className="flex gap-3 justify-center">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isActive = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`relative group flex items-center gap-2 px-4 py-2.5 rounded-lg transition-all whitespace-nowrap font-semibold uppercase tracking-wide text-xs ${
                  isActive
                    ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg shadow-indigo-500/50 scale-105'
                    : 'bg-slate-700/50 text-slate-300 hover:text-white hover:bg-slate-600/70 hover:scale-105'
                }`}
              >
                {isActive && (
                  <div className="absolute inset-0 bg-gradient-to-r from-indigo-400/20 to-purple-400/20 rounded-lg animate-pulse" />
                )}
                <Icon size={16} className="relative z-10" />
                <span className="relative z-10">{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Items list - RPG Style */}
        <div className="space-y-3 max-h-[500px] overflow-y-auto pr-2">
          {items.length === 0 ? (
            <RPGCard>
              <div className="p-8 text-center">
                <ShoppingBag className="mx-auto text-slate-500 mb-3" size={40} />
                <p className="text-slate-400 mb-2">
                  Aucun objet dans ton inventaire
                </p>
                <p className="text-slate-500 text-sm">
                  Visite le marchand pour acquérir des artefacts !
                </p>
              </div>
            </RPGCard>
          ) : (
            items.map((item, index) => {
              const equipped = isEquipped(item.id);
              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.2, delay: index * 0.05 }}
                  className="relative"
                >
                  {/* Glow effect for equipped items */}
                  {equipped && (
                    <div className="absolute inset-0 bg-gradient-to-r from-green-500/30 to-emerald-500/30 rounded-lg blur-lg animate-pulse" />
                  )}

                  <div className={`relative bg-gradient-to-br ${getRarityGradient(item.rarity)} border-2 rounded-lg overflow-hidden shadow-lg ${getRarityGlow(item.rarity)} transition-all hover:scale-102`}>
                    {/* Corner decorations */}
                    <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-yellow-500/30" />
                    <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-yellow-500/30" />
                    <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-yellow-500/30" />
                    <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-yellow-500/30" />

                    {/* Equipped badge */}
                    {equipped && (
                      <div className="absolute -top-1 -right-1 z-10">
                        <div className="relative">
                          <div className="absolute inset-0 bg-green-500 rounded-full blur-md opacity-70" />
                          <div className="relative bg-gradient-to-br from-green-500 to-emerald-600 text-white text-xs px-2 py-1 rounded-full font-bold flex items-center gap-1 border-2 border-green-400 shadow-lg">
                            <Check size={12} />
                            ÉQUIPÉ
                          </div>
                        </div>
                      </div>
                    )}

                    <div className="p-4">
                      <div className="flex items-start justify-between gap-3">
                        <div className="flex-1 space-y-2">
                          {/* Item name and rarity */}
                          <div className="space-y-1">
                            <div className="flex items-center gap-2">
                              <Sparkles size={16} className={item.rarity === 'legendary' ? 'text-yellow-400' : item.rarity === 'epic' ? 'text-purple-400' : item.rarity === 'rare' ? 'text-blue-400' : 'text-slate-400'} />
                              <h3 className="font-bold text-white">{item.name}</h3>
                            </div>
                          </div>

                          {/* Description */}
                          <p className="text-sm text-slate-300">{item.description}</p>

                          {/* Bonus effect */}
                          {item.bonusEffect && (
                            <div className="flex items-start gap-1.5 bg-slate-900/60 border border-indigo-500/30 rounded px-2 py-1.5">
                              <Zap size={12} className="text-indigo-400 mt-0.5 flex-shrink-0" />
                              <p className="text-xs text-indigo-300">
                                {getBonusText(item.bonusEffect)}
                              </p>
                            </div>
                          )}
                        </div>

                        {/* Equip/Unequip button */}
                        <button
                          onClick={() => handleEquip(item.id, selectedCategory)}
                          className={`flex-shrink-0 px-3 py-2 rounded-lg font-bold text-xs uppercase tracking-wide transition-all ${
                            equipped
                              ? 'bg-gradient-to-r from-red-600 to-red-700 text-white hover:from-red-500 hover:to-red-600 shadow-lg hover:shadow-red-500/50'
                              : 'bg-gradient-to-r from-green-600 to-emerald-600 text-white hover:from-green-500 hover:to-emerald-500 shadow-lg hover:shadow-green-500/50'
                          } hover:scale-105 active:scale-95`}
                        >
                          {equipped ? (
                            <div className="flex items-center gap-1">
                              <X size={14} />
                              <span>Retirer</span>
                            </div>
                          ) : (
                            <div className="flex items-center gap-1">
                              <Check size={14} />
                              <span>Équiper</span>
                            </div>
                          )}
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })
          )}
        </div>
      </div>
    </Drawer>
  );
}

function getBonusText(bonusEffect: ShopItem['bonusEffect']): string {
  if (!bonusEffect) return '';

  switch (bonusEffect.type) {
    case 'xp_multiplier':
      return `+${Math.round((bonusEffect.value - 1) * 100)}% XP`;
    case 'coin_multiplier':
      return `+${Math.round((bonusEffect.value - 1) * 100)}% pièces`;
    case 'hint_discount':
      return `${Math.round(bonusEffect.value * 100)}% de réduction sur les indices`;
    case 'theme_unlock':
      return 'Débloque un nouveau thème';
    default:
      return '';
  }
}
