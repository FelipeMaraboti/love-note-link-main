import { Button } from '@/components/ui/button';
import { useLovePageStore } from '@/stores/lovePageStore';
import { TEMPLATES, TemplateType } from '@/types/lovepage';
import { ArrowLeft, ArrowRight, Check } from 'lucide-react';
import { useI18n } from '@/lib/i18n';

interface StepTwoProps {
  onComplete: () => void;
  onBack: () => void;
}

const StepTwo = ({ onComplete, onBack }: StepTwoProps) => {
  const { t } = useI18n();
  const { template, setTemplate } = useLovePageStore();

  const templatePreviews: Record<TemplateType, React.ReactNode> = {
    'romantic-classic': (
      <div className="h-24 bg-gradient-to-br from-rose-100 to-rose-50 rounded-lg flex items-center justify-center">
        <span className="font-display italic text-rose-800 text-sm">Elegant Script</span>
      </div>
    ),
    'minimal-elegant': (
      <div className="h-24 bg-gradient-to-br from-stone-100 to-stone-50 rounded-lg flex items-center justify-center">
        <span className="font-body font-light text-stone-700 text-sm tracking-wide">MINIMAL</span>
      </div>
    ),
    'cute-playful': (
      <div className="h-24 bg-gradient-to-br from-pink-100 to-pink-50 rounded-lg flex items-center justify-center relative overflow-hidden">
        <span className="font-body font-medium text-pink-700 text-sm">♡ Playful ♡</span>
      </div>
    ),
    'deep-emotional': (
      <div className="h-24 bg-gradient-to-br from-slate-800 to-slate-900 rounded-lg flex items-center justify-center">
        <span className="font-display text-slate-200 text-sm">Deep & Elegant</span>
      </div>
    ),
    'midnight-neon': (
      <div className="h-24 rounded-lg bg-gradient-to-br from-slate-950 via-indigo-900 to-fuchsia-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-white/5 blur-xl -z-10" />
        <div className="absolute -left-6 -top-8 w-28 h-28 bg-fuchsia-500/40 blur-2xl -z-10" />
        <div className="absolute right-0 bottom-0 w-24 h-24 bg-indigo-400/40 blur-2xl -z-10" />
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <span className="font-display text-indigo-50 text-sm tracking-wide">Neon Luxe</span>
        </div>
      </div>
    ),
    'vintage-parchment': (
      <div className="h-24 rounded-lg bg-gradient-to-br from-amber-50 via-amber-100 to-amber-50 border border-amber-200 flex items-center justify-center">
        <span className="font-serif text-amber-900 text-sm">Parchment & Gold</span>
      </div>
    ),
    'ocean-glass': (
      <div className="h-24 rounded-lg bg-gradient-to-br from-cyan-50 via-sky-100 to-blue-100 border border-cyan-100 flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-white/50 backdrop-blur -z-10" />
        <span className="relative font-body text-sky-800 text-sm z-10">Glass & Sea</span>
      </div>
    ),
  };

  return (
    <div className="animate-fade-up">
      <div className="text-center mb-8">
        <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-2">
          {t('create.stepTwo.title')}
        </h2>
        <p className="text-muted-foreground">
          {t('create.stepTwo.subtitle')}
        </p>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
        {TEMPLATES.map((t) => (
          <button
            key={t.id}
            onClick={() => setTemplate(t.id)}
            className={`relative p-4 rounded-xl border-2 text-left transition-all duration-200 ${
              template === t.id
                ? 'border-primary bg-accent shadow-lg'
                : 'border-border hover:border-primary/50'
            }`}
          >
            {template === t.id && (
              <div className="absolute top-3 right-3 w-6 h-6 bg-primary rounded-full flex items-center justify-center z-10 shadow-md">
                <Check className="w-4 h-4 text-primary-foreground" />
              </div>
            )}
            
            {templatePreviews[t.id]}
            
            <div className="mt-3">
              <h3 className="font-medium text-foreground">{t.name}</h3>
              <p className="text-xs text-muted-foreground mt-1">{t.description}</p>
            </div>
          </button>
        ))}
      </div>
      
      <div className="flex gap-3">
        <Button 
          variant="outline" 
          onClick={onBack}
          className="flex-1 py-6 text-lg rounded-xl"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          {t('create.stepTwo.back')}
        </Button>
        <Button 
          onClick={onComplete}
          className="flex-1 py-6 text-lg rounded-xl"
        >
          {t('create.stepTwo.generate')}
          <ArrowRight className="w-5 h-5 ml-2" />
        </Button>
      </div>
    </div>
  );
};

export default StepTwo;
