"use client"
import React, { useState, useEffect, useRef } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { FiSearch, FiFilter, FiChevronDown, FiGrid, FiList, FiX } from 'react-icons/fi'
import ProductCard from '../../components/ProductCard'
import SchemaMarkup from '../../components/SchemaMarkup'
import Breadcrumbs from '../../components/Breadcrumbs'
import { 
  products, 
  getProductsByFilters,
  type Product,
  type ProductStyle,
  type FlowerType,
  type ProductColor
} from '../../data/products'
import { generateCollectionPageSchema } from '../../utils/schema'
import { generateShopPageMetadata } from '../../utils/seo'

export default function ShopPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedStyle, setSelectedStyle] = useState<ProductStyle | ''>('')
  const [selectedFlowerType, setSelectedFlowerType] = useState<FlowerType | ''>('')
  const [selectedColor, setSelectedColor] = useState<ProductColor | ''>('')
  const [sortOption, setSortOption] = useState('featured')
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 50])
  const [showFeatured, setShowFeatured] = useState<boolean | undefined>(undefined)
  const [isFilterOpen, setIsFilterOpen] = useState(false)
  
  const productsRef = useRef<HTMLDivElement>(null)
  
  // Style options
  const styleOptions: (ProductStyle | '')[] = ['', 'watercolor', 'floral', 'solid-color', 'abstract', 'vintage', 'modern', 'boho', 'farmhouse']
  const flowerTypeOptions: (FlowerType | '')[] = ['', 'rose', 'peony', 'sunflower', 'hydrangea', 'wildflower', 'poppy', 'magnolia', 'daisy', 'tulip', 'lavender', 'orchid', 'hibiscus', 'cherry-blossom', 'lily', 'marigold', 'camellia', 'iris', 'jasmine', 'anemone', 'dahlia', 'lotus', 'plumeria', 'bougainvillea', 'ranunculus'];
  const colorOptions: (ProductColor | '')[] =  ['', 'multicolor', 'blue', 'green', 'purple', 'black', 'pink', 'white', 'black-and-white', 'orange', 'gold', 'red', 'yellow', 'navy', 'beige', 'brown', 'burgundy', 'teal', 'turquoise', 'coral', 'mint', 'cream', 'gray', 'light-gray', 'dark-gray', 'olive', 'mustard', 'lavender', 'peach', 'charcoal', 'tan', 'cyan', 'indigo', 'maroon', 'rose', 'blush', 'aqua', 'sand', 'ivory', 'rust'];
  // Filter products based on all criteria
  const filteredProducts = getProductsByFilters({
    style: selectedStyle || undefined,
    flowerType: selectedFlowerType || undefined,
    color: selectedColor || undefined,
    priceRange,
    featured: showFeatured
  }).filter(product => 
    searchQuery === '' || 
    product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    product.description.toLowerCase().includes(searchQuery.toLowerCase())
  )

  // Sort products based on selected option
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch(sortOption) {
      case 'price-low':
        const priceA = a.discount ? a.price * (1 - a.discount.percentage / 100) : a.price
        const priceB = b.discount ? b.price * (1 - b.discount.percentage / 100) : b.price
        return priceA - priceB
      case 'price-high':
        const priceA2 = a.discount ? a.price * (1 - a.discount.percentage / 100) : a.price
        const priceB2 = b.discount ? b.price * (1 - b.discount.percentage / 100) : b.price
        return priceB2 - priceA2
      case 'name-asc':
        return a.title.localeCompare(b.title)
      case 'name-desc':
        return b.title.localeCompare(a.title)
      case 'newest':
        return new Date(b.dateAdded).getTime() - new Date(a.dateAdded).getTime()
      case 'featured':
      default:
        return (b.featured ? 1 : 0) - (a.featured ? 1 : 0)
    }
  })

  // Reset filters
  const clearAllFilters = () => {
    setSearchQuery('')
    setSelectedStyle('')
    setSelectedFlowerType('')
    setSelectedColor('')
    setPriceRange([0, 50])
    setShowFeatured(undefined)
    setSortOption('featured')
  }

  // Scroll to products when filters change
  const scrollToProducts = () => {
    setTimeout(() => {
      productsRef.current?.scrollIntoView({ 
        behavior: 'smooth', 
        block: 'start'
      });
    }, 100);
  }

  // Close filter sidebar on larger screens
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024 && isFilterOpen) {
        setIsFilterOpen(false)
      }
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [isFilterOpen])

  // Generate metadata and schema
  const metadata = generateShopPageMetadata()
  const shopSchema = generateCollectionPageSchema(sortedProducts, 'all-styles')

  const breadcrumbItems = [
    { name: 'Shop', url: '/shop' }
  ]

  return (
    <>
      {/* SEO Schema Markup */}
      <SchemaMarkup schema={shopSchema} />

      {/* SEO Meta Tags */}
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        <link rel="canonical" href="https://flowersluxe.com/shop" />
      </Head>
      
      {/* Breadcrumbs */}
      <div className="container-custom">
        <Breadcrumbs items={breadcrumbItems} />
      </div>

      {/* Shop Header */}
      <section className="bg-surface-muted py-12 md:py-16 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute w-96 h-96 -top-48 -right-48 bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute w-64 h-64 bottom-0 left-1/4 bg-primary/5 rounded-full blur-2xl" />
          <div className="subtle-pattern absolute inset-0 opacity-30" />
        </div>

        <div className="container-custom relative">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-cormorant text-4xl md:text-5xl font-bold mb-4">
              Flower Throw Pillows Collection
            </h1>
            <p className="text-gray-600 text-lg mb-8">
              Discover our complete collection of premium flower throw pillows. Handcrafted designs featuring unique botanical patterns in various styles.
            </p>
            
            <div className="relative max-w-xl mx-auto">
              <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
                <FiSearch size={18} className="text-gray-400" />
              </div>
              <input
                type="text"
                className="w-full py-3 pl-12 pr-4 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                placeholder="Search flower throw pillows..."
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value)
                  scrollToProducts()
                }}
                aria-label="Search products"
              />
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
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="font-cormorant text-xl font-bold">Filters</h3>
                    <button
                      onClick={clearAllFilters}
                      className="text-sm text-primary hover:text-primary-dark"
                    >
                      Clear All
                    </button>
                  </div>
                  
                  {/* Featured Filter */}
                  <div className="mb-6">
                    <h4 className="text-sm font-medium mb-3">Product Type</h4>
                    <div className="space-y-2">
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="radio"
                          name="featured"
                          checked={showFeatured === undefined}
                          onChange={() => {
                            setShowFeatured(undefined)
                            scrollToProducts()
                          }}
                          className="w-4 h-4 text-primary focus:ring-primary border-gray-300"
                        />
                        <span className="text-gray-700">All Products</span>
                      </label>
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="radio"
                          name="featured"
                          checked={showFeatured === true}
                          onChange={() => {
                            setShowFeatured(true)
                            scrollToProducts()
                          }}
                          className="w-4 h-4 text-primary focus:ring-primary border-gray-300"
                        />
                        <span className="text-gray-700">Featured</span>
                      </label>
                    </div>
                  </div>

                  {/* Style Filter */}
                  <div className="mb-6">
                    <h4 className="text-sm font-medium mb-3">Style</h4>
                    <select
                      value={selectedStyle}
                      onChange={(e) => {
                        setSelectedStyle(e.target.value as ProductStyle | '')
                        scrollToProducts()
                      }}
                      className="w-full p-2 border border-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary text-sm"
                    >
                      <option value="">All Styles</option>
                      {styleOptions.slice(1).map((style) => (
                        <option key={style} value={style}>
                          {style?.charAt(0).toUpperCase() + style?.slice(1).replace('-', ' ')}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Flower Type Filter */}
                  <div className="mb-6">
                    <h4 className="text-sm font-medium mb-3">Flower Type</h4>
                    <select
                      value={selectedFlowerType}
                      onChange={(e) => {
                        setSelectedFlowerType(e.target.value as FlowerType | '')
                        scrollToProducts()
                      }}
                      className="w-full p-2 border border-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary text-sm"
                    >
                      <option value="">All Flowers</option>
                      {flowerTypeOptions.slice(1).map((type) => (
                        <option key={type} value={type}>
                          {type?.charAt(0).toUpperCase() + type?.slice(1)}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Color Filter */}
                  <div className="mb-6">
                    <h4 className="text-sm font-medium mb-3">Color</h4>
                    <select
                      value={selectedColor}
                      onChange={(e) => {
                        setSelectedColor(e.target.value as ProductColor | '')
                        scrollToProducts()
                      }}
                      className="w-full p-2 border border-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary text-sm"
                    >
                      <option value="">All Colors</option>
                      {colorOptions.slice(1).map((color) => (
                        <option key={color} value={color}>
                          {color?.charAt(0).toUpperCase() + color?.slice(1).replace('-', ' ')}
                        </option>
                      ))}
                    </select>
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
                        onChange={(e) => {
                          setPriceRange([priceRange[0], parseInt(e.target.value)])
                          scrollToProducts()
                        }}
                        className="w-full accent-primary"
                        aria-label="Maximum price range"
                      />
                    </div>
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
              <FiFilter size={20} />
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
                    <div className="flex items-center gap-3">
                      <button 
                        onClick={clearAllFilters}
                        className="text-sm text-primary hover:text-primary-dark"
                      >
                        Clear All
                      </button>
                      <button 
                        onClick={() => setIsFilterOpen(false)}
                        className="text-gray-500 hover:text-gray-700"
                        aria-label="Close filters"
                      >
                        <FiX size={20} />
                      </button>
                    </div>
                  </div>
                  
                  {/* Mobile filters - same structure as desktop */}
                  <div className="space-y-6">
                    {/* Same filter sections as desktop */}
                    <div>
                      <h4 className="text-sm font-medium mb-3">Product Type</h4>
                      <div className="space-y-2">
                        <label className="flex items-center gap-2 cursor-pointer">
                          <input
                            type="radio"
                            name="featured-mobile"
                            checked={showFeatured === undefined}
                            onChange={() => setShowFeatured(undefined)}
                            className="w-4 h-4 text-primary focus:ring-primary border-gray-300"
                          />
                          <span className="text-gray-700">All Products</span>
                        </label>
                        <label className="flex items-center gap-2 cursor-pointer">
                          <input
                            type="radio"
                            name="featured-mobile"
                            checked={showFeatured === true}
                            onChange={() => setShowFeatured(true)}
                            className="w-4 h-4 text-primary focus:ring-primary border-gray-300"
                          />
                          <span className="text-gray-700">Featured</span>
                        </label>
                      </div>
                    </div>

                    <div>
                      <h4 className="text-sm font-medium mb-3">Style</h4>
                      <select
                        value={selectedStyle}
                        onChange={(e) => setSelectedStyle(e.target.value as ProductStyle | '')}
                        className="w-full p-2 border border-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary text-sm"
                      >
                        <option value="">All Styles</option>
                        {styleOptions.slice(1).map((style) => (
                          <option key={style} value={style}>
                            {style?.charAt(0).toUpperCase() + style?.slice(1).replace('-', ' ')}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <h4 className="text-sm font-medium mb-3">Flower Type</h4>
                      <select
                        value={selectedFlowerType}
                        onChange={(e) => setSelectedFlowerType(e.target.value as FlowerType | '')}
                        className="w-full p-2 border border-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary text-sm"
                      >
                        <option value="">All Flowers</option>
                        {flowerTypeOptions.slice(1).map((type) => (
                          <option key={type} value={type}>
                            {type?.charAt(0).toUpperCase() + type?.slice(1)}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <h4 className="text-sm font-medium mb-3">Color</h4>
                      <select
                        value={selectedColor}
                        onChange={(e) => setSelectedColor(e.target.value as ProductColor | '')}
                        className="w-full p-2 border border-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary text-sm"
                      >
                        <option value="">All Colors</option>
                        {colorOptions.slice(1).map((color) => (
                          <option key={color} value={color}>
                            {color?.charAt(0).toUpperCase() + color?.slice(1).replace('-', ' ')}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
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
                  </div>
                  
                  <button
                    onClick={() => {
                      setIsFilterOpen(false)
                      scrollToProducts()
                    }}
                    className="w-full bg-primary text-white font-medium py-2 rounded-lg mt-6"
                  >
                    Apply Filters
                  </button>
                </div>
              </div>
            )}
            
            {/* Products Grid */}
            <div className="flex-grow" ref={productsRef}>
              {/* Toolbar */}
              <div className="flex flex-col sm:flex-row justify-between gap-4 mb-6">
                <div>
                  <h2 className="font-cormorant text-2xl font-bold">
                    Flower Throw Pillows
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
                      onChange={(e) => {
                        setSortOption(e.target.value)
                        scrollToProducts()
                      }}
                      className="pl-3 pr-8 py-2 border border-gray-200 rounded bg-white text-sm appearance-none focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                      aria-label="Sort products"
                    >
                      <option value="featured">Featured</option>
                      <option value="newest">Newest</option>
                      <option value="price-low">Price: Low to High</option>
                      <option value="price-high">Price: High to Low</option>
                      <option value="name-asc">Name: A to Z</option>
                      <option value="name-desc">Name: Z to A</option>
                    </select>
                    <FiChevronDown size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none" />
                  </div>
                  
                  {/* View Mode Switcher */}
                  <div className="flex border border-gray-200 rounded overflow-hidden">
                    <button
                      onClick={() => setViewMode('grid')}
                      className={`p-2 ${viewMode === 'grid' ? 'bg-gray-100 text-gray-800' : 'bg-white text-gray-500'}`}
                      aria-label="Grid view"
                    >
                      <FiGrid size={18} />
                    </button>
                    <button
                      onClick={() => setViewMode('list')}
                      className={`p-2 ${viewMode === 'list' ? 'bg-gray-100 text-gray-800' : 'bg-white text-gray-500'}`}
                      aria-label="List view"
                    >
                      <FiList size={18} />
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
                        product={product}
                        showQuickView={true}
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
                          <img
                            src={`/images/${product.mainImage}`}
                            alt={product.images[0]?.alt || product.title}
                            className="w-full h-full object-cover"
                          />
                          {product.featured && (
                            <div className="absolute top-2 left-2 bg-primary text-white text-xs font-medium py-1 px-2 rounded">
                              Featured
                            </div>
                          )}
                          {product.discount && (
                            <div className="absolute top-2 right-2 bg-red-500 text-white text-xs font-medium py-1 px-2 rounded">
                              -{product.discount.percentage}%
                            </div>
                          )}
                        </div>
                        
                        <div className="flex-grow flex flex-col">
                          <div>
                            <span className="text-xs text-primary-dark uppercase tracking-wide">
                              {product.style} Style • {product.flowerType}
                            </span>
                            <h3 className="font-cormorant text-xl font-medium mt-1 mb-2">{product.title}</h3>
                            <p className="text-gray-600 text-sm mb-4">
                              {product.shortDescription || product.description.substring(0, 120)}...
                            </p>
                          </div>
                          
                          <div className="mt-auto flex flex-wrap items-center justify-between gap-4">
                            <div className="flex items-center gap-2">
                              <span className="text-lg font-bold text-gray-900">
                                ${product.discount 
                                  ? (product.price * (1 - product.discount.percentage / 100)).toFixed(2)
                                  : product.price.toFixed(2)
                                }
                              </span>
                              {product.discount && (
                                <span className="text-sm text-gray-500 line-through">
                                  ${product.price.toFixed(2)}
                                </span>
                              )}
                            </div>
                            
                            <div className="flex gap-2">
                              <Link 
                                href={`/flower-throw-pillows/${product.style}/${product.slug}`}
                                className="inline-flex items-center gap-1 bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium py-2 px-4 rounded transition-colors"
                              >
                                View Details
                              </Link>
                              <a 
                                href={product.externalUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1 bg-primary hover:bg-primary-dark text-white font-medium py-2 px-4 rounded transition-colors"
                              >
                                Shop Now
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
                    <FiSearch size={48} className="mx-auto" />
                  </div>
                  <h3 className="text-xl font-medium mb-2">No products found</h3>
                  <p className="text-gray-500 mb-6">
                    We couldn't find any products matching your search criteria.
                  </p>
                  <button
                    onClick={() => {
                      clearAllFilters()
                      scrollToProducts()
                    }}
                    className="btn-secondary inline-flex"
                  >
                    Clear all filters
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}