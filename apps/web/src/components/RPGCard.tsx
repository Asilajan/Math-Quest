import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface RPGCardProps {
  children: ReactNode;
  className?: string;
  variant?: 'default' | 'gold' | 'silver' | 'bronze';
  glow?: boolean;
}

export function RPGCard({ children, className, variant = 'default', glow = false }: RPGCardProps) {
  const variants = {
    default: 'bg-gradient-to-br from-slate-800 to-slate-900 border-slate-600',
    gold: 'bg-gradient-to-br from-yellow-900 to-yellow-950 border-yellow-600',
    silver: 'bg-gradient-to-br from-slate-700 to-slate-800 border-slate-500',
    bronze: 'bg-gradient-to-br from-orange-900 to-orange-950 border-orange-700',
  };

  const glowVariants = {
    default: 'shadow-[0_0_20px_rgba(100,116,139,0.5)]',
    gold: 'shadow-[0_0_30px_rgba(234,179,8,0.6)]',
    silver: 'shadow-[0_0_25px_rgba(148,163,184,0.5)]',
    bronze: 'shadow-[0_0_25px_rgba(234,88,12,0.5)]',
  };

  return (
    <div
      className={cn(
        'relative rounded-lg border-2 overflow-hidden',
        variants[variant],
        glow && glowVariants[variant],
        className
      )}
    >
      {/* Corner decorations */}
      <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-yellow-500/50" />
      <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-yellow-500/50" />
      <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-yellow-500/50" />
      <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-yellow-500/50" />

      {/* Texture overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDIpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30" />

      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}
