'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Article } from '@/lib/articles/types'
import { Button, Label } from '@/components/ui'

interface ArticleCardProps {
  article: Article
}

export function ArticleCard({ article }: ArticleCardProps) {
  // Format publish date
  const publishDate = new Date(article.publishDate).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  })

  // Get category display name
  const getCategoryName = (category: string) => {
    const categoryMap: Record<string, string> = {
      blueprint: 'Grooming Blueprint',
      confidence: 'Confidence & Wellness',
      occasion: 'By Occasion',
      products: 'Product Review',
      lifestyle: 'Lifestyle'
    }
    return categoryMap[category] || category
  }

  return (
    <article className="space-y-6 group">
      {/* Hero Image */}
      <Link href={`/wellness/${article.slug}`}>
        <div className="aspect-video bg-background-muted border border-black overflow-hidden relative">
          <Image
            src={article.heroImage}
            alt={article.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
          {article.featured && (
            <div className="absolute top-4 right-4">
              <Label variant="inverse">Featured</Label>
            </div>
          )}
        </div>
      </Link>

      {/* Content */}
      <div className="space-y-3 mt-6">
        {/* Category Tag */}
        <div className="flex items-center gap-2">
          <Label>{getCategoryName(article.category)}</Label>
          {article.occasion && (
            <span className="text-xs px-2 py-1 bg-gray-100 text-gray-600 rounded-full font-serif uppercase tracking-wide">
              {article.occasion}
            </span>
          )}
        </div>

        {/* Title */}
        <Link href={`/wellness/${article.slug}`}>
          <h3 className="text-lg font-semibold font-sans group-hover:underline">
            {article.title}
          </h3>
        </Link>

        {/* Excerpt */}
        <p className="font-serif text-muted text-sm line-clamp-2">
          {article.excerpt}
        </p>

        {/* Metadata */}
        <div className="flex items-center justify-between text-xs font-serif text-muted">
          <span>{article.readTime} min read • {publishDate}</span>
        </div>

        {/* CTA */}
        <div className="pt-2">
          <Link href={`/wellness/${article.slug}`}>
            <Button variant="outline" size="sm">
              Read Article
            </Button>
          </Link>
        </div>
      </div>
    </article>
  )
}
