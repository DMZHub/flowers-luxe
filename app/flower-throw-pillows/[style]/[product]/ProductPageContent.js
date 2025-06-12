export default function ProductPage({ params }) {
  const { style, product: productSlug } = params || {}
  
  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial, sans-serif' }}>
      <h1>Product Page</h1>
      <p>Style: {style || 'Unknown'}</p>
      <p>Product: {productSlug || 'Unknown'}</p>
      <p>This is a minimal product page that should build successfully.</p>
      <a href="/flower-throw-pillows" style={{ color: 'blue', textDecoration: 'underline' }}>
        ← Back to Flower Throw Pillows
      </a>
    </div>
  )
}
