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
},

// Product 1 Watercolor Floral Pattern
{
  id: 'watercolor-garden-blush-pillow',
  title: 'Watercolor Garden Blush Floral Pillow',
  slug: 'watercolor-garden-blush-pillow',
  style: 'watercolor',
  flowerType: 'wildflower',
  colors: ['coral', 'blush', 'peach', 'purple', 'green', 'gray'],
  price: 25.00,
  featured: true,
  mainImage: 'watercolor-garden-blush-pillow-white-background.webp',
  images: [
    {
      src: '/images/watercolor-garden-blush-pillow-white-background.webp',
      alt: 'Watercolor floral throw pillow with coral, blush pink, and periwinkle flowers on gray background',
      title: 'Watercolor Garden Blush Pillow - Artistic Floral Design'
    },
    {
      src: '/images/watercolor-garden-blush-pillow-on-chair.webp',
      alt: 'Watercolor floral pillow styled on contemporary sofa with neutral decor',
      title: 'Watercolor Garden Blush Pillow - Living Room Styling'
    },
    {
      src: '/images/watercolor-garden-blush-pillow-on-bed.webp',
      alt: 'Watercolor garden throw pillow on bed with soft pastel bedding',
      title: 'Watercolor Garden Blush Pillow - Bedroom Decor'
    }
  ],
  description: 'Transform your living space into an artistic garden sanctuary with our exquisite Watercolor Garden Blush Floral Pillow. This stunning throw pillow showcases a seamless repeating pattern of hand-painted watercolor flowers in dreamy coral, blush pink, peach-orange, and periwinkle purple tones, delicately intertwined with verdant green foliage. The painterly softness and gentle color transitions create a romantic, ethereal atmosphere that brings the beauty of a cottage garden indoors. Set against a sophisticated dark gray-blue background with subtle linen texture, this design strikes the perfect balance between artistic expression and modern elegance. Each bloom is rendered with high detail and watercolor fluidity, creating depth and movement that catches the eye from every angle. Crafted with premium textured poly twill fabric for exceptional durability and comfort, this pillow features high-resolution printing that ensures vibrant colors and crisp detail. The concealed zipper and included synthetic insert make it both practical and luxurious. Handmade in America with meticulous attention to detail, this watercolor floral pillow is perfect for adding a touch of artistic sophistication to contemporary homes, romantic bedrooms, or any space that calls for soft, natural beauty.',
  shortDescription: 'Transform your space with our Watercolor Garden Blush Pillow featuring hand-painted florals in coral, pink, and purple on sophisticated gray.',
  specifications: generateProductSpecifications(),
  externalUrl: 'https://flowersluxe.dashery.com/products/77129433-watercolor-floral-garden-pattern-throw-pillow',
  metaTitle: 'Watercolor Garden Blush Floral Pillow – Artistic Throw Pillow',
  metaDescription: 'Elegant watercolor floral throw pillow featuring coral, blush pink, and periwinkle blooms on gray. Perfect for romantic and contemporary decor.',
  keywords: [
    'watercolor floral pillow',
    'blush pink throw pillow',
    'coral flower cushion',
    'artistic home decor',
    'watercolor garden pillow',
    'pastel floral pillow',
    'romantic throw pillow',
    'periwinkle purple decor',
    'hand painted flower pillow',
    'contemporary floral cushion'
  ],
  dateAdded: '2025-01-07',
  inStock: true,
  category: 'Flower Throw Pillows'
},

// Product 2: Modern Sunflower Design
{
  id: 'modern-sunflower-minimalist-pillow',
  title: 'Modern Sunflower Minimalist Pillow',
  slug: 'modern-sunflower-minimalist-pillow',
  style: 'modern',
  flowerType: 'sunflower',
  colors: ['yellow', 'orange', 'brown', 'green', 'gray'],
  price: 25.00,
  featured: true,
  mainImage: 'modern-sunflower-minimalist-pillow-white-background.webp',
  images: [
    {
      src: '/images/modern-sunflower-minimalist-pillow-white-background.webp',
      alt: 'Modern minimalist sunflower throw pillow with bold yellow-orange petals on gray background',
      title: 'Modern Sunflower Minimalist Pillow - Contemporary Design'
    },
    {
      src: '/images/modern-sunflower-minimalist-pillow-on-chair.webp',
      alt: 'Minimalist sunflower pillow on modern sofa with clean lines and neutral palette',
      title: 'Modern Sunflower Minimalist Pillow - Modern Living Space'
    },
    {
      src: '/images/modern-sunflower-minimalist-pillow-on-bed.webp',
      alt: 'Contemporary sunflower throw pillow on accent chair in minimalist interior',
      title: 'Modern Sunflower Minimalist Pillow - Accent Seating'
    }
  ],
  description: 'Embrace contemporary elegance with our Modern Sunflower Minimalist Throw Pillow, where bold simplicity meets natural beauty. This striking pillow features a single, large sunflower rendered in a clean, modern digital style with simplified shapes and bold lines. The vibrant yellow-orange petals showcase subtle gradient shading that adds depth without overwhelming the minimalist aesthetic, while the rich, textured brown center provides an organic focal point. Stylized green leaves add a touch of natural movement to the composition. The sunflower is artfully positioned slightly off-center, creating dynamic visual interest against the textured medium gray background that provides sophisticated contrast. This flat illustration style perfectly captures the essence of modern home decor trends, offering a fresh take on botanical design. Crafted with premium textured poly twill fabric for lasting quality and comfort, this pillow features high-resolution printing that ensures crisp, clean lines and vibrant colors. The concealed zipper and included synthetic insert make it both functional and beautiful. Handmade in America with precision and care, this modern sunflower pillow is ideal for contemporary living rooms, minimalist bedrooms, or any space that celebrates clean design and natural motifs.',
  shortDescription: 'Embrace contemporary style with our Modern Sunflower Minimalist Pillow featuring bold, clean lines and vibrant colors on sophisticated gray.',
  specifications: generateProductSpecifications(),
  externalUrl: 'https://flowersluxe.dashery.com/products/77121618-modern-minimalist-sunflower-art-throw-pillow',
  metaTitle: 'Modern Sunflower Minimalist Pillow – Contemporary Floral Decor',
  metaDescription: 'Bold minimalist sunflower throw pillow with clean lines and vibrant yellow-orange petals. Perfect for modern and contemporary home decor.',
  keywords: [
    'modern sunflower pillow',
    'minimalist throw pillow',
    'contemporary floral cushion',
    'yellow flower pillow',
    'modern home decor',
    'sunflower accent pillow',
    'minimalist botanical decor',
    'gray and yellow pillow',
    'digital art pillow',
    'modern living room pillow'
  ],
  dateAdded: '2025-01-07',
  inStock: true,
  category: 'Flower Throw Pillows'
},

// Product 3: Patriotic Floral Flag Design
{
  id: 'patriotic-floral-flag-pillow',
  title: 'Patriotic Floral American Flag Pillow',
  slug: 'patriotic-floral-flag-pillow',
  style: 'vintage',
  flowerType: 'rose',
  colors: ['red', 'white', 'blue', 'yellow', 'multicolor'],
  price: 25.00,
  featured: true,
  mainImage: 'patriotic-floral-flag-pillow-white-background.webp',
  images: [
    {
      src: '/images/patriotic-floral-flag-pillow-white-background.webp',
      alt: 'Patriotic floral throw pillow with American flag design made of roses, cornflowers, and sunflowers',
      title: 'Patriotic Floral Flag Pillow - Artistic American Design'
    },
    {
      src: '/images/patriotic-floral-flag-pillow-on-chair.webp',
      alt: 'American flag floral pillow displayed on traditional sofa with patriotic decor',
      title: 'Patriotic Floral Flag Pillow - Living Room Display'
    },
    {
      src: '/images/patriotic-floral-flag-pillow-on-bed.webp',
      alt: 'Patriotic flower pillow on outdoor porch swing with American flag backdrop',
      title: 'Patriotic Floral Flag Pillow - Outdoor Americana'
    }
  ],
  description: 'Celebrate American pride with artistic elegance through our Patriotic Floral American Flag Throw Pillow. This unique design reimagines the Stars and Stripes through a stunning botanical lens, where red and white roses form the iconic stripes, blue cornflowers and lavender create the star field, and golden sunflowers add warmth and richness to the corners. The painterly, semi-realistic style brings each flower to life with high color saturation and exquisite detail, creating a piece that honors tradition while celebrating natural beauty. Set against a soft, textured dark gray background, the floral flag design maintains its recognizable layout while offering an organic, artistic interpretation that transcends typical patriotic decor. This sophisticated approach to Americana makes it perfect for year-round display, not just holidays. Crafted with premium textured poly twill fabric for exceptional durability and vibrancy, this pillow features high-resolution printing that showcases vivid colors and intricate detail. The concealed zipper and included synthetic insert ensure lasting quality and comfort. Handmade in America with patriotic pride and artistic precision, this floral flag pillow is ideal for traditional homes, covered porches, or any space where American heritage meets botanical beauty.',
  shortDescription: 'Celebrate with our Patriotic Floral Flag Pillow featuring roses, cornflowers, and sunflowers artistically arranged in American flag design.',
  specifications: generateProductSpecifications(),
  externalUrl: 'https://flowersluxe.dashery.com/products/77120871-american-flag-floral-art-design-throw-pillow',
  metaTitle: 'Patriotic Floral American Flag Pillow – Botanical Americana Decor',
  metaDescription: 'Unique patriotic throw pillow with American flag design created from red roses, blue cornflowers, and sunflowers. Perfect for elegant Americana decor.',
  keywords: [
    'patriotic floral pillow',
    'American flag pillow',
    'floral flag cushion',
    'Americana home decor',
    'patriotic throw pillow',
    'rose flag pillow',
    'Fourth of July decor',
    'botanical flag design',
    'red white blue pillow',
    'sunflower patriotic decor'
  ],
  dateAdded: '2025-01-07',
  inStock: true,
  category: 'Flower Throw Pillows'
},

// Product 4: Romantic Pink Peony
{
  id: 'romantic-pink-peony-pillow',
  title: 'Romantic Pink Peony Watercolor Pillow',
  slug: 'romantic-pink-peony-pillow',
  style: 'watercolor',
  flowerType: 'peony',
  colors: ['pink', 'beige', 'cream'],
  price: 25.00,
  featured: true,
  mainImage: 'romantic-pink-peony-pillow-white-background.webp',
  images: [
    {
      src: '/images/romantic-pink-peony-pillow-white-background.webp',
      alt: 'Romantic pink peony throw pillow with lush layered petals on warm beige background',
      title: 'Romantic Pink Peony Pillow - Watercolor Floral Design'
    },
    {
      src: '/images/romantic-pink-peony-pillow-on-chair.webp',
      alt: 'Pink peony watercolor pillow on romantic bedroom with soft linens',
      title: 'Romantic Pink Peony Pillow - Bedroom Elegance'
    },
    {
      src: '/images/romantic-pink-peony-pillow-on-bed.webp',
      alt: 'Watercolor peony throw pillow on vintage chair with feminine decor',
      title: 'Romantic Pink Peony Pillow - Accent Seating'
    }
  ],
  description: 'Indulge in romantic elegance with our Romantic Pink Peony Watercolor Throw Pillow, featuring a single magnificent peony in full, glorious bloom. This exquisite design showcases the lush, layered petals of a pink peony rendered in delicate watercolor style, creating a soft, dreamy focal point that embodies feminine grace and natural beauty. The warm beige background provides gentle contrast while maintaining an overall sense of warmth and sophistication. The watercolor technique brings ethereal softness to each petal, with subtle color variations and organic brushstrokes that capture the peony natural texture and movement. This seamless, high-resolution design creates a timeless piece that elevates any space with its romantic charm. Crafted with premium textured poly twill fabric at 300 DPI resolution for exceptional clarity and color depth, this pillow features vibrant printing that brings the watercolor beauty to life. The concealed zipper and included synthetic insert provide both beauty and functionality. Handmade in America with careful attention to artistic detail, this romantic peony pillow is perfect for feminine bedrooms, elegant living spaces, or anywhere that calls for a touch of floral romance and sophisticated charm.',
  shortDescription: 'Indulge in romance with our Pink Peony Watercolor Pillow featuring lush layered petals on warm beige background in elegant watercolor style.',
  specifications: generateProductSpecifications(),
  externalUrl: 'https://flowersluxe.dashery.com/products/77122337-pink-peony-watercolor-bloom-throw-pillow',
  metaTitle: 'Romantic Pink Peony Watercolor Pillow – Elegant Floral Decor',
  metaDescription: 'Elegant watercolor pink peony throw pillow with lush petals on warm beige. Perfect for romantic bedrooms and feminine home decor.',
  keywords: [
    'pink peony pillow',
    'watercolor floral pillow',
    'romantic throw pillow',
    'peony home decor',
    'feminine cushion',
    'blush pink pillow',
    'elegant floral pillow',
    'watercolor peony art',
    'beige and pink decor',
    'romantic bedroom pillow'
  ],
  dateAdded: '2025-01-07',
  inStock: true,
  category: 'Flower Throw Pillows'
},

