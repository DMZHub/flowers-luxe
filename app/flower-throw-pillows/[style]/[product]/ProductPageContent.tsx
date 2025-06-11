import React from 'react'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { FiShoppingBag, FiHeart, FiShare2, FiChevronRight, FiStar, FiCheck, FiTruck, FiShield, FiRotateCcw } from 'react-icons/fi'
import ProductCard from '../../../../components/ProductCard'
import SchemaMarkup from '../../../../components/SchemaMarkup'
import Breadcrumbs from '../../../../components/Breadcrumbs'
import ProductImageGallery from '../../../../components/ProductImageGallery'
import ProductSpecifications from '../../../../components/ProductSpecifications'
import { getProductBySlug, getRelatedProducts } from '../../../../data/products'
import { generateProductSchema } from '../../../../utils/schema'
import { ProductPageParams } from '../../../../components/ParamsWrapper'

interface Props {
  params: ProductPageParams
}

function ProductPageContent({ params }: Props) {
  const { style, product: productSlug } = params
  
  const product = getProductBySlug(productSlug)
  
  if (!product || product.style !== style) {
    notFound()
  }
  
  const relatedProducts = getRelatedProducts(product, 4)
  
  const currentPrice = product.discount 
    ? product.price * (1 - product.discount.percentage / 100)
    : product.price
  
  const productSchema = generateProductSchema(product)
  
  const breadcrumbItems = [
    { name: 'Flower Throw Pillows', url: '/flower-throw-pillows' },
    { name: `${style.charAt(0).toUpperCase() + style.slice(1)} Style`, url: `/flower-throw-pillows/${style}` },
    { name: product.title, url: `/flower-throw-pillows/${style}/${productSlug}` }
  ]

  return React.createElement('div', null,
    React.createElement(SchemaMarkup, { schema: productSchema }),
    
    React.createElement('div', { className: 'container-custom' },
      React.createElement(Breadcrumbs, { items: breadcrumbItems })
    ),

    React.createElement('section', { className: 'py-8 md:py-12' },
      React.createElement('div', { className: 'container-custom' },
        React.createElement('div', { className: 'grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12' },
          React.createElement('div', { className: 'space-y-4' },
            React.createElement(ProductImageGallery, {
              images: product.images,
              productTitle: product.title
            })
          ),
          
          React.createElement('div', { className: 'space-y-6' },
            React.createElement('div', null,
              React.createElement('div', { className: 'flex items-center gap-2 mb-2' },
                React.createElement('span', { className: 'bg-primary/10 text-primary text-xs font-medium px-2 py-1 rounded' },
                  `${product.style.charAt(0).toUpperCase() + product.style.slice(1)} Style`
                ),
                product.featured && React.createElement('span', { className: 'bg-gold/10 text-gold text-xs font-medium px-2 py-1 rounded' },
                  'Featured'
                )
              ),
              
              React.createElement('h1', { className: 'font-cormorant text-3xl md:text-4xl font-bold mb-4' },
                product.title
              ),
              
              React.createElement('div', { className: 'flex items-center gap-2 mb-4' },
                React.createElement('div', { className: 'flex items-center' },
                  React.createElement(FiStar, { className: 'text-yellow-400 fill-current', size: 16 }),
                  React.createElement(FiStar, { className: 'text-yellow-400 fill-current', size: 16 }),
                  React.createElement(FiStar, { className: 'text-yellow-400 fill-current', size: 16 }),
                  React.createElement(FiStar, { className: 'text-yellow-400 fill-current', size: 16 }),
                  React.createElement(FiStar, { className: 'text-yellow-400 fill-current', size: 16 })
                ),
                React.createElement('span', { className: 'text-sm text-gray-600' }, '(127 reviews)')
              ),
              
              React.createElement('div', { className: 'flex items-center gap-3 mb-6' },
                React.createElement('span', { className: 'text-3xl font-bold text-gray-900' },
                  `$${currentPrice.toFixed(2)}`
                ),
                product.discount && React.createElement('div', { className: 'flex items-center gap-2' },
                  React.createElement('span', { className: 'text-xl text-gray-500 line-through' },
                    `$${product.price.toFixed(2)}`
                  ),
                  React.createElement('span', { className: 'bg-red-100 text-red-800 text-sm font-medium px-2 py-1 rounded' },
                    `Save ${product.discount.percentage}%`
                  )
                )
              )
            ),
            
            React.createElement('div', null,
              React.createElement('p', { className: 'text-gray-600 leading-relaxed' },
                `${product.shortDescription || product.description.substring(0, 200)}...`
              )
            ),
            
            React.createElement('div', { className: 'space-y-2' },
              React.createElement('div', { className: 'flex items-center gap-2 text-sm text-gray-700' },
                React.createElement(FiCheck, { className: 'text-green-600', size: 16 }),
                React.createElement('span', null, 'Handcrafted in America')
              ),
              React.createElement('div', { className: 'flex items-center gap-2 text-sm text-gray-700' },
                React.createElement(FiCheck, { className: 'text-green-600', size: 16 }),
                React.createElement('span', null, 'Premium textured poly twill fabric')
              ),
              React.createElement('div', { className: 'flex items-center gap-2 text-sm text-gray-700' },
                React.createElement(FiCheck, { className: 'text-green-600', size: 16 }),
                React.createElement('span', null, 'Includes concealed zipper and insert')
              ),
              React.createElement('div', { className: 'flex items-center gap-2 text-sm text-gray-700' },
                React.createElement(FiCheck, { className: 'text-green-600', size: 16 }),
                React.createElement('span', null, 'Machine washable cover')
              )
            ),
            
            React.createElement('div', { className: 'flex items-center gap-2' },
              React.createElement('div', { className: `w-3 h-3 rounded-full ${product.inStock ? 'bg-green-500' : 'bg-red-500'}` }),
              React.createElement('span', { className: `text-sm font-medium ${product.inStock ? 'text-green-700' : 'text-red-700'}` },
                product.inStock ? 'In Stock' : 'Out of Stock'
              )
            ),
            
            React.createElement('div', { className: 'space-y-4' },
              React.createElement('div', { className: 'flex gap-3' },
                React.createElement('a', {
                  href: product.externalUrl,
                  target: '_blank',
                  rel: 'noopener noreferrer',
                  className: 'flex-1 btn-primary text-center',
                  style: !product.inStock ? { pointerEvents: 'none', opacity: 0.6 } : {}
                },
                  React.createElement(FiShoppingBag, { className: 'mr-2', size: 18 }),
                  product.inStock ? 'Shop Now' : 'Out of Stock'
                ),
                React.createElement('button', { className: 'btn-outline p-3' },
                  React.createElement(FiHeart, { size: 18 })
                ),
                React.createElement('button', { className: 'btn-outline p-3' },
                  React.createElement(FiShare2, { size: 18 })
                )
              )
            )
          )
        )
      )
    ),

    React.createElement('section', { className: 'py-12 bg-surface-muted' },
      React.createElement('div', { className: 'container-custom' },
        React.createElement('div', { className: 'max-w-4xl mx-auto' },
          React.createElement('div', { className: 'bg-white rounded-xl p-8 shadow-sm' },
            React.createElement('h2', { className: 'font-cormorant text-2xl font-bold mb-6' }, 'Product Details'),
            React.createElement('div', { className: 'prose max-w-none' },
              React.createElement('p', { className: 'text-gray-600 leading-relaxed mb-6' },
                product.description
              ),
              React.createElement(ProductSpecifications, { specifications: product.specifications })
            )
          )
        )
      )
    ),

    React.createElement('section', { className: 'py-16 md:py-24' },
      React.createElement('div', { className: 'container-custom' },
        React.createElement('div', { className: 'text-center mb-12' },
          React.createElement('h2', { className: 'font-cormorant text-3xl font-bold mb-4' }, 'You Might Also Like'),
          React.createElement('p', { className: 'text-gray-600' },
            'Discover more beautiful flower throw pillows from our collection'
          )
        ),
        React.createElement('div', { className: 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6' },
          ...relatedProducts.map((relatedProduct) =>
            React.createElement(ProductCard, {
              key: relatedProduct.id,
              product: relatedProduct,
              showQuickView: true
            })
          )
        ),
        React.createElement('div', { className: 'text-center mt-12' },
          React.createElement(Link, { href: '/shop', className: 'btn-secondary inline-flex items-center gap-2' },
            React.createElement('span', null, 'Shop All Products'),
            React.createElement(FiChevronRight, { size: 16 })
          )
        )
      )
    )
  )
}

export default ProductPageContent
