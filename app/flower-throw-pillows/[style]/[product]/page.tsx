import React from 'react'
import { notFound } from 'next/navigation'

// Minimal product data for static generation
const STATIC_PRODUCTS = [
  { style: 'vintage', slug: 'rose-garden-vintage-pillow' },
  { style: 'modern', slug: 'geometric-floral-modern-pillow' },
  { style: 'boho', slug: 'wildflower-boho-pillow' },
  { style: 'farmhouse', slug: 'country-rose-farmhouse-pillow' },
  { style: 'abstract', slug: 'abstract-bloom-pillow' },
  { style: 'watercolor', slug: 'soft-petals-watercolor-pillow' },
  { style: 'floral', slug: 'classic-garden-floral-pillow' }
]

// Generate static params for build time
export async function generateStaticParams() {
  return STATIC_PRODUCTS.map((product) => ({
    style: product.style,
    product: product.slug,
  }))
}

// Metadata generation
export async function generateMetadata({ params }) {
  const { style, product: productSlug } = params || {}
  
  if (!style || !productSlug) {
    return {
      title: 'Product Not Found',
      description: 'The requested product could not be found.'
    }
  }

  const title = productSlug
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')

  return {
    title: `${title} - ${style.charAt(0).toUpperCase() + style.slice(1)} Style Flower Throw Pillow`,
    description: `Beautiful ${style} style flower throw pillow featuring ${title.toLowerCase()}. Handcrafted in America with premium materials.`,
    openGraph: {
      title: `${title} - Premium Flower Throw Pillow`,
      description: `Discover our ${style} style flower throw pillow - ${title.toLowerCase()}. Handcrafted quality and unique botanical designs.`,
      type: 'product',
    },
  }
}

