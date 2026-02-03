import { Button } from "@/components/ui/button";
import { useI18n } from "@/lib/i18n";

const LanguageToggle = () => {
  const { lang, setLanguage } = useI18n();
  const next = lang === "en" ? "pt" : "en";

  return (
    <div className="fixed top-4 right-4 z-50">
      <Button
        variant="outline"
        size="sm"
        onClick={() => setLanguage(next)}
        className="backdrop-blur bg-background/80"
      >
        {lang.toUpperCase()} / {next.toUpperCase()}
      </Button>
    </div>
  );
};

export default LanguageToggle;
