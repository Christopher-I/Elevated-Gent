'use client'

import { useState } from 'react'
import { PagePadding, Container } from '@/components/layout'
import { Button, Label } from '@/components/ui'
import { weeklyProducts, outfitLooks } from '@/lib/products/data'
import { PRODUCT_CATEGORIES } from '@/lib/products/types'
import { ProductCard } from '@/components/products/ProductCard'
import { OutfitCard } from '@/components/products/OutfitCard'
import { StructuredData } from '@/components/seo/StructuredData'
import ProtectedRoute from '@/components/auth/ProtectedRoute'

const categoryOptions = [
  { id: 'all', label: 'All Categories' },
  ...PRODUCT_CATEGORIES.map(cat => ({ id: cat.slug, label: cat.name }))
]

export default function WeeklyPage() {
  const [activeCategory, setActiveCategory] = useState('all')
  const [showOutfits, setShowOutfits] = useState(false)

  const filteredProducts = activeCategory === 'all'
    ? weeklyProducts
    : weeklyProducts.filter(product =>
        product.category.toLowerCase().replace(/\s+/g, '-') === activeCategory
      )

  const featuredProducts = weeklyProducts.filter(product => product.featured)
  const featuredOutfits = outfitLooks.filter(outfit => outfit.featured)

  return (
    <ProtectedRoute>
      <StructuredData pageKey="weekly" />
      {/* Hero Section */}
      <section className="py-16">
        <PagePadding>
          <Container>
            <div className="text-center space-y-8">
              <div className="overflow-hidden px-4">
                <h1 className="text-3xl md:text-4xl lg:text-6xl font-semibold font-sans leading-tight">
                  WEEKLY FINDS
                </h1>
              </div>
              <p className="text-lg md:text-xl font-serif text-muted max-w-3xl mx-auto leading-relaxed px-4">
                Curated weekly selections featuring the best finds, deals, budget-friendly options,
                luxury pieces, accessories, and emerging brands in men&apos;s fashion.
              </p>
              <div className="flex justify-center gap-4 pt-4">
                <Button
                  variant={!showOutfits ? 'default' : 'outline'}
                  onClick={() => setShowOutfits(false)}
                >
                  Weekly Products
                </Button>
                <Button
                  variant={showOutfits ? 'default' : 'outline'}
                  onClick={() => setShowOutfits(true)}
                >
                  Shop This Look
                </Button>
              </div>
            </div>
          </Container>
        </PagePadding>
      </section>

      {/* Featured Section */}
      <section className="py-16 bg-gray-50">
        <PagePadding>
          <Container>
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-semibold font-sans mb-4">
                {showOutfits ? 'Featured Outfit Looks' : 'Featured This Week'}
              </h2>
              <p className="text-gray-600 font-serif">
                {showOutfits ? 'Complete outfit inspiration with shoppable looks' : 'Our top picks from across all categories'}
              </p>
            </div>

            {!showOutfits ? (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {featuredProducts.map((product) => (
                  <div key={product.id} className="bg-white rounded-lg overflow-hidden shadow-sm border border-gray-200 p-6">
                    <ProductCard product={product} />
                  </div>
                ))}
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {featuredOutfits.map((outfit) => (
                  <OutfitCard key={outfit.id} outfit={outfit} />
                ))}
              </div>
            )}
          </Container>
        </PagePadding>
      </section>

      {/* Content Section */}
      {!showOutfits ? (
        <section className="py-16">
          <PagePadding>
            <Container>
              <div className="flex justify-center mb-12">
                <div className="flex gap-2 flex-wrap justify-center">
                  {categoryOptions.map((category) => (
                    <Label
                      key={category.id}
                      variant={activeCategory === category.id ? 'inverse' : 'default'}
                      onClick={() => setActiveCategory(category.id)}
                      className="cursor-pointer"
                    >
                      {category.label}
                    </Label>
                  ))}
                </div>
              </div>

              {/* Products Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </Container>
          </PagePadding>
        </section>
      ) : (
        <section className="py-16">
          <PagePadding>
            <Container>
              <div className="text-center mb-12">
                <h3 className="text-xl font-semibold font-sans mb-4">
                  Complete Outfit Inspiration
                </h3>
                <p className="text-gray-600 font-serif max-w-2xl mx-auto">
                  Browse curated outfit combinations with direct links to shop each piece.
                  Perfect for effortless styling and wardrobe building.
                </p>
              </div>

              {/* All Outfits Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {outfitLooks.map((outfit) => (
                  <OutfitCard key={outfit.id} outfit={outfit} />
                ))}
              </div>
            </Container>
          </PagePadding>
        </section>
      )}
    </ProtectedRoute>
  )
}