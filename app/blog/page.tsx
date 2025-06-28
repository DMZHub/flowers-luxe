"use client"
import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { FiCalendar, FiClock, FiTag, FiArrowRight } from 'react-icons/fi'
import Breadcrumbs from '../../components/Breadcrumbs'
import { getFeaturedBlogPosts, getRecentBlogPosts } from '../../data/blogPosts'
import { blogCategories } from '../../data/blogCategories'

export default function BlogPage() {
  const featuredPosts = getFeaturedBlogPosts()
  const recentPosts = getRecentBlogPosts()

  const breadcrumbItems = [
    { name: 'Blog', url: '/blog' }
  ]

  return (
    <>
      {/* Breadcrumbs */}
      <div className="container-custom">
        <Breadcrumbs items={breadcrumbItems} />
      </div>

      {/* Blog Header */}
      <section className="bg-surface-muted py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute w-96 h-96 -top-48 -right-48 bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute w-64 h-64 bottom-0 left-1/4 bg-primary/5 rounded-full blur-2xl" />
          <div className="subtle-pattern absolute inset-0 opacity-30" />
        </div>

        <div className="container-custom relative">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-cormorant text-4xl md:text-5xl font-bold mb-4">
              Floral Design Blog
            </h1>
            <p className="text-gray-600 text-lg mb-8">
              Discover expert tips, design inspiration, and care guides for flower throw pillows and floral home décor. 
              Transform your space with beautiful botanical elements.
            </p>
            
            <div className="flex flex-wrap justify-center gap-3">
              <span className="bg-white px-4 py-2 rounded-full text-sm font-medium text-gray-700 shadow-sm">Home Decor</span>
              <span className="bg-white px-4 py-2 rounded-full text-sm font-medium text-gray-700 shadow-sm">Design Tips</span>
              <span className="bg-white px-4 py-2 rounded-full text-sm font-medium text-gray-700 shadow-sm">Care Guides</span>
              <span className="bg-white px-4 py-2 rounded-full text-sm font-medium text-gray-700 shadow-sm">Styling Ideas</span>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="py-16 md:py-24">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="font-cormorant text-3xl font-bold mb-4">Featured Articles</h2>
            <p className="text-gray-600">
              Our most popular and helpful guides for flower throw pillow styling and care
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="group"
              >
                <Link href={`/blog/${post.slug}`}>
                  <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300">
                    <div className="relative h-64 overflow-hidden">
                      <img
                        src={post.imageSrc}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="bg-primary text-white text-xs font-medium py-1 px-3 rounded-full">
                          Featured
                        </span>
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <div className="flex items-center gap-4 mb-3 text-sm text-gray-500">
                        <div className="flex items-center gap-1">
                          <FiCalendar size={14} />
                          <span>{post.date}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <FiClock size={14} />
                          <span>{post.readTime}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <FiTag size={14} />
                          <span>{post.category}</span>
                        </div>
                      </div>
                      
                      <h3 className="font-cormorant text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                        {post.title}
                      </h3>
                      
                      <p className="text-gray-600 mb-4 line-clamp-3">
                        {post.excerpt}
                      </p>
                      
                      <div className="flex items-center text-primary font-medium text-sm group-hover:gap-2 transition-all">
                        <span>Read More</span>
                        <FiArrowRight size={14} className="ml-1 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Posts */}
      <section className="py-16 md:py-24 bg-surface-muted">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="font-cormorant text-3xl font-bold mb-4">Recent Articles</h2>
            <p className="text-gray-600">
              Latest insights and tips for creating beautiful spaces with flower throw pillows
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recentPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <Link href={`/blog/${post.slug}`}>
                  <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300">
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={post.imageSrc}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    
                    <div className="p-6">
                      <div className="flex items-center gap-3 mb-3 text-sm text-gray-500">
                        <div className="flex items-center gap-1">
                          <FiCalendar size={12} />
                          <span>{post.date}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <FiClock size={12} />
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                      
                      <span className="bg-gray-100 text-gray-700 text-xs font-medium py-1 px-2 rounded mb-3 inline-block">
                        {post.category}
                      </span>
                      
                      <h3 className="font-cormorant text-lg font-semibold mb-3 group-hover:text-primary transition-colors line-clamp-2">
                        {post.title}
                      </h3>
                      
                      <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                        {post.excerpt}
                      </p>
                      
                      <div className="flex items-center text-primary font-medium text-sm group-hover:gap-2 transition-all">
                        <span>Read Article</span>
                        <FiArrowRight size={12} className="ml-1 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Subscription */}
      <section className="py-16 md:py-24">
        <div className="container-custom">
          <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl p-8 md:p-12">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="font-cormorant text-3xl font-bold mb-4">
                Never Miss a Design Tip
              </h2>
              <p className="text-gray-600 mb-8">
                Subscribe to our newsletter for the latest decorating ideas, styling tips, and exclusive flower throw pillow insights delivered to your inbox.
              </p>
              
              <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="flex-grow px-4 py-3 rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                  required
                />
                <button
                  type="submit"
                  className="btn-primary whitespace-nowrap"
                >
                  Subscribe
                </button>
              </form>
              
              <p className="text-sm text-gray-500 mt-4">
                Join 1,000+ subscribers • Unsubscribe anytime
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 bg-surface-muted">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="font-cormorant text-3xl font-bold mb-4">Browse by Category</h2>
            <p className="text-gray-600">
              Find articles that match your specific interests and needs
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {blogCategories.map((category) => (
              <Link
                key={category.slug}
                href={`/blog/category/${category.slug}`}
                className="group"
              >
                <div className="bg-white rounded-lg p-4 text-center hover:shadow-md transition-all duration-300 border border-gray-100">
                  <div className={`inline-flex items-center justify-center w-12 h-12 rounded-full ${category.color} mb-3 group-hover:scale-110 transition-transform`}>
                    <span className="font-bold text-lg">
                      {category.count}
                    </span>
                  </div>
                  <h3 className="font-medium text-sm group-hover:text-primary transition-colors mb-2">
                    {category.name}
                  </h3>
                  <p className="text-xs text-gray-500 line-clamp-1">
                    {category.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
