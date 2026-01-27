import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import StepIndicator from '@/components/create/StepIndicator';
import StepOne from '@/components/create/StepOne';
import StepTwo from '@/components/create/StepTwo';
import StepThree from '@/components/create/StepThree';
import { useLovePageStore } from '@/stores/lovePageStore';
import { useToast } from '@/hooks/use-toast';

const Create = () => {
  const [step, setStep] = useState(1);
  const navigate = useNavigate();
  const { generatePage, currentPage } = useLovePageStore();
  const { toast } = useToast();

  const handleStepOneComplete = () => {
    setStep(2);
  };

  const handleStepTwoComplete = async () => {
    try {
      await generatePage();
      setStep(3);
    } catch (error) {
      console.error('Error generating page:', error);
      toast({
        title: "Error",
        description: "Failed to generate page. Please try again.",
        variant: "destructive",
      });
    }
  };

  const handleUnlock = () => {
    // For now, skip payment and go directly to success
    if (currentPage) {
      navigate(`/success/${currentPage.slug}`);
    }
  };

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  return (
    <div className="min-h-screen py-8 px-4">
      <div className="max-w-xl mx-auto">
        <StepIndicator currentStep={step} totalSteps={3} />
        
        <div className="mt-8 animate-fade-in">
          {step === 1 && <StepOne onComplete={handleStepOneComplete} />}
          {step === 2 && <StepTwo onComplete={handleStepTwoComplete} onBack={handleBack} />}
          {step === 3 && <StepThree onUnlock={handleUnlock} onBack={handleBack} />}
        </div>
      </div>
    </div>
  );
};

export default Create;
