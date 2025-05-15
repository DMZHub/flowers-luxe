"use client"
import React, { useState, FormEvent } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Search, Tag, Calendar, Clock, ChevronRight, CheckCircle, AlertCircle } from 'lucide-react'
import BlogCard from '@/components/BlogCard'
import emailjs from 'emailjs-com'

export default function BlogPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [activeCategory, setActiveCategory] = useState('All')
  
  // Newsletter state
  const [newsletterStatus, setNewsletterStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')
  const [newsletterEmail, setNewsletterEmail] = useState('')
  
  // EmailJS credentials
  const serviceID = "service_yjfk3dq"
  const templateID = "template_jkea55x" 
  const publicKey = "p_xEzMpgucBUYxDyC"

  // Mock data for blog posts
  const blogPosts = [
    {
      title: 'Magnolia Flower Meaning and Symbolism Explained',
      excerpt: 'Learn why magnolias are symbols of grace and endurance across the world. Read on to explore the rich meanings and cultural importance of these iconic blooms.',
      slug: 'Magnolia-Flower-Meaning',
      imageSrc: '/images/blog/magnolia-flower-white-pink-yellow-purple-symbolism.webp',
      date: 'April 18, 2025',
      readTime: '12 min read',
      category: 'Flower Meanings',
    },
    { 
     title: 'Top 4 Custom Cat Gifts for Cat Lovers - Personalized & Unique Ideas for 2025',
     excerpt: 'Discover the purr-fect personalized gifts for cat lovers! Explore unique custom cat pillows, mugs, stickers, and tote bags to celebrate their furry friends in style for 2025.',
     slug: 'custom-cat-gifts-for-cat-lovers',
      imageSrc: '/images/blog/top-4-custom-cat-gifts-for-cat-lovers-custom-cat-pillow-and-mug-sticker-tote-bag-ersonalized-&-unique-ideas.webp',
      date: 'May 15, 2025',
      readTime: '5 min read',
      category: 'Gift Ideas', 
      featured: true
    },
     { 
     title: ' Cat Dad Mug - Unique Personalized Gift for Cat‑Loving Dads',
     excerpt: 'Discover the perfect gift for cat-loving fathers with our personalized Cat Dad Mug. This custom ceramic mug features your cats name and a playful fist-bump design that celebrates the special bond between dads and their feline friends.',
     slug: 'cat-dad-mug-unique-personalized-gift-for-cat-loving-dads',
      imageSrc: '/images/blog/cat-dad-mug-unique-personalized-gift-for-cat-loving-dads.webp',
      date: 'May 15, 2025',
      readTime: '5 min read',
      category: 'Gift Ideas', 
     
    },
  ]

  // Handle newsletter subscription
  const handleNewsletterSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setNewsletterStatus('sending')

    // Create template params for newsletter signup
    const templateParams = {
      to_name: "Admin",
      from_name: "Blog Newsletter Subscriber",
      email: newsletterEmail,
      subject: 'Blog Newsletter Subscription',
      message: `New blog newsletter subscription from ${newsletterEmail}`
    }

    // Log the attempt
    console.log('Attempting to send blog newsletter subscription for:', newsletterEmail)
    
    // Use emailjs.send directly with the parameters
    emailjs.send(serviceID, templateID, templateParams, publicKey)
      .then((result) => {
        console.log('Blog newsletter subscription sent successfully:', result.text)
        setNewsletterStatus('success')
      })
      .catch((error) => {
        console.error('Error sending blog newsletter subscription:', error)
        setNewsletterStatus('error')
      })
  }

  const resetNewsletterForm = () => {
    setNewsletterEmail('')
    setNewsletterStatus('idle')
  }

  // Extract all unique categories from blog posts
  const allCategories = ['All', ...new Set(blogPosts.map(post => post.category))]

  // Filter posts based on search query and active category
  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          post.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
    
    const matchesCategory = activeCategory === 'All' || post.category === activeCategory
    
    return matchesSearch && matchesCategory
  })

  // Get featured post (if any)
  const featuredPost = blogPosts.find(post => post.featured)

  return (
    <>
      {/* Blog Header */}
      <section className="bg-surface-muted py-16 md:py-24 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute w-96 h-96 -top-48 -right-48 bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute w-64 h-64 bottom-0 left-1/4 bg-primary/5 rounded-full blur-2xl" />
          <div className="subtle-pattern absolute inset-0 opacity-30" />
        </div>

        <div className="container-custom relative">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-cormorant text-4xl md:text-5xl font-bold mb-4">
              FlowersLuxe Blog
            </h1>
            <p className="text-gray-600 text-lg mb-8">
              Discover floral design inspiration, care tips, and creative ideas to elevate your space with beautiful blooms.
            </p>
            
            <div className="relative max-w-xl mx-auto">
              <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
                <Search size={18} className="text-gray-400" />
              </div>
              <input
                type="text"
                className="w-full py-3 pl-12 pr-4 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 border-b border-gray-100">
        <div className="container-custom">
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-hide">
            <span className="flex-shrink-0 text-gray-500 flex items-center mr-2">
              <Tag size={16} className="mr-1" />
              Categories:
            </span>
            {allCategories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`flex-shrink-0 px-4 py-1.5 rounded-full text-sm font-medium transition-all ${
                  activeCategory === category
                    ? 'bg-primary text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post (if exists) */}
      {featuredPost && (
        <section className="py-12">
          <div className="container-custom">
            <div className="flex items-center gap-2 mb-8">
              <span className="bg-primary/10 text-primary text-sm font-medium px-3 py-1 rounded-full">Featured</span>
              <h2 className="font-cormorant text-2xl font-semibold">Latest from our blog</h2>
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="relative h-64 md:h-auto">
                  <Image
                    src={featuredPost.imageSrc}
                    alt={featuredPost.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority
                  />
                </div>
                <div className="p-6 md:p-8 flex flex-col">
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                    <div className="flex items-center gap-1">
                      <Calendar size={14} />
                      <span>{featuredPost.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock size={14} />
                      <span>{featuredPost.readTime}</span>
                    </div>
                    <span className="bg-gray-100 px-2 py-0.5 rounded-full text-xs font-medium text-gray-600">
                      {featuredPost.category}
                    </span>
                  </div>
                  
                  <h2 className="font-cormorant text-2xl md:text-3xl font-bold mb-4">
                    {featuredPost.title}
                  </h2>
                  
                  <p className="text-gray-600 mb-6 flex-grow">
                    {featuredPost.excerpt}
                  </p>
                  
                  <Link
                    href={`/blog/${featuredPost.slug}`}
                    className="inline-flex items-center text-primary font-medium"
                  >
                    <span>Read article</span>
                    <ChevronRight size={16} className="ml-1 group-hover:ml-2 transition-all" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Blog Posts Grid */}

<section className="py-12 md:py-16" aria-labelledby="blog-posts-heading">
  <div className="container-custom">
    <div className="mb-8">
      <h2 id="blog-posts-heading" className="font-cormorant text-2xl md:text-3xl font-bold">
        All Articles {activeCategory !== 'All' && <span>in <span className="text-primary">{activeCategory}</span></span>}
      </h2>
      <p className="text-gray-500 mt-2" aria-live="polite">
        {filteredPosts.length} articles {searchQuery && `matching "${searchQuery}"`}
      </p>
    </div>

    {filteredPosts.length > 0 ? (
      <div role="feed" aria-label="Blog posts" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredPosts.map((post) => (
          <motion.article
            key={post.slug}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <BlogCard
              title={post.title}
              excerpt={post.excerpt}
              slug={post.slug}
              imageSrc={post.imageSrc}
              date={post.date}
              readTime={post.readTime}
              category={post.category}
            />
          </motion.article>
        ))}
      </div>
    ) : (
      <div className="text-center py-16" role="status">
        <div className="text-gray-400 mb-4">
          <Search size={48} className="mx-auto" aria-hidden="true" />
        </div>
        <h3 className="text-xl font-medium mb-2">No articles found</h3>
        <p className="text-gray-500 mb-6">
          We couldn't find any articles matching your search criteria.
        </p>
        <button
          onClick={() => {
            setSearchQuery('')
            setActiveCategory('All')
          }}
          className="btn-secondary inline-flex"
        >
          Clear filters
        </button>
      </div>
    )}
  </div>
</section>
      {/* Newsletter Section */}
      <section className="py-16 bg-surface-muted">
        <div className="container-custom">
          <div className="bg-white rounded-2xl shadow-elevated border border-border p-8 md:p-12">
            <div className="max-w-3xl mx-auto text-center">
              <span className="bg-primary/10 text-primary text-sm font-medium px-4 py-1.5 rounded-full inline-block mb-4">Newsletter</span>
              <h2 className="font-cormorant text-3xl md:text-4xl font-bold mb-4">
                Subscribe to Our Blog
              </h2>
              <p className="text-gray-600 mb-8">
                Stay updated with our latest articles, floral design inspiration, and exclusive offers delivered straight to your inbox.
              </p>
              
              {newsletterStatus === 'idle' && (
                <form 
                  onSubmit={handleNewsletterSubmit} 
                  className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto"
                >
                  <input
                    type="email"
                    id="blog_newsletter_email"
                    name="email"
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    placeholder="Your email address"
                    className="flex-grow px-4 py-3 rounded-md border border-border focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                    required
                  />
                  <button
                    type="submit"
                    className="bg-primary hover:bg-primary-dark text-white font-medium py-3 px-6 rounded-lg transition-colors whitespace-nowrap"
                  >
                    Subscribe
                  </button>
                </form>
              )}
              
              {newsletterStatus === 'sending' && (
                <div className="bg-blue-50 border border-blue-100 rounded-lg p-6 text-center max-w-lg mx-auto">
                  <div className="animate-pulse">
                    <div className="h-12 w-12 mx-auto mb-4 rounded-full border-4 border-blue-500 border-t-transparent animate-spin"></div>
                  </div>
                  <h4 className="text-xl font-medium text-gray-900 mb-2">Processing subscription...</h4>
                  <p className="text-gray-600">
                    Please wait while we add you to our newsletter.
                  </p>
                </div>
              )}
              
              {newsletterStatus === 'success' && (
                <div className="bg-green-50 border border-green-100 rounded-lg p-6 text-center max-w-lg mx-auto">
                  <CheckCircle size={48} className="text-green-500 mx-auto mb-4" />
                  <h4 className="text-xl font-medium text-gray-900 mb-2">Successfully Subscribed!</h4>
                  <p className="text-gray-600 mb-6">
                    Thank you for subscribing to our blog newsletter. You'll receive updates on our latest articles and promotions.
                  </p>
                  <button
                    onClick={resetNewsletterForm}
                    className="bg-primary hover:bg-primary-dark text-white font-medium py-3 px-6 rounded-lg transition-colors"
                  >
                    Subscribe Another Email
                  </button>
                </div>
              )}
              
              {newsletterStatus === 'error' && (
                <div className="bg-red-50 border border-red-100 rounded-lg p-6 text-center max-w-lg mx-auto">
                  <AlertCircle size={48} className="text-red-500 mx-auto mb-4" />
                  <h4 className="text-xl font-medium text-gray-900 mb-2">Subscription Failed</h4>
                  <p className="text-gray-600 mb-6">
                    We couldn't process your subscription. Please try again or contact us directly.
                  </p>
                  <button
                    onClick={resetNewsletterForm}
                    className="bg-primary hover:bg-primary-dark text-white font-medium py-3 px-6 rounded-lg transition-colors"
                  >
                    Try Again
                  </button>
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
