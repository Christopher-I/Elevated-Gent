import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { PagePadding, Container } from '@/components/layout'
import { getArticleBySlug, articles } from '@/lib/articles/data'
import { RelatedProducts } from '@/components/articles/RelatedProducts'
import { RelatedOutfit } from '@/components/articles/RelatedOutfit'
import type { Metadata } from 'next'

interface ArticlePageProps {
  params: {
    slug: string
  }
}

// Generate static params for all articles (for static generation)
export async function generateStaticParams() {
  return articles.map((article) => ({
    slug: article.slug,
  }))
}

// Generate metadata for SEO
export async function generateMetadata({ params }: ArticlePageProps): Promise<Metadata> {
  const article = getArticleBySlug(params.slug)

  if (!article) {
    return {
      title: 'Article Not Found',
    }
  }

  return {
    title: article.seo.metaTitle,
    description: article.seo.metaDescription,
    keywords: article.seo.keywords,
    openGraph: {
      title: article.seo.metaTitle,
      description: article.seo.metaDescription,
      images: article.seo.ogImage ? [article.seo.ogImage] : [article.heroImage],
      type: 'article',
      publishedTime: article.publishDate,
      modifiedTime: article.updatedDate,
    },
    twitter: {
      card: 'summary_large_image',
      title: article.seo.metaTitle,
      description: article.seo.metaDescription,
      images: article.seo.ogImage ? [article.seo.ogImage] : [article.heroImage],
    },
  }
}

export default function ArticlePage({ params }: ArticlePageProps) {
  const article = getArticleBySlug(params.slug)

  if (!article) {
    notFound()
  }

  const publishDate = new Date(article.publishDate).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })

  return (
    <>
      {/* Article Hero */}
      <section className="py-12">
        <PagePadding>
          <Container className="max-w-4xl">
            {/* Breadcrumb */}
            <div className="mb-6">
              <Link href="/wellness" className="text-sm font-serif text-gray-500 hover:text-black">
                ← Back to Wellness
              </Link>
            </div>

            {/* Article Header */}
            <div className="space-y-6 mb-12">
              {/* Tags */}
              <div className="flex gap-2 flex-wrap">
                <span className="text-xs px-3 py-1 bg-black text-white rounded-full font-sans uppercase tracking-wide">
                  {article.category}
                </span>
                {article.occasion && (
                  <span className="text-xs px-3 py-1 bg-gray-100 text-gray-600 rounded-full font-sans uppercase tracking-wide">
                    {article.occasion}
                  </span>
                )}
              </div>

              {/* Title */}
              <h1 className="text-3xl md:text-5xl font-bold font-sans leading-tight">
                {article.title}
              </h1>

              {/* Excerpt */}
              <p className="text-xl font-serif text-gray-600 leading-relaxed">
                {article.excerpt}
              </p>

              {/* Metadata */}
              <div className="flex items-center gap-4 text-sm font-serif text-gray-500">
                {article.author && <span>By {article.author}</span>}
                <span>•</span>
                <span>{publishDate}</span>
                <span>•</span>
                <span>{article.readTime} min read</span>
              </div>
            </div>

            {/* Hero Image */}
            <div className="aspect-video relative rounded-lg overflow-hidden border border-gray-200 mb-12">
              <Image
                src={article.heroImage}
                alt={article.title}
                fill
                className="object-cover"
                priority
              />
            </div>
          </Container>
        </PagePadding>
      </section>

      {/* Article Content */}
      <section className="py-8">
        <PagePadding>
          <Container className="max-w-4xl">
            <div
              className="prose prose-lg max-w-none font-serif"
              dangerouslySetInnerHTML={{ __html: article.content }}
            />
          </Container>
        </PagePadding>
      </section>

      {/* Related Products */}
      {article.affiliateProducts && (
        <RelatedProducts products={article.affiliateProducts} />
      )}

      {/* Related Outfit */}
      {article.relatedOutfitId && (
        <PagePadding>
          <Container className="max-w-4xl">
            <RelatedOutfit outfitId={article.relatedOutfitId} />
          </Container>
        </PagePadding>
      )}

      {/* Tags Section */}
      <section className="py-12 border-t border-gray-200">
        <PagePadding>
          <Container className="max-w-4xl">
            <div className="flex gap-2 flex-wrap">
              <span className="text-sm font-serif text-gray-500">Tags:</span>
              {article.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-sm px-3 py-1 bg-gray-100 text-gray-600 rounded-full font-serif"
                >
                  {tag}
                </span>
              ))}
            </div>
          </Container>
        </PagePadding>
      </section>
    </>
  )
}
