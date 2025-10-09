'use client'

import { PagePadding, Container } from '@/components/layout'
import { articles } from '@/lib/articles/data'
import { ArticleCard } from '@/components/articles/ArticleCard'
import { StructuredData } from '@/components/seo/StructuredData'
import ProtectedRoute from '@/components/auth/ProtectedRoute'

export default function WellnessPage() {

  return (
    <ProtectedRoute>
      <StructuredData pageKey="wellness" />

      {/* Hero Section */}
      <section className="py-16">
        <PagePadding>
          <Container>
            <div className="text-center space-y-8">
              <div className="overflow-hidden px-4">
                <h1 className="text-3xl md:text-4xl lg:text-6xl font-semibold font-sans leading-tight">
                  GROOMING, HEALTH & WELLNESS
                </h1>
              </div>
              <p className="text-lg md:text-xl font-serif text-muted max-w-3xl mx-auto leading-relaxed px-4">
                Build the foundation for timeless style. Expert advice on grooming, fitness,
                and wellness essentials that complement your elevated wardrobe—because
                confidence starts from within.
              </p>
            </div>
          </Container>
        </PagePadding>
      </section>

      {/* Articles Grid */}
      <section className="py-16">
        <PagePadding>
          <Container>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {articles.map((article) => (
                <ArticleCard key={article.id} article={article} />
              ))}
            </div>
          </Container>
        </PagePadding>
      </section>
    </ProtectedRoute>
  )
}
