// App Configuration
export const APP_CONFIG = {
  name: 'The Elevated Gentleman - Classic Styling For The Modern Man',
  description: 'Classic styling for the modern man',
  url: process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000',
  supportEmail: 'support@theelevatedgentleman.com',
} as const

// Navigation Links
export const NAVIGATION_LINKS = [
  { name: 'Services', href: '/services' },
  { name: 'Products', href: '/products' },
  { name: 'Account', href: '/account' },
] as const

// Service Categories
export const SERVICE_CATEGORIES = [
  'styling',
  'consultation',
  'wardrobe',
] as const

// Product Categories
export const PRODUCT_CATEGORIES = [
  'clothing',
  'accessories',
  'shoes',
  'grooming',
  'lifestyle',
] as const

// Currency Configuration
export const CURRENCY = {
  code: 'USD',
  symbol: '$',
  locale: 'en-US',
} as const

// Pagination
export const PAGINATION = {
  defaultLimit: 12,
  maxLimit: 50,
} as const

// Social Links (matching Webflow site)
export const SOCIAL_LINKS = [
  {
    name: 'Instagram',
    href: 'https://instagram.com',
    icon: 'Instagram',
  },
  {
    name: 'Twitter',
    href: 'https://twitter.com',
    icon: 'Twitter',
  },
  {
    name: 'YouTube',
    href: 'https://youtube.com',
    icon: 'Youtube',
  },
] as const

// API Routes
export const API_ROUTES = {
  products: '/api/products',
  services: '/api/services',
  orders: '/api/orders',
  auth: '/api/auth',
  stripe: '/api/stripe',
} as const