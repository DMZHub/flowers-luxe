"use client"

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useParams } from 'next/navigation';
import { Search, Filter, ChevronDown, Grid, List, Heart, ExternalLink, X, ArrowLeft } from 'lucide-react';
import ProductCard from '@/components/ProductCard';
import SchemaMarkup from '@/components/SchemaMarkup';
import DiscountedPrice from '@/components/DiscountedPrice';
import ProductDiscount from '@/components/ProductDiscount';
import { 
  getProductsByCategorySlug, 
  categoryMappings, 
  categoryProperties,
  getDiscountedProducts,
  type Product 
} from '@/utils/products';
import { generateProductCollectionSchema, generateBreadcrumbSchema } from '@/utils/schema';

export default function CategoryPage() {
  const { slug } = useParams() as { slug: string };
  const [searchQuery, setSearchQuery] = useState('');
  const [sortOption, setSortOption] = useState('featured');
  const [viewMode, setViewMode] = useState('grid');
  const [priceRange, setPriceRange] = useState([0, 50]);
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  // Get category data
  const category = categoryMappings[slug];
  const categoryInfo = category ? categoryProperties[category] : null;
  
  // Get products for this category
  const categoryProducts = getProductsByCategorySlug(slug);
  
  // Check if any products in this category have discounts
  const discountedProducts = categoryProducts.filter(product => product.discount);

  // Current category data
  const currentCategory = {
    title: category || 'Category',
    description: categoryInfo?.description || 'Products in this category',
    imageSrc: `/images/categories/flower-${slug}.webp`,
  };

  // Filter products based on search and price range
  const filteredProducts = categoryProducts.filter(product => {
    const matchesSearch = product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          product.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1];
    
    return matchesSearch && matchesPrice;
  });

  // Sort products based on selected option
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch(sortOption) {
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'name-asc':
        return a.title.localeCompare(b.title);
      case 'name-desc':
        return b.title.localeCompare(a.title);
      case 'featured':
      default:
        return (b.featured ? 1 : 0) - (a.featured ? 1 : 0);
    }
  });

  // Generate schema markup
  const productCollectionSchema = generateProductCollectionSchema(
    sortedProducts,
    category || 'Products',
    `/shop/category/${slug}`
  );
  
  // Generate breadcrumb schema
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Shop', url: '/shop' },
    { name: category || 'Category', url: `/shop/category/${slug}` }
  ]);

  return (
    <>
      {/* SEO Schema Markup */}
      <SchemaMarkup schema={productCollectionSchema} />
      <SchemaMarkup schema={breadcrumbSchema} />

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
                      {discountedProducts.length > 0 && (
                        <label className="flex items-center gap-2 cursor-pointer">
                          <input
                            type="checkbox"
                            className="w-4 h-4 text-primary focus:ring-primary border-gray-300 rounded"
                          />
                          <span className="text-gray-700">On Sale</span>
                        </label>
                      )}
                    </div>
                  </div>
                  
                  {/* Product specifications based on category */}
                  {categoryInfo?.specifications && (
                    <div className="mb-6">
                      <h4 className="text-sm font-medium mb-3">Product Features</h4>
                      <ul className="space-y-1">
                        {categoryInfo.specifications.slice(0, 3).map((spec, index) => (
                          <li key={index} className="text-xs text-gray-600">
                            • {spec}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  
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
                      {discountedProducts.length > 0 && (
                        <label className="flex items-center gap-2 cursor-pointer">
                          <input
                            type="checkbox"
                            className="w-4 h-4 text-primary focus:ring-primary border-gray-300 rounded"
                          />
                          <span className="text-gray-700">On Sale</span>
                        </label>
                      )}
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
                        product={product}
                        showDescription={false}
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
                          {product.discount && (
                            <div className="absolute top-2 right-2">
                              <ProductDiscount 
                                percentage={product.discount.percentage}
                                size="sm"
                              />
                            </div>
                          )}
                        </div>
                        
                        <div className="flex-grow flex flex-col">
                          <div>
                            <span className="text-xs text-primary-dark uppercase tracking-wide">{product.category}</span>
                            <h3 className="font-cormorant text-xl font-medium mt-1 mb-2">{product.title}</h3>
                            <p className="text-gray-600 text-sm mb-4">
                              {product.description.substring(0, 120)}...
                            </p>
                            
                            {/* Display first 2 specifications */}
                            <ul className="mb-4">
                              {product.specifications.slice(0, 2).map((spec, index) => (
                                <li key={index} className="text-sm text-gray-600 flex items-start">
                                  <span className="mr-2 text-primary">•</span> {spec}
                                </li>
                              ))}
                            </ul>
                          </div>
                          
                          <div className="mt-auto flex flex-wrap items-center justify-between gap-4">
                            <DiscountedPrice 
                              price={product.price}
                              discount={product.discount}
                              className="text-lg font-medium"
                            />
                            
                            <div className="flex gap-2">
                              <button 
                                aria-label="Add to wishlist"
                                className="p-2 bg-gray-100 hover:bg-gray-200 rounded-full text-gray-700"
                              >
                                <Heart size={18} />
                              </button>
                              <a 
                                href={product.isCustom ? product.customUrl : product.externalUrl}
                                target={product.isCustom ? "_self" : "_blank"}
                                rel={product.isCustom ? undefined : "noopener noreferrer"}
                                className="inline-flex items-center gap-1 bg-primary hover:bg-primary-dark text-white font-medium py-2 px-4 rounded"
                              >
                                <span>{product.isCustom ? 'Customize' : 'Shop on TeePublic'}</span>
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
            {Object.entries(categoryMappings)
              .filter(([key]) => key !== slug)
              .slice(0, 4)
              .map(([key, categoryName]) => (
                <div key={key} className="relative group">
                  <Link href={`/shop/category/${key}`}>
                    <div className="relative h-32 rounded-lg overflow-hidden">
                      <Image
                        src={`/images/categories/flower-${key}.webp`}
                        alt={categoryName}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 768px) 50vw, 25vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 p-3 text-white">
                      <h3 className="text-sm font-medium">{categoryName}</h3>
                    </div>
                  </Link>
                </div>
              ))}
          </div>
        </div>
      </section>
    </>
  );
}
