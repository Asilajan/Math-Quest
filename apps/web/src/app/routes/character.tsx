import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { RPGCard } from '@/components/RPGCard';
import { useCharacter } from '@/contexts/CharacterContext';
import {
  User,
  Edit3,
  Check,
  X,
  Heart,
  Coins,
  TrendingUp,
  Zap,
  Shield,
  Sparkles,
  Star,
  Crown,
  ArrowLeft,
  Sword,
} from 'lucide-react';
import {
  getMagicSpellById,
  getElementColor,
  SHOP_ITEMS,
  calculateEquippedBonuses,
} from '@math-app/core';

const SKILLS_DATA = [
  { id: 'fractions_addition', name: 'Addition de fractions' },
  { id: 'fractions_subtraction', name: 'Soustraction de fractions' },
  { id: 'relative_numbers_addition', name: 'Addition de nombres relatifs' },
  { id: 'relative_numbers_subtraction', name: 'Soustraction de nombres relatifs' },
  { id: 'relative_numbers_multiplication', name: 'Multiplication de nombres relatifs' },
  { id: 'powers_evaluate', name: 'Calcul de puissances' },
];

export default function Character() {
  const navigate = useNavigate();
  const { character, updateName } = useCharacter();
  const [isEditingName, setIsEditingName] = useState(false);
  const [tempName, setTempName] = useState(character.name);

  const bonuses = calculateEquippedBonuses(character);

  // Calculate stats
  const baseAttack = 5 + character.level * 2;
  const totalAttack = baseAttack + (bonuses.damageBoost || 0);

  const baseDefense = 3 + character.level;
  const totalDefense = baseDefense + (bonuses.defenseBoost || 0);

  const handleSaveName = () => {
    if (tempName.trim()) {
      updateName(tempName.trim());
      setIsEditingName(false);
    }
  };

  const handleCancelEdit = () => {
    setTempName(character.name);
    setIsEditingName(false);
  };

  // Get equipped item details
  const getEquippedItem = (slot: 'hat' | 'body' | 'accessory') => {
    const itemId = character.equippedItems[slot];
    return itemId ? SHOP_ITEMS.find(item => item.id === itemId) : null;
  };

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <button
          onClick={() => navigate('/')}
          className="mb-4 flex items-center gap-2 text-slate-300 hover:text-white transition-colors"
        >
          <ArrowLeft size={20} />
          Retour à la taverne
        </button>

        <RPGCard variant="gold" glow>
          <div className="p-6">
            <div className="flex items-center gap-6">
              {/* Character Avatar */}
              <div className="relative">
                <div className="absolute inset-0 bg-purple-500 rounded-full blur-lg opacity-50 animate-pulse" />
                <div className="relative w-24 h-24 bg-gradient-to-br from-purple-600 to-pink-700 rounded-full flex items-center justify-center border-4 border-purple-500">
                  <User className="text-purple-100" size={48} />
                </div>
              </div>

              {/* Character Info */}
              <div className="flex-1">
                {isEditingName ? (
                  <div className="flex items-center gap-2 mb-2">
                    <input
                      type="text"
                      value={tempName}
                      onChange={(e) => setTempName(e.target.value)}
                      className="px-3 py-1 bg-slate-800 border-2 border-yellow-500 rounded text-xl font-bold text-yellow-200 focus:outline-none focus:border-yellow-400"
                      autoFocus
                      onKeyDown={(e) => {
                        if (e.key === 'Enter') handleSaveName();
                        if (e.key === 'Escape') handleCancelEdit();
                      }}
                    />
                    <button
                      onClick={handleSaveName}
                      className="p-2 bg-green-600 hover:bg-green-700 rounded-lg transition-colors"
                    >
                      <Check size={20} className="text-white" />
                    </button>
                    <button
                      onClick={handleCancelEdit}
                      className="p-2 bg-red-600 hover:bg-red-700 rounded-lg transition-colors"
                    >
                      <X size={20} className="text-white" />
                    </button>
                  </div>
                ) : (
                  <div className="flex items-center gap-3 mb-2">
                    <h1 className="text-3xl font-bold text-yellow-200 tracking-wide uppercase">{character.name}</h1>
                    <button
                      onClick={() => setIsEditingName(true)}
                      className="p-2 hover:bg-slate-700 rounded-lg transition-colors group"
                    >
                      <Edit3 size={18} className="text-slate-400 group-hover:text-yellow-400 transition-colors" />
                    </button>
                  </div>
                )}
                <div className="flex items-center gap-4 text-yellow-100/70">
                  <div className="flex items-center gap-2">
                    <Crown size={18} className="text-yellow-400" />
                    <span className="font-bold">Niveau {character.level}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Sparkles size={18} className="text-purple-400" />
                    <span>{character.unlockedMagic.length} magies débloquées</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </RPGCard>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Left Column */}
        <div className="space-y-6">
          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
          >
            <RPGCard>
              <div className="p-6 space-y-4">
                <h2 className="text-xl font-bold text-white uppercase tracking-wide flex items-center gap-2">
                  <TrendingUp size={24} className="text-yellow-400" />
                  Statistiques
                </h2>

                {/* HP */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Heart size={18} className="text-red-500" />
                      <span className="text-sm font-semibold text-slate-300 uppercase">Points de Vie</span>
                    </div>
                    <span className="text-lg font-bold text-red-400">{character.hp} / {character.maxHp}</span>
                  </div>
                  <div className="relative h-3 bg-slate-800 rounded-full border border-slate-600 overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-red-600 to-red-500 shadow-lg"
                      style={{ width: `${(character.hp / character.maxHp) * 100}%` }}
                    />
                  </div>
                </div>

                {/* XP */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Star size={18} className="text-blue-500" />
                      <span className="text-sm font-semibold text-slate-300 uppercase">Expérience</span>
                    </div>
                    <span className="text-lg font-bold text-blue-400">{character.xp} XP</span>
                  </div>
                </div>

                {/* Coins */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Coins size={18} className="text-yellow-500" />
                      <span className="text-sm font-semibold text-slate-300 uppercase">Pièces d'or</span>
                    </div>
                    <span className="text-lg font-bold text-yellow-400">{character.coins}</span>
                  </div>
                </div>

                {/* Attack */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Sword size={18} className="text-orange-500" />
                      <span className="text-sm font-semibold text-slate-300 uppercase">Puissance</span>
                    </div>
                    <span className="text-lg font-bold text-orange-400">
                      {totalAttack}
                      {bonuses.damageBoost ? (
                        <span className="text-sm text-green-400 ml-1">(+{bonuses.damageBoost})</span>
                      ) : null}
                    </span>
                  </div>
                </div>

                {/* Defense */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Shield size={18} className="text-blue-500" />
                      <span className="text-sm font-semibold text-slate-300 uppercase">Défense</span>
                    </div>
                    <span className="text-lg font-bold text-blue-400">
                      {totalDefense}
                      {bonuses.defenseBoost ? (
                        <span className="text-sm text-green-400 ml-1">(+{bonuses.defenseBoost})</span>
                      ) : null}
                    </span>
                  </div>
                </div>
              </div>
            </RPGCard>
          </motion.div>

          {/* Equipment */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <RPGCard>
              <div className="p-6 space-y-4">
                <h2 className="text-xl font-bold text-white uppercase tracking-wide flex items-center gap-2">
                  <Zap size={24} className="text-yellow-400" />
                  Équipement
                </h2>

                <div className="space-y-3">
                  {['hat', 'body', 'accessory'].map((slot) => {
                    const item = getEquippedItem(slot as 'hat' | 'body' | 'accessory');
                    const slotLabel = slot === 'hat' ? 'Chapeau' : slot === 'body' ? 'Armure' : 'Accessoire';

                    return (
                      <div key={slot} className="flex items-center gap-3 p-3 bg-slate-800 rounded-lg border-2 border-slate-600">
                        <div className="text-2xl">{item?.icon || '❓'}</div>
                        <div className="flex-1">
                          <p className="text-sm text-slate-400 uppercase">{slotLabel}</p>
                          <p className="font-bold text-white">
                            {item ? item.name : 'Vide'}
                          </p>
                          {item?.bonusEffect && (
                            <p className="text-xs text-green-400">
                              {item.bonusEffect.description}
                            </p>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </RPGCard>
          </motion.div>
        </div>

        {/* Right Column */}
        <div className="space-y-6">
          {/* Skills */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.15 }}
          >
            <RPGCard>
              <div className="p-6 space-y-4">
                <h2 className="text-xl font-bold text-white uppercase tracking-wide flex items-center gap-2">
                  <Star size={24} className="text-yellow-400" />
                  Compétences Acquises
                </h2>

                <div className="space-y-3">
                  {SKILLS_DATA.map((skill) => {
                    const mastery = character.skillMastery[skill.id] || 0;

                    return (
                      <div key={skill.id} className="p-4 bg-slate-800 rounded-lg border-2 border-slate-600">
                        <div className="flex items-center justify-between mb-2">
                          <p className="font-bold text-white">{skill.name}</p>
                          <span className="text-sm font-bold text-yellow-400">{mastery}%</span>
                        </div>
                        <div className="relative h-2 bg-slate-900 rounded-full border border-slate-700 overflow-hidden">
                          <div
                            className={`h-full ${mastery === 100 ? 'bg-gradient-to-r from-purple-600 to-pink-600' : 'bg-gradient-to-r from-blue-600 to-cyan-600'} shadow-lg`}
                            style={{ width: `${mastery}%` }}
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </RPGCard>
          </motion.div>

          {/* Unlocked Magic */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <RPGCard>
              <div className="p-6 space-y-4">
                <h2 className="text-xl font-bold text-white uppercase tracking-wide flex items-center gap-2">
                  <Sparkles size={24} className="text-yellow-400" />
                  Magies Débloquées ({character.unlockedMagic.length})
                </h2>

                {character.unlockedMagic.length === 0 ? (
                  <p className="text-slate-400 text-center py-4">
                    Aucune magie débloquée pour le moment.
                    <br />
                    Maîtrise tes compétences pour débloquer des sorts !
                  </p>
                ) : (
                  <div className="grid grid-cols-1 gap-3">
                    {character.unlockedMagic.map((magicId) => {
                      const magic = getMagicSpellById(magicId);
                      if (!magic) return null;

                      const elementColors = getElementColor(magic.element);

                      return (
                        <div
                          key={magicId}
                          className={`relative p-4 bg-slate-800 rounded-lg border-2 ${elementColors.border} overflow-hidden`}
                        >
                          <div className={`absolute inset-0 bg-gradient-to-br ${elementColors.gradient} opacity-10`} />
                          <div className="relative flex items-center gap-3">
                            <div className="text-3xl">{magic.icon}</div>
                            <div className="flex-1">
                              <p className={`font-bold ${elementColors.text}`}>{magic.name}</p>
                              <p className="text-xs text-slate-500 uppercase">Magie {magic.element}</p>
                              <p className="text-xs text-slate-400 mt-1">{magic.description}</p>
                            </div>
                            <div className={`px-2 py-1 rounded text-xs font-bold ${elementColors.text} border ${elementColors.border}`}>
                              Tier {magic.tier}
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            </RPGCard>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
