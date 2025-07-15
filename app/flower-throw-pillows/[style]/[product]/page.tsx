import { use } from 'react'
import { Metadata } from 'next'
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

// Generate metadata for SEO and proper canonical URLs
export async function generateMetadata({ params }: { params: Promise<ProductPageParams> }): Promise<Metadata> {
  const resolvedParams = await params;
  const product = products.find(p => p.slug === resolvedParams.product && p.style === resolvedParams.style);
  
  if (!product) {
    return {
      title: 'Product Not Found',
    };
  }

  const baseUrl = 'https://flowersluxe.com';
  const productUrl = `${baseUrl}/flower-throw-pillows/${product.style}/${product.slug}`;
  const imageUrl = `${baseUrl}/images/${product.mainImage}`;

  return {
    title: product.metaTitle || product.title,
    description: product.metaDescription || product.description,
    openGraph: {
      title: product.metaTitle || product.title,
      description: product.metaDescription || product.description,
      url: productUrl,
      siteName: 'FlowersLuxe',
      images: [
        {
          url: imageUrl,
          width: 800,
          height: 800,
          alt: product.images?.[0]?.alt || product.title,
        },
      ],
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: product.metaTitle || product.title,
      description: product.metaDescription || product.description,
      images: [imageUrl],
    },
    alternates: {
      canonical: productUrl,
    },
    other: {
      'keywords': product.keywords?.join(', ') || '',
      'product:price:amount': product.price?.toString() || '',
      'product:price:currency': 'USD',
      'product:availability': product.inStock ? 'in stock' : 'out of stock',
      'product:condition': 'new',
      'product:brand': 'FlowersLuxe',
      'product:category': 'Home & Garden > Decor > Pillows',
    },
  };
}

export default function ProductPageWrapper({ params }: { params: Promise<ProductPageParams> }) {
  // Use React.use() to unwrap the Promise
  const resolvedParams = use(params);
  
  // Pass the resolved params to the client component
  return <ProductPageClient params={resolvedParams} />
}
