import { NextResponse } from 'next/server'
import { stripe } from '@/lib/stripe/server'

export async function GET() {
  try {
    // Test Stripe connection by retrieving account information
    const account = await stripe.accounts.retrieve()

    return NextResponse.json({
      success: true,
      message: 'Stripe API connection successful',
      account: {
        id: account.id,
        country: account.country,
        defaultCurrency: account.default_currency,
        email: account.email,
        type: account.type,
      },
    })
  } catch (error: unknown) {
    console.error('Stripe connection error:', error)

    return NextResponse.json({
      success: false,
      message: 'Stripe API connection failed',
      error: error instanceof Error ? error.message : 'Unknown error',
    }, { status: 500 })
  }
}