// utils/products.ts
import { StaticImageData } from 'next/image';

// Product category types
export type ProductCategory = 
  | 'Throw Pillow'
  | 'Sticker'
  | 'Mug'
  | 'Art Print'
  | 'Tote Bag'
  | 'Tapestry'
  | 'Pin';

// Simplified discount interface - only percentage is really needed
export interface Discount {
  percentage: number;
  code?: string;  // Optional, not used in UI
  validUntil?: string;  // Optional, not used in UI
}

// Product schema for type safety
export interface Product {
  id: number;
  title: string;
  slug: string;
  category: ProductCategory;
  price: number;
  imageSrc: string;
  description: string;
  features: string[];
  specifications: string[];
  externalUrl: string;
  customUrl?: string;
  isNew?: boolean;
  featured?: boolean;
  isCustom?: boolean;
  discount?: Discount;
}

// Product category specifications
export const categoryProperties = {
  'Throw Pillow': {
    description: 'Add a touch of floral elegance to your home with our premium quality throw pillows featuring unique floral designs.',
    specifications: [
      'Textured Poly "Twill" pillow cover with concealed zipper',
      'Synthetic insert included for comfort and shape retention',
      'Soft, comfortable accent for the home',
      'Individually cut and sewn by hand in America',
      'Available in multiple sizes',
      'Machine washable on gentle cycle'
    ]
  },
  'Sticker': {
    description: 'Express yourself with our vibrant floral stickers. Perfect for laptops, water bottles, notebooks, and more.',
    specifications: [
      'Individually kiss cut vinyl sticker with semi-gloss finish',
      '3 x 4 inch max size includes a thin white border around the sticker',
      'Waterproof and durable in indoor conditions',
      'Not recommended for automobile use',
      'Perfect for laptops, notebooks, planners, or anywhere you can imagine',
      'Designed in the USA and printed with eco-friendly inks'
    ]
  },
  'Mug': {
    description: 'Start your day with our beautiful floral mugs. Each sip will bring the beauty of nature to your morning routine.',
    specifications: [
      'Premium ceramic construction for durability',
      '11oz capacity - perfect for coffee, tea, or hot chocolate',
      'Microwave and top-shelf dishwasher safe',
      'Embedded image with gloss finish that won\'t fade or peel',
      'Vacuum-form printed in the USA',
      'Heats evenly for better temperature retention'
    ]
  },
  'Art Print': {
    description: 'Refresh your walls with our vibrant floral art prints, crafted to infuse warmth and serenity into your home.',
    specifications: [
      'Premium semi-gloss poster paper (94 ISO brightness)',
      '170g per square meter for durability and quality feel',
      'Ultrachrome archival inks for rich, long-lasting color',
      'Available in multiple sizes to fit any space',
      'Perfect for framing or hanging directly',
      'Shipped in protective packaging to prevent damage'
    ]
  },
  'Tote Bag': {
    description: 'Carry your essentials in style with our durable and eco-friendly tote bags featuring elegant floral patterns.',
    specifications: [
      'Durable Poly-Poplin outer material for strength and longevity',
      'Laminate-coated interior for easy cleaning and water resistance',
      'Cotton handles for comfortable carrying even with heavy items',
      'Spacious interior with ample storage for groceries, books, or beach items',
      'Machine washable for easy care',
      'Eco-friendly alternative to plastic bags'
    ]
  },
  'Tapestry': {
    description: 'Create a statement wall with our vibrant floral tapestries. Perfect for bedrooms, living spaces, and dorm rooms.',
    specifications: [
      'Microfiber tapestry with soft, lightweight feel',
      'Hemmed edges for secure hanging and durability',
      'Sublimated printing for all-over vibrant color without fading',
      'Available in three sizes to fit any wall space',
      'Multiple hanging options: wall, ceiling, or as a bedspread',
      'Machine washable on gentle cycle'
    ]
  },
  'Pin': {
    description: 'Add a touch of floral charm to your outfit, backpack, or jacket with our collection of high-quality enamel pins.',
    specifications: [
      'Classic pin-back button design for secure attachment',
      'Covered with scratch and UV-resistant mylar for durability',
      'Vibrant colors that won\'t fade with time',
      'Lightweight yet sturdy construction',
      'Perfect size for jackets, backpacks, or lapels',
      'Printed in the USA with premium materials'
    ]
  }
};

