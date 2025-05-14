// utils/schema.ts
import { Product } from './products'; // Ensure this path is correct

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
  const offerData: Record<string, any> = {
    "@type": "Offer",
    "price": product.price.toFixed(2),
    "priceCurrency": "USD",
    "availability": "https://schema.org/InStock",
    "url": productUrl
  };

  // Add discount information if available
  if (product.discount) {
    const discountedPrice = (product.price * (1 - product.discount.percentage / 100)).toFixed(2);
    offerData.price = discountedPrice;
  }

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
    "offers": offerData,
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
          // Ensure product.slug is available and correct for your routing
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
    "logo": `${baseUrl}/images/logo.png`, // Ensure this logo exists
    "image": `${baseUrl}/images/shop-og-image.jpg`, // Ensure this image exists
    "telephone": "+1-800-FLOWERS", // Replace with actual phone if available
    "email": "info@flowersluxe.com",
    "priceRange": "$", // Typically $, $$, $$$ or $$$$
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
    "paymentAccepted": "Credit Card, PayPal", // Be more specific if possible
    "currenciesAccepted": "USD"
  };
}

/**
 * Generates schema markup for home page
 */
export function generateHomePageSchema(url: string): Record<string, any> {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://flowersluxe.com'; // Corrected 'https:' to 'https://'
  const homeUrl = `${baseUrl}${url === '/' ? '' : url }`;


  return {
    "@context": "https://schema.org/",
    "@type": "WebSite",
    "name": "FlowersLuxe",
    "url": homeUrl,
    "potentialAction": {
      "@type": "SearchAction",
      "target": { // Target should be an object with urlTemplate
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
        "url": `${baseUrl}/images/logo.png`, // Ensure this logo exists
        "width": 112, // Specify actual width
        "height": 112 // Specify actual height
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
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://flowersluxe.com'; // Corrected 'https:' to 'https://'

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
      "@type": "Person", // Or Organization if it's a team account
      "name": post.author?.name || "FlowersLuxe Team",
      "jobTitle": post.author?.role || "Writer"
    },
    "publisher": {
      "@type": "Organization",
      "name": "FlowersLuxe",
      "logo": {
        "@type": "ImageObject",
        "url": `${baseUrl}/images/logo.png`, // Ensure this logo exists
        "width": 112, // Specify actual width
        "height": 112 // Specify actual height
      }
    },
    "datePublished": formatDate(post.date),
    "dateModified": formatDate(post.modifiedDate || post.date), // Use modifiedDate if available, else fallback to publish date
    "keywords": generateKeywords(post)
  };
}

// Utility functions (internal to this module, not exported)

/**
 * Get material information based on product category
 */
function getMaterialByCategory(category: string): string {
  const materials: Record<string, string> = {
    'Throw Pillow': 'Poly Twill Fabric',
    'Stickers': 'Vinyl', // Assuming 'Stickers' is the category name
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
  // For schema purposes only - these are sample reviews
  // In a real application, these would come from a database or review service
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
      "ratingValue": template.reviewRating.ratingValue.toString(), // Schema.org expects string for ratingValue
      "bestRating": "5"
    },
    "author": {
      "@type": "Person",
      "name": template.author.name
    },
    "reviewBody": template.reviewBody,
    "itemReviewed": { // Good practice to link review to the product
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
    return new Date().toISOString(); // Fallback to current date if undefined
  }
  try {
    const date = new Date(dateString);
    if (isNaN(date.getTime())) { // Check if date is invalid
        throw new Error("Invalid date string");
    }
    return date.toISOString();
  } catch (e) {
    // If date format is invalid, return current date as a fallback
    console.warn(`Invalid date string encountered: ${dateString}. Falling back to current date.`);
    return new Date().toISOString();
  }
}

/**
 * Generate keywords from post data
 */
function generateKeywords(post: any): string {
  const baseKeywords = ["FlowersLuxe", "floral design", post.category?.toLowerCase() || "decor"];

  // Add title words as keywords (simple approach)
  const titleWords = post.title
    .toLowerCase()
    .replace(/[^a-z0-9\s]/gi, '') // Remove special characters
    .split(' ')
    .filter((word: string) => word.length > 3 && !["the", "and", "for", "with", "your"].includes(word)); // Filter short/common words

  // Add tags if available from post data
  const postTags = Array.isArray(post.tags) ? post.tags.map((tag: string) => tag.toLowerCase()) : [];

  return [...new Set([...baseKeywords, ...titleWords, ...postTags])].join(", ");
}

// The block export below was causing the "Duplicate export" error
// and has been removed because all functions are already exported individually.
//
// /*
// // Make sure to export all the functions
// export {
//   generateProductSchema,
//   generateProductCollectionSchema,
//   generateShopPageSchema,
//   generateHomePageSchema,
//   generateBreadcrumbSchema,
//   generateBlogPostSchema
// };
// */
