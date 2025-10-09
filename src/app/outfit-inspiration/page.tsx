'use client'

import { useState } from 'react'
import { PagePadding, Container } from '@/components/layout'
import { Label } from '@/components/ui'
import Image from 'next/image'
import { StructuredData } from '@/components/seo/StructuredData'
import { outfitLooks } from '@/lib/products/data'
import { OutfitCard } from '@/components/products/OutfitCard'
import ProtectedRoute from '@/components/auth/ProtectedRoute'

// Map outfit occasions/styles to filter categories
const getOutfitsByFilter = (filterId: string) => {
  if (filterId === 'all') return outfitLooks

  const filterMap: Record<string, string[]> = {
    'casual': ['Casual', 'Weekend', 'Smart Casual'],
    'formal': ['Formal Event', 'Work', 'Business Casual'],
    'streetwear': ['Modern', 'Streetwear'],
    'date-night': ['Date Night', 'Cocktail Hour'],
    'accessories': [] // Can be used to filter by specific product types later
  }

  const matchTerms = filterMap[filterId] || []
  return outfitLooks.filter(outfit =>
    matchTerms.some(term =>
      outfit.occasion === term ||
      outfit.styleType === term
    )
  )
}

// Legacy collections data for visual display (can be removed if not needed)
const collections = [
  {
    id: 1,
    title: "Smart Casual Denim",
    description: "Elevated denim styling with tailored jacket, white shirt, and premium accessories.",
    image: "/images/Image 3.jpeg",
    price: "From $89",
    label: "Shop The Look",
    tags: ["casual", "denim"],
    affiliateLink: "https://www.mrporter.com/en-us/mens/category/clothing"
  },
  {
    id: 2,
    title: "Leather Jacket Style",
    description: "Premium leather pieces and accessories for sophisticated edge and modern appeal.",
    image: "/images/Image 5 (1).jpeg",
    price: "From $299",
    label: "Premium",
    tags: ["formal", "accessories", "leather"],
    affiliateLink: "https://www.nordstrom.com/browse/men/clothing/jackets-coats"
  },
  {
    id: 3,
    title: "Formal Evening Look",
    description: "Sophisticated evening pieces perfect for special occasions and business events.",
    image: "/images/Image 12 (1).jpeg",
    price: "From $399",
    label: "Complete Look",
    tags: ["formal", "evening", "business"],
    affiliateLink: "https://www.suitsupply.com/en-us/men/suits"
  },
  {
    id: 4,
    title: "Elevated Streetwear",
    description: "High-fashion pieces inspired by runway trends and elevated street style.",
    image: "/images/fashion-runway.jpeg",
    price: "From $149",
    label: "Featured",
    tags: ["streetwear", "trending"],
    affiliateLink: "https://www.ssense.com/en-us/men"
  },
  {
    id: 5,
    title: "Casual Weekend",
    description: "Effortless weekend styling with comfortable pieces that maintain sophistication.",
    image: "/images/Image 1 (1).jpeg",
    price: "From $65",
    label: "Relaxed",
    tags: ["casual", "weekend", "comfort"],
    affiliateLink: "https://www.jcrew.com/mens"
  },
  {
    id: 6,
    title: "Date Night Ready",
    description: "Sophisticated evening looks perfect for dinner dates and romantic occasions.",
    image: "/images/Image 8 (1).jpeg",
    price: "From $125",
    label: "Evening",
    tags: ["date-night", "formal", "evening"],
    affiliateLink: "https://www.uniqlo.com/us/en/men"
  }
]

const filterOptions = [
  { id: 'all', label: 'All' },
  { id: 'casual', label: 'Casual Style' },
  { id: 'formal', label: 'Formal Wear' },
  { id: 'streetwear', label: 'Streetwear' },
  { id: 'date-night', label: 'Date Night' },
  { id: 'accessories', label: 'Accessories' }
]

export default function CollectionsPage() {
  const [activeFilter, setActiveFilter] = useState('all')

  const filteredOutfits = getOutfitsByFilter(activeFilter)

  return (
    <ProtectedRoute>
      <StructuredData pageKey="outfit-inspiration" />
      {/* Hero Section */}
      <section className="py-16">
        <PagePadding>
          <Container>
            <div className="text-center space-y-8">
              <div className="overflow-hidden px-4">
                <Image
                  src="/images/Outfit-Inspiration-For-Men.svg"
                  alt="Outfit Inspiration For Men"
                  width={730}
                  height={38}
                  className="mx-auto h-6 md:h-8 lg:h-10 w-auto max-w-full"
                />
              </div>
              <p className="text-lg md:text-xl font-serif text-muted max-w-3xl mx-auto leading-relaxed px-4">
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

            {/* Outfits Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredOutfits.map((outfit) => (
                <OutfitCard key={outfit.id} outfit={outfit} />
              ))}
            </div>

            {/* Empty State */}
            {filteredOutfits.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-500 font-serif">
                  No outfits found in this category yet. Check back soon!
                </p>
              </div>
            )}
          </Container>
        </PagePadding>
      </section>

    </ProtectedRoute>
  )
}