// Generate a product description with the category specifications
export function generateProductDescription(product: Partial<Product>): string {
  if (!product.category) return '';
  
  const categoryInfo = categoryProperties[product.category as ProductCategory];
  if (!categoryInfo) return '';
  
  let baseDescription = product.description || categoryInfo.description;
  
  // For custom products, add additional customization details
  if (product.isCustom) {
    baseDescription += ' This product can be personalized with your name, initials, or a special message, making it a perfect gift for any occasion.';
  }
  
  // Add seasonal relevance if it's a featured product
  if (product.featured) {
    baseDescription += ' This design is one of our most popular choices, featuring seasonally relevant floral patterns that brighten any space.';
  }
  
  // Add newness factor if it's a new product
  if (product.isNew) {
    baseDescription += ' As one of our newest additions, this product showcases our latest design innovations and premium quality materials.';
  }
  
  return baseDescription;
}

// Generate product features based on category and product attributes
export function generateProductFeatures(product: Partial<Product>): string[] {
  if (!product.category) return [];
  
  const categoryInfo = categoryProperties[product.category as ProductCategory];
  if (!categoryInfo) return [];
  
  const features = product.features || [
    `Premium quality ${product.category?.toLowerCase() || 'product'} with beautiful floral design`,
    'Vibrant colors that won\'t fade over time',
    'Expertly crafted with attention to detail',
    'Makes a perfect gift for nature lovers',
    'Designed and printed in the USA'
  ];
  
  return features;
}

// Generate product specifications based on the category
export function generateProductSpecifications(product: Partial<Product>): string[] {
  if (!product.category) return [];
  
  const categoryInfo = categoryProperties[product.category as ProductCategory];
  return categoryInfo ? categoryInfo.specifications : [];
}

// Create URL slug from product title
export function createProductSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')  // Remove special characters
    .replace(/\s+/g, '-')      // Replace spaces with hyphens
    .replace(/-+/g, '-');      // Replace multiple hyphens with single hyphen
}

// Map category slugs to product categories
export const categoryMappings: Record<string, ProductCategory> = {
  'throw-pillows': 'Throw Pillow',
  'stickers': 'Sticker',
  'mugs': 'Mug',
  'art': 'Art Print',
  'tote-bags': 'Tote Bag',
  'tapestries': 'Tapestry',
  'pins': 'Pin'
};

// Map product categories to category slugs
export const reverseCategoryMappings: Record<ProductCategory, string> = {
  'Throw Pillow': 'throw-pillows',
  'Sticker': 'stickers',
  'Mug': 'mugs',
  'Art Print': 'art',
  'Tote Bag': 'tote-bags',
  'Tapestry': 'tapestries',
  'Pin': 'pins'
};

