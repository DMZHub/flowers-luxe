"use client"

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { useParams } from 'next/navigation'
import { Search, Filter, ChevronDown, Grid, List, Heart, ExternalLink, X, ArrowLeft } from 'lucide-react'
import ProductCard from '@/components/ProductCard'

export default function CategoryPage() {
  const { slug } = useParams()
  const [searchQuery, setSearchQuery] = useState('')
  const [sortOption, setSortOption] = useState('featured')
  const [viewMode, setViewMode] = useState('grid')
  const [priceRange, setPriceRange] = useState([0, 50])
  const [isFilterOpen, setIsFilterOpen] = useState(false)

  // Data mapping for categories
  const categoryData = {
    'throw-pillows': {
      title: 'Flower Throw Pillows',
      description: 'Add a touch of floral elegance to your home with our premium quality throw pillows featuring unique floral designs.',
      imageSrc: '/images/categories/flower-throw-pillows.webp',
    },
    'stickers': {
      title: 'Flower Stickers',
      description: 'Express yourself with our vibrant floral stickers. Perfect for laptops, water bottles, notebooks, and more.',
      imageSrc: '/images/categories/flower-stickers.webp',
    },
    'mugs': {
      title: 'Flower Mugs',
      description: 'Start your day with our beautiful floral mugs. Each sip will bring the beauty of nature to your morning routine.',
      imageSrc: '/images/categories/flower-mugs.webp',
    },
    'art': {
      title: 'Flower Art Prints',
      description: 'Refresh your walls with our vibrant floral art prints, crafted to infuse warmth and serenity into your home.',
      imageSrc: '/images/categories/flower-art.webp',
    },
    'tote-bags': {
      title: 'Flower Tote Bags',
      description: 'Carry your essentials in style with our durable and eco-friendly tote bags featuring elegant floral patterns.',
      imageSrc: '/images/categories/flower-tote-bags.webp',
    },
    'tapestries': {
      title: 'Flower Tapestries',
      description: 'Create a statement wall with our vibrant floral tapestries. Perfect for bedrooms, living spaces, and dorm rooms.',
      imageSrc: '/images/categories/flower-tapestries.webp',
    },
    'pins': {
      title: 'Flower Pins',
      description: 'Add a touch of floral charm to your outfit, backpack, or jacket with our collection of high-quality enamel pins.',
      imageSrc: '/images/categories/flower-pins.webp',
    }
  }

  // Get current category from slug
  const currentCategory = categoryData[slug as keyof typeof categoryData] || {
    title: 'Category',
    description: 'Products in this category',
    imageSrc: '/images/categories/default.webp',
  }

  // Dummy data for products - filtered by category
  const allProducts = [
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
      imageSrc:'/images/products/tote-bags/tote-1.jpg',
      externalUrl: 'https://www.teepublic.com/user/flowersluxe',
      isNew: true,
      featured: true
    },
    {
      id: 6,
      title: 'Sunflower Field Wall Tapestry',
      category: 'Tapestry',
      price: 39.99,
      imageSrc: '/images/products/tapestries/tapestry-1.jpg',
      externalUrl: 'https://www.teepublic.com/user/flowersluxe'
    },
    {
      id: 7,
      title: 'Cherry Blossom Enamel Pin Set',
      category: 'Pins',
      price: 12.99,
      imageSrc: '/images/products/pins/pins-1.jpg',  
      externalUrl: 'https://www.teepublic.com/user/flowersluxe',
      featured: true
    },
    
  ]

  // Map category slug to product category
  const categoryMapping = {
    'throw-pillows': 'Throw Pillow',
    'stickers': 'Stickers',
    'mugs': 'Mug',
    'art': 'Art Print',
    'tote-bags': 'Tote Bag',
    'tapestries': 'Tapestry',
    'pins': 'Pins'
  }

  // Filter products based on category, search, and price range
  const categoryProducts = allProducts.filter(product => {
    const matchesCategory = product.category === categoryMapping[slug as keyof typeof categoryMapping]
    const matchesSearch = product.title.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1]
    
    return matchesCategory && matchesSearch && matchesPrice
  })

  // Sort products based on selected option
  const sortedProducts = [...categoryProducts].sort((a, b) => {
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

  return (
    <>
      {/* Category Header */}
      <section className="relative bg-surface-muted py-16 overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute w-96 h-96 -top-48 -right-48 bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute w-64 h-64 bottom-0 left-1/4 bg-primary/5 rounded-full blur-2xl" />
          <div className="subtle-pattern absolute inset-0 opacity-30" />
        </div>
        
        <div className="container-custom relative">
          <Link href="/shop" className="inline-flex items-center text-gray-500 hover:text-primary mb-6">
            <ArrowLeft size={16} className="mr-2" />
            <span>Back to shop</span>
          </Link>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="font-cormorant text-4xl md:text-5xl font-bold mb-4">
                {currentCategory.title}
              </h1>
              <p className="text-gray-600 text-lg mb-6">
                {currentCategory.description}
              </p>
              
              <div className="relative max-w-md">
                <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
                  <Search size={18} className="text-gray-400" />
                </div>
                <input
                  type="text"
                  className="w-full py-3 pl-12 pr-4 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                  placeholder={`Search ${currentCategory.title.toLowerCase()}...`}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>
            
            <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden shadow-elevated">
              <Image
                src={currentCategory.imageSrc}
                alt={currentCategory.title}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-sm rounded-lg px-4 py-2">
                <span className="text-primary-dark font-medium">
                  {sortedProducts.length} Products
                </span>
              </div>
            </div>
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
                  
                  {/* Filter by availability */}
                  <div className="mb-6">
                    <h4 className="text-sm font-medium mb-3">Availability</h4>
                    <div className="space-y-2">
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="checkbox"
                          className="w-4 h-4 text-primary focus:ring-primary border-gray-300 rounded"
                        />
                        <span className="text-gray-700">New Arrivals</span>
                      </label>
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="checkbox"
                          className="w-4 h-4 text-primary focus:ring-primary border-gray-300 rounded"
                        />
                        <span className="text-gray-700">Featured</span>
                      </label>
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
                  
                  {/* Mobile Filter by availability */}
                  <div className="mb-6">
                    <h4 className="text-sm font-medium mb-3">Availability</h4>
                    <div className="space-y-2">
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="checkbox"
                          className="w-4 h-4 text-primary focus:ring-primary border-gray-300 rounded"
                        />
                        <span className="text-gray-700">New Arrivals</span>
                      </label>
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="checkbox"
                          className="w-4 h-4 text-primary focus:ring-primary border-gray-300 rounded"
                        />
                        <span className="text-gray-700">Featured</span>
                      </label>
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
                    {currentCategory.title}
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

      {/* Related Categories */}
      <section className="py-16 bg-surface-muted">
        <div className="container-custom">
          <h2 className="font-cormorant text-2xl font-bold mb-8">Related Categories</h2>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {Object.entries(categoryData)
              .filter(([key]) => key !== slug)
              .slice(0, 4)
              .map(([key, category]) => (
                <div key={key} className="relative group">
                  <Link href={`/shop/category/${key}`}>
                    <div className="relative h-32 rounded-lg overflow-hidden">
                      <Image
                        src={category.imageSrc}
                        alt={category.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 768px) 50vw, 25vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 p-3 text-white">
                      <h3 className="text-sm font-medium">{category.title}</h3>
                    </div>
                  </Link>
                </div>
              ))}
          </div>
        </div>
      </section>
    </>
  )
}
