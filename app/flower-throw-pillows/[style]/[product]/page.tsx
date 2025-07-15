import { use } from 'react'
import { Metadata } from 'next'
import { products } from '../../../../data/products'
import { generateProductMetadata } from '../../../../utils/seo'
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

// Generate metadata for SEO and proper canonical URLs
export async function generateMetadata({ params }: { params: Promise<ProductPageParams> }): Promise<Metadata> {
  const resolvedParams = await params;
  const product = products.find(p => p.slug === resolvedParams.product && p.style === resolvedParams.style);
  
  if (!product) {
    return {
      title: 'Product Not Found',
    };
  }
  
  return generateProductMetadata(product);
}

export default function ProductPageWrapper({ params }: { params: Promise<ProductPageParams> }) {
  // Use React.use() to unwrap the Promise
  const resolvedParams = use(params);
  
  // Pass the resolved params to the client component
  return <ProductPageClient params={resolvedParams} />
}