// Product 5: Toffee Roses Pattern
{
  id: 'vintage-toffee-rose-pillow',
  title: 'Vintage Toffee Rose Pattern Pillow',
  slug: 'vintage-toffee-rose-pillow',
  style: 'vintage',
  flowerType: 'rose',
  colors: ['brown', 'beige', 'cream', 'tan'],
  price: 25.00,
  featured: true,
  mainImage: 'vintage-toffee-rose-pillow-white-background.webp',
  images: [
    {
      src: '/images/vintage-toffee-rose-pillow-white-background.webp',
      alt: 'Vintage toffee rose throw pillow with creamy brown roses on deep coffee background',
      title: 'Vintage Toffee Rose Pillow - Elegant Pattern Design'
    },
    {
      src: '/images/vintage-toffee-rose-pillow-on-chair.webp',
      alt: 'Toffee rose pattern pillow on leather sofa with warm, cozy decor',
      title: 'Vintage Toffee Rose Pillow - Living Room Warmth'
    },
    {
      src: '/images/vintage-toffee-rose-pillow-on-bed.webp',
      alt: 'Vintage rose throw pillow on classic armchair with traditional styling',
      title: 'Vintage Toffee Rose Pillow - Classic Elegance'
    }
  ],
  description: 'Experience timeless elegance with our Vintage Toffee Rose Pattern Throw Pillow, where classic beauty meets warm sophistication. This exquisite seamless pattern features toffee roses in rich creamy brown and taupe tones, each bloom carefully rendered with curled petals that evoke vintage romance. Set against a luxurious deep coffee background, the design creates a cozy, rich atmosphere perfect for traditional and transitional interiors. The roses showcase intricate detail with light shadowing that adds depth and dimension, while maintaining the elegant vintage aesthetic. This high-detail pattern at 300 DPI ensures every petal and shadow is captured with stunning clarity, creating a piece that feels both nostalgic and refined. Crafted with premium textured poly twill fabric for exceptional durability and richness, this pillow features seamless pattern printing that highlights the vintage beauty. The concealed zipper and included synthetic insert ensure lasting quality and comfort. Handmade in America with meticulous attention to vintage styling, this toffee rose pillow is ideal for creating warm, inviting spaces in traditional living rooms, cozy dens, or anywhere that celebrates classic floral elegance.',
  shortDescription: 'Experience timeless elegance with our Vintage Toffee Rose Pillow featuring creamy brown roses on rich coffee background with vintage charm.',
  specifications: generateProductSpecifications(),
  externalUrl: 'https://flowersluxe.dashery.com/products/77122658-vintage-toffee-rose-pattern-throw-pillow',
  metaTitle: 'Vintage Toffee Rose Pattern Pillow – Classic Floral Home Decor',
  metaDescription: 'Elegant vintage throw pillow with toffee roses in creamy brown and taupe on coffee background. Perfect for traditional and cozy home decor.',
  keywords: [
    'vintage rose pillow',
    'toffee brown cushion',
    'classic floral pillow',
    'traditional throw pillow',
    'brown rose pattern',
    'coffee color decor',
    'vintage home decor',
    'taupe floral pillow',
    'elegant rose cushion',
    'warm tone pillow'
  ],
  dateAdded: '2025-01-07',
  inStock: true,
  category: 'Flower Throw Pillows'
},

// Product 6: Pampas Grass Pattern
{
  id: 'boho-pampas-grass-pillow',
  title: 'Boho Pampas Grass Natural Pillow',
  slug: 'boho-pampas-grass-pillow',
  style: 'boho',
  flowerType: 'pampas-grass',
  colors: ['beige', 'cream', 'tan'],
  price: 25.00,
  featured: true,
  mainImage: 'boho-pampas-grass-pillow-white-background.webp',
  images: [
    {
      src: '/images/boho-pampas-grass-pillow-white-background.webp',
      alt: 'Boho pampas grass throw pillow with flowing bleached plumes on warm greige background',
      title: 'Boho Pampas Grass Pillow - Natural Texture Design'
    },
    {
      src: '/images/boho-pampas-grass-pillow-on-chair.webp',
      alt: 'Pampas grass pattern pillow on bohemian sofa with natural fiber decor',
      title: 'Boho Pampas Grass Pillow - Bohemian Living'
    },
    {
      src: '/images/boho-pampas-grass-pillow-on-bed.webp',
      alt: 'Natural pampas throw pillow on boho bedroom with layered neutral textiles',
      title: 'Boho Pampas Grass Pillow - Bedroom Serenity'
    }
  ],
  description: 'Create a serene bohemian sanctuary with our Boho Pampas Grass Natural Throw Pillow, featuring an organic seamless pattern of flowing pampas grass plumes in soothing bleached beige tones. This calming design captures the ethereal beauty of pampas grass with soft, feathery fronds that layer and overlap naturally against a warm greige background, evoking the peaceful essence of nature. The boho-inspired aesthetic brings texture and movement to your space through delicate brush strokes and watercolor techniques that create depth without overwhelming. Each plume is rendered with subtle variations in tone and texture, capturing the organic beauty of dried pampas grass. The high-resolution 300 DPI printing ensures every wispy detail is preserved with stunning clarity. Crafted with premium textured poly twill fabric for lasting softness and durability, this pillow features seamless pattern printing that showcases the natural beauty. The concealed zipper and included synthetic insert provide both style and comfort. Handmade in America with attention to bohemian aesthetics, this pampas grass pillow is perfect for creating calm, nature-inspired spaces in boho bedrooms, minimalist living rooms, or any area that celebrates organic textures and neutral palettes.',
  shortDescription: 'Create serenity with our Boho Pampas Grass Pillow featuring flowing plumes in bleached beige on warm greige for natural bohemian style.',
  specifications: generateProductSpecifications(),
  externalUrl: 'https://flowersluxe.dashery.com/products/77120513-boho-pampas-grass-pattern-throw-pillow',
  metaTitle: 'Boho Pampas Grass Natural Pillow – Bohemian Texture Decor',
  metaDescription: 'Natural boho throw pillow with flowing pampas grass in beige tones. Perfect for bohemian, minimalist, and nature-inspired home decor.',
  keywords: [
    'pampas grass pillow',
    'boho throw pillow',
    'natural texture cushion',
    'bohemian home decor',
    'neutral pillow',
    'beige cushion',
    'organic pattern pillow',
    'minimalist boho decor',
    'greige pillow',
    'natural fiber inspired'
  ],
  dateAdded: '2025-01-07',
  inStock: true,
  category: 'Flower Throw Pillows'
},

// Product 7: Quicksand Roses
{
  id: 'modern-quicksand-rose-pillow',
  title: 'Modern Quicksand Rose Elegant Pillow',
  slug: 'modern-quicksand-rose-pillow',
  style: 'modern',
  flowerType: 'quicksand-rose',
  colors: ['beige', 'blush', 'gray'],
  price: 25.00,
  featured: true,
  mainImage: 'modern-quicksand-rose-pillow-white-background.webp',
  images: [
    {
      src: '/images/modern-quicksand-rose-pillow-white-background.webp',
      alt: 'Modern quicksand rose throw pillow with nude-beige roses on gray background',
      title: 'Modern Quicksand Rose Pillow - Elegant Floral Design'
    },
    {
      src: '/images/modern-quicksand-rose-pillow-on-chair.webp',
      alt: 'Quicksand rose pattern pillow on contemporary sofa with sophisticated neutral palette',
      title: 'Modern Quicksand Rose Pillow - Contemporary Living'
    },
    {
      src: '/images/modern-quicksand-rose-pillow-on-bed.webp',
      alt: 'Elegant rose throw pillow on modern accent chair with minimalist styling',
      title: 'Modern Quicksand Rose Pillow - Modern Elegance'
    }
  ],
  description: 'Elevate your space with understated luxury through our Modern Quicksand Rose Elegant Throw Pillow. This sophisticated seamless pattern showcases quicksand roses in soft nude-beige tones, each bloom meticulously detailed with spiraled petals that create visual depth and interest. The natural green-gray stems add organic movement while maintaining the refined aesthetic. Set against a desaturated gray background, this design achieves perfect balance between modern minimalism and botanical beauty. The elegant layout features thoughtfully spaced roses that allow each bloom to shine while creating a harmonious overall pattern. The refined botanical style and muted color palette make this pillow a versatile accent that complements contemporary interiors without overwhelming. High-resolution 300 DPI printing ensures every petal detail is captured with exceptional clarity. Crafted with premium textured poly twill fabric for superior quality and longevity, this pillow features seamless pattern printing that highlights the sophisticated design. The concealed zipper and included synthetic insert ensure both beauty and functionality. Handmade in America with precision and care, this quicksand rose pillow is ideal for modern living rooms, sophisticated bedrooms, or any space that appreciates subtle botanical elegance and contemporary style.',
  shortDescription: 'Elevate your space with our Modern Quicksand Rose Pillow featuring nude-beige roses on gray for sophisticated botanical elegance.',
  specifications: generateProductSpecifications(),
  externalUrl: 'https://flowersluxe.dashery.com/products/77126179-quicksand-rose-elegant-pattern-throw-pillow',
  metaTitle: 'Modern Quicksand Rose Elegant Pillow – Sophisticated Floral Decor',
  metaDescription: 'Sophisticated throw pillow with quicksand roses in nude-beige on gray background. Perfect for modern and elegant home decor.',
  keywords: [
    'quicksand rose pillow',
    'modern floral pillow',
    'elegant throw pillow',
    'nude beige cushion',
    'sophisticated decor',
    'gray pillow',
    'contemporary rose pillow',
    'neutral floral cushion',
    'refined botanical decor',
    'modern elegance pillow'
  ],
  dateAdded: '2025-01-07',
  inStock: true,
  category: 'Flower Throw Pillows'
},

