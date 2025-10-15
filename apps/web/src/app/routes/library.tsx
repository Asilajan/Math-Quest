import { useState } from 'react';
import { motion } from 'framer-motion';
import { RPGCard } from '@/components/RPGCard';
import { Library, BookOpen, Clock, Award, ChevronRight, Sparkles } from 'lucide-react';
import { COURSE_CHAPTERS, CourseChapter } from '@math-app/core';
import { Link } from 'react-router-dom';

type ChapterTheme = CourseChapter['theme'];

function getThemeColors(theme: ChapterTheme) {
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
    case 'arcane':
      return {
        gradient: 'from-indigo-600 via-purple-500 to-pink-500',
        border: 'border-indigo-500',
        glow: 'shadow-indigo-500/50',
        icon: 'text-indigo-400',
        bg: 'from-indigo-900/80 to-purple-900/80',
      };
  }
}

function getDifficultyColor(difficulty: 'beginner' | 'intermediate' | 'advanced') {
  switch (difficulty) {
    case 'beginner':
      return 'text-green-400 bg-green-900/50 border-green-500';
    case 'intermediate':
      return 'text-yellow-400 bg-yellow-900/50 border-yellow-500';
    case 'advanced':
      return 'text-red-400 bg-red-900/50 border-red-500';
  }
}

function getDifficultyLabel(difficulty: 'beginner' | 'intermediate' | 'advanced') {
  switch (difficulty) {
    case 'beginner':
      return 'Débutant';
    case 'intermediate':
      return 'Intermédiaire';
    case 'advanced':
      return 'Avancé';
  }
}

