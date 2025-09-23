import { generateStructuredData } from '@/lib/seo/metadata'

interface StructuredDataProps {
  pageKey: string
  additionalData?: object
}

export function StructuredData({ pageKey, additionalData }: StructuredDataProps) {
  const structuredData = generateStructuredData(pageKey)

  if (!structuredData && !additionalData) {
    return null
  }

  let jsonLd = structuredData ? JSON.parse(structuredData) : {}

  if (additionalData) {
    jsonLd = { ...jsonLd, ...additionalData }
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(jsonLd),
      }}
    />
  )
}