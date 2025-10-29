import { Product } from '../types/product';

export const generateProductSchema = (product: Product, baseUrl: string = 'https://flowersluxe.com') => {
  const currentPrice = product.discount 
    ? product.price * (1 - product.discount.percentage / 100)
    : product.price;

  return {
    "@context": "https://schema.org/",
    "@type": "Product",
    "name": product.title,
    "description": product.description,
    "image": product.images.map(img => `${baseUrl}${img.src}`),
    "brand": {
      "@type": "Brand",
      "name": "FlowersLuxe"
    },
    "category": "Home & Garden > Decor > Pillows",
    "sku": product.id,
    "offers": {
      "@type": "Offer",
      "url": `${baseUrl}/flower-throw-pillows/${product.style}/${product.slug}`,
      "priceCurrency": "USD",
      "price": currentPrice.toFixed(2),
      "availability": "https://schema.org/InStock",
      "itemCondition": "https://schema.org/NewCondition",
      "itemCondition": "https://schema.org/NewCondition",
  "shippingDetails": {
    "@type": "OfferShippingDetails",
    "shippingRate": {
      "@type": "MonetaryAmount",
      "value": "0",
      "currency": "USD"
    },
    "shippingDestination": {
      "@type": "DefinedRegion",
      "addressCountry": "US"
    },
    "deliveryTime": {
      "@type": "ShippingDeliveryTime",
      "handlingTime": {
        "@type": "QuantitativeValue",
        "minValue": 1,
        "maxValue": 3,
        "unitCode": "d"
      },
      "transitTime": {
        "@type": "QuantitativeValue",
        "minValue": 3,
        "maxValue": 7,
        "unitCode": "d"
      }
    }
  },
  "hasMerchantReturnPolicy": {
    "@type": "MerchantReturnPolicy",
    "returnPolicyCategory": "https://schema.org/MerchantReturnFiniteReturnWindow",
    "merchantReturnDays": 30,
    "returnMethod": "https://schema.org/ReturnByMail",
    "returnFees": "https://schema.org/FreeReturn",
    "applicableCountry": "US"
  },
      "seller": {
        "@type": "Organization",
        "name": "FlowersLuxe",
        "url": baseUrl
      }
    },

      "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5.0",
      "reviewCount": "1"
    },
    
    "additionalProperty": [
      {
        "@type": "PropertyValue",
        "name": "Style",
        "value": product.style
      },
      {
        "@type": "PropertyValue",
        "name": "Flower Type",
        "value": product.flowerType
      },
      {
        "@type": "PropertyValue",
        "name": "Material",
        "value": "Textured Poly Twill"
      },
      {
        "@type": "PropertyValue",
        "name": "Made In",
        "value": "USA"
      }
    ]
  };
};

export const generateBreadcrumbSchema = (items: Array<{name: string, url: string}>, baseUrl: string = 'https://flowersluxe.com') => {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": `${baseUrl}${item.url}`
    }))
  };
};

export const generateOrganizationSchema = (baseUrl: string = 'https://flowersluxe.com') => {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "FlowersLuxe",
    "url": baseUrl,
    "logo": `${baseUrl}/images/logo.png`,
    "description": "Premium floral throw pillows featuring unique botanical designs handcrafted in America.",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1-234-567-890",
      "contactType": "customer service",
      "email": "info@flowersluxe.com"
    },
    "sameAs": [
      "https://www.facebook.com/profile.php?id=61575082658424",
      "https://x.com/flowersluxe1",
      "https://www.instagram.com/flowersluxe1",
      "https://www.pinterest.com/FlowersLuxe1"
    ]
  };
};

export const generateWebsiteSchema = (baseUrl: string = 'https://flowersluxe.com') => {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "FlowersLuxe",
    "url": baseUrl,
    "description": "Premium floral throw pillows with unique botanical designs. Handcrafted in America with the highest quality materials.",
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": `${baseUrl}/shop?search={search_term_string}`
      },
      "query-input": "required name=search_term_string"
    }
  };
};

export const generateCollectionPageSchema = (
  products: Product[], 
  style: string, 
  baseUrl: string = 'https://flowersluxe.com'
) => {
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": `${style.charAt(0).toUpperCase() + style.slice(1)} Flower Throw Pillows`,
    "description": `Discover our collection of ${style} flower throw pillows featuring premium quality and unique botanical designs.`,
    "url": `${baseUrl}/flower-throw-pillows/${style}`,
    "mainEntity": {
      "@type": "ItemList",
      "numberOfItems": products.length,
      "itemListElement": products.map((product, index) => ({
        "@type": "Product",
        "position": index + 1,
        "name": product.title,
        "url": `${baseUrl}/flower-throw-pillows/${product.style}/${product.slug}`,
        "image": `${baseUrl}/images/${product.mainImage}`,
        "description": product.shortDescription || product.description.substring(0, 160)
      }))
    }
  };
};