// Main page component
export default function ProductPage({ params }) {
  const { style, product: productSlug } = params || {}
  
  // Validate params
  if (!style || !productSlug) {
    notFound()
  }

  // Check if this is a valid combination
  const isValidProduct = STATIC_PRODUCTS.some(
    p => p.style === style && p.slug === productSlug
  )

  if (!isValidProduct) {
    notFound()
  }

  // Generate display title
  const displayTitle = productSlug
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')

  const displayStyle = style.charAt(0).toUpperCase() + style.slice(1)

  return React.createElement('div', {
    style: {
      minHeight: '100vh',
      backgroundColor: '#ffffff',
      fontFamily: 'system-ui, -apple-system, sans-serif'
    }
  },
    React.createElement('div', {
      style: {
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '2rem 1rem'
      }
    },
      React.createElement('div', {
        style: { marginBottom: '1.5rem' }
      },
        React.createElement('a', {
          href: '/flower-throw-pillows',
          style: {
            color: '#2563eb',
            textDecoration: 'none',
            fontSize: '0.875rem'
          }
        }, '← Back to Flower Throw Pillows')
      ),
      
      React.createElement('div', {
        style: {
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '3rem'
        }
      },
        React.createElement('div', null,
          React.createElement('div', {
            style: {
              aspectRatio: '1',
              backgroundColor: '#f3f4f6',
              borderRadius: '0.75rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              border: '2px solid #e5e7eb'
            }
          },
            React.createElement('div', {
              style: { textAlign: 'center', color: '#6b7280' }
            },
              React.createElement('div', {
                style: { fontSize: '4rem', marginBottom: '1rem' }
              }, '🌸'),
              React.createElement('p', { style: { margin: 0 } }, 'Product Image')
            )
          )
        ),
        
        React.createElement('div', {
          style: {
            display: 'flex',
            flexDirection: 'column',
            gap: '1.5rem'
          }
        },
          React.createElement('div', null,
            React.createElement('div', {
              style: {
                fontSize: '0.875rem',
                color: '#4b5563',
                marginBottom: '0.5rem'
              }
            }, `Style: ${displayStyle}`),
            React.createElement('h1', {
              style: {
                fontSize: '2.25rem',
                fontWeight: 'bold',
                color: '#111827',
                margin: '0 0 1rem 0'
              }
            }, displayTitle),
            React.createElement('div', {
              style: {
                fontSize: '1.875rem',
                fontWeight: 'bold',
                color: '#111827',
                marginBottom: '1.5rem'
              }
            }, '$39.99')
          ),
          
          React.createElement('div', {
            style: {
              fontSize: '1.125rem',
              color: '#4b5563',
              lineHeight: '1.75'
            }
          },
            React.createElement('p', { style: { margin: 0 } },
              `Beautiful ${style} style flower throw pillow featuring stunning floral designs. Perfect for adding a touch of elegance to any room.`
            )
          ),
          
          React.createElement('div', {
            style: {
              display: 'flex',
              flexDirection: 'column',
              gap: '0.75rem'
            }
          },
            React.createElement('div', {
              style: {
                display: 'flex',
                alignItems: 'center',
                fontSize: '0.875rem',
                color: '#374151'
              }
            },
              React.createElement('span', {
                style: { color: '#16a34a', marginRight: '0.5rem' }
              }, '✓'),
              React.createElement('span', null, 'Handcrafted in America')
            ),
            React.createElement('div', {
              style: {
                display: 'flex',
                alignItems: 'center',
                fontSize: '0.875rem',
                color: '#374151'
              }
            },
              React.createElement('span', {
                style: { color: '#16a34a', marginRight: '0.5rem' }
              }, '✓'),
              React.createElement('span', null, 'Premium quality fabric')
            ),
            React.createElement('div', {
              style: {
                display: 'flex',
                alignItems: 'center',
                fontSize: '0.875rem',
                color: '#374151'
              }
            },
              React.createElement('span', {
                style: { color: '#16a34a', marginRight: '0.5rem' }
              }, '✓'),
              React.createElement('span', null, 'Machine washable')
            )
          ),
          
          React.createElement('div', {
            style: { paddingTop: '1.5rem' }
          },
            React.createElement('a', {
              href: 'https://www.teepublic.com/pillows',
              target: '_blank',
              rel: 'noopener noreferrer',
              style: {
                display: 'block',
                width: '100%',
                textAlign: 'center',
                backgroundColor: '#2563eb',
                color: 'white',
                padding: '1rem 2rem',
                borderRadius: '0.5rem',
                fontWeight: '600',
                textDecoration: 'none'
              }
            }, '🛒 Shop Now')
          )
        )
      )
    ),
    
    React.createElement('div', {
      style: {
        backgroundColor: '#f9fafb',
        padding: '4rem 0'
      }
    },
      React.createElement('div', {
        style: {
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 1rem'
        }
      },
        React.createElement('div', {
          style: { maxWidth: '64rem', margin: '0 auto' }
        },
          React.createElement('h2', {
            style: {
              fontSize: '1.875rem',
              fontWeight: 'bold',
              textAlign: 'center',
              margin: '0 0 2rem 0'
            }
          }, 'Product Details'),
          React.createElement('div', {
            style: {
              backgroundColor: 'white',
              borderRadius: '0.75rem',
              padding: '2rem',
              boxShadow: '0 1px 3px 0 rgb(0 0 0 / 0.1)'
            }
          },
            React.createElement('p', {
              style: {
                color: '#4b5563',
                fontSize: '1.125rem',
                lineHeight: '1.75',
                margin: '0 0 1.5rem 0'
              }
            }, `This beautiful ${style} style throw pillow features intricate floral designs that will complement any decor. Made with premium materials and expert craftsmanship.`),
            React.createElement('div', {
              style: {
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '1.5rem'
              }
            },
              React.createElement('div', null,
                React.createElement('h3', {
                  style: { fontWeight: '600', margin: '0 0 0.5rem 0' }
                }, 'Specifications'),
                React.createElement('ul', {
                  style: {
                    listStyle: 'none',
                    padding: 0,
                    margin: 0,
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.25rem'
                  }
                },
                  React.createElement('li', {
                    style: { fontSize: '0.875rem', color: '#4b5563' }
                  }, 'Size: 18" x 18"'),
                  React.createElement('li', {
                    style: { fontSize: '0.875rem', color: '#4b5563' }
                  }, 'Material: Poly twill fabric'),
                  React.createElement('li', {
                    style: { fontSize: '0.875rem', color: '#4b5563' }
                  }, 'Insert: Included'),
                  React.createElement('li', {
                    style: { fontSize: '0.875rem', color: '#4b5563' }
                  }, 'Care: Machine washable')
                )
              ),
              React.createElement('div', null,
                React.createElement('h3', {
                  style: { fontWeight: '600', margin: '0 0 0.5rem 0' }
                }, 'Features'),
                React.createElement('ul', {
                  style: {
                    listStyle: 'none',
                    padding: 0,
                    margin: 0,
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.25rem'
                  }
                },
                  React.createElement('li', {
                    style: { fontSize: '0.875rem', color: '#4b5563' }
                  }, 'Concealed zipper'),
                  React.createElement('li', {
                    style: { fontSize: '0.875rem', color: '#4b5563' }
                  }, 'Fade resistant'),
                  React.createElement('li', {
                    style: { fontSize: '0.875rem', color: '#4b5563' }
                  }, 'Handcrafted quality'),
                  React.createElement('li', {
                    style: { fontSize: '0.875rem', color: '#4b5563' }
                  }, 'Made in USA')
                )
              )
            )
          )
        )
      )
    ),
    
    React.createElement('div', {
      style: { padding: '4rem 0', textAlign: 'center' }
    },
      React.createElement('div', {
        style: {
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 1rem'
        }
      },
        React.createElement('h2', {
          style: {
            fontSize: '1.875rem',
            fontWeight: 'bold',
            margin: '0 0 2rem 0'
          }
        }, 'Explore More'),
        React.createElement('a', {
          href: '/flower-throw-pillows',
          style: {
            display: 'inline-block',
            backgroundColor: '#111827',
            color: 'white',
            padding: '0.75rem 2rem',
            borderRadius: '0.5rem',
            fontWeight: '600',
            textDecoration: 'none'
          }
        }, 'View All Products')
      )
    )
  )
}
