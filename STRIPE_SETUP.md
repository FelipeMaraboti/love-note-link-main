# Stripe Integration Setup

## 1. Environment Variables Already Configured ✅

Your `.env` file is already set up with:
- Stripe test keys (test mode)
- Price ID: `price_1StvWlHryTzIUpec7owsccmS`
- API running on port 4242

## 2. Run the Application

Open **two terminals**:

**Terminal 1 - Backend Server:**
```bash
npm run server
```
This starts the Express server on http://localhost:4242

**Terminal 2 - Frontend:**
```bash
npm run dev
```
This starts Vite on http://localhost:8080

## 3. Test Payment Flow

1. Go to http://localhost:8080
2. Create a love page (fill in Steps 1-3)
3. On Step 3, click "Unlock" → Stripe embedded checkout appears
4. Use test card: **4242 4242 4242 4242**
   - Any future expiry date (e.g., 12/34)
   - Any 3-digit CVC (e.g., 123)
   - Any postal code (e.g., 12345)

## 4. API Endpoints

- `POST /create-checkout-session` - Creates Stripe checkout session
- `GET /session-status?session_id=xxx` - Gets payment status
- `GET /health` - Server health check

## 5. How It Works

1. User creates love page → Step 3 shows blurred preview
2. Clicks "Unlock" → Frontend calls `/create-checkout-session`
3. Stripe returns `clientSecret` → Embedded checkout renders
4. User completes payment → Stripe redirects to `/success/{SESSION_ID}`
5. Frontend can call `/session-status` to verify payment

## Next Steps

- [ ] Add webhook handler for payment confirmation
- [ ] Update Supabase to mark page as "paid" after successful payment
- [ ] Add payment validation before displaying love page
- [ ] Switch to production keys when ready to go live
