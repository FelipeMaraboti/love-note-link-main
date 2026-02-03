import { useEffect, useState } from 'react';
import { EmbeddedCheckoutProvider, EmbeddedCheckout } from '@stripe/react-stripe-js';
import { stripePromise } from '@/lib/stripe';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Loader2 } from 'lucide-react';

interface StripeCheckoutProps {
  slug: string;
  onSuccess?: () => void;
}

const StripeCheckout = ({ slug, onSuccess }: StripeCheckoutProps) => {
  const [clientSecret, setClientSecret] = useState<string>('');
  const [error, setError] = useState<string>('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Create Checkout Session
    const createCheckoutSession = async () => {
      try {
        console.log('Slug being sent:', slug);
        const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:4242';
        console.log('API URL:', apiUrl);
        const body = JSON.stringify({ slug });
        console.log('Request body:', body);
        
        const response = await fetch(`${apiUrl}/create-checkout-session`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body,
        });

        if (!response.ok) {
          throw new Error('Failed to create checkout session');
        }

        const data = await response.json();
        setClientSecret(data.clientSecret);
      } catch (err) {
        console.error('Error creating checkout session:', err);
        setError('Unable to initialize payment. Please try again.');
      } finally {
        setLoading(false);
      }
    };

    createCheckoutSession();
  }, [slug]);

  if (loading) {
    return (
      <div className="flex items-center justify-center py-12">
        <Loader2 className="h-8 w-8 animate-spin text-pink-500" />
      </div>
    );
  }

  if (error) {
    return (
      <Alert variant="destructive">
        <AlertDescription>{error}</AlertDescription>
      </Alert>
    );
  }

  if (!clientSecret) {
    return null;
  }

  return (
    <div className="w-full">
      <EmbeddedCheckoutProvider
        stripe={stripePromise}
        options={{
          clientSecret,
          onComplete: () => {
            onSuccess?.();
          },
        }}
      >
        <EmbeddedCheckout />
      </EmbeddedCheckoutProvider>
    </div>
  );
};

export default StripeCheckout;
