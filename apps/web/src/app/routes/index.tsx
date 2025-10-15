import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { RPGCharacterPanel } from '@/components/RPGCharacterPanel';
import { RPGCard } from '@/components/RPGCard';
import { Shop } from '@/components/Shop';
import { InventoryDrawer } from '@/components/InventoryDrawer';
import { useCharacter } from '@/contexts/CharacterContext';
import { getItemById, COURSE_CHAPTERS } from '@math-app/core';
import { Swords, BookOpen, Library, Target, TrendingUp, CheckCircle2, Sparkles } from 'lucide-react';

// Mock data - in production, fetch from Firebase
const mockSkills = [
  { id: 'fractions_addition', name: 'Addition de fractions', mastery: 75 },
  { id: 'fractions_subtraction', name: 'Soustraction de fractions', mastery: 68 },
  { id: 'fractions_multiplication', name: 'Multiplication de fractions', mastery: 45 },
  { id: 'fractions_division', name: 'Division de fractions', mastery: 30 },
  { id: 'relative_numbers_addition', name: 'Addition de nombres relatifs', mastery: 60 },
  { id: 'relative_numbers_subtraction', name: 'Soustraction de nombres relatifs', mastery: 55 },
  { id: 'relative_numbers_multiplication', name: 'Multiplication de nombres relatifs', mastery: 50 },
  { id: 'relative_numbers_division', name: 'Division de nombres relatifs', mastery: 40 },
];

