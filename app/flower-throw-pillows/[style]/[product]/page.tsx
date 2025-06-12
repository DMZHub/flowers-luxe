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
  // Only generate a few key pages to avoid build issues
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

  const containerStyle = {
    minHeight: '100vh',
    backgroundColor: '#ffffff',
    fontFamily: 'system-ui, -apple-system, sans-serif'
  }

  const headerContainerStyle = {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '2rem 1rem'
  }

  const backLinkStyle = {
    color: '#2563eb',
    textDecoration: 'none',
    fontSize: '0.875rem'
  }

  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '3rem'
  }

  const imageContainerStyle = {
    aspectRatio: '1',
    backgroundColor: '#f3f4f6',
    borderRadius: '0.75rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: '2px solid #e5e7eb'
  }

  const imagePlaceholderStyle = {
    textAlign: 'center',
    color: '#6b7280'
  }

  const emojiStyle = {
    fontSize: '4rem',
    marginBottom: '1rem'
  }

  const productInfoStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem'
  }

  const styleTextStyle = {
    fontSize: '0.875rem',
    color: '#4b5563',
    marginBottom: '0.5rem'
  }

  const titleStyle = {
    fontSize: '2.25rem',
    fontWeight: 'bold',
    color: '#111827',
    margin: '0 0 1rem 0'
  }

  const priceStyle = {
    fontSize: '1.875rem',
    fontWeight: 'bold',
    color: '#111827',
    marginBottom: '1.5rem'
  }

  const descriptionStyle = {
    fontSize: '1.125rem',
    color: '#4b5563',
    lineHeight: '1.75'
  }

  const featuresStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.75rem'
  }

  const featureItemStyle = {
    display: 'flex',
    alignItems: 'center',
    fontSize: '0.875rem',
    color: '#374151'
  }

  const checkmarkStyle = {
    color: '#16a34a',
    marginRight: '0.5rem'
  }

  const buttonContainerStyle = {
    paddingTop: '1.5rem'
  }

  const buttonStyle = {
    display: 'block',
    width: '100%',
    textAlign: 'center',
    backgroundColor: '#2563eb',
    color: 'white',
    padding: '1rem 2rem',
    borderRadius: '0.5rem',
    fontWeight: '600',
    textDecoration: 'none',
    border: 'none',
    cursor: 'pointer'
  }

  const detailsSectionStyle = {
    backgroundColor: '#f9fafb',
    padding: '4rem 0'
  }

  const detailsContainerStyle = {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 1rem'
  }

  const detailsInnerStyle = {
    maxWidth: '64rem',
    margin: '0 auto'
  }

  const sectionTitleStyle = {
    fontSize: '1.875rem',
    fontWeight: 'bold',
    textAlign: 'center',
    margin: '0 0 2rem 0'
  }

  const detailsCardStyle = {
    backgroundColor: 'white',
    borderRadius: '0.75rem',
    padding: '2rem',
    boxShadow: '0 1px 3px 0 rgb(0 0 0 / 0.1)'
  }

  const detailsTextStyle = {
    color: '#4b5563',
    fontSize: '1.125rem',
    lineHeight: '1.75',
    margin: '0 0 1.5rem 0'
  }

  const specsGridStyle = {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '1.5rem'
  }

  const specTitleStyle = {
    fontWeight: '600',
    margin: '0 0 0.5rem 0'
  }

  const specListStyle = {
    listStyle: 'none',
    padding: 0,
    margin: 0,
    display: 'flex',
    flexDirection: 'column',
    gap: '0.25rem'
  }

  const specItemStyle = {
    fontSize: '0.875rem',
    color: '#4b5563'
  }

  const footerStyle = {
    padding: '4rem 0',
    textAlign: 'center'
  }

  const footerContainerStyle = {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 1rem'
  }

  const footerButtonStyle = {
    display: 'inline-block',
    backgroundColor: '#111827',
    color: 'white',
    padding: '0.75rem 2rem',
    borderRadius: '0.5rem',
    fontWeight: '600',
    textDecoration: 'none'
  }

  return (
    <div style={containerStyle}>
      <div style={headerContainerStyle}>
        <div style={{ marginBottom: '1.5rem' }}>
          <a href="/flower-throw-pillows" style={backLinkStyle}>
            ← Back to Flower Throw Pillows
          </a>
        </div>
        
        <div style={gridStyle}>
          <div>
            <div style={imageContainerStyle}>
              <div style={imagePlaceholderStyle}>
                <div style={emojiStyle}>🌸</div>
                <p style={{ margin: 0 }}>Product Image</p>
              </div>
            </div>
          </div>
          
          <div style={productInfoStyle}>
            <div>
              <div style={styleTextStyle}>
                Style: {displayStyle}
              </div>
              <h1 style={titleStyle}>
                {displayTitle}
              </h1>
              <div style={priceStyle}>
                $39.99
              </div>
            </div>
            
            <div style={descriptionStyle}>
              <p style={{ margin: 0 }}>
                Beautiful {style} style flower throw pillow featuring stunning floral designs. 
                Perfect for adding a touch of elegance to any room.
              </p>
            </div>
            
            <div style={featuresStyle}>
              <div style={featureItemStyle}>
                <span style={checkmarkStyle}>✓</span>
                <span>Handcrafted in America</span>
              </div>
              <div style={featureItemStyle}>
                <span style={checkmarkStyle}>✓</span>
                <span>Premium quality fabric</span>
              </div>
              <div style={featureItemStyle}>
                <span style={checkmarkStyle}>✓</span>
                <span>Machine washable</span>
              </div>
            </div>
            
            <div style={buttonContainerStyle}>
              
                href="https://www.teepublic.com/pillows"
                target="_blank"
                rel="noopener noreferrer"
                style={buttonStyle}
              >
                🛒 Shop Now
              </a>
            </div>
          </div>
        </div>
      </div>
      
      <div style={detailsSectionStyle}>
        <div style={detailsContainerStyle}>
          <div style={detailsInnerStyle}>
            <h2 style={sectionTitleStyle}>
              Product Details
            </h2>
            <div style={detailsCardStyle}>
              <p style={detailsTextStyle}>
                This beautiful {style} style throw pillow features intricate floral designs that will 
                complement any decor. Made with premium materials and expert craftsmanship.
              </p>
              <div style={specsGridStyle}>
                <div>
                  <h3 style={specTitleStyle}>
                    Specifications
                  </h3>
                  <ul style={specListStyle}>
                    <li style={specItemStyle}>Size: 18" x 18"</li>
                    <li style={specItemStyle}>Material: Poly twill fabric</li>
                    <li style={specItemStyle}>Insert: Included</li>
                    <li style={specItemStyle}>Care: Machine washable</li>
                  </ul>
                </div>
                <div>
                  <h3 style={specTitleStyle}>
                    Features
                  </h3>
                  <ul style={specListStyle}>
                    <li style={specItemStyle}>Concealed zipper</li>
                    <li style={specItemStyle}>Fade resistant</li>
                    <li style={specItemStyle}>Handcrafted quality</li>
                    <li style={specItemStyle}>Made in USA</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div style={footerStyle}>
        <div style={footerContainerStyle}>
          <h2 style={sectionTitleStyle}>
            Explore More
          </h2>
          <a href="/flower-throw-pillows" style={footerButtonStyle}>
            View All Products
          </a>
        </div>
      </div>
    </div>
  )
}
