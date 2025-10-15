import { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { RPGCard } from '@/components/RPGCard';
import {
  BookOpen,
  ChevronRight,
  ChevronLeft,
  Clock,
  Award,
  Lightbulb,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  Target,
  Swords,
} from 'lucide-react';
import { COURSE_CHAPTERS } from '@math-app/core';

// Exercise type mapping for each chapter/lesson theme
const LESSON_TO_EXERCISE_TYPE: Record<string, 'fractions' | 'relative_numbers' | 'powers' | 'equations' | 'proportions' | 'literal'> = {
  // Fractions chapter
  'fractions_basics': 'fractions',
  'fractions_addition': 'fractions',
  'fractions_subtraction': 'fractions',
  'fractions_multiplication': 'fractions',
  'fractions_division': 'fractions',

  // Relative numbers chapter
  'relative_numbers_intro': 'relative_numbers',
  'relative_numbers_addition': 'relative_numbers',
  'relative_numbers_subtraction': 'relative_numbers',
  'relative_numbers_multiplication': 'relative_numbers',
  'relative_numbers_division': 'relative_numbers',

  // Powers chapter
  'powers_intro': 'powers',
  'powers_multiply': 'powers',
  'powers_divide': 'powers',
  'powers_negative': 'powers',

  // Equations chapter
  'equations_intro': 'equations',
  'equations_with_parentheses': 'equations',
  'equations_two_step': 'equations',
  'equations_variable_both_sides': 'equations',

  // Proportionality chapter
  'proportionality_intro': 'proportions',
  'proportionality_percentages': 'proportions',
  'proportionality_scale': 'proportions',
  'proportionality_speed': 'proportions',

  // Algebra (Literal calculation) chapter
  'algebra_intro': 'literal',
  'algebra_develop': 'literal',
  'algebra_factorize': 'literal',
  'algebra_simplify': 'literal',
};

export default function LessonPage() {
  const { lessonId } = useParams();
  const navigate = useNavigate();
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);
  const [completedSections, setCompletedSections] = useState<Set<string>>(new Set());
  const [practiceAnswers, setPracticeAnswers] = useState<Record<number, string>>({});

  // Find the lesson
  const lesson = COURSE_CHAPTERS.flatMap((ch) => ch.lessons).find((l) => l.id === lessonId);
  const chapter = COURSE_CHAPTERS.find((ch) => ch.lessons.some((l) => l.id === lessonId));

  if (!lesson || !chapter) {
    return (
      <div className="max-w-4xl mx-auto">
        <RPGCard>
          <div className="p-8 text-center">
            <p className="text-slate-300 text-lg">Leçon introuvable</p>
            <Link
              to="/library"
              className="inline-block mt-4 px-6 py-2 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg font-semibold transition-all"
            >
              Retour à la bibliothèque
            </Link>
          </div>
        </RPGCard>
      </div>
    );
  }

  const currentSection = lesson.sections[currentSectionIndex];
  const isLastSection = currentSectionIndex === lesson.sections.length - 1;
  const isFirstSection = currentSectionIndex === 0;

  const handleNextSection = () => {
    if (!isLastSection) {
      setCompletedSections((prev) => new Set(prev).add(currentSection.id));
      setCurrentSectionIndex((prev) => prev + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handlePrevSection = () => {
    if (!isFirstSection) {
      setCurrentSectionIndex((prev) => prev - 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const progressPercentage = Math.round((completedSections.size / lesson.sections.length) * 100);

  // Simple markdown-like parser
  const parseContent = (content: string) => {
    return content.split('\n').map((line, i) => {
      // Headers
      if (line.startsWith('**') && line.endsWith('**')) {
        return (
          <h3 key={i} className="text-xl font-bold text-yellow-200 mt-6 mb-3">
            {line.slice(2, -2)}
          </h3>
        );
      }

      // Bold text
      if (line.includes('**')) {
        const parts = line.split('**');
        return (
          <p key={i} className="text-slate-200 mb-3 leading-relaxed">
            {parts.map((part, j) =>
              j % 2 === 1 ? (
                <strong key={j} className="font-bold text-yellow-300">
                  {part}
                </strong>
              ) : (
                part
              )
            )}
          </p>
        );
      }

      // Empty lines
      if (line.trim() === '') {
        return <div key={i} className="h-2" />;
      }

      // Lists
      if (line.startsWith('- ')) {
        return (
          <li key={i} className="text-slate-200 ml-6 mb-2 list-disc">
            {line.slice(2)}
          </li>
        );
      }

      // Regular paragraphs
      return (
        <p key={i} className="text-slate-200 mb-3 leading-relaxed">
          {line}
        </p>
      );
    });
  };

  return (
    <div className="max-w-5xl mx-auto space-y-6">
      {/* Back button */}
      <Link
        to="/library"
        className="inline-flex items-center gap-2 px-4 py-2 bg-slate-700/50 hover:bg-slate-600/70 text-slate-300 hover:text-white rounded-lg transition-all"
      >
        <ChevronLeft size={18} />
        <span className="font-semibold text-sm">Retour à la bibliothèque</span>
      </Link>

      {/* Lesson Header */}
      <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}>
        <RPGCard variant="gold" glow>
          <div className="p-6">
            <div className="flex items-start gap-4">
              <div className="text-5xl">{lesson.icon}</div>
              <div className="flex-1">
                <div className="flex items-center gap-2 text-sm text-slate-400 mb-2">
                  <span>{chapter.icon}</span>
                  <ChevronRight size={14} />
                  <span>{chapter.title}</span>
                </div>
                <h1 className="text-3xl font-bold text-yellow-200 mb-2">{lesson.title}</h1>
                <p className="text-slate-300">{lesson.description}</p>
                <div className="flex items-center gap-4 mt-4">
                  <div className="flex items-center gap-1.5 text-slate-400">
                    <Clock size={16} />
                    <span className="text-sm">{lesson.estimatedTime} min</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-slate-400">
                    <BookOpen size={16} />
                    <span className="text-sm">{lesson.sections.length} sections</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Progress bar */}
            <div className="mt-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-semibold text-slate-300">Progression</span>
                <span className="text-sm font-bold text-yellow-300">{progressPercentage}%</span>
              </div>
              <div className="h-3 bg-slate-800 rounded-full border border-slate-600 overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${progressPercentage}%` }}
                  transition={{ duration: 0.5 }}
                  className="h-full bg-gradient-to-r from-green-600 via-emerald-500 to-green-400 shadow-lg"
                />
              </div>
            </div>
          </div>
        </RPGCard>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-6">
          {/* Section Content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSection.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              <RPGCard>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="text-2xl font-bold text-yellow-200">{currentSection.title}</h2>
                    <span className="px-3 py-1 bg-indigo-900/50 border border-indigo-500 rounded-full text-sm font-semibold text-indigo-300">
                      Section {currentSectionIndex + 1}/{lesson.sections.length}
                    </span>
                  </div>
                  <div className="prose prose-invert max-w-none">
                    {parseContent(currentSection.content)}
                  </div>
                </div>
              </RPGCard>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <div className="flex items-center justify-between gap-4">
            <button
              onClick={handlePrevSection}
              disabled={isFirstSection}
              className={`flex items-center gap-2 px-6 py-3 rounded-lg font-bold uppercase tracking-wide transition-all ${
                isFirstSection
                  ? 'bg-slate-800 text-slate-600 cursor-not-allowed'
                  : 'bg-gradient-to-r from-slate-700 to-slate-600 hover:from-slate-600 hover:to-slate-500 text-white shadow-lg hover:scale-105'
              }`}
            >
              <ChevronLeft size={20} />
              Précédent
            </button>

            <button
              onClick={handleNextSection}
              disabled={isLastSection}
              className={`flex items-center gap-2 px-6 py-3 rounded-lg font-bold uppercase tracking-wide transition-all ${
                isLastSection
                  ? 'bg-slate-800 text-slate-600 cursor-not-allowed'
                  : 'bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-500 hover:to-emerald-500 text-white shadow-lg hover:scale-105'
              }`}
            >
              Suivant
              <ChevronRight size={20} />
            </button>
          </div>

          {/* Examples Section */}
          {lesson.examples.length > 0 && (
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-yellow-200 flex items-center gap-2">
                <Sparkles size={20} />
                Exemples
              </h3>
              {lesson.examples.map((example, index) => (
                <RPGCard key={example.id}>
                  <div className="p-5 space-y-3">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center border-2 border-purple-500 font-bold text-white text-sm">
                        {index + 1}
                      </div>
                      <h4 className="text-lg font-bold text-white">{example.title}</h4>
                    </div>
                    <div className="bg-slate-800/50 rounded-lg p-4 border border-slate-600">
                      <p className="text-slate-200 font-semibold mb-2">Problème :</p>
                      <p className="text-slate-300">{example.problem}</p>
                    </div>
                    <div className="space-y-2">
                      <p className="text-slate-400 text-sm font-semibold uppercase">Étapes :</p>
                      <ol className="space-y-2">
                        {example.steps.map((step, i) => (
                          <li key={i} className="flex gap-3 text-slate-300">
                            <span className="text-green-400 font-bold">{i + 1}.</span>
                            <span>{step}</span>
                          </li>
                        ))}
                      </ol>
                    </div>
                    <div className="bg-green-900/30 border border-green-600/50 rounded-lg p-4">
                      <p className="text-green-400 font-bold mb-1">Solution :</p>
                      <p className="text-white text-lg font-mono">{example.solution}</p>
                    </div>
                    {example.explanation && (
                      <div className="flex items-start gap-2 text-slate-400 text-sm italic">
                        <Lightbulb size={16} className="mt-0.5 flex-shrink-0" />
                        <p>{example.explanation}</p>
                      </div>
                    )}
                  </div>
                </RPGCard>
              ))}
            </div>
          )}

          {/* Practice Questions Section */}
          {lesson.examples.length > 0 && (
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <RPGCard variant="gold" glow>
                  <div className="p-6 space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="relative">
                        <div className="absolute inset-0 bg-orange-500 rounded-full blur opacity-40" />
                        <div className="relative w-12 h-12 bg-gradient-to-br from-orange-600 to-red-600 rounded-full flex items-center justify-center border-2 border-orange-400">
                          <Target className="text-white" size={24} />
                        </div>
                      </div>
                      <h3 className="text-2xl font-bold text-yellow-200">Essaye par toi-même !</h3>
                    </div>
                    <p className="text-slate-300">
                      Maintenant que tu as vu les exemples, teste tes connaissances avec ces questions de pratique.
                      Tu peux écrire tes réponses ci-dessous, puis vérifier avec les solutions.
                    </p>

                    <div className="space-y-4 mt-6">
                      {lesson.examples.slice(0, 2).map((example, index) => (
                        <div key={index} className="bg-slate-800/50 rounded-lg p-5 border-2 border-orange-500/30 space-y-3">
                          <div className="flex items-center gap-2">
                            <div className="w-7 h-7 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center font-bold text-white text-sm">
                              {index + 1}
                            </div>
                            <p className="text-white font-bold">Question {index + 1}</p>
                          </div>
                          <p className="text-slate-200 text-lg">{example.problem}</p>
                          <div>
                            <label className="text-sm text-slate-400 font-semibold block mb-2">
                              Ta réponse :
                            </label>
                            <input
                              type="text"
                              value={practiceAnswers[index] || ''}
                              onChange={(e) => setPracticeAnswers(prev => ({ ...prev, [index]: e.target.value }))}
                              placeholder="Écris ta réponse ici..."
                              className="w-full px-4 py-3 bg-slate-900/80 border-2 border-slate-600 focus:border-orange-500 rounded-lg text-white placeholder:text-slate-500 transition-all focus:outline-none"
                            />
                          </div>
                          <details className="mt-3">
                            <summary className="text-green-400 font-semibold cursor-pointer hover:text-green-300 flex items-center gap-2 select-none">
                              <Lightbulb size={16} />
                              Voir la solution
                            </summary>
                            <div className="mt-3 bg-green-900/30 border border-green-600/50 rounded-lg p-4">
                              <p className="text-green-400 font-bold mb-2">Solution : {example.solution}</p>
                              <div className="text-slate-300 text-sm space-y-1">
                                {example.steps.map((step, i) => (
                                  <p key={i}><span className="text-green-400 font-bold">{i + 1}.</span> {step}</p>
                                ))}
                              </div>
                            </div>
                          </details>
                        </div>
                      ))}
                    </div>

                    <div className="bg-indigo-900/30 border border-indigo-600/50 rounded-lg p-4 mt-6">
                      <p className="text-indigo-300 text-sm flex items-start gap-2">
                        <Sparkles size={16} className="mt-0.5 flex-shrink-0" />
                        <span>
                          <strong>Astuce :</strong> Si tu bloques, relis les exemples ci-dessus et essaie de suivre les mêmes étapes !
                        </span>
                      </p>
                    </div>
                  </div>
                </RPGCard>
              </motion.div>
            </div>
          )}
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Key Points */}
          <RPGCard>
            <div className="p-5 space-y-3">
              <h3 className="text-lg font-bold text-yellow-200 flex items-center gap-2">
                <Award size={18} />
                Points Clés
              </h3>
              <ul className="space-y-2">
                {lesson.keyPoints.map((point, i) => (
                  <li key={i} className="flex gap-2 text-sm text-slate-300">
                    <CheckCircle2 size={16} className="text-green-400 flex-shrink-0 mt-0.5" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </RPGCard>

          {/* Section Navigation */}
          <RPGCard>
            <div className="p-5 space-y-3">
              <h3 className="text-lg font-bold text-yellow-200">Sections</h3>
              <div className="space-y-2">
                {lesson.sections.map((section, index) => (
                  <button
                    key={section.id}
                    onClick={() => setCurrentSectionIndex(index)}
                    className={`w-full text-left px-3 py-2 rounded transition-all ${
                      index === currentSectionIndex
                        ? 'bg-indigo-600 text-white shadow-lg'
                        : completedSections.has(section.id)
                        ? 'bg-green-900/30 text-green-300 hover:bg-green-800/40'
                        : 'bg-slate-700/50 text-slate-300 hover:bg-slate-600/70'
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      {completedSections.has(section.id) && (
                        <CheckCircle2 size={14} className="text-green-400" />
                      )}
                      <span className="text-sm font-semibold">{section.title}</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </RPGCard>

          {/* Practice Button */}
          <RPGCard variant="gold">
            <div className="p-5 space-y-3">
              <h3 className="text-lg font-bold text-yellow-200 flex items-center gap-2">
                <Swords size={18} />
                Prêt à t'entraîner ?
              </h3>
              <p className="text-sm text-slate-300">
                Mets en pratique ce que tu as appris en résolvant des exercices sur <strong className="text-yellow-300">{chapter.title}</strong> !
              </p>
              <button
                onClick={() => {
                  const exerciseType = LESSON_TO_EXERCISE_TYPE[lessonId || ''] || 'fractions';
                  navigate('/session', { state: { exerciseType } });
                }}
                className="relative group w-full py-3 bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-500 hover:to-red-500 text-white rounded-lg font-bold text-sm uppercase tracking-wide transition-all shadow-lg hover:scale-105 active:scale-95 flex items-center justify-center gap-2"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-white/0 to-white/20 rounded-lg" />
                <Sparkles size={18} className="relative z-10" />
                <span className="relative z-10">Commencer l'entraînement</span>
                <ArrowRight size={18} className="relative z-10" />
              </button>
              <div className="bg-indigo-900/30 border border-indigo-600/50 rounded-lg p-3">
                <p className="text-indigo-300 text-xs">
                  💡 Les exercices porteront sur <strong>{chapter.title.toLowerCase()}</strong>
                </p>
              </div>
            </div>
          </RPGCard>
        </div>
      </div>
    </div>
  );
}
