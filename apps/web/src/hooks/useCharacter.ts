import { useState, useEffect } from 'react';
import { PlayerCharacter, getLevelFromXP, getMagicBySkill } from '@math-app/core';
import { getCharacter, updateCharacter } from '@/lib/firebase';
import { useAuth } from '@/contexts/AuthContext';

// Default initial character
const INITIAL_CHARACTER: PlayerCharacter = {
  name: 'Héros',
  level: 1,
  xp: 0,
  coins: 100,
  hp: 6,
  maxHp: 6,
  inventory: [],
  equippedItems: {},
  unlockedMagic: [],
  skillMastery: {},
};

export function useCharacter() {
  const { currentUser } = useAuth();
  const [character, setCharacter] = useState<PlayerCharacter>(INITIAL_CHARACTER);
  const [isLoading, setIsLoading] = useState(true);

  // Load character from Firebase on mount
  useEffect(() => {
    if (!currentUser?.uid) {
      setIsLoading(false);
      return;
    }

    const loadCharacter = async () => {
      try {
        const savedChar = await getCharacter(currentUser.uid);
        if (savedChar) {
          // Recalculate level from XP to ensure consistency
          const { level } = getLevelFromXP(savedChar.xp);
          const loadedChar = {
            ...INITIAL_CHARACTER,
            ...savedChar,
            level: level,
            name: savedChar.name || INITIAL_CHARACTER.name,
          };
          setCharacter(loadedChar);
        } else {
          // Initialize character in Firebase if it doesn't exist
          await updateCharacter(currentUser.uid, INITIAL_CHARACTER);
        }
      } catch (e) {
        console.error('Failed to load character from Firebase', e);
      } finally {
        setIsLoading(false);
      }
    };

    loadCharacter();
  }, [currentUser?.uid]);

  // Save character to Firebase whenever it changes (debounced)
  useEffect(() => {
    if (!currentUser?.uid || isLoading) return;

    const saveTimer = setTimeout(async () => {
      try {
        await updateCharacter(currentUser.uid, character);
      } catch (e) {
        console.error('Failed to save character to Firebase', e);
      }
    }, 500); // Debounce 500ms

    return () => clearTimeout(saveTimer);
  }, [character, currentUser?.uid, isLoading]);

  const addXP = (amount: number) => {
    setCharacter((prev) => {
      const newXP = prev.xp + amount;
      const { level } = getLevelFromXP(newXP);
      return {
        ...prev,
        xp: newXP,
        level: level,
      };
    });
  };

  const addCoins = (amount: number) => {
    setCharacter((prev) => ({
      ...prev,
      coins: prev.coins + amount,
    }));
  };

  const purchaseItem = (itemId: string, price: number): boolean => {
    if (character.coins < price) return false;
    if (character.inventory.includes(itemId)) return false;

    setCharacter((prev) => ({
      ...prev,
      coins: prev.coins - price,
      inventory: [...prev.inventory, itemId],
    }));

    return true;
  };

  const equipItem = (itemId: string, slot: 'hat' | 'body' | 'accessory') => {
    if (!character.inventory.includes(itemId)) return;

    setCharacter((prev) => ({
      ...prev,
      equippedItems: {
        ...prev.equippedItems,
        [slot]: itemId,
      },
    }));
  };

  const unequipItem = (slot: 'hat' | 'body' | 'accessory') => {
    setCharacter((prev) => {
      const newEquipped = { ...prev.equippedItems };
      delete newEquipped[slot];
      return {
        ...prev,
        equippedItems: newEquipped,
      };
    });
  };

  const loseHP = (amount: number = 1) => {
    setCharacter((prev) => ({
      ...prev,
      hp: Math.max(0, prev.hp - amount),
    }));
  };

  const healHP = (amount: number) => {
    setCharacter((prev) => ({
      ...prev,
      hp: Math.min(prev.maxHp, prev.hp + amount),
    }));
  };

  const resetHP = () => {
    setCharacter((prev) => ({
      ...prev,
      hp: prev.maxHp,
    }));
  };

  const increaseMaxHP = (amount: number = 1) => {
    setCharacter((prev) => ({
      ...prev,
      maxHp: prev.maxHp + amount,
      hp: prev.hp + amount, // Also heal when increasing max HP
    }));
  };

  const updateSkillMastery = (skillId: string, masteryIncrease: number) => {
    setCharacter((prev) => {
      const currentMastery = prev.skillMastery[skillId] || 0;
      const newMastery = Math.min(100, currentMastery + masteryIncrease);

      const newSkillMastery = {
        ...prev.skillMastery,
        [skillId]: newMastery,
      };

      // Check if we should unlock magic
      let newUnlockedMagic = [...prev.unlockedMagic];
      if (newMastery === 100 && currentMastery < 100) {
        const magic = getMagicBySkill(skillId);
        if (magic && !prev.unlockedMagic.includes(magic.id)) {
          newUnlockedMagic = [...prev.unlockedMagic, magic.id];
        }
      }

      return {
        ...prev,
        skillMastery: newSkillMastery,
        unlockedMagic: newUnlockedMagic,
      };
    });
  };

  const updateName = (newName: string) => {
    setCharacter((prev) => ({
      ...prev,
      name: newName,
    }));
  };

  return {
    character,
    addXP,
    addCoins,
    purchaseItem,
    equipItem,
    unequipItem,
    loseHP,
    healHP,
    resetHP,
    increaseMaxHP,
    updateSkillMastery,
    updateName,
  };
}
