import { createContext, useContext, ReactNode } from 'react';
import { useCharacter as useCharacterHook } from '@/hooks/useCharacter';
import { PlayerCharacter } from '@math-app/core';

interface CharacterContextType {
  character: PlayerCharacter;
  addXP: (amount: number) => void;
  addCoins: (amount: number) => void;
  purchaseItem: (itemId: string, price: number) => boolean;
  equipItem: (itemId: string, slot: 'hat' | 'body' | 'accessory') => void;
  unequipItem: (slot: 'hat' | 'body' | 'accessory') => void;
  loseHP: (amount?: number) => void;
  healHP: (amount: number) => void;
  resetHP: () => void;
  increaseMaxHP: (amount?: number) => void;
  updateSkillMastery: (skillId: string, masteryIncrease: number) => void;
  updateName: (newName: string) => void;
}

const CharacterContext = createContext<CharacterContextType | undefined>(undefined);

export function CharacterProvider({ children }: { children: ReactNode }) {
  const characterData = useCharacterHook();

  return (
    <CharacterContext.Provider value={characterData}>
      {children}
    </CharacterContext.Provider>
  );
}

export function useCharacter() {
  const context = useContext(CharacterContext);
  if (context === undefined) {
    throw new Error('useCharacter must be used within a CharacterProvider');
  }
  return context;
}
