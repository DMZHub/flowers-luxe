import React from 'react'
import { notFound } from 'next/navigation'
import Link from 'next/link'

export default function ProductPageContent({ params }) {
  try {
    const { style, product: productSlug } = params
    
    if (!style || !productSlug) {
      console.error('Missing params:', { style, productSlug })
      notFound()
    }

    // Dynamic imports to avoid potential SSR issues
    const { getProductBySlug, getRelatedProducts } = require('../../../../data/products')
    const { generateProductSchema } = require('../../../../utils/schema')

    const product = getProductBySlug(productSlug)
    
    if (!product) {
      console.error('Product not found:', productSlug)
      notFound()
    }

    if (product.style !== style) {
      console.error('Style mismatch:', { expected: style, actual: product.style })
      notFound()
    }
    
    const relatedProducts = getRelatedProducts(product, 4) || []
    
    const currentPrice = product.discount 
      ? product.price * (1 - product.discount.percentage / 100)
      : product.price
    
    const productSchema = generateProductSchema(product)
    
    const breadcrumbItems = [
      { name: 'Flower Throw Pillows', url: '/flower-throw-pillows' },
      { name: `${style.charAt(0).toUpperCase() + style.slice(1)} Style`, url: `/flower-throw-pillows/${style}` },
      { name: product.title, url: `/flower-throw-pillows/${style}/${productSlug}` }
    ]

    // Safe component imports
    let SchemaMarkup, Breadcrumbs, ProductImageGallery, ProductSpecifications, ProductCard

    try {
      SchemaMarkup = require('../../../../components/SchemaMarkup').default
      Breadcrumbs = require('../../../../components/Breadcrumbs').default
      ProductImageGallery = require('../../../../components/ProductImageGallery').default
      ProductSpecifications = require('../../../../components/ProductSpecifications').default
      ProductCard = require('../../../../components/ProductCard').default
    } catch (importError) {
      console.error('Component import error:', importError)
      // Fallback without components that might be causing issues
      return React.createElement('div', { className: 'container-custom py-16' },
        React.createElement('h1', { className: 'text-3xl font-bold mb-4' }, product.title),
        React.createElement('p', { className: 'text-gray-600 mb-6' }, product.description),
        React.createElement('a', {
          href: product.externalUrl,
          target: '_blank',
          rel: 'noopener noreferrer',
          className: 'btn-primary'
        }, 'Shop Now')
      )
    }

    return React.createElement('div', null,
      // Schema markup (optional, might fail)
      SchemaMarkup ? React.createElement(SchemaMarkup, { schema: productSchema }) : null,
      
      // Breadcrumbs
      React.createElement('div', { className: 'container-custom' },
        Breadcrumbs ? React.createElement(Breadcrumbs, { items: breadcrumbItems }) : React.createElement('div', { className: 'py-4' },
          React.createElement(Link, { href: '/flower-throw-pillows', className: 'text-primary' }, 'Flower Throw Pillows'),
          React.createElement('span', { className: 'mx-2' }, ' > '),
          React.createElement('span', null, product.title)
        )
      ),

      // Main product section
      React.createElement('section', { className: 'py-8 md:py-12' },
        React.createElement('div', { className: 'container-custom' },
          React.createElement('div', { className: 'grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12' },
            // Product images
            React.createElement('div', { className: 'space-y-4' },
              ProductImageGallery ? React.createElement(ProductImageGallery, {
                images: product.images || [],
                productTitle: product.title
              }) : React.createElement('div', { className: 'aspect-square bg-gray-200 rounded-lg flex items-center justify-center' },
                React.createElement('span', { className: 'text-gray-500' }, 'Product Image')
              )
            ),
            
            // Product info
            React.createElement('div', { className: 'space-y-6' },
              React.createElement('div', null,
                React.createElement('h1', { className: 'font-cormorant text-3xl md:text-4xl font-bold mb-4' },
                  product.title
                ),
                
                React.createElement('div', { className: 'flex items-center gap-3 mb-6' },
                  React.createElement('span', { className: 'text-3xl font-bold text-gray-900' },
                    `$${currentPrice.toFixed(2)}`
                  ),
                  product.discount ? React.createElement('span', { className: 'bg-red-100 text-red-800 text-sm font-medium px-2 py-1 rounded' },
                    `Save ${product.discount.percentage}%`
                  ) : null
                )
              ),
              
              React.createElement('div', null,
                React.createElement('p', { className: 'text-gray-600 leading-relaxed' },
                  product.shortDescription || product.description.substring(0, 200) + '...'
                )
              ),
              
              React.createElement('div', { className: 'space-y-4' },
                React.createElement('a', {
                  href: product.externalUrl,
                  target: '_blank',
                  rel: 'noopener noreferrer',
                  className: 'block w-full text-center btn-primary py-3'
                }, 'Shop Now')
              )
            )
          )
        )
      ),

      // Product details
      React.createElement('section', { className: 'py-12 bg-surface-muted' },
        React.createElement('div', { className: 'container-custom' },
          React.createElement('div', { className: 'max-w-4xl mx-auto' },
            React.createElement('div', { className: 'bg-white rounded-xl p-8 shadow-sm' },
              React.createElement('h2', { className: 'font-cormorant text-2xl font-bold mb-6' }, 'Product Details'),
              React.createElement('p', { className: 'text-gray-600 leading-relaxed mb-6' },
                product.description
              ),
              ProductSpecifications && product.specifications ? React.createElement(ProductSpecifications, { 
                specifications: product.specifications 
              }) : React.createElement('div', { className: 'space-y-2' },
                (product.specifications || []).map((spec, index) =>
                  React.createElement('div', { key: index, className: 'flex justify-between' },
                    React.createElement('span', { className: 'font-medium' }, spec.name),
                    React.createElement('span', null, spec.value)
                  )
                )
              )
            )
          )
        )
      ),

      // Related products
      React.createElement('section', { className: 'py-16 md:py-24' },
        React.createElement('div', { className: 'container-custom' },
          React.createElement('div', { className: 'text-center mb-12' },
            React.createElement('h2', { className: 'font-cormorant text-3xl font-bold mb-4' }, 'You Might Also Like')
          ),
          React.createElement('div', { className: 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6' },
            relatedProducts.slice(0, 4).map((relatedProduct) =>
              ProductCard ? React.createElement(ProductCard, {
                key: relatedProduct.id,
                product: relatedProduct,
                showQuickView: true
              }) : React.createElement('div', { 
                key: relatedProduct.id, 
                className: 'bg-white p-4 rounded-lg shadow-sm' 
              },
                React.createElement('h3', { className: 'font-medium mb-2' }, relatedProduct.title),
                React.createElement('p', { className: 'text-sm text-gray-600' }, `$${relatedProduct.price}`)
              )
            )
          ),
          React.createElement('div', { className: 'text-center mt-12' },
            React.createElement(Link, { href: '/shop', className: 'btn-secondary' }, 'Shop All Products')
          )
        )
      )
    )

  } catch (error) {
    console.error('ProductPageContent error:', error)
    
    // Fallback minimal page
    return React.createElement('div', { className: 'container-custom py-16 text-center' },
      React.createElement('h1', { className: 'text-2xl font-bold mb-4' }, 'Product Page'),
      React.createElement('p', { className: 'text-gray-600 mb-4' }, 'There was an issue loading this product.'),
      React.createElement(Link, { href: '/flower-throw-pillows', className: 'btn-primary' }, 'Back to Products')
    )
  }
}
