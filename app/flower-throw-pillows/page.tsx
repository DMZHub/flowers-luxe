"use client"
import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { FiArrowRight, FiHeart, FiStar } from 'react-icons/fi'
import ProductCard from '../../components/ProductCard'
import SchemaMarkup from '../../components/SchemaMarkup'
import Breadcrumbs from '../../components/Breadcrumbs'
import { products, getFeaturedProducts, getProductsByFilters } from '../../data/products'
import { generateCollectionPageSchema } from '../../utils/schema'
import { generateStylePageMetadata } from '../../utils/seo'

export default function FlowerThrowPillowsPage() {
  // Get products by style
  const vintageProducts = getProductsByFilters({ style: 'vintage' })
  const modernProducts = getProductsByFilters({ style: 'modern' })
  const bohoProducts = getProductsByFilters({ style: 'boho' })
  const farmhouseProducts = getProductsByFilters({ style: 'farmhouse' })
  const abstractProducts = getProductsByFilters({ style: 'abstract' })
  const watercolorProducts = getProductsByFilters({ style: 'watercolor' })
  const floralProducts = getProductsByFilters({ style: 'floral' })

  // Get featured products
  const featuredProducts = getFeaturedProducts()

  // Style categories
  const styleCategories = [
    {
      title: 'Vintage Style',
      slug: 'vintage',
      description: 'Timeless botanical designs with classic charm and elegant vintage aesthetics',
      products: vintageProducts,
      gradient: 'from-amber-50 to-orange-50',
      textColor: 'text-amber-700',
      borderColor: 'border-amber-200'
    },
    {
      title: 'Modern Style',
      slug: 'modern',
      description: 'Contemporary floral patterns perfect for today\'s minimalist and modern homes',
      products: modernProducts,
      gradient: 'from-blue-50 to-indigo-50',
      textColor: 'text-blue-700',
      borderColor: 'border-blue-200'
    },
    {
      title: 'Boho Style',
      slug: 'boho',
      description: 'Free-spirited designs with artistic flair and bohemian elegance',
      products: bohoProducts,
      gradient: 'from-purple-50 to-pink-50',
      textColor: 'text-purple-700',
      borderColor: 'border-purple-200'
    },
    {
      title: 'Farmhouse Style',
      slug: 'farmhouse',
      description: 'Rustic charm meets floral beauty in cozy, country-inspired designs',
      products: farmhouseProducts,
      gradient: 'from-green-50 to-emerald-50',
      textColor: 'text-green-700',
      borderColor: 'border-green-200'
    },
    {
      title: 'Abstract Style',
      slug: 'abstract',
      description: 'Artistic interpretations of botanical elements with creative modern flair',
      products: abstractProducts,
      gradient: 'from-rose-50 to-red-50',
      textColor: 'text-rose-700',
      borderColor: 'border-rose-200'
    },
    {
      title: 'Watercolor Style',
      slug: 'watercolor',
      description: 'Soft, dreamy floral designs with gentle watercolor aesthetics',
      products: watercolorProducts,
      gradient: 'from-teal-50 to-cyan-50',
      textColor: 'text-teal-700',
      borderColor: 'border-teal-200'
    },
    {
      title: 'Floral Style',
      slug: 'floral',
      description: 'Classic flower patterns in rich detail and vibrant colors',
      products: floralProducts,
      gradient: 'from-pink-50 to-rose-50',
      textColor: 'text-pink-700',
      borderColor: 'border-pink-200'
    }
  ]

  // Generate schema
  const collectionSchema = generateCollectionPageSchema(products, 'all-styles')
  
  const breadcrumbItems = [
    { name: 'Flower Throw Pillows', url: '/flower-throw-pillows' }
  ]

  return (
    <>
      <SchemaMarkup schema={collectionSchema} />
      
      {/* Breadcrumbs */}
      <div className="container-custom">
        <Breadcrumbs items={breadcrumbItems} />
      </div>

      {/* Header Section */}
      <section className="bg-surface-muted py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute w-96 h-96 -top-48 -right-48 bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute w-64 h-64 bottom-0 left-1/4 bg-primary/5 rounded-full blur-2xl" />
          <div className="subtle-pattern absolute inset-0 opacity-30" />
        </div>

        <div className="container-custom relative">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-cormorant text-4xl md:text-6xl font-bold mb-6 text-gray-900">
              Flower Throw Pillows
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Discover our complete collection of premium flower throw pillows. Each design is handcrafted 
              in America with premium materials, featuring unique botanical patterns across various styles 
              from vintage elegance to modern sophistication.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Link href="/shop" className="btn-primary text-lg px-8 py-4">
                Shop All Pillows
              </Link>
              <Link href="#styles" className="btn-outline text-lg px-8 py-4">
                Browse by Style
                <FiArrowRight className="ml-2" size={20} />
              </Link>
            </div>

            {/* Key Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl mx-auto">
              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-sm border border-white/50">
                <div className="text-2xl font-bold text-primary mb-1">{products.length}+</div>
                <div className="text-sm text-gray-600">Unique Designs</div>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-sm border border-white/50">
                <div className="text-2xl font-bold text-primary mb-1">7</div>
                <div className="text-sm text-gray-600">Style Categories</div>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-sm border border-white/50">
                <div className="text-2xl font-bold text-primary mb-1">100%</div>
                <div className="text-sm text-gray-600">Made in USA</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-16 md:py-24">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="bg-primary/10 text-primary text-sm font-medium px-4 py-1.5 rounded-full inline-block mb-4">Featured Collection</span>
            <h2 className="font-cormorant text-3xl md:text-4xl font-bold mb-4">Customer Favorites</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our most popular flower throw pillows, loved by customers for their exceptional design and quality.
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
        </div>
      </section>

      {/* Style Categories Section */}
      <section id="styles" className="py-16 md:py-24 bg-surface-muted">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="font-cormorant text-3xl md:text-4xl font-bold mb-4">Shop by Style</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore our diverse range of flower throw pillow styles, each crafted to complement different 
              home décor aesthetics and personal preferences.
            </p>
          </div>
          
          <div className="space-y-12">
            {styleCategories.map((category, index) => (
              <motion.div
                key={category.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`bg-gradient-to-br ${category.gradient} rounded-2xl p-8 border ${category.borderColor}`}
              >
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
                  <div className="lg:col-span-1">
                    <h3 className={`font-cormorant text-2xl md:text-3xl font-bold mb-4 ${category.textColor}`}>
                      {category.title}
                    </h3>
                    <p className="text-gray-700 mb-6 leading-relaxed">
                      {category.description}
                    </p>
                    
                    <div className="flex items-center gap-4 mb-6">
                     
                      <div className="flex items-center gap-1">
                        <FiHeart className="text-red-500" size={16} />
                        <span className="text-sm">{category.products.length} designs</span>
                      </div>
                    </div>
                    
                    <Link 
                      href={`/flower-throw-pillows/${category.slug}`}
                      className="inline-flex items-center gap-2 bg-white text-gray-900 font-medium py-3 px-6 rounded-lg shadow-sm hover:shadow-md transition-all border border-gray-200 hover:border-gray-300"
                    >
                      <span>Shop {category.title}</span>
                      <FiArrowRight size={16} />
                    </Link>
                  </div>
                  
                  <div className="lg:col-span-2">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {category.products.slice(0, 2).map((product) => (
                        <ProductCard
                          key={product.id}
                          product={product}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Pillows Section */}
      <section className="py-16 md:py-24">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-cormorant text-3xl md:text-4xl font-bold mb-4">Why Choose Our Flower Throw Pillows</h2>
              <p className="text-gray-600">
                Discover what makes our flower throw pillows the perfect choice for your home
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-primary font-bold">✓</span>
                  </div>
                  <div>
                    <h3 className="font-cormorant text-xl font-semibold mb-2">Premium Materials</h3>
                    <p className="text-gray-600">Double-sided textured poly twill fabric that's soft, durable, and machine washable for long-lasting beauty.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-primary font-bold">✓</span>
                  </div>
                  <div>
                    <h3 className="font-cormorant text-xl font-semibold mb-2">Handcrafted in America</h3>
                    <p className="text-gray-600">Each pillow is individually cut and sewn by hand in the USA, ensuring exceptional quality and supporting local artisans.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-primary font-bold">✓</span>
                  </div>
                  <div>
                    <h3 className="font-cormorant text-xl font-semibold mb-2">Complete Package</h3>
                    <p className="text-gray-600">Includes concealed zipper and synthetic insert - everything you need for instant home comfort and style.</p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-primary font-bold">✓</span>
                  </div>
                  <div>
                    <h3 className="font-cormorant text-xl font-semibold mb-2">Unique Designs</h3>
                    <p className="text-gray-600">Exclusive botanical patterns you won't find anywhere else, designed specifically for our collection.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-primary font-bold">✓</span>
                  </div>
                  <div>
                    <h3 className="font-cormorant text-xl font-semibold mb-2">Multiple Sizes</h3>
                    <p className="text-gray-600">Available in various sizes to fit all your decorating needs, from accent pieces to statement cushions.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-primary font-bold">✓</span>
                  </div>
                  <div>
                    <h3 className="font-cormorant text-xl font-semibold mb-2">Quality Guarantee</h3>
                    <p className="text-gray-600">We maintain the highest quality standards to ensure every product meets our rigorous expectations.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-primary text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-cormorant text-3xl md:text-4xl font-bold mb-4">
              Ready to Transform Your Space?
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Browse our complete collection of flower throw pillows and find the perfect botanical accent for your home.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/shop"
                className="bg-white text-primary hover:bg-gray-100 font-medium py-3 px-8 rounded-lg transition-colors"
              >
                Shop All Pillows
              </Link>
              <Link 
                href="/contact"
                className="border border-white/30 text-white hover:bg-white/10 font-medium py-3 px-8 rounded-lg transition-colors"
              >
                Custom Orders
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}