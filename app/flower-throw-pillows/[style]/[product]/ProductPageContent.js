import React from 'react'
import Link from 'next/link'

export default function ProductPageContent({ params }) {
  // Ultra minimal version - no data fetching, no complex components
  const { style, product: productSlug } = params || {}
  
  // Basic validation
  if (!style || !productSlug) {
    return React.createElement('div', { className: 'container-custom py-16 text-center' },
      React.createElement('h1', { className: 'text-2xl font-bold mb-4' }, 'Invalid Product'),
      React.createElement(Link, { href: '/flower-throw-pillows', className: 'text-blue-600 hover:underline' }, 'Back to Products')
    )
  }

  return React.createElement('div', { className: 'min-h-screen bg-white' },
    // Header section
    React.createElement('div', { className: 'container mx-auto px-4 py-8' },
      React.createElement('div', { className: 'mb-6' },
        React.createElement(Link, { 
          href: '/flower-throw-pillows', 
          className: 'text-blue-600 hover:underline text-sm'
        }, '← Back to Flower Throw Pillows')
      ),
      
      // Main content
      React.createElement('div', { className: 'grid grid-cols-1 lg:grid-cols-2 gap-12' },
        // Image placeholder
        React.createElement('div', { className: 'space-y-4' },
          React.createElement('div', { 
            className: 'aspect-square bg-gray-100 rounded-lg flex items-center justify-center border-2 border-gray-200'
          },
            React.createElement('div', { className: 'text-center text-gray-500' },
              React.createElement('div', { className: 'text-6xl mb-4' }, '🌸'),
              React.createElement('p', null, 'Product Image')
            )
          )
        ),
        
        // Product info
        React.createElement('div', { className: 'space-y-6' },
          React.createElement('div', null,
            React.createElement('div', { className: 'text-sm text-gray-600 mb-2' },
              `Style: ${style.charAt(0).toUpperCase() + style.slice(1)}`
            ),
            React.createElement('h1', { className: 'text-4xl font-bold text-gray-900 mb-4' },
              productSlug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
            ),
            React.createElement('div', { className: 'text-3xl font-bold text-gray-900 mb-6' },
              '$39.99'
            )
          ),
          
          React.createElement('div', { className: 'prose max-w-none' },
            React.createElement('p', { className: 'text-gray-600 text-lg leading-relaxed' },
              `Beautiful ${style} style flower throw pillow featuring stunning floral designs. Perfect for adding a touch of elegance to any room.`
            )
          ),
          
          React.createElement('div', { className: 'space-y-3' },
            React.createElement('div', { className: 'flex items-center text-sm text-gray-700' },
              React.createElement('span', { className: 'text-green-600 mr-2' }, '✓'),
              React.createElement('span', null, 'Handcrafted in America')
            ),
            React.createElement('div', { className: 'flex items-center text-sm text-gray-700' },
              React.createElement('span', { className: 'text-green-600 mr-2' }, '✓'),
              React.createElement('span', null, 'Premium quality fabric')
            ),
            React.createElement('div', { className: 'flex items-center text-sm text-gray-700' },
              React.createElement('span', { className: 'text-green-600 mr-2' }, '✓'),
              React.createElement('span', null, 'Machine washable')
            )
          ),
          
          React.createElement('div', { className: 'pt-6' },
            React.createElement('button', { 
              className: 'w-full bg-blue-600 text-white py-4 px-8 rounded-lg font-semibold hover:bg-blue-700 transition-colors',
              onClick: () => window.open('#', '_blank')
            }, '🛒 Shop Now')
          )
        )
      )
    ),
    
    // Simple details section
    React.createElement('div', { className: 'bg-gray-50 py-16' },
      React.createElement('div', { className: 'container mx-auto px-4' },
        React.createElement('div', { className: 'max-w-4xl mx-auto' },
          React.createElement('h2', { className: 'text-3xl font-bold text-center mb-8' }, 'Product Details'),
          React.createElement('div', { className: 'bg-white rounded-xl p-8 shadow-sm' },
            React.createElement('p', { className: 'text-gray-600 text-lg leading-relaxed mb-6' },
              `This beautiful ${style} style throw pillow features intricate floral designs that will complement any decor. Made with premium materials and expert craftsmanship.`
            ),
            React.createElement('div', { className: 'grid grid-cols-1 md:grid-cols-2 gap-6' },
              React.createElement('div', null,
                React.createElement('h3', { className: 'font-semibold mb-2' }, 'Specifications'),
                React.createElement('ul', { className: 'space-y-1 text-sm text-gray-600' },
                  React.createElement('li', null, 'Size: 18" x 18"'),
                  React.createElement('li', null, 'Material: Poly twill fabric'),
                  React.createElement('li', null, 'Insert: Included'),
                  React.createElement('li', null, 'Care: Machine washable')
                )
              ),
              React.createElement('div', null,
                React.createElement('h3', { className: 'font-semibold mb-2' }, 'Features'),
                React.createElement('ul', { className: 'space-y-1 text-sm text-gray-600' },
                  React.createElement('li', null, 'Concealed zipper'),
                  React.createElement('li', null, 'Fade resistant'),
                  React.createElement('li', null, 'Handcrafted quality'),
                  React.createElement('li', null, 'Made in USA')
                )
              )
            )
          )
        )
      )
    ),
    
    // Simple footer
    React.createElement('div', { className: 'py-16 text-center' },
      React.createElement('div', { className: 'container mx-auto px-4' },
        React.createElement('h2', { className: 'text-3xl font-bold mb-8' }, 'Explore More'),
        React.createElement(Link, { 
          href: '/flower-throw-pillows',
          className: 'inline-block bg-gray-900 text-white py-3 px-8 rounded-lg font-semibold hover:bg-gray-800 transition-colors'
        }, 'View All Products')
      )
    )
  )
}
