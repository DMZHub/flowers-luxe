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
    title: 'Custom Cat Pillow - Unique Cat Gift',
    slug: 'custom-cat-pillow-unique-cat-gift',
    category: 'Throw Pillow',
    price: 29.00,
    imageSrc: '/images/products/throw-pillows/custom-cat-pillow-unique-cat-gift.webp',
    description: "Celebrate your bond with your cat using this bold Custom Cat Pillow! Featuring a unique fist bump design with your personal cat's name, this personalized cat pillow is perfect for custom cat gifts, memorials, or stylish decor. Our cat pillows custom made from striking artwork bring attitude, love, and flair to any space — ideal for true cat lovers who want a one-of-a-kind keepsake.",
    features: [
      'Personalized with your cat\'s name',
      'Bold fist bump design',
      'Premium quality throw pillow',
      'Makes a perfect gift for cat lovers',
      'Durable and machine washable'
    ],
    specifications: generateProductSpecifications({category: 'Throw Pillow'}),
    externalUrl: '',
    customUrl: '/custom/custom-cat-pillow-unique-cat-gift',
    isNew: true,
    featured: true,
    isCustom: true,
    discount: {
      percentage: 15
    }
  },
  {
    id: 2,
    title: 'Custom Cat Mug - Personalized Mug for Cat Lovers',
    slug: 'custom-cat-mug-personalized-mug-for-cat-lovers',
    category: 'Mug',
    price: 18.00,
    imageSrc: '/images/products/mugs/custom-cat-mug-personalized-mug-for-cat-lovers.webp',
    description: "Custom Cat Mug – Bold Fist Bump Design for Cat Lovers. Show off your bond with your custom cat using this unique mug featuring a cool fist bump illustration and your pet's name. Perfect for morning coffee or as a special custom cat gift. If you're looking for custom cat mugs, this bold design adds personality to every sip.",
    features: [
      'Personalized with your cat\'s name',
      'Bold fist bump design',
      'Premium ceramic quality',
      'Dishwasher and microwave safe',
      'Perfect for cat lovers and pet owners'
    ],
    specifications: generateProductSpecifications({category: 'Mug'}),
    externalUrl: '',
    customUrl: '/custom/custom-cat-mug-personalized-mug-for-cat-lovers',
    isNew: true,
    featured: true,
    isCustom: true,
    discount: {
      percentage: 15
    }
  },
  {
    id: 3,
    title: 'Custom Cat Stickers - Personalized Gifts',
    slug: 'custom-cat-stickers-personalized-gifts',
    category: 'Sticker',
    price: 6.50,
    imageSrc: '/images/products/stickers/custom-cat-stickers-personalized-gifts.webp',
    description: "Make your laptop, water bottle, or journal pop with these bold custom cat stickers featuring your cat's name in a one-of-a-kind fist bump design. Perfect for gifting or personal use, these high-quality vinyl stickers are a fun way to show off your custom cat. Great for custom cat gifts, cat customes, and anyone who loves custom cats with attitude.",
    features: [
      'Personalized with your cat\'s name',
      'Durable vinyl construction',
      'Waterproof and UV resistant',
      'Perfect for laptops, water bottles, or journals',
      'Makes a great personalized gift'
    ],
    specifications: generateProductSpecifications({category: 'Sticker'}),
    externalUrl: '',
    customUrl: '/custom/custom-cat-stickers-personalized-gifts',
    isNew: true,
    featured: false,
    isCustom: true,
    discount: {
      percentage: 15
    }
  },
  {
    id: 4,
    title: 'Custom Cat Tote Bag - Unique Tote Bag',
    slug: 'custom-cat-tote-bag-unique-tote-bag',
    category: 'Tote Bag',
    price: 27.00,
    imageSrc: '/images/products/tote-bags/custom-cat-tote-bag-unique-tote-bag.web',
    description: "Carry your love for your custom cat everywhere with this bold and stylish cat tote bag. Featuring a unique fist bump design with your pet's name, it's perfect for daily errands, gifts, or showing off your feline pride. A fun and functional choice for custom cat gifts, cat customes, and anyone who adores custom cats with personality.",
    features: [
      'Personalized with your cat\'s name',
      'Durable canvas construction',
      'Spacious interior for all your essentials',
      'Reinforced straps for heavy loads',
      'Eco-friendly alternative to plastic bags'
    ],
    specifications: generateProductSpecifications({category: 'Tote Bag'}),
    externalUrl: '',
    customUrl: '/custom/custom-cat-tote-bag-unique-tote-bag',
    isNew: true,
    featured: false,
    isCustom: true,
    discount: {
      percentage: 15
    }
  },
  {
    id: 5,
    title: 'Wildflower Floral Mug - Vintage Botanical Design',
    slug: 'wildflower-floral-mug-vintage-botanical-design',
    category: 'Mug',
    price: 15.00,
    imageSrc: '/images/products/mugs/wildflower-floral-mug-vintage-botanical-design.webp',
    description: 'Start your mornings with floral charm. This Wildflower Floral Mug features a vintage bouquet of peonies, daisies, and eucalyptus—perfect for nature lovers and cozy sips.',
    features: [
      'Vintage botanical wildflower design',
      'Premium ceramic construction',
      'Dishwasher and microwave safe',
      'Vibrant, fade-resistant colors',
      'Perfect gift for nature and flower enthusiasts'
    ],
    specifications: generateProductSpecifications({category: 'Mug'}),
    externalUrl: 'https://store.flowersluxe.com/products/74998962-wildflower-vintage-floral-botanical-baga-mug',
    customUrl: '/custom/wildflower-floral-mug-vintage-botanical-design',
    isNew: false,
    featured: true,
    isCustom: false
  },
  {
    id: 6,
    title: 'Wildflower Pillow - Vintage Floral Cushion',
    slug: 'wildflower-pillow-vintage-floral-cushion',
    category: 'Throw Pillow',
    price: 25.00,
    imageSrc: '/images/products/throw-pillows/wildflower-pillow-vintage-floral-cushion.webp',
    description: 'Add a touch of vintage nature to your space. This Wildflower Pillow showcases soft peonies, daisies, and eucalyptus for a cozy, botanical accent.',
    features: [
      'Vintage botanical wildflower design',
      'Soft, textured fabric for comfort',
      'Concealed zipper for a clean finish',
      'Synthetic insert included',
      'Perfect for adding natural charm to any room'
    ],
    specifications: generateProductSpecifications({category: 'Throw Pillow'}),
    externalUrl: 'https://store.flowersluxe.com/products/74998962-wildflower-vintage-floral-botanical-baga-throw-pillow',
    customUrl: '/custom/wildflower-pillow-vintage-floral-cushion',
    isNew: false,
    featured: true,
    isCustom: false
  },
  {
    id: 7,
    title: 'Wildflower Tapestry - Vintage Floral Wall Hanging',
    slug: 'wildflower-tapestry-vintage-floral-wall-hanging',
    category: 'Tapestry',
    price: 26.00,
    imageSrc: '/images/products/tapestries/wildflower-tapestry-vintage-floral-wall-hanging.webp',
    description: 'Transform your wall with natural elegance. The Wildflower Tapestry displays a detailed vintage bouquet of daisies, peonies, and eucalyptus - perfect for boho and botanical decor.',
    features: [
      'Vintage botanical wildflower design',
      'Lightweight microfiber material',
      'Vibrant, fade-resistant printing',
      'Multiple hanging options',
      'Instantly transforms any wall space'
    ],
    specifications: generateProductSpecifications({category: 'Tapestry'}),
    externalUrl: 'https://store.flowersluxe.com/products/74998962-wildflower-vintage-floral-botanical-baga-tapestry',
    customUrl: '/custom/wildflower-tapestry-vintage-floral-wall-hanging',
    isNew: false,
    featured: false,
    isCustom: false
  },
  {
    id: 8,
    title: 'Wildflower Art Print - Vintage Botanical Poster',
    slug: 'wildflower-art-print-vintage-botanical-poster',
    category: 'Art Print',
    price: 14.00,
    imageSrc: '/images/products/art/wildflower-art-print-vintage-botanical-poster.webp',
    description: 'Brighten your walls with timeless blooms. This Wildflower Art Print features a vintage floral composition with daisies, peonies, and eucalyptus for a fresh, botanical touch.',
    features: [
      'Vintage botanical wildflower design',
      'Premium semi-gloss paper',
      'Archival quality inks for long-lasting color',
      'Available in multiple sizes',
      'Perfect for framing and gallery walls'
    ],
    specifications: generateProductSpecifications({category: 'Art Print'}),
    externalUrl: 'https://store.flowersluxe.com/products/74998962-wildflower-vintage-floral-botanical-baga-poster-and-art',
    customUrl: '/custom/wildflower-art-print-vintage-botanical-poster',
    isNew: false,
    featured: false,
    isCustom: false
  },
  {
    id: 9,
    title: 'Wildflower Tote Bag - Vintage Floral Botanical Bag',
    slug: 'wildflower-tote-bag-vintage-floral-botanical-bag',
    category: 'Tote Bag',
    price: 23.00,
    imageSrc: '/images/products/tote-bags/wildflower-tote-bag-vintage-floral-botanical-bag.webp',
    description: 'Carry nature with you. This Wildflower Tote Bag combines vintage floral beauty with everyday function, featuring peonies, daisies, and eucalyptus in a bold botanical design.',
    features: [
      'Vintage botanical wildflower design',
      'Durable canvas construction',
      'Spacious interior for daily essentials',
      'Reinforced straps for durability',
      'Eco-friendly alternative to plastic bags'
    ],
    specifications: generateProductSpecifications({category: 'Tote Bag'}),
    externalUrl: 'https://store.flowersluxe.com/products/74998962-wildflower-vintage-floral-botanical-baga-tote',
    customUrl: '/custom/wildflower-tote-bag-vintage-floral-botanical-bag',
    isNew: false,
    featured: false,
    isCustom: false
  },
  {
    id: 10,
    title: 'Wildflower Pin - Vintage Floral',
    slug: 'wildflower-pin-vintage-floral',
    category: 'Pin',
    price: 3.25,
    imageSrc: '/images/products/pins/wildflower-pin-vintage-floral.webp',
    description: 'Inspired by the delicate beauty of wildflowers, this vintage floral pin is a must-have for cottagecore lovers. Bring your outfit to life with a classic blooms.',
    features: [
      'Vintage botanical wildflower design',
      'Classic pin-back button design',
      'Scratch and UV-resistant mylar covering',
      'Vibrant, fade-resistant colors',
      'Perfect for jackets, bags, or lapels'
    ],
    specifications: generateProductSpecifications({category: 'Pin'}),
    externalUrl: 'https://store.flowersluxe.com/products/74998962-wildflower-vintage-floral-botanical-baga-pin',
    customUrl: '/custom/wildflower-pin-vintage-floral',
    isNew: false,
    featured: false,
    isCustom: false
  },
  {
    id: 11,
    title: 'Motivational Throw Pillow - Bold Creative Inspiration',
    slug: 'motivational-throw-pillow-bold-creative-inspiration',
    category: 'Throw Pillow',
    price: 25.00,
    imageSrc: '/images/products/throw-pillows/motivational-throw-pillow-bold-creative-inspiration.webp',
    description: 'Add a spark to any room with our motivational throw pillows. A creative motivation pillow designed to uplift, inspire, and comfort every day.',
    features: [
      'Inspirational quote design',
      'Soft, textured fabric for comfort',
      'Concealed zipper for a clean finish',
      'Synthetic insert included',
      'Perfect for home office or living spaces'
    ],
    specifications: generateProductSpecifications({category: 'Throw Pillow'}),
    externalUrl: 'https://store.flowersluxe.com/products/75004442-it-always-seems-impossible-motivational-throw-pillow',
    customUrl: '/custom/motivational-throw-pillow-bold-creative-inspiration',
    isNew: false,
    featured: false,
    isCustom: false
  },
  {
    id: 12,
    title: 'Motivational Coffee Mug - It Always Seems Impossible',
    slug: 'motivational-coffee-mug-it-always-seems-impossible',
    category: 'Mug',
    price: 15.00,
    imageSrc: '/images/products/mugs/motivational-coffee-mug-it-always-seems-impossible.webp',
    description: 'Start your day with this motivational coffee mug featuring the quote "It always seems impossible until it\'s done"—perfect motivation in a mug!',
    features: [
      'Inspirational quote design',
      'Premium ceramic construction',
      'Dishwasher and microwave safe',
      'Vibrant, fade-resistant printing',
      'Perfect for daily motivation'
    ],
    specifications: generateProductSpecifications({category: 'Mug'}),
    externalUrl: 'https://store.flowersluxe.com/products/75004442-it-always-seems-impossible-motivational-mug',
    customUrl: '/custom/motivational-coffee-mug-it-always-seems-impossible',
    isNew: false,
    featured: false,
    isCustom: false
  },
  {
    id: 13,
    title: 'Motivational Tapestry - It Always Seems Impossible',
    slug: 'motivational-tapestry-it-always-seems-impossible',
    category: 'Tapestry',
    price: 26.00,
    imageSrc: '/images/products/tapestries/motivational-tapestry-it-always-seems-impossible.webp',
    description: 'Elevate your space with a motivational tapestry featuring an inspiring quote. This motivational quote tapestry brings daily encouragement to any wall.',
    features: [
      'Inspirational quote design',
      'Lightweight microfiber material',
      'Bold, attention-grabbing typography',
      'Multiple hanging options',
      'Perfect for home office or living spaces'
    ],
    specifications: generateProductSpecifications({category: 'Tapestry'}),
    externalUrl: 'https://store.flowersluxe.com/products/75004442-it-always-seems-impossible-motivational-tapestry',
    customUrl: '/custom/motivational-tapestry-it-always-seems-impossible',
    isNew: false,
    featured: false,
    isCustom: false
  },
  {
    id: 14,
    title: 'Motivational Tote Bag - It Always Seems Impossible',
    slug: 'motivational-tote-bag-it-always-seems-impossible',
    category: 'Tote Bag',
    price: 23.00,
    imageSrc: '/images/products/tote-bags/motivational-tote-bag-it-always-seems-impossible.webp',
    description: 'Carry confidence with this motivational tote bag. A stylish motiv tote bag featuring an inspiring quote to keep you going wherever you are.',
    features: [
      'Inspirational quote design',
      'Durable canvas construction',
      'Spacious interior for daily essentials',
      'Reinforced straps for durability',
      'Perfect for school, work, or everyday use'
    ],
    specifications: generateProductSpecifications({category: 'Tote Bag'}),
    externalUrl: 'https://store.flowersluxe.com/products/75004442-it-always-seems-impossible-motivational-sticker',
    customUrl: '/custom/motivational-tote-bag-it-always-seems-impossible',
    isNew: false,
    featured: false,
    isCustom: false
  },
  {
    id: 15,
    title: 'Motivational Sticker - It Always Seems Impossible',
    slug: 'motivational-sticker-it-always-seems-impossible',
    category: 'Sticker',
    price: 3.00,
    imageSrc: '/images/products/stickers/motivational-sticker-it-always-seems-impossible.webp',
    description: 'Brighten any surface with motivational stickers featuring powerful quotes. Perfect motivation stickers for laptops, or journals.',
    features: [
      'Inspirational quote design',
      'Durable vinyl construction',
      'Waterproof and UV resistant',
      'Perfect for laptops, water bottles, or journals',
      'Daily reminder of motivation and perseverance'
    ],
    specifications: generateProductSpecifications({category: 'Sticker'}),
    externalUrl: 'https://store.flowersluxe.com/products/75004442-it-always-seems-impossible-motivational-poster-and-art',
    customUrl: '/custom/motivational-sticker-it-always-seems-impossible',
    isNew: false,
    featured: false,
    isCustom: false
  },
  {
    id: 16,
    title: 'Motivational Art Print - It Always Seems Impossible',
    slug: 'motivational-art-print-it-always-seems-impossible',
    category: 'Art Print',
    price: 14.00,
    imageSrc: '/images/products/art/motivational-art-print-it-always-seems-impossible.webp',
    description: 'Inspire every space with motivational posters and art prints. This motivational quote art print is perfect for home, office, or creative workspaces.',
    features: [
      'Inspirational quote design',
      'Premium semi-gloss paper',
      'Bold, attention-grabbing typography',
      'Available in multiple sizes',
      'Perfect for home office or creative spaces'
    ],
    specifications: generateProductSpecifications({category: 'Art Print'}),
    externalUrl: 'https://store.flowersluxe.com/products/75004442-it-always-seems-impossible-motivational-tote',
    customUrl: '/custom/motivational-art-print-it-always-seems-impossible',
    isNew: false,
    featured: false,
    isCustom: false
  },
  {
    id: 17,
    title: 'Sunflower Throw Pillow - Bold Botanical Elegance',
    slug: 'sunflower-throw-pillow-bold-botanical-elegance',
    category: 'Throw Pillow',
    price: 25.00,
    imageSrc: '/images/products/throw-pillows/sunflower-throw-pillow-bold-botanical-elegance.webp',
    description: 'Brighten your space with a sunflower pillow featuring a detailed floral mandala. These sunflower throw pillows add charm, warmth, and nature-inspired style.',
    features: [
      'Vibrant sunflower mandala design',
      'Soft, textured fabric for comfort',
      'Concealed zipper for a clean finish',
      'Synthetic insert included',
      'Brings warm, cheerful energy to any space'
    ],
    specifications: generateProductSpecifications({category: 'Throw Pillow'}),
    externalUrl: 'https://store.flowersluxe.com/products/75001625-sunflower-mandala-vibrant-floral-boho-design-throw-pillow',
    customUrl: '/custom/sunflower-throw-pillow-bold-botanical-elegance',
    isNew: false,
    featured: false,
    isCustom: false
  },
  {
    id: 18,
    title: 'Sunflower Mandala Tapestry - Bold Wall Art',
    slug: 'sunflower-mandala-tapestry-bold-wall-art',
    category: 'Tapestry',
    price: 26.00,
    imageSrc: '/images/products/tapestries/sunflower-mandala-tapestry-bold-wall-art.webp',
    description: 'Transform your space with this sunflower tapestry featuring a stunning mandala design. A perfect wall tapestry for sunflower lovers and boho-style rooms.',
    features: [
      'Vibrant sunflower mandala design',
      'Lightweight microfiber material',
      'Intricate boho-inspired pattern',
      'Multiple hanging options',
      'Creates an instant focal point in any room'
    ],
    specifications: generateProductSpecifications({category: 'Tapestry'}),
    externalUrl: 'https://store.flowersluxe.com/products/75001625-sunflower-mandala-vibrant-floral-boho-design-tapestry',
    customUrl: '/custom/sunflower-mandala-tapestry-bold-wall-art',
    isNew: false,
    featured: false,
    isCustom: false
  },
  {
    id: 19,
    title: 'Sunflower Tote Bag - Bold Floral Statement',
    slug: 'sunflower-tote-bag-bold-floral-statement',
    category: 'Tote Bag',
    price: 23.00,
    imageSrc: '/images/products/tote-bags/sunflower-tote-bag-bold-floral-statement.webp',
    description: 'Carry sunshine with this sunflower tote bag featuring a vibrant floral design. A perfect tote bag for sunflower lovers and everyday style.',
    features: [
      'Vibrant sunflower mandala design',
      'Durable canvas construction',
      'Spacious interior for daily essentials',
      'Reinforced straps for durability',
      'Brings cheerful energy to everyday errands'
    ],
    specifications: generateProductSpecifications({category: 'Tote Bag'}),
    externalUrl: 'https://store.flowersluxe.com/products/75001625-sunflower-mandala-vibrant-floral-boho-design-tote',
    customUrl: '/custom/sunflower-tote-bag-bold-floral-statement',
    isNew: false,
    featured: false,
    isCustom: false
  },
  {
    id: 20,
    title: 'Sunflower Coffee Mug - Brighten Your Mornings',
    slug: 'sunflower-coffee-mug-brighten-your-mornings',
    category: 'Mug',
    price: 15.00,
    imageSrc: '/images/products/mugs/sunflower-coffee-mug-brighten-your-mornings.webp',
    description: 'Sip in style with this sunflower mug. A beautiful sunflower ceramic mug that brings warmth and joy to your coffee moments. Perfect for daily use or gifting.',
    features: [
      'Vibrant sunflower mandala design',
      'Premium ceramic construction',
      'Dishwasher and microwave safe',
      'Vibrant, fade-resistant printing',
      'Brings sunshine to your morning routine'
    ],
    specifications: generateProductSpecifications({category: 'Mug'}),
    externalUrl: 'https://store.flowersluxe.com/products/75001625-sunflower-mandala-vibrant-floral-boho-design-mug',
    customUrl: '/custom/sunflower-coffee-mug-brighten-your-mornings',
    isNew: false,
    featured: false,
    isCustom: false
  },
  {
    id: 21,
    title: 'Sunflower Art Print - Vibrant Floral Wall Decor',
    slug: 'sunflower-art-print-vibrant-floral-wall-decor',
    category: 'Art Print',
    price: 14.00,
    imageSrc: '/images/products/art/sunflower-art-print-vibrant-floral-wall-decor.webp',
    description: 'Add a touch of nature with this sunflower art print. Perfect for sunflower lovers, this poster brings warmth and charm to any home or office space.',
    features: [
      'Vibrant sunflower mandala design',
      'Premium semi-gloss paper',
      'Archival inks for long-lasting color',
      'Available in multiple sizes',
      'Brings sunshine and positive energy to any space'
    ],
    specifications: generateProductSpecifications({category: 'Art Print'}),
    externalUrl: 'https://store.flowersluxe.com/products/75001625-sunflower-mandala-vibrant-floral-boho-design-poster-and-art',
    customUrl: '/custom/sunflower-art-print-vibrant-floral-wall-decor',
    isNew: false,
    featured: false,
    isCustom: false
  },
  {
    id: 22,
    title: 'Dusty Rose Tapestry - Soft Pink Floral',
    slug: 'dusty-rose-tapestry-soft-pink-floral',
    category: 'Tapestry',
    price: 26.00,
    imageSrc: '/images/products/tapestries/dusty-rose-tapestry-soft-pink-floral.webp',
    description: "Add elegance to your space with this dusty rose floral tapestry. Featuring soft watercolor petals and golden accents, it's perfect for creating a peaceful, feminine atmosphere in any room.",
    features: [
      'Soft dusty rose watercolor design',
      'Lightweight microfiber material',
      'Delicate golden accents',
      'Multiple hanging options',
      'Creates a romantic, peaceful atmosphere'
    ],
    specifications: generateProductSpecifications({category: 'Tapestry'}),
    externalUrl: 'https://store.flowersluxe.com/products/75064412-dusty-rose-flowers-soft-pink-floral-tapestry',
    customUrl: '/custom/dusty-rose-tapestry-soft-pink-floral',
    isNew: true,
    featured: true,
    isCustom: false
  },
  {
    id: 23,
    title: 'Dusty Rose Throw Pillow - Soft Pink Floral',
    slug: 'dusty-rose-throw-pillow-soft-pink-floral',
    category: 'Throw Pillow',
    price: 25.00,
    imageSrc: '/images/products/throw-pillows/dusty-rose-throw-pillow-soft-pink-floral.webp',
    description: "This dusty rose watercolor floral throw pillow brings charm and softness to your home décor. Ideal for bedrooms, living rooms, or cozy nooks with a romantic touch.",
    features: [
      'Soft dusty rose watercolor design',
      'Delicate floral pattern',
      'Concealed zipper for a clean finish',
      'Synthetic insert included',
      'Perfect for adding romantic charm to any space'
    ],
    specifications: generateProductSpecifications({category: 'Throw Pillow'}),
    externalUrl: 'https://store.flowersluxe.com/products/75064412-dusty-rose-flowers-soft-pink-floral-throw-pillow',
    customUrl: '/custom/dusty-rose-throw-pillow-soft-pink-floral',
    isNew: true,
    featured: true,
    isCustom: false
  },
  {
    id: 24,
    title: 'Dusty Rose Tote Bag - Soft Rose',
    slug: 'dusty-rose-tote-bag-soft-rose',
    category: 'Tote Bag',
    price: 23.00,
    imageSrc: '/images/products/tote-bags/dusty-rose-tote-bag-soft-rose.webp',
    description: "Carry beauty with you! This dusty rose floral watercolor tote bag blends art and functionality—perfect for everyday errands or as a stylish accessory.",
    features: [
      'Soft dusty rose watercolor design',
      'Durable canvas construction',
      'Spacious interior for daily essentials',
      'Reinforced straps for durability',
      'Elegant feminine accessory for any occasion'
    ],
    specifications: generateProductSpecifications({category: 'Tote Bag'}),
    externalUrl: 'https://store.flowersluxe.com/products/75064412-dusty-rose-flowers-soft-pink-floral-tote',
    customUrl: '/custom/dusty-rose-tote-bag-soft-rose',
    isNew: true,
    featured: false,
    isCustom: false
  },
  {
    id: 25,
    title: 'Dusty Rose Floral Mug - Rose Coffee Cup',
    slug: 'dusty-rose-floral-mug-rose-coffee-cup',
    category: 'Mug',
    price: 15.00,
    imageSrc: '/images/products/mugs/dusty-rose-floral-mug-rose-coffee-cup.webp',
    description: 'Sip in style with this delicate dusty rose floral mug. A soft watercolor design makes it a perfect gift for flower lovers, artists, or anyone who loves calming aesthetics.',
    features: [
      'Soft dusty rose watercolor design',
      'Premium ceramic construction',
      'Dishwasher and microwave safe',
      'Elegant, feminine aesthetic',
      'Perfect for tea, coffee, or hot chocolate'
    ],
    specifications: generateProductSpecifications({category: 'Mug'}),
    externalUrl: 'https://store.flowersluxe.com/products/75064412-dusty-rose-flowers-soft-pink-floral-mug',
    customUrl: '/custom/dusty-rose-floral-mug-rose-coffee-cup',
    isNew: true,
    featured: false,
    isCustom: false
  },
  {
    id: 26,
    title: 'Dusty Rose - Soft Pink Pin',
    slug: 'dusty-rose-soft-pink-pin',
    category: 'Pin',
    price: 3.25,
    imageSrc: '/images/products/pins/dusty-rose-soft-pink-pin.webp',
    description: 'This dusty rose watercolor flower pin is a delicate accessory for jackets, bags, or hats. A subtle touch of nature-inspired elegance you can wear anywhere.',
    features: [
      'Soft dusty rose watercolor design',
      'Classic pin-back button design',
      'Scratch and UV-resistant mylar covering',
      'Delicate floral pattern',
      'Adds a feminine touch to any outfit or accessory'
    ],
    specifications: generateProductSpecifications({category: 'Pin'}),
    externalUrl: 'https://store.flowersluxe.com/products/75064412-dusty-rose-flowers-soft-pink-floral-pin',
    customUrl: '/custom/dusty-rose-soft-pink-pin',
    isNew: true,
    featured: false,
    isCustom: false
  },
  {
    id: 27,
    title: 'Dusty Rose - Soft Pink Sticker',
    slug: 'dusty-rose-soft-pink-sticker',
    category: 'Sticker',
    price: 3.00,
    imageSrc: '/images/products/stickers/dusty-rose-soft-pink-sticker.webp',
    description: 'Decorate your laptop, journal, or water bottle with this elegant dusty rose floral sticker. Aesthetic and durable—perfect for those who love soft, botanical vibes.',
    features: [
      'Soft dusty rose watercolor design',
      'Durable vinyl construction',
      'Waterproof and UV resistant',
      'Delicate floral pattern',
      'Adds a feminine touch to any surface'
    ],
    specifications: generateProductSpecifications({category: 'Sticker'}),
    externalUrl: 'https://store.flowersluxe.com/products/75064412-dusty-rose-flowers-soft-pink-floral-sticker',
    customUrl: '/custom/dusty-rose-soft-pink-sticker',
    isNew: true,
    featured: false,
    isCustom: false
  },
  {
    id: 28,
    title: 'Dusty Rose Art Print - Wall Art for Home Decor',
    slug: 'dusty-rose-art-print-wall-art-for-home-decor',
    category: 'Art Print',
    price: 14.00,
    imageSrc: '/images/products/art/dusty-rose-art-print-wall-art-for-home-decor.webp',
    description: 'Elevate your wall space with this dusty rose floral watercolor art print. The soft pink tones and golden details add grace and sophistication to any gallery wall or office.',
    features: [
      'Soft dusty rose watercolor design',
      'Premium semi-gloss paper',
      'Delicate golden accents',
      'Available in multiple sizes',
      'Perfect for creating a romantic, feminine space'
    ],
    specifications: generateProductSpecifications({category: 'Art Print'}),
    externalUrl: 'https://store.flowersluxe.com/products/75064412-dusty-rose-flowers-soft-pink-floral-poster-and-art',
    customUrl: '/custom/dusty-rose-art-print-wall-art-for-home-decor',
    isNew: true,
    featured: false,
    isCustom: false
  },
  {
    id: 29,
    title: 'Tulip Throw Pillow - Home Floral Decor',
    slug: 'tulip-throw-pillow-home-floral-decor',
    category: 'Throw Pillow',
    price: 25.00,
    imageSrc: '/images/products/throw-pillows/tulip-throw-pillow-home-floral-decor.webp',
    description: 'This soft, floral throw pillow showcases dusty rose tulips in a watercolor style. A perfect accent for couches, chairs, or beds, adding cozy elegance to your living space.',
    features: [
      'Watercolor tulip design',
      'Soft, textured fabric for comfort',
      'Concealed zipper for a clean finish',
      'Synthetic insert included',
      'Adds a touch of spring to any room'
    ],
    specifications: generateProductSpecifications({category: 'Throw Pillow'}),
    externalUrl: 'https://store.flowersluxe.com/products/75066708-tulip-watercolor-floral-throw-pillow',
    customUrl: '/custom/tulip-throw-pillow-home-floral-decor',
    isNew: true,
    featured: true,
    isCustom: false
  },
  {
    id: 30,
    title: 'Tulips Tote Bag - Floral Accessory',
    slug: 'tulips-tote-bag-floral-accessory',
    category: 'Tote Bag',
    price: 23.00,
    imageSrc: '/images/products/tote-bags/tulips-tote-bag-floral-accessory.webp',
    description: "Carry floral beauty wherever you go with this dusty rose tulips watercolor tote bag. Functional and stylish, it's ideal for daily errands, books, or as a chic accessory.",
    features: [
      'Watercolor tulip design',
      'Durable canvas construction',
      'Spacious interior for daily essentials',
      'Reinforced straps for durability',
      'Perfect spring and summer accessory'
    ],
    specifications: generateProductSpecifications({category: 'Tote Bag'}),
    externalUrl: 'https://store.flowersluxe.com/products/75066708-tulip-watercolor-floral-tote',
    customUrl: '/custom/tulips-tote-bag-floral-accessory',
    isNew: true,
    featured: true,
    isCustom: false
  },
  {
    id: 31,
    title: 'Tulip Art Print - Botanical Wall Decor',
    slug: 'tulip-art-print-botanical-wall-decor',
    category: 'Art Print',
    price: 14.00,
    imageSrc: '/images/products/art/tulip-art-print-botanical-wall-decor.wepb',
    description: 'This vibrant tulip watercolor art print captures the elegance of dusty rose. Perfect for brightening up your walls with botanical charm.',
    features: [
      'Watercolor tulip design',
      'Premium semi-gloss paper',
      'Archival inks for long-lasting color',
      'Available in multiple sizes',
      'Perfect for spring-themed decor'
    ],
    specifications: generateProductSpecifications({category: 'Art Print'}),
    externalUrl: 'https://store.flowersluxe.com/products/75066708-tulip-watercolor-floral-poster-and-art',
    customUrl: '/custom/tulip-art-print-botanical-wall-decor',
    isNew: true,
    featured: false,
    isCustom: false
  },
  {
    id: 32,
    title: 'Tulip Tapestry - Floral Wall Hanging',
    slug: 'tulip-tapestry-floral-wall-hanging',
    category: 'Tapestry',
    price: 26.00,
    imageSrc: '/images/products/tapestries/tulip-tapestry-floral-wall-hanging.webp',
    description: "Bring a touch of nature indoors with this elegant dusty rose tulip watercolor tapestry. Featuring hand-painted floral details and a dreamy background, it adds warmth and charm to any space.",
    features: [
      'Watercolor tulip design',
      'Lightweight microfiber material',
      'Soft, dreamy background',
      'Multiple hanging options',
      'Perfect statement piece for spring decor'
    ],
    specifications: generateProductSpecifications({category: 'Tapestry'}),
    externalUrl: 'https://store.flowersluxe.com/products/75066708-tulip-watercolor-floral-tapestry',
    customUrl: '/custom/tulip-tapestry-floral-wall-hanging',
    isNew: true,
    featured: false,
    isCustom: false
  }
id: 33,
title: 'Watercolor Tulip Floral Mug - Botanical Coffee Cup',
slug: 'watercolor-tulip-floral-mug',
category: 'Mug',
price: 15.00,
imageSrc: '/images/products/mugs/watercolor-tulip-floral-mug.webp',
description: 'Sip in style with this beautiful watercolor tulip mug. Featuring vibrant pink tulips and lush green leaves, it’s perfect for floral art lovers and nature enthusiasts.',
features: [
  'Vibrant watercolor tulip illustration with abstract background',
  'Premium ceramic construction',
  'Dishwasher and microwave safe',
  'Elegant, feminine aesthetic',
  'Perfect for tea, coffee, or hot chocolate'
],
   specifications: generateProductSpecifications({category: 'Mug'}),
   externalUrl: 'https://store.flowersluxe.com/products/https://store.flowersluxe.com/products/75066708-tulip-watercolor-floral-mug',
   customUrl: '/custom/watercolor-tulip-floral-mug',
    isNew: false,
    featured: false,
    isCustom: false
  },
  
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
