'use client'

import { PagePadding, Container } from '@/components/layout'
import { Button, Label } from '@/components/ui'
import { useAuth } from '@/lib/firebase/auth'
import ProtectedRoute from '@/components/auth/ProtectedRoute'
import Image from 'next/image'

export default function ServicesPage() {
  const { user } = useAuth()

  return (
    <ProtectedRoute>
      {/* Hero Section with Background */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/fashion-runway.jpeg"
            alt="Professional styling services"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <PagePadding>
          <Container>
            <div className="relative z-10 text-center space-y-8">
              <div className="overflow-hidden">
                <h1 className="text-6xl font-semibold font-sans leading-tight text-white">
                  Welcome back, {user?.displayName?.split(' ')[0] || 'there'}
                </h1>
              </div>
              <p className="text-xl font-serif text-white/90 max-w-3xl mx-auto leading-relaxed">
                Choose from our professional styling services designed to help you develop a signature look
                that reflects your personality, lifestyle, and professional goals.
              </p>
              <div className="pt-4">
                <Button size="lg" variant="inverse">
                  Book Your Session
                </Button>
              </div>
            </div>
          </Container>
        </PagePadding>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <PagePadding>
          <Container>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* 1:1 Styling */}
              <div className="border border-black p-8 space-y-6">
                <div className="space-y-4">
                  <Label>Most Popular</Label>
                  <h3 className="text-2xl font-semibold font-sans">
                    1:1 Personal Styling
                  </h3>
                  <p className="font-serif text-muted">
                    One-on-one styling session to define your personal style and create
                    versatile outfits from your existing wardrobe.
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="text-3xl font-semibold">$197</div>
                  <ul className="space-y-2 font-serif text-sm">
                    <li>• 90-minute virtual or in-person session</li>
                    <li>• Personal style assessment</li>
                    <li>• Outfit creation from existing pieces</li>
                    <li>• Style guide document</li>
                  </ul>
                </div>

                <Button className="w-full">
                  Book Session
                </Button>
              </div>

              {/* Wardrobe Audit */}
              <div className="border border-black p-8 space-y-6">
                <div className="space-y-4">
                  <h3 className="text-2xl font-semibold font-sans">
                    Wardrobe Audit
                  </h3>
                  <p className="font-serif text-muted">
                    Comprehensive review of your current wardrobe with recommendations
                    for optimization and strategic additions.
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="text-3xl font-semibold">$297</div>
                  <ul className="space-y-2 font-serif text-sm">
                    <li>• 2-hour wardrobe assessment</li>
                    <li>• Closet organization strategy</li>
                    <li>• Keep/donate/alter recommendations</li>
                    <li>• Shopping list for key pieces</li>
                  </ul>
                </div>

                <Button variant="outline" className="w-full">
                  Learn More
                </Button>
              </div>

              {/* Complete Transformation */}
              <div className="border border-black p-8 space-y-6 bg-background-muted">
                <div className="space-y-4">
                  <Label variant="inverse">Premium</Label>
                  <h3 className="text-2xl font-semibold font-sans">
                    Complete Style Transformation
                  </h3>
                  <p className="font-serif text-muted">
                    Our most comprehensive package combining wardrobe audit,
                    personal shopping, and ongoing styling support.
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl font-semibold">$497</span>
                    <span className="text-lg text-muted line-through">$593</span>
                  </div>
                  <ul className="space-y-2 font-serif text-sm">
                    <li>• 3 styling sessions (6 hours total)</li>
                    <li>• Complete wardrobe audit</li>
                    <li>• Personal shopping session</li>
                    <li>• 30-day follow-up support</li>
                  </ul>
                </div>

                <Button className="w-full">
                  Book Package
                </Button>
              </div>
            </div>
          </Container>
        </PagePadding>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-background-muted">
        <PagePadding>
          <Container>
            <div className="text-center space-y-12">
              <h2 className="text-4xl font-semibold font-sans">
                How It Works
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center text-2xl font-semibold mx-auto">
                    1
                  </div>
                  <h3 className="text-xl font-semibold font-sans">
                    Consultation
                  </h3>
                  <p className="font-serif text-muted">
                    We start with understanding your lifestyle, preferences, and goals.
                  </p>
                </div>

                <div className="text-center space-y-4">
                  <div className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center text-2xl font-semibold mx-auto">
                    2
                  </div>
                  <h3 className="text-xl font-semibold font-sans">
                    Assessment
                  </h3>
                  <p className="font-serif text-muted">
                    Review your current wardrobe and identify opportunities for improvement.
                  </p>
                </div>

                <div className="text-center space-y-4">
                  <div className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center text-2xl font-semibold mx-auto">
                    3
                  </div>
                  <h3 className="text-xl font-semibold font-sans">
                    Transformation
                  </h3>
                  <p className="font-serif text-muted">
                    Implement the styling strategy with new outfits and recommendations.
                  </p>
                </div>
              </div>
            </div>
          </Container>
        </PagePadding>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <PagePadding>
          <Container size="medium">
            <div className="text-center space-y-12">
              <h2 className="text-4xl font-semibold font-sans">
                Frequently Asked Questions
              </h2>

              <div className="text-left space-y-8">
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold font-sans">
                    Do you offer virtual styling sessions?
                  </h3>
                  <p className="font-serif text-muted">
                    Yes, all our services are available both virtually and in-person.
                    Virtual sessions are conducted via video call and are just as effective
                    for most styling needs.
                  </p>
                </div>

                <div className="divider" />

                <div className="space-y-4">
                  <h3 className="text-xl font-semibold font-sans">
                    What should I prepare for my styling session?
                  </h3>
                  <p className="font-serif text-muted">
                    We&apos;ll send you a detailed preparation guide after booking.
                    Generally, having your wardrobe accessible and thinking about
                    your style goals beforehand helps maximize our time together.
                  </p>
                </div>

                <div className="divider" />

                <div className="space-y-4">
                  <h3 className="text-xl font-semibold font-sans">
                    Do you help with shopping for new pieces?
                  </h3>
                  <p className="font-serif text-muted">
                    Absolutely. Our Wardrobe Audit and Complete Transformation packages
                    include shopping recommendations, and we can also accompany you
                    for personal shopping sessions.
                  </p>
                </div>
              </div>
            </div>
          </Container>
        </PagePadding>
      </section>
    </ProtectedRoute>
  )
}