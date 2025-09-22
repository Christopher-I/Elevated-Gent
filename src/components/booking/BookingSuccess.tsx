'use client'

import { useEffect } from 'react'
import { Button } from '@/components/ui'

interface BookingSuccessProps {
  onClose: () => void
}

export function BookingSuccess({ onClose }: BookingSuccessProps) {
  // Handle escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose()
      }
    }

    document.addEventListener('keydown', handleEscape)
    return () => document.removeEventListener('keydown', handleEscape)
  }, [onClose])

  return (
    <div className="max-w-lg mx-auto bg-white p-8 border border-gray-200 rounded-lg text-center relative">
      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors duration-200 cursor-pointer"
        aria-label="Close modal"
      >
        <svg
          className="w-5 h-5 text-gray-500 hover:text-gray-700"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      <div className="mb-6">
        {/* Success Icon */}
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>

        <h3 className="text-2xl font-semibold font-sans mb-2 text-green-600">
          Booking Request Submitted!
        </h3>
        <p className="text-gray-600 font-serif">
          Thank you for your interest in our styling services.
        </p>
      </div>

      <div className="bg-gray-50 p-6 rounded-lg mb-6 text-left">
        <h4 className="font-semibold font-sans mb-3 text-gray-800">What happens next:</h4>
        <ul className="space-y-2 text-sm font-serif text-gray-600">
          <li className="flex items-start">
            <span className="w-6 h-6 bg-black text-white rounded-full flex items-center justify-center text-xs font-semibold mr-3 mt-0.5 flex-shrink-0">1</span>
            <span>We&apos;ll review your request and contact you within 24 hours</span>
          </li>
          <li className="flex items-start">
            <span className="w-6 h-6 bg-black text-white rounded-full flex items-center justify-center text-xs font-semibold mr-3 mt-0.5 flex-shrink-0">2</span>
            <span>We&apos;ll discuss your goals and confirm the best service for you</span>
          </li>
          <li className="flex items-start">
            <span className="w-6 h-6 bg-black text-white rounded-full flex items-center justify-center text-xs font-semibold mr-3 mt-0.5 flex-shrink-0">3</span>
            <span>We&apos;ll schedule your session at a convenient time</span>
          </li>
          <li className="flex items-start">
            <span className="w-6 h-6 bg-black text-white rounded-full flex items-center justify-center text-xs font-semibold mr-3 mt-0.5 flex-shrink-0">4</span>
            <span>You&apos;ll receive secure payment instructions and session details</span>
          </li>
        </ul>
      </div>

      <div className="bg-blue-50 p-4 rounded-lg mb-6">
        <p className="text-sm font-serif text-blue-800">
          <strong>Pro tip:</strong> Start thinking about your style goals and any specific pieces you&apos;d like to focus on.
          This will help us make the most of your session time.
        </p>
      </div>

      <div className="space-y-3">
        <Button onClick={onClose} className="w-full">
          Continue Browsing
        </Button>

        <p className="text-xs text-gray-500 font-serif">
          Questions? Email us at{' '}
          <a href="mailto:hello@theelevatedgentleman.com" className="text-black hover:underline">
            hello@theelevatedgentleman.com
          </a>
        </p>
      </div>
    </div>
  )
}