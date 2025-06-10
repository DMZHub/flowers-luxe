import { Product, ProductSpecification } from '../types/product';

const generateProductSpecifications = (): ProductSpecification[] => [
  { name: 'Material', value: 'Double-sided textured poly "twill" - soft and smooth' },
  { name: 'Made In', value: 'USA - Individually cut & sewn by hand' },
  { name: 'Features', value: 'Concealed zipper and included insert for out-of-the-bag coziness' },
  { name: 'Care Instructions', value: 'Cover: Machine wash cold, gentle cycle. Insert: Spot clean only' },
  { name: 'Sizes Available', value: 'Multiple sizes for all your decorating needs' },
  { name: 'Quality', value: 'Highest quality standards with premium materials' },
];

export const products: Product[] = [
 {
    id: 'sunflower-mandala-boho-pillow',
    title: 'Sunflower Mandala Boho Pillow',
    slug: 'sunflower-mandala-boho-pillow',
    style: 'boho',
    flowerType: 'sunflower',
    colors: ['yellow', 'multicolor', 'orange'],
    price: 25.00,
    featured: true,
    mainImage: 'sunflower-mandala-boho-pillow-white-background.webp',
    images: [
      {
        src: '/images/sunflower-mandala-boho-pillow-white-background.webp',
        alt: 'Sunflower mandala boho throw pillow featuring intricate symmetrical sunflower pattern',
        title: 'Sunflower Mandala Boho Pillow - Mandala Design'
      },
      {
        src: '/images/sunflower-mandala-boho-pillow-on-sofa.webp',
        alt: 'Sunflower mandala pillow styled on a bohemian sofa with earth-toned decor',
        title: 'Sunflower Mandala Boho Pillow - Boho Living Space'
      },
      {
        src: '/images/sunflower-mandala-boho-pillow-on-bed.webp',
        alt: 'Sunflower mandala throw pillow on a boho-style bed with layered textiles',
        title: 'Sunflower Mandala Boho Pillow - Bohemian Bedroom'
      }
    ],
    description: 'Discover spiritual harmony with our mesmerizing Sunflower Mandala Boho Pillow, where the radiant energy of sunflowers meets the sacred geometry of mandala art. This vibrant boho throw pillow features an intricate symmetrical pattern of sunflowers arranged in a captivating mandala design that brings positivity and warmth to any space. Perfect for yoga enthusiasts, meditation practitioners, and lovers of bohemian style, this pillow combines spiritual symbolism with natural beauty. The rich golden yellows and warm oranges evoke the life-giving energy of the sun, creating a focal point that radiates joy and tranquility. The mandala pattern represents wholeness and cosmic energy, making this pillow not just a decorative accent but a meaningful addition to your sacred space. Crafted with premium textured poly twill fabric for exceptional durability and comfort, this pillow features a double-sided design that showcases the mandala from every angle. The concealed zipper and included synthetic insert ensure lasting quality and convenience. Handmade in America with careful attention to detail, this sunflower mandala pillow is ideal for meditation rooms, bohemian living spaces, or anywhere you want to create a sense of peaceful energy and natural harmony.',
    shortDescription: 'Discover spiritual harmony with our Sunflower Mandala Boho Pillow, featuring intricate mandala design perfect for meditation and boho spaces.',
    specifications: generateProductSpecifications(),
    externalUrl: 'https://store.flowersluxe.com/products/75001625-sunflower-mandala-vibrant-floral-boho-design-throw-pillow',
    metaTitle: 'Sunflower Mandala Boho Pillow – Spiritual Floral Throw Pillow',
    metaDescription: 'Discover spiritual harmony with our Sunflower Mandala Boho Pillow, featuring intricate mandala design perfect for meditation and boho spaces.',
    keywords: [
      'sunflower mandala pillow',
      'boho throw pillow',
      'mandala design pillow',
      'spiritual home decor',
      'meditation pillow',
      'bohemian cushion',
      'sunflower boho decor',
      'yoga room pillow',
      'sacred geometry pillow',
      'mandala home accents'
    ],
    dateAdded: '2025-06-07',
    inStock: true,
    category: 'Flower Throw Pillows'
  },
  {
    id: 'tulip-watercolor-floral-pillow',
    title: 'Tulip Watercolor Floral Pillow',
    slug: 'tulip-watercolor-floral-pillow',
    style: 'watercolor',
    flowerType: 'tulip',
    colors: ['multicolor', 'yellow', 'red', 'green'],
    price: 25.00,
    featured: true,
    mainImage: 'tulip-watercolor-floral-pillow-white-background.webp',
    images: [
      {
        src: '/images/tulip-watercolor-floral-pillow-white-background.webp',
        alt: 'Tulip watercolor floral throw pillow showcasing soft painted tulip flowers',
        title: 'Tulip Watercolor Floral Pillow - Watercolor Art'
      },
      {
        src: '/images/tulip-watercolor-floral-pillow-on-sofa.webp',
        alt: 'Tulip watercolor pillow styled on a modern sofa with natural spring lighting',
        title: 'Tulip Watercolor Floral Pillow - Spring Living Room'
      },
      {
        src: '/images/tulip-watercolor-floral-pillow-on-bed.webp',
        alt: 'Tulip watercolor throw pillow on a bright bedroom with fresh floral accents',
        title: 'Tulip Watercolor Floral Pillow - Fresh Bedroom Decor'
      }
    ],
    description: 'Celebrate the arrival of spring with our enchanting Tulip Watercolor Floral Pillow, a beautiful blend of artistic expression and natural elegance. This stunning watercolor throw pillow features delicate tulip flowers painted in soft, flowing brushstrokes with lush green leaves against a vibrant abstract background. The dreamy watercolor technique creates a sense of movement and life, as if the tulips are gently swaying in a spring breeze. Perfect for nature lovers and art enthusiasts, this pillow brings the fresh beauty of a tulip garden indoors. The soft color palette of pinks, purples, and verdant greens creates a calming, uplifting atmosphere that complements both contemporary and traditional décor styles. The artistic watercolor effect adds sophistication and creativity to any room, making it an ideal accent piece for living rooms, bedrooms, or artistic spaces. Crafted with premium textured poly twill fabric, this pillow ensures lasting beauty and comfort. The double-sided design showcases the watercolor artwork from every angle, while the concealed zipper and included synthetic insert provide practical functionality. Individually cut and sewn by hand in America, this tulip pillow represents the perfect fusion of artistic vision and quality craftsmanship.',
    shortDescription: 'Celebrate spring with our Tulip Watercolor Floral Pillow, featuring delicate painted tulips perfect for nature lovers and art enthusiasts.',
    specifications: generateProductSpecifications(),
    externalUrl: 'https://store.flowersluxe.com/products/75066708-tulip-watercolor-floral-throw-pillow',
    metaTitle: 'Tulip Watercolor Floral Pillow – Spring Art Throw Pillow',
    metaDescription: 'Celebrate spring with our Tulip Watercolor Floral Pillow, featuring delicate painted tulips perfect for nature lovers and art enthusiasts.',
    keywords: [
      'tulip watercolor pillow',
      'watercolor floral cushion',
      'spring flower pillow',
      'artistic throw pillow',
      'tulip home decor',
      'painted flower pillow',
      'watercolor home accents',
      'spring decor pillow',
      'floral art pillow',
      'tulip decorative pillow'
    ],
    dateAdded: '2025-06-07',
    inStock: true,
    category: 'Flower Throw Pillows'
  },
  {
    id: 'motivational-quote-modern-pillow',
    title: 'Motivational Quote Modern Pillow',
    slug: 'motivational-quote-modern-pillow',
    style: 'modern',
    flowerType: 'sunflower',
    colors: ['yellow', 'multicolor'],
    price: 25.00,
    featured: true,
    mainImage: 'motivational-quote-modern-pillow-white-background.webp',
    images: [
      {
        src: '/images/motivational-quote-modern-pillow-white-background.webp',
        alt: 'Motivational quote modern throw pillow featuring inspirational text design',
        title: 'Motivational Quote Modern Pillow - Inspirational Design'
      },
      {
        src: '/images/motivational-quote-modern-pillow-on-sofa.webp',
        alt: 'Motivational quote pillow styled on a contemporary sofa in a modern office space',
        title: 'Motivational Quote Modern Pillow - Office Inspiration'
      },
      {
        src: '/images/motivational-quote-modern-pillow-on-bed.webp',
        alt: 'Motivational quote throw pillow on a minimalist bed for daily inspiration',
        title: 'Motivational Quote Modern Pillow - Daily Motivation'
      }
    ],
    description: 'Inspire yourself daily with our powerful Motivational Quote Modern Pillow, featuring the uplifting message "It Always Seems Impossible Until It\'s Done." This contemporary throw pillow serves as both stylish décor and a constant reminder to persevere through challenges and never give up on your dreams. Perfect for dreamers, goal-setters, and achievers, this pillow brings motivational energy to any space. The clean, modern typography design complements contemporary interiors while delivering a message that resonates with anyone working toward their goals. Ideal for home offices, study rooms, bedrooms, or any space where you need daily inspiration and encouragement. The sophisticated black and white design with subtle colorful accents ensures this pillow fits seamlessly into modern décor schemes while making a meaningful statement. Crafted with premium textured poly twill fabric for exceptional durability and comfort, this pillow features a double-sided design that keeps the inspiring message visible from every angle. The concealed zipper and included synthetic insert provide convenience and longevity. Handmade in America with meticulous attention to detail, this motivational pillow is perfect for creating an inspiring atmosphere that encourages success and personal growth.',
    shortDescription: 'Inspire yourself daily with our Motivational Quote Modern Pillow featuring "It Always Seems Impossible Until It\'s Done" for goal-setters.',
    specifications: generateProductSpecifications(),
    externalUrl: 'https://store.flowersluxe.com/products/75004442-it-always-seems-impossible-motivational-throw-pillow',
    metaTitle: 'Motivational Quote Modern Pillow – Inspirational Throw Pillow',
    metaDescription: 'Inspire yourself daily with our Motivational Quote Modern Pillow featuring "It Always Seems Impossible Until It\'s Done" for goal-setters.',
    keywords: [
      'motivational quote pillow',
      'inspirational throw pillow',
      'modern quote cushion',
      'office decor pillow',
      'goal setter pillow',
      'achievement pillow',
      'success motivation pillow',
      'contemporary quote pillow',
      'daily inspiration pillow',
      'modern motivational decor'
    ],
    dateAdded: '2025-06-07',
    inStock: true,
    category: 'Flower Throw Pillows'
  },
  {
    id: 'dusty-rose-soft-pink-pillow',
    title: 'Dusty Rose Soft Pink Pillow',
    slug: 'dusty-rose-soft-pink-pillow',
    style: 'watercolor',
    flowerType: 'rose',
    colors: ['gold', 'white'],
    price: 25.00,
    featured: false,
    mainImage: 'dusty-rose-soft-pink-pillow-white-background.webp',
    images: [
      {
        src: '/images/dusty-rose-soft-pink-pillow-white-background.webp',
        alt: 'Dusty rose soft pink throw pillow featuring delicate watercolor rose design',
        title: 'Dusty Rose Soft Pink Pillow - Elegant Watercolor'
      },
      {
        src: '/images/dusty-rose-soft-pink-pillow-on-sofa.webp',
        alt: 'Dusty rose pillow styled on a neutral sofa in an elegant feminine living room',
        title: 'Dusty Rose Soft Pink Pillow - Feminine Living Space'
      },
      {
        src: '/images/dusty-rose-soft-pink-pillow-on-bed.webp',
        alt: 'Dusty rose throw pillow on a romantic bedroom with soft pink and gold accents',
        title: 'Dusty Rose Soft Pink Pillow - Romantic Bedroom'
      }
    ],
    description: 'Embrace feminine elegance with our enchanting Dusty Rose Soft Pink Pillow, a masterpiece of watercolor artistry that brings romantic charm to any space. This exquisite throw pillow showcases soft pink dusty rose petals painted in delicate watercolor technique, enhanced with subtle golden accents that catch the light beautifully. The serene and feminine design creates an atmosphere of tranquility and grace, perfect for those who appreciate understated luxury and romantic aesthetics. The gentle color palette of blush pink and warm gold evokes feelings of comfort and sophistication, making this pillow an ideal accent for bedrooms, sitting rooms, or any space where you want to create a sense of elegant serenity. The watercolor technique adds artistic depth and movement to the design, as if the roses are floating softly across the fabric. Crafted with premium textured poly twill fabric, this pillow offers exceptional quality and comfort that will last for years. The double-sided design ensures the beautiful watercolor artwork is visible from every angle, while the concealed zipper and included synthetic insert provide practical convenience. Individually cut and sewn by hand in America, this dusty rose pillow represents the perfect blend of artistic beauty and superior craftsmanship.',
    shortDescription: 'Embrace feminine elegance with our Dusty Rose Soft Pink Pillow, featuring delicate watercolor roses with golden accents.',
    specifications: generateProductSpecifications(),
    externalUrl: 'https://store.flowersluxe.com/products/75064412-dusty-rose-flowers-soft-pink-floral-throw-pillow',
    metaTitle: 'Dusty Rose Soft Pink Pillow – Elegant Watercolor Throw Pillow',
    metaDescription: 'Embrace feminine elegance with our Dusty Rose Soft Pink Pillow, featuring delicate watercolor roses with golden accents.',
    keywords: [
      'dusty rose pillow',
      'soft pink throw pillow',
      'watercolor rose cushion',
      'feminine home decor',
      'romantic pillow design',
      'pink and gold pillow',
      'elegant rose pillow',
      'feminine accent pillow',
      'romantic bedroom decor',
      'soft pink home accents'
    ],
    dateAdded: '2025-06-07',
    inStock: true,
    category: 'Flower Throw Pillows'
  },
  {
    id: 'wildflower-vintage-botanical-pillow',
    title: 'Wildflower Vintage Botanical Pillow',
    slug: 'wildflower-vintage-botanical-pillow',
    style: 'vintage',
    flowerType: 'wildflower',
    colors: ['multicolor', 'yellow', 'white', 'orange'],
    price: 25.00,
    featured: false,
    mainImage: 'wildflower-vintage-botanical-pillow-white-background.webp',
    images: [
      {
        src: '/images/wildflower-vintage-botanical-pillow-white-background.webp',
        alt: 'Wildflower vintage botanical throw pillow featuring stylized vintage flower bouquet',
        title: 'Wildflower Vintage Botanical Pillow - Vintage Bouquet'
      },
      {
        src: '/images/wildflower-vintage-botanical-pillow-on-sofa.webp',
        alt: 'Wildflower vintage pillow styled on an antique sofa in a traditional living room',
        title: 'Wildflower Vintage Botanical Pillow - Traditional Setting'
      },
      {
        src: '/images/wildflower-vintage-botanical-pillow-on-bed.webp',
        alt: 'Wildflower vintage throw pillow on a cottage-style bed with floral linens',
        title: 'Wildflower Vintage Botanical Pillow - Cottage Bedroom'
      }
    ],
    description: 'Step into a world of timeless beauty with our Wildflower Vintage Botanical Pillow, featuring a stylized vintage bouquet that captures the romance of bygone eras. This charming throw pillow showcases an exquisite arrangement of wildflowers including delicate daisies and elegant peonies, rendered in a classic vintage style that evokes the charm of antique botanical illustrations. The sophisticated color palette and artistic styling create a sense of nostalgia and refined elegance that perfectly complements traditional, cottage, or vintage-inspired décor. The intricate botanical details and vintage aesthetic make this pillow a perfect choice for those who appreciate classic beauty and timeless design. Each flower in the bouquet is carefully detailed, creating a rich tapestry of natural beauty that serves as both art and comfort. The muted color scheme with touches of purple, green, and cream creates a calming, sophisticated atmosphere that works beautifully in bedrooms, sitting rooms, or any space where you want to add a touch of vintage charm. Crafted with premium textured poly twill fabric for exceptional durability and comfort, this pillow features a double-sided design that showcases the vintage botanical artwork from every angle. The concealed zipper and included synthetic insert ensure lasting quality and convenience. Handmade in America with careful attention to detail, this wildflower pillow brings the timeless appeal of vintage botanical art to your home.',
    shortDescription: 'Step into timeless beauty with our Wildflower Vintage Botanical Pillow, featuring a classic bouquet perfect for vintage-inspired spaces.',
    specifications: generateProductSpecifications(),
    externalUrl: 'https://store.flowersluxe.com/products/74998962-wildflower-vintage-floral-botanical-baga-throw-pillow',
    metaTitle: 'Wildflower Vintage Botanical Pillow – Classic Floral Throw Pillow',
    metaDescription: 'Step into timeless beauty with our Wildflower Vintage Botanical Pillow, featuring a classic bouquet perfect for vintage-inspired spaces.',
    keywords: [
      'wildflower vintage pillow',
      'botanical throw pillow',
      'vintage floral cushion',
      'antique style pillow',
      'classic flower pillow',
      'cottage decor pillow',
      'vintage home accents',
      'botanical home decor',
      'traditional pillow design',
      'vintage wildflower pillow'
    ],
    dateAdded: '2025-06-07',
    inStock: true,
    category: 'Flower Throw Pillows'
  },
{
  id: 'lavender-throw-pillow-botanical-illustration',
  title: 'Lavender Throw Pillow',
  slug: 'lavender-throw-pillow-botanical-illustration',
  style: 'floral',
  flowerType: 'lavender',
  colors: ['purple', 'green', 'yellow'],
  price: 25.00,
  featured: true,
  mainImage: 'lavender-throw-pillow-botanical-illustration.webp',
  images: [
    {
      src: '/images/lavender-throw-pillow-botanical-illustration.webp',
      alt: 'Lavender throw pillow with botanical illustration style featuring purple flowers and green leaves',
      title: 'Lavender Throw Pillow – Botanical Floral Art'
    },
    {
      src: '/images/lavender-throw-pillow-on-sofa.webp',
      alt: 'Lavender throw pillow styled on a neutral-toned sofa with vibrant botanical theme',
      title: 'Lavender Throw Pillow – Modern Sofa Decor'
    },
    {
      src: '/images/lavender-throw-pillow-on-bed.webp',
      alt: 'Lavender botanical throw pillow on a bright bed setup with floral-inspired decor',
      title: 'Lavender Throw Pillow – Bright Bedroom Accent'
    }
  ],
  description: 'Brighten your space with our Lavender Throw Pillow, featuring a bold botanical illustration of blooming lavender flowers in rich purple hues. A perfect accent for floral lovers and vibrant home decor.',
  shortDescription: 'Add a floral flair with this bold lavender throw pillow, perfect for colorful home accents.',
  specifications: generateProductSpecifications(),
  externalUrl: 'https://store.flowersluxe.com/products/lavender-throw-pillow-botanical-illustration',
  metaTitle: 'Lavender Throw Pillow – Bold Botanical Floral Cushion',
  metaDescription: 'Add a floral flair with our Lavender Throw Pillow featuring a bold botanical illustration, ideal for vibrant living room or bedroom decor.',
  keywords: [
    'lavender throw pillow',
    'purple floral pillow',
    'botanical cushion',
    'lavender home decor',
    'flower accent pillow',
    'bold floral pillow',
    'lavender illustration pillow',
    'purple botanical art pillow',
    'decorative flower pillow',
    'nature themed throw pillow'
  ],
  dateAdded: '2025-06-10',
  inStock: true,
  category: 'Flower Throw Pillows'
}

];

