import { motion } from 'framer-motion';
import { Flame } from 'lucide-react';
import { Card, CardContent } from './ui/card';

interface StreakCardProps {
  streakDays: number;
}

export function StreakCard({ streakDays }: StreakCardProps) {
  const getMilestoneMessage = (days: number) => {
    if (days >= 14) return '🏆 Incroyable série !';
    if (days >= 7) return '🎯 Une semaine complète !';
    if (days >= 3) return '🔥 Bien joué !';
    return '💪 Continue comme ça !';
  };

  return (
    <Card className="bg-gradient-to-br from-orange-50 to-red-50 border-orange-200">
      <CardContent className="p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-600 font-medium">Série actuelle</p>
            <div className="flex items-baseline gap-2 mt-1">
              <span className="text-4xl font-bold text-orange-600">{streakDays}</span>
              <span className="text-lg text-gray-600">
                {streakDays === 1 ? 'jour' : 'jours'}
              </span>
            </div>
            <p className="text-sm text-orange-700 mt-2 font-medium">
              {getMilestoneMessage(streakDays)}
            </p>
          </div>
          
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 10, -10, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatDelay: 1,
            }}
          >
            <Flame size={64} className="text-orange-500" fill="currentColor" />
          </motion.div>
        </div>
      </CardContent>
    </Card>
  );
}
