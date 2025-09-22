'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useAuth } from '@/lib/firebase/auth'
import { Button } from '@/components/ui'
import { PagePadding, Container } from '@/components/layout'

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState('')
  const [error, setError] = useState('')
  const { resetPassword } = useAuth()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setMessage('')
    setLoading(true)

    try {
      await resetPassword(email)
      setMessage('Check your email for password reset instructions')
    } catch (error: any) {
      setError(error.message || 'Failed to send reset email')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex flex-col">
      <PagePadding>
        <Container size="small">
          <div className="flex flex-col items-center justify-center min-h-screen py-12">
            {/* Company Logo */}
            <div className="mb-12">
              <Image
                src="/images/The Elevated gentleman.svg"
                alt="The Elevated Gentleman"
                width={330}
                height={19}
                className="h-8 w-auto"
              />
            </div>

            {/* Forgot Password Form */}
            <div className="w-full max-w-md">
              <div className="bg-white border border-gray-200 rounded-lg p-8 shadow-sm">
                <h1 className="text-3xl font-semibold font-sans text-center mb-2">
                  Reset Password
                </h1>
                <p className="text-gray-600 font-serif text-center mb-8">
                  Enter your email to receive reset instructions
                </p>

                {error && (
                  <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                    <p className="text-red-600 text-sm font-serif">{error}</p>
                  </div>
                )}

                {message && (
                  <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                    <p className="text-green-600 text-sm font-serif">{message}</p>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 font-serif mb-2"
                    >
                      Email Address
                    </label>
                    <input
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent hover:border-gray-400 transition-all duration-200 ease-in-out font-serif"
                      placeholder="your@email.com"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={loading}
                    className="w-full py-3"
                  >
                    {loading ? 'Sending...' : 'Send Reset Email'}
                  </Button>
                </form>

                <div className="mt-8 pt-6 border-t border-gray-200 text-center space-y-4">
                  <Link
                    href="/auth/signin"
                    className="text-sm text-gray-600 hover:text-black font-serif block"
                  >
                    ← Back to Sign In
                  </Link>

                  <p className="text-sm text-gray-600 font-serif">
                    Don&apos;t have an account?{' '}
                    <Link
                      href="/auth/signup"
                      className="text-black hover:underline font-medium"
                    >
                      Create Account
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </PagePadding>
    </div>
  )
}