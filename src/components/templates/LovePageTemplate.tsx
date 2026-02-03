import { LovePageData, TemplateType, GeneratedMessage } from '@/types/lovepage';
import { Heart, Sparkles, Stars } from 'lucide-react';
import { useI18n } from '@/lib/i18n';

interface LovePageTemplateProps {
  page: LovePageData;
  isPreview?: boolean;
}

const LovePageTemplate = ({ page, isPreview = false }: LovePageTemplateProps) => {
  const { t, lang } = useI18n();
  const message = page.message as unknown as GeneratedMessage;

  // Function to translate message content based on language
  const translateMessage = (msg: GeneratedMessage): GeneratedMessage => {
    if (lang !== 'pt') return msg;
    
    const messageType = page.messageType;
    const prefix = `lovePage.${messageType}`;

    try {
      if (messageType === 'romantic') {
        const isSecondIntro = msg.intro.startsWith('To the love');
        const introKey = isSecondIntro ? `${prefix}.intro2` : `${prefix}.intro1`;
        
        return {
          intro: t(introKey, { toName: page.toName }),
          sections: msg.sections.map((section, idx) => {
            const sectionKeys = [
              { titleKey: `${prefix}.dayWeMet`, paraKeys: [`${prefix}.dayWeMet_p1`, `${prefix}.dayWeMet_p2`, `${prefix}.dayWeMet_p3`] },
              { titleKey: `${prefix}.whatYouMean`, paraKeys: [`${prefix}.whatYouMean_p1`, `${prefix}.whatYouMean_p2`, `${prefix}.whatYouMean_p3`] },
              { titleKey: `${prefix}.ourForever`, paraKeys: [`${prefix}.ourForever_p1`, `${prefix}.ourForever_p2`, `${prefix}.ourForever_p3`] },
              { titleKey: `${prefix}.littleMoments`, paraKeys: [`${prefix}.littleMoments_p1`, `${prefix}.littleMoments_p2`] },
            ];
            
            if (idx < sectionKeys.length) {
              const sectionKey = sectionKeys[idx];
              return {
                title: t(sectionKey.titleKey),
                paragraphs: sectionKey.paraKeys.map(key => 
                  t(key, { toName: page.toName, fromName: page.fromName })
                ),
              };
            }
            return section;
          }),
          closing: t(`${prefix}.closing`),
          signature: t(`${prefix}.signature`, { fromName: page.fromName }),
        };
      } else if (messageType === 'fun') {
        const isSecondIntro = msg.intro.includes('cute overload');
        const introKey = isSecondIntro ? `${prefix}.intro2` : `${prefix}.intro1`;
        
        return {
          intro: t(introKey, { toName: page.toName }),
          sections: msg.sections.map((section, idx) => {
            const sectionKeys = [
              { titleKey: `${prefix}.whyYouBest`, paraKeys: [`${prefix}.whyYouBest_p1`, `${prefix}.whyYouBest_p2`, `${prefix}.whyYouBest_p3`] },
              { titleKey: `${prefix}.greatestHits`, paraKeys: [`${prefix}.greatestHits_p1`, `${prefix}.greatestHits_p2`, `${prefix}.greatestHits_p3`] },
              { titleKey: `${prefix}.manyAdventures`, paraKeys: [`${prefix}.manyAdventures_p1`, `${prefix}.manyAdventures_p2`, `${prefix}.manyAdventures_p3`] },
              { titleKey: `${prefix}.survivalGuide`, paraKeys: [`${prefix}.survivalGuide_p1`, `${prefix}.survivalGuide_p2`] },
              { titleKey: `${prefix}.favoriteAdventures`, paraKeys: [`${prefix}.favoriteAdventures_p1`, `${prefix}.favoriteAdventures_p2`] },
              { titleKey: `${prefix}.futureSpoilers`, paraKeys: [`${prefix}.futureSpoilers_p1`, `${prefix}.futureSpoilers_p2`] },
            ];
            if (idx < sectionKeys.length) {
              const sectionKey = sectionKeys[idx];
              return {
                title: t(sectionKey.titleKey),
                paragraphs: sectionKey.paraKeys.map(key => t(key, { toName: page.toName })),
              };
            }
            return section;
          }),
          closing: t(`${prefix}.fun_closing`),
          signature: t(`${prefix}.fun_signature`, { fromName: page.fromName }),
        };
      } else if (messageType === 'deep') {
        const isSecondIntro = msg.intro.startsWith('Dear');
        const introKey = isSecondIntro ? `${prefix}.intro2` : `${prefix}.intro1`;
        
        return {
          intro: t(introKey, { toName: page.toName }),
          sections: msg.sections.map((section, idx) => {
            const sectionKeys = [
              { titleKey: `${prefix}.philosophyUs`, paraKeys: [`${prefix}.philosophyUs_p1`, `${prefix}.philosophyUs_p2`, `${prefix}.philosophyUs_p3`] },
              { titleKey: `${prefix}.sacredSpace`, paraKeys: [`${prefix}.sacredSpace_p1`, `${prefix}.sacredSpace_p2`, `${prefix}.sacredSpace_p3`] },
              { titleKey: `${prefix}.eternityMoment`, paraKeys: [`${prefix}.eternityMoment_p1`, `${prefix}.eternityMoment_p2`, `${prefix}.eternityMoment_p3`] },
              { titleKey: `${prefix}.worldsCollided`, paraKeys: [`${prefix}.worldsCollided_p1`, `${prefix}.worldsCollided_p2`] },
              { titleKey: `${prefix}.calmYouBrought`, paraKeys: [`${prefix}.calmYouBrought_p1`, `${prefix}.calmYouBrought_p2`] },
              { titleKey: `${prefix}.whatBuild`, paraKeys: [`${prefix}.whatBuild_p1`, `${prefix}.whatBuild_p2`] },
            ];
            if (idx < sectionKeys.length) {
              const sectionKey = sectionKeys[idx];
              return {
                title: t(sectionKey.titleKey),
                paragraphs: sectionKey.paraKeys.map(key => t(key, { toName: page.toName })),
              };
            }
            return section;
          }),
          closing: t(`${prefix}.deep_closing`),
          signature: t(`${prefix}.deep_signature`, { fromName: page.fromName }),
        };
      } else if (messageType === 'short') {
        const isSecondIntro = msg.intro.includes('shortcut');
        const introKey = isSecondIntro ? `${prefix}.intro2` : `${prefix}.intro1`;
        
        return {
          intro: t(introKey, { toName: page.toName }),
          sections: msg.sections.map((section, idx) => {
            const sectionKeys = [
              { titleKey: `${prefix}.simplyPut`, paraKeys: [`${prefix}.simplyPut_p1`, `${prefix}.simplyPut_p2`, `${prefix}.simplyPut_p3`] },
              { titleKey: `${prefix}.heartOfIt`, paraKeys: [`${prefix}.heartOfIt_p1`, `${prefix}.heartOfIt_p2`, `${prefix}.heartOfIt_p3`] },
              { titleKey: `${prefix}.foreverSimply`, paraKeys: [`${prefix}.foreverSimply_p1`, `${prefix}.foreverSimply_p2`, `${prefix}.foreverSimply_p3`] },
              { titleKey: `${prefix}.loveOnePage`, paraKeys: [`${prefix}.loveOnePage_p1`, `${prefix}.loveOnePage_p2`] },
              { titleKey: `${prefix}.littleThings`, paraKeys: [`${prefix}.littleThings_p1`, `${prefix}.littleThings_p2`] },
              { titleKey: `${prefix}.shortPromise`, paraKeys: [`${prefix}.shortPromise_p1`, `${prefix}.shortPromise_p2`] },
            ];
            if (idx < sectionKeys.length) {
              const sectionKey = sectionKeys[idx];
              return {
                title: t(sectionKey.titleKey),
                paragraphs: sectionKey.paraKeys.map(key => t(key, { toName: page.toName })),
              };
            }
            return section;
          }),
          closing: t(`${prefix}.short_closing`),
          signature: t(`${prefix}.short_signature`, { fromName: page.fromName }),
        };
      }
      return msg;
    } catch {
      return msg;
    }
  };

  const translatedMessage = translateMessage(message);

  const templateStyles: Record<TemplateType, {
    container: string;
    sectionBg: string;
    heading: string;
    sectionTitle: string;
    message: string;
    accent: string;
    divider: string;
    overlay: string[];
  }> = {
    'romantic-classic': {
      container: 'bg-gradient-to-br from-rose-50 via-rose-100/30 to-pink-50',
      sectionBg: 'bg-white/60 backdrop-blur-sm border border-rose-100',
      heading: 'font-display italic text-rose-900',
      sectionTitle: 'font-display italic text-rose-800',
      message: 'font-body text-rose-800/90',
      accent: 'text-rose-400',
      divider: 'border-rose-200',
      overlay: [
        'absolute w-72 h-72 bg-rose-300/25 blur-3xl -left-10 -top-6',
        'absolute w-80 h-80 bg-pink-200/20 blur-3xl right-[-4rem] top-10',
        'absolute w-72 h-72 bg-amber-100/25 blur-3xl left-1/3 bottom-4',
      ],
    },
    'minimal-elegant': {
      container: 'bg-gradient-to-br from-stone-50 via-neutral-50 to-stone-100',
      sectionBg: 'bg-white/70 backdrop-blur-sm border border-stone-200',
      heading: 'font-body font-light tracking-widest text-stone-800 uppercase',
      sectionTitle: 'font-body font-medium tracking-wide text-stone-700 uppercase',
      message: 'font-body font-light text-stone-700 leading-relaxed',
      accent: 'text-stone-400',
      divider: 'border-stone-200',
      overlay: [
        'absolute w-64 h-64 bg-stone-200/40 blur-3xl -left-6 top-0',
        'absolute w-72 h-72 bg-white/50 blur-2xl right-[-3rem] top-10',
      ],
    },
    'cute-playful': {
      container: 'bg-gradient-to-br from-pink-50 via-rose-50 to-pink-100',
      sectionBg: 'bg-white/80 backdrop-blur-sm border-2 border-pink-200 shadow-lg shadow-pink-100/50',
      heading: 'font-display text-pink-700',
      sectionTitle: 'font-display text-pink-600',
      message: 'font-body text-pink-700/90',
      accent: 'text-pink-400',
      divider: 'border-pink-200',
      overlay: [
        'absolute w-64 h-64 bg-rose-200/30 blur-3xl -left-6 -top-4',
        'absolute w-60 h-60 bg-pink-300/25 blur-3xl right-[-2rem] top-16',
        'absolute w-48 h-48 bg-amber-200/25 blur-3xl left-1/3 bottom-0',
      ],
    },
    'deep-emotional': {
      container: 'bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900',
      sectionBg: 'bg-slate-800/50 backdrop-blur-sm border border-slate-700',
      heading: 'font-display text-slate-100',
      sectionTitle: 'font-display text-slate-200',
      message: 'font-body text-slate-300 leading-relaxed',
      accent: 'text-slate-500',
      divider: 'border-slate-700',
      overlay: [
        'absolute w-72 h-72 bg-indigo-500/20 blur-3xl -left-8 top-0',
        'absolute w-80 h-80 bg-slate-700/30 blur-3xl right-[-4rem] top-8',
        'absolute w-64 h-64 bg-fuchsia-400/15 blur-3xl left-1/2 bottom-4',
      ],
    },
    'midnight-neon': {
      container: 'bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950',
      sectionBg: 'bg-white/5 backdrop-blur-lg border border-fuchsia-500/30 shadow-[0_0_30px_rgba(236,72,153,0.35)]',
      heading: 'font-display tracking-wide text-indigo-50',
      sectionTitle: 'font-display text-fuchsia-200',
      message: 'font-body text-indigo-100/90 leading-relaxed',
      accent: 'text-fuchsia-300',
      divider: 'border-fuchsia-500/40',
      overlay: [
        'absolute w-72 h-72 bg-fuchsia-500/25 blur-3xl -left-10 -top-4',
        'absolute w-80 h-80 bg-indigo-500/30 blur-3xl right-[-5rem] top-8',
        'absolute w-60 h-60 bg-cyan-400/30 blur-3xl left-1/3 bottom-6',
      ],
    },
    'vintage-parchment': {
      container: 'bg-gradient-to-br from-amber-50 via-amber-100 to-amber-50',
      sectionBg: 'bg-amber-50/90 border border-amber-200 shadow-[0_10px_40px_rgba(0,0,0,0.05)]',
      heading: 'font-serif text-amber-900',
      sectionTitle: 'font-serif text-amber-800',
      message: 'font-body text-amber-900/90 leading-relaxed',
      accent: 'text-amber-500',
      divider: 'border-amber-200',
      overlay: [
        'absolute w-72 h-72 bg-amber-200/35 blur-3xl -left-8 top-0',
        'absolute w-80 h-80 bg-amber-100/45 blur-3xl right-[-4rem] top-6',
        'absolute w-64 h-64 bg-amber-300/25 blur-3xl left-1/2 bottom-8',
      ],
    },
    'ocean-glass': {
      container: 'bg-gradient-to-br from-cyan-50 via-sky-100 to-blue-50',
      sectionBg: 'bg-white/70 backdrop-blur-xl border border-cyan-100 shadow-lg shadow-cyan-100/50',
      heading: 'font-display text-sky-900',
      sectionTitle: 'font-display text-sky-700',
      message: 'font-body text-slate-800 leading-relaxed',
      accent: 'text-cyan-500',
      divider: 'border-cyan-200',
      overlay: [
        'absolute w-72 h-72 bg-cyan-200/30 blur-3xl -left-6 -top-4',
        'absolute w-80 h-80 bg-sky-200/25 blur-3xl right-[-5rem] top-12',
        'absolute w-64 h-64 bg-white/40 blur-3xl left-1/3 bottom-6',
      ],
    },
  };

  const styles = templateStyles[page.template];

  const DecorativeIcon = () => {
    switch (page.template) {
      case 'cute-playful':
        return <Sparkles className="w-5 h-5" />;
      case 'deep-emotional':
        return <Stars className="w-5 h-5" />;
      case 'midnight-neon':
        return <Stars className="w-5 h-5" />;
      case 'ocean-glass':
        return <Sparkles className="w-5 h-5" />;
      default:
        return <Heart className="w-5 h-5" fill="currentColor" />;
    }
  };

  const overlays = styles.overlay;

  return (
    <div className={`${styles.container} relative overflow-hidden min-h-screen ${isPreview ? 'py-8' : 'py-12 md:py-20'} px-4`}>
      <div className="pointer-events-none absolute inset-0">
        {overlays.map((cls, idx) => (
          <div key={idx} className={cls} />
        ))}
      </div>
      <div className="max-w-3xl mx-auto relative z-10">
        {/* Header Section */}
        <header className="text-center mb-12 md:mb-16">
          {/* Decorative elements */}
          <div className={`flex justify-center items-center gap-3 mb-6 ${styles.accent}`}>
            <DecorativeIcon />
            <Heart className="w-8 h-8" fill="currentColor" />
            <DecorativeIcon />
          </div>
          
          {/* To name */}
          <p className={`text-sm md:text-base mb-3 ${styles.message} opacity-70 tracking-wide`}>
            {t('lovePage.letterFor')}
          </p>
          <h1 className={`text-4xl md:text-6xl mb-6 ${styles.heading}`}>
            {page.toName}
          </h1>
          
          {/* Intro text */}
          <p className={`text-xl md:text-2xl ${styles.heading} opacity-90`}>
            {translatedMessage.intro}
          </p>
        </header>

        {/* Message Sections */}
        <div className="space-y-8 md:space-y-12">
          {translatedMessage.sections.map((section, index) => (
            <section 
              key={index} 
              className={`${styles.sectionBg} rounded-2xl p-6 md:p-10 transform transition-all duration-300`}
            >
              {/* Section Title */}
              <div className="flex items-center gap-3 mb-6">
                <div className={`${styles.accent}`}>
                  <DecorativeIcon />
                </div>
                <h2 className={`text-xl md:text-2xl ${styles.sectionTitle}`}>
                  {section.title}
                </h2>
              </div>
              
              {/* Section Divider */}
              <div className={`border-b ${styles.divider} mb-6`} />
              
              {/* Paragraphs */}
              <div className="space-y-6">
                {section.paragraphs.map((paragraph, pIndex) => (
                  <p 
                    key={pIndex} 
                    className={`text-base md:text-lg leading-relaxed ${styles.message}`}
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </section>
          ))}
        </div>

        {/* Closing Section */}
        <footer className="mt-12 md:mt-16 text-center">
          <div className={`${styles.sectionBg} rounded-2xl p-6 md:p-10`}>
            {/* Closing message */}
            <p className={`text-lg md:text-xl leading-relaxed ${styles.message} mb-8`}>
              {translatedMessage.closing}
            </p>
            
            {/* Decorative divider */}
            <div className={`flex justify-center items-center gap-2 mb-6 ${styles.accent}`}>
              <span className={`block w-12 h-px ${styles.accent.replace('text', 'bg')}`} />
              <Heart className="w-4 h-4" fill="currentColor" />
              <span className={`block w-12 h-px ${styles.accent.replace('text', 'bg')}`} />
            </div>
            
            {/* Signature */}
            <p className={`text-xl md:text-2xl whitespace-pre-line ${styles.heading}`}>
              {translatedMessage.signature}
            </p>
          </div>
          
          {/* Final decorative hearts */}
          <div className={`flex justify-center gap-2 mt-8 ${styles.accent}`}>
            <Heart className="w-4 h-4 animate-pulse" fill="currentColor" />
            <Heart className="w-6 h-6 animate-pulse" fill="currentColor" style={{ animationDelay: '0.2s' }} />
            <Heart className="w-4 h-4 animate-pulse" fill="currentColor" style={{ animationDelay: '0.4s' }} />
          </div>
          
          {/* Footer */}
          {!isPreview && (
            <p className={`text-xs mt-12 opacity-50 ${styles.message}`}>
              {t('lovePage.createdFooter')}
            </p>
          )}
        </footer>
      </div>
    </div>
  );
};

export default LovePageTemplate;
