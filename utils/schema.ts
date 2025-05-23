// utils/schema.ts
export interface SEOMetadata {
  title: string;
  description: string;
  canonical?: string;
  openGraph?: {
    title?: string;
    description?: string;
    url?: string;
    type?: string;
    images?: Array<{
      url: string;
      width?: number;
      height?: number;
      alt?: string;
    }>;
  };
  twitter?: {
    card?: string;
    title?: string;
    description?: string;
    images?: string[];
  };
}

/**
 * Generates structured data schema for products
 */
export function generateProductSchema(product: Product, url: string): Record<string, any> {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://flowersluxe.com';
  const productUrl = `${baseUrl}${url}`;
  const imageUrl = product.imageSrc.startsWith('http')
    ? product.imageSrc
    : `${baseUrl}${product.imageSrc}`;

  // Calculate offers data including discount if available
  const offerData = {
    "@type": "Offer",
    "price": product.discount 
      ? (product.price * (1 - product.discount.percentage / 100)).toFixed(2)
      : product.price.toFixed(2),
    "priceCurrency": "USD",
    "availability": "https://schema.org/InStock",
    "url": productUrl
  };

  // Basic product schema
  return {
    "@context": "https://schema.org/",
    "@type": "Product",
    "name": product.title,
    "image": imageUrl,
    "description": product.description,
    "brand": {
      "@type": "Brand",
      "name": "FlowersLuxe"
    },
    "offers": offerData,  // This is critical for rich results
    "sku": `FL-${product.id}`,
    "mpn": `FLOWLUX-${product.category.replace(/\s+/g, '')}${product.id}`,
    "category": `Floral ${product.category}`,
    "material": getMaterialByCategory(product.category),
    "itemCondition": "https://schema.org/NewCondition",
    "review": generateReviews(product)
  };
}

/**
 * Generates schema markup for a product collection (category)
 */
export function generateProductCollectionSchema(
  products: Product[],
  categoryName: string,
  url: string
): Record<string, any> {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://flowersluxe.com';
  const categoryUrl = `${baseUrl}${url}`;

  return {
    "@context": "https://schema.org/",
    "@type": "CollectionPage",
    "name": `${categoryName} Collection | FlowersLuxe`,
    "description": `Browse our beautiful collection of floral ${categoryName.toLowerCase()} featuring unique designs and premium quality materials.`,
    "url": categoryUrl,
    "mainEntity": {
      "@type": "ItemList",
      "itemListElement": products.map((product, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "item": {
          "@type": "Product",
          "name": product.title,
          "url": product.slug ? `${baseUrl}/shop/product/${product.slug}` : `${baseUrl}${product.isCustom && product.customUrl ? product.customUrl : '/shop'}`,
          "image": product.imageSrc.startsWith('http')
            ? product.imageSrc
            : `${baseUrl}${product.imageSrc}`,
          "description": product.description.substring(0, 150) + '...',
          "offers": {
            "@type": "Offer",
            "price": product.discount
              ? (product.price * (1 - product.discount.percentage / 100)).toFixed(2)
              : product.price.toFixed(2),
            "priceCurrency": "USD",
            "availability": "https://schema.org/InStock"
          }
        }
      }))
    }
  };
}

/**
 * Generates schema markup for the entire shop page
 */
export function generateShopPageSchema(url: string): Record<string, any> {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://flowersluxe.com';
  const shopUrl = `${baseUrl}${url}`;

  return {
    "@context": "https://schema.org/",
    "@type": "Store",
    "name": "FlowersLuxe Shop",
    "description": "Discover beautiful floral designs on premium products including throw pillows, stickers, mugs, art prints, and more.",
    "url": shopUrl,
    "logo": `${baseUrl}/images/logo.png`,
    "image": `${baseUrl}/images/shop-og-image.jpg`,
    "telephone": "+1-800-FLOWERS",
    "email": "info@flowersluxe.com",
    "priceRange": "$",
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
      ],
      "opens": "00:00",
      "closes": "23:59"
    },
    "acceptsReservations": false,
    "paymentAccepted": "Credit Card, PayPal",
    "currenciesAccepted": "USD"
  };
}

/**
 * Generates schema markup for home page
 */
export function generateHomePageSchema(url: string): Record<string, any> {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://flowersluxe.com'; 
  const homeUrl = `${baseUrl}${url === '/' ? '' : url }`;

  return {
    "@context": "https://schema.org/",
    "@type": "WebSite",
    "name": "FlowersLuxe",
    "url": homeUrl,
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": `${baseUrl}/shop?search={search_term_string}`
      },
      "query-input": "required name=search_term_string"
    },
    "publisher": {
      "@type": "Organization",
      "name": "FlowersLuxe",
      "logo": {
        "@type": "ImageObject",
        "url": `${baseUrl}/images/logo.png`,
        "width": 112,
        "height": 112
      },
      "sameAs": [
        "https://www.instagram.com/flowersluxe1",
        "https://x.com/flowersluxe1",
        "https://facebook.com/profile.php?id=61575082658424",
        "https://store.flowersluxe.com"
      ]
    }
  };
}