export default function LibraryPage() {
  const [selectedChapter, setSelectedChapter] = useState<CourseChapter | null>(null);

  return (
    <div className="max-w-7xl mx-auto space-y-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <RPGCard variant="gold" glow>
          <div className="p-6">
            <div className="flex items-center gap-4">
              <div className="relative">
                <div className="absolute inset-0 bg-indigo-500 rounded-lg blur-md opacity-50" />
                <div className="relative w-16 h-16 bg-gradient-to-br from-indigo-600 to-purple-700 rounded-lg flex items-center justify-center border-2 border-indigo-500">
                  <Library className="text-indigo-100" size={32} />
                </div>
              </div>
              <div>
                <h1 className="text-3xl font-bold text-yellow-200 tracking-wide uppercase">Bibliothèque des Savoirs</h1>
                <p className="text-yellow-100/70 text-sm mt-1">Explore les grimoires mathématiques et apprends les secrets des maîtres</p>
              </div>
            </div>
          </div>
        </RPGCard>
      </motion.div>

      {selectedChapter ? (
        /* Chapter Detail View */
        <div className="space-y-4">
          {/* Back Button */}
          <button
            onClick={() => setSelectedChapter(null)}
            className="flex items-center gap-2 px-4 py-2 bg-slate-700/50 hover:bg-slate-600/70 text-slate-300 hover:text-white rounded-lg transition-all"
          >
            <ChevronRight size={18} className="rotate-180" />
            <span className="font-semibold text-sm">Retour aux chapitres</span>
          </button>

          {/* Chapter Header */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            <RPGCard variant="gold">
              <div className="p-6">
                <div className="flex items-start gap-4">
                  <div className="text-5xl">{selectedChapter.icon}</div>
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold text-yellow-200 mb-2">{selectedChapter.title}</h2>
                    <p className="text-slate-300">{selectedChapter.description}</p>
                    <div className="flex items-center gap-3 mt-4">
                      <span className="px-3 py-1 bg-indigo-900/50 border border-indigo-500 rounded-full text-xs font-semibold text-indigo-300 uppercase">
                        {selectedChapter.gradeLevel}
                      </span>
                      <span className="text-slate-400 text-sm">{selectedChapter.lessons.length} leçons</span>
                    </div>
                  </div>
                </div>
              </div>
            </RPGCard>
          </motion.div>

          {/* Lessons Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {selectedChapter.lessons.map((lesson, index) => {
              const themeColors = getThemeColors(selectedChapter.theme);
              const difficultyColor = getDifficultyColor(lesson.difficulty);

              return (
                <motion.div
                  key={lesson.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link to={`/library/lesson/${lesson.id}`}>
                    <div className={`relative bg-gradient-to-br ${themeColors.bg} border-2 ${themeColors.border} rounded-lg overflow-hidden shadow-lg ${themeColors.glow} transition-all hover:scale-105 cursor-pointer`}>
                      {/* Corner decorations */}
                      <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-yellow-500/30" />
                      <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-yellow-500/30" />
                      <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-yellow-500/30" />
                      <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-yellow-500/30" />

                      <div className="p-5 space-y-4">
                        {/* Header */}
                        <div className="flex items-start justify-between gap-3">
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-2">
                              <span className="text-2xl">{lesson.icon}</span>
                              <h3 className="text-lg font-bold text-white">{lesson.title}</h3>
                            </div>
                            <p className="text-sm text-slate-300">{lesson.description}</p>
                          </div>
                        </div>

                        {/* Meta info */}
                        <div className="flex items-center gap-3 text-xs">
                          <div className={`px-2 py-1 rounded border ${difficultyColor} font-semibold uppercase`}>
                            {getDifficultyLabel(lesson.difficulty)}
                          </div>
                          <div className="flex items-center gap-1 text-slate-400">
                            <Clock size={14} />
                            <span>{lesson.estimatedTime} min</span>
                          </div>
                        </div>

                        {/* Stats */}
                        <div className="flex items-center justify-between pt-3 border-t border-slate-600/50">
                          <div className="flex items-center gap-3 text-xs text-slate-400">
                            <div className="flex items-center gap-1">
                              <BookOpen size={14} />
                              <span>{lesson.sections.length} sections</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Sparkles size={14} />
                              <span>{lesson.examples.length} exemples</span>
                            </div>
                          </div>
                        </div>

                        {/* View Button */}
                        <button className="w-full py-2.5 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white rounded-lg font-bold text-sm uppercase tracking-wide transition-all shadow-lg hover:shadow-indigo-500/50 hover:scale-105 active:scale-95 flex items-center justify-center gap-2">
                          <BookOpen size={16} />
                          Consulter
                        </button>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      ) : (
        /* Chapters Grid */
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {COURSE_CHAPTERS.map((chapter, index) => {
            const themeColors = getThemeColors(chapter.theme);

            return (
              <motion.div
                key={chapter.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                onClick={() => setSelectedChapter(chapter)}
                className="cursor-pointer"
              >
                <div className="relative group">
                  {/* Glow effect */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${themeColors.gradient} opacity-20 rounded-lg blur-xl group-hover:opacity-30 transition-opacity`} />

                  <div className={`relative bg-gradient-to-br ${themeColors.bg} border-2 ${themeColors.border} rounded-lg overflow-hidden shadow-lg ${themeColors.glow} transition-all group-hover:scale-105`}>
                    {/* Decorative corners */}
                    <div className="absolute top-0 left-0 w-6 h-6 border-t-4 border-l-4 border-yellow-500/40" />
                    <div className="absolute top-0 right-0 w-6 h-6 border-t-4 border-r-4 border-yellow-500/40" />
                    <div className="absolute bottom-0 left-0 w-6 h-6 border-b-4 border-l-4 border-yellow-500/40" />
                    <div className="absolute bottom-0 right-0 w-6 h-6 border-b-4 border-r-4 border-yellow-500/40" />

                    <div className="p-6 space-y-4">
                      {/* Icon and Title */}
                      <div className="space-y-3">
                        <div className="relative">
                          <div className={`absolute inset-0 bg-gradient-to-br ${themeColors.gradient} rounded-full blur opacity-40`} />
                          <div className={`relative w-20 h-20 bg-gradient-to-br ${themeColors.gradient} rounded-full flex items-center justify-center border-4 ${themeColors.border} mx-auto text-5xl`}>
                            {chapter.icon}
                          </div>
                        </div>
                        <div className="text-center">
                          <h2 className="text-2xl font-bold text-white mb-2">{chapter.title}</h2>
                          <p className="text-sm text-slate-300">{chapter.description}</p>
                        </div>
                      </div>

                      {/* Meta */}
                      <div className="flex items-center justify-center gap-4 pt-3 border-t border-slate-600/50">
                        <div className="flex items-center gap-1.5 text-slate-400">
                          <BookOpen size={16} />
                          <span className="text-sm font-semibold">{chapter.lessons.length} leçons</span>
                        </div>
                        <span className="px-2 py-1 bg-indigo-900/50 border border-indigo-500 rounded text-xs font-bold text-indigo-300 uppercase">
                          {chapter.gradeLevel}
                        </span>
                      </div>

                      {/* Button */}
                      <button className="w-full py-3 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-500 hover:to-emerald-500 text-white rounded-lg font-bold text-sm uppercase tracking-wide transition-all shadow-lg hover:shadow-green-500/50 hover:scale-105 active:scale-95 flex items-center justify-center gap-2">
                        <Library size={18} />
                        Explorer
                        <ChevronRight size={18} />
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      )}
    </div>
  );
}
