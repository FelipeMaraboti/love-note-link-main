import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { useLovePageStore } from '@/stores/lovePageStore';
import { MESSAGE_TYPES, MessageType } from '@/types/lovepage';
import { Heart, ArrowRight } from 'lucide-react';
import { useI18n } from '@/lib/i18n';

interface StepOneProps {
  onComplete: () => void;
}

const StepOne = ({ onComplete }: StepOneProps) => {
  const { fromName, toName, messageType, setFromName, setToName, setMessageType } = useLovePageStore();
  const { t } = useI18n();
  const [errors, setErrors] = useState<{ from?: string; to?: string }>({});

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const newErrors: { from?: string; to?: string } = {};
    
    if (!fromName.trim()) {
      newErrors.from = t('stepOne.fromError');
    }
    if (!toName.trim()) {
      newErrors.to = t('stepOne.toError');
    }
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    
    setErrors({});
    onComplete();
  };

  return (
    <div className="animate-fade-up">
      <div className="text-center mb-8">
        <Heart className="w-10 h-10 mx-auto text-primary mb-4" fill="currentColor" />
        <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-2">
          {t('stepOne.title')}
        </h2>
        <p className="text-muted-foreground">
          {t('stepOne.subtitle')}
        </p>
      </div>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="fromName" className="text-sm font-medium">
            {t('stepOne.fromLabel')}
          </Label>
          <Input
            id="fromName"
            type="text"
            placeholder={t('stepOne.fromPlaceholder')}
            value={fromName}
            onChange={(e) => setFromName(e.target.value)}
            className={`h-12 text-base ${errors.from ? 'border-destructive' : ''}`}
            maxLength={50}
          />
          {errors.from && (
            <p className="text-sm text-destructive">{errors.from}</p>
          )}
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="toName" className="text-sm font-medium">
            {t('stepOne.toLabel')}
          </Label>
          <Input
            id="toName"
            type="text"
            placeholder={t('stepOne.toPlaceholder')}
            value={toName}
            onChange={(e) => setToName(e.target.value)}
            className={`h-12 text-base ${errors.to ? 'border-destructive' : ''}`}
            maxLength={50}
          />
          {errors.to && (
            <p className="text-sm text-destructive">{errors.to}</p>
          )}
        </div>
        
        <div className="space-y-3">
          <Label className="text-sm font-medium">{t('stepOne.messageTypeTitle')}</Label>
          <RadioGroup
            value={messageType}
            onValueChange={(value) => setMessageType(value as MessageType)}
            className="grid grid-cols-2 gap-3"
          >
            {MESSAGE_TYPES.map((type) => (
              <label
                key={type.value}
                className={`flex flex-col p-4 rounded-xl border-2 cursor-pointer transition-all duration-200 ${
                  messageType === type.value
                    ? 'border-primary bg-accent'
                    : 'border-border hover:border-primary/50'
                }`}
              >
                <div className="flex items-center gap-2">
                  <RadioGroupItem value={type.value} id={type.value} />
                  <span className="font-medium text-foreground">{type.label}</span>
                </div>
                <span className="text-xs text-muted-foreground mt-1 ml-6">
                  {type.description}
                </span>
              </label>
            ))}
          </RadioGroup>
        </div>
        
        <Button 
          type="submit" 
          className="w-full py-6 text-lg rounded-xl"
        >
          {t('stepOne.next')}
          <ArrowRight className="w-5 h-5 ml-2" />
        </Button>
      </form>
    </div>
  );
};

export default StepOne;
