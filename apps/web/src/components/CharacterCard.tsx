import { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { PixelCharacter } from './PixelCharacter';
import { PlayerCharacter, getLevelFromXP, getItemById } from '@math-app/core';
import { Sparkles, Coins, TrendingUp, Settings } from 'lucide-react';

interface CharacterCardProps {
  character: PlayerCharacter;
  onOpenShop?: () => void;
  onOpenInventory?: () => void;
}

export function CharacterCard({ character, onOpenShop, onOpenInventory }: CharacterCardProps) {
  const { level, currentXP, xpForNext } = getLevelFromXP(character.xp);
  const xpProgress = (currentXP / xpForNext) * 100;

  return (
    <Card className="bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 border-2 border-indigo-200">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Sparkles className="text-indigo-600" size={20} />
          Mon Personnage
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Character display */}
        <div className="flex justify-center p-6 bg-white rounded-lg border-2 border-indigo-100">
          <PixelCharacter
            size={128}
            equipped={character.equippedItems}
            animated={true}
          />
        </div>

        {/* Level and XP */}
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <TrendingUp className="text-indigo-600" size={16} />
              <span className="font-semibold text-gray-900">Niveau {level}</span>
            </div>
            <span className="text-sm text-gray-600">
              {currentXP} / {xpForNext} XP
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${xpProgress}%` }}
              transition={{ duration: 0.5 }}
              className="h-full bg-gradient-to-r from-indigo-500 to-purple-500"
            />
          </div>
        </div>

        {/* Coins */}
        <div className="flex items-center justify-between p-3 bg-yellow-100 rounded-lg border-2 border-yellow-300">
          <div className="flex items-center gap-2">
            <Coins className="text-yellow-600" size={20} />
            <span className="font-semibold text-gray-900">Pièces</span>
          </div>
          <span className="text-xl font-bold text-yellow-700">{character.coins}</span>
        </div>

        {/* Equipped items info */}
        {(character.equippedItems.hat || character.equippedItems.body || character.equippedItems.accessory) && (
          <div className="p-3 bg-white rounded-lg border border-indigo-200">
            <p className="text-xs font-semibold text-gray-600 mb-2">Items équipés :</p>
            <div className="space-y-1">
              {character.equippedItems.hat && (
                <p className="text-xs text-gray-700">
                  👑 {getItemById(character.equippedItems.hat)?.name || 'Chapeau'}
                </p>
              )}
              {character.equippedItems.body && (
                <p className="text-xs text-gray-700">
                  👕 {getItemById(character.equippedItems.body)?.name || 'Vêtement'}
                </p>
              )}
              {character.equippedItems.accessory && (
                <p className="text-xs text-gray-700">
                  ✨ {getItemById(character.equippedItems.accessory)?.name || 'Accessoire'}
                </p>
              )}
            </div>
          </div>
        )}

        {/* Action buttons */}
        <div className="grid grid-cols-2 gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={onOpenInventory}
            className="gap-2"
          >
            <Settings size={16} />
            Équiper
          </Button>
          <Button
            size="sm"
            onClick={onOpenShop}
            className="gap-2"
          >
            <Coins size={16} />
            Boutique
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
