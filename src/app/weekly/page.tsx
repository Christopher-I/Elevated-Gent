'use client'

import { useState } from 'react'
import { PagePadding, Container } from '@/components/layout'
import { Button, Label } from '@/components/ui'
import Image from 'next/image'

// Weekly product categories
const categories = [
  'Finds of the Week',
  'Deals of the Week',
  'Fashion on a Budget',
  'High Roller List',
  'Best Accessories',
  'Emerging Brand Spotlight'
]

// Product data with real information fetched from websites
const weeklyProducts = [
  {
    id: 1,
    title: "Third Cut Digital Denim Print",
    brand: "Our Legacy",
    description: "Produced in an Italian denim with a trompe l'oeil vintage denim print, the mens Third Cut jeans have a relaxed, wide legged fit",
    image: "https://ourlegacy.centracdn.net/client/dynamic/images/8380_3868101f95-m4205tdd_3166-rtail-big.jpg",
    price: "€430",
    originalPrice: "",
    category: "Finds of the Week",
    tags: ["denim", "premium", "italian"],
    productLink: "https://www.ourlegacy.com/third-cut-digital-denim-print",
    featured: true
  },
  {
    id: 2,
    title: "Silverlake Crop Tee II",
    brand: "Pool House New York",
    description: "A boxy, drop-shoulder relaxed men's crop t-shirt with classic white finish. Perfect for contemporary casual styling.",
    image: "https://poolhousenewyork.com/cdn/shop/files/silverlake_crop_tee_boxy_drop_shoulder_relaxed_mens_t-shirt_baggy_shopify_cover_image_classic_white_1.jpg",
    price: "$65",
    originalPrice: "",
    category: "Fashion on a Budget",
    tags: ["basics", "crop", "casual"],
    productLink: "https://poolhousenewyork.com/products/the-silverlake-crop-tee-ii-1",
    featured: false
  },
  {
    id: 3,
    title: "Suede Trucker Jacket",
    brand: "Banana Republic",
    description: "Premium suede trucker jacket with classic western-inspired silhouette. Crafted for sophisticated casual wear.",
    image: "https://bananarepublic.gap.com/webcontent/0056/287/618/cn56287618.jpg",
    price: "$550",
    originalPrice: "$750",
    category: "Deals of the Week",
    tags: ["suede", "outerwear", "classic"],
    productLink: "https://bananarepublic.gap.com/browse/product.do?pid=502836002",
    featured: true
  },
  {
    id: 4,
    title: "2021M Straight-Leg Jeans",
    brand: "Acne Studios",
    description: "Contemporary straight-leg jeans with premium construction and modern fit. A staple for the discerning wardrobe.",
    image: "/images/Image 3.jpeg",
    price: "$350",
    originalPrice: "",
    category: "High Roller List",
    tags: ["denim", "luxury", "acne"],
    productLink: "https://www.mrporter.com/en-us/mens/product/acne-studios/clothing/straight-jeans/2021m-straight-leg-jeans/46376663162902746",
    featured: false
  },
  {
    id: 5,
    title: "Slim Merino Wool Crew-Neck Sweater",
    brand: "COS",
    description: "A refined essential, this sweater is crafted from pure merino wool that's lightweight and soft to the touch. Cut in a slim shape with ribbed detailing.",
    image: "https://media.cos.com/assets/001/cd/1c/cd1c2d2ff2a4d76c77cd97b30cebbf9b6e64bf38_xxl-1.jpg",
    price: "$129",
    originalPrice: "",
    category: "Best Accessories",
    tags: ["knitwear", "merino", "essential"],
    productLink: "https://www.cos.com/en-us/men/menswear/knitwear/merino/product/slim-merino-wool-crew-neck-jumper-cobalt-blue-1260173008",
    featured: false
  },
  {
    id: 6,
    title: "Manhattan Oversized Overcoat",
    brand: "California Arts",
    description: "Traditional Wall Street meets west coast casual. Blending precise tailoring with a minimalist, relaxed silhouette in Deep Moss.",
    image: "https://california-arts.com/cdn/shop/files/CA-AUG--13362_2048x2048.jpg?v=1757563502",
    price: "$748",
    originalPrice: "",
    category: "Emerging Brand Spotlight",
    tags: ["outerwear", "oversized", "premium"],
    productLink: "https://california-arts.com/collections/coats-jackets/products/manhattanovercoat_deep-moss",
    featured: true
  }
]

