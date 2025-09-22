'use client'

import { useState } from 'react'
import { Button } from '@/components/ui'
import { PagePadding, Container } from '@/components/layout'
import { createTestUsers } from '@/lib/firebase/create-test-users'

export default function CreateTestUsersPage() {
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState('')

  const handleCreateUsers = async () => {
    setLoading(true)
    setMessage('')

    try {
      await createTestUsers()
      setMessage('✅ Test users created successfully!')
    } catch (error: any) {
      setMessage(`❌ Error: ${error.message}`)
    } finally {
      setLoading(false)
    }
  }

  return (
    <PagePadding>
      <Container size="small">
        <div className="py-24 text-center">
          <h1 className="text-4xl font-semibold font-sans mb-8">
            Create Test Users
          </h1>

          <div className="space-y-6">
            <p className="font-serif text-muted">
              This will create test user accounts for development and testing purposes.
            </p>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-semibold font-sans mb-4">Test Accounts:</h3>
              <div className="space-y-2 text-sm font-serif">
                <div>John Doe - john.doe@test.com</div>
                <div>Michael Smith - michael.smith@test.com</div>
                <div>David Johnson - david.johnson@test.com</div>
                <div className="text-gray-500 mt-2">Password: password123</div>
              </div>
            </div>

            <Button
              onClick={handleCreateUsers}
              disabled={loading}
              className="px-8"
            >
              {loading ? 'Creating Users...' : 'Create Test Users'}
            </Button>

            {message && (
              <div className="mt-4 p-4 bg-white border rounded-lg">
                <p className="font-serif">{message}</p>
              </div>
            )}
          </div>
        </div>
      </Container>
    </PagePadding>
  )
}