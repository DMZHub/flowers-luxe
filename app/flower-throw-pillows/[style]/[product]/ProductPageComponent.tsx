// app/flower-throw-pillows/[style]/[product]/page.tsx
import { createWrappedPage, ProductPageParams } from '../../../../components/ParamsWrapper';
import ProductPageComponent from './ProductPageComponent';

// Export the wrapped page component that handles Next.js 15 async params
export default createWrappedPage<ProductPageParams>(ProductPageComponent);

// Generate metadata function (still needs to handle async params)
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

// Generate static params for build optimization (optional)
export async function generateStaticParams() {
  const { products } = await import('../../../../data/products');
  
  return products.map((product) => ({
    style: product.style,
    product: product.slug,
  }));
}
