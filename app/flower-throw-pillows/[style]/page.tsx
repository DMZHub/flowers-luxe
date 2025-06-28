import { use } from 'react'
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

export default function StylePageWrapper({ params }: { params: Promise<StylePageParams> }) {
  // Use React.use() to unwrap the Promise
  const resolvedParams = use(params);
  
  // Pass the resolved params to the client component
  return <StylePageClient params={resolvedParams} />
}
