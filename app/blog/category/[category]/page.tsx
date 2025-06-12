// app/blog/category/[category]/page.tsx
import BlogCategoryContent from './BlogCategoryContent';

interface CategoryPageParams {
  category: string;
}

// Server component that handles async params
export default async function BlogCategoryPage({ 
  params 
}: { 
  params: Promise<CategoryPageParams>;
}) {
  const resolvedParams = await params;

  return (
    <BlogCategoryContent params={resolvedParams} />
  );
}

// Generate static params for all blog categories
export async function generateStaticParams() {
  const { blogCategories } = await import('../../../../data/blogCategories');
  
  return blogCategories.map((category) => ({
    category: category.slug,
  }));
}
