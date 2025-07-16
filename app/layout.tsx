import type { Metadata } from 'next'
import { Inter, Cormorant_Garamond } from 'next/font/google'
import './globals.css'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { generateHomePageMetadata } from '../utils/seo'
import { generateOrganizationSchema, generateWebsiteSchema } from '../utils/schema'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-cormorant',
})

// Use your existing SEO utility function
export const metadata: Metadata = {
  ...generateHomePageMetadata(),
  metadataBase: new URL('https://flowersluxe.com'),
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    shortcut: '/favicon.ico',
  },
  manifest: '/site.webmanifest',
  other: {
    'google-site-verification': 'your-google-verification-code-here', // Add your Google verification code when you get one
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // Generate schema using your existing utility functions
  const organizationSchema = generateOrganizationSchema()
  const websiteSchema = generateWebsiteSchema()

  return (
    <html lang="en" className={`${inter.variable} ${cormorant.variable}`}>
      <head>
        {/* Preconnect to external domains for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" /> 

        <!-- Google tag (gtag.js) -->
       <script async src="https://www.googletagmanager.com/gtag/js?id=G-FGVRG6MC02"></script>
       <script>
       window.dataLayer = window.dataLayer || [];
       function gtag(){dataLayer.push(arguments);}
       gtag('js', new Date());

       gtag('config', 'G-FGVRG6MC02');
       </script>
        
        {/* Additional SEO meta tags */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#2e7d32" />
        <meta name="msapplication-TileColor" content="#2e7d32" />
        
        {/* Structured Data using your existing schema utilities */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema)
          }}
        />
        
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema)
          }}
        />
      </head>
      <body className={`${inter.className} min-h-screen flex flex-col`}>
        <Header />
        <main className="flex-grow pt-16 md:pt-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
