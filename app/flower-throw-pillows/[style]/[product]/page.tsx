import { use } from 'react'
import { products } from '../../../../data/products'
import ProductPageClient from './ProductPageClient'

// Generate static params for all products
export async function generateStaticParams() {
  return products.map((product) => ({
    style: product.style,
    product: product.slug,
  }))
}

// Define the params type
interface ProductPageParams {
  style: string;
  product: string;
}

export default function ProductPageWrapper({ params }: { params: Promise<ProductPageParams> }) {
  // Use React.use() to unwrap the Promise
  const resolvedParams = use(params);
  
  // Pass the resolved params to the client component
  return <ProductPageClient params={resolvedParams} />
}
