'use client'

import Image from 'next/image'
import Link from 'next/link'
import { outfitLooks } from '@/lib/products/data'
import { Button } from '@/components/ui'

interface RelatedOutfitProps {
  outfitId: string
}

export function RelatedOutfit({ outfitId }: RelatedOutfitProps) {
  const outfit = outfitLooks.find(o => o.id === outfitId)

  if (!outfit) return null

  return (
    <section className="py-12 border-t border-gray-200">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-semibold font-sans mb-2">
            Complete The Look
          </h2>
          <p className="text-gray-600 font-serif">
            Pair this grooming routine with the perfect outfit
          </p>
        </div>

        <div className="bg-gray-50 rounded-lg p-6 md:p-8 flex flex-col md:flex-row gap-6 items-center">
          {/* Outfit Image */}
          <div className="w-full md:w-1/2 aspect-square relative rounded overflow-hidden">
            <Image
              src={outfit.heroImage}
              alt={outfit.title}
              fill
              className="object-cover"
            />
          </div>

          {/* Outfit Info */}
          <div className="w-full md:w-1/2 space-y-4">
            <div>
              <p className="text-xs font-serif text-gray-500 uppercase tracking-wide mb-1">
                {outfit.occasion} • {outfit.season}
              </p>
              <h3 className="text-2xl font-semibold font-sans">
                {outfit.title}
              </h3>
            </div>

            <p className="font-serif text-gray-600">
              {outfit.description}
            </p>

            <div className="space-y-2">
              <p className="text-sm font-sans font-semibold">
                {outfit.products.length} Pieces • ${outfit.totalPrice}
              </p>
              <div className="flex flex-wrap gap-2">
                {outfit.products.slice(0, 3).map((product) => (
                  <span
                    key={product.id}
                    className="text-xs px-2 py-1 bg-white border border-gray-200 rounded font-serif"
                  >
                    {product.brand}
                  </span>
                ))}
              </div>
            </div>

            <Link href="/weekly">
              <Button size="lg" className="w-full md:w-auto">
                Shop This Look
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
