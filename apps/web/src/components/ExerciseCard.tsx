import { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardFooter } from './ui/card';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { CheckCircle2, XCircle } from 'lucide-react';

interface ExerciseCardProps {
  question: string;
  onValidate: (answer: string) => void;
  onRequestHint: () => void;
  feedback?: 'correct' | 'incorrect' | null;
  disabled?: boolean;
}

export function ExerciseCard({
  question,
  onValidate,
  onRequestHint,
  feedback,
  disabled = false,
}: ExerciseCardProps) {
  const [answer, setAnswer] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (answer.trim()) {
      onValidate(answer.trim());
    }
  };

  const getFeedbackColor = () => {
    if (feedback === 'correct') return 'border-green-500 bg-green-50';
    if (feedback === 'incorrect') return 'border-red-500 bg-red-50';
    return 'border-gray-200';
  };

  return (
    <motion.div
      initial={{ scale: 1 }}
      animate={{
        scale: feedback ? [1, 1.02, 1] : 1,
      }}
      transition={{ duration: 0.3 }}
    >
      <Card className={`${getFeedbackColor()} transition-all duration-300`}>
        <CardContent className="p-8">
          {/* Question */}
          <div className="mb-6">
            <p className="text-sm text-gray-600 font-medium mb-2">Résoudre :</p>
            <p className="text-3xl font-bold text-gray-900 text-center py-4">{question}</p>
          </div>

          {/* Answer Input */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="answer" className="block text-sm font-medium text-gray-700 mb-2">
                Ta réponse :
              </label>
              <Input
                id="answer"
                type="text"
                value={answer}
                onChange={(e) => setAnswer(e.target.value)}
                placeholder="Ex: 3/4 ou 2"
                className="text-lg text-center"
                disabled={disabled}
                autoFocus
              />
              <p className="text-xs text-gray-500 mt-1 text-center">
                Format: fraction (a/b) ou nombre entier
              </p>
            </div>

            {/* Feedback Message */}
            {feedback && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`flex items-center justify-center gap-2 p-3 rounded-lg ${
                  feedback === 'correct'
                    ? 'bg-green-100 text-green-800'
                    : 'bg-red-100 text-red-800'
                }`}
              >
                {feedback === 'correct' ? (
                  <>
                    <CheckCircle2 size={20} />
                    <span className="font-medium">Excellent ! Bonne réponse 🎉</span>
                  </>
                ) : (
                  <>
                    <XCircle size={20} />
                    <span className="font-medium">Réponse incorrecte. Réessaie !</span>
                  </>
                )}
              </motion.div>
            )}
          </form>
        </CardContent>

        <CardFooter className="flex gap-3 p-6 pt-0">
          <Button
            type="submit"
            onClick={handleSubmit}
            disabled={disabled || !answer.trim()}
            className="flex-1"
          >
            Valider
          </Button>
          <Button
            type="button"
            variant="outline"
            onClick={onRequestHint}
            disabled={disabled}
          >
            Indice
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
}
