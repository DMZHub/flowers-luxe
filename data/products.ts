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