export default function Dashboard() {
  const navigate = useNavigate();
  const [showShop, setShowShop] = useState(false);
  const [showInventory, setShowInventory] = useState(false);
  const { character, purchaseItem, equipItem, unequipItem } = useCharacter();

  const [stats, setStats] = useState({
    totalExercises: 0,
    skillsMastered: 0,
    lessonsCompleted: 0,
    totalSkills: mockSkills.length,
    totalLessons: 0,
  });

  useEffect(() => {
    // Calculate stats
    const totalExercises = 156; // Would come from Firebase
    const skillsMastered = mockSkills.filter(s => s.mastery >= 80).length;
    const totalLessons = COURSE_CHAPTERS.reduce((sum, ch) => sum + ch.lessons.length, 0);
    const lessonsCompleted = Math.floor(totalLessons * 0.35); // Mock 35% completed

    setStats({
      totalExercises,
      skillsMastered,
      lessonsCompleted,
      totalSkills: mockSkills.length,
      totalLessons,
    });
  }, []);

  const handlePurchase = (itemId: string) => {
    const item = getItemById(itemId);
    if (item && purchaseItem(itemId, item.price)) {
      console.log('Item purchased:', item.name);
    } else {
      console.log('Purchase failed');
    }
  };

  // Show shop view
  if (showShop) {
    return (
      <div className="max-w-6xl mx-auto space-y-6">
        <button
          onClick={() => setShowShop(false)}
          className="flex items-center gap-2 px-4 py-2 bg-slate-700/50 hover:bg-slate-600/70 text-slate-300 hover:text-white rounded-lg transition-all"
        >
          <Swords size={16} className="rotate-180" />
          Retour au tableau de bord
        </button>
        <Shop
          coins={character.coins}
          inventory={character.inventory}
          onPurchase={handlePurchase}
        />
      </div>
    );
  }

  const questProgress = Math.min(100, Math.round((stats.totalExercises / 200) * 100));
  const grimoireProgress = Math.min(100, Math.round((stats.skillsMastered / stats.totalSkills) * 100));
  const libraryProgress = Math.min(100, Math.round((stats.lessonsCompleted / stats.totalLessons) * 100));

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
      {/* Background pattern */}
      <div className="fixed inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-40 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 py-8 space-y-8">
        {/* Welcome Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <div className="inline-block">
            <h1 className="text-5xl font-bold bg-gradient-to-r from-yellow-200 via-yellow-400 to-yellow-200 bg-clip-text text-transparent mb-3 tracking-wide drop-shadow-[0_0_10px_rgba(250,204,21,0.5)]">
              TAVERNE DE L'AVENTURIER
            </h1>
            <div className="h-1 bg-gradient-to-r from-transparent via-yellow-500 to-transparent rounded-full" />
          </div>
          <p className="text-lg text-slate-300 mt-4">
            Prépare-toi pour de nouvelles quêtes mathématiques !
          </p>
        </motion.div>

        {/* Main Grid: 3 Action Cards + Character Panel */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Action Cards - 3 columns */}
          <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Quête Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Link to="/session" className="block h-full">
                <div className="relative group h-full">
                  {/* Glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-red-600 via-orange-500 to-yellow-500 opacity-20 rounded-lg blur-xl group-hover:opacity-30 transition-opacity" />

                  <RPGCard variant="default" className="h-full">
                    <div className="relative h-full overflow-hidden">
                      {/* Decorative corners */}
                      <div className="absolute top-0 left-0 w-6 h-6 border-t-4 border-l-4 border-yellow-500/40" />
                      <div className="absolute top-0 right-0 w-6 h-6 border-t-4 border-r-4 border-yellow-500/40" />
                      <div className="absolute bottom-0 left-0 w-6 h-6 border-b-4 border-l-4 border-yellow-500/40" />
                      <div className="absolute bottom-0 right-0 w-6 h-6 border-b-4 border-r-4 border-yellow-500/40" />

                      <div className="relative p-6 space-y-4 h-full flex flex-col">
                        {/* Icon and Title */}
                        <div className="space-y-3">
                          <div className="relative mx-auto w-20 h-20">
                            <div className="absolute inset-0 bg-gradient-to-br from-red-500 to-orange-500 rounded-full blur opacity-40 animate-pulse" />
                            <div className="relative w-20 h-20 bg-gradient-to-br from-red-600 to-orange-600 rounded-full flex items-center justify-center border-4 border-red-400">
                              <Swords className="text-white" size={36} />
                            </div>
                          </div>
                          <div className="text-center">
                            <h2 className="text-2xl font-bold text-white mb-1">QUÊTE</h2>
                            <p className="text-sm text-slate-400">Résous des exercices</p>
                          </div>
                        </div>

                        {/* Stats */}
                        <div className="flex-1 space-y-3">
                          <div className="flex items-center justify-between text-sm">
                            <div className="flex items-center gap-2 text-slate-300">
                              <Target size={16} className="text-red-400" />
                              <span>Exercices résolus</span>
                            </div>
                            <span className="font-bold text-white">{stats.totalExercises}</span>
                          </div>

                          {/* Progress bar */}
                          <div className="space-y-2">
                            <div className="flex items-center justify-between text-xs">
                              <span className="text-slate-400">Progression</span>
                              <span className="text-slate-300 font-bold">{questProgress}%</span>
                            </div>
                            <div className="h-3 bg-slate-800 rounded-full border border-slate-600 overflow-hidden">
                              <motion.div
                                initial={{ width: 0 }}
                                animate={{ width: `${questProgress}%` }}
                                transition={{ duration: 1, delay: 0.3 }}
                                className="h-full bg-gradient-to-r from-red-600 via-orange-500 to-yellow-500 shadow-lg"
                              />
                            </div>
                          </div>
                        </div>

                        {/* CTA */}
                        <button className="w-full py-3 bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-500 hover:to-orange-500 text-white rounded-lg font-bold text-sm uppercase tracking-wide transition-all shadow-lg hover:scale-105 active:scale-95">
                          Partir en Quête
                        </button>
                      </div>
                    </div>
                  </RPGCard>
                </div>
              </Link>
            </motion.div>

            {/* Grimoire Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Link to="/grimoire" className="block h-full">
                <div className="relative group h-full">
                  {/* Glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-600 via-pink-500 to-purple-500 opacity-20 rounded-lg blur-xl group-hover:opacity-30 transition-opacity" />

                  <RPGCard variant="default" className="h-full">
                    <div className="relative h-full overflow-hidden">
                      {/* Decorative corners */}
                      <div className="absolute top-0 left-0 w-6 h-6 border-t-4 border-l-4 border-yellow-500/40" />
                      <div className="absolute top-0 right-0 w-6 h-6 border-t-4 border-r-4 border-yellow-500/40" />
                      <div className="absolute bottom-0 left-0 w-6 h-6 border-b-4 border-l-4 border-yellow-500/40" />
                      <div className="absolute bottom-0 right-0 w-6 h-6 border-b-4 border-r-4 border-yellow-500/40" />

                      <div className="relative p-6 space-y-4 h-full flex flex-col">
                        {/* Icon and Title */}
                        <div className="space-y-3">
                          <div className="relative mx-auto w-20 h-20">
                            <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full blur opacity-40 animate-pulse" />
                            <div className="relative w-20 h-20 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center border-4 border-purple-400">
                              <BookOpen className="text-white" size={36} />
                            </div>
                          </div>
                          <div className="text-center">
                            <h2 className="text-2xl font-bold text-white mb-1">GRIMOIRE</h2>
                            <p className="text-sm text-slate-400">Tes compétences</p>
                          </div>
                        </div>

                        {/* Stats */}
                        <div className="flex-1 space-y-3">
                          <div className="flex items-center justify-between text-sm">
                            <div className="flex items-center gap-2 text-slate-300">
                              <Sparkles size={16} className="text-purple-400" />
                              <span>Compétences maîtrisées</span>
                            </div>
                            <span className="font-bold text-white">{stats.skillsMastered}/{stats.totalSkills}</span>
                          </div>

                          {/* Progress bar */}
                          <div className="space-y-2">
                            <div className="flex items-center justify-between text-xs">
                              <span className="text-slate-400">Maîtrise</span>
                              <span className="text-slate-300 font-bold">{grimoireProgress}%</span>
                            </div>
                            <div className="h-3 bg-slate-800 rounded-full border border-slate-600 overflow-hidden">
                              <motion.div
                                initial={{ width: 0 }}
                                animate={{ width: `${grimoireProgress}%` }}
                                transition={{ duration: 1, delay: 0.4 }}
                                className="h-full bg-gradient-to-r from-purple-600 via-pink-500 to-purple-500 shadow-lg"
                              />
                            </div>
                          </div>
                        </div>

                        {/* CTA */}
                        <button className="w-full py-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white rounded-lg font-bold text-sm uppercase tracking-wide transition-all shadow-lg hover:scale-105 active:scale-95">
                          Consulter
                        </button>
                      </div>
                    </div>
                  </RPGCard>
                </div>
              </Link>
            </motion.div>

            {/* Bibliothèque Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Link to="/library" className="block h-full">
                <div className="relative group h-full">
                  {/* Glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 via-cyan-500 to-indigo-500 opacity-20 rounded-lg blur-xl group-hover:opacity-30 transition-opacity" />

                  <RPGCard variant="default" className="h-full">
                    <div className="relative h-full overflow-hidden">
                      {/* Decorative corners */}
                      <div className="absolute top-0 left-0 w-6 h-6 border-t-4 border-l-4 border-yellow-500/40" />
                      <div className="absolute top-0 right-0 w-6 h-6 border-t-4 border-r-4 border-yellow-500/40" />
                      <div className="absolute bottom-0 left-0 w-6 h-6 border-b-4 border-l-4 border-yellow-500/40" />
                      <div className="absolute bottom-0 right-0 w-6 h-6 border-b-4 border-r-4 border-yellow-500/40" />

                      <div className="relative p-6 space-y-4 h-full flex flex-col">
                        {/* Icon and Title */}
                        <div className="space-y-3">
                          <div className="relative mx-auto w-20 h-20">
                            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 to-cyan-500 rounded-full blur opacity-40 animate-pulse" />
                            <div className="relative w-20 h-20 bg-gradient-to-br from-indigo-600 to-cyan-600 rounded-full flex items-center justify-center border-4 border-indigo-400">
                              <Library className="text-white" size={36} />
                            </div>
                          </div>
                          <div className="text-center">
                            <h2 className="text-2xl font-bold text-white mb-1">BIBLIOTHÈQUE</h2>
                            <p className="text-sm text-slate-400">Cours & leçons</p>
                          </div>
                        </div>

                        {/* Stats */}
                        <div className="flex-1 space-y-3">
                          <div className="flex items-center justify-between text-sm">
                            <div className="flex items-center gap-2 text-slate-300">
                              <CheckCircle2 size={16} className="text-indigo-400" />
                              <span>Leçons complétées</span>
                            </div>
                            <span className="font-bold text-white">{stats.lessonsCompleted}/{stats.totalLessons}</span>
                          </div>

                          {/* Progress bar */}
                          <div className="space-y-2">
                            <div className="flex items-center justify-between text-xs">
                              <span className="text-slate-400">Apprentissage</span>
                              <span className="text-slate-300 font-bold">{libraryProgress}%</span>
                            </div>
                            <div className="h-3 bg-slate-800 rounded-full border border-slate-600 overflow-hidden">
                              <motion.div
                                initial={{ width: 0 }}
                                animate={{ width: `${libraryProgress}%` }}
                                transition={{ duration: 1, delay: 0.5 }}
                                className="h-full bg-gradient-to-r from-indigo-600 via-cyan-500 to-indigo-500 shadow-lg"
                              />
                            </div>
                          </div>
                        </div>

                        {/* CTA */}
                        <button className="w-full py-3 bg-gradient-to-r from-indigo-600 to-cyan-600 hover:from-indigo-500 hover:to-cyan-500 text-white rounded-lg font-bold text-sm uppercase tracking-wide transition-all shadow-lg hover:scale-105 active:scale-95">
                          Explorer
                        </button>
                      </div>
                    </div>
                  </RPGCard>
                </div>
              </Link>
            </motion.div>
          </div>

          {/* Character Panel - 1 column */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="lg:col-span-1"
          >
            <RPGCharacterPanel
              character={character}
              onOpenShop={() => setShowShop(true)}
              onOpenInventory={() => setShowInventory(true)}
              onViewCharacter={() => navigate('/character')}
            />
          </motion.div>
        </div>

        {/* Inventory Drawer */}
        <InventoryDrawer
          open={showInventory}
          onClose={() => setShowInventory(false)}
          inventory={character.inventory}
          equippedItems={character.equippedItems}
          onEquip={equipItem}
          onUnequip={unequipItem}
        />
      </div>
    </div>
  );
}
