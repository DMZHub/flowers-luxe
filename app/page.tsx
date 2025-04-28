"use client"

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ChevronRight, ArrowRight, ShoppingBag, BookOpen, TrendingUp, ExternalLink } from 'lucide-react'
import CategoryCard from '@/components/CategoryCard'
import ProductCard from '@/components/ProductCard'
import BlogCard from '@/components/BlogCard'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'

export default function Home() {
  // EmailJS credentials
  const serviceID = "service_yjfk3dq"
  const templateID = "template_jkea55x"
  const publicKey = "p_xEzMpgucBUYxDyC"
  
  // Newsletter state
  const [email, setEmail] = useState('')
  const [submitting, setSubmitting] = useState(false)
  const [subscribeStatus, setSubscribeStatus] = useState<{
    success?: boolean
    message?: string
  }>({})

  // Newsletter form submit handler
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
        to_name: email.split('@')[0], // Use part before @ as name
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
      
      // Clear status message after 5 seconds
      setTimeout(() => {
        setSubscribeStatus({})
      }, 5000)
    }
  }

  // Mock data for categories
  const categories = [
    {
      title: 'Throw Pillows',
      slug: 'throw-pillows',
      imageSrc: '/images/categories/flower-throw-pillows.webp',
      count: 50
    },
    {
      title: 'Stickers',
      slug: 'stickers',
      imageSrc: '/images/categories/flower-stickers.webp',
      count: 30
    },
    {
      title: 'Mugs',
      slug: 'mugs',
      imageSrc: '/images/categories/flower-mugs.webp',
      count: 50
    },
    {
      title: 'Art Prints',
      slug: 'art',
      imageSrc: '/images/categories/flower-art.webp',
      count: 50
    },
    {
      title: 'Tote Bags',
      slug: 'tote-bags',
      imageSrc: '/images/categories/flower-tote-bags.webp',
      count: 50
    },
    {
      title: 'Tapestries',
      slug: 'tapestries',
      imageSrc: '/images/categories/flower-tapestries.webp',
      count: 50
    },
    {
      title: 'Pins',
      slug: 'pins',
      imageSrc: '/images/categories/flower-pins.webp',
      count: 10
    },
  ]

  // Mock data for featured products
  const featuredProducts = [
    {
      title: 'Wildflower Bouquet Throw Pillow',
      category: 'Throw Pillow',
      price: '$24.99',
      imageSrc: '/images/products/pillow-1.jpg',
      externalUrl: 'https://www.teepublic.com/user/flowersluxe',
      isNew: true
    },
    {
      title: 'Spring Blossoms Sticker Pack',
      category: 'Stickers',
      price: '$3.99',
      imageSrc: '/images/products/sticker-1.jpg',
      externalUrl: 'https://www.teepublic.com/user/flowersluxe'
    },
    {
      title: 'Rose Garden Ceramic Mug',
      category: 'Mug',
      price: '$19.99',
      imageSrc: '/images/products/mug-1.jpg',
      externalUrl: 'https://www.teepublic.com/user/flowersluxe',
      isNew: true
    },
    {
      title: 'Botanical Dreams Art Print',
      category: 'Art Print',
      price: '$15.99',
      imageSrc: '/images/products/art-1.jpg',
      externalUrl: 'https://www.teepublic.com/user/flowersluxe'
    },
  ]

  // Mock data for blog posts
  const blogPosts = [
    {
      title: 'How to Style Floral Throw Pillows in Your Living Room',
      excerpt: 'Learn the art of incorporating beautiful floral throw pillows to bring life and color to your living space.',
      slug: 'style-floral-throw-pillows',
      imageSrc: '/images/blog/blog-1.jpg',
      date: 'Nov 5, 2024',
      readTime: '5 min read',
      category: 'Decor Tips'
    },
    {
      title: 'The Meaning Behind Different Flower Patterns',
      excerpt: 'Discover the symbolic meanings and cultural significance behind popular flower patterns used in home decor.',
      slug: 'flower-patterns-meaning',
      imageSrc: '/images/blog/blog-2.jpg',
      date: 'Oct 28, 2024',
      readTime: '8 min read',
      category: 'Flower Symbolism'
    },
    {
      title: 'DIY: Creating a Floral Themed Workspace',
      excerpt: 'Transform your workspace with these creative ideas for incorporating floral elements that boost productivity.',
      slug: 'floral-themed-workspace',
      imageSrc: '/images/blog/blog-3.jpg',
      date: 'Oct 15, 2024',
      readTime: '6 min read',
      category: 'DIY Projects'
    },
  ]



  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-surface-muted overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute w-96 h-96 -top-12 -right-12 bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute w-96 h-96 top-1/2 -left-48 bg-primary/5 rounded-full blur-3xl" />
          
          <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-primary/30 rounded-full" />
          <div className="absolute top-1/3 right-1/3 w-6 h-6 bg-primary/20 rounded-full" />
          <div className="absolute bottom-1/4 left-1/2 w-8 h-8 bg-primary/10 rounded-full" />
          
          <div className="subtle-pattern absolute inset-0 opacity-30" />
        </div>
        
        <div className="container-custom relative min-h-[600px] md:min-h-[700px] flex flex-col md:flex-row items-center py-16 md:py-24">
          <div className="w-full md:w-1/2 mb-12 md:mb-0 md:pr-12 z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center bg-white px-3 py-1.5 rounded-full text-sm font-medium text-primary shadow-spotlight mb-6">
                <span className="flex h-2 w-2 mr-2">
                  <span className="animate-ping absolute h-2 w-2 rounded-full bg-primary opacity-75"></span>
                  <span className="relative rounded-full h-2 w-2 bg-primary"></span>
                </span>
                  Floral Designs
              </div>
              
              <h1 className="font-cormorant text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
                Beautiful <span className="text-primary relative">
                  Floral
                  <svg className="absolute -bottom-1 left-0 w-full h-2 text-primary/20" viewBox="0 0 200 8" fill="currentColor">
                    <path d="M1 5.53a54.53 54.53 0 0 0 33.16-1.14c10.31-3.27 20.05-8.14 30.33-11.46 10.28-3.32 21.16-5.4 31.96-3.14s21.4 8.24 30.23 16.26c2.89 2.6 5.8 5.43 9.33 7.12 3.53 1.7 7.86 2.1 11.27.16 2.8-1.58 4.62-4.45 6.59-7.02C161.1.59 168.77-1.77 175.49.95c5.19 2.1 9.16 6.3 13.8 9.4 4.63 3.1 14.96 7.9 14.96 7.9.71.36 16.62 5.65 16.62 5.65" stroke="currentColor" strokeWidth="2" fill="none" />
                  </svg>
                </span>
                <br />Designs for Every Space
              </h1>
              
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Discover unique floral artworks on premium products. From cozy throw pillows to eye-catching stickers, bring natural beauty into your everyday life.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Link href="/shop" className="btn-primary">
                  Browse Collection
                </Link>
                <Link href="/blog" className="btn-outline">
                  Read Our Blog
                </Link>
              </div>
            </motion.div>
          </div>
          
          <motion.div 
            className="w-full md:w-1/2 relative z-10"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
        <div className="relative h-[400px] md:h-[500px] w-full rounded-2xl overflow-hidden shadow-elevated border border-white/80">
  {/* Mobile image (smaller file) */}
  <div className="md:hidden">
  <Image
    src="/images/flowers-luxe-hero-image-mobile.webp"
    alt="FlowersLuxe - Beautiful floral designs on premium products"
    fill
    priority={true}
    className="object-cover"
    sizes="(max-width: 768px) 100vw, 50vw"
  />
        
  {/* Desktop image */}
  <div className="hidden md:block">
    <Image
      src="/images/flowers-luxe-hero-image.webp"
      alt="FlowersLuxe - Beautiful floral designs on premium products"
      fill
      priority={true}
      className="object-cover"
      sizes="50vw"
    />
  </div>
  
  {/* Decorative gradient overlays */}
  <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 via-transparent to-transparent mix-blend-overlay" />
  <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-primary/10 mix-blend-overlay" />
