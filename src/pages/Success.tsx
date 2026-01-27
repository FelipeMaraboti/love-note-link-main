
import { useParams, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useLovePageStore } from '@/stores/lovePageStore';
import { Heart, Copy, Send, Check } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useToast } from '@/hooks/use-toast';
import { useI18n } from '@/lib/i18n';

const Success = () => {

  const { slug } = useParams<{ slug: string }>();
  const { currentPage, getPageBySlug } = useLovePageStore();
  const [page, setPage] = useState(currentPage);
  const [copied, setCopied] = useState(false);
  const { toast } = useToast();
  const { t } = useI18n();
  const [loading, setLoading] = useState(!currentPage);

  useEffect(() => {
    const fetchPage = async () => {
      if (!currentPage && slug) {
        setLoading(true);
        const data = await getPageBySlug(slug);
        setPage(data);
        setLoading(false);
      }
    };
    fetchPage();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4">
        <Heart className="w-8 h-8 text-primary animate-pulse" />
      </div>
    );
  }

  if (!page) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4">
        <div className="text-center">
          <h1 className="text-2xl font-display mb-4">{t('success.notFoundTitle')}</h1>
          <Link to="/">
            <Button>{t('success.goHome')}</Button>
          </Link>
        </div>
      </div>
    );
  }

  const fullUrl = `${window.location.origin}/l/${page.slug}`;
  
  const handleCopy = async () => {
    await navigator.clipboard.writeText(fullUrl);
    setCopied(true);
    toast({
      title: "Copied!",
      description: "Link copied to clipboard",
    });
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSend = () => {
    if (navigator.share) {
      navigator.share({
        title: `A love message for ${page.toName}`,
        url: fullUrl,
      });
    } else {
      handleCopy();
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-12">
      <div className="max-w-md w-full text-center animate-scale-in">
        {/* Success icon */}
        <div className="mb-8">
          <div className="w-20 h-20 mx-auto bg-primary/10 rounded-full flex items-center justify-center">
            <Heart className="w-10 h-10 text-primary" fill="currentColor" />
          </div>
        </div>
        
        <h1 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
          {t('success.ready')}
        </h1>
        
        <p className="text-muted-foreground mb-8">
          {t('success.shareWith', { name: page.toName })}
        </p>
        
        {/* URL Display */}
        <div className="bg-card border border-border rounded-xl p-4 mb-6">
          <p className="text-sm text-muted-foreground mb-2">{t('success.privateLink')}</p>
          <p className="font-mono text-sm text-foreground break-all">
            {fullUrl}
          </p>
        </div>
        
        {/* Action buttons */}
        <div className="space-y-3">
          <Button 
            onClick={handleCopy}
            variant="outline" 
            className="w-full py-6 text-lg"
          >
            {copied ? (
              <>
                <Check className="w-5 h-5 mr-2" />
                {t('success.copied')}
              </>
            ) : (
              <>
                <Copy className="w-5 h-5 mr-2" />
                {t('success.copy')}
              </>
            )}
          </Button>
          
          <Button 
            onClick={handleSend}
            className="w-full py-6 text-lg bg-primary hover:bg-primary/90"
          >
            <Send className="w-5 h-5 mr-2" />
            {t('success.send')}
          </Button>
        </div>
        
        {/* Preview link */}
        <Link 
          to={`/l/${page.slug}`}
          className="inline-block mt-8 text-sm text-muted-foreground hover:text-primary transition-colors"
        >
          {t('success.preview')}
        </Link>
      </div>
    </div>
  );
};

export default Success;
