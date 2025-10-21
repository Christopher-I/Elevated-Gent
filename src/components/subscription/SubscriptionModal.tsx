'use client'

import { useState } from 'react'
import { Button } from '@/components/ui'

interface SubscriptionModalProps {
  onSubscribe: () => void
  onClose: () => void
}

export function SubscriptionModal({ onSubscribe, onClose }: SubscriptionModalProps) {
  const [loading, setLoading] = useState(false)

  const handleSubscribe = async () => {
    setLoading(true)
    try {
      await onSubscribe()
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="fixed inset-0 bg-black/90 z-[9999] flex items-center justify-center p-4 backdrop-blur-sm">
      <div className="bg-white rounded-lg max-w-md w-full p-8 shadow-xl relative">
        {/* Close button */}
        {/* <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors cursor-pointer"
          aria-label="Close"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button> */}

        <div className="text-center space-y-6">
          {/* Icon */}
          <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>

          {/* Title */}
          <h2 className="text-3xl font-semibold font-sans">
            Welcome to The Elevated Gentleman
          </h2>

          {/* Description */}
          <p className="font-serif text-gray-600">
            Subscribe for just $2/month to unlock premium styling services,
            curated collections, and exclusive content.
          </p>

          {/* Price */}
          <div className="bg-gray-50 p-6 rounded-lg">
            <div className="text-4xl font-semibold mb-2">$2</div>
            <div className="text-sm text-gray-600 font-serif">per month</div>
          </div>

          {/* Benefits */}
          <ul className="text-left space-y-3 text-sm font-serif">
            <li className="flex items-start">
              <svg className="w-5 h-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span>Access to all styling services</span>
            </li>
            <li className="flex items-start">
              <svg className="w-5 h-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span>Weekly curated fashion collections</span>
            </li>
            <li className="flex items-start">
              <svg className="w-5 h-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span>Exclusive wellness & grooming tips</span>
            </li>
            <li className="flex items-start">
              <svg className="w-5 h-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span>Priority customer support</span>
            </li>
          </ul>

          {/* Buttons */}
          <div className="space-y-3">
            <Button
              onClick={handleSubscribe}
              disabled={loading}
              className="w-full py-3"
            >
              {loading ? 'Processing...' : 'Subscribe Now'}
            </Button>
          </div>

          <p className="text-xs text-gray-500 font-serif">
            Cancel anytime. No long-term commitment required.
          </p>
        </div>
      </div>
    </div>
  )
}