/**
 * Generates breadcrumb schema markup
 */
export function generateBreadcrumbSchema(breadcrumbs: Array<{name: string, url: string}>): Record<string, any> {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://flowersluxe.com';

  return {
    "@context": "https://schema.org/",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbs.map((crumb, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": crumb.name,
      "item": crumb.url.startsWith('http') ? crumb.url : `${baseUrl}${crumb.url}`
    }))
  };
}

/**
 * Generates blog post schema
 */
export function generateBlogPostSchema(post: any, url: string): Record<string, any> {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://flowersluxe.com';
  const postUrl = `${baseUrl}${url}`;
  const imageUrl = post.imageSrc.startsWith('http')
    ? post.imageSrc
    : `${baseUrl}${post.imageSrc}`;

  return {
    "@context": "https://schema.org/",
    "@type": "BlogPosting",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": postUrl
    },
    "headline": post.title,
    "description": post.excerpt,
    "image": imageUrl,
    "author": {
      "@type": "Person",
      "name": post.author?.name || "FlowersLuxe Team",
      "jobTitle": post.author?.role || "Writer"
    },
    "publisher": {
      "@type": "Organization",
      "name": "FlowersLuxe",
      "logo": {
        "@type": "ImageObject",
        "url": `${baseUrl}/images/logo.png`,
        "width": 112,
        "height": 112
      }
    },
    "datePublished": formatDate(post.date),
    "dateModified": formatDate(post.modifiedDate || post.date),
    "articleSection": post.category,
    "timeRequired": "PT12M",
    "keywords": generateKeywords(post),
    "articleBody": post.excerpt,
    "speakable": {
      "@type": "SpeakableSpecification",
      "cssSelector": [".article-title", ".article-summary"]
    }
  };
}

// Utility functions

/**
 * Get material information based on product category
 */
function getMaterialByCategory(category: string): string {
  const materials: Record<string, string> = {
    'Throw Pillow': 'Poly Twill Fabric',
    'Stickers': 'Vinyl',
    'Sticker': 'Vinyl',
    'Mug': 'Ceramic',
    'Art Print': 'Premium Paper',
    'Tote Bag': 'Poly-Poplin',
    'Tapestry': 'Microfiber',
    'Pin': 'Metal and Mylar'
  };

  return materials[category] || 'Premium Materials';
}

/**
 * Generate sample reviews for structured data
 */
function generateReviews(product: Product): Record<string, any>[] {
  // Sample reviews for schema purposes
  const reviewTemplates = [
    {
      reviewRating: { ratingValue: 5 },
      author: { name: "Sarah J." },
      reviewBody: `Absolutely love this ${product.category.toLowerCase()}! The ${product.title} has such a beautiful design and the quality is excellent. Highly recommend!`
    },
    {
      reviewRating: { ratingValue: 5 },
      author: { name: "Michael P." },
      reviewBody: `The floral pattern on the ${product.title} is exactly as pictured and the colors are vibrant. A great ${product.category.toLowerCase()} for any flower lover.`
    },
    {
      reviewRating: { ratingValue: 4 },
      author: { name: "Jennifer L." },
      reviewBody: `Lovely ${product.title}. Good quality for the price. Shipping was reasonably fast too.`
    }
  ];

  return reviewTemplates.map(template => ({
    "@type": "Review",
    "reviewRating": {
      "@type": "Rating",
      "ratingValue": template.reviewRating.ratingValue.toString(),
      "bestRating": "5"
    },
    "author": {
      "@type": "Person",
      "name": template.author.name
    },
    "reviewBody": template.reviewBody,
    "itemReviewed": {
        "@type": "Product",
        "name": product.title,
        "image": product.imageSrc.startsWith('http') ? product.imageSrc : `${process.env.NEXT_PUBLIC_SITE_URL || 'https://flowersluxe.com'}${product.imageSrc}`
    }
  }));
}

/**
 * Format date for schema (ISO 8601 format)
 */
function formatDate(dateString: string | Date | undefined): string {
  if (!dateString) {
    return new Date().toISOString();
  }
  try {
    const date = new Date(dateString);
    if (isNaN(date.getTime())) {
        throw new Error("Invalid date string");
    }
    return date.toISOString();
  } catch (e) {
    console.warn(`Invalid date string encountered: ${dateString}. Falling back to current date.`);
    return new Date().toISOString();
  }
}

/**
 * Generate keywords from post data
 */
function generateKeywords(post: any): string {
  const baseKeywords = ["FlowersLuxe", "floral design", post.category?.toLowerCase() || "decor"];

  // Add title words as keywords
  const titleWords = post.title
    .toLowerCase()
    .replace(/[^a-z0-9\s]/gi, '')
    .split(' ')
    .filter((word: string) => word.length > 3 && !["the", "and", "for", "with", "your"].includes(word));

  // Add tags if available
  const postTags = Array.isArray(post.tags) ? post.tags.map((tag: string) => tag.toLowerCase()) : [];

  return [...new Set([...baseKeywords, ...titleWords, ...postTags])].join(", ");
}

// Required type import
import { Product } from './products';
