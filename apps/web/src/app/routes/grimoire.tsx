import { useState } from 'react';
import { motion } from 'framer-motion';
import { RPGCard } from '@/components/RPGCard';
import { useCharacter } from '@/contexts/CharacterContext';
import {
  Sparkles,
  BookOpen,
  Zap,
  Lock,
  Star,
  TrendingUp,
  Calculator,
  Percent,
  Variable,
  ChevronDown,
  CheckCircle,
  Crown,
} from 'lucide-react';
import { getMagicBySkill, getElementColor, MagicElement } from '@math-app/core';

// Mock skills data - would come from Firebase or be calculated from exercises
const SKILLS_DATA = [
  {
    id: 'fractions_addition',
    name: 'Addition de fractions',
    category: 'fractions',
    mastery: 75,
    level: 3,
    maxLevel: 5,
    exercisesCompleted: 45,
    lastPracticed: '2024-01-15',
    unlocked: true,
    theme: 'fire' as MagicElement,
  },
  {
    id: 'fractions_subtraction',
    name: 'Soustraction de fractions',
    category: 'fractions',
    mastery: 60,
    level: 2,
    maxLevel: 5,
    exercisesCompleted: 28,
    lastPracticed: '2024-01-14',
    unlocked: true,
    theme: 'water' as MagicElement,
  },
  {
    id: 'relative_numbers_addition',
    name: 'Addition de nombres relatifs',
    category: 'relative_numbers',
    mastery: 100,
    level: 5,
    maxLevel: 5,
    exercisesCompleted: 67,
    lastPracticed: '2024-01-16',
    unlocked: true,
    theme: 'lightning' as MagicElement,
  },
  {
    id: 'relative_numbers_subtraction',
    name: 'Soustraction de nombres relatifs',
    category: 'relative_numbers',
    mastery: 55,
    level: 2,
    maxLevel: 5,
    exercisesCompleted: 32,
    lastPracticed: '2024-01-13',
    unlocked: true,
    theme: 'wind' as MagicElement,
  },
  {
    id: 'relative_numbers_multiplication',
    name: 'Multiplication de nombres relatifs',
    category: 'relative_numbers',
    mastery: 40,
    level: 1,
    maxLevel: 5,
    exercisesCompleted: 15,
    lastPracticed: '2024-01-12',
    unlocked: true,
    theme: 'shadow' as MagicElement,
  },
  {
    id: 'powers_evaluate',
    name: 'Calcul de puissances',
    category: 'powers',
    mastery: 45,
    level: 2,
    maxLevel: 5,
    exercisesCompleted: 22,
    lastPracticed: '2024-01-15',
    unlocked: true,
    theme: 'fire' as MagicElement,
  },
];

