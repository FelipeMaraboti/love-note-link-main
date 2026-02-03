import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { useLovePageStore } from '@/stores/lovePageStore';
import { ArrowLeft, Lock, Sparkles } from 'lucide-react';
import LovePageTemplate from '@/components/templates/LovePageTemplate';
import { useI18n } from '@/lib/i18n';
import StripeCheckout from './StripeCheckout';

interface StepThreeProps {
  onUnlock: () => void;
  onBack: () => void;
}

const StepThree = ({ onUnlock, onBack }: StepThreeProps) => {
  const { t } = useI18n();
  const { currentPage } = useLovePageStore();
  const [showCheckout, setShowCheckout] = useState(false);

  if (!currentPage) {
    return null;
  }

  const partialSlug = currentPage.slug.slice(0, 3) + '•••••';

  const handleUnlockClick = () => {
    setShowCheckout(true);
  };

  return (
    <div className="animate-fade-up">
      <div className="text-center mb-6">
        <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-2">
          {t('create.stepThree.title')}
        </h2>
        <p className="text-muted-foreground">
          {t('create.stepThree.subtitle')}
        </p>
      </div>
      
      {/* Preview container */}
      <div className="relative rounded-2xl overflow-hidden border border-border mb-6">
        <div className="blur-preview pointer-events-none">
          <div className="max-h-80 overflow-hidden">
            <LovePageTemplate page={currentPage} isPreview />
          </div>
        </div>
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-background/60 flex flex-col items-center justify-center p-6">
          <Lock className="w-12 h-12 text-primary mb-4" />
          <p className="text-center text-foreground font-medium mb-2">
            {t('create.stepThree.ready')}
          </p>
          <p className="text-center text-sm text-muted-foreground mb-4">
            {t('create.stepThree.privateLink', { slug: partialSlug })}
          </p>
        </div>
      </div>
      
      {/* Unlock card or Stripe Checkout */}
      {!showCheckout ? (
        <div className="bg-card border border-border rounded-2xl p-6 text-center mb-6">
          <Sparkles className="w-8 h-8 text-gold mx-auto mb-3" />
          <h3 className="text-lg font-display font-semibold text-foreground mb-2">
            {t('create.stepThree.unlockTitle')}
          </h3>
          <p className="text-2xl font-bold text-primary mb-1">$1.99</p>
          <p className="text-sm text-muted-foreground mb-4">{t('create.stepThree.priceNote')}</p>
          
          <Button 
            onClick={handleUnlockClick}
            className="w-full py-6 text-lg rounded-xl bg-primary hover:bg-primary/90"
          >
            <Lock className="w-5 h-5 mr-2" />
            {t('create.stepThree.unlock')}
          </Button>
        </div>
      ) : (
        <div className="bg-card border border-border rounded-2xl p-6 mb-6">
          <StripeCheckout
            slug={currentPage.slug}
            onSuccess={onUnlock}
          />
        </div>
      )}
      
      <Button 
        variant="ghost" 
        onClick={onBack}
        className="w-full text-muted-foreground"
      >
        <ArrowLeft className="w-4 h-4 mr-2" />
        {t('create.stepThree.back')}
      </Button>
    </div>
  );
};

export default StepThree;
