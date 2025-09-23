'use client'

import { useState, useEffect } from 'react'
import { useAuth } from '@/lib/firebase/auth'
import { Button, Label } from '@/components/ui'
import { updateProfile, updatePassword } from 'firebase/auth'

interface ProfileEditModalProps {
  isOpen: boolean
  onClose: () => void
}

export function ProfileEditModal({ isOpen, onClose }: ProfileEditModalProps) {
  const { user } = useAuth()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')

  // Profile form state
  const [displayName, setDisplayName] = useState('')
  const [currentPassword, setCurrentPassword] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  // Style preferences
  const [stylePreferences, setStylePreferences] = useState({
    casualStyle: '',
    workStyle: '',
    formalStyle: '',
    colorPreferences: '',
    budgetRange: '',
    notifications: true,
    newsletter: true
  })

  useEffect(() => {
    if (user && isOpen) {
      setDisplayName(user.displayName || '')
      // In a real app, you'd load style preferences from Firestore
    }
  }, [user, isOpen])

  const handleSaveProfile = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!user) return

    setLoading(true)
    setError('')
    setSuccess('')

    try {
      // Update display name
      if (displayName !== user.displayName) {
        await updateProfile(user, {
          displayName: displayName.trim()
        })
      }

      // Update password if provided
      if (newPassword) {
        if (newPassword !== confirmPassword) {
          throw new Error('Passwords do not match')
        }
        if (newPassword.length < 6) {
          throw new Error('Password must be at least 6 characters')
        }
        await updatePassword(user, newPassword)
        setCurrentPassword('')
        setNewPassword('')
        setConfirmPassword('')
      }

      // In a real app, save style preferences to Firestore here
      // await updateUserPreferences(user.uid, stylePreferences)

      setSuccess('Profile updated successfully!')
      setTimeout(() => {
        setSuccess('')
        onClose()
      }, 2000)
    } catch (error) {
      setError(error instanceof Error ? error.message : 'Failed to update profile')
    } finally {
      setLoading(false)
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      onClose()
    }
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-[9999]" onKeyDown={handleKeyDown}>
      <div className="bg-white rounded-lg p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors duration-200"
          aria-label="Close modal"
        >
          <svg className="w-5 h-5 text-gray-500 hover:text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="mb-6">
          <h2 className="text-2xl font-semibold font-sans mb-2">Edit Profile</h2>
          <p className="text-gray-600 font-serif">Update your account information and style preferences</p>
        </div>

        {error && (
          <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
            <p className="text-red-600 text-sm font-serif">{error}</p>
          </div>
        )}

        {success && (
          <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
            <p className="text-green-600 text-sm font-serif">{success}</p>
          </div>
        )}

        <form onSubmit={handleSaveProfile} className="space-y-8">
          {/* Basic Information */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold font-sans border-b border-gray-200 pb-2">
              Basic Information
            </h3>

            <div>
              <label htmlFor="displayName" className="block text-sm font-medium text-gray-700 font-serif mb-2">
                Display Name
              </label>
              <input
                id="displayName"
                type="text"
                value={displayName}
                onChange={(e) => setDisplayName(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent hover:border-gray-400 transition-all duration-200 ease-in-out font-serif"
                placeholder="Your full name"
              />
            </div>

            <div>
              <Label className="block text-sm font-medium text-gray-700 font-serif mb-2">
                Email Address
              </Label>
              <input
                type="email"
                value={user?.email || ''}
                disabled
                className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-50 text-gray-500 font-serif"
              />
              <p className="text-xs text-gray-500 font-serif mt-1">Email cannot be changed</p>
            </div>
          </div>

          {/* Password Update */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold font-sans border-b border-gray-200 pb-2">
              Change Password
            </h3>

            <div>
              <label htmlFor="newPassword" className="block text-sm font-medium text-gray-700 font-serif mb-2">
                New Password (optional)
              </label>
              <input
                id="newPassword"
                type="password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent hover:border-gray-400 transition-all duration-200 ease-in-out font-serif"
                placeholder="Leave blank to keep current password"
              />
            </div>

            {newPassword && (
              <div>
                <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 font-serif mb-2">
                  Confirm New Password
                </label>
                <input
                  id="confirmPassword"
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent hover:border-gray-400 transition-all duration-200 ease-in-out font-serif"
                  placeholder="Confirm your new password"
                />
              </div>
            )}
          </div>

          {/* Style Preferences */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold font-sans border-b border-gray-200 pb-2">
              Style Preferences
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="casualStyle" className="block text-sm font-medium text-gray-700 font-serif mb-2">
                  Casual Style
                </label>
                <select
                  id="casualStyle"
                  value={stylePreferences.casualStyle}
                  onChange={(e) => setStylePreferences({...stylePreferences, casualStyle: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent hover:border-gray-400 transition-all duration-200 ease-in-out font-serif"
                >
                  <option value="">Select preference</option>
                  <option value="minimalist">Minimalist</option>
                  <option value="streetwear">Streetwear</option>
                  <option value="classic">Classic</option>
                  <option value="bohemian">Bohemian</option>
                  <option value="athletic">Athletic</option>
                </select>
              </div>

              <div>
                <label htmlFor="workStyle" className="block text-sm font-medium text-gray-700 font-serif mb-2">
                  Work Style
                </label>
                <select
                  id="workStyle"
                  value={stylePreferences.workStyle}
                  onChange={(e) => setStylePreferences({...stylePreferences, workStyle: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent hover:border-gray-400 transition-all duration-200 ease-in-out font-serif"
                >
                  <option value="">Select preference</option>
                  <option value="business-formal">Business Formal</option>
                  <option value="business-casual">Business Casual</option>
                  <option value="smart-casual">Smart Casual</option>
                  <option value="creative">Creative</option>
                  <option value="remote">Remote/Casual</option>
                </select>
              </div>

              <div>
                <label htmlFor="colorPreferences" className="block text-sm font-medium text-gray-700 font-serif mb-2">
                  Color Preferences
                </label>
                <input
                  id="colorPreferences"
                  type="text"
                  value={stylePreferences.colorPreferences}
                  onChange={(e) => setStylePreferences({...stylePreferences, colorPreferences: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent hover:border-gray-400 transition-all duration-200 ease-in-out font-serif"
                  placeholder="e.g. earth tones, bold colors, monochrome"
                />
              </div>

              <div>
                <label htmlFor="budgetRange" className="block text-sm font-medium text-gray-700 font-serif mb-2">
                  Budget Range
                </label>
                <select
                  id="budgetRange"
                  value={stylePreferences.budgetRange}
                  onChange={(e) => setStylePreferences({...stylePreferences, budgetRange: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent hover:border-gray-400 transition-all duration-200 ease-in-out font-serif"
                >
                  <option value="">Select range</option>
                  <option value="budget">Budget ($50-150)</option>
                  <option value="mid-range">Mid-range ($150-400)</option>
                  <option value="premium">Premium ($400-800)</option>
                  <option value="luxury">Luxury ($800+)</option>
                </select>
              </div>
            </div>
          </div>

          {/* Notifications */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold font-sans border-b border-gray-200 pb-2">
              Preferences
            </h3>

            <div className="space-y-4">
              <div className="flex items-center">
                <input
                  id="notifications"
                  type="checkbox"
                  checked={stylePreferences.notifications}
                  onChange={(e) => setStylePreferences({...stylePreferences, notifications: e.target.checked})}
                  className="h-4 w-4 text-black focus:ring-black border-gray-300 rounded"
                />
                <label htmlFor="notifications" className="ml-3 text-sm text-gray-700 font-serif">
                  Receive styling session reminders and updates
                </label>
              </div>

              <div className="flex items-center">
                <input
                  id="newsletter"
                  type="checkbox"
                  checked={stylePreferences.newsletter}
                  onChange={(e) => setStylePreferences({...stylePreferences, newsletter: e.target.checked})}
                  className="h-4 w-4 text-black focus:ring-black border-gray-300 rounded"
                />
                <label htmlFor="newsletter" className="ml-3 text-sm text-gray-700 font-serif">
                  Subscribe to weekly style tips and product recommendations
                </label>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4 pt-6 border-t border-gray-200">
            <Button
              type="button"
              variant="outline"
              onClick={onClose}
              disabled={loading}
              className="flex-1"
            >
              Cancel
            </Button>
            <Button
              type="submit"
              disabled={loading}
              className="flex-1"
            >
              {loading ? 'Saving...' : 'Save Changes'}
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}