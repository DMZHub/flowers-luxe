"use client"
import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Search, Filter, ChevronDown, Grid, List, Heart, ExternalLink, X } from 'lucide-react'
import ProductCard from '@/components/ProductCard'
import CategoryCard from '@/components/CategoryCard'

export default function ShopPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [activeCategory, setActiveCategory] = useState('All')
  const [sortOption, setSortOption] = useState('featured')
  const [viewMode, setViewMode] = useState('grid')
  const [priceRange, setPriceRange] = useState([0, 50])
  const [isFilterOpen, setIsFilterOpen] = useState(false)

  // Dummy data for categories
  const categories = [
    {
      title: 'Throw Pillows',
      slug: 'throw-pillows',
      imageSrc: '/images/categories/flower-throw-pillows.jpg',
      count: 5
    },
    {
      title: 'Stickers',
      slug: 'stickers',
      imageSrc: '/images/categories/flower-stickers.jpg',
      count: 5
    },
    {
      title: 'Mugs',
      slug: 'mugs',
      imageSrc: '/images/categories/flower-mugs.jpg',
      count: 5
    },
    {
      title: 'Art Prints',
      slug: 'art',
      imageSrc: '/images/categories/flower-art.jpg',
      count: 5
    },
    {
      title: 'Tote Bags',
      slug: 'tote-bags',
      imageSrc: '/images/categories/flower-tote-bags.jpg',
      count: 5
    },
    {
      title: 'Tapestries',
      slug: 'tapestries',
      imageSrc: '/images/categories/flower-tapestries.jpg',
      count: 5
    },
    {
      title: 'Pins',
      slug: 'pins',
      imageSrc: '/images/categories/flower-pins.jpg',
      count: 5
    }
  ]

  // Dummy data for products
  const products = [
    {
      id: 1,
      title: 'Wildflower Bouquet Throw Pillow',
      category: 'Throw Pillow',
      price: 24.99,
      imageSrc: '/images/products/throw-pillows/pillow-1.jpg',
      externalUrl: 'https://www.teepublic.com/user/flowersluxe',
      isNew: true,
      featured: true
    },
    {
      id: 2,
      title: 'Spring Blossoms Sticker Pack',
      category: 'Stickers',
      price: 3.99,
      imageSrc: '/images/products/stickers/sticker-1.jpg',
      externalUrl: 'https://www.teepublic.com/user/flowersluxe',
      featured: true
    },
    {
      id: 3,
      title: 'Rose Garden Ceramic Mug',
      category: 'Mug',
      price: 19.99,
      imageSrc: '/images/products/mugs/mug-1.jpg',
      externalUrl: 'https://www.teepublic.com/user/flowersluxe',
      isNew: true
    },
    {
      id: 4,
      title: 'Botanical Dreams Art Print',
      category: 'Art Print',
      price: 15.99,
      imageSrc: '/images/products/art/art.jpg',
      externalUrl: 'https://www.teepublic.com/user/flowersluxe'
    },
    {
      id: 5,
      title: 'Vintage Floral Canvas Tote Bag',
      category: 'Tote Bag',
      price: 29.99,
      imageSrc:  '/images/products/tote-bags/tote-1.jpg',
      externalUrl: 'https://www.teepublic.com/user/flowersluxe',
      isNew: true,
      featured: true
    },

    {
      id: 6,
      title: 'Watercolor Peonies Art Print',
      category:  'Pins',
      price: 16.99,
      imageSrc: '/images/products/pins/pins-1.jpg',
      externalUrl: 'https://www.teepublic.com/user/flowersluxe',
      featured: true
    },
    {
      id: 7,
      title: 'Tropical Leaves Eco Tote',
      category: 'Tapestry',
      price: 27.99,
      imageSrc: '/images/products/tapestries/tapestry-1.jpg',
      externalUrl: 'https://www.teepublic.com/user/flowersluxe'
    },


  

  
  ]

  // Filter products based on search, category, and price range
  const filteredProducts = products.filter(product => {
    const matchesSearch = product.title.toLowerCase().includes(searchQuery.toLowerCase())
    
    const matchesCategory = activeCategory === 'All' || 
      product.category === activeCategory || 
      (activeCategory === 'Featured' && product.featured) ||
      (activeCategory === 'New Arrivals' && product.isNew)
    
    const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1]
    
    return matchesSearch && matchesCategory && matchesPrice
  })

  // Sort products based on selected option
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch(sortOption) {
      case 'price-low':
        return a.price - b.price
      case 'price-high':
        return b.price - a.price
      case 'name-asc':
        return a.title.localeCompare(b.title)
      case 'name-desc':
        return b.title.localeCompare(a.title)
      case 'featured':
      default:
        return (b.featured ? 1 : 0) - (a.featured ? 1 : 0)
    }
  })

  // Extract all unique product categories
  const productCategories = ['All', 'Featured', 'New Arrivals', ...new Set(products.map(product => product.category))]

  // Close filter sidebar when screen becomes larger
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024 && isFilterOpen) {
        setIsFilterOpen(false)
      }
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [isFilterOpen])

  return (
    <>
      {/* Shop Header */}
      <section className="bg-surface-muted py-12 md:py-16 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute w-96 h-96 -top-48 -right-48 bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute w-64 h-64 bottom-0 left-1/4 bg-primary/5 rounded-full blur-2xl" />
          <div className="subtle-pattern absolute inset-0 opacity-30" />
        </div>

        <div className="container-custom relative">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-cormorant text-4xl md:text-5xl font-bold mb-4">
              Shop Our Collection
            </h1>
            <p className="text-gray-600 text-lg mb-8">
              Discover our unique floral designs on premium quality products. Express your love for nature through our artistic collections.
            </p>
            
            <div className="relative max-w-xl mx-auto">
              <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
                <Search size={18} className="text-gray-400" />
              </div>
              <input
                type="text"
                className="w-full py-3 pl-12 pr-4 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-12 border-b border-gray-100">
        <div className="container-custom">
          <h2 className="font-cormorant text-2xl font-bold mb-8">Shop by Category</h2>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4">
            {categories.map((category) => (
              <div key={category.slug} className="relative group">
                <Link href={`/shop/category/${category.slug}`}>
                  <div className="relative h-32 rounded-lg overflow-hidden">
                    <Image
                      src={category.imageSrc}
                      alt={category.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 50vw, 14vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-3 text-white">
                    <h3 className="text-sm font-medium">{category.title}</h3>
                    <p className="text-xs text-white/80">{category.count} items</p>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-12">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar Filters - Desktop */}
            <div className="hidden lg:block w-64 flex-shrink-0">
              <div className="sticky top-24">
                <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
                  <h3 className="font-cormorant text-xl font-bold mb-6">Filters</h3>
                  
                  {/* Category Filter */}
                  <div className="mb-6">
                    <h4 className="text-sm font-medium mb-3">Category</h4>
                    <div className="space-y-2">
                      {productCategories.map((category) => (
                        <label key={category} className="flex items-center gap-2 cursor-pointer">
                          <input
                            type="radio"
                            name="category"
                            checked={activeCategory === category}
                            onChange={() => setActiveCategory(category)}
                            className="w-4 h-4 text-primary focus:ring-primary border-gray-300"
                          />
                          <span className="text-gray-700">{category}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                  
                  {/* Price Range Filter */}
                  <div className="mb-6">
                    <h4 className="text-sm font-medium mb-3">Price Range</h4>
                    <div className="space-y-4">
                      <div className="flex justify-between">
                        <div className="bg-gray-50 px-3 py-1 rounded text-sm w-20 text-center">
                          ${priceRange[0]}
                        </div>
                        <div className="bg-gray-50 px-3 py-1 rounded text-sm w-20 text-center">
                          ${priceRange[1]}
                        </div>
                      </div>
                      <input
                        type="range"
                        min="0"
                        max="50"
                        step="5"
                        value={priceRange[1]}
                        onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                        className="w-full accent-primary"
                      />
                    </div>
                  </div>
                  
                  {/* External Link Notice */}
                  <div className="mt-8 bg-primary/5 p-4 rounded-lg">
                    <p className="text-sm text-gray-700">
                      Products link to our TeePublic store where you can complete your purchase.
                    </p>
                    <a 
                      href="https://www.teepublic.com/user/flowersluxe" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-primary text-sm font-medium mt-2 hover:underline"
                    >
                      <span>Visit TeePublic store</span>
                      <ExternalLink size={14} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Mobile Filter Button */}
            <button
              onClick={() => setIsFilterOpen(true)}
              className="fixed bottom-6 right-6 z-40 lg:hidden bg-primary text-white rounded-full p-4 shadow-lg"
              aria-label="Open filters"
            >
              <Filter size={20} />
            </button>
            
            {/* Mobile Filter Sidebar */}
            {isFilterOpen && (
              <div className="fixed inset-0 z-50 lg:hidden">
                <div 
                  className="absolute inset-0 bg-black/30"
                  onClick={() => setIsFilterOpen(false)}
                ></div>
                <div className="absolute right-0 top-0 bottom-0 w-80 bg-white p-6 overflow-y-auto">
                  <div className="flex justify-between items-center mb-6">
                    <h3 className="font-cormorant text-xl font-bold">Filters</h3>
                    <button 
                      onClick={() => setIsFilterOpen(false)}
                      className="text-gray-500 hover:text-gray-700"
                      aria-label="Close filters"
                    >
                      <X size={20} />
                    </button>
                  </div>
                  
                  {/* Mobile Category Filter */}
                  <div className="mb-6">
                    <h4 className="text-sm font-medium mb-3">Category</h4>
                    <div className="space-y-2">
                      {productCategories.map((category) => (
                        <label key={category} className="flex items-center gap-2 cursor-pointer">
                          <input
                            type="radio"
                            name="category-mobile"
                            checked={activeCategory === category}
                            onChange={() => {
                              setActiveCategory(category)
                              setIsFilterOpen(false)
                            }}
                            className="w-4 h-4 text-primary focus:ring-primary border-gray-300"
                          />
                          <span className="text-gray-700">{category}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                  
                  {/* Mobile Price Range Filter */}
                  <div className="mb-6">
                    <h4 className="text-sm font-medium mb-3">Price Range</h4>
                    <div className="space-y-4">
                      <div className="flex justify-between">
                        <div className="bg-gray-50 px-3 py-1 rounded text-sm w-20 text-center">
                          ${priceRange[0]}
                        </div>
                        <div className="bg-gray-50 px-3 py-1 rounded text-sm w-20 text-center">
                          ${priceRange[1]}
                        </div>
                      </div>
                      <input
                        type="range"
                        min="0"
                        max="50"
                        step="5"
                        value={priceRange[1]}
                        onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                        className="w-full accent-primary"
                      />
                    </div>
                  </div>
                  
                  <button
                    onClick={() => setIsFilterOpen(false)}
                    className="w-full bg-primary text-white font-medium py-2 rounded-lg mt-6"
                  >
                    Apply Filters
                  </button>
                </div>
              </div>
            )}
            
            {/* Products Grid */}
            <div className="flex-grow">
              {/* Toolbar */}
              <div className="flex flex-col sm:flex-row justify-between gap-4 mb-6">
                <div>
                  <h2 className="font-cormorant text-2xl font-bold">
                    {activeCategory === 'All' ? 'All Products' : activeCategory}
                  </h2>
                  <p className="text-gray-500 text-sm">
                    Showing {sortedProducts.length} products
                    {searchQuery && ` matching "${searchQuery}"`}
                  </p>
                </div>
                
                <div className="flex items-center gap-3">
                  {/* Sort Dropdown */}
                  <div className="relative">
                    <select
                      value={sortOption}
                      onChange={(e) => setSortOption(e.target.value)}
                      className="pl-3 pr-8 py-2 border border-gray-200 rounded bg-white text-sm appearance-none focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                    >
                      <option value="featured">Featured</option>
                      <option value="price-low">Price: Low to High</option>
                      <option value="price-high">Price: High to Low</option>
                      <option value="name-asc">Name: A to Z</option>
                      <option value="name-desc">Name: Z to A</option>
                    </select>
                    <ChevronDown size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none" />
                  </div>
                  
                  {/* View Mode Switcher */}
                  <div className="flex border border-gray-200 rounded overflow-hidden">
                    <button
                      onClick={() => setViewMode('grid')}
                      className={`p-2 ${viewMode === 'grid' ? 'bg-gray-100 text-gray-800' : 'bg-white text-gray-500'}`}
                      aria-label="Grid view"
                    >
                      <Grid size={18} />
                    </button>
                    <button
                      onClick={() => setViewMode('list')}
                      className={`p-2 ${viewMode === 'list' ? 'bg-gray-100 text-gray-800' : 'bg-white text-gray-500'}`}
                      aria-label="List view"
                    >
                      <List size={18} />
                    </button>
                  </div>
                </div>
              </div>
              
              {/* Products Display */}
              {sortedProducts.length > 0 ? (
                viewMode === 'grid' ? (
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {sortedProducts.map((product) => (
                      <ProductCard
                        key={product.id}
                        title={product.title}
                        category={product.category}
                        price={`$${product.price.toFixed(2)}`}
                        imageSrc={product.imageSrc}
                        externalUrl={product.externalUrl}
                        isNew={product.isNew}
                      />
                    ))}
                  </div>
                ) : (
                  <div className="space-y-6">
                    {sortedProducts.map((product) => (
                      <div 
                        key={product.id} 
                        className="flex flex-col md:flex-row gap-6 bg-white border border-gray-100 rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow"
                      >
                        <div className="relative w-full md:w-48 h-48 rounded-lg overflow-hidden flex-shrink-0">
                          <Image
                            src={product.imageSrc}
                            alt={product.title}
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, 192px"
                          />
                          {product.isNew && (
                            <div className="absolute top-2 left-2 bg-primary text-white text-xs font-medium py-1 px-2 rounded">
                              New
                            </div>
                          )}
                        </div>
                        
                        <div className="flex-grow flex flex-col">
                          <div>
                            <span className="text-xs text-primary-dark uppercase tracking-wide">{product.category}</span>
                            <h3 className="font-cormorant text-xl font-medium mt-1 mb-2">{product.title}</h3>
                            <p className="text-gray-600 text-sm mb-4">
                              Beautiful floral design on premium quality material. Perfect for adding a touch of nature to your space.
                            </p>
                          </div>
                          
                          <div className="mt-auto flex flex-wrap items-center justify-between gap-4">
                            <span className="text-lg font-medium">${product.price.toFixed(2)}</span>
                            
                            <div className="flex gap-2">
                              <button 
                                aria-label="Add to wishlist"
                                className="p-2 bg-gray-100 hover:bg-gray-200 rounded-full text-gray-700"
                              >
                                <Heart size={18} />
                              </button>
                              <a 
                                href={product.externalUrl}
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1 bg-primary hover:bg-primary-dark text-white font-medium py-2 px-4 rounded"
                              >
                                <span>Shop on TeePublic</span>
                                <ExternalLink size={16} />
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )
              ) : (
                <div className="text-center py-16 bg-white border border-gray-100 rounded-xl">
                  <div className="text-gray-400 mb-4">
                    <Search size={48} className="mx-auto" />
                  </div>
                  <h3 className="text-xl font-medium mb-2">No products found</h3>
                  <p className="text-gray-500 mb-6">
                    We couldn't find any products matching your search criteria.
                  </p>
                  <button
                    onClick={() => {
                      setSearchQuery('')
                      setActiveCategory('All')
                      setPriceRange([0, 50])
                    }}
                    className="btn-secondary inline-flex"
                  >
                    Clear filters
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-surface-muted">
        <div className="container-custom">
          <div className="bg-white rounded-2xl shadow-elevated border border-border p-8 md:p-12">
            <div className="max-w-3xl mx-auto text-center">
              <span className="bg-primary/10 text-primary text-sm font-medium px-4 py-1.5 rounded-full inline-block mb-4">Custom Designs</span>
              <h2 className="font-cormorant text-3xl md:text-4xl font-bold mb-4">
                Looking for a Custom Design?
              </h2>
              <p className="text-gray-600 mb-8">
                We can create custom floral designs for your specific needs. Contact us to discuss your requirements and we'll bring your vision to life.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="mailto:contact@flowersluxe.com"
                  className="btn-primary"
                >
                  Contact for Custom Orders
                </a>
                <Link href="/blog" className="btn-outline">
                  Read Blog
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}