"use client"
import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { FiHome, FiShoppingBag, FiBookOpen, FiMail, FiInfo, FiExternalLink } from 'react-icons/fi'
import Breadcrumbs from '../../components/Breadcrumbs'
import { products } from '../../data/products'
import { blogCategories } from '../../data/blogCategories'
import { blogPosts } from '../../data/blogPosts'

export default function SitemapPage() {
  const breadcrumbItems = [
    { name: 'Sitemap', url: '/sitemap' }
  ]

  // Organize products by style for the sitemap
  const productsByStyle = products.reduce((acc, product) => {
    if (!acc[product.style]) {
      acc[product.style] = []
    }
    acc[product.style].push(product)
    return acc
  }, {} as Record<string, typeof products>)

  const mainPages = [
    { name: 'Home', url: '/', icon: FiHome, description: 'Premium flower throw pillows and floral home decor' },
    { name: 'Shop All Pillows', url: '/shop', icon: FiShoppingBag, description: 'Browse our complete collection with filters and search' },
    { name: 'Flower Throw Pillows', url: '/flower-throw-pillows', icon: FiShoppingBag, description: 'Explore all styles and categories' },
    { name: 'Blog', url: '/blog', icon: FiBookOpen, description: 'Design tips, styling guides, and home decor inspiration' },
    { name: 'About Us', url: '/about', icon: FiInfo, description: 'Learn about our story and commitment to quality' },
    { name: 'Contact', url: '/contact', icon: FiMail, description: 'Get in touch with our customer service team' }
  ]

  const styleCategories = [
    { name: 'Vintage Style', slug: 'vintage', description: 'Timeless botanical designs with classic charm' },
    { name: 'Modern Style', slug: 'modern', description: 'Contemporary floral patterns for today\'s homes' },
    { name: 'Boho Style', slug: 'boho', description: 'Free-spirited designs with artistic flair' },
    { name: 'Farmhouse Style', slug: 'farmhouse', description: 'Rustic charm meets floral elegance' },
    { name: 'Abstract Style', slug: 'abstract', description: 'Artistic interpretations of botanical elements' },
    { name: 'Watercolor Style', slug: 'watercolor', description: 'Soft, dreamy floral designs' },
    { name: 'Floral Style', slug: 'floral', description: 'Classic flower patterns in rich detail' }
  ]

  const blogPosts = [
    { title: 'How to Style Flower Throw Pillows in Your Living Room', slug: 'how-to-style-flower-throw-pillows-living-room' },
    { title: 'The Psychology of Floral Patterns in Home Design', slug: 'psychology-floral-patterns-home-design' },
    { title: 'Seasonal Decorating with Flower Throw Pillows', slug: 'seasonal-decorating-flower-throw-pillows' },
    { title: 'Mixing Patterns: A Guide to Combining Floral Designs', slug: 'mixing-patterns-guide-floral-designs' },
    { title: 'Care and Maintenance for Your Flower Throw Pillows', slug: 'care-maintenance-flower-throw-pillows' },
    { title: 'Creating a Cozy Reading Nook with Floral Accents', slug: 'cozy-reading-nook-floral-accents' }
  ]

  const legalPages = [
    { name: 'Privacy Policy', url: '/privacy-policy' },
    { name: 'Terms & Conditions', url: '/terms-conditions' }
  ]

  return (
    <>
      {/* Breadcrumbs */}
      <div className="container-custom">
        <Breadcrumbs items={breadcrumbItems} />
      </div>

      {/* Header */}
      <section className="bg-surface-muted py-12 md:py-16 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute w-96 h-96 -top-48 -right-48 bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute w-64 h-64 bottom-0 left-1/4 bg-primary/5 rounded-full blur-2xl" />
          <div className="subtle-pattern absolute inset-0 opacity-30" />
        </div>

        <div className="container-custom relative">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-cormorant text-4xl md:text-5xl font-bold mb-4">
              Site Map
            </h1>
            <p className="text-gray-600 text-lg">
              Find everything on FlowersLuxe easily. Browse our complete collection of flower throw pillows, 
              design inspiration, and helpful resources.
            </p>
          </div>
        </div>
      </section>

      {/* Sitemap Content */}
      <section className="py-12 md:py-16">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto">
            
            {/* Main Pages */}
            <div className="mb-16">
              <h2 className="font-cormorant text-3xl font-bold mb-8">Main Pages</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {mainPages.map((page, index) => (
                  <motion.div
                    key={page.url}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Link href={page.url} className="group">
                      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 group-hover:border-primary/20">
                        <div className="flex items-start gap-4">
                          <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                            <page.icon className="text-primary" size={20} />
                          </div>
                          <div>
                            <h3 className="font-cormorant text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                              {page.name}
                            </h3>
                            <p className="text-gray-600 text-sm">
                              {page.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Product Categories */}
            <div className="mb-16">
              <h2 className="font-cormorant text-3xl font-bold mb-8">Product Categories</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {styleCategories.map((category, index) => {
                  const styleProducts = productsByStyle[category.slug] || []
                  return (
                    <motion.div
                      key={category.slug}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <Link href={`/flower-throw-pillows/${category.slug}`} className="group">
                        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 group-hover:border-primary/20">
                          <h3 className="font-cormorant text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                            {category.name}
                          </h3>
                          <p className="text-gray-600 text-sm mb-3">
                            {category.description}
                          </p>
                          <span className="text-primary text-sm font-medium">
                            {styleProducts.length} designs available
                          </span>
                        </div>
                      </Link>
                    </motion.div>
                  )
                })}
              </div>
            </div>

        
            {/* Blog Categories */}
            <div className="mb-16">
              <h2 className="font-cormorant text-3xl font-bold mb-8">Blog Categories</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {blogCategories.map((category, index) => (
                  <motion.div
                    key={category.slug}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Link href={`/blog/category/${category.slug}`} className="group">
                      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 group-hover:border-primary/20">
                        <div className="flex items-center gap-3 mb-3">
                          <div className={`w-10 h-10 rounded-full ${category.color} flex items-center justify-center text-sm font-bold group-hover:scale-110 transition-transform`}>
                            {category.count}
                          </div>
                          <h3 className="font-cormorant text-lg font-semibold group-hover:text-primary transition-colors">
                            {category.name}
                          </h3>
                        </div>
                        <p className="text-gray-600 text-sm">
                          {category.description}
                        </p>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Legal Pages */}
            <div>
              <h2 className="font-cormorant text-3xl font-bold mb-8">Legal & Support</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {legalPages.map((page, index) => (
                  <motion.div
                    key={page.url}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Link href={page.url} className="group">
                      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 group-hover:border-primary/20">
                        <h3 className="font-cormorant text-xl font-semibold group-hover:text-primary transition-colors">
                          {page.name}
                        </h3>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>

            
          </div>
        </div>
      </section>
    </>
  )
}