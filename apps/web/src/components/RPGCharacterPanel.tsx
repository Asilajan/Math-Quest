import { motion } from 'framer-motion';
import { RPGCard } from './RPGCard';
import { RPGStatBar } from './RPGStatBar';
import { PixelCharacter } from './PixelCharacter';
import { PlayerCharacter, getLevelFromXP } from '@math-app/core';
import { Sparkles, Coins, Crown, ShoppingBag, User } from 'lucide-react';

interface RPGCharacterPanelProps {
  character: PlayerCharacter;
  onOpenShop?: () => void;
  onOpenInventory?: () => void;
  onViewCharacter?: () => void;
}

export function RPGCharacterPanel({ character, onOpenShop, onOpenInventory, onViewCharacter }: RPGCharacterPanelProps) {
  const { level, currentXP, xpForNext } = getLevelFromXP(character.xp);

  return (
    <RPGCard variant="gold" glow className="overflow-visible">
      <div className="p-6 space-y-4">
        {/* Title */}
        <button
          onClick={onViewCharacter}
          className="w-full text-center hover:scale-105 transition-transform"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1 bg-yellow-900/50 hover:bg-yellow-800/60 border-2 border-yellow-600 hover:border-yellow-500 rounded-full transition-colors">
            <Crown className="text-yellow-400" size={16} />
            <h2 className="text-lg font-bold text-yellow-200 tracking-wide">TON HÉROS</h2>
            <User className="text-yellow-400" size={14} />
          </div>
        </button>

        {/* Character display with frame */}
        <button
          onClick={onViewCharacter}
          className="relative w-full group"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/50 to-slate-950 rounded-lg -m-2" />
          <div className="relative bg-slate-800/50 group-hover:bg-slate-700/60 rounded-lg border-2 border-slate-600 group-hover:border-purple-500 p-4 backdrop-blur-sm transition-all">
            <div className="flex justify-center">
              <div className="relative">
                {/* Glow effect */}
                <div className="absolute inset-0 bg-purple-500/20 group-hover:bg-purple-500/40 rounded-full blur-xl transition-all" />
                <PixelCharacter
                  size={128}
                  equipped={character.equippedItems}
                  animated={true}
                />
              </div>
            </div>
            {/* Hover hint */}
            <div className="mt-2 text-center opacity-0 group-hover:opacity-100 transition-opacity">
              <p className="text-xs text-purple-300 font-semibold">Voir la fiche</p>
            </div>
          </div>
        </button>

        {/* Character name */}
        <div className="text-center">
          <h3 className="text-2xl font-bold bg-gradient-to-r from-yellow-200 to-yellow-400 bg-clip-text text-transparent tracking-wide">
            {character.name}
          </h3>
        </div>

        {/* Level badge */}
        <div className="flex justify-center">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur-md opacity-50" />
            <div className="relative bg-gradient-to-br from-purple-600 to-purple-800 border-2 border-purple-400 rounded-full px-6 py-2">
              <div className="flex items-center gap-2">
                <Sparkles className="text-yellow-300" size={20} />
                <span className="text-2xl font-bold text-white">Niv. {level}</span>
              </div>
            </div>
          </div>
        </div>

        {/* XP Bar */}
        <RPGStatBar
          label="EXPÉRIENCE"
          current={currentXP}
          max={xpForNext}
          color="xp"
          icon={<Sparkles size={16} />}
        />

        {/* Coins */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/10 to-orange-500/10 rounded-lg blur" />
          <div className="relative bg-gradient-to-br from-yellow-900/80 to-orange-900/80 border-2 border-yellow-600 rounded-lg p-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Coins className="text-yellow-400" size={24} />
                <span className="font-semibold text-yellow-100">Or</span>
              </div>
              <div className="flex items-center gap-1">
                <motion.span
                  key={character.coins}
                  initial={{ scale: 1.5, color: '#fbbf24' }}
                  animate={{ scale: 1, color: '#fef3c7' }}
                  className="text-2xl font-bold"
                >
                  {character.coins}
                </motion.span>
                <Coins className="text-yellow-400" size={20} />
              </div>
            </div>
          </div>
        </div>

        {/* Action buttons */}
        <div className="grid grid-cols-2 gap-2">
          <button
            onClick={onOpenInventory}
            className="relative group overflow-hidden bg-gradient-to-br from-slate-700 to-slate-800 hover:from-slate-600 hover:to-slate-700 border-2 border-slate-500 rounded-lg p-3 transition-all duration-200 hover:scale-105 active:scale-95"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-white/0 to-white/10" />
            <div className="relative flex flex-col items-center gap-1">
              <ShoppingBag size={20} className="text-slate-300" />
              <span className="text-xs font-semibold text-slate-200">Équipement</span>
            </div>
          </button>

          <button
            onClick={onOpenShop}
            className="relative group overflow-hidden bg-gradient-to-br from-yellow-700 to-yellow-800 hover:from-yellow-600 hover:to-yellow-700 border-2 border-yellow-500 rounded-lg p-3 transition-all duration-200 hover:scale-105 active:scale-95"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-white/0 to-white/10" />
            <div className="absolute inset-0 animate-pulse bg-yellow-400/10" />
            <div className="relative flex flex-col items-center gap-1">
              <Sparkles size={20} className="text-yellow-300" />
              <span className="text-xs font-semibold text-yellow-100">Boutique</span>
            </div>
          </button>
        </div>
      </div>
    </RPGCard>
  );
}
