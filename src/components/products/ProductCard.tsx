'use client'

import Image from 'next/image'
import { Button, Label } from '@/components/ui'
import { Product } from '@/lib/products/types'
import { getShoppableLink, trackAffiliateClick } from '@/lib/products/utils'

interface ProductCardProps {
  product: Product
  showFullDetails?: boolean
  className?: string
}

export function ProductCard({ product, showFullDetails = true, className = '' }: ProductCardProps) {
  const handleBuyProduct = () => {
    const url = getShoppableLink(product)
    trackAffiliateClick(product.id, product.affiliateLink)
    window.open(url, '_blank')
  }

  return (
    <div className={`space-y-4 ${className}`}>
      <div className="aspect-square bg-background-muted border border-black overflow-hidden relative">
        <Image
          src={product.image}
          alt={product.title}
          fill
          className="object-cover hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-black/10" />

        {/* Category Label */}
        <div className="absolute top-4 left-4">
          <Label>{product.category}</Label>
        </div>

        {/* Sale Badge */}
        {product.originalPrice && (
          <div className="absolute top-4 right-4">
            <Label variant="inverse" className="text-xs">SALE</Label>
          </div>
        )}

        {/* Stock Status */}
        {!product.inStock && (
          <div className="absolute bottom-4 left-4 right-4">
            <div className="bg-red-600 text-white text-xs px-2 py-1 rounded text-center font-semibold">
              OUT OF STOCK
            </div>
          </div>
        )}
      </div>

      <div className="space-y-2">
        {/* Brand and Price */}
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

        {/* Title */}
        <h3 className="text-lg font-semibold font-sans">
          {product.title}
        </h3>

        {/* Description */}
        {showFullDetails && (
          <p className="font-serif text-muted text-sm overflow-hidden"
             style={{ display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical' }}>
            {product.description}
          </p>
        )}

        {/* Tags */}
        {showFullDetails && (
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
        )}

        {/* Sizes and Colors (if available) */}
        {showFullDetails && (product.sizes || product.colors) && (
          <div className="space-y-2">
            {product.sizes && (
              <div>
                <span className="text-xs font-semibold text-gray-700 uppercase tracking-wide block mb-1">
                  Available Sizes
                </span>
                <div className="flex gap-1 flex-wrap">
                  {product.sizes.map((size) => (
                    <span key={size} className="text-xs px-2 py-1 border border-gray-300 rounded text-gray-600">
                      {size}
                    </span>
                  ))}
                </div>
              </div>
            )}
            {product.colors && (
              <div>
                <span className="text-xs font-semibold text-gray-700 uppercase tracking-wide block mb-1">
                  Available Colors
                </span>
                <div className="flex gap-1 flex-wrap">
                  {product.colors.map((color) => (
                    <span key={color} className="text-xs px-2 py-1 border border-gray-300 rounded text-gray-600">
                      {color}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {/* Action Area */}
        <div className="flex items-center justify-between pt-2">
          {showFullDetails && (
            <span className="text-sm font-serif text-muted">
              {product.category}
            </span>
          )}
          <Button
            size="sm"
            onClick={handleBuyProduct}
            disabled={!product.inStock}
            className={showFullDetails ? "" : "w-full"}
          >
            {product.affiliateLink ? 'Shop Now' : 'View Product'}
          </Button>
        </div>
      </div>
    </div>
  )
}