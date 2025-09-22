import { NextRequest, NextResponse } from 'next/server'
import { createPaymentIntent } from '@/lib/stripe/server'
import { SERVICE_PRICES, ServiceType } from '@/lib/stripe/client'

export async function POST(request: NextRequest) {
  try {
    const { serviceType, customerEmail } = await request.json()

    // Validate service type
    if (!serviceType || !(serviceType in SERVICE_PRICES)) {
      return NextResponse.json(
        { error: 'Invalid service type' },
        { status: 400 }
      )
    }

    const service = SERVICE_PRICES[serviceType as ServiceType]

    // Create payment intent
    const paymentIntent = await createPaymentIntent(
      service.price,
      serviceType,
      customerEmail
    )

    return NextResponse.json({
      clientSecret: paymentIntent.client_secret,
      amount: service.price,
      serviceName: service.name,
    })
  } catch (error) {
    console.error('Error creating payment intent:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}