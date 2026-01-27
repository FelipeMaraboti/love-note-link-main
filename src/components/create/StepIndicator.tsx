interface StepIndicatorProps {
  currentStep: number;
  totalSteps: number;
}

const StepIndicator = ({ currentStep, totalSteps }: StepIndicatorProps) => {
  return (
    <div className="flex items-center justify-center gap-2">
      {Array.from({ length: totalSteps }, (_, i) => i + 1).map((step) => (
        <div key={step} className="flex items-center">
          <div
            className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium transition-all duration-300 ${
              step === currentStep
                ? 'bg-primary text-primary-foreground scale-110'
                : step < currentStep
                ? 'bg-primary/20 text-primary'
                : 'bg-muted text-muted-foreground'
            }`}
          >
            {step}
          </div>
          {step < totalSteps && (
            <div
              className={`w-12 h-0.5 mx-1 transition-colors duration-300 ${
                step < currentStep ? 'bg-primary/40' : 'bg-muted'
              }`}
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default StepIndicator;