export const getProductsByStyle = (style: string) => {
  return products.filter(product => product.style === style);
};

export const getProductBySlug = (slug: string) => {
  return products.find(product => product.slug === slug);
};

export const getFeaturedProducts = () => {
  return products.filter(product => product.featured);
};

export const getRelatedProducts = (currentProduct: Product, limit: number = 4) => {
  return products
    .filter(product => 
      product.id !== currentProduct.id && 
      (product.style === currentProduct.style || 
       product.flowerType === currentProduct.flowerType)
    )
    .slice(0, limit);
};

export const getProductsByFilters = (filters: {
  style?: string;
  flowerType?: string;
  color?: string;
  priceRange?: [number, number];
  featured?: boolean;
}) => {
  return products.filter(product => {
    if (filters.style && product.style !== filters.style) return false;
    if (filters.flowerType && product.flowerType !== filters.flowerType) return false;
    if (filters.color && !product.colors.includes(filters.color as any)) return false;
    if (filters.priceRange) {
      const price = product.discount 
        ? product.price * (1 - product.discount.percentage / 100)
        : product.price;
      if (price < filters.priceRange[0] || price > filters.priceRange[1]) return false;
    }
    if (filters.featured !== undefined && product.featured !== filters.featured) return false;
    return true;
  });
};

// Re-export types from the product types file
export type { 
  Product, 
  ProductStyle, 
  FlowerType, 
  ProductColor, 
  ProductImage,
  ProductSpecification,
  ProductDiscount,
  ProductFilters,
  SEOMetadata
} from '../types/product';