import { Product } from './types'

export function getShoppableLink(product: Product): string {
  return product.affiliateLink || product.productLink
}

export function formatPrice(price: string): string {
  // Remove currency symbols and parse price for calculations
  const numericPrice = parseFloat(price.replace(/[^\d.-]/g, ''))
  return `$${numericPrice.toFixed(2)}`
}

export function parsePrice(price: string): number {
  // Remove currency symbols and parse price for calculations
  return parseFloat(price.replace(/[^\d.-]/g, ''))
}

export function calculateTotalPrice(products: Product[]): number {
  return products.reduce((total, product) => {
    const price = parsePrice(product.price)
    return total + price
  }, 0)
}

export function trackAffiliateClick(productId: string, affiliateLink?: string): void {
  // Track affiliate link clicks for analytics
  if (affiliateLink && typeof window !== 'undefined') {
    // Send analytics event
    ;(window as any).gtag?.('event', 'affiliate_click', {
      product_id: productId,
      affiliate_link: affiliateLink,
    })
  }
}

export function generateSlug(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .trim()
}