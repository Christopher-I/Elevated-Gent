import { loadStripe } from '@stripe/stripe-js'

// Initialize Stripe
export const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!
)

// Service prices (in cents)
export const SERVICE_PRICES = {
  'personal-styling': {
    name: '1:1 Personal Styling',
    price: 19700, // $197.00
    description: '90-minute virtual or in-person session',
  },
  'wardrobe-audit': {
    name: 'Wardrobe Audit',
    price: 29700, // $297.00
    description: '2-hour wardrobe assessment',
  },
  'complete-transformation': {
    name: 'Complete Style Transformation',
    price: 49700, // $497.00
    description: '3 styling sessions (6 hours total)',
  },
} as const

export type ServiceType = keyof typeof SERVICE_PRICES