// Product 8: Autumn Dahlia Pattern
{
  id: 'autumn-dahlia-luxe-pillow',
  title: 'Autumn Dahlia Luxe Floral Pillow',
  slug: 'autumn-dahlia-luxe-pillow',
  style: 'floral',
  flowerType: 'dahlia',
  colors: ['orange', 'brown', 'green'],
  price: 25.00,
  featured: true,
  mainImage: 'autumn-dahlia-luxe-pillow-white-background.webp',
  images: [
    {
      src: '/images/autumn-dahlia-luxe-pillow-white-background.webp',
      alt: 'Autumn dahlia throw pillow with rich burnt orange and forest green flowers on brown background',
      title: 'Autumn Dahlia Luxe Pillow - Seasonal Floral Design'
    },
    {
      src: '/images/autumn-dahlia-luxe-pillow-on-chair.webp',
      alt: 'Dahlia pattern pillow on cozy sofa with autumn-themed warm decor',
      title: 'Autumn Dahlia Luxe Pillow - Cozy Living Space'
    },
    {
      src: '/images/autumn-dahlia-luxe-pillow-on-bed.webp',
      alt: 'Luxurious autumn floral pillow on entryway bench with seasonal styling',
      title: 'Autumn Dahlia Luxe Pillow - Seasonal Accent'
    }
  ],
  description: 'Embrace the warmth of autumn with our Autumn Dahlia Luxe Floral Throw Pillow, featuring an elegant seamless pattern of hand-painted dahlias in rich, seasonal hues. This luxurious design showcases magnificent dahlias rendered in warm burnt orange and deep forest green tones, creating a cozy yet sophisticated aesthetic perfect for fall and year-round warmth. The textured brown background provides the ideal canvas for these autumn blooms to shine. Each dahlia is painted with crisp edges and high detail, capturing the intricate petal layers and natural beauty of these stunning flowers. The harmonious pattern features flowers arranged along the edges in a balanced, flowing design that creates visual interest while maintaining elegance. The rich color palette evokes the comfort of autumn while the refined execution ensures timeless appeal. Crafted with premium textured poly twill fabric for exceptional quality and comfort, this pillow features high-resolution printing that captures every brushstroke and color gradient. The concealed zipper and included synthetic insert provide both luxury and practicality. Handmade in America with attention to artistic detail, this autumn dahlia pillow is perfect for creating warm, inviting spaces in traditional homes, cozy dens, or anywhere that celebrates the rich beauty of seasonal florals.',
  shortDescription: 'Embrace autumn warmth with our Dahlia Luxe Pillow featuring burnt orange and forest green blooms on rich brown for cozy elegance.',
  specifications: generateProductSpecifications(),
  externalUrl: 'https://flowersluxe.dashery.com/products/77129734-autumn-dahlia-floral-pattern-throw-pillow',
  metaTitle: 'Autumn Dahlia Luxe Floral Pillow – Seasonal Elegant Decor',
  metaDescription: 'Luxurious autumn throw pillow with hand-painted dahlias in burnt orange and forest green. Perfect for cozy, seasonal home decor.',
  keywords: [
    'autumn dahlia pillow',
    'fall floral cushion',
    'burnt orange pillow',
    'seasonal throw pillow',
    'dahlia home decor',
    'forest green cushion',
    'luxury floral pillow',
    'autumn home decor',
    'cozy dahlia pillow',
    'warm tone cushion'
  ],
  dateAdded: '2025-01-07',
  inStock: true,
  category: 'Flower Throw Pillows'
},

// Product 9: Tropical Hibiscus Pattern
{
  id: 'tropical-hibiscus-bold-pillow',
  title: 'Tropical Hibiscus Bold Pattern Pillow',
  slug: 'tropical-hibiscus-bold-pillow',
  style: 'modern',
  flowerType: 'hibiscus',
  colors: ['green', 'coral', 'multicolor'],
  price: 25.00,
  featured: true,
  mainImage: 'tropical-hibiscus-bold-pillow-white-background.webp',
  images: [
    {
      src: '/images/tropical-hibiscus-bold-pillow-white-background.webp',
      alt: 'Tropical hibiscus throw pillow with bold emerald, coral, and yellow flowers on navy background',
      title: 'Tropical Hibiscus Bold Pillow - Vibrant Pattern Design'
    },
    {
      src: '/images/tropical-hibiscus-bold-pillow-on-chair.webp',
      alt: 'Hibiscus pattern pillow on contemporary sofa with tropical-inspired decor',
      title: 'Tropical Hibiscus Bold Pillow - Island Living Style'
    },
    {
      src: '/images/tropical-hibiscus-bold-pillow-on-bed.webp',
      alt: 'Bold tropical pillow on outdoor daybed with coastal styling',
      title: 'Tropical Hibiscus Bold Pillow - Outdoor Paradise'
    }
  ],
  description: 'Transport your space to a tropical paradise with our Tropical Hibiscus Bold Pattern Throw Pillow. This vibrant seamless design features large, flat vector-style hibiscus flowers and lush banana leaves in an explosion of tropical colors. Rich emerald greens, vivid coral, warm yellow, and deep forest green create a bold color story against a sophisticated navy or charcoal background, bringing instant energy and life to any space. The modern vector style gives these tropical blooms a contemporary edge while maintaining their exotic appeal. Each element is rendered with precision at 300 DPI resolution, creating a high-impact design that commands attention. The seamless repeat pattern ensures continuous tropical beauty across the entire pillow surface. Crafted with premium textured poly twill fabric for exceptional color vibrancy and durability, this pillow features bold pattern printing that brings the tropical design to life. The concealed zipper and included synthetic insert ensure both style and comfort. Handmade in America with attention to tropical flair, this hibiscus pillow is perfect for creating vacation vibes in modern living rooms, covered patios, or any space that celebrates bold botanical beauty and island-inspired style.',
  shortDescription: 'Transport your space with our Tropical Hibiscus Bold Pillow featuring vibrant emerald, coral, and yellow blooms on sophisticated navy.',
  specifications: generateProductSpecifications(),
  externalUrl: 'https://flowersluxe.dashery.com/products/77124174-tropical-hibiscus-bold-pattern-throw-pillow',
  metaTitle: 'Tropical Hibiscus Bold Pattern Pillow – Vibrant Island Decor',
  metaDescription: 'Bold tropical throw pillow with vector-style hibiscus in emerald, coral, and yellow on navy. Perfect for modern tropical home decor.',
  keywords: [
    'tropical hibiscus pillow',
    'bold pattern cushion',
    'vector floral pillow',
    'island style decor',
    'coral hibiscus cushion',
    'navy tropical pillow',
    'modern tropical decor',
    'emerald green pillow',
    'yellow accent',
    'vibrant floral cushion'
  ],
  dateAdded: '2025-01-07',
  inStock: true,
  category: 'Flower Throw Pillows'
},

// Product 10: Blush Peony Bloom
{
  id: 'blush-peony-bloom-pillow',
  title: 'Blush Peony Bloom – Watercolor Pillow',
  slug: 'blush-peony-bloom-pillow',
  style: 'watercolor',
  flowerType: 'peony',
  colors: ['pink', 'green'],
  price: 25.00,
  featured: true,
  mainImage: 'blush-peony-bloom-pillow-white-background.webp',
  images: [
    {
      src: '/images/blush-peony-bloom-pillow-white-background.webp',
      alt: 'Pink peony throw pillow with layered petals on soft background',
      title: 'Blush Peony Bloom Pillow - Watercolor Floral Design'
    },
    {
      src: '/images/blush-peony-bloom-pillow-on-chair.webp',
      alt: 'Peony watercolor throw pillow styled on bed with romantic decor',
      title: 'Blush Peony Bloom Pillow - Bedroom Elegance'
    },
    {
      src: '/images/blush-peony-bloom-pillow-on-bed.webp',
      alt: 'Watercolor peony pillow on accent chair in soft feminine space',
      title: 'Blush Peony Bloom Pillow - Cozy Accent Decor'
    }
  ],
  description: 'Add romantic charm to your space with our Blush Peony Bloom Throw Pillow. This elegant design features a single lush peony in full bloom, painted in delicate watercolor style with soft pink petals and verdant green leaves. Set against a soothing background, the floral illustration exudes feminine elegance and serene beauty. The subtle brushwork and fluid transitions bring depth and softness, perfect for dreamy bedrooms or graceful living spaces. Crafted with premium poly twill fabric and printed at high-resolution 300 DPI, this pillow ensures crisp detail and lasting vibrancy. With a concealed zipper and insert included, it is both stylish and functional. Handmade in America with artistic precision, it is ideal for those who love floral aesthetics with a modern romantic twist.',
  shortDescription: 'Romantic watercolor peony pillow in soft pink — perfect for feminine and elegant decor.',
  specifications: generateProductSpecifications(),
  externalUrl: 'https://flowersluxe.dashery.com/products/77130487-blush-peony-bloom-floral-art-throw-pillow',
  metaTitle: 'Blush Peony Bloom – Watercolor Floral Throw Pillow',
  metaDescription: 'Elegant throw pillow featuring watercolor pink peony in full bloom. Perfect for romantic and feminine home decor.',
  keywords: [
    'blush peony pillow',
    'pink flower cushion',
    'watercolor floral throw pillow',
    'romantic home decor',
    'feminine floral pillow',
    'soft pink bloom',
    'botanical watercolor pillow',
    'modern romantic decor',
    'peony flower art',
    'delicate floral design'
  ],
  dateAdded: '2025-07-05',
  inStock: true,
  category: 'Flower Throw Pillows'
},