// Central product data store with simplified discounts (just percentage)
const products: Product[] = [
  {
    id: 1,
    title: 'Wildflower Bouquet Throw Pillow',
    slug: 'wildflower-bouquet-throw-pillow',
    category: 'Throw Pillow',
    price: 24.99,
    imageSrc: '/images/products/throw-pillows/pillow-1.jpg',
    description: 'Transform your living space with this beautiful throw pillow featuring a vibrant wildflower bouquet design. The delicate arrangement of colorful wildflowers brings a touch of natural beauty to any room.',
    features: [
      'Soft textured poly twill fabric for comfort and durability',
      'Concealed zipper for a sleek, finished look',
      'Premium synthetic insert included',
      'Double-sided print with wildflower bouquet design',
      'Available in 16x16", 18x18", and 20x20" sizes'
    ],
    specifications: generateProductSpecifications({category: 'Throw Pillow'}),
    externalUrl: 'https://www.teepublic.com/user/flowersluxe',
    customUrl: '/custom/wildflower-bouquet-throw-pillow',
    isNew: true,
    featured: true,
    isCustom: false
  },
  {
    id: 2,
    title: 'Custom Flower Mug for Mom | Best Gift for New Moms',
    slug: 'custom-flower-mug-best-gift-for-new-moms',
    category: 'Mug',
    price: 29.99,
    imageSrc: '/images/products/mugs/custom-flower-mug-best-gift-for-new-moms.webp',
    description: 'Celebrate motherhood with this personalized mug featuring elegant floral designs and space for your mom\'s name or a special message. Perfect for Mother\'s Day, baby showers, or as a thoughtful gift for new mothers.',
    features: [
      'High-Quality Premium Ceramic for durability and a luxurious feel',
      '11oz Capacity (3.75" tall x 3.25" diameter)',
      'Microwave & Dishwasher Safe',
      'Embedded Image with Gloss Finish that won\'t fade or scratch',
      'Vacuum-Form Printed for complete wrap design',
      'Customizable with name or personal message'
    ],
    specifications: generateProductSpecifications({category: 'Mug'}),
    externalUrl: 'https://www.teepublic.com/user/flowersluxe',
    customUrl: '/custom/custom-flower-mug-best-gift-for-new-moms',
    isNew: true,
    featured: true,
    isCustom: true,
    discount: {
      percentage: 15
      // Removed code and validUntil
    }
  },
  {
    id: 3,
    title: 'Rose Garden Ceramic Mug',
    slug: 'rose-garden-ceramic-mug',
    category: 'Mug',
    price: 19.99,
    imageSrc: '/images/products/mugs/mug-1.jpg',
    description: 'Enjoy your morning coffee or tea with this beautiful rose garden ceramic mug. The intricate rose pattern wraps around the entire mug, bringing the elegance of a blooming garden to your daily routine.',
    features: [
      'Classic 11oz ceramic mug with comfortable handle',
      'Wraparound rose garden design in rich, vibrant colors',
      'Dishwasher and microwave safe for everyday use',
      'Premium quality print that resists fading even with frequent washings',
      'Makes a perfect gift for rose lovers or gardening enthusiasts'
    ],
    specifications: generateProductSpecifications({category: 'Mug'}),
    externalUrl: 'https://www.teepublic.com/user/flowersluxe',
    customUrl: '/custom/rose-garden-ceramic-mug',
    isNew: true,
    isCustom: false
  },
  {
    id: 4,
    title: 'Botanical Dreams Art Print',
    slug: 'botanical-dreams-art-print',
    category: 'Art Print',
    price: 15.99,
    imageSrc: '/images/products/art/art-1.jpg',
    description: 'Bring the serene beauty of nature into your home with this Botanical Dreams art print. The delicate illustration features a dreamy arrangement of botanical elements that create a peaceful atmosphere in any room.',
    features: [
      'Museum-quality art print on premium semi-gloss paper',
      'Archival inks ensuring long-lasting vibrant colors',
      'Available in multiple sizes to fit your space',
      'Elegant botanical illustration with fine details',
      'Perfect for framing and displaying in living rooms, bedrooms, or offices'
    ],
    specifications: generateProductSpecifications({category: 'Art Print'}),
    externalUrl: 'https://www.teepublic.com/user/flowersluxe',
    customUrl: '/custom/botanical-dreams-art-print',
    isCustom: false
  },
  {
    id: 5,
    title: 'Vintage Floral Canvas Tote Bag',
    slug: 'vintage-floral-canvas-tote-bag',
    category: 'Tote Bag',
    price: 29.99,
    imageSrc: '/images/products/tote-bags/tote-1.jpg',
    description: 'Carry your essentials in style with this vintage floral canvas tote bag. The classic floral print has a timeless appeal that pairs beautifully with any outfit, while the durable construction makes it perfect for daily use.',
    features: [
      'Spacious interior perfect for groceries, books, or beach essentials',
      'Reinforced cotton handles for comfortable carrying',
      'Water-resistant laminated interior for easy cleaning',
      'Vintage-inspired floral pattern with a modern touch',
      'Eco-friendly alternative to plastic bags'
    ],
    specifications: generateProductSpecifications({category: 'Tote Bag'}),
    externalUrl: 'https://www.teepublic.com/user/flowersluxe',
    customUrl: '/custom/vintage-floral-canvas-tote-bag',
    isNew: true,
    featured: true,
    isCustom: false
  },
  {
    id: 6,
    title: 'Watercolor Peonies Pin',
    slug: 'watercolor-peonies-pin',
    category: 'Pin',
    price: 16.99,
    imageSrc: '/images/products/pins/pins-1.jpg',
    description: 'Add a touch of floral elegance to your jacket, backpack, or collection with this beautiful watercolor peonies pin. The delicate peony design is captured in soft watercolor style, bringing a touch of artistic beauty to wherever you pin it.',
    features: [
      'Durable pin-back button with scratch-resistant coating',
      'Vibrant watercolor peony design that stands out',
      'Lightweight yet sturdy construction',
      'Perfect size for jackets, bags, or lapels',
      'Makes a lovely gift for flower enthusiasts or pin collectors'
    ],
    specifications: generateProductSpecifications({category: 'Pin'}),
    externalUrl: 'https://www.teepublic.com/user/flowersluxe',
    customUrl: '/custom/watercolor-peonies-pin',
    featured: true,
    isCustom: false
  },
  {
    id: 7,
    title: 'Tropical Leaves Wall Tapestry',
    slug: 'tropical-leaves-wall-tapestry',
    category: 'Tapestry',
    price: 39.99,
    imageSrc: '/images/products/tapestries/tapestry-1.jpg',
    description: 'Transform any room with this vibrant tropical leaves wall tapestry. The lush green foliage creates a refreshing focal point, bringing the energizing feel of a tropical paradise into your home.',
    features: [
      'Lightweight microfiber material for easy hanging',
      'Vivid tropical leaf design with rich green hues',
      'Hemmed edges for a clean, finished look',
      'Available in multiple sizes to fit any wall',
      'Perfect for bedrooms, dorm rooms, or living spaces'
    ],
    specifications: generateProductSpecifications({category: 'Tapestry'}),
    externalUrl: 'https://www.teepublic.com/user/flowersluxe',
    customUrl: '/custom/tropical-leaves-wall-tapestry',
    isCustom: false,
    discount: {
      percentage: 20
      // Removed code and validUntil
    }
  },
  {
    id: 8,
    title: 'Personalized Name Floral Mug',
    slug: 'personalized-name-floral-mug',
    category: 'Mug',
    price: 34.99,
    imageSrc: '/images/products/mugs/personalized-name-floral-mug.jpg',
    description: 'Make your morning coffee or tea extra special with this personalized floral mug. Add any name or message to be featured alongside a beautiful arrangement of seasonal flowers, creating a truly unique and thoughtful gift.',
    features: [
      'Premium ceramic mug with customizable name or message',
      'Elegant floral design that frames your personalized text',
      'Dishwasher and microwave safe',
      'Long-lasting print that won\'t fade or wash away',
      'Perfect for birthdays, anniversaries, or any special occasion'
    ],
    specifications: generateProductSpecifications({category: 'Mug'}),
    externalUrl: 'https://www.teepublic.com/user/flowersluxe',
    customUrl: '/custom/personalized-name-floral-mug',
    isNew: false,
    featured: true,
    isCustom: true
  }
];

