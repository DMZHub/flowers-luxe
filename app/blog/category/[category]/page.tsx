import { use } from 'react'
import { blogCategories } from '../../../../data/blogCategories'
import BlogCategoryClient from './BlogCategoryClient'

// Generate static params for all blog categories
export async function generateStaticParams() {
  return blogCategories.map((category) => ({
    category: category.slug,
  }))
}

// Define the params type
interface BlogCategoryPageParams {
  category: string;
}

export default function BlogCategoryPageWrapper({ params }: { params: Promise<BlogCategoryPageParams> }) {
  // Use React.use() to unwrap the Promise
  const resolvedParams = use(params);
  
  // Pass the resolved params to the client component
  return <BlogCategoryClient params={resolvedParams} />
}