{
id: 'white-orchid-impasto-pillow',
title: 'White Orchid Impasto Pillow',
slug: 'white-orchid-impasto-pillow',
style: 'abstract',
flowerType: 'orchid',
colors: ['white', 'lavender', 'charcoal', 'gold'],
price: 25.00,
featured: true,
mainImage: 'white-orchid-impasto-pillow-white-background.webp',
images: [
{
src: '/images/white-orchid-impasto-pillow-white-background.webp',
alt: 'White orchid pillow with textured impasto petals in cool silver and lavender tones on charcoal background',
title: 'White Orchid Impasto Pillow - Oil Impasto Floral Art'
},
{
src: '/images/white-orchid-impasto-pillow-on-sofa.webp',
alt: 'White orchid impasto pillow on charcoal grey sofa with emerald leaves and subtle gold undertones',
title: 'White Orchid Impasto Pillow - Modern Sofa Styling'
},
{
src: '/images/white-orchid-impasto-pillow-on-bed.webp',
alt: 'White orchid impasto pillow on neutral bedding, glowing white blooms with icy blue highlights and gold shimmer',
title: 'White Orchid Impasto Pillow - Bedroom Decor'
}
],
description: 'Decorative throw pillow featuring a radiant arrangement of white orchids painted in bold, sculptural oil impasto strokes. Pure white petals glow with pearlescent highlights in soft silver, lavender, and icy blue, complemented by vivid emerald and moss-green leaves. The background is a deep charcoal grey with subtle diffused gold, creating a dramatic gallery-like contrast. A luxurious floral accent that blends modern abstract artistry with timeless elegance.',
shortDescription: 'Decorative white orchid pillow in sculptural oil impasto style.',
specifications: generateProductSpecifications(),
externalUrl: 'https://store.flowersluxe.com/products/78900178-white-orchid-impasto-abstract-floral-throw-pillow',
metaTitle: 'White Orchid Impasto Pillow – Abstract Floral Oil Art',
metaDescription: 'White orchid impasto pillow with sculpted petals in silver and lavender on a charcoal background. A modern abstract floral throw pillow with gold accents.',
keywords: [
'orchid pillow',
'white orchid cushion',
'floral impasto pillow',
'orchid throw pillow',
'white flower pillow',
'modern floral pillow',
'abstract orchid pillow',
'charcoal grey pillow',
'luxury floral cushion',
'botanical art pillow',
'impasto floral cushion',
'elegant decor pillow'
],
dateAdded: '2025-08-16',
inStock: true,
category: 'Flower Throw Pillows'
},
{
id: 'king-protea-watercolor-pillow',
title: 'King Protea Watercolor Pillow',
slug: 'king-protea-watercolor-pillow',
style: 'watercolor',
flowerType: 'protea',
colors: ['red', 'white', 'green', 'gray'],
price: 25.00,
featured: true,
mainImage: 'king-protea-watercolor-pillow-white-background.webp',
images: [
{
src: '/images/king-protea-watercolor-pillow-white-background.webp',
alt: 'King Protea watercolor pillow with coral-pink petals, ivory crown, and deep green leaves on dark grey.',
title: 'King Protea Watercolor Pillow - Fine Art Botanical'
},
{
src: '/images/king-protea-watercolor-pillow-on-sofa.webp',
alt: 'King Protea floral watercolor pillow featuring blush and coral petals with creamy white tips on a dark grey wash.',
title: 'King Protea Watercolor Pillow - Modern Sofa Styling'
},
{
src: '/images/king-protea-watercolor-pillow-on-bed.webp',
alt: 'Watercolor King Protea pillow showcasing coral blush petals, ivory center, and bold green leaves on charcoal.',
title: 'King Protea Watercolor Pillow - Bedroom Decor'
}
],
description: 'Decorative throw pillow featuring a fine art watercolor King Protea. Outer petals glow in coral-pink and blush, fading to creamy white tips around a layered ivory crown. Sculpted leaves in deep forest and olive greens sit over a crisp, hand-painted dark grey wash that shows subtle brush textures without blur. The balanced palette and precise detailing create a polished, gallery-quality botanical accent that pairs beautifully with neutral or deep-toned seating.',
shortDescription: 'Fine art watercolor King Protea floral pillow on a dark grey wash.',
specifications: generateProductSpecifications(),
externalUrl: 'https://store.flowersluxe.com/products/78905771-king-protea-watercolor-flower-botanical-art-throw-pillow',
metaTitle: 'King Protea Watercolor Throw Pillow – Fine Art Floral',
metaDescription: 'King Protea watercolor throw pillow with coral-pink petals, creamy white tips, ivory crown, and deep green leaves on a dark grey wash. Elegant fine art decor.',
keywords: [
'king protea pillow',
'protea watercolor pillow',
'pink floral pillow',
'blush coral pillow',
'botanical throw pillow',
'dark grey floral pillow',
'fine art floral pillow',
'protea flower cushion',
'watercolor botanical pillow',
'modern floral decor',
'green leaves pillow',
'gallery quality pillow'
],
dateAdded: '2025-08-16',
inStock: true,
category: 'Flower Throw Pillows'
},
{
id: 'orange-dahlia-impasto-pillow',
title: 'Orange Dahlia Impasto Pillow',
slug: 'orange-dahlia-impasto-pillow',
style: 'abstract',
flowerType: 'dahlia',
colors: ['yellow', 'green', 'gray'],
price: 25.00,
featured: true,
mainImage: 'orange-dahlia-impasto-pillow-white-background.webp',
images: [
{
src: '/images/orange-dahlia-impasto-pillow-white-background.webp',
alt: 'Orange dahlia impasto pillow with fiery tangerine and amber petals, emerald leaves, charcoal background',
title: 'Orange Dahlia Impasto Pillow - Impasto Oil Art'
},
{
src: '/images/orange-dahlia-impasto-pillow-on-sofa.webp',
alt: 'Orange dahlia abstract oil pillow on charcoal sofa with golden undertones and lush green leaves',
title: 'Orange Dahlia Impasto Pillow - Modern Sofa Styling'
},
{
src: '/images/orange-dahlia-impasto-pillow-on-bed.webp',
alt: 'Orange dahlia impasto throw pillow on light bed, glowing petals with warm gold and emerald foliage',
title: 'Orange Dahlia Impasto Pillow - Bedroom Decor'
}
],
description: 'Radiant abstract dahlia arrangement painted in thick oil impasto with glowing tangerine and amber petals. Fresh emerald foliage and a smooth charcoal backdrop add contrast and depth, creating a warm, gallery-ready accent for modern interiors.',
shortDescription: 'Glowing orange dahlia impasto floral pillow on charcoal grey.',
specifications: generateProductSpecifications(),
externalUrl: 'https://store.flowersluxe.com/products/78930032-orange-dahlia-impasto-abstract-oil-floral-throw-pillow',
metaTitle: 'Orange Dahlia Impasto Pillow – Abstract Oil Floral Cushion',
metaDescription: 'Orange dahlia impasto pillow in tangerine and amber with green leaves on charcoal grey. Bold abstract oil texture adds warm, gallery-ready depth.',
keywords: [
'orange dahlia pillow',
'dahlia throw pillow',
'abstract floral cushion',
'impasto oil pillow',
'warm floral pillow',
'charcoal grey decor',
'tangerine amber dahlia',
'modern floral pillow',
'gallery art cushion',
'bright flower pillow'
],
dateAdded: '2025-08-16',
inStock: true,
category: 'Flower Throw Pillows'
},
{
id: 'cobalt-iris-impasto-pillow',
title: 'Cobalt Iris Impasto Pillow',
slug: 'cobalt-iris-impasto-pillow',
style: 'abstract',
flowerType: 'iris',
colors: ['blue', 'green', 'gray'],
price: 25.00,
featured: true,
mainImage: 'cobalt-iris-impasto-pillow-white-background.webp',
images: [
{
src: '/images/cobalt-iris-impasto-pillow-white-background.webp',
alt: 'Cobalt blue iris impasto pillow with jewel-like indigo petals and emerald leaves on charcoal',
title: 'Cobalt Iris Impasto Pillow - Impasto Oil Art'
},
{
src: '/images/cobalt-iris-impasto-pillow-on-sofa.webp',
alt: 'Cobalt iris abstract oil pillow styled on dark sofa, subtle gold undertones and silver accents',
title: 'Cobalt Iris Impasto Pillow - Modern Sofa Styling'
},
{
src: '/images/cobalt-iris-impasto-pillow-on-bed.webp',
alt: 'Cobalt iris impasto throw pillow on neutral bed with luminous indigo petals and soft halo',
title: 'Cobalt Iris Impasto Pillow - Bedroom Decor'
}
],
description: 'Luminous cobalt irises with indigo, violet, and turquoise highlights, sculpted in thick impasto. Emerald leaves arc from the base, set against velvety charcoal gradients with restrained metallic warmth. A refined, modern floral statement.',
shortDescription: 'Cobalt blue iris pillow with luminous indigo impasto on charcoal.',
specifications: generateProductSpecifications(),
externalUrl: 'https://store.flowersluxe.com/products/78930599-cobalt-iris-impasto-abstract-floral-throw-pillow',
metaTitle: 'Cobalt Blue Iris Impasto Pillow – Abstract Oil Cushion',
metaDescription: 'Cobalt blue iris impasto pillow with jewel-like indigo highlights and emerald leaves. Charcoal gradients and metallic accents deliver a refined modern look.',
keywords: [
'cobalt iris pillow',
'blue iris cushion',
'abstract oil floral pillow',
'impasto pillow',
'modern charcoal decor',
'indigo violet iris',
'gallery-worthy pillow',
'blue botanical cushion',
'luxury floral pillow',
'statement floral decor'
],
dateAdded: '2025-08-16',
inStock: true,
category: 'Flower Throw Pillows'
},
{
id: 'king-protea-impasto-pillow',
title: 'King Protea Impasto Pillow',
slug: 'king-protea-impasto-pillow',
style: 'abstract',
flowerType: 'protea',
colors: ['red', 'green', 'gray'],
price: 25.00,
featured: true,
mainImage: 'king-protea-impasto-pillow-white-background.webp',
images: [
{
src: '/images/king-protea-impasto-pillow-white-background.webp',
alt: 'Bold pink-fuchsia king protea floral impasto pillow on deep charcoal background with rich emerald leaves',
title: 'King Protea Impasto Pillow - Impasto Oil Art'
},
{
src: '/images/king-protea-impasto-pillow-on-sofa.webp',
alt: 'King protea impasto floral pillow styled on deep charcoal sofa, pink petals with lush emerald leaves',
title: 'King Protea Impasto Pillow - Modern Sofa Styling'
},
{
src: '/images/king-protea-impasto-pillow-on-bed.webp',
alt: 'King protea floral impasto throw pillow on light neutral bedding, vivid pink petals and moss-green leaves',
title: 'King Protea Impasto Pillow - Bedroom Decor'
}
],
description: 'Decorative throw pillow featuring 3–4 king protea blooms with saturated pink-fuchsia petals and emerald leaves, painted in bold impasto on a refined charcoal background with subtle metallic accents. The sculpted brushwork adds dimensional depth while maintaining crisp petal edges for a striking, modern floral statement that pairs well with neutral and dark sofas.',
shortDescription: 'King protea floral impasto pillow on charcoal with crisp, saturated petals.',
specifications: generateProductSpecifications(),
externalUrl: 'https://store.flowersluxe.com/products/78941426-king-protea-impasto-throw-pillow',
metaTitle: 'King Protea Pillow – Impasto Floral Art on Charcoal',
metaDescription: 'King Protea pillow with saturated pink-fuchsia petals and emerald leaves, painted in bold impasto on a charcoal background with subtle silver and gold haze.',
keywords: [
'king protea pillow',
'protea floral pillow',
'pink protea cushion',
'impasto oil pillow',
'charcoal decor pillow',
'modern floral cushion',
'botanical throw pillow',
'magenta flower pillow',
'gallery wall decor',
'statement pillow',
'luxury floral pillow',
'green leaves pillow'
],
dateAdded: '2025-08-17',
inStock: true,
category: 'Flower Throw Pillows'
},
{
id: 'royal-purple-orchid-impasto-pillow',
title: 'Royal Purple Orchid Impasto Pillow',
slug: 'royal-purple-orchid-impasto-pillow',
style: 'abstract',
flowerType: 'orchid',
colors: ['purple', 'green', 'charcoal'],
price: 25.00,
featured: true,
mainImage: 'royal-purple-orchid-impasto-pillow-white-background.webp',
images: [
{
src: '/images/royal-purple-orchid-impasto-pillow-white-background.webp',
alt: 'Abstract royal purple orchid blooms with green stems on charcoal background in impasto style',
title: 'Royal Purple Orchid Impasto Pillow - Oil Art Design'
},
{
src: '/images/royal-purple-orchid-impasto-pillow-on-sofa.webp',
alt: 'Royal purple orchid throw pillow on a modern charcoal sofa with bold impasto petals and green leaves',
title: 'Royal Purple Orchid Impasto Pillow - Sofa Styling'
},
{
src: '/images/royal-purple-orchid-impasto-pillow-on-bed.webp',
alt: 'Purple orchid floral impasto pillow styled on light bedding with green leaves and charcoal accents',
title: 'Royal Purple Orchid Impasto Pillow - Bedroom Decor'
}
],
description: 'Decorative throw pillow featuring radiant royal purple orchid blooms painted in bold impasto strokes. The petals blend violet, amethyst, and lavender tones with indigo edges for depth. Vivid green stems and leaves contrast against a moody charcoal background enhanced with soft silver gradients. A refined, exotic floral design that complements modern interiors with elegance and vibrancy.',
shortDescription: 'Decorative pillow featuring royal purple orchids in expressive impasto art style.',
specifications: generateProductSpecifications(),
externalUrl: 'https://store.flowersluxe.com/products/78942160-royal-purple-orchid-throw-pillow',
metaTitle: 'Royal Purple Orchid Impasto Floral Throw Pillow',
metaDescription: 'Decorative throw pillow featuring royal purple orchids with green leaves in bold impasto oil art style on charcoal background.',
keywords: [
'orchid throw pillow',
'purple orchid pillow',
'floral impasto cushion',
'orchid decor pillow',
'purple flower pillow',
'orchid art cushion',
'modern floral throw pillow',
'orchid impasto art pillow'
],
dateAdded: '2025-08-15',
inStock: true,
category: 'Flower Throw Pillows'
},
{
id: 'red-amaryllis-impasto-pillow',
title: 'Red Amaryllis Impasto Pillow',
slug: 'red-amaryllis-impasto-pillow',
style: 'abstract',
flowerType: 'amaryllis',
colors: ['red', 'green', 'charcoal'],
price: 25.00,
featured: true,
mainImage: 'red-amaryllis-impasto-pillow-white-background.webp',
images: [
{
src: '/images/red-amaryllis-impasto-pillow-white-background.webp',
alt: 'Abstract red amaryllis blooms with green leaves on charcoal background in impasto art style',
title: 'Red Amaryllis Impasto Pillow - Oil Art Design'
},
{
src: '/images/red-amaryllis-impasto-pillow-on-sofa.webp',
alt: 'Red amaryllis floral impasto pillow styled on a modern charcoal grey sofa with green leaves',
title: 'Red Amaryllis Impasto Pillow - Sofa Styling'
},
{
src: '/images/red-amaryllis-impasto-pillow-on-bed.webp',
alt: 'Decorative red amaryllis impasto throw pillow with green stems on neutral bedding',
title: 'Red Amaryllis Impasto Pillow - Bedroom Decor'
}
],
description: 'Decorative throw pillow featuring bold red amaryllis flowers painted in textured impasto strokes. The trumpet-shaped blooms glow in crimson, scarlet, and ruby tones with golden reflections. Vibrant green stems and leaves provide balance against a charcoal background enriched with warm bronze and silver highlights. A luminous floral design that adds elegance and warmth to modern living spaces.',
shortDescription: 'Decorative pillow with bold red amaryllis blooms in expressive impasto oil painting style.',
specifications: generateProductSpecifications(),
externalUrl: 'https://store.flowersluxe.com/products/78942503-red-amaryllis-abstract-impasto-floral-throw-pillow',
metaTitle: 'Red Amaryllis Impasto Floral Throw Pillow',
metaDescription: 'Decorative throw pillow featuring bold red amaryllis blooms with green leaves in impasto oil art style on charcoal background.',
keywords: [
'amaryllis throw pillow',
'red floral pillow',
'flower cushion red',
'amaryllis decor pillow',
'red flower pillow',
'floral impasto art pillow',
'modern floral throw pillow',
'amaryllis impasto pillow'
],
dateAdded: '2025-08-15',
inStock: true,
category: 'Flower Throw Pillows'
},
{
id: 'bird-of-paradise-impasto-pillow',
title: 'Bird of Paradise Impasto Pillow',
slug: 'bird-of-paradise-impasto-pillow',
style: 'abstract',
flowerType: 'bird-of-paradise',
colors: ['orange', 'blue', 'green', 'gray'],
price: 25.00,
featured: true,
mainImage: 'bird-of-paradise-impasto-pillow-white-background.webp',
images: [
{
src: '/images/bird-of-paradise-impasto-pillow-white-background.webp',
alt: 'Bird of Paradise impasto pillow with fiery orange and sapphire blue petals on dark charcoal background',
title: 'Bird of Paradise Impasto Pillow - Impasto Oil Art'
},
{
src: '/images/bird-of-paradise-impasto-pillow-on-sofa.webp',
alt: 'Bird of Paradise impasto pillow on charcoal sofa with vibrant orange and blue blooms, emerald leaves',
title: 'Bird of Paradise Impasto Pillow - Modern Sofa Styling'
},
{
src: '/images/bird-of-paradise-impasto-pillow-on-bed.webp',
alt: 'Bird of Paradise impasto throw pillow on light bedding, orange and ultramarine blooms with foliage glow',
title: 'Bird of Paradise Impasto Pillow - Bedroom Decor'
}
],
description: '"Bring tropical energy to your living room with this Bird of Paradise floral throw pillow. Featuring vivid orange and sapphire blue petals with lush green leaves on a deep charcoal background, this pillow adds a bold, modern accent to any sofa or bedroom. Perfect as a decorative tropical pillow, it blends artistic oil impasto style with versatile home décor design.',
shortDescription: 'Bird of Paradise floral pillow in bold impasto with vivid orange, blue, and fresh greens on charcoal.',
specifications: generateProductSpecifications(),
externalUrl: 'https://store.flowersluxe.com/products/78944467-bird-of-paradise-floral-throw-pillow',
metaTitle: 'Bird of Paradise Throw Pillow – Impasto Floral Art',
metaDescription: 'Bird of Paradise throw pillow featuring tropical orange and sapphire blue flowers with green leaves on charcoal. A bold, modern decorative accent for living rooms or bedrooms.',
keywords: [
'bird of paradise pillow',
'tropical floral pillow',
'impasto oil floral',
'orange blue pillow',
'modern abstract pillow',
'charcoal grey decor',
'modern decorative pillow',
'emerald green leaves',
'sapphire blue accents',
'vibrant floral decor',
'gallery wall pillow',
'tropical decor pillow'
],
dateAdded: '2025-08-17',
inStock: true,
category: 'Flower Throw Pillows'
},
{
id: 'white-calla-lily-impasto-pillow',
title: 'White Calla Lily Impasto Pillow',
slug: 'white-calla-lily-impasto-pillow',
style: 'abstract',
flowerType: 'lily',
colors: ['white', 'green', 'gray', 'yellow'],
price: 25.00,
featured: true,
mainImage: 'white-calla-lily-impasto-pillow-white-background.webp',
images: [
{
src: '/images/white-calla-lily-impasto-pillow-white-background.webp',
alt: 'White calla lily bouquet in impasto oil, pearl and champagne-gold highlights on dark charcoal background',
title: 'White Calla Lily Impasto Pillow - Impasto Oil Art'
},
{
src: '/images/white-calla-lily-impasto-pillow-on-sofa.webp',
alt: 'White calla lily impasto pillow on charcoal sofa with emerald leaves and metallic gold brush accents',
title: 'White Calla Lily Impasto Pillow - Modern Sofa Styling'
},
{
src: '/images/white-calla-lily-impasto-pillow-on-bed.webp',
alt: 'White calla lily impasto throw pillow on light bedding with emerald leaves and soft charcoal gradients',
title: 'White Calla Lily Impasto Pillow - Bedroom Decor'
}
],
description: 'Decorative throw pillow showcasing elegant white calla lilies rendered in bold, layered impasto. Crisp ivory petals glow with pearl and champagne-gold accents above saturated emerald greens, set against a deep charcoal backdrop with tasteful metallic gold streaks for a refined, high-contrast centerpiece.',
shortDescription: 'Elegant white calla lily pillow with pearl and gold highlights, rich greens, and a dramatic charcoal ground.',
specifications: generateProductSpecifications(),
externalUrl: 'https://store.flowersluxe.com/products/78945888-white-calla-lily-impasto-floral-throw-pillow',
metaTitle: 'White Calla Lily Throw Pillow – Impasto Floral Art',
metaDescription: 'White calla lily pillow with crisp ivory petals and champagne-gold highlights in bold impasto. Vibrant greens on charcoal for an elegant, modern focal piece.',
keywords: [
'white calla lily pillow',
'calla lily throw pillow',
'impasto floral pillow',
'ivory flower cushion',
'champagne gold highlights',
'charcoal grey decor',
'modern floral art',
'botanical cushion',
'elegant white pillow',
'emerald green leaves',
'metallic gold accents',
'gallery style pillow'
],
dateAdded: '2025-08-17',
inStock: true,
category: 'Flower Throw Pillows'
},
{
id: 'coral-peonies-impasto-pillow',
title: 'Coral Peonies Impasto Pillow',
slug: 'coral-peonies-impasto-pillow',
style: 'abstract',
flowerType: 'peony',
colors: ['red', 'blue', 'green', 'yellow'],
price: 25.00,
featured: true,
mainImage: 'coral-peonies-impasto-pillow-white-background.webp',
images: [
{
src: '/images/coral-peonies-impasto-pillow-white-background.webp',
alt: 'Coral peony pillow with oil-impasto petals, deep blue teal background, golden accents, and green leaves details',
title: 'Coral Peonies Impasto Pillow - Impasto Oil Art'
},
{
src: '/images/coral-peonies-impasto-pillow-on-sofa.webp',
alt: 'Coral peony impasto pillow on charcoal sofa with blue background tones, layered petals, green leaves details',
title: 'Coral Peonies Impasto Pillow - Modern Sofa Styling'
},
{
src: '/images/coral-peonies-impasto-pillow-on-bed.webp',
alt: 'Coral peony oil-impasto throw pillow on light bedding, blue-teal backdrop with golden highlights and green leaves',
title: 'Coral Peonies Impasto Pillow - Bedroom Decor'
}
],
description: 'Peony pillow in rich coral tones, painted in bold oil impasto over deep blue and teal. Layered petals and fresh green leaves create dimensional texture. A modern decorative pillow for floral home decor, perfect for adding color to sofas or bedding.',
shortDescription: 'Peony pillow in coral oil impasto with deep blue backdrop; vibrant, modern decorative pillow.',
specifications: generateProductSpecifications(),
externalUrl: 'https://store.flowersluxe.com/products/78946803-coral-peonies-impasto-throw-pillow',
metaTitle: 'Peony Pillow – Coral Oil Impasto Floral Throw Cushion',
metaDescription: 'Peony pillow with coral impasto petals on deep blue. A modern decorative pillow for floral home decor with bold texture and luminous color.',
keywords: [
'peony pillow',
'coral peony pillow',
'blue and coral throw pillow',
'floral home decor',
'modern decorative pillow',
'impasto oil floral pillow',
'teal blue pillow',
'peony cushion',
'flower art pillow',
'bright floral cushion',
'living room pillow',
'bedroom accent pillow'
],
dateAdded: '2025-08-17',
inStock: true,
category: 'Flower Throw Pillows'
},
{
id: 'golden-sunflowers-impasto-pillow',
title: 'Golden Sunflowers Impasto Pillow',
slug: 'golden-sunflowers-impasto-pillow',
style: 'abstract',
flowerType: 'sunflower',
colors: ['yellow', 'blue', 'green'],
price: 25.00,
featured: true,
mainImage: 'golden-sunflowers-impasto-pillow-white-background.webp',
images: [
{
src: '/images/golden-sunflowers-impasto-pillow-white-background.webp',
alt: 'Golden sunflower pillow with oil-impasto petals, navy background, bronze centers, rich green leaves adding lively contrast',
title: 'Golden Sunflowers Impasto Pillow - Impasto Oil Art'
},
{
src: '/images/golden-sunflowers-impasto-pillow-on-sofa.webp',
alt: 'Sunflower impasto pillow on charcoal sofa; glowing yellow petals, textured brown centers, emerald and moss leaves',
title: 'Golden Sunflowers Impasto Pillow - Modern Sofa Styling'
},
{
src: '/images/golden-sunflowers-impasto-pillow-on-bed.webp',
alt: 'Sunflower oil-impasto throw pillow on light bedding with navy backdrop tones and green stems and leaves',
title: 'Golden Sunflowers Impasto Pillow - Bedroom Decor'
}
],
description: 'Sunflower pillow featuring saturated golden petals and textured centers on a deep navy field. Thick oil impasto brushwork adds sculptural depth, while emerald leaves bring freshness. A bold floral home decor accent for modern sofas and bedrooms.',
shortDescription: 'Sunflower pillow with golden impasto petals on navy; bold modern floral pillow.',
specifications: generateProductSpecifications(),
externalUrl:  'https://store.flowersluxe.com/products/78954014-golden-sunflowers-impasto-throw-pillow',
metaTitle: 'Sunflower Pillow – Golden Oil Impasto Floral Throw Cushion',
metaDescription: 'Sunflower pillow with golden impasto petals and navy backdrop. A modern decorative pillow that adds bright floral energy to sofas and bedding.',
keywords: [
'sunflower pillow',
'yellow floral pillow',
'navy blue throw pillow',
'golden flower cushion',
'impasto oil pillow',
'modern floral decor',
'botanical throw pillow',
'sunflower cushion',
'living room accent pillow',
'bright yellow pillow',
'blue and yellow pillow',
'floral art cushion'
],
dateAdded: '2025-08-17',
inStock: true,
category: 'Flower Throw Pillows'
},
{
id: 'blue-hydrangea-impasto-pillow-charcoal',
title: 'Blue Hydrangea Impasto Pillow – Charcoal',
slug: 'blue-hydrangea-impasto-pillow-charcoal',
style: 'abstract',
flowerType: 'hydrangea',
colors: ['blue', 'gray', 'green'],
price: 25.00,
featured: true,
mainImage: 'blue-hydrangea-impasto-pillow-charcoal-white-background.webp',
images: [
{
src: '/images/blue-hydrangea-impasto-pillow-charcoal-white-background.webp',
alt: 'Blue hydrangea pillow with impasto petals against dark grey background, metallic silver streaks and green foliage',
title: 'Blue Hydrangea Impasto Pillow - Charcoal Background'
},
{
src: '/images/blue-hydrangea-impasto-pillow-charcoal-on-sofa.webp',
alt: 'Blue hydrangea impasto pillow on charcoal sofa with dark grey backdrop, silver accents and green leaves',
title: 'Blue Hydrangea Impasto Pillow - Modern Sofa Styling'
},
{
src: '/images/blue-hydrangea-impasto-pillow-charcoal-on-bed.webp',
alt: 'Blue hydrangea oil-impasto throw pillow on light bedding with charcoal background tones and textured green leaves',
title: 'Blue Hydrangea Impasto Pillow - Bedroom Decor'
}
],
description: 'Hydrangea pillow in saturated cobalt and cerulean, sculpted with thick impasto over a dramatic charcoal field. Metallic silver notes add polish while bold green leaves provide contrast. A gallery-style blue floral pillow that makes a striking statement.',
shortDescription: 'Hydrangea pillow in vivid blue impasto on charcoal; bold modern floral pillow.',
specifications: generateProductSpecifications(),
externalUrl: 'https://store.flowersluxe.com/products/78954885-blue-hydrangea-impasto-throw-pillow',
metaTitle: 'Hydrangea Pillow – Blue Impasto Floral on Charcoal',
metaDescription: 'Hydrangea pillow with cobalt impasto blooms on a charcoal background. A modern blue floral decorative pillow with metallic highlights and rich texture.',
keywords: [
'hydrangea pillow',
'blue floral throw pillow',
'charcoal sofa pillow',
'cobalt blue cushion',
'impasto oil pillow',
'modern floral decor',
'botanical cushion blue',
'dark gray pillow',
'statement floral pillow',
'textured flower pillow',
'blue couch pillow',
'gallery wall decor pillow'
],
dateAdded: '2025-08-17',
inStock: true,
category: 'Flower Throw Pillows'
},
{
id: 'lavender-bouquet-abstract-pillow',
title: 'Lavender Bouquet Abstract Pillow',
slug: 'lavender-bouquet-abstract-pillow',
style: 'abstract',
flowerType: 'lavender',
colors: ['purple', 'blue', 'green'],
price: 25.00,
featured: true,
mainImage: 'lavender-bouquet-abstract-pillow-white-background.webp',
images: [
{
src: '/images/lavender-bouquet-abstract-pillow-white-background.webp',
alt: 'Abstract lavender pillow in purple and lilac tones with fresh green stems on deep blue and teal background',
title: 'Lavender Bouquet Abstract Pillow - Oil Impasto Art'
},
{
src: '/images/lavender-bouquet-abstract-pillow-on-sofa.webp',
alt: 'Purple lavender bouquet pillow styled on dark sofa with teal and gold impasto background',
title: 'Lavender Bouquet Abstract Pillow - Modern Sofa Styling'
},
{
src: '/images/lavender-bouquet-abstract-pillow-on-bed.webp',
alt: 'Lavender bouquet throw pillow on neutral bedding with saturated purple and green floral impasto design',
title: 'Lavender Bouquet Abstract Pillow - Bedroom Accent'
}
],
description: 'Decorative lavender pillow featuring a bouquet of stems painted in vibrant purples—deep violet to glowing lilac—against a radiant blue-teal background with subtle gold streaks. The impasto oil style creates a three-dimensional textured effect, while the fresh green stems and leaves add natural balance. This modern abstract floral pillow enhances sofas, beds, and lounge spaces with a bold pop of color and artistic flair.',
shortDescription: 'Lavender pillow with abstract bouquet in vibrant purple and blue-teal impasto oil style.',
specifications: generateProductSpecifications(),
externalUrl: 'https://store.flowersluxe.com/products/78956280-lavender-bouquet-abstract-impasto-oil-floral-throw-pillow',
metaTitle: 'Lavender Pillow – Abstract Impasto Oil Bouquet Design',
metaDescription: 'Lavender pillow in vibrant purple and lilac shades with green stems on a bold blue-teal impasto background. Modern floral décor for sofas or beds.',
keywords: [
'lavender pillow',
'purple abstract pillow',
'floral throw pillow',
'modern floral cushion',
'blue and purple pillow',
'impasto oil pillow',
'decorative botanical pillow',
'lavender bouquet cushion',
'purple lilac pillow',
'floral home decor pillow',
'teal floral pillow',
'bedroom accent pillow'
],
dateAdded: '2025-08-17',
inStock: true,
category: 'Flower Throw Pillows'
},
{
id: 'golden-daisy-impasto-pillow',
title: 'Golden Daisy Impasto Pillow',
slug: 'golden-daisy-impasto-pillow',
style: 'abstract',
flowerType: 'daisy',
colors: ['yellow', 'blue', 'green'],
price: 25.00,
featured: true,
mainImage: 'golden-daisy-impasto-pillow-white-background.webp',
images: [
{
src: '/images/golden-daisy-impasto-pillow-white-background.webp',
alt: 'Abstract golden daisy pillow, impasto petals in honey gold on teal-emerald background with deep green leaves',
title: 'Golden Daisy Impasto Pillow - Abstract Oil Floral'
},
{
src: '/images/golden-daisy-impasto-pillow-on-sofa.webp',
alt: 'Golden daisy floral pillow on modern sofa with textured oil impasto and teal and turquoise abstract backdrop',
title: 'Golden Daisy Impasto Pillow - Modern Sofa Styling'
},
{
src: '/images/golden-daisy-impasto-pillow-on-bed.webp',
alt: 'Yellow daisy impasto throw pillow on light bedding with teal and emerald abstract background and bronze centers',
title: 'Golden Daisy Impasto Pillow - Bedroom Decor'
}
],
description: 'Golden daisy pillow in rich yellow-gold tones, painted in bold oil impasto over teal and emerald. This abstract floral design features sculpted petals and deep bronze centers for dimensional texture. A modern decorative pillow that layers easily with blue or green accents and adds warm color to sofas, chairs, or beds. Ideal for floral home decor, modern interiors, and statement accents.',
shortDescription: 'Golden daisy throw pillow — oil impasto, teal/emerald backdrop, modern floral.',
specifications: generateProductSpecifications(),
externalUrl: 'https://store.flowersluxe.com/products/78958361-green-orchid-impasto-throw-pillow',
metaTitle: 'Golden Daisy Oil Impasto Throw Pillow – Abstract Floral',
metaDescription: 'Golden daisy throw pillow in textured oil impasto on teal and emerald. This abstract floral daisy pillow adds warm yellow depth and crisp detail to modern décor.',
keywords: [
'daisy pillow',
'golden daisy pillow',
'yellow floral pillow',
'abstract floral pillow',
'impasto oil pillow',
'modern decorative pillow',
'teal sofa pillow',
'emerald green pillow',
'botanical throw pillow',
'flower art cushion',
'blue and yellow pillow',
'textured floral pillow'
],
dateAdded: '2025-08-18',
inStock: true,
category: 'Flower Throw Pillows'
},
{
id: 'green-orchid-impasto-pillow',
title: 'Green Orchid Impasto Pillow',
slug: 'green-orchid-impasto-pillow',
style: 'abstract',
flowerType: 'orchid',
colors: ['green', 'blue', 'purple', 'yellow'],
price: 25.00,
featured: true,
mainImage: 'green-orchid-impasto-pillow-white-background.webp',
images: [
{
src: '/images/green-orchid-impasto-pillow-white-background.webp',
alt: 'Green orchid impasto pillow with lime and emerald petals on teal and purple abstract background',
title: 'Green Orchid Impasto Pillow - Abstract Floral Art'
},
{
src: '/images/green-orchid-impasto-pillow-on-sofa.webp',
alt: 'Green orchid impasto pillow on charcoal sofa with lime, emerald, and gold accents, teal-purple backdrop',
title: 'Green Orchid Impasto Pillow - Modern Sofa Styling'
},
{
src: '/images/green-orchid-impasto-pillow-on-bed.webp',
alt: 'Green orchid decorative pillow on light bedding; impasto petals with teal and purple abstract background',
title: 'Green Orchid Impasto Pillow - Bedroom Decor'
}
],
description: 'Green orchid pillow featuring bold impasto oil texture with lime and emerald petals and warm golden centers. The design sits on a teal and purple abstract background with subtle metallic accents, blending modern decorative style with fine-art detail. A versatile floral home decor accent that pairs beautifully with charcoal, navy, or neutral sofas.',
shortDescription: 'Green orchid pillow in impasto oil on teal and purple abstract background.',
specifications: generateProductSpecifications(),
externalUrl: 'https://www.flowersluxe.com/products/green-orchid-impasto-pillow',
metaTitle: 'Green Orchid Throw Pillow – Impasto Abstract Floral',
metaDescription: 'Green orchid pillow in rich impasto with lime and emerald petals on teal and purple abstract background. Modern floral accent for sofa or bed.',
keywords: [
'green orchid pillow',
'orchid throw pillow',
'abstract floral pillow',
'impasto oil pillow',
'lime green pillow',
'modern decorative pillow',
'teal purple pillow',
'botanical cushion',
'orchid art pillow',
'luxury floral decor'
],
dateAdded: '2025-08-18',
inStock: true,
category: 'Flower Throw Pillows'
},
{
id: 'yellow-tulip-impasto-pillow',
title: 'Yellow Tulip Impasto Pillow',
slug: 'yellow-tulip-impasto-pillow',
style: 'abstract',
flowerType: 'tulip',
colors: ['yellow', 'blue', 'green'],
price: 25.00,
featured: true,
mainImage: 'yellow-tulip-impasto-pillow-white-background.webp',
images: [
{
src: '/images/yellow-tulip-impasto-pillow-white-background.webp',
alt: 'Yellow tulip pillow with impasto petals in marigold and amber on deep-teal and turquoise abstract backdrop',
title: 'Yellow Tulip Impasto Pillow - Impasto Oil Art'
},
{
src: '/images/yellow-tulip-impasto-pillow-on-sofa.webp',
alt: 'Abstract yellow tulip impasto pillow on a charcoal sofa, teal and emerald background with gold accents',
title: 'Yellow Tulip Impasto Pillow - Modern Sofa Styling'
},
{
src: '/images/yellow-tulip-impasto-pillow-on-bed.webp',
alt: 'Golden yellow tulip impasto throw pillow on light bedding, turquoise and teal backdrop with subtle gold',
title: 'Yellow Tulip Impasto Pillow - Bedroom Decor'
}
],
description: 'Yellow tulip pillow painted in bold oil impasto for rich texture and depth. Golden marigold and amber petals glow against a saturated teal–turquoise and emerald background with refined gold accents. This modern abstract floral pillow adds sculptural interest to living rooms and bedrooms, pairing easily with light neutrals or dark sofas—perfect for floral home decor and contemporary decorative styling.',
shortDescription: 'Yellow tulip pillow in abstract oil impasto with teal and emerald background; bold, modern decorative cushion.',
specifications: generateProductSpecifications(),
externalUrl: 'https://www.flowersluxe.com/products/yellow-tulip-impasto-pillow',
metaTitle: 'Yellow Tulip Pillow – Abstract Oil Impasto Floral Decor',
metaDescription: 'Yellow tulip pillow in bold oil impasto with teal and emerald background. Modern decorative cushion with luminous marigold petals, ideal for floral home decor.',
keywords: [
'yellow tulip pillow',
'tulip throw pillow',
'abstract floral pillow',
'impasto oil pillow',
'teal and green pillow',
'modern decorative pillow',
'floral home decor',
'turquoise pillow',
'yellow flower cushion',
'botanical art pillow',
'contemporary floral cushion',
'gallery wall pillow'
],
dateAdded: '2025-08-18',
inStock: true,
category: 'Flower Throw Pillows'
},



