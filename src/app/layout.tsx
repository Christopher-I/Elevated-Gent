import type { Metadata } from 'next'
import { Bitter } from 'next/font/google'
import './globals.css'
import { Header, Footer } from '@/components/layout'
import { APP_CONFIG } from '@/lib/constants'
import { AuthProvider } from '@/lib/firebase/auth'
import { CartProvider } from '@/lib/hooks/useCart'

const bitter = Bitter({
  subsets: ['latin'],
  variable: '--font-bitter',
  weight: ['400', '600', '700'],
  style: ['normal', 'italic'],
})

export const metadata: Metadata = {
  title: {
    default: APP_CONFIG.name,
    template: `%s | The Elevated Gentleman`,
  },
  description: APP_CONFIG.description,
  keywords: ['men\'s fashion', 'styling', 'menswear', 'personal styling', 'classic style'],
  authors: [{ name: 'The Elevated Gentleman' }],
  creator: 'The Elevated Gentleman',
  icons: {
    icon: '/favicon.svg',
    apple: '/webclip.ico',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: APP_CONFIG.url,
    title: APP_CONFIG.name,
    description: APP_CONFIG.description,
    siteName: 'The Elevated Gentleman',
  },
  twitter: {
    card: 'summary_large_image',
    title: APP_CONFIG.name,
    description: APP_CONFIG.description,
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={bitter.variable}>
        <AuthProvider>
          <CartProvider>
            <div className="page-wrapper">
              <Header />
              <main className="main-wrapper">
                {children}
              </main>
              <Footer />
            </div>
          </CartProvider>
        </AuthProvider>
      </body>
    </html>
  )
}