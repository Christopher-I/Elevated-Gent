import { NextRequest, NextResponse } from 'next/server'
import Stripe from 'stripe'
import { headers } from 'next/headers'
import { updateOrderStatus, updateUser } from '@/lib/firebase/firestore'
import { Timestamp } from 'firebase/firestore'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2025-08-27.basil',
})

const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET!

export async function POST(request: NextRequest) {
  try {
    const body = await request.text()
    const headersList = await headers()
    const signature = headersList.get('stripe-signature')!

    let event: Stripe.Event

    try {
      event = stripe.webhooks.constructEvent(body, signature, webhookSecret)
    } catch (err) {
      console.error('Webhook signature verification failed:', err)
      return NextResponse.json(
        { error: 'Invalid signature' },
        { status: 400 }
      )
    }

    // Handle the event
    switch (event.type) {
      case 'checkout.session.completed':
        const session = event.data.object as Stripe.Checkout.Session

        // Check if this is a subscription
        if (session.mode === 'subscription' && session.metadata?.userId) {
          const userId = session.metadata.userId
          const subscriptionId = session.subscription as string

          // Update user with active subscription
          await updateUser(userId, {
            subscriptionStatus: 'active',
            stripeCustomerId: session.customer as string,
            stripeSubscriptionId: subscriptionId,
            subscriptionStartDate: Timestamp.now(),
          })

          console.log('Subscription activated for user:', userId)
        }
        // Handle regular order
        else if (session.metadata?.orderId) {
          await updateOrderStatus(session.metadata.orderId, 'processing')
        }

        console.log('Payment succeeded:', session.id)
        break

      case 'customer.subscription.deleted':
        // Handle subscription cancellation
        const cancelledSubscription = event.data.object as Stripe.Subscription
        const customerId = cancelledSubscription.customer as string

        // Find user by customer ID and update status
        // Note: You'll need to implement a way to find user by stripeCustomerId
        console.log('Subscription cancelled for customer:', customerId)
        break

      case 'customer.subscription.updated':
        // Handle subscription updates (e.g., payment failed)
        const updatedSubscription = event.data.object as Stripe.Subscription
        console.log('Subscription updated:', updatedSubscription.id, 'Status:', updatedSubscription.status)
        break

      case 'payment_intent.succeeded':
        const paymentIntent = event.data.object as Stripe.PaymentIntent
        console.log('PaymentIntent succeeded:', paymentIntent.id)
        break

      case 'payment_intent.payment_failed':
        const failedPayment = event.data.object as Stripe.PaymentIntent
        console.log('Payment failed:', failedPayment.id)
        break

      default:
        console.log(`Unhandled event type: ${event.type}`)
    }

    return NextResponse.json({ received: true })
  } catch (error) {
    console.error('Webhook error:', error)
    return NextResponse.json(
      { error: 'Webhook handler failed' },
      { status: 500 }
    )
  }
}