{
id: 'floral-throw-pillow-anthurium-crystallinum-modern',
title: 'Floral Throw Pillow – Anthurium Crystallinum Modern Cushion',
slug: 'anthurium-modern-floral-pillow',
style: 'modern',
flowerType: 'anthurium',
colors: ['green', 'white', 'pink'],
price: 25.00,
featured: true,
mainImage: 'floral-throw-pillow-anthurium-crystallinum-modern-white.webp',
images: [
{
src: '/images/floral-throw-pillow-anthurium-crystallinum-modern-white.webp',
alt: 'Floral throw pillow with Anthurium crystallinum leaves and pale blooms on a clean white background',
title: 'Floral Throw Pillow – Anthurium Crystallinum Modern Cushion White Background'
},
{
src: '/images/floral-throw-pillow-anthurium-crystallinum-modern-sofa.webp',
alt: 'Modern floral throw pillow with Anthurium crystallinum design styled on a contemporary sofa',
title: 'Floral Throw Pillow – Anthurium Crystallinum Modern Cushion on Sofa'
},
{
src: '/images/floral-throw-pillow-anthurium-crystallinum-modern-bed.webp',
alt: 'Anthurium crystallinum floral throw pillow layered on a minimalist bed setting',
title: 'Floral Throw Pillow – Anthurium Crystallinum Modern Cushion on Bed'
}
],
description: 'Floral throw pillow crafted around the iconic Anthurium crystallinum, celebrated for its deep-green velvety leaves traced with elegant silver veins. This modern decorative cushion transforms your space with rich, botanical texture and a clean, gallery-worthy finish. The crisp white backdrop and heart-shaped foliage deliver striking contrast that suits contemporary living room decor, chic bedrooms, and calm reading nooks. Designed to complement neutral interiors as well as bold accent palettes, the refined composition adds a peaceful yet luxurious vibe. Perfect as a feature accent or layered with other decorative cushions, this floral throw pillow brings organic sophistication without visual clutter. Printed double-sided in vivid, high-resolution color with smooth seams, a concealed zipper, and a plush insert for sink-in comfort. Durable, easy-care fabric makes it a practical style upgrade for everyday lounging while maintaining premium detail. Elevate sofas, armchairs, or bedding with a botanical statement that feels cozy, stylish, and timeless.',
shortDescription: 'Floral throw pillow showcasing Anthurium crystallinum for a modern, luxurious decor accent.',
specifications: generateProductSpecifications(),
externalUrl: 'https://store.flowersluxe.com/products/79650196-floral-anthurium-crystallinum-modern-throw-pillow',
metaTitle: 'Floral Throw Pillow – Anthurium Crystallinum Modern Cushion',
metaDescription: 'Floral throw pillow with Anthurium crystallinum. Elevate modern living room decor with a luxe botanical cushion—shop the collection.',
keywords: [
'floral throw pillow',
'decorative cushion',
'living room decor',
'anthurium pillow',
'modern floral pillow',
'botanical pillow',
'green leaf pillow'
],
dateAdded: '2025-09-01',
inStock: true,
category: 'Flower Throw Pillows'
},
 {
  id: 'floral-throw-pillow-calceolaria-uniflora-watercolor-cushion',
  title: 'Floral Throw Pillow – Calceolaria Uniflora Watercolor Cushion',
  slug: 'calceolaria-uniflora-floral-pillow',
  style: 'watercolor',
  flowerType: 'calceolaria',
  colors: ['orange', 'yellow', 'green', 'red'],
  price: 25.00,
  featured: true,
  mainImage: 'floral-throw-pillow-calceolaria-uniflora-watercolor.webp',
  images: [
    {
      src: '/images/floral-throw-pillow-calceolaria-uniflora-watercolor.webp',
      alt: 'Floral throw pillow featuring Calceolaria Uniflora with vivid orange-yellow petals and maroon spots on minimalist background',
      title: 'Floral Throw Pillow – Calceolaria Uniflora Watercolor Cushion Artwork'
    },
    {
      src: '/images/floral-throw-pillow-calceolaria-uniflora-sofa.webp',
      alt: 'Decorative floral throw pillow with Calceolaria Uniflora design styled on a modern sofa',
      title: 'Floral Throw Pillow – Calceolaria Uniflora Cushion Styled on Sofa'
    },
    {
      src: '/images/floral-throw-pillow-calceolaria-uniflora-bed.webp',
      alt: 'Calceolaria Uniflora floral pillow arranged on a cozy bed with layered linens',
      title: 'Floral Throw Pillow – Calceolaria Uniflora Cushion on Bed'
    }
  ],
  description: 'Floral throw pillow showcasing a hyper-detailed artistic illustration of Calceolaria Uniflora, also known as Darwin’s Slipper. This decorative cushion highlights the flower’s vibrant orange-yellow trumpet petals with delicate maroon-red spots, balanced by lush green leaves and organic stems. Painted in a refined watercolor and oil blend style, the artwork features visible brushstrokes, layered textures, and luminous color transitions that bring the design to life. Perfect for modern living rooms, bedrooms, or creative studio spaces, this floral throw pillow adds a touch of sophistication and natural charm. Crafted from premium poly twill fabric with a concealed zipper and soft insert, it offers both comfort and elegance. Whether styled on a sofa, armchair, or bed, this botanical cushion creates a cozy, stylish, and uplifting atmosphere for your home decor.',
  shortDescription: 'Floral throw pillow with Calceolaria Uniflora design in vivid orange-yellow tones, perfect for modern living rooms and cozy bedrooms.',
  specifications: generateProductSpecifications(),
  externalUrl: 'https://store.flowersluxe.com/products/79650620-floral-calceolaria-uniflora-watercolor-throw-pillow',
  metaTitle: 'Floral Throw Pillow – Calceolaria Uniflora Watercolor Cushion',
  metaDescription: 'Floral throw pillow featuring Calceolaria Uniflora with vivid orange-yellow petals. Perfect decorative cushion for modern living rooms and cozy bedrooms.',
  keywords: [
    'floral throw pillow',
    'watercolor pillow',
    'calceolaria pillow',
    'Darwin’s Slipper pillow',
    'decorative cushion',
    'modern floral decor',
    'living room pillow'
  ],
  dateAdded: '2025-09-01',
  inStock: true,
  category: 'Flower Throw Pillows'
},
{
id: 'floral-throw-pillow-camellia-japonica-seamless-pattern',
title: 'Floral Throw Pillow – Camellia Japonica Seamless Botanical Cushion',
slug: 'camellia-japonica-seamless-pillow',
style: 'watercolor',
flowerType: 'camellia',
colors: ['pink', 'red', 'white', 'green'],
price: 25.00,
featured: true,
mainImage: 'floral-throw-pillow-camellia-japonica-seamless-white.webp',
images: [
{
src: '/images/floral-throw-pillow-camellia-japonica-seamless-white.webp',
alt: 'Floral throw pillow with seamless Camellia Japonica botanical design in pink, red',
title: 'Floral Throw Pillow – Camellia Japonica Seamless Botanical Cushion White Background'
},
{
src: '/images/floral-throw-pillow-camellia-japonica-seamless-sofa.webp',
alt: 'Decorative cushion featuring seamless Camellia Japonica watercolor on sofa',
title: 'Floral Throw Pillow – Camellia Japonica Seamless Botanical Cushion on Sofa'
},
{
src: '/images/floral-throw-pillow-camellia-japonica-seamless-bed.webp',
alt: 'Seamless Camellia Japonica floral throw pillow styled on a luxury bed with elegant interior decor',
title: 'Floral Throw Pillow – Camellia Japonica Seamless Botanical Cushion on Bed'
}
],
description: 'Floral throw pillow featuring a seamless botanical pattern of Camellia japonica, celebrated for its soft velvety petals and timeless elegance. This decorative cushion highlights blossoms in rich shades of pink, red, and white, paired with glossy deep-green leaves accented by natural highlights. Painted in a hyper-realistic watercolor style, the design captures smooth gradients, delicate details, and crisp colors that enhance its luxurious look. The seamless repetition ensures a flawless finish, making this pillow an exquisite choice for premium interiors. Perfect for adding charm to modern living rooms, bedrooms, or lounge spaces, the Camellia pillow blends sophistication with comfort. Its clean bright background and sharp focus make it versatile for both contemporary and classic decor. Ideal for floral art enthusiasts, plant lovers, or anyone seeking to elevate their home styling with an elegant botanical accent, this cushion offers both durability and refined beauty in every detail.',
shortDescription: 'Floral throw pillow with seamless Camellia Japonica watercolor design in pink, red, and white, perfect for luxury interiors.',
specifications: generateProductSpecifications(),
externalUrl: 'https://store.flowersluxe.com/products/79650021-camellia-japonica-floral-throw-pillow',
metaTitle: 'Floral Throw Pillow – Camellia Japonica Seamless Botanical Cushion',
metaDescription: 'Floral throw pillow featuring seamless Camellia Japonica design in pink, red, and white. Perfect decorative cushion for luxury modern interiors.',
keywords: [
'floral throw pillow',
'camellia pillow',
'watercolor floral pillow',
'seamless botanical pillow',
'luxury home decor',
'modern floral pillow',
'decorative cushion'
],
dateAdded: '2025-09-01',
inStock: true,
category: 'Flower Throw Pillows'
},
{
id: 'floral-throw-pillow-checkered-lily-botanical',
title: 'Floral Throw Pillow – Checkered Lily Botanical Cushion',
slug: 'checkered-lily-floral-pillow',
style: 'floral',
flowerType: 'lily',
colors: ['purple', 'green', 'white'],
price: 25.00,
featured: true,
mainImage: 'floral-throw-pillow-checkered-lily-botanical-white.webp',
images: [
{
src: '/images/floral-throw-pillow-checkered-lily-botanical-white.webp',
alt: 'Floral throw pillow with Fritillaria meleagris Checkered Lily botanical design on white background',
title: 'Floral Throw Pillow – Checkered Lily Botanical Cushion White Background'
},
{
src: '/images/floral-throw-pillow-checkered-lily-botanical-sofa.webp',
alt: 'Decorative cushion featuring Checkered Lily floral art styled on a modern sofa',
title: 'Floral Throw Pillow – Checkered Lily Botanical Cushion on Sofa'
},
{
src: '/images/floral-throw-pillow-checkered-lily-botanical-bed.webp',
alt: 'Checkered Lily botanical floral throw pillow styled on a cozy bed for elegant home decor',
title: 'Floral Throw Pillow – Checkered Lily Botanical Cushion on Bed'
}
],
description: 'Floral throw pillow featuring the enchanting Fritillaria meleagris, also known as the Checkered Lily. This decorative cushion captures the elegance of its bell-shaped blossoms with intricate purple-magenta checkered petal patterns, gracefully hanging from slender green stems. The glossy textures, sharp details, and vibrant hues make this pillow an exceptional piece of modern botanical art. Perfect for premium floral patterns, it seamlessly blends into contemporary living rooms, chic reading corners, or cozy bedrooms. Whether used as a centerpiece cushion on a neutral sofa or paired with other floral designs for layered styling, this Checkered Lily pillow adds refined charm and timeless beauty. Crafted with durability and comfort in mind, it offers both visual delight and practical functionality. Ideal for those who love unique flowers, artistic home decor, and a touch of botanical luxury, this throw pillow elevates any interior with its captivating design and polished finish.',
shortDescription: 'Floral throw pillow with Checkered Lily botanical art in rich purple tones, perfect for stylish modern home decor.',
specifications: generateProductSpecifications(),
externalUrl: 'https://store.flowersluxe.com/products/79649698-checkered-lily-floral-throw-pillow',
metaTitle: 'Floral Throw Pillow – Checkered Lily Botanical Cushion',
metaDescription: 'Floral throw pillow featuring Checkered Lily botanical art in purple tones. Perfect decorative cushion for stylish modern home decor.',
keywords: [
'floral throw pillow',
'checkered lily pillow',
'decorative cushion',
'botanical pillow',
'purple floral pillow',
'modern home decor',
'living room pillow'
],
dateAdded: '2025-09-01',
inStock: true,
category: 'Flower Throw Pillows'
},
{
  id: 'floral-throw-pillow-christmas-cactus-modern-cushion',
  title: 'Floral Throw Pillow – Christmas Cactus Modern Cushion',
  slug: 'christmas-cactus-modern-pillow',
  style: 'modern',
  flowerType: 'christmas',
  colors: ['purple', 'magenta', 'green'],
  price: 25.00,
  featured: true,
  mainImage: 'floral-throw-pillow-christmas-cactus-modern.webp',
  images: [
    {
      src: '/images/floral-throw-pillow-christmas-cactus-modern.webp',
      alt: 'Floral throw pillow with Christmas Cactus blossoms in vivid fuchsia purple and magenta with deep green leaves',
      title: 'Floral Throw Pillow – Christmas Cactus Modern Cushion'
    },
    {
      src: '/images/floral-throw-pillow-christmas-cactus-modern-sofa.webp',
      alt: 'Modern floral throw pillow with cascading Christmas Cactus blossoms styled on a sofa',
      title: 'Floral Throw Pillow – Christmas Cactus Cushion on Sofa'
    },
    {
      src: '/images/floral-throw-pillow-christmas-cactus-modern-bed.webp',
      alt: 'Decorative cushion featuring Christmas Cactus blossoms in radiant purple and magenta on a cozy bed',
      title: 'Floral Throw Pillow – Christmas Cactus Cushion on Bed'
    }
  ],
  description: 'Celebrate the beauty of holiday blooms year-round with this floral throw pillow featuring the vibrant Christmas Cactus. The design captures cascading blossoms in bright fuchsia purple and soft magenta tones, with delicate gradients and luminous highlights that bring lifelike energy to every petal. The segmented succulent green leaves, illustrated with hyper-detailed textures, provide striking contrast and depth. Perfectly arranged in a seamless botanical pattern, this decorative cushion adds radiant color and tropical charm to your home. Ideal for modern interiors, it makes a bold accent for neutral sofas, cozy armchairs, or stylish bedrooms. Made with premium poly twill fabric, the pillow features a double-sided print, concealed zipper, and includes a plush insert for lasting comfort. Whether used as a statement piece or layered with other decorative cushions, the Christmas Cactus pillow enhances any space with warmth and botanical elegance. A thoughtful gift for plant enthusiasts or anyone who loves vibrant decor, this cushion combines modern artistry with comfort, making it a standout addition to your living room or bedroom.',
  shortDescription: 'Floral throw pillow with Christmas Cactus blossoms in fuchsia purple and magenta with deep green leaves.',
  specifications: generateProductSpecifications(),
  externalUrl: 'https://store.flowersluxe.com/products/79649133-christmas-cactus-modern-throw-pillow',
  metaTitle: 'Floral Throw Pillow – Christmas Cactus Modern Cushion',
  metaDescription: 'Floral throw pillow featuring Christmas Cactus blossoms in vivid purple and magenta tones. A bold modern cushion perfect for stylish home decor.',
  keywords: [
    'floral throw pillow',
    'christmas cactus pillow',
    'modern floral pillow',
    'decorative cushion',
    'living room decor',
    'succulent pillow',
    'botanical pillow'
  ],
  dateAdded: '2025-09-01',
  inStock: true,
  category: 'Flower Throw Pillows'
},
{
  id: 'floral-throw-pillow-dahlia-vintage-luxury',
  title: 'Floral Throw Pillow – Dahlia Vintage Luxury Cushion',
  slug: 'dahlia-vintage-pillow',
  style: 'vintage',
  flowerType: 'dahlia',
  colors: ['red', 'pink', 'white'],
  price: 25.00,
  featured: false,
  mainImage: 'floral-throw-pillow-dahlia-vintage-luxury.webp',
  images: [
    {
      src: '/images/floral-throw-pillow-dahlia-vintage-luxury.webp',
      alt: 'Vintage floral throw pillow with burgundy, dusty rose, and cream dahlia flowers',
      title: 'Floral Throw Pillow – Dahlia Vintage Luxury Cushion'
    },
     {
      src: '/images/floral-throw-pillow-dahlia-vintage-bed.webp',
      alt: 'floral throw pillow with burgundy, dusty rose, and cream dahlia flowers',
      title: 'Floral Throw Pillow – Dahlia Vintage Luxury on bed'
    },
    {
      src: '/images/floral-throw-pillow-dahlia-vintage-luxury-sofa.webp',
      alt: 'Luxurious vintage dahlia floral throw pillow styled on a sofa',
      title: 'Floral Throw Pillow – Dahlia Vintage Luxury Cushion on Sofa'
    }
  ],
  description: 'Floral throw pillow featuring luxurious dahlia flowers in full bloom, painted with exquisite artistic details and vintage elegance. The refined composition highlights rich burgundy reds, soft dusty rose, peach nude, and creamy ivory tones, designed to beautifully complement gray sofas and upscale interiors. Styled with subtle antique beige textures and soft faded background patterns, this pillow blends luxury botanical illustration with fine watercolor artistry. The natural studio-inspired lighting enhances fabric depth and petal texture, creating a timeless premium look. Ultra-detailed in 8K and finished with a seamless pattern, this decorative cushion is perfect for high-end living rooms, elegant bedrooms, and premium textile applications. A gallery-grade piece that brings sophistication and warmth to your home.',
  shortDescription: 'Floral throw pillow with vintage dahlia flowers in burgundy, dusty rose, peach, and ivory tones.',
  specifications: generateProductSpecifications(),
  externalUrl: 'https://store.flowersluxe.com/products/79648775-floral-dahlia-vintage-throw-pillow',
  metaTitle: 'Floral Throw Pillow – Dahlia Vintage Luxury Cushion',
  metaDescription: 'Floral throw pillow featuring dahlia flowers in burgundy, dusty rose, and cream. Premium decorative cushion for vintage-inspired interiors.',
  keywords: [
    'floral throw pillow',
    'vintage throw pillow',
    'dahlia pillow',
    'decorative cushion',
    'luxury floral pillow',
    'living room decor',
    'gray sofa pillow'
  ],
  dateAdded: '2025-09-01',
  inStock: true,
  category: 'Flower Throw Pillows'
},
{
id: 'floral-throw-pillow-passiflora-neon-modern-art',
title: 'Floral Throw Pillow – Passiflora Neon Modern Art',
slug: 'passiflora-neon-pillow',
style: 'modern',
flowerType: 'passiflora',
colors: ['purple', 'blue', 'black'],
price: 25.00,
featured: true,
mainImage: 'floral-throw-pillow-passiflora-neon-modern.webp',
images: [
{
src: '/images/floral-throw-pillow-passiflora-neon-modern.webp',
alt: 'Floral throw pillow with neon passiflora in vivid magenta and purple against city lights',
title: 'Floral Throw Pillow – Passiflora Neon City Modern Art'
},
{
src: '/images/floral-throw-pillow-passiflora-sofa.webp',
alt: 'Neon passiflora floral throw pillow styled on a dark modern sofa with urban decor',
title: 'Floral Throw Pillow – Passiflora Neon Cushion on Sofa'
},
{
src: '/images/floral-throw-pillow-passiflora-bed.webp',
alt: 'Passiflora neon floral throw pillow on bed adding bold purple accent to bedroom decor',
title: 'Floral Throw Pillow – Passiflora Neon Cushion on Bed'
}
],
description: 'Floral throw pillow designed with a striking neon Passiflora artwork that brings urban energy to your living room decor. The centerpiece flower glows in deep magenta and purple with electric highlights, set against abstract city lights for a sleek, contemporary vibe. This decorative cushion blends botanical elegance with modern edge—perfect for statement sofas, moody lounges, and creative studios. The high-contrast palette delivers instant visual impact while remaining easy to pair with charcoal, navy, or black furnishings. Crafted with a soft yet durable fabric, this modern floral pillow features a double-sided print, concealed zipper, and plush insert for everyday comfort. Whether you love contemporary art or simply want a unique accent, the Passiflora neon design adds depth, drama, and personality to any space. Style it solo as a focal point or layer it with solid pillows in midnight blue, indigo, or graphite to build a cohesive, gallery-worthy arrangement.',
shortDescription: 'Floral throw pillow with neon passiflora art—bold modern accent for living room decor.',
specifications: generateProductSpecifications(),
externalUrl: 'https://store.flowersluxe.com/products/79649528-passiflora-neon-city-modern-throw-pillow',
metaTitle: 'Floral Throw Pillow – Passiflora Neon Modern Art',
metaDescription: 'Floral throw pillow featuring a neon passiflora design. Add bold, contemporary style to your living room decor with this decorative cushion.',
keywords: [
'floral throw pillow',
'decorative cushion',
'living room decor',
'modern floral pillow',
'purple pillow',
'neon art pillow',
'passion flower pillow'
],
dateAdded: '2025-09-01',
inStock: true,
category: 'Flower Throw Pillows'
},
{
id: 'floral-throw-pillow-purple-orchid-impasto-abstract-cushion',
title: 'Floral Throw Pillow – Purple Orchid Oil Impasto Modern Abstract Cushion',
slug: 'purple-orchid-impasto-abstract-pillow',
style: 'modern',
flowerType: 'orchid',
colors: ['purple', 'blue', 'magenta', 'gold', 'green'],
price: 25.00,
featured: true,
mainImage: 'floral-throw-pillow-purple-orchid-impasto-white.webp',
images: [
{
src: '/images/floral-throw-pillow-purple-orchid-impasto-white.webp',
alt: 'Floral throw pillow with purple orchid oil impasto abstract painting on white background',
title: 'Floral Throw Pillow – Purple Orchid Oil Impasto Modern Abstract Cushion White Background'
},
{
src: '/images/floral-throw-pillow-purple-orchid-impasto-sofa.webp',
alt: 'Modern abstract floral throw pillow with purple orchid impasto art styled on a navy sofa with minimal decor',
title: 'Floral Throw Pillow – Purple Orchid Oil Impasto Cushion on Sofa'
},
{
src: '/images/floral-throw-pillow-purple-orchid-impasto-bed.webp',
alt: 'Purple orchid impasto floral throw pillow on a modern bed with dark blue accent wall',
title: 'Floral Throw Pillow – Purple Orchid Oil Impasto Cushion on Bed'
}
],
description: 'Floral throw pillow featuring an elegant purple orchid oil impasto abstract painting on a clean dark blue background. Thick, vibrant brushstrokes, soft highlights, and rich artistic depth create a striking, gallery-worthy accent for modern interiors. Crafted from premium poly twill with a double-sided print, concealed zipper, and included insert. Handmade in America for durability and comfort, this decorative cushion elevates living rooms, bedrooms, and office lounges with bold color and refined style.',
shortDescription: 'Floral throw pillow with purple orchid oil impasto abstract art on a dark blue background—perfect for modern living rooms and bedroom decor.',
specifications: generateProductSpecifications(),
externalUrl: 'https://store.flowersluxe.com/products/79648080-floral-purple-orchid-abstract-throw-pillow',
',
metaTitle: 'Floral Throw Pillow – Purple Orchid Oil Impasto Modern Abstract Cushion',
metaDescription: 'Floral throw pillow featuring purple orchid oil impasto abstract art on a dark blue background. A bold, modern decorative cushion for living rooms and bedrooms.',
keywords: [
'floral throw pillow',
'abstract pillow',
'orchid pillow',
'purple throw pillow',
'modern decor cushion',
'oil impasto pillow',
'dark blue pillow'
],
dateAdded: '2025-08-31',
inStock: true,
category: 'Flower Throw Pillows'
},
{
  id: 'floral-throw-pillow-ranunculus-anemone-hellebore-protea-modern-vintage',
  title: 'Floral Throw Pillow – Ranunculus Anemone Hellebore Protea Modern Vintage',
  slug: 'ranunculus-anemone-protea-vintage-pillow',
  style: 'vintage',
  flowerType: 'mixed-florals',
  colors: ['pink', 'green', 'beige'],
  price: 25.00,
  featured: true,
  mainImage: 'floral-throw-pillow-ranunculus-anemone-protea-vintage.webp',
  images: [
    {
      src: '/images/floral-throw-pillow-ranunculus-anemone-protea-vintage.webp',
      alt: 'Vintage floral pillow with ranunculus, anemone, and protea',
      title: 'Vintage Floral Throw Pillow with Ranunculus, Anemone & Protea' 
    },
    {
      src: '/images/ranunculus-anemone-protea-vintage-sofa.webp',
      alt: 'Vintage floral pillow on gray sofa',
      title: 'Ranunculus, Anemone & Protea Vintage Pillow on Sofa'
    },
    {
      src: '/images/ranunculus-anemone-protea-vintage-closeup.webp',
      alt: 'Close-up of ranunculus, anemone, and protea design',
      title: 'Ranunculus, Anemone & Protea Vintage Cushion'
    }
  ],
  description: 'Floral throw pillow blending timeless vintage florals with modern fine art design. Featuring ranunculus, anemone, hellebore, and protea, this decorative cushion is painted with hyper-detailed textures and accented by minimal abstract watercolor shapes. The muted palette of blush pink, terracotta, deep green, golden beige, and pearl gray strikes a perfect balance between vintage charm and modern sophistication. Styled for Pinterest-ready interiors, this seamless luxury pillow is ideal for premium sofas, designer fabrics, or high-end bedroom styling. Crafted in ultra 8K quality for gallery-grade detail, it offers elegance, harmony, and timeless appeal to any living space.',
  shortDescription: 'Floral throw pillow featuring ranunculus, anemone, hellebore, and protea in a modern vintage design.',
  specifications: generateProductSpecifications(),
  externalUrl: 'https://store.flowersluxe.com/products/79648935-ranunculus-anemone-hellebore-protea-modern-vintage-throw-pillow',
  metaTitle: 'Floral Throw Pillow – Ranunculus Anemone Hellebore Protea Vintage',
  metaDescription: 'Floral throw pillow featuring ranunculus, anemone, hellebore, and protea in a modern vintage floral design.',
  keywords: [
    'floral throw pillow',
    'vintage throw pillow',
    'modern floral pillow',
    'ranunculus pillow',
    'anemone pillow',
    'protea pillow',
    'decorative cushion'
  ],
  dateAdded: '2025-09-01',
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
