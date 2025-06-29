import { Product } from '../types/product';

export const generateProductMetadata = (product: Product, baseUrl: string = 'https://flowersluxe.com') => {
  const productUrl = `${baseUrl}/flower-throw-pillows/${product.style}/${product.slug}`;
  const imageUrl = `${baseUrl}/images/${product.mainImage}`;

  return {
    title: product.metaTitle,
    description: product.metaDescription,
    keywords: product.keywords.join(', '),
    openGraph: {
      title: product.metaTitle,
      description: product.metaDescription,
      url: productUrl,
      siteName: 'FlowersLuxe',
      images: [
        {
          url: imageUrl,
          width: 800,
          height: 800,
          alt: product.images[0]?.alt || product.title,
        },
      ],
      locale: 'en_US',
      type: 'product',
    },
    twitter: {
      card: 'summary_large_image',
      title: product.metaTitle,
      description: product.metaDescription,
      images: [imageUrl],
    },
    alternates: {
      canonical: productUrl,
    },
    other: {
      'product:price:amount': product.price.toString(),
      'product:price:currency': 'USD',
      'product:availability': product.inStock ? 'in stock' : 'out of stock',
      'product:condition': 'new',
      'product:brand': 'FlowersLuxe',
      'product:category': 'Home & Garden > Decor > Pillows',
    },
  };
};

export const generateStylePageMetadata = (style: string, productCount: number, baseUrl: string = 'https://flowersluxe.com') => {
  const styleDisplayName = style.charAt(0).toUpperCase() + style.slice(1).replace('-', ' ');
  const title = `${styleDisplayName} Flower Throw Pillows | Premium Floral Home Decor`;
  const description = `Discover our collection of ${styleDisplayName.toLowerCase()} flower throw pillows. ${productCount} unique designs featuring premium quality materials and handcrafted details. Free shipping available.`;
  const pageUrl = `${baseUrl}/flower-throw-pillows/${style}`;

  return {
    title,
    description,
    keywords: `${style} flower pillows, ${style} throw pillows, floral home decor, botanical cushions, ${style} style pillows`,
    openGraph: {
      title,
      description,
      url: pageUrl,
      siteName: 'FlowersLuxe',
      images: [
        {
          url: `${baseUrl}/images/og-${style}-pillows.jpg`,
          width: 1200,
          height: 630,
          alt: `${styleDisplayName} Flower Throw Pillows Collection`,
        },
      ],
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [`${baseUrl}/images/og-${style}-pillows.jpg`],
    },
    alternates: {
      canonical: pageUrl,
    },
  };
};

export const generateShopPageMetadata = (baseUrl: string = 'https://flowersluxe.com') => {
  const title = 'Shop Flower Throw Pillows | Premium Floral Home Decor | FlowersLuxe';
  const description = 'Shop our complete collection of premium flower throw pillows. Featuring unique botanical designs, handcrafted quality, and various styles from vintage to modern. Free shipping available.';
  const pageUrl = `${baseUrl}/shop`;

  return {
    title,
    description,
    keywords: 'flower throw pillows, floral pillows, botanical cushions, decorative pillows, home decor, American made pillows, vintage flower pillows, modern floral pillows, boho flower pillows, farmhouse flower pillows, watercolor flower pillows',
    openGraph: {
      title,
      description,
      url: pageUrl,
      siteName: 'FlowersLuxe',
      images: [
        {
          url: `${baseUrl}/images/og-shop-pillows.jpg`,
          width: 1200,
          height: 630,
          alt: 'FlowersLuxe Flower Throw Pillows Collection',
        },
      ],
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [`${baseUrl}/images/og-shop-pillows.jpg`],
    },
    alternates: {
      canonical: pageUrl,
    },
  };
};

export const generateHomePageMetadata = (baseUrl: string = 'https://flowersluxe.com') => {
  const title = 'FlowersLuxe | Premium Flower Throw Pillows & Floral Home Decor';
  const description = 'Discover beautiful flower throw pillows featuring unique botanical designs. Handcrafted in America with premium materials. Transform your space with our vintage, modern, boho, and farmhouse styles.';
  
  return {
    title,
    description,
    keywords: 'flower throw pillows, floral home decor, botanical pillows, decorative cushions, handcrafted pillows, American made pillows',
    openGraph: {
      title,
      description,
      url: baseUrl,
      siteName: 'FlowersLuxe',
      images: [
        {
          url: `${baseUrl}/images/og-home.jpg`,
          width: 1200,
          height: 630,
          alt: 'FlowersLuxe Premium Flower Throw Pillows',
        },
      ],
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [`${baseUrl}/images/og-home.jpg`],
    },
    alternates: {
      canonical: baseUrl,
    },
  };
};

export const generateImageAlt = (product: Product, context: 'main' | 'lifestyle' | 'detail' = 'main') => {
  const baseAlt = `${product.title} - ${product.style} style flower throw pillow`;
  
  switch (context) {
    case 'main':
      return `${baseAlt} on white background showing detailed floral design`;
    case 'lifestyle':
      return `${baseAlt} styled in a ${product.style} living room setting`;
    case 'detail':
      return `Close-up detail of ${baseAlt} showing premium fabric texture and floral pattern`;
    default:
      return baseAlt;
  }
};
