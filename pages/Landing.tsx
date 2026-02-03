import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Heart } from 'lucide-react';
import { useI18n } from '@/lib/i18n';

const Landing = () => {
  const { t } = useI18n();
  
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 text-primary/20 animate-float">
          <Heart className="w-8 h-8" fill="currentColor" />
        </div>
        <div className="absolute top-40 right-20 text-primary/15 animate-float" style={{ animationDelay: '1s' }}>
          <Heart className="w-6 h-6" fill="currentColor" />
        </div>
        <div className="absolute bottom-32 left-1/4 text-primary/10 animate-float" style={{ animationDelay: '2s' }}>
          <Heart className="w-10 h-10" fill="currentColor" />
        </div>
        <div className="absolute bottom-20 right-1/3 text-primary/20 animate-float" style={{ animationDelay: '0.5s' }}>
          <Heart className="w-5 h-5" fill="currentColor" />
        </div>
      </div>
      
      {/* Main content */}
      <div className="text-center max-w-2xl mx-auto animate-fade-up">
        <div className="mb-6">
          <Heart className="w-16 h-16 mx-auto text-primary animate-pulse" fill="currentColor" />
        </div>
        
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mb-6 leading-tight">
          {t('landing.title')}
          <br />
          <span className="text-primary">{t('landing.titleHighlight')}</span>
        </h1>
        
        <p className="text-lg md:text-xl text-muted-foreground mb-10 font-body">
          {t('landing.subtitle')}
        </p>
        
        <Link to="/create">
          <Button 
            size="lg" 
            className="text-lg px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 bg-primary hover:bg-primary/90"
          >
            <Heart className="w-5 h-5 mr-2" />
            {t('landing.button')}
          </Button>
        </Link>
        
        <p className="mt-8 text-sm text-muted-foreground/70">
          {t('landing.note')}
        </p>
      </div>
      
      {/* Bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-accent/30 to-transparent pointer-events-none" />
    </div>
  );
};

export default Landing;
