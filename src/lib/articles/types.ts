// Article occasion types (maps to outfit categories)
export type ArticleOccasion =
  | 'streetwear'
  | 'casual'
  | 'evening'
  | 'business'
  | 'vacation'

// Article category types
export type ArticleCategory =
  | 'blueprint'      // Foundational grooming
  | 'confidence'     // Fitness & wellness
  | 'occasion'       // Occasion-specific
  | 'products'       // Product reviews
  | 'lifestyle'      // Broader lifestyle

// Affiliate product for recommendations
export interface AffiliateProduct {
  id: string
  name: string
  brand: string
  price: string         // Display price (e.g., "$35")
  priceValue: number    // Numeric value for sorting
  image: string
  description: string
  affiliateLink: string
  retailer: string      // "Amazon", "Sephora", etc.
  tier: 'budget' | 'signature' | 'upgrade'
}

// Main article interface
export interface Article {
  id: string
  slug: string                          // URL-friendly (e.g., "essential-grooming-routine")
  title: string
  excerpt: string                       // 2-3 sentence preview
  category: ArticleCategory
  occasion?: ArticleOccasion           // Optional: maps to outfit

  // Content
  heroImage: string
  content: string                       // Full article (HTML)

  // Metadata
  author?: string
  publishDate: string                   // ISO format: "2025-01-15"
  updatedDate?: string
  readTime: number                      // Minutes
  tags: string[]

  // Features
  featured: boolean                     // Show in featured section

  // Integrations
  relatedOutfitId?: string             // Links to collections outfit
  affiliateProducts?: {
    budget?: AffiliateProduct
    signature?: AffiliateProduct
    upgrade?: AffiliateProduct
  }

  // SEO
  seo: {
    metaTitle: string
    metaDescription: string
    keywords: string[]
    ogImage?: string
  }
}

// Category definition for filtering
export interface ArticleFilterCategory {
  id: string
  name: string
  slug: string
  description?: string
}
