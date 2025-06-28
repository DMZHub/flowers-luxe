import { notFound } from 'next/navigation'
import { 
  getProductsByFilters, 
  type ProductStyle 
} from '../../../data/products'
import StylePageClient from './StylePageClient'

const validStyles: ProductStyle[] = ['watercolor', 'floral', 'solid-color', 'abstract', 'vintage', 'modern', 'boho', 'farmhouse']

// Generate static params for all valid styles
export async function generateStaticParams() {
  return validStyles.map((style) => ({
    style: style,
  }))
}

// Define the params type
interface StylePageParams {
  style: string;
}

export default async function StylePage({ params }: { params: Promise<StylePageParams> }) {
  // Await the params Promise
  const resolvedParams = await params;
  const style = resolvedParams.style as ProductStyle;
  
  // Validate style
  if (!validStyles.includes(style)) {
    notFound();
  }

  // Get products for this style
  const styleProducts = getProductsByFilters({ style })
  
  if (styleProducts.length === 0) {
    notFound();
  }

  // Pass data to client component
  return <StylePageClient style={style} products={styleProducts} />
}
