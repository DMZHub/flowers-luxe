import React from 'react'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import ProductCard from '../../../../components/ProductCard'
import SchemaMarkup from '../../../../components/SchemaMarkup'
import Breadcrumbs from '../../../../components/Breadcrumbs'
import ProductImageGallery from '../../../../components/ProductImageGallery'
import ProductSpecifications from '../../../../components/ProductSpecifications'
import { getProductBySlug, getRelatedProducts } from '../../../../data/products'
import { generateProductSchema } from '../../../../utils/schema'

export default function ProductPageContent({ params }) {
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
              React.createElement('h1', { className: 'font-cormorant text-3xl md:text-4xl font-bold mb-4' },
                product.title
              ),
              
              React.createElement('div', { className: 'flex items-center gap-3 mb-6' },
                React.createElement('span', { className: 'text-3xl font-bold text-gray-900' },
                  `$${currentPrice.toFixed(2)}`
                )
              )
            ),
            
            React.createElement('div', null,
              React.createElement('p', { className: 'text-gray-600 leading-relaxed' },
                `${product.shortDescription || product.description.substring(0, 200)}...`
              )
            ),
            
            React.createElement('div', { className: 'space-y-4' },
              React.createElement('div', { className: 'flex gap-3' },
                React.createElement('a', {
                  href: product.externalUrl,
                  target: '_blank',
                  rel: 'noopener noreferrer',
                  className: 'flex-1 btn-primary text-center'
                }, 'Shop Now')
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
            React.createElement('p', { className: 'text-gray-600 leading-relaxed mb-6' },
              product.description
            ),
            React.createElement(ProductSpecifications, { specifications: product.specifications })
          )
        )
      )
    ),

    React.createElement('section', { className: 'py-16 md:py-24' },
      React.createElement('div', { className: 'container-custom' },
        React.createElement('div', { className: 'text-center mb-12' },
          React.createElement('h2', { className: 'font-cormorant text-3xl font-bold mb-4' }, 'You Might Also Like')
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
          React.createElement(Link, { href: '/shop', className: 'btn-secondary' }, 'Shop All Products')
        )
      )
    )
  )
}
