import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { RPGCard } from '@/components/RPGCard';
import { Sparkles, BookOpen, Zap, Lock, Star, TrendingUp, Calculator, Percent, Variable, ChevronDown, ChevronRight } from 'lucide-react';

// Mock skills data - would come from Firebase
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
    theme: 'fire',
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
    theme: 'water',
  },
  {
    id: 'relative_numbers_addition',
    name: 'Addition de nombres relatifs',
    category: 'relative_numbers',
    mastery: 85,
    level: 4,
    maxLevel: 5,
    exercisesCompleted: 67,
    lastPracticed: '2024-01-16',
    unlocked: true,
    theme: 'lightning',
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
    theme: 'ice',
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
    theme: 'earth',
  },
  {
    id: 'relative_numbers_division',
    name: 'Division de nombres relatifs',
    category: 'relative_numbers',
    mastery: 20,
    level: 1,
    maxLevel: 5,
    exercisesCompleted: 8,
    lastPracticed: '2024-01-11',
    unlocked: true,
    theme: 'wind',
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
    theme: 'fire',
  },
  {
    id: 'powers_multiply',
    name: 'Multiplication de puissances',
    category: 'powers',
    mastery: 30,
    level: 1,
    maxLevel: 5,
    exercisesCompleted: 12,
    lastPracticed: '2024-01-14',
    unlocked: true,
    theme: 'lightning',
  },
  {
    id: 'powers_divide',
    name: 'Division de puissances',
    category: 'powers',
    mastery: 25,
    level: 1,
    maxLevel: 5,
    exercisesCompleted: 10,
    lastPracticed: '2024-01-13',
    unlocked: true,
    theme: 'ice',
  },
  {
    id: 'powers_power_of_power',
    name: 'Puissance de puissance',
    category: 'powers',
    mastery: 15,
    level: 1,
    maxLevel: 5,
    exercisesCompleted: 6,
    lastPracticed: '2024-01-12',
    unlocked: true,
    theme: 'shadow',
  },
  {
    id: 'equations_simple',
    name: 'Équations simples',
    category: 'equations',
    mastery: 50,
    level: 2,
    maxLevel: 5,
    exercisesCompleted: 25,
    lastPracticed: '2024-01-16',
    unlocked: true,
    theme: 'water',
  },
  {
    id: 'equations_two_step',
    name: 'Équations à deux étapes',
    category: 'equations',
    mastery: 35,
    level: 1,
    maxLevel: 5,
    exercisesCompleted: 14,
    lastPracticed: '2024-01-15',
    unlocked: true,
    theme: 'fire',
  },
  {
    id: 'equations_variable_both_sides',
    name: 'Variables des deux côtés',
    category: 'equations',
    mastery: 20,
    level: 1,
    maxLevel: 5,
    exercisesCompleted: 8,
    lastPracticed: '2024-01-14',
    unlocked: true,
    theme: 'lightning',
  },
  {
    id: 'proportions_direct',
    name: 'Proportionnalité directe',
    category: 'proportions',
    mastery: 55,
    level: 2,
    maxLevel: 5,
    exercisesCompleted: 28,
    lastPracticed: '2024-01-16',
    unlocked: true,
    theme: 'earth',
  },
  {
    id: 'proportions_percentage',
    name: 'Pourcentages',
    category: 'proportions',
    mastery: 40,
    level: 2,
    maxLevel: 5,
    exercisesCompleted: 20,
    lastPracticed: '2024-01-15',
    unlocked: true,
    theme: 'ice',
  },
  {
    id: 'proportions_scale',
    name: 'Échelles et plans',
    category: 'proportions',
    mastery: 25,
    level: 1,
    maxLevel: 5,
    exercisesCompleted: 10,
    lastPracticed: '2024-01-14',
    unlocked: true,
    theme: 'wind',
  },
  {
    id: 'literal_expand',
    name: 'Développement',
    category: 'literal',
    mastery: 45,
    level: 2,
    maxLevel: 5,
    exercisesCompleted: 22,
    lastPracticed: '2024-01-16',
    unlocked: true,
    theme: 'lightning',
  },
  {
    id: 'literal_factor',
    name: 'Factorisation',
    category: 'literal',
    mastery: 30,
    level: 1,
    maxLevel: 5,
    exercisesCompleted: 12,
    lastPracticed: '2024-01-15',
    unlocked: true,
    theme: 'shadow',
  },
  {
    id: 'literal_simplify',
    name: 'Simplification',
    category: 'literal',
    mastery: 35,
    level: 1,
    maxLevel: 5,
    exercisesCompleted: 15,
    lastPracticed: '2024-01-14',
    unlocked: true,
    theme: 'water',
  },
  {
    id: 'advanced_fractions',
    name: 'Fractions complexes',
    category: 'fractions',
    mastery: 0,
    level: 0,
    maxLevel: 5,
    exercisesCompleted: 0,
    lastPracticed: null,
    unlocked: false,
    theme: 'shadow',
  },
];