const categoryOptions = [
  { id: 'all', label: 'All Categories' },
  ...categories.map(cat => ({ id: cat.toLowerCase().replace(/\s+/g, '-'), label: cat }))
]

export default function WeeklyPage() {
  const [activeCategory, setActiveCategory] = useState('all')

  const filteredProducts = activeCategory === 'all'
    ? weeklyProducts
    : weeklyProducts.filter(product =>
        product.category.toLowerCase().replace(/\s+/g, '-') === activeCategory
      )

  const featuredProducts = weeklyProducts.filter(product => product.featured)

  return (
    <>
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
                luxury pieces, accessories, and emerging brands in men's fashion.
              </p>
            </div>
          </Container>
        </PagePadding>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-gray-50">
        <PagePadding>
          <Container>
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-semibold font-sans mb-4">
                Featured This Week
              </h2>
              <p className="text-gray-600 font-serif">
                Our top picks from across all categories
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {featuredProducts.map((product) => (
                <div key={product.id} className="bg-white rounded-lg overflow-hidden shadow-sm border border-gray-200">
                  <div className="aspect-square bg-background-muted relative overflow-hidden">
                    <Image
                      src={product.image}
                      alt={product.title}
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <Label variant="inverse" className="text-xs">
                        {product.category}
                      </Label>
                    </div>
                  </div>
                  <div className="p-6 space-y-4">
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-serif text-gray-500 uppercase tracking-wide">
                          {product.brand}
                        </span>
                        <div className="flex items-center gap-2">
                          <span className="text-lg font-semibold">{product.price}</span>
                          {product.originalPrice && (
                            <span className="text-sm text-gray-500 line-through">
                              {product.originalPrice}
                            </span>
                          )}
                        </div>
                      </div>
                      <h3 className="text-lg font-semibold font-sans">
                        {product.title}
                      </h3>
                      <p className="font-serif text-gray-600 text-sm overflow-hidden" style={{ display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical' }}>
                        {product.description}
                      </p>
                    </div>
                    <div className="flex gap-1 flex-wrap">
                      {product.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs px-2 py-1 bg-gray-100 text-gray-600 rounded-full font-serif uppercase tracking-wide"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <Button
                      size="sm"
                      className="w-full"
                      onClick={() => window.open(product.productLink, '_blank')}
                    >
                      View Product
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </PagePadding>
      </section>

      {/* Categories Filter */}
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
                <div key={product.id} className="space-y-4">
                  <div className="aspect-square bg-background-muted border border-black overflow-hidden relative">
                    <Image
                      src={product.image}
                      alt={product.title}
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/10" />
                    <div className="absolute top-4 left-4">
                      <Label>{product.category}</Label>
                    </div>
                    {product.originalPrice && (
                      <div className="absolute top-4 right-4">
                        <Label variant="inverse" className="text-xs">SALE</Label>
                      </div>
                    )}
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-serif text-gray-500 uppercase tracking-wide">
                        {product.brand}
                      </span>
                      <div className="flex items-center gap-2">
                        <span className="text-lg font-semibold">{product.price}</span>
                        {product.originalPrice && (
                          <span className="text-sm text-gray-500 line-through">
                            {product.originalPrice}
                          </span>
                        )}
                      </div>
                    </div>
                    <h3 className="text-lg font-semibold font-sans">
                      {product.title}
                    </h3>
                    <p className="font-serif text-muted text-sm overflow-hidden" style={{ display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical' }}>
                      {product.description}
                    </p>
                    {/* Tags */}
                    <div className="flex gap-1 flex-wrap">
                      {product.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs px-2 py-1 bg-gray-100 text-gray-600 rounded-full font-serif uppercase tracking-wide"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-serif text-muted">
                        {product.category}
                      </span>
                      <Button
                        size="sm"
                        onClick={() => window.open(product.productLink, '_blank')}
                      >
                        View Product
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

          </Container>
        </PagePadding>
      </section>
    </>
  )
}