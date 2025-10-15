import * as React from 'react';
import { X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from './button';

interface DrawerProps {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
  title?: string;
}

export function Drawer({ open, onClose, children, title }: DrawerProps) {
  if (!open) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 z-40 transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Drawer */}
      <div
        className={cn(
          'fixed bottom-0 left-0 right-0 z-50 bg-white rounded-t-2xl shadow-2xl transition-transform',
          'max-h-[80vh] overflow-y-auto',
          open ? 'translate-y-0' : 'translate-y-full'
        )}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b">
          {title && <h2 className="text-lg font-semibold">{title}</h2>}
          <Button variant="ghost" size="icon" onClick={onClose} className="ml-auto">
            <X size={20} />
          </Button>
        </div>

        {/* Content */}
        <div className="p-6">{children}</div>
      </div>
    </>
  );
}