type SkillTheme = 'fire' | 'water' | 'lightning' | 'ice' | 'earth' | 'wind' | 'shadow';

function getThemeColors(theme: SkillTheme) {
  switch (theme) {
    case 'fire':
      return {
        gradient: 'from-red-600 via-orange-500 to-yellow-500',
        border: 'border-red-500',
        glow: 'shadow-red-500/50',
        icon: 'text-red-400',
        bg: 'from-red-900/80 to-orange-900/80',
      };
    case 'water':
      return {
        gradient: 'from-blue-600 via-cyan-500 to-teal-500',
        border: 'border-blue-500',
        glow: 'shadow-blue-500/50',
        icon: 'text-blue-400',
        bg: 'from-blue-900/80 to-cyan-900/80',
      };
    case 'lightning':
      return {
        gradient: 'from-yellow-600 via-yellow-400 to-white',
        border: 'border-yellow-500',
        glow: 'shadow-yellow-500/50',
        icon: 'text-yellow-400',
        bg: 'from-yellow-900/80 to-amber-900/80',
      };
    case 'ice':
      return {
        gradient: 'from-cyan-600 via-blue-400 to-indigo-500',
        border: 'border-cyan-500',
        glow: 'shadow-cyan-500/50',
        icon: 'text-cyan-400',
        bg: 'from-cyan-900/80 to-blue-900/80',
      };
    case 'earth':
      return {
        gradient: 'from-green-700 via-emerald-600 to-green-500',
        border: 'border-green-500',
        glow: 'shadow-green-500/50',
        icon: 'text-green-400',
        bg: 'from-green-900/80 to-emerald-900/80',
      };
    case 'wind':
      return {
        gradient: 'from-slate-500 via-gray-400 to-slate-300',
        border: 'border-slate-400',
        glow: 'shadow-slate-400/50',
        icon: 'text-slate-300',
        bg: 'from-slate-700/80 to-gray-800/80',
      };
    case 'shadow':
      return {
        gradient: 'from-purple-900 via-violet-800 to-purple-700',
        border: 'border-purple-600',
        glow: 'shadow-purple-600/50',
        icon: 'text-purple-400',
        bg: 'from-purple-950/80 to-violet-950/80',
      };
  }
}

function getMasteryGradient(mastery: number): string {
  if (mastery >= 80) return 'from-purple-600 via-purple-500 to-pink-500';
  if (mastery >= 60) return 'from-blue-600 via-blue-500 to-cyan-500';
  if (mastery >= 40) return 'from-green-600 via-green-500 to-emerald-500';
  if (mastery >= 20) return 'from-yellow-600 via-yellow-500 to-orange-500';
  return 'from-gray-600 via-gray-500 to-slate-500';
}

