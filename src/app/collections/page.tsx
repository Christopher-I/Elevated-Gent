'use client'

import { useState } from 'react'
import { PagePadding, Container } from '@/components/layout'
import { Button, Label } from '@/components/ui'
import Image from 'next/image'

// Define collection data with tags
const collections = [
  {
    id: 1,
    title: "Smart Casual Denim",
    description: "Elevated denim styling with tailored jacket, white shirt, and premium accessories.",
    image: "/images/Image 3.jpeg",
    price: "From $89",
    label: "Shop The Look",
    tags: ["casual", "essentials", "denim"]
  },
  {
    id: 2,
    title: "Leather Jacket Style",
    description: "Premium leather pieces and accessories for sophisticated edge and modern appeal.",
    image: "/images/Image 5 (1).jpeg",
    price: "From $299",
    label: "Premium",
    tags: ["formal", "accessories", "leather"]
  },
  {
    id: 3,
    title: "Formal Evening Look",
    description: "Sophisticated evening pieces perfect for special occasions and business events.",
    image: "/images/Image 12 (1).jpeg",
    price: "From $399",
    label: "Complete Look",
    tags: ["formal", "evening", "business"]
  },
  {
    id: 4,
    title: "Runway Essentials",
    description: "High-fashion pieces inspired by runway trends and elevated street style.",
    image: "/images/fashion-runway.jpeg",
    price: "From $149",
    label: "Featured",
    tags: ["runway", "essentials", "trending"]
  },
  {
    id: 5,
    title: "Casual Weekend",
    description: "Effortless weekend styling with comfortable pieces that maintain sophistication.",
    image: "/images/Image 1 (1).jpeg",
    price: "From $65",
    label: "Relaxed",
    tags: ["casual", "weekend", "comfort"]
  },
  {
    id: 6,
    title: "Summer Lifestyle",
    description: "Fresh summer looks with plaid patterns, denim, and relaxed coastal vibes.",
    image: "/images/Image 8 (1).jpeg",
    price: "From $75",
    label: "Seasonal",
    tags: ["casual", "summer", "lifestyle"]
  }
]

const filterOptions = [
  { id: 'all', label: 'All' },
  { id: 'casual', label: 'Casual Style' },
  { id: 'formal', label: 'Formal Wear' },
  { id: 'essentials', label: 'Essentials' },
  { id: 'accessories', label: 'Accessories' },
  { id: 'seasonal', label: 'Seasonal' }
]

export default function CollectionsPage() {
  const [activeFilter, setActiveFilter] = useState('all')

  const filteredCollections = activeFilter === 'all'
    ? collections
    : collections.filter(collection => collection.tags.includes(activeFilter))

  return (
    <>
      {/* Hero Section */}
      <section className="py-16">
        <PagePadding>
          <Container>
            <div className="text-center space-y-8">
              <div className="overflow-hidden">
                <h1 className="text-6xl font-semibold font-sans leading-tight">
                  CURATED COLLECTIONS
                </h1>
              </div>
              <p className="text-xl font-serif text-muted max-w-3xl mx-auto leading-relaxed">
                Shop curated collections from our trusted partners. Each piece is carefully selected
                for quality, style, and versatility to help you elevate your wardrobe.
              </p>
            </div>
          </Container>
        </PagePadding>
      </section>

      {/* Categories */}
      <section className="py-16">
        <PagePadding>
          <Container>
            <div className="flex justify-center mb-12">
              <div className="flex gap-2 flex-wrap justify-center">
                {filterOptions.map((filter) => (
                  <Label
                    key={filter.id}
                    variant={activeFilter === filter.id ? 'inverse' : 'default'}
                    onClick={() => setActiveFilter(filter.id)}
                  >
                    {filter.label}
                  </Label>
                ))}
              </div>
            </div>

            {/* Collections Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredCollections.map((collection) => (
                <div key={collection.id} className="space-y-4">
                  <div className="aspect-square bg-background-muted border border-black overflow-hidden relative">
                    <Image
                      src={collection.image}
                      alt={collection.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-black/20" />
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-semibold font-sans">
                        {collection.title}
                      </h3>
                      <Label>{collection.label}</Label>
                    </div>
                    <p className="font-serif text-muted text-sm">
                      {collection.description}
                    </p>
                    {/* Tags */}
                    <div className="flex gap-1 flex-wrap">
                      {collection.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs px-2 py-1 bg-gray-100 text-gray-600 rounded-full font-serif uppercase tracking-wide"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-serif text-muted">{collection.price}</span>
                      <Button
                        size="sm"
                        onClick={() => {
                          // Open affiliate link in new tab
                          window.open('https://example.com/affiliate-link', '_blank')
                        }}
                      >
                        Shop Look
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Load More */}
            <div className="text-center mt-12">
              <Button
                variant="outline"
                size="lg"
                onClick={() => {
                  // Scroll to top to show all collections
                  window.scrollTo({ top: 0, behavior: 'smooth' })
                  // Reset filter to show all
                  setActiveFilter('all')
                }}
              >
                View All Collections
              </Button>
            </div>
          </Container>
        </PagePadding>
      </section>

    </>
  )
}