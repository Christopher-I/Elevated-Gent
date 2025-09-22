import { PagePadding, Container } from '@/components/layout'
import { Button, Label } from '@/components/ui'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Products',
  description: 'Curated collection of premium menswear and accessories',
}

export default function ProductsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-16">
        <PagePadding>
          <Container>
            <div className="text-center space-y-8">
              <div className="overflow-hidden">
                <h1 className="text-6xl font-semibold font-sans leading-tight">
                  Curated Products
                </h1>
              </div>
              <p className="text-xl font-serif text-muted max-w-3xl mx-auto leading-relaxed">
                Discover our carefully selected collection of timeless pieces and modern
                essentials. Each item is chosen for quality, style, and versatility.
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
                <Label>All</Label>
                <Label variant="inverse">Clothing</Label>
                <Label>Accessories</Label>
                <Label>Shoes</Label>
                <Label>Grooming</Label>
                <Label>Lifestyle</Label>
              </div>
            </div>

            {/* Product Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Product Card 1 */}
              <div className="space-y-4">
                <div className="aspect-square bg-background-muted border border-black overflow-hidden">
                  <div className="w-full h-full flex items-center justify-center text-muted">
                    <span className="font-serif">Product Image</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold font-sans">
                      Essential White Shirt
                    </h3>
                    <Label>Featured</Label>
                  </div>
                  <p className="font-serif text-muted text-sm">
                    Premium cotton dress shirt with perfect fit and timeless style.
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xl font-semibold">$89</span>
                    <Button size="sm">
                      View Product
                    </Button>
                  </div>
                </div>
              </div>

              {/* Product Card 2 */}
              <div className="space-y-4">
                <div className="aspect-square bg-background-muted border border-black overflow-hidden">
                  <div className="w-full h-full flex items-center justify-center text-muted">
                    <span className="font-serif">Product Image</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold font-sans">
                      Leather Dress Belt
                    </h3>
                    <Label>New</Label>
                  </div>
                  <p className="font-serif text-muted text-sm">
                    Full-grain leather belt with brushed nickel buckle.
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xl font-semibold">$65</span>
                    <Button size="sm" variant="outline">
                      View Product
                    </Button>
                  </div>
                </div>
              </div>

              {/* Product Card 3 */}
              <div className="space-y-4">
                <div className="aspect-square bg-background-muted border border-black overflow-hidden">
                  <div className="w-full h-full flex items-center justify-center text-muted">
                    <span className="font-serif">Product Image</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold font-sans">
                      Premium Wool Blazer
                    </h3>
                  </div>
                  <p className="font-serif text-muted text-sm">
                    Tailored wool blazer perfect for business and smart casual occasions.
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xl font-semibold">$299</span>
                    <Button size="sm" variant="outline">
                      View Product
                    </Button>
                  </div>
                </div>
              </div>

              {/* Product Card 4 */}
              <div className="space-y-4">
                <div className="aspect-square bg-background-muted border border-black overflow-hidden">
                  <div className="w-full h-full flex items-center justify-center text-muted">
                    <span className="font-serif">Product Image</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold font-sans">
                      Swiss Watch
                    </h3>
                    <Label>Premium</Label>
                  </div>
                  <p className="font-serif text-muted text-sm">
                    Classic timepiece with automatic movement and leather strap.
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xl font-semibold">$449</span>
                    <Button size="sm">
                      View Product
                    </Button>
                  </div>
                </div>
              </div>

              {/* Product Card 5 */}
              <div className="space-y-4">
                <div className="aspect-square bg-background-muted border border-black overflow-hidden">
                  <div className="w-full h-full flex items-center justify-center text-muted">
                    <span className="font-serif">Product Image</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold font-sans">
                      Oxford Dress Shoes
                    </h3>
                  </div>
                  <p className="font-serif text-muted text-sm">
                    Handcrafted leather oxfords with goodyear welt construction.
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xl font-semibold">$189</span>
                    <Button size="sm" variant="outline">
                      View Product
                    </Button>
                  </div>
                </div>
              </div>

              {/* Product Card 6 */}
              <div className="space-y-4">
                <div className="aspect-square bg-background-muted border border-black overflow-hidden">
                  <div className="w-full h-full flex items-center justify-center text-muted">
                    <span className="font-serif">Product Image</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold font-sans">
                      Grooming Kit
                    </h3>
                    <Label>Bundle</Label>
                  </div>
                  <p className="font-serif text-muted text-sm">
                    Complete grooming essentials for the modern gentleman.
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xl font-semibold">$79</span>
                    <Button size="sm">
                      View Product
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            {/* Load More */}
            <div className="text-center mt-12">
              <Button variant="outline" size="lg">
                Load More Products
              </Button>
            </div>
          </Container>
        </PagePadding>
      </section>

      {/* Featured Collection */}
      <section className="py-16 bg-background-muted">
        <PagePadding>
          <Container>
            <div className="text-center space-y-8">
              <h2 className="text-4xl font-semibold font-sans">
                Featured Collection
              </h2>
              <p className="text-lg font-serif text-muted max-w-2xl mx-auto">
                Our signature pieces that form the foundation of a well-dressed man&apos;s wardrobe.
                These items are selected for their versatility, quality, and timeless appeal.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
                <div className="bg-white p-8 border border-black">
                  <h3 className="text-2xl font-semibold font-sans mb-4">
                    Essential Wardrobe
                  </h3>
                  <p className="font-serif text-muted mb-6">
                    The core pieces every gentleman needs. Start here to build
                    a solid foundation for your style.
                  </p>
                  <Button>
                    Shop Essentials
                  </Button>
                </div>

                <div className="bg-white p-8 border border-black">
                  <h3 className="text-2xl font-semibold font-sans mb-4">
                    Seasonal Selections
                  </h3>
                  <p className="font-serif text-muted mb-6">
                    Carefully curated pieces that reflect current trends while
                    maintaining our commitment to timeless style.
                  </p>
                  <Button variant="outline">
                    View Collection
                  </Button>
                </div>
              </div>
            </div>
          </Container>
        </PagePadding>
      </section>
    </>
  )
}