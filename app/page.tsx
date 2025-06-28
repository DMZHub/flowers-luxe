"use client"

import { useState } from 'react'
import Link from 'next/link'
import { FiChevronRight, FiArrowRight, FiShoppingBag, FiHeart, FiTruck } from 'react-icons/fi'
import ProductCard from '../components/ProductCard'
import { products, getFeaturedProducts } from '../data/products'
import emailjs from '@emailjs/browser'

export default function Home() {
  const [email, setEmail] = useState('')
  const [submitting, setSubmitting] = useState(false)
  const [subscribeStatus, setSubscribeStatus] = useState<{
    success?: boolean
    message?: string
  }>({})

  const serviceID = "service_pg53bjv"
  const templateID = "template_ax0l7yp"
  const publicKey = "yvJpeo6ujp2VaM2rX"

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
      setSubscribeStatus({
        success: false,
        message: 'Please enter a valid email address.'
      })
      return
    }
    
    setSubmitting(true)
    try {
      const templateParams = {
        email: email,
        to_name: email.split('@')[0],
        message: 'Newsletter subscription request'
      }
      
      await emailjs.send(serviceID, templateID, templateParams, publicKey)
      
      setSubscribeStatus({
        success: true,
        message: 'Thank you for subscribing!'
      })
      setEmail('')
    } catch (error) {
      console.error('Failed to subscribe:', error)
      setSubscribeStatus({
        success: false,
        message: 'Subscription failed. Please try again later.'
      })
    } finally {
      setSubmitting(false)
      
      setTimeout(() => {
        setSubscribeStatus({})
      }, 5000)
    }
  }

  const featuredProducts = getFeaturedProducts()

  const categories = [
    {
      title: 'Vintage Style',
      slug: 'vintage',
      description: 'Timeless botanical designs with classic charm',
      count: products.filter(p => p.style === 'vintage').length
    },
    {
      title: 'Modern Style',
      slug: 'modern',
      description: 'Contemporary floral patterns for today\'s homes',
      count: products.filter(p => p.style === 'modern').length
    },
    {
      title: 'Boho Style',
      slug: 'boho',
      description: 'Free-spirited designs with artistic flair',
      count: products.filter(p => p.style === 'boho').length
    },
    {
      title: 'Farmhouse Style',
      slug: 'farmhouse',
      description: 'Rustic charm meets floral elegance',
      count: products.filter(p => p.style === 'farmhouse').length
    },
  ]

  return (
    <>
      <section className="relative bg-gray-50 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute w-96 h-96 -top-12 -right-12 bg-green-100 rounded-full blur-3xl opacity-30"></div>
          <div className="absolute w-96 h-96 top-1/2 -left-48 bg-green-100 rounded-full blur-3xl opacity-30"></div>
        </div>
        
        <div className="container-custom relative min-h-screen flex items-center py-16 md:py-24">
          <div className="w-full max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center bg-white px-4 py-2 rounded-full text-sm font-medium text-green-700 shadow-sm mb-6 border border-green-100">
              <span className="flex h-2 w-2 mr-2">
                <span className="animate-ping absolute h-2 w-2 rounded-full bg-green-500 opacity-75"></span>
                <span className="relative rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              Premium Flower Throw Pillows
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight mb-6">
              Transform Your Space with
              <br />
              <span className="text-green-700 relative">
                Botanical Elegance
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-3xl mx-auto">
              Discover our collection of premium flower throw pillows, each featuring unique botanical designs 
              handcrafted in America. From vintage charm to modern sophistication, find the perfect accent for every room.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Link href="/shop" className="btn-primary text-lg px-8 py-4">
                <FiShoppingBag className="mr-2" size={20} />
                Shop Collection
              </Link>
              <Link href="/flower-throw-pillows" className="btn-outline text-lg px-8 py-4">
                Browse Styles
                <FiArrowRight className="ml-2" size={20} />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="bg-white bg-opacity-80 backdrop-blur-sm rounded-xl p-6 shadow-sm border border-white border-opacity-50">
                <div className="bg-green-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4 mx-auto">
                  <FiHeart className="text-green-700" size={24} />
                </div>
                <h3 className="text-lg font-semibold mb-2">Handcrafted Quality</h3>
                <p className="text-gray-600 text-sm">Individually cut and sewn by hand in America with premium materials</p>
              </div>
              
              <div className="bg-white bg-opacity-80 backdrop-blur-sm rounded-xl p-6 shadow-sm border border-white border-opacity-50">
                <div className="bg-green-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4 mx-auto">
                  <FiShoppingBag className="text-green-700" size={24} />
                </div>
                <h3 className="text-lg font-semibold mb-2">Unique Designs</h3>
                <p className="text-gray-600 text-sm">Exclusive botanical patterns you won't find anywhere else</p>
              </div>
              
              <div className="bg-white bg-opacity-80 backdrop-blur-sm rounded-xl p-6 shadow-sm border border-white border-opacity-50">
                <div className="bg-green-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4 mx-auto">
                  <FiTruck className="text-green-700" size={24} />
                </div>
                <h3 className="text-lg font-semibold mb-2">Fast Shipping</h3>
                <p className="text-gray-600 text-sm">Quick delivery with secure packaging and tracking</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Shop by Style</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore our diverse collection of flower throw pillow styles, each designed to complement your unique taste and home décor.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category, index) => (
              <div key={category.slug} className="group">
                <Link href={`/flower-throw-pillows/${category.slug}`}>
                  <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 group-hover:border-green-200 text-center">
                    <div className="bg-gradient-to-br from-green-100 to-green-50 w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform">
                      <span className="text-2xl font-bold text-green-700">
                        {category.title.charAt(0)}
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-green-700 transition-colors">
                      {category.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-3">
                      {category.description}
                    </p>
                    <span className="text-green-700 text-sm font-medium">
                      {category.count} designs
                    </span>
                  </div>
                </Link>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Link href="/flower-throw-pillows" className="btn-secondary inline-flex items-center gap-2">
              <span>View All Styles</span>
              <FiArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Collection</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover our most popular flower throw pillows, carefully selected for their exceptional design and customer appeal.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                showQuickView={true}
              />
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Link href="/shop" className="btn-primary inline-flex items-center gap-2">
              <span>Shop All Products</span>
              <FiArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-gray-50">
        <div className="container-custom">
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 md:p-12">
            <div className="max-w-3xl mx-auto text-center">
              <span className="bg-green-100 text-green-700 text-sm font-medium px-4 py-1.5 rounded-full inline-block mb-4">Stay Updated</span>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Join Our Floral Community
              </h2>
              <p className="text-gray-600 mb-8">
                Subscribe to receive exclusive offers, new product announcements, and home décor inspiration delivered to your inbox.
              </p>
              
          <form className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto" onSubmit={handleSubscribe} suppressHydrationWarning>
  <input
    type="email"
    placeholder="Your email address"
    className="flex-grow px-4 py-3 rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-200 focus:border-green-500"
    required
    value={email}
    onChange={(e) => setEmail(e.target.value)}
    disabled={submitting}
    suppressHydrationWarning
  />
  <button
    type="submit"
    className={`btn-primary whitespace-nowrap ${submitting ? 'opacity-70 cursor-not-allowed' : ''}`}
    disabled={submitting}
    suppressHydrationWarning
  >
    {submitting ? 'Subscribing...' : 'Subscribe'}
  </button>
</form>
              
              {subscribeStatus.message && (
                <div 
                  className={`mt-4 text-sm ${
                    subscribeStatus.success ? 'text-green-600' : 'text-red-600'
                  }`}
                >
                  {subscribeStatus.message}
                </div>
              )}
              
              <p className="text-sm text-gray-500 mt-4">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}