export default function Grimoire() {
  const { character } = useCharacter();
  const [expandedCategories, setExpandedCategories] = useState<Set<string>>(new Set(['fractions']));

  const toggleCategory = (categoryId: string) => {
    setExpandedCategories((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(categoryId)) {
        newSet.delete(categoryId);
      } else {
        newSet.add(categoryId);
      }
      return newSet;
    });
  };

  const categories = [
    { id: 'fractions', label: 'Fractions', icon: Sparkles, gradient: 'from-orange-600 to-red-600' },
    {
      id: 'relative_numbers',
      label: 'Nombres relatifs',
      icon: Zap,
      gradient: 'from-yellow-600 to-orange-600',
    },
    { id: 'powers', label: 'Puissances', icon: Star, gradient: 'from-purple-600 to-pink-600' },
    {
      id: 'equations',
      label: 'Équations',
      icon: Calculator,
      gradient: 'from-blue-600 to-cyan-600',
    },
    {
      id: 'proportions',
      label: 'Proportionnalité',
      icon: Percent,
      gradient: 'from-green-600 to-emerald-600',
    },
    {
      id: 'literal',
      label: 'Calcul littéral',
      icon: Variable,
      gradient: 'from-indigo-600 to-purple-600',
    },
    { id: 'geometry', label: 'Géométrie', icon: TrendingUp, gradient: 'from-cyan-600 to-blue-600' },
    {
      id: 'statistics',
      label: 'Statistiques',
      icon: BookOpen,
      gradient: 'from-purple-900 to-violet-800',
    },
    {
      id: 'probability',
      label: 'Probabilités',
      icon: Sparkles,
      gradient: 'from-pink-500 to-fuchsia-500',
    },
  ];

  const getSkillsByCategory = (categoryId: string) => {
    return SKILLS_DATA.filter((skill) => skill.category === categoryId);
  };

  const getSkillMastery = (skillId: string) => {
    return (
      character.skillMastery[skillId] || SKILLS_DATA.find((s) => s.id === skillId)?.mastery || 0
    );
  };

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      {/* Header */}
      <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}>
        <RPGCard variant="gold" glow>
          <div className="p-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="relative">
                  <div className="absolute inset-0 bg-purple-500 rounded-lg blur-md opacity-50" />
                  <div className="relative w-16 h-16 bg-gradient-to-br from-purple-600 to-pink-700 rounded-lg flex items-center justify-center border-2 border-purple-500">
                    <BookOpen className="text-purple-100" size={32} />
                  </div>
                </div>
                <div>
                  <h1 className="text-3xl font-bold text-yellow-200 tracking-wide uppercase">
                    Arbre de Compétences
                  </h1>
                  <p className="text-yellow-100/70 text-sm mt-1">
                    Maîtrise les compétences et débloque des magies élémentaires
                  </p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-sm text-yellow-100/70">Magies débloquées</p>
                <p className="text-3xl font-bold text-yellow-200">
                  {character.unlockedMagic.length}
                </p>
              </div>
            </div>
          </div>
        </RPGCard>
      </motion.div>

      {/* Categories with Skills */}
      <div className="space-y-4">
        {categories.map((cat, catIndex) => {
          const Icon = cat.icon;
          const isExpanded = expandedCategories.has(cat.id);
          const categorySkills = getSkillsByCategory(cat.id);

          return (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + catIndex * 0.05 }}
            >
              <RPGCard>
                {/* Category Header */}
                <button
                  onClick={() => toggleCategory(cat.id)}
                  className="w-full p-4 flex items-center justify-between hover:bg-slate-700/30 transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`relative w-12 h-12 bg-gradient-to-br ${cat.gradient} rounded-lg flex items-center justify-center border-2 border-slate-600 group-hover:scale-110 transition-transform`}
                    >
                      <Icon className="text-white" size={24} />
                    </div>
                    <div className="text-left">
                      <h3 className="text-xl font-bold text-white uppercase tracking-wide">
                        {cat.label}
                      </h3>
                      <p className="text-sm text-slate-400">{categorySkills.length} compétences</p>
                    </div>
                  </div>
                  <motion.div
                    animate={{ rotate: isExpanded ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown className="text-slate-400" size={24} />
                  </motion.div>
                </button>

                {/* Skills Grid */}
                {isExpanded && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="border-t border-slate-600/30"
                  >
                    <div className="p-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                      {categorySkills.map((skill, index) => {
                        const mastery = getSkillMastery(skill.id);
                        const magic = getMagicBySkill(skill.id);
                        const isMagicUnlocked = magic && character.unlockedMagic.includes(magic.id);
                        const elementColors = magic ? getElementColor(magic.element) : null;

                        return (
                          <motion.div
                            key={skill.id}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.05 }}
                            className="relative"
                          >
                            {/* Epic glow for mastered skills */}
                            {mastery === 100 && (
                              <div
                                className={`absolute inset-0 bg-gradient-to-br ${elementColors?.gradient} opacity-20 rounded-lg blur-lg animate-pulse`}
                              />
                            )}

                            <div
                              className={`relative bg-gradient-to-br from-slate-800 to-slate-900 border-2 ${mastery === 100 ? elementColors?.border : 'border-slate-600'} rounded-lg overflow-hidden shadow-lg transition-all hover:scale-105`}
                            >
                              {/* Corner decorations */}
                              <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-yellow-500/30" />
                              <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-yellow-500/30" />

                              <div className="p-5 space-y-4">
                                {/* Skill header */}
                                <div className="flex items-start justify-between gap-3">
                                  <div className="flex-1">
                                    <h3 className="text-lg font-bold text-white mb-2">
                                      {skill.name}
                                    </h3>
                                    <div className="flex items-center gap-2">
                                      {mastery === 100 ? (
                                        <div className="flex items-center gap-1.5 px-2 py-1 rounded bg-gradient-to-r from-purple-600 to-pink-600 text-white text-xs font-bold uppercase">
                                          <Crown size={12} />
                                          Maîtrisée
                                        </div>
                                      ) : (
                                        <div className="px-2 py-1 rounded text-xs font-bold uppercase bg-slate-700 text-slate-300">
                                          En cours
                                        </div>
                                      )}
                                    </div>
                                  </div>
                                </div>

                                {/* Mastery bar */}
                                <div className="space-y-2">
                                  <div className="flex items-center justify-between">
                                    <span className="text-xs text-slate-300 font-semibold uppercase">
                                      Maîtrise
                                    </span>
                                    <span className="text-sm font-bold text-white">{mastery}%</span>
                                  </div>
                                  <div className="relative h-3 bg-slate-800 rounded-full border border-slate-600 overflow-hidden">
                                    <motion.div
                                      initial={{ width: 0 }}
                                      animate={{ width: `${mastery}%` }}
                                      transition={{ duration: 1, delay: index * 0.05 + 0.2 }}
                                      className={`h-full ${mastery === 100 ? `bg-gradient-to-r ${elementColors?.gradient}` : 'bg-gradient-to-r from-blue-600 to-cyan-600'} shadow-lg`}
                                    />
                                  </div>
                                </div>

                                {/* Magic unlock section */}
                                {magic && (
                                  <div
                                    className={`relative rounded-lg border-2 overflow-hidden ${isMagicUnlocked ? `${elementColors?.border} bg-gradient-to-br from-slate-900/80 to-slate-800/80` : 'border-slate-700 bg-slate-900/50'}`}
                                  >
                                    {/* Magic unlocked glow */}
                                    {isMagicUnlocked && (
                                      <div
                                        className={`absolute inset-0 bg-gradient-to-br ${elementColors?.gradient} opacity-10 animate-pulse`}
                                      />
                                    )}

                                    <div className="relative p-4 space-y-3">
                                      <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-2">
                                          <span className="text-2xl">{magic.icon}</span>
                                          <div>
                                            <p
                                              className={`text-sm font-bold ${isMagicUnlocked ? elementColors?.text : 'text-slate-500'}`}
                                            >
                                              {magic.name}
                                            </p>
                                            <p className="text-xs text-slate-500 uppercase">
                                              Magie {magic.element}
                                            </p>
                                          </div>
                                        </div>
                                        {isMagicUnlocked ? (
                                          <div
                                            className={`p-2 rounded-full ${elementColors?.border} bg-gradient-to-br ${elementColors?.gradient}`}
                                          >
                                            <CheckCircle className="text-white" size={20} />
                                          </div>
                                        ) : (
                                          <div className="p-2 rounded-full border-2 border-slate-700 bg-slate-800">
                                            <Lock className="text-slate-600" size={20} />
                                          </div>
                                        )}
                                      </div>

                                      <p
                                        className={`text-xs ${isMagicUnlocked ? 'text-slate-300' : 'text-slate-600'}`}
                                      >
                                        {magic.description}
                                      </p>

                                      {!isMagicUnlocked && (
                                        <div className="pt-2 border-t border-slate-700">
                                          <p className="text-xs text-amber-400 font-semibold">
                                            🔒 Atteins 100% de maîtrise pour débloquer cette magie
                                          </p>
                                        </div>
                                      )}

                                      {isMagicUnlocked && (
                                        <div className="pt-2 border-t border-slate-600">
                                          <p className="text-xs text-green-400 font-semibold flex items-center gap-1">
                                            <Sparkles size={12} />
                                            Magie débloquée ! Utilisable en combat
                                          </p>
                                        </div>
                                      )}
                                    </div>
                                  </div>
                                )}

                                {/* Stats */}
                                <div className="flex items-center justify-between pt-2 border-t border-slate-600/50 text-xs text-slate-400">
                                  <div className="flex items-center gap-1.5">
                                    <TrendingUp size={14} />
                                    <span>{skill.exercisesCompleted} exercices</span>
                                  </div>
                                  {skill.lastPracticed && (
                                    <span className="text-xs text-slate-500">
                                      {new Date(skill.lastPracticed).toLocaleDateString('fr-FR')}
                                    </span>
                                  )}
                                </div>
                              </div>
                            </div>
                          </motion.div>
                        );
                      })}
                    </div>
                  </motion.div>
                )}
              </RPGCard>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
