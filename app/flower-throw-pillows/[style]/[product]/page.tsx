// app/flower-throw-pillows/[style]/[product]/page.tsx
import { ProductPageParams } from '../../../../components/ParamsWrapper';
import ProductPageContent from './ProductPageContent';

// This is the page component that Next.js 15 expects
export default async function ProductPage({ 
  params,
  searchParams 
}: { 
  params: Promise<ProductPageParams>;
  searchParams?: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  // Resolve the async params
  const resolvedParams = await params;
  const resolvedSearchParams = searchParams ? await searchParams : undefined;

  // Render your existing component with resolved params
  return (
    <ProductPageContent 
      params={resolvedParams}
      searchParams={resolvedSearchParams}
    />
  );
}

// Generate metadata function (handles async params)
export async function generateMetadata({ 
  params 
}: { 
  params: Promise<ProductPageParams> 
}) {
  const { style, product: productSlug } = await params;
  
  const { getProductBySlug } = await import('../../../../data/products');
  const { generateProductMetadata } = await import('../../../../utils/seo');
  
  const product = getProductBySlug(productSlug);
  
  if (!product) {
    return {
      title: 'Product Not Found | FlowersLuxe',
      description: 'The requested flower throw pillow could not be found.'
    };
  }
  
  return generateProductMetadata(product);
}

// Generate static params for build optimization
export async function generateStaticParams() {
  const { products } = await import('../../../../data/products');
  
  return products.map((product) => ({
    style: product.style,
    product: product.slug,
  }));
}
