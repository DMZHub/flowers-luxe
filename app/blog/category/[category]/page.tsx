"use client"
import React from 'react'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { FiCalendar, FiClock, FiTag, FiArrowRight, FiArrowLeft } from 'react-icons/fi'
import Breadcrumbs from '../../../../components/Breadcrumbs'
import { blogCategories } from '../../../../data/blogCategories'
import { getBlogPostsByCategory } from '../../../../data/blogPosts'

interface BlogCategoryPageProps {
  params: Promise<{
    category: string
  }>
}

export default function BlogCategoryPage({ params }: BlogCategoryPageProps) {
  const resolvedParams = React.use(params)
  
  // Find the category
  const category = blogCategories.find(cat => cat.slug === resolvedParams.category)
  
  if (!category) {
    notFound()
  }

  // Get posts for this category
  const categoryPosts = getBlogPostsByCategory(category.slug)

  const breadcrumbItems = [
    { name: 'Blog', url: '/blog' },
    { name: category.name, url: `/blog/category/${category.slug}` }
  ]

  return (
    <>
      {/* Breadcrumbs */}
      <div className="container-custom">
        <Breadcrumbs items={breadcrumbItems} />
      </div>

      {/* Category Header */}
      <section className="bg-surface-muted py-12 md:py-16 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute w-96 h-96 -top-48 -right-48 bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute w-64 h-64 bottom-0 left-1/4 bg-primary/5 rounded-full blur-2xl" />
          <div className="subtle-pattern absolute inset-0 opacity-30" />
        </div>

        <div className="container-custom relative">
          <div className="max-w-3xl mx-auto text-center">
            <div className="mb-6">
              <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full ${category.color} mb-4`}>
                <span className="font-bold text-2xl">
                  {category.count}
                </span>
              </div>
            </div>
            
            <h1 className="font-cormorant text-4xl md:text-5xl font-bold mb-4">
              {category.name}
            </h1>
            <p className="text-gray-600 text-lg mb-8">
              {category.description}. Discover expert insights and practical tips to enhance your home with beautiful floral designs.
            </p>
            
            <Link 
              href="/blog"
              className="inline-flex items-center gap-2 text-primary hover:text-primary-dark font-medium"
            >
              <FiArrowLeft size={16} />
              <span>Back to All Articles</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Category Posts */}
      <section className="py-16 md:py-24">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            {categoryPosts.length > 0 ? (
              <>
                <div className="text-center mb-12">
                  <h2 className="font-cormorant text-3xl font-bold mb-4">
                    {category.name} Articles
                  </h2>
                  <p className="text-gray-600">
                    {categoryPosts.length} article{categoryPosts.length !== 1 ? 's' : ''} in this category
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {categoryPosts.map((post, index) => (
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
                            <div className="flex items-center gap-4 mb-3 text-sm text-gray-500">
                              <div className="flex items-center gap-1">
                                <FiCalendar size={14} />
                                <span>{post.date}</span>
                              </div>
                              <div className="flex items-center gap-1">
                                <FiClock size={14} />
                                <span>{post.readTime}</span>
                              </div>
                            </div>
                            
                            <h3 className="font-cormorant text-xl font-semibold mb-3 group-hover:text-primary transition-colors line-clamp-2">
                              {post.title}
                            </h3>
                            
                            <p className="text-gray-600 mb-4 line-clamp-3">
                              {post.excerpt}
                            </p>
                            
                            <div className="flex items-center text-primary font-medium text-sm group-hover:gap-2 transition-all">
                              <span>Read Article</span>
                              <FiArrowRight size={14} className="ml-1 group-hover:translate-x-1 transition-transform" />
                            </div>
                          </div>
                        </div>
                      </Link>
                    </motion.article>
                  ))}
                </div>
              </>
            ) : (
              <div className="text-center py-16">
                <div className="text-gray-400 mb-4">
                  <FiTag size={48} className="mx-auto" />
                </div>
                <h3 className="text-xl font-medium mb-2">No articles yet</h3>
                <p className="text-gray-500 mb-6">
                  We're working on articles for this category. Check back soon!
                </p>
                <Link href="/blog" className="btn-primary">
                  Browse All Articles
                </Link>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Other Categories */}
      <section className="py-16 bg-surface-muted">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-cormorant text-3xl font-bold mb-4">Explore Other Categories</h2>
              <p className="text-gray-600">
                Discover more articles across different topics
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {blogCategories
                .filter(cat => cat.slug !== category.slug)
                .slice(0, 4)
                .map((otherCategory) => (
                  <Link
                    key={otherCategory.slug}
                    href={`/blog/category/${otherCategory.slug}`}
                    className="group"
                  >
                    <div className="bg-white rounded-lg p-4 text-center hover:shadow-md transition-all duration-300 border border-gray-100">
                      <div className={`inline-flex items-center justify-center w-12 h-12 rounded-full ${otherCategory.color} mb-3 group-hover:scale-110 transition-transform`}>
                        <span className="font-bold text-lg">
                          {otherCategory.count}
                        </span>
                      </div>
                      <h3 className="font-medium text-sm group-hover:text-primary transition-colors">
                        {otherCategory.name}
                      </h3>
                    </div>
                  </Link>
                ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

// Generate static params for all blog categories - ADD THIS FUNCTION
export async function generateStaticParams() {
  const { blogCategories } = await import('../../../../data/blogCategories')
  
  return blogCategories.map((category) => ({
    category: category.slug,
  }))
}
