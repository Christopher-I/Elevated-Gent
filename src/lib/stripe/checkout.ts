import { stripePromise } from './config'

export interface CheckoutItem {
  name: string
  description?: string
  price: number
  quantity: number
  images?: string[]
}

export async function redirectToCheckout(
  items: CheckoutItem[],
  successUrl?: string,
  cancelUrl?: string,
  metadata?: Record<string, string>
) {
  try {
    const response = await fetch('/api/stripe/checkout', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        items,
        successUrl,
        cancelUrl,
        metadata,
      }),
    })

    const data = await response.json()

    if (!response.ok) {
      throw new Error(data.error || 'Failed to create checkout session')
    }

    const stripe = await stripePromise
    if (!stripe) {
      throw new Error('Stripe failed to load')
    }

    // Redirect to Stripe Checkout
    const { error } = await stripe.redirectToCheckout({
      sessionId: data.sessionId,
    })

    if (error) {
      throw error
    }
  } catch (error) {
    console.error('Checkout error:', error)
    throw error
  }
}

export function formatPrice(amount: number): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(amount)
}