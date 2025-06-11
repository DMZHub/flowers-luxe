 "use client"
import React, { useState } from 'react'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { FiShoppingBag, FiHeart, FiShare2, FiChevronLeft, FiChevronRight, FiStar, FiCheck, FiTruck, FiShield, FiRotateCcw } from 'react-icons/fi'
import ProductCard from '../../../../components/ProductCard'
import SchemaMarkup from '../../../../components/SchemaMarkup'
import Breadcrumbs from '../../../../components/Breadcrumbs'
import ProductImageGallery from '../../../../components/ProductImageGallery'
import ProductSpecifications from '../../../../components/ProductSpecifications'
import { 
  getProductBySlug, 
  getRelatedProducts,
  type ProductStyle 
} from '../../../../data/products'
import { generateProductSchema } from '../../../../utils/schema'
import { generateProductMetadata, generateImageAlt } from '../../../../utils/seo'
import { ProductPageParams } from '../../../../components/ParamsWrapper'

export default function ProductPageComponent({ params }: { params: ProductPageParams }) {
  const { style, product: productSlug } = params;
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  
  // Get the product
  const product = getProductBySlug(productSlug);
  
  // Return 404 if product not found
  if (!product || product.style !== style) {
    notFound();
  }
  
  // Get related products
  const relatedProducts = getRelatedProducts(product, 4);
  
  // Calculate current price
  const currentPrice = product.discount 
    ? product.price * (1 - product.discount.percentage / 100)
    : product.price;
  
  // Generate schema markup
  const productSchema = generateProductSchema(product);
  
  // Breadcrumb items
  const breadcrumbItems = [
    { name: 'Flower Throw Pillows', url: '/flower-throw-pillows' },
    { name: `${style.charAt(0).toUpperCase() + style.slice(1)} Style`, url: `/flower-throw-pillows/${style}` },
    { name: product.title, url: `/flower-throw-pillows/${style}/${productSlug}` }
  ];

  return (
    <>
      <SchemaMarkup schema={productSchema} />
      
      {/* Breadcrumbs */}
      <div className="container-custom">
        <Breadcrumbs items={breadcrumbItems} />
      </div>

      {/* Product Details Section */}
      <section className="py-8 md:py-12">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Product Images */}
            <div className="space-y-4">
              <ProductImageGallery
                images={product.images}
                productTitle={product.title}
                selectedIndex={selectedImageIndex}
                onImageSelect={setSelectedImageIndex}
              />
            </div>
            
            {/* Product Info */}
            <div className="space-y-6">
              {/* Product Header */}
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="bg-primary/10 text-primary text-xs font-medium px-2 py-1 rounded">
                    {product.style.charAt(0).toUpperCase() + product.style.slice(1)} Style
                  </span>
                  {product.featured && (
                    <span className="bg-gold/10 text-gold text-xs font-medium px-2 py-1 rounded">
                      Featured
                    </span>
                  )}
                </div>
                
                <h1 className="font-cormorant text-3xl md:text-4xl font-bold mb-4">
                  {product.title}
                </h1>
                
                {/* Rating */}
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <FiStar key={i} className="text-yellow-400 fill-current" size={16} />
                    ))}
                  </div>
                  <span className="text-sm text-gray-600">(127 reviews)</span>
                </div>
                
                {/* Price */}
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-3xl font-bold text-gray-900">
                    ${currentPrice.toFixed(2)}
                  </span>
                  {product.discount && (
                    <>
                      <span className="text-xl text-gray-500 line-through">
                        ${product.price.toFixed(2)}
                      </span>
                      <span className="bg-red-100 text-red-800 text-sm font-medium px-2 py-1 rounded">
                        Save {product.discount.percentage}%
                      </span>
                    </>
                  )}
                </div>
              </div>
              
              {/* Product Description */}
              <div>
                <p className="text-gray-600 leading-relaxed">
                  {product.shortDescription || product.description.substring(0, 200)}...
                </p>
              </div>
              
              {/* Key Features */}
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm text-gray-700">
                  <FiCheck className="text-green-600" size={16} />
                  <span>Handcrafted in America</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-700">
                  <FiCheck className="text-green-600" size={16} />
                  <span>Premium textured poly twill fabric</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-700">
                  <FiCheck className="text-green-600" size={16} />
                  <span>Includes concealed zipper and insert</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-700">
                  <FiCheck className="text-green-600" size={16} />
                  <span>Machine washable cover</span>
                </div>
              </div>
              
              {/* Stock Status */}
              <div className="flex items-center gap-2">
                <div className={`w-3 h-3 rounded-full ${product.inStock ? 'bg-green-500' : 'bg-red-500'}`}></div>
                <span className={`text-sm font-medium ${product.inStock ? 'text-green-700' : 'text-red-700'}`}>
                  {product.inStock ? 'In Stock' : 'Out of Stock'}
                </span>
              </div>
              
              {/* Action Buttons */}
              <div className="space-y-4">
                <div className="flex gap-3">
                  <a
                    href={product.externalUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 btn-primary text-center"
                    disabled={!product.inStock}
                  >
                    <FiShoppingBag className="mr-2" size={18} />
                    {product.inStock ? 'Shop Now' : 'Out of Stock'}
                  </a>
                  <button className="btn-outline p-3">
                    <FiHeart size={18} />
                  </button>
                  <button className="btn-outline p-3">
                    <FiShare2 size={18} />
                  </button>
                </div>
                
                {/* Guarantee Badges */}
                <div className="grid grid-cols-3 gap-3 pt-4 border-t border-gray-100">
                  <div className="text-center">
                    <FiTruck className="mx-auto mb-1 text-primary" size={20} />
                    <div className="text-xs text-gray-600">Fast Shipping</div>
                  </div>
                  <div className="text-center">
                    <FiShield className="mx-auto mb-1 text-primary" size={20} />
                    <div className="text-xs text-gray-600">Quality Guarantee</div>
                  </div>
                  <div className="text-center">
                    <FiRotateCcw className="mx-auto mb-1 text-primary" size={20} />
                    <div className="text-xs text-gray-600">Easy Returns</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Details Tabs */}
      <section className="py-12 bg-surface-muted">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-xl p-8 shadow-sm">
              <h2 className="font-cormorant text-2xl font-bold mb-6">Product Details</h2>
              
              <div className="prose max-w-none">
                <p className="text-gray-600 leading-relaxed mb-6">
                  {product.description}
                </p>
                
                <ProductSpecifications specifications={product.specifications} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Products */}
      <section className="py-16 md:py-24">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="font-cormorant text-3xl font-bold mb-4">You Might Also Like</h2>
            <p className="text-gray-600">
              Discover more beautiful flower throw pillows from our collection
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
          
          <div className="text-center mt-12">
            <Link href="/shop" className="btn-secondary inline-flex items-center gap-2">
              <span>Shop All Products</span>
              <FiChevronRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
