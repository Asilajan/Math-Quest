import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface RPGStatBarProps {
  label: string;
  current: number;
  max: number;
  color?: 'health' | 'mana' | 'xp' | 'energy';
  showNumbers?: boolean;
  icon?: React.ReactNode;
}

export function RPGStatBar({
  label,
  current,
  max,
  color = 'health',
  showNumbers = true,
  icon
}: RPGStatBarProps) {
  const percentage = Math.min(100, (current / max) * 100);

  const colors = {
    health: {
      bg: 'bg-red-950',
      fill: 'bg-gradient-to-r from-red-600 to-red-500',
      glow: 'shadow-[0_0_10px_rgba(220,38,38,0.5)]',
      border: 'border-red-700',
    },
    mana: {
      bg: 'bg-blue-950',
      fill: 'bg-gradient-to-r from-blue-600 to-blue-500',
      glow: 'shadow-[0_0_10px_rgba(37,99,235,0.5)]',
      border: 'border-blue-700',
    },
    xp: {
      bg: 'bg-purple-950',
      fill: 'bg-gradient-to-r from-purple-600 to-purple-500',
      glow: 'shadow-[0_0_10px_rgba(147,51,234,0.5)]',
      border: 'border-purple-700',
    },
    energy: {
      bg: 'bg-green-950',
      fill: 'bg-gradient-to-r from-green-600 to-green-500',
      glow: 'shadow-[0_0_10px_rgba(22,163,74,0.5)]',
      border: 'border-green-700',
    },
  };

  const colorScheme = colors[color];

  return (
    <div className="space-y-1">
      <div className="flex items-center justify-between text-sm">
        <div className="flex items-center gap-2">
          {icon && <span className="text-yellow-500">{icon}</span>}
          <span className="font-semibold text-slate-200">{label}</span>
        </div>
        {showNumbers && (
          <span className="text-slate-400 text-xs">
            {current} / {max}
          </span>
        )}
      </div>
      <div className={cn('relative h-6 rounded border-2 overflow-hidden', colorScheme.bg, colorScheme.border)}>
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10 bg-[repeating-linear-gradient(90deg,transparent,transparent_10px,rgba(255,255,255,0.1)_10px,rgba(255,255,255,0.1)_20px)]" />

        {/* Fill */}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${percentage}%` }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className={cn('h-full relative', colorScheme.fill, colorScheme.glow)}
        >
          {/* Shine effect */}
          <div className="absolute inset-0 bg-gradient-to-b from-white/20 to-transparent" />

          {/* Animated gleam */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
            animate={{
              x: ['-100%', '200%'],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatDelay: 1,
            }}
          />
        </motion.div>

        {/* Percentage text overlay */}
        {showNumbers && (
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-xs font-bold text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]">
              {Math.round(percentage)}%
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
