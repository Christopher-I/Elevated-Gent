import { PagePadding, Container } from '@/components/layout'
import { Button } from '@/components/ui'
import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="section-home-hero">
        <PagePadding>
          <Container>
            <div className="pt-8 pb-0">
              <div className="mb-8">
                <div className="overflow-hidden flex justify-center">
                  <Image
                    src="/images/SERVICES & SHOP.svg"
                    alt="Services & Shop"
                    width={434}
                    height={38}
                    className="h-16"
                  />
                </div>
              </div>
              <div className="newsticker">
                <div className="hidden md:block">
                  <div className="text-lg font-sans uppercase">Coming Soon</div>
                </div>
                <div className="block md:hidden"></div>
                <div className="newsticker-wrapper">
                  <div className="newsticker-text font-serif whitespace-nowrap">
                    Professional styling services, curated products, and personalized guidance for the modern gentleman.
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </PagePadding>
      </section>

      {/* Services Preview */}
      <section className="py-24">
        <PagePadding>
          <Container>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="space-y-6">
                <h2 className="text-4xl font-semibold font-sans">
                  Professional Styling Services
                </h2>
                <p className="text-lg font-serif leading-relaxed">
                  From personal consultations to complete wardrobe transformations,
                  our styling services help you develop a signature look that reflects
                  your personality and lifestyle.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-2 h-2 bg-black rounded-full"></div>
                    <span className="font-serif">1:1 Personal Styling Sessions</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-2 h-2 bg-black rounded-full"></div>
                    <span className="font-serif">Wardrobe Audits & Organization</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-2 h-2 bg-black rounded-full"></div>
                    <span className="font-serif">Shopping & Styling Packages</span>
                  </div>
                </div>
                <Link href="/services">
                  <Button className="mt-6">
                    Explore Services
                  </Button>
                </Link>
              </div>

              <div className="bg-background-muted p-8 rounded-lg">
                <h3 className="text-2xl font-semibold font-sans mb-4">
                  Featured Service
                </h3>
                <div className="space-y-4">
                  <h4 className="text-xl font-serif">Complete Style Transformation</h4>
                  <p className="text-muted font-serif">
                    A comprehensive 3-session package including wardrobe audit,
                    personal shopping, and styling guidance.
                  </p>
                  <div className="text-2xl font-semibold">$497</div>
                  <Button variant="outline" size="sm">
                    Learn More
                  </Button>
                </div>
              </div>
            </div>
          </Container>
        </PagePadding>
      </section>

      {/* Products Preview */}
      <section className="py-24 bg-background-muted">
        <PagePadding>
          <Container>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="bg-white p-8 rounded-lg">
                <h3 className="text-2xl font-semibold font-sans mb-4">
                  Curated Products
                </h3>
                <div className="space-y-4">
                  <h4 className="text-xl font-serif">Essential Wardrobe Pieces</h4>
                  <p className="text-muted font-serif">
                    Carefully selected items that form the foundation of a
                    well-dressed man&apos;s wardrobe.
                  </p>
                  <Button variant="outline" size="sm">
                    Shop Collection
                  </Button>
                </div>
              </div>

              <div className="space-y-6">
                <h2 className="text-4xl font-semibold font-sans">
                  Shop The Look
                </h2>
                <p className="text-lg font-serif leading-relaxed">
                  Discover our curated collection of timeless pieces and modern
                  essentials. Each item is selected for quality, style, and versatility.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-2 h-2 bg-black rounded-full"></div>
                    <span className="font-serif">Premium Quality Essentials</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-2 h-2 bg-black rounded-full"></div>
                    <span className="font-serif">Curated Accessories</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-2 h-2 bg-black rounded-full"></div>
                    <span className="font-serif">Grooming & Lifestyle</span>
                  </div>
                </div>
                <Link href="/products">
                  <Button className="mt-6">
                    Browse Products
                  </Button>
                </Link>
              </div>
            </div>
          </Container>
        </PagePadding>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <PagePadding>
          <Container size="medium">
            <div className="text-center space-y-8">
              <h2 className="text-5xl font-semibold font-sans leading-tight">
                Ready to Elevate Your Style?
              </h2>
              <p className="text-xl font-serif leading-relaxed text-muted max-w-2xl mx-auto">
                Whether you&apos;re looking for professional styling services or
                want to shop our curated collection, we&apos;re here to help you
                look and feel your best.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/services">
                  <Button size="lg">
                    Book a Consultation
                  </Button>
                </Link>
                <Link href="/products">
                  <Button variant="outline" size="lg">
                    Shop Now
                  </Button>
                </Link>
              </div>
            </div>
          </Container>
        </PagePadding>
      </section>
    </>
  )
}