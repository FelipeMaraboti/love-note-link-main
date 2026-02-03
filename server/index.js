import Stripe from 'stripe';
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { createClient } from '@supabase/supabase-js';

dotenv.config();

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
const supabase = createClient(
  process.env.VITE_SUPABASE_URL,
  process.env.VITE_SUPABASE_ANON_KEY
);
const app = express();
const PORT = process.env.PORT || 4242;

app.use(cors());
app.use(express.json());
app.use(express.static('public'));

const YOUR_DOMAIN = process.env.YOUR_DOMAIN || 'http://localhost:8080';

// Handle CORS preflight
app.options('/create-checkout-session', cors());

// Create Checkout Session
app.post('/create-checkout-session', async (req, res) => {
  try {
    console.log('Request body:', req.body);
    const { slug } = req.body;
    
    if (!slug) {
      console.error('Missing slug parameter');
      return res.status(400).json({ error: 'Missing slug parameter' });
    }

    console.log('Creating session for slug:', slug);

    const session = await stripe.checkout.sessions.create({
      ui_mode: 'embedded',
      line_items: [
        {
          price: process.env.STRIPE_PRICE_ID,
          quantity: 1,
        },
      ],
      mode: 'payment',
      return_url: `${YOUR_DOMAIN}/success/${slug}?session_id={CHECKOUT_SESSION_ID}`,
      metadata: {
        slug,
      },
    });

    res.send({ clientSecret: session.client_secret });
  } catch (error) {
    console.error('Error creating checkout session:', error);
    res.status(500).json({ error: error.message });
  }
});

// Get Session Status
app.get('/session-status', async (req, res) => {
  try {
    const session = await stripe.checkout.sessions.retrieve(req.query.session_id);

    res.send({
      status: session.status,
      customer_email: session.customer_details?.email
    });
  } catch (error) {
    console.error('Error retrieving session:', error);
    res.status(500).json({ error: error.message });
  }
});

// Webhook para confirmar pagamento
app.post('/webhook', express.raw({type: 'application/json'}), async (req, res) => {
  const sig = req.headers['stripe-signature'];
  let event;

  try {
    event = stripe.webhooks.constructEvent(
      req.body,
      sig,
      process.env.STRIPE_WEBHOOK_SECRET
    );
  } catch (error) {
    console.error('Webhook signature verification failed:', error);
    return res.status(400).send(`Webhook Error: ${error.message}`);
  }

  if (event.type === 'checkout.session.completed') {
    const session = event.data.object;
    const { slug } = session.metadata;

    try {
      // Atualizar Supabase para marcar como pago
      const { error } = await supabase
        .from('love_pages')
        .update({ 
          is_paid: true,
          stripe_session_id: session.id 
        })
        .eq('slug', slug);

      if (error) {
        console.error('Error updating Supabase:', error);
      } else {
        console.log('Love page marked as paid:', slug);
      }
    } catch (error) {
      console.error('Error in webhook handler:', error);
    }
  }

  res.json({ received: true });
});

// Health check
app.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
