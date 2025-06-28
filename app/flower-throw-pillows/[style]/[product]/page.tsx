import { notFound } from 'next/navigation'
import { 
  products,
  getProductBySlug, 
  getRelatedProducts,
  type ProductStyle 
} from '../../../../data/products'
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

export default async function ProductPage({ params }: { params: Promise<ProductPageParams> }) {
  // Await the params Promise
  const resolvedParams = await params;
  const { style, product: productSlug } = resolvedParams;
  
  // Get the product
  const product = getProductBySlug(productSlug);
  
  // Return 404 if product not found
  if (!product || product.style !== style) {
    notFound();
  }
  
  // Get related products
  const relatedProducts = getRelatedProducts(product, 4);

  // Pass data to client component
  return (
    <ProductPageClient 
      product={product} 
      relatedProducts={relatedProducts}
      style={style}
      productSlug={productSlug}
    />
  );
}
