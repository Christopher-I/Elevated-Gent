import { PagePadding, Container } from '@/components/layout'
import { Button } from '@/components/ui'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Account',
  description: 'Manage your account and view your orders',
}

export default function AccountPage() {
  return (
    <>
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
                Manage your profile, view order history, and track your styling journey.
              </p>
            </div>
          </Container>
        </PagePadding>
      </section>

      {/* Account Dashboard */}
      <section className="py-16">
        <PagePadding>
          <Container>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Profile */}
              <div className="border border-black p-8 space-y-6">
                <h3 className="text-2xl font-semibold font-sans">
                  Profile
                </h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-semibold font-sans uppercase mb-2">
                      Name
                    </label>
                    <p className="font-serif">Please sign in to view your profile</p>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold font-sans uppercase mb-2">
                      Email
                    </label>
                    <p className="font-serif">Please sign in to view your profile</p>
                  </div>
                </div>
                <Button variant="outline" className="w-full">
                  Sign In
                </Button>
              </div>

              {/* Orders */}
              <div className="border border-black p-8 space-y-6">
                <h3 className="text-2xl font-semibold font-sans">
                  Recent Orders
                </h3>
                <div className="space-y-4">
                  <p className="font-serif text-muted">
                    Sign in to view your order history and track current orders.
                  </p>
                </div>
                <Button variant="outline" className="w-full">
                  View Orders
                </Button>
              </div>

              {/* Styling Sessions */}
              <div className="border border-black p-8 space-y-6">
                <h3 className="text-2xl font-semibold font-sans">
                  Styling Sessions
                </h3>
                <div className="space-y-4">
                  <p className="font-serif text-muted">
                    View your upcoming appointments and past styling session notes.
                  </p>
                </div>
                <Button className="w-full">
                  Book Session
                </Button>
              </div>
            </div>
          </Container>
        </PagePadding>
      </section>

      {/* Sign In Form */}
      <section className="py-16 bg-background-muted">
        <PagePadding>
          <Container size="small">
            <div className="text-center space-y-8">
              <h2 className="text-4xl font-semibold font-sans">
                Sign In
              </h2>
              <p className="font-serif text-muted">
                Access your account to manage orders, appointments, and preferences.
              </p>

              <div className="bg-white p-8 border border-black">
                <form className="space-y-6">
                  <div>
                    <label className="block text-sm font-semibold font-sans uppercase mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      className="w-full bg-transparent border border-border-light min-h-12 px-4 py-2 font-sans"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold font-sans uppercase mb-2">
                      Password
                    </label>
                    <input
                      type="password"
                      className="w-full bg-transparent border border-border-light min-h-12 px-4 py-2 font-sans"
                      placeholder="Password"
                    />
                  </div>
                  <Button className="w-full">
                    Sign In
                  </Button>
                </form>

                <div className="mt-6 text-center">
                  <p className="font-serif text-muted text-sm">
                    Don&apos;t have an account?{' '}
                    <Button variant="ghost" className="p-0 h-auto text-sm underline">
                      Create one here
                    </Button>
                  </p>
                </div>
              </div>
            </div>
          </Container>
        </PagePadding>
      </section>
    </>
  )
}