'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui'
import { useAuth } from '@/lib/firebase/auth'

interface BookingFormProps {
  selectedService?: string
  onSuccess: () => void
  onCancel: () => void
}

const services = [
  { id: 'personal-styling', name: '1:1 Personal Styling', price: '$197' },
  { id: 'wardrobe-audit', name: 'Wardrobe Audit', price: '$297' },
  { id: 'complete-transformation', name: 'Complete Style Transformation', price: '$497' },
]

const timePreferences = [
  'Morning (9AM - 12PM)',
  'Afternoon (12PM - 5PM)',
  'Evening (5PM - 8PM)',
  'Flexible - Any time works',
]

const experienceLevel = [
  'New to professional styling',
  'Some experience with styling',
  'Experienced, looking to refine',
]

export function BookingForm({ selectedService, onSuccess, onCancel }: BookingFormProps) {
  const { user } = useAuth()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    service: selectedService || '',
    name: user?.displayName || '',
    email: user?.email || '',
    phone: '',
    timePreference: '',
    experienceLevel: '',
    goals: '',
    additionalInfo: '',
  })

  // Handle escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onCancel()
      }
    }

    document.addEventListener('keydown', handleEscape)
    return () => document.removeEventListener('keydown', handleEscape)
  }, [onCancel])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch('/api/bookings', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        throw new Error('Failed to submit booking')
      }

      const result = await response.json()
      console.log('Booking submitted successfully:', result)

      onSuccess()
    } catch (error) {
      console.error('Booking submission error:', error)
      alert('There was an error submitting your booking. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const selectedServiceDetails = services.find(s => s.id === formData.service)

  return (
    <div className="max-w-lg mx-auto bg-white p-8 border border-gray-200 rounded-lg relative">
      {/* Close Button */}
      <button
        onClick={onCancel}
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
        <h3 className="text-2xl font-semibold font-sans mb-2">Book Your Session</h3>
        <p className="text-gray-600 font-serif text-sm">
          Fill out the form below and we'll contact you within 24 hours to confirm your appointment.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Service Selection */}
        <div>
          <label className="block text-sm font-medium text-gray-700 font-serif mb-2">
            Service *
          </label>
          <select
            value={formData.service}
            onChange={(e) => handleChange('service', e.target.value)}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent font-serif"
          >
            <option value="">Select a service</option>
            {services.map((service) => (
              <option key={service.id} value={service.id}>
                {service.name} - {service.price}
              </option>
            ))}
          </select>
        </div>

        {/* Contact Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 font-serif mb-2">
              Full Name *
            </label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => handleChange('name', e.target.value)}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent font-serif"
              placeholder="Your name"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 font-serif mb-2">
              Phone Number *
            </label>
            <input
              type="tel"
              value={formData.phone}
              onChange={(e) => handleChange('phone', e.target.value)}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent font-serif"
              placeholder="(555) 123-4567"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 font-serif mb-2">
            Email Address *
          </label>
          <input
            type="email"
            value={formData.email}
            onChange={(e) => handleChange('email', e.target.value)}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent font-serif"
            placeholder="your@email.com"
          />
        </div>

        {/* Scheduling Preferences */}
        <div>
          <label className="block text-sm font-medium text-gray-700 font-serif mb-2">
            Preferred Time *
          </label>
          <select
            value={formData.timePreference}
            onChange={(e) => handleChange('timePreference', e.target.value)}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent font-serif"
          >
            <option value="">Select preferred time</option>
            {timePreferences.map((time) => (
              <option key={time} value={time}>
                {time}
              </option>
            ))}
          </select>
        </div>

        {/* Experience Level */}
        <div>
          <label className="block text-sm font-medium text-gray-700 font-serif mb-2">
            Experience with Styling
          </label>
          <select
            value={formData.experienceLevel}
            onChange={(e) => handleChange('experienceLevel', e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent font-serif"
          >
            <option value="">Select your experience level</option>
            {experienceLevel.map((level) => (
              <option key={level} value={level}>
                {level}
              </option>
            ))}
          </select>
        </div>

        {/* Goals */}
        <div>
          <label className="block text-sm font-medium text-gray-700 font-serif mb-2">
            What are your main styling goals?
          </label>
          <textarea
            value={formData.goals}
            onChange={(e) => handleChange('goals', e.target.value)}
            rows={3}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent font-serif"
            placeholder="e.g., Professional wardrobe, date night looks, confident everyday style..."
          />
        </div>

        {/* Additional Information */}
        <div>
          <label className="block text-sm font-medium text-gray-700 font-serif mb-2">
            Anything else we should know?
          </label>
          <textarea
            value={formData.additionalInfo}
            onChange={(e) => handleChange('additionalInfo', e.target.value)}
            rows={2}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent font-serif"
            placeholder="Budget range, special occasions, style preferences, etc."
          />
        </div>

        {/* Service Summary */}
        {selectedServiceDetails && (
          <div className="bg-gray-50 p-4 rounded-lg border">
            <h4 className="font-semibold font-sans text-sm mb-1">Selected Service</h4>
            <p className="text-sm font-serif text-gray-600">
              {selectedServiceDetails.name} - {selectedServiceDetails.price}
            </p>
            <p className="text-xs text-gray-500 mt-1">
              Payment details will be sent via email after confirmation
            </p>
          </div>
        )}

        {/* Buttons */}
        <div className="flex gap-4 pt-4">
          <Button
            type="button"
            variant="outline"
            onClick={onCancel}
            disabled={isSubmitting}
            className="flex-1"
          >
            Cancel
          </Button>
          <Button
            type="submit"
            disabled={isSubmitting || !formData.service || !formData.name || !formData.email || !formData.phone || !formData.timePreference}
            className="flex-1"
          >
            {isSubmitting ? 'Submitting...' : 'Book Session'}
          </Button>
        </div>
      </form>

      <div className="mt-6 text-center">
        <p className="text-xs text-gray-500 font-serif">
          We'll contact you within 24 hours to confirm your appointment and provide payment instructions.
        </p>
      </div>
    </div>
  )
}