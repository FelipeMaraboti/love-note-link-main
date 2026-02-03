import { useParams, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useLovePageStore } from '@/stores/lovePageStore';
import { useI18n } from '@/lib/i18n';
import { Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import LovePageTemplate from '@/components/templates/LovePageTemplate';
import { LovePageData } from '@/types/lovepage';

const LovePage = () => {
  const { slug } = useParams<{ slug: string }>();
  const { getPageBySlug, isLoading } = useLovePageStore();
  const { t } = useI18n();
  const [page, setPage] = useState<LovePageData | null>(null);
  const [notFound, setNotFound] = useState(false);
  
  useEffect(() => {
    const fetchPage = async () => {
      if (slug) {
        const data = await getPageBySlug(slug);
        if (data) {
          setPage(data);
        } else {
          setNotFound(true);
        }
      }
    };
    
    fetchPage();
  }, [slug, getPageBySlug]);
  
  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Heart className="w-8 h-8 text-primary animate-pulse" />
      </div>
    );
  }
  
  if (notFound || !page) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center px-4 bg-background">
        <Heart className="w-16 h-16 text-primary/30 mb-6" />
        <h1 className="text-2xl font-display mb-2 text-foreground">{t('lovePage.notFoundTitle')}</h1>
        <p className="text-muted-foreground mb-6">{t('lovePage.notFoundMessage')}</p>
        <Link to="/">
          <Button>{t('lovePage.createOwn')}</Button>
        </Link>
      </div>
    );
  }
  
  if (!page.paid) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center px-4 bg-background">
        <Heart className="w-16 h-16 text-primary/30 mb-6" />
        <h1 className="text-2xl font-display mb-2 text-foreground">{t('lovePage.lockedTitle')}</h1>
        <p className="text-muted-foreground mb-6">{t('lovePage.lockedMessage')}</p>
      </div>
    );
  }

  return <LovePageTemplate page={page} />;
};

export default LovePage;