// Get all products
export function getAllProducts(): Product[] {
  return products;
}

// Get product by slug
export function getProductBySlug(slug: string): Product | undefined {
  return products.find(product => product.slug === slug);
}

// Get products by category
export function getProductsByCategory(category: ProductCategory): Product[] {
  return products.filter(product => product.category === category);
}

// Get products by category slug
export function getProductsByCategorySlug(categorySlug: string): Product[] {
  const category = categoryMappings[categorySlug];
  if (!category) return [];
  return getProductsByCategory(category);
}

// Get featured products
export function getFeaturedProducts(limit?: number): Product[] {
  const featuredProducts = products.filter(product => product.featured);
  return limit ? featuredProducts.slice(0, limit) : featuredProducts;
}

// Get new products
export function getNewProducts(limit?: number): Product[] {
  const newProducts = products.filter(product => product.isNew);
  return limit ? newProducts.slice(0, limit) : newProducts;
}

// Get custom products
export function getCustomProducts(limit?: number): Product[] {
  const customProducts = products.filter(product => product.isCustom);
  return limit ? customProducts.slice(0, limit) : customProducts;
}

// Get products with discounts
export function getDiscountedProducts(): Product[] {
  return products.filter(product => product.discount);
}

// Get related products (same category, excluding the current product)
export function getRelatedProducts(product: Product, limit: number = 3): Product[] {
  return products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, limit);
}

// Search products
export function searchProducts(query: string): Product[] {
  const searchTerm = query.toLowerCase();
  return products.filter(product => 
    product.title.toLowerCase().includes(searchTerm) || 
    product.description.toLowerCase().includes(searchTerm) ||
    product.category.toLowerCase().includes(searchTerm)
  );
}

export default products;
