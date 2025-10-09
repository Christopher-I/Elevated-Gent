'use client'

import { useEffect, useState } from 'react'
import { useAuth } from '@/lib/firebase/auth'
import { usePathname } from 'next/navigation'
import { SubscriptionModal } from './SubscriptionModal'
import { getUser } from '@/lib/firebase/firestore'

interface SubscriptionGateProps {
  children: React.ReactNode
}

// Time constants (in milliseconds)
const INITIAL_DELAY = 3000 // Show modal after 3 seconds on first visit
const RESHOW_DELAY = 60000 // Reshow modal after 60 seconds of closing

export function SubscriptionGate({ children }: SubscriptionGateProps) {
  const { user, loading } = useAuth()
  const pathname = usePathname()
  const [subscriptionStatus, setSubscriptionStatus] = useState<string | undefined>()
  const [checkingSubscription, setCheckingSubscription] = useState(true)
  const [showModal, setShowModal] = useState(false)
  const [dismissCount, setDismissCount] = useState(0)

  // Pages that don't require subscription
  const publicPaths = ['/auth/signin', '/auth/signup', '/auth/forgot-password']
  const isPublicPage = publicPaths.some(path => pathname?.startsWith(path))

  useEffect(() => {
    const checkSubscription = async () => {
      if (user && !isPublicPage) {
        try {
          const userData = await getUser(user.uid)
          setSubscriptionStatus(userData?.subscriptionStatus)

          // If user doesn't have active subscription, show modal after initial delay
          if (userData?.subscriptionStatus !== 'active') {
            setTimeout(() => {
              setShowModal(true)
            }, INITIAL_DELAY)
          }
        } catch (error) {
          console.error('Error checking subscription:', error)
        }
      }
      setCheckingSubscription(false)
    }

    if (!loading) {
      checkSubscription()
    }
  }, [user, loading, isPublicPage])

  // Re-show modal after user closes it (WSJ style)
  useEffect(() => {
    if (dismissCount > 0 && subscriptionStatus !== 'active' && !isPublicPage) {
      const timer = setTimeout(() => {
        setShowModal(true)
      }, RESHOW_DELAY)

      return () => clearTimeout(timer)
    }
  }, [dismissCount, subscriptionStatus, isPublicPage])

  const handleSubscribe = async () => {
    try {
      if (!user) return

      // Create checkout session
      const response = await fetch('/api/stripe/create-subscription', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          userId: user.uid,
          userEmail: user.email,
        }),
      })

      const { sessionId } = await response.json()

      // Redirect to Stripe Checkout
      const stripe = await import('@stripe/stripe-js').then(mod =>
        mod.loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!)
      )

      if (stripe) {
        await stripe.redirectToCheckout({ sessionId })
      }
    } catch (error) {
      console.error('Error creating subscription:', error)
      alert('Failed to start subscription. Please try again.')
    }
  }

  const handleClose = () => {
    // Close modal and schedule it to reappear
    setShowModal(false)
    setDismissCount(prev => prev + 1)
  }

  // Show loading while checking auth and subscription
  if (loading || checkingSubscription) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-black mx-auto mb-4"></div>
          <p className="text-gray-600 font-serif">Loading...</p>
        </div>
      </div>
    )
  }

  // Don't show gate on public pages or if user is not logged in
  if (isPublicPage || !user) {
    return <>{children}</>
  }

  // Show subscription gate if user doesn't have active subscription
  const needsSubscription = subscriptionStatus !== 'active'

  return (
    <>
      {children}
      {needsSubscription && showModal && (
        <SubscriptionModal onSubscribe={handleSubscribe} onClose={handleClose} />
      )}
    </>
  )
}
