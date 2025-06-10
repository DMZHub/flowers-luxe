import React from 'react'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { FiArrowLeft, FiGrid, FiList, FiFilter } from 'react-icons/fi'
import ProductCard from '../../../components/ProductCard'
import ProductFilters from '../../../components/ProductFilters'
import SchemaMarkup from '../../../components/SchemaMarkup'
import Breadcrumbs from '../../../components/Breadcrumbs'

import { 
  getProductsByFilters, 
  type ProductStyle 
} from '../../../data/products'
import { generateCollectionPageSchema } from '../../../utils/schema'
import { generateStylePageMetadata } from '../../../utils/seo'

const validStyles: ProductStyle[] = ['watercolor', 'floral', 'solid-color', 'abstract', 'vintage', 'modern', 'boho', 'farmhouse']

// Generate static params for all styles
export async function generateStaticParams() {
  return validStyles.map((style) => ({
    style: style,
  }))
}

interface StylePageProps {
  params: Promise<{
    style: string
  }>
  searchParams: Promise<{
    sort?: string
    filter?: string
    view?: string
  }>
}

export default function StylePage({ params, searchParams }: StylePageProps) {
  const resolvedParams = React.use(params)
  const resolvedSearchParams = React.use(searchParams)
  
  if (!validStyles.includes(resolvedParams.style as ProductStyle)) {
    notFound()
  }

  const style = resolvedParams.style as ProductStyle
  
  // Get products for this style
  const products = getProductsByFilters({
    style: style,
    sort: resolvedSearchParams.sort as any,
    // Add other filters as needed
  })

  // Generate schema
  const pageSchema = generateCollectionPageSchema(
    style,
    products,
    `Beautiful ${style} flower throw pillows to enhance your home decor`
  )

  const breadcrumbItems = [
    { name: 'Flower Throw Pillows', url: '/flower-throw-pillows' },
    { name: `${style.charAt(0).toUpperCase() + style.slice(1)} Style`, url: `/flower-throw-pillows/${style}` }
  ]

  const formatStyleName = (style: string) => {
    return style.split('-').map(word => 
      word.charAt(0).toUpperCase() + word.slice(1)
    ).join(' ')
  }

  const currentView = resolvedSearchParams.view || 'grid'

  return (
    <>
      <SchemaMarkup schema={pageSchema} />
      
      {/* Breadcrumbs */}
      <div className="container-custom">
        <Breadcrumbs items={breadcrumbItems} />
      </div>

      {/* Header Section */}
      <section className="py-8 md:py-12">
        <div className="container-custom">
          <div className="flex items-center gap-4 mb-6">
            <Link 
              href="/flower-throw-pillows"
              className="flex items-center gap-2 text-primary hover:text-primary-dark transition-colors"
            >
              <FiArrowLeft size={20} />
              <span>Back to All Pillows</span>
            </Link>
          </div>
          
          <div className="text-center mb-12">
            <h1 className="font-cormorant text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {formatStyleName(style)} Flower Throw Pillows
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover our beautiful collection of {formatStyleName(style).toLowerCase()} flower throw pillows, 
              perfect for adding elegance and comfort to any room.
            </p>
            <div className="flex items-center justify-center gap-2 mt-4">
              <span className="text-sm text-gray-500">{products.length} products</span>
            </div>
          </div>
        </div>
      </section>

      {/* Filters and Products */}
      <section className="py-8">
        <div className="container-custom">
          {/* Filter Bar */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
            <div className="flex items-center gap-4">
              <ProductFilters 
                currentStyle={style}
                currentSort={resolvedSearchParams.sort}
              />
            </div>
            
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-600 mr-2">View:</span>
              <Link
                href={`?${new URLSearchParams({...resolvedSearchParams, view: 'grid'}).toString()}`}
                className={`p-2 rounded ${currentView === 'grid' ? 'bg-primary text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
              >
                <FiGrid size={16} />
              </Link>
              <Link
                href={`?${new URLSearchParams({...resolvedSearchParams, view: 'list'}).toString()}`}
                className={`p-2 rounded ${currentView === 'list' ? 'bg-primary text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
              >
                <FiList size={16} />
              </Link>
            </div>
          </div>

          {/* Products Grid */}
          {products.length > 0 ? (
            <div className={`grid gap-6 ${
              currentView === 'grid' 
                ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4' 
                : 'grid-cols-1'
            }`}>
              {products.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  showQuickView={true}
                  layout={currentView as 'grid' | 'list'}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <div className="max-w-md mx-auto">
                <h3 className="text-xl font-medium text-gray-900 mb-2">
                  No products found
                </h3>
                <p className="text-gray-600 mb-6">
                  We couldn't find any {formatStyleName(style).toLowerCase()} flower throw pillows 
                  matching your current filters.
                </p>
                <Link
                  href="/flower-throw-pillows"
                  className="btn-primary"
                >
                  View All Pillows
                </Link>
              </div>
            </div>
          )}

          {/* Load More Button (if needed) */}
          {products.length >= 12 && (
            <div className="text-center mt-12">
              <button className="btn-secondary">
                Load More Products
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Style Description */}
      <section className="py-12 md:py-16 bg-surface-muted">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-cormorant text-3xl font-bold mb-6">
              About {formatStyleName(style)} Style
            </h2>
            <div className="prose prose-lg mx-auto text-gray-700">
              {getStyleDescription(style)}
            </div>
          </div>
        </div>
      </section>

      {/* Related Styles */}
      <section className="py-12 md:py-16">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="font-cormorant text-3xl font-bold mb-4">
              Explore Other Styles
            </h2>
            <p className="text-gray-600">
              Discover more beautiful flower throw pillow collections
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {validStyles
              .filter(s => s !== style)
              .slice(0, 4)
              .map((relatedStyle) => (
                <Link
                  key={relatedStyle}
                  href={`/flower-throw-pillows/${relatedStyle}`}
                  className="group p-6 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow text-center"
                >
                  <h3 className="font-medium text-gray-900 group-hover:text-primary transition-colors">
                    {formatStyleName(relatedStyle)}
                  </h3>
                  <p className="text-sm text-gray-600 mt-1">
                    {getProductsByFilters({ style: relatedStyle as ProductStyle }).length} products
                  </p>
                </Link>
              ))}
          </div>
        </div>
      </section>
    </>
  )
}

// Helper function to get style descriptions
function getStyleDescription(style: ProductStyle): string {
  const descriptions = {
    'watercolor': 'Watercolor flower throw pillows feature soft, flowing designs with beautiful color blends that create an artistic and dreamy atmosphere in any space.',
    'floral': 'Classic floral patterns bring timeless elegance to your home with detailed botanical designs and vibrant flower motifs.',
    'solid-color': 'Clean and versatile solid-color pillows provide the perfect backdrop for any decor style while adding comfort and sophistication.',
    'abstract': 'Abstract floral designs offer a modern interpretation of nature with artistic shapes and contemporary color palettes.',
    'vintage': 'Vintage-inspired flower pillows capture the charm of bygone eras with classic patterns and nostalgic color schemes.',
    'modern': 'Modern floral designs blend contemporary aesthetics with natural elements for a fresh, updated look.',
    'boho': 'Bohemian flower pillows embrace free-spirited design with eclectic patterns and warm, earthy tones.',
    'farmhouse': 'Farmhouse style flower pillows bring rustic charm and cozy comfort with traditional patterns and natural colors.'
  }
  
  return descriptions[style] || 'Beautiful flower throw pillows to enhance your home decor.'
}