export default function Grimoire() {
  const navigate = useNavigate();
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
    { id: 'relative_numbers', label: 'Nombres relatifs', icon: Zap, gradient: 'from-yellow-600 to-orange-600' },
    { id: 'powers', label: 'Puissances', icon: Star, gradient: 'from-purple-600 to-pink-600' },
    { id: 'equations', label: 'Équations', icon: Calculator, gradient: 'from-blue-600 to-cyan-600' },
    { id: 'proportions', label: 'Proportionnalité', icon: Percent, gradient: 'from-green-600 to-emerald-600' },
    { id: 'literal', label: 'Calcul littéral', icon: Variable, gradient: 'from-indigo-600 to-purple-600' },
  ];

  const getSkillsByCategory = (categoryId: string) => {
    return SKILLS_DATA.filter(skill => skill.category === categoryId);
  };

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <RPGCard variant="gold" glow>
          <div className="p-6">
            <div className="flex items-center gap-4">
              <div className="relative">
                <div className="absolute inset-0 bg-purple-500 rounded-lg blur-md opacity-50" />
                <div className="relative w-16 h-16 bg-gradient-to-br from-purple-600 to-pink-700 rounded-lg flex items-center justify-center border-2 border-purple-500">
                  <BookOpen className="text-purple-100" size={32} />
                </div>
              </div>
              <div>
                <h1 className="text-3xl font-bold text-yellow-200 tracking-wide uppercase">Grimoire de Compétences</h1>
                <p className="text-yellow-100/70 text-sm mt-1">Maîtrise les arcanes mathématiques</p>
              </div>
            </div>
          </div>
        </RPGCard>
      </motion.div>

      {/* Categories with Expandable Skills */}
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
                    <div className={`relative w-12 h-12 bg-gradient-to-br ${cat.gradient} rounded-lg flex items-center justify-center border-2 border-slate-600 group-hover:scale-110 transition-transform`}>
                      <Icon className="text-white" size={24} />
                    </div>
                    <div className="text-left">
                      <h3 className="text-xl font-bold text-white uppercase tracking-wide">{cat.label}</h3>
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
                    <div className="p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {categorySkills.map((skill, index) => {
                        const themeColors = getThemeColors(skill.theme);
                        const masteryGradient = getMasteryGradient(skill.mastery);

                        return (
                          <motion.div
                            key={skill.id}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.05 }}
                            className="relative"
                          >
                            {/* Glow for high mastery */}
                            {skill.mastery >= 60 && (
                              <div className={`absolute inset-0 bg-gradient-to-br ${masteryGradient} opacity-20 rounded-lg blur-lg`} />
                            )}

                            <div className={`relative bg-gradient-to-br ${themeColors.bg} border-2 ${themeColors.border} rounded-lg overflow-hidden shadow-lg ${themeColors.glow} transition-all hover:scale-105`}>
                              {/* Corner decorations */}
                              <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-yellow-500/30" />
                              <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-yellow-500/30" />
                              <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-yellow-500/30" />
                              <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-yellow-500/30" />

                              {/* Locked overlay */}
                              {!skill.unlocked && (
                                <div className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm z-10 flex items-center justify-center">
                                  <div className="text-center">
                                    <Lock className="text-slate-500 mx-auto mb-2" size={32} />
                                    <p className="text-slate-400 text-sm font-semibold">Verrouillé</p>
                                  </div>
                                </div>
                              )}

                              <div className="p-5 space-y-4">
                                {/* Skill header with theme icon */}
                                <div className="flex items-start justify-between gap-3">
                                  <div className="flex-1">
                                    <h3 className="text-lg font-bold text-white mb-1">{skill.name}</h3>
                                    <div className="flex items-center gap-2">
                                      <div className={`px-2 py-0.5 rounded text-xs font-bold uppercase bg-gradient-to-r ${masteryGradient} text-white`}>
                                        {skill.theme}
                                      </div>
                                    </div>
                                  </div>
                                  <div className="relative">
                                    <div className={`absolute inset-0 bg-gradient-to-br ${masteryGradient} rounded-full blur opacity-40`} />
                                    <div className={`relative w-12 h-12 bg-gradient-to-br ${masteryGradient} rounded-full flex items-center justify-center border-2 ${themeColors.border}`}>
                                      <Sparkles className="text-white" size={20} />
                                    </div>
                                  </div>
                                </div>

                                {/* Level indicator */}
                                <div className="space-y-2">
                                  <div className="flex items-center justify-between">
                                    <span className="text-xs text-slate-300 font-semibold uppercase">Niveau</span>
                                    <span className="text-sm font-bold text-white">{skill.level}/{skill.maxLevel}</span>
                                  </div>
                                  <div className="flex gap-1">
                                    {Array.from({ length: skill.maxLevel }).map((_, i) => (
                                      <div
                                        key={i}
                                        className={`flex-1 h-2 rounded ${
                                          i < skill.level
                                            ? `bg-gradient-to-r ${masteryGradient}`
                                            : 'bg-slate-700'
                                        }`}
                                      />
                                    ))}
                                  </div>
                                </div>

                                {/* Mastery bar */}
                                <div className="space-y-2">
                                  <div className="flex items-center justify-between">
                                    <span className="text-xs text-slate-300 font-semibold uppercase">Maîtrise</span>
                                    <span className="text-sm font-bold text-white">{skill.mastery}%</span>
                                  </div>
                                  <div className="relative h-3 bg-slate-800 rounded-full border border-slate-600 overflow-hidden">
                                    <motion.div
                                      initial={{ width: 0 }}
                                      animate={{ width: `${skill.mastery}%` }}
                                      transition={{ duration: 1, delay: index * 0.05 + 0.2 }}
                                      className={`h-full bg-gradient-to-r ${masteryGradient} shadow-lg`}
                                    />
                                  </div>
                                </div>

                                {/* Stats */}
                                <div className="flex items-center justify-between pt-2 border-t border-slate-600/50">
                                  <div className="flex items-center gap-1.5">
                                    <TrendingUp size={14} className="text-slate-400" />
                                    <span className="text-xs text-slate-400">{skill.exercisesCompleted} exercices</span>
                                  </div>
                                  {skill.lastPracticed && (
                                    <span className="text-xs text-slate-500">
                                      {new Date(skill.lastPracticed).toLocaleDateString('fr-FR')}
                                    </span>
                                  )}
                                </div>

                                {/* Practice button */}
                                {skill.unlocked && (
                                  <button
                                    onClick={() => navigate('/session')}
                                    className="w-full py-2.5 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-500 hover:to-emerald-500 text-white rounded-lg font-bold text-sm uppercase tracking-wide transition-all shadow-lg hover:shadow-green-500/50 hover:scale-105 active:scale-95"
                                  >
                                    S'entraîner
                                  </button>
                                )}
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
