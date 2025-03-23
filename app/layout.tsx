import type { Metadata } from 'next'
import './globals.css'
import { Navbar } from '../components/navbar'
import Footer from '../components/Footer'

export const metadata: Metadata = {
title: 'FlowersLuxe - Beautiful Floral Designs on Premium Products',
  description: 'Discover unique floral designs on stickers, mugs, pillows, art, tote bags, tapestries, and pins. Premium quality floral products for your home and lifestyle.',
  keywords: 'floral designs, flower art, floral stickers, flower mugs, flower throw pillows, flower tapestries',
  icons: {
    icon: 'public/favicon.ico', // Path to your favicon file
    shortcut: '/favicon.ico',
    apple: 'public/apple-touch-icon.png', // Optional: Add a high-res version for Apple devices
  },
  // Comprehensive Open Graph Metadata
  openGraph: {
    title: 'FlowersLuxe - Beautiful Floral Designs',
    description: 'Discover unique floral designs on premium products for your home and lifestyle',
    type: 'website',
    locale: 'en_US',
    url: 'https://www.flowersluxe.com',  
    siteName: 'FlowersLuxe',
    images: [
      {
        url: '/images/og-image.jpg', // Create a square or landscape image (1200x630 recommended)
        width: 1200,
        height: 630,
        alt: 'FlowersLuxe - Premium Floral Designs'
      }
    ]
  },

  // Twitter Card Metadata (as a fallback)
  twitter: {
    card: 'summary_large_image',
    title: 'FlowersLuxe - Beautiful Floral Designs',
    description: 'Discover unique floral designs on premium products',
    images: ['/images/twitter-card-image.jpg'] // Recommended size: 1200x628
  },

  // Additional Metadata Enhancements
  metadataBase: new URL('https://www.flowersluxe.com'),  
  alternates: {
    canonical: '/'
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1
    }
  },
  
 


 
  // Verification tags (optional, but useful for search console)
  verification: {
    google: 'your-google-site-verification-code', // Optional
     // bing: 'your-bing-site-verification-code', // Optional
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow pt-16 md:pt-20">
          {children}
        </main>
        <Footer/>
      </body>
    </html>
  )
}
