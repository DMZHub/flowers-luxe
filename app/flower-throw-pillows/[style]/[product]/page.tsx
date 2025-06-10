"use client"
import React from 'react'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { FiExternalLink, FiHeart, FiShare2, FiTruck, FiShield, FiRotateCcw } from 'react-icons/fi'
import ProductImageGallery from '../../../../components/ProductImageGallery'
import ProductSpecifications from '../../../../components/ProductSpecifications'
import ProductCard from '../../../../components/ProductCard'
import SchemaMarkup from '../../../../components/SchemaMarkup'
import Breadcrumbs from '../../../../components/Breadcrumbs'
import { 
  products, 
  getProductBySlug, 
  getRelatedProducts,
  type Product
} from '../../../../data/products'
import { generateProductSchema, generateBreadcrumbSchema } from '../../../../utils/schema'
import { generateProductMetadata } from '../../../../utils/seo'
{/*
interface ProductPageProps {
  params: {
    style: string
    product: string
  }
}

export default function ProductPage({ params }: ProductPageProps) {
  const product = getProductBySlug(params.product)
  
  if (!product || product.style !== params.style) {
    notFound()
  }
*/}

interface ProductPageProps {
  params: Promise<{
    style: string
    product: string
  }>
}

export default function ProductPage({ params }: ProductPageProps) {
  const resolvedParams = React.use(params)
  const product = getProductBySlug(resolvedParams.product)
  
  if (!product || product.style !== resolvedParams.style) {
    notFound()
  }
  
  // Get related products
  const relatedProducts = getRelatedProducts(product, 4)
  
  // Calculate current price
  const currentPrice = product.discount 
    ? product.price * (1 - product.discount.percentage / 100)
    : product.price

  // Generate schemas
  const productSchema = generateProductSchema(product)
  const breadcrumbItems = [
    { name: 'Flower Throw Pillows', url: '/flower-throw-pillows' },
    { name: `${product.style.charAt(0).toUpperCase() + product.style.slice(1)} Style`, url: `/flower-throw-pillows/${product.style}` },
    { name: product.title, url: `/flower-throw-pillows/${product.style}/${product.slug}` }
  ]
  const breadcrumbSchema = generateBreadcrumbSchema(breadcrumbItems)

  // Format price
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(price);
  };

  return (
    <>
      <SchemaMarkup schema={productSchema} />
      <SchemaMarkup schema={breadcrumbSchema} />
      
      {/* Breadcrumbs */}
      <div className="container-custom">
        <Breadcrumbs items={breadcrumbItems} />
      </div>

      {/* Product Details Section */}
      <section className="py-8 md:py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Product Images */}
            <div className="group">
              <ProductImageGallery 
                images={product.images} 
                productTitle={product.title} 
              />
            </div>

            {/* Product Info */}
            <div className="space-y-6">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <span className="bg-primary/10 text-primary text-sm font-medium px-3 py-1 rounded-full">
                    {product.style.charAt(0).toUpperCase() + product.style.slice(1)} Style
                  </span>
                  <span className="text-sm text-gray-500 capitalize">
                    {product.flowerType}
                  </span>
                  {product.featured && (
                    <span className="bg-yellow-100 text-yellow-800 text-sm font-medium px-3 py-1 rounded-full">
                      Featured
                    </span>
                  )}
                </div>
                
                <h1 className="font-cormorant text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  {product.title}
                </h1>
                
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex items-center gap-2">
                    <span className="text-3xl font-bold text-gray-900">
                      {formatPrice(currentPrice)}
                    </span>
                    {product.discount && (
                      <>
                        <span className="text-xl text-gray-500 line-through">
                          {formatPrice(product.price)}
                        </span>
                        <span className="bg-red-100 text-red-800 text-sm font-medium px-2 py-1 rounded">
                          Save {product.discount.percentage}%
                        </span>
                      </>
                    )}
                  </div>
                </div>

                <div className="flex items-center gap-4 mb-6">
                  {/* Stock Status */}
                  <div className="flex items-center gap-2">
                    <div className={`w-3 h-3 rounded-full ${product.inStock ? 'bg-green-500' : 'bg-red-500'}`}></div>
                    <span className={`text-sm font-medium ${product.inStock ? 'text-green-700' : 'text-red-700'}`}>
                      {product.inStock ? 'In Stock' : 'Out of Stock'}
                    </span>
                  </div>
                  
                  {/* Colors */}
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-gray-600">Colors:</span>
                    <div className="flex gap-1">
                      {product.colors.slice(0, 4).map((color, index) => (
                        <div
                          key={index}
                          className={`w-4 h-4 rounded-full border border-gray-200 ${getColorClass(color)}`}
                          title={color}
                        />
                      ))}
                      {product.colors.length > 4 && (
                        <span className="text-sm text-gray-500 ml-1">
                          +{product.colors.length - 4} more
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              {/* Description */}
              <div className="prose prose-gray max-w-none">
                <p className="text-gray-700 leading-relaxed">
                  {product.description}
                </p>
              </div>

              {/* Features */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg">
                  <FiTruck className="text-primary flex-shrink-0" size={20} />
                  <div>
                    <div className="font-medium text-sm">Free Shipping</div>
                    <div className="text-xs text-gray-600">On orders over $80</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg">
                  <FiShield className="text-primary flex-shrink-0" size={20} />
                  <div>
                    <div className="font-medium text-sm">Quality Guarantee</div>
                    <div className="text-xs text-gray-600">Premium materials</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg">
                  <FiRotateCcw className="text-primary flex-shrink-0" size={20} />
                  <div>
                    <div className="font-medium text-sm">Easy Returns</div>
                    <div className="text-xs text-gray-600">30-day policy</div>
                  </div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="space-y-4">
                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href={product.externalUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-primary hover:bg-primary-dark text-white font-medium py-4 px-6 rounded-lg transition-colors flex items-center justify-center gap-2"
                  >
                    <span>Shop on TeePublic</span>
                    <FiExternalLink size={18} />
                  </a>
                  
                  
                  <button 
                    className="flex items-center justify-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium py-4 px-6 rounded-lg transition-colors"
                    aria-label="Share product"
                  >
                    <FiShare2 size={18} />
                    <span>Share</span>
                  </button>
                </div>
                
             
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Specifications */}
      <section className="py-12 md:py-16 bg-surface-muted">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <ProductSpecifications specifications={product.specifications} />
          </div>
        </div>
      </section>

      {/* Product Details & Care Instructions */}
      <section className="py-12 md:py-16">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
                <h3 className="font-cormorant text-2xl font-bold mb-4">Product Details</h3>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Style:</span>
                    <span className="font-medium capitalize">{product.style}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Flower Type:</span>
                    <span className="font-medium capitalize">{product.flowerType}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Colors:</span>
                    <span className="font-medium">{product.colors.length} options</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Material:</span>
                    <span className="font-medium">Textured Poly Twill</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Made In:</span>
                    <span className="font-medium">USA</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">SKU:</span>
                    <span className="font-medium text-sm">{product.id}</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
                <h3 className="font-cormorant text-2xl font-bold mb-4">Care Instructions</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-primary mb-2">Pillow Cover:</h4>
                    <ul className="text-gray-600 text-sm space-y-1">
                      <li>• Machine wash separately in cold water</li>
                      <li>• Use gentle cycle with mild detergent</li>
                      <li>• No bleach or harsh chemicals</li>
                      <li>• Tumble dry on low heat</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-primary mb-2">Insert:</h4>
                    <ul className="text-gray-600 text-sm space-y-1">
                      <li>• Spot clean only</li>
                      <li>• Professional dry cleaning recommended</li>
                      <li>• Air dry thoroughly</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="py-12 md:py-16 bg-surface-muted">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="font-cormorant text-3xl font-bold mb-4">You Might Also Like</h2>
              <p className="text-gray-600">
                Similar flower throw pillows that complement your style
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((relatedProduct) => (
                <ProductCard
                  key={relatedProduct.id}
                  product={relatedProduct}
                  showQuickView={true}
                />
              ))}
            </div>
            
            <div className="text-center mt-8">
              <Link href={`/flower-throw-pillows/${product.style}`} className="btn-secondary inline-flex items-center gap-2">
                <span>View All {product.style.charAt(0).toUpperCase() + product.style.slice(1)} Pillows</span>
                <FiExternalLink size={16} />
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* FAQ Section */}
      <section className="py-12 md:py-16">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-cormorant text-3xl font-bold text-center mb-12">
              Frequently Asked Questions
            </h2>
            
            <div className="space-y-6">
              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <h3 className="font-medium text-lg mb-3">Can I wash my pillows?</h3>
                <p className="text-gray-600">
                  Yes! All pillows consist of an outer cover and an insert. The cover can be machine washed 
                  separately in cold water on a gentle cycle with mild detergent and no bleach. Tumble dry low. 
                  The insert should be spot cleaned or dry cleaned only.
                </p>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <h3 className="font-medium text-lg mb-3">What material is this item made of?</h3>
                <p className="text-gray-600">
                  Textured Poly "Twill" pillow cover with concealed zipper and synthetic insert included. 
                  A soft, comfortable accent for the home. Individually cut and sewn by hand in America.
                </p>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <h3 className="font-medium text-lg mb-3">What is the Return/Exchange policy?</h3>
                <p className="text-gray-600">
                  We want you to love your order! If for any reason you don't, let us know and we'll make things right. 
                  Our return policy follows TeePublic's standard 30-day return window.
                </p>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <h3 className="font-medium text-lg mb-3">How is product quality ensured?</h3>
                <p className="text-gray-600">
                  Our Production Team establishes the highest quality standards for third-party printers who 
                  participate in the marketplace to ensure that every product sold is perfect.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

// Helper function to get Tailwind color classes
function getColorClass(color: string): string {
  const colorMap: Record<string, string> = {
    'multicolor': 'bg-gradient-to-r from-red-400 via-yellow-400 to-blue-400',
    'blue': 'bg-blue-500',
    'green': 'bg-green-500',
    'purple': 'bg-purple-500',
    'black': 'bg-black',
    'pink': 'bg-pink-500',
    'white': 'bg-white border-2',
    'black-and-white': 'bg-gradient-to-r from-black to-white',
    'orange': 'bg-orange-500',
    'gold': 'bg-yellow-400',
    'red': 'bg-red-500',
    'yellow': 'bg-yellow-500',
    'navy': 'bg-blue-900',
  };
  
  return colorMap[color] || 'bg-gray-400';
}