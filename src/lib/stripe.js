import 'server-only'

import Stripe from 'stripe'

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)

export const PLAN_PRICE_ID={
  "seeker_pro":"price_1TkhAH8NS2Ng6cW9jM4wrI15",
  "seeker_preminum":"price_1TkhwN8NS2Ng6cW9F2EvdFSe",
  
  "recruiter_growth":"price_1Tki3H8NS2Ng6cW9B3LI3DVG",
  "recruiter_enterprise": "price_1Tki3p8NS2Ng6cW9QTS0201w",
}