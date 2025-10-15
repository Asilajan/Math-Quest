import { Drawer } from './ui/drawer';
import { Lightbulb, AlertCircle, ArrowRight } from 'lucide-react';

interface HintDrawerProps {
  open: boolean;
  onClose: () => void;
  errorInsights?: string;
  hint?: string;
  firstStep?: string;
}

export function HintDrawer({ open, onClose, errorInsights, hint, firstStep }: HintDrawerProps) {
  return (
    <Drawer open={open} onClose={onClose} title="💡 Aide">
      <div className="space-y-6">
        {errorInsights && (
          <div className="bg-red-50 border border-red-200 rounded-lg p-4">
            <div className="flex items-start gap-3">
              <AlertCircle className="text-red-600 mt-0.5 flex-shrink-0" size={20} />
              <div>
                <h3 className="font-semibold text-red-900 mb-1">Analyse de l'erreur</h3>
                <p className="text-sm text-red-800">{errorInsights}</p>
              </div>
            </div>
          </div>
        )}

        {hint && (
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <div className="flex items-start gap-3">
              <Lightbulb className="text-blue-600 mt-0.5 flex-shrink-0" size={20} />
              <div>
                <h3 className="font-semibold text-blue-900 mb-1">Indice</h3>
                <p className="text-sm text-blue-800">{hint}</p>
              </div>
            </div>
          </div>
        )}

        {firstStep && (
          <div className="bg-green-50 border border-green-200 rounded-lg p-4">
            <div className="flex items-start gap-3">
              <ArrowRight className="text-green-600 mt-0.5 flex-shrink-0" size={20} />
              <div>
                <h3 className="font-semibold text-green-900 mb-1">Première étape</h3>
                <p className="text-sm text-green-800">{firstStep}</p>
              </div>
            </div>
          </div>
        )}

        {!errorInsights && !hint && !firstStep && (
          <div className="text-center py-8 text-gray-500">
            <Lightbulb size={48} className="mx-auto mb-3 opacity-50" />
            <p>Aucune aide disponible pour le moment</p>
          </div>
        )}
      </div>
    </Drawer>
  );
}
