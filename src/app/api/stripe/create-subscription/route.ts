import { NextRequest, NextResponse } from 'next/server'
import Stripe from 'stripe'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2024-11-20.acacia',
})

export async function POST(request: NextRequest) {
  try {
    const { userId, userEmail } = await request.json()

    if (!userId || !userEmail) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Create or retrieve Stripe customer
    let customer
    const existingCustomers = await stripe.customers.list({
      email: userEmail,
      limit: 1,
    })

    if (existingCustomers.data.length > 0) {
      customer = existingCustomers.data[0]
    } else {
      customer = await stripe.customers.create({
        email: userEmail,
        metadata: {
          userId: userId,
        },
      })
    }

    // Create checkout session for subscription
    const session = await stripe.checkout.sessions.create({
      customer: customer.id,
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'usd',
            product_data: {
              name: 'Monthly Subscription',
              description: 'Access to all styling services, curated collections, and exclusive content',
            },
            unit_amount: 200, // $2.00 in cents
            recurring: {
              interval: 'month',
            },
          },
          quantity: 1,
        },
      ],
      mode: 'subscription',
      success_url: `${process.env.NEXT_PUBLIC_APP_URL}/account?subscription=success`,
      cancel_url: `${process.env.NEXT_PUBLIC_APP_URL}/account?subscription=cancelled`,
      metadata: {
        userId: userId,
      },
    })

    return NextResponse.json({ sessionId: session.id })
  } catch (error) {
    console.error('Error creating subscription session:', error)
    return NextResponse.json(
      { error: 'Failed to create subscription session' },
      { status: 500 }
    )
  }
}