</div>
               
           
            {/* Stats floating element */}
            <div className="hidden md:block absolute -top-6 -right-6 bg-white backdrop-blur-sm rounded-2xl shadow-elevated p-4 border border-border">
              <div className="flex gap-4">
                <div className="text-center">
                  <span className="text-3xl font-cormorant font-bold text-gray-900">7</span>
                  <p className="text-xs text-gray-600 mt-1">Categories</p>
                </div>
                <div className="text-center">
                  <span className="text-3xl font-cormorant font-bold text-gray-900">100+</span>
                  <p className="text-xs text-gray-600 mt-1">Products</p>
                </div>
                <div className="text-center">
                  <span className="text-3xl font-cormorant font-bold text-primary">5★</span>
                  <p className="text-xs text-gray-600 mt-1">Rated</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        
        {/* Brand features */}
        <div className="container-custom pb-16 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-subtle border border-border flex items-start gap-4">
              <div className="bg-primary/10 p-3 rounded-lg text-primary">
                <ShoppingBag size={24} />
              </div>
              <div>
                <h3 className="font-cormorant text-lg font-semibold mb-1">Premium Quality</h3>
                <p className="text-gray-600 text-sm">Designs on high-quality products made to last</p>
              </div>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-subtle border border-border flex items-start gap-4">
              <div className="bg-primary/10 p-3 rounded-lg text-primary">
                <TrendingUp size={24} />
              </div>
              <div>
                <h3 className="font-cormorant text-lg font-semibold mb-1">Always Trending</h3>
                <p className="text-gray-600 text-sm">Fresh, seasonal designs that keep up with the latest trends</p>
              </div>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-subtle border border-border flex items-start gap-4">
              <div className="bg-primary/10 p-3 rounded-lg text-primary">
                <BookOpen size={24} />
              </div>
              <div>
                <h3 className="font-cormorant text-lg font-semibold mb-1">Expert Resources</h3>
                <p className="text-gray-600 text-sm">Styling ideas, care guides, and inspiration in our blog</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20 md:py-28">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row justify-between items-center mb-10 md:mb-14">
            <div>
              <h2 className="font-cormorant text-3xl md:text-4xl font-bold mb-2">Browse Categories</h2>
              <p className="text-gray-600">
                Explore our diverse collection of floral designs across various product categories
              </p>
            </div>
            <Link href="/shop" className="mt-4 md:mt-0 inline-flex items-center text-primary font-medium hover:underline">
              <span>View all categories</span>
              <ChevronRight size={16} className="ml-1" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {categories.slice(0, 4).map((category) => (
              <CategoryCard
                key={category.slug}
                title={category.title}
                slug={category.slug}
                imageSrc={category.imageSrc}
                count={category.count}
              />
            ))}
          </div>
          
          <div className="mt-12 flex justify-center">
            <Link href="/shop" className="btn-secondary inline-flex items-center gap-2">
              <span>View All Categories</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-20 md:py-28 bg-surface-muted">
        <div className="container-custom">
          <div className="text-center mb-10 md:mb-14">
            <h2 className="font-cormorant text-3xl md:text-4xl font-bold mb-3">Featured Products</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover our most popular floral designs loved by customers worldwide. Each product is crafted with attention to detail and artistic flair.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product, index) => (
              <ProductCard
                key={index}
                title={product.title}
                category={product.category}
                price={product.price}
                imageSrc={product.imageSrc}
                externalUrl={product.externalUrl}
                isNew={product.isNew}
              />
            ))}
          </div>
          
          <div className="mt-12 flex justify-center">
            <Link href="/shop" className="btn-primary inline-flex items-center gap-2">
              <span>Shop All Products</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Promotional Banner */}
      <section className="py-16">
        <div className="container-custom">
          <div className="relative overflow-hidden rounded-2xl">
            <div className="absolute inset-0">
              <Image
                src="/images/promo-banner.jpg"
                alt="Promotional banner"
                fill
                className="object-cover"
                sizes="100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/60" />
            </div>
            
            <div className="relative py-16 px-6 md:px-12 lg:px-16 flex flex-col md:flex-row items-center">
              <div className="md:w-2/3 mb-8 md:mb-0 text-white">
                <h2 className="font-cormorant text-3xl md:text-4xl font-bold mb-4">Bring Nature Indoors with Our Floral Designs</h2>
                <p className="text-white/90 mb-6 max-w-lg">
                  Transform your space with our premium floral products. Shop now on our TeePublic store and enjoy exclusive discounts on selected items.
                </p>
                <a 
                  href="https://www.teepublic.com/user/flowersluxe" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-white text-primary hover:bg-gray-100 font-medium py-2.5 px-6 rounded-md transition-all duration-300"
                >
                  <span>Visit TeePublic Store</span>
                  <ExternalLink size={16} className="ml-2" />
                </a>
              </div>
              
              <div className="md:w-1/3 flex justify-center">
                <div className="relative h-40 w-40 md:h-60 md:w-60">
                  <div className="absolute top-0 right-0 bottom-0 left-0 border-8 border-white/30 rounded-full rotate-45" />
                  <div className="absolute top-5 right-5 bottom-5 left-5 border-8 border-white/20 rounded-full -rotate-12" />
                  <div className="absolute top-10 right-10 bottom-10 left-10 border-8 border-white/40 rounded-full rotate-30" />
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-full p-4 shadow-lg">
                    <div className="text-primary font-bold text-4xl font-cormorant leading-none">25%</div>
                    <div className="text-primary text-xs font-medium">OFF</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row justify-between items-center mb-10 md:mb-14">
            <div>
              <h2 className="font-cormorant text-3xl md:text-4xl font-bold mb-2">From Our Blog</h2>
              <p className="text-gray-600">
               Discover expert articles on flowers, design trends, decor tips, and more
              </p>
            </div>
            <Link href="/blog" className="mt-4 md:mt-0 inline-flex items-center text-primary font-medium hover:underline">
              <span>View all articles</span>
              <ChevronRight size={16} className="ml-1" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {blogPosts.map((post) => (
              <BlogCard
                key={post.slug}
                title={post.title}
                excerpt={post.excerpt}
                slug={post.slug}
                imageSrc={post.imageSrc}
                date={post.date}
                readTime={post.readTime}
                category={post.category}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 md:py-28 bg-surface-muted">
        <div className="container-custom">
          <div className="bg-white rounded-2xl shadow-elevated border border-border p-8 md:p-12">
            <div className="max-w-3xl mx-auto text-center">
              <span className="bg-primary/10 text-primary text-sm font-medium px-4 py-1.5 rounded-full inline-block mb-4">Subscribe</span>
              <h2 className="font-cormorant text-3xl md:text-4xl font-bold mb-4">
                Join Our Floral Community
              </h2>
              <p className="text-gray-600 mb-8">
                Subscribe to our newsletter for exclusive offers, new product announcements, and floral inspiration to transform your space.
              </p>
              
              <form className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto" onSubmit={handleSubscribe}>
                <input
                  type="email"
                  placeholder="Your email address"
                  className="flex-grow px-4 py-3 rounded-md border border-border focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={submitting}
                />
                <button
                  type="submit"
                  className={`btn-primary whitespace-nowrap ${submitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                  disabled={submitting}
                >
                  {submitting ? 'Subscribing...' : 'Subscribe'}
                </button>
              </form>
              
              {/* Status message */}
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
