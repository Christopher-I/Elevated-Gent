'use client'

import { PagePadding, Container } from '@/components/layout'
import { Button } from '@/components/ui'
import { useAuth } from '@/lib/firebase/auth'
import ProtectedRoute from '@/components/auth/ProtectedRoute'
import { useRouter } from 'next/navigation'

export default function AccountPage() {
  const { user } = useAuth()
  const router = useRouter()

  const handleBookSession = () => {
    router.push('/services')
  }

  const handleViewCollections = () => {
    router.push('/collections')
  }

  const handleLearnMore = () => {
    router.push('/services')
  }

  const handleEditProfile = () => {
    // For now, just show an alert - you can implement a profile edit modal later
    alert('Profile editing feature coming soon!')
  }

  const handleWeeklyFinds = () => {
    router.push('/weekly')
  }

  return (
    <ProtectedRoute>
      {/* Hero Section */}
      <section className="py-16">
        <PagePadding>
          <Container>
            <div className="text-center space-y-8">
              <div className="overflow-hidden">
                <h1 className="text-6xl font-semibold font-sans leading-tight">
                  Your Account
                </h1>
              </div>
              <p className="text-xl font-serif text-muted max-w-2xl mx-auto">
                Manage your profile, styling sessions, and curated collections.
              </p>
            </div>
          </Container>
        </PagePadding>
      </section>

      {/* Account Dashboard */}
      <section className="py-16">
        <PagePadding>
          <Container>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Profile */}
              <div className="border border-black p-8 space-y-6">
                <h3 className="text-2xl font-semibold font-sans">
                  Profile Information
                </h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-semibold font-sans uppercase mb-2">
                      Name
                    </label>
                    <p className="font-serif text-lg">{user?.displayName || 'Not provided'}</p>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold font-sans uppercase mb-2">
                      Email
                    </label>
                    <p className="font-serif text-lg">{user?.email}</p>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold font-sans uppercase mb-2">
                      Member Since
                    </label>
                    <p className="font-serif text-lg">
                      {user?.metadata?.creationTime ?
                        new Date(user.metadata.creationTime).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric'
                        }) :
                        'Recently joined'
                      }
                    </p>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold font-sans uppercase mb-2">
                      Style Preferences
                    </label>
                    <p className="font-serif">Set up your style profile and preferences</p>
                  </div>
                </div>
                <Button variant="outline" className="w-full" onClick={handleEditProfile}>
                  Edit Profile
                </Button>
              </div>

              {/* Styling Sessions */}
              <div className="border border-black p-8 space-y-6">
                <h3 className="text-2xl font-semibold font-sans">
                  Styling Services
                </h3>
                <div className="space-y-4">
                  <p className="font-serif text-muted">
                    Book and manage your styling appointments and view session history.
                  </p>
                  <div className="space-y-3">
                    <div className="p-4 bg-gray-50 border border-gray-200 rounded">
                      <div className="text-sm font-semibold font-sans uppercase mb-1">
                        Available Services
                      </div>
                      <div className="text-sm font-serif space-y-1">
                        <div>• Virtual styling consultations</div>
                        <div>• Curated collections based on your style</div>
                        <div>• Personal shopping recommendations</div>
                      </div>
                    </div>
                  </div>
                </div>
                <Button className="w-full" onClick={handleBookSession}>
                  Book Your First Session
                </Button>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center p-6 border border-gray-200 rounded-lg">
                <h4 className="text-lg font-semibold font-sans mb-2">Browse Collections</h4>
                <p className="text-sm font-serif text-muted mb-4">
                  Explore our curated affiliate collections
                </p>
                <Button variant="outline" size="sm" onClick={handleViewCollections}>
                  View Collections
                </Button>
              </div>
              <div className="text-center p-6 border border-gray-200 rounded-lg">
                <h4 className="text-lg font-semibold font-sans mb-2">Weekly Finds</h4>
                <p className="text-sm font-serif text-muted mb-4">
                  Discover this week&apos;s best fashion picks
                </p>
                <Button size="sm" onClick={handleWeeklyFinds}>
                  Browse Finds
                </Button>
              </div>
              <div className="text-center p-6 border border-gray-200 rounded-lg">
                <h4 className="text-lg font-semibold font-sans mb-2">Style Consultation</h4>
                <p className="text-sm font-serif text-muted mb-4">
                  Book a 1:1 styling session
                </p>
                <Button size="sm" onClick={handleBookSession}>
                  Book Now
                </Button>
              </div>
              <div className="text-center p-6 border border-gray-200 rounded-lg">
                <h4 className="text-lg font-semibold font-sans mb-2">Wardrobe Audit</h4>
                <p className="text-sm font-serif text-muted mb-4">
                  Optimize your existing wardrobe
                </p>
                <Button variant="outline" size="sm" onClick={handleLearnMore}>
                  Learn More
                </Button>
              </div>
            </div>
          </Container>
        </PagePadding>
      </section>
    </ProtectedRoute>
  )
}