"use client"
import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ChevronRight, Star, ExternalLink } from 'lucide-react'
import ProductCard from '@/components/ProductCard'
import FeatureBadge from '@/components/FeatureBadge'
import CategoryIcon from '@/components/CategoryIcon'
import { 
  getProductBySlug,
  getProductById,
  getAllProducts, 
  getFeaturedProducts, 
  getNewProducts, 
  getCustomProducts,
  getDiscountedProducts,
  type Product
} from '@/utils/products'

// Blog post type definition
type BlogPost = {
  title: string;
  excerpt: string;
  slug: string;
  imageSrc: string;
  date: string;
  readTime: string;
  category: string;
  featured?: boolean;
}

export default function HomePage() {
  // Get the specific products by ID for the Featured Products section
  const customCatPillow = getProductById(1);
  const customCatMug = getProductById(2);
  const tulipThrowPillow = getProductById(29);
  const catDadMug = getProductById(34);
  
  // Combine into featured products array
  const featuredProducts = [
    customCatPillow,
    customCatMug, 
    tulipThrowPillow,
    catDadMug
  ].filter(Boolean) as Product[];

  // Mock blog posts for the From Our Blog section
  const blogPosts: BlogPost[] = [
    { 
      title: 'Top 4 Custom Cat Gifts for Cat Lovers - Personalized & Unique Ideas for 2025',
      excerpt: 'Discover the purr-fect personalized gifts for cat lovers! Explore unique custom cat pillows, mugs, stickers, and tote bags to celebrate their furry friends in style for 2025.',
      slug: 'custom-cat-gifts-for-cat-lovers',
      imageSrc: '/images/blog/top-4-custom-cat-gifts-for-cat-lovers-custom-cat-pillow-and-mug-sticker-tote-bag-ersonalized-&-unique-ideas.webp',
      date: 'May 15, 2025',
      readTime: '5 min read',
      category: 'Gift Ideas', 
      featured: true
    },
    { 
      title: 'Cat Dad Mug - Unique Personalized Gift for Cat‑Loving Dads',
      excerpt: 'Celebrate the bond between you and your feline friend with our personalized Cat Dad Mug! Featuring a touching \'fist bump\' design between a dad and a cat, along with your cat\'s name, this mug is the perfect custom gift for any proud cat dad.',
      slug: 'cat-dad-mug-unique-personalized-gift-for-cat-loving-dads',
      imageSrc: '/images/blog/cat-dad-mug-unique-personalized-gift-for-cat-loving-dads.webp',
      date: 'May 15, 2025',
      readTime: '5 min read',
      category: 'Gift Ideas', 
    },
    { 
      title: 'What Flowers Are Safe for Cats? 10 Gorgeous Pet-Friendly Picks Youll Love',
      excerpt: 'Keep your feline friends safe while enjoying beautiful flowers. Discover our list of cat-safe flowers that bring beauty to your home without endangering your pets.',
      slug: 'what-flowers-are-safe-for-cats',
      imageSrc: '/images/blog/what-flowers-are-safe-for-cats.webp',
      date: 'May 15, 2025',
      readTime: '5 min read',
      category: 'Gardening', 
    },
  ];

  // Performance optimization: Load hero image based on device width
  const [heroImage, setHeroImage] = useState('/images/flowers-luxe-hero-image-desktop.webp');
  
  useEffect(() => {
    // Check if window exists (client-side only)
    if (typeof window !== 'undefined') {
      // Set hero image based on screen width
      const updateHeroImage = () => {
        setHeroImage(
          window.innerWidth < 768 
            ? '/images/flowers-luxe-hero-image-mobile.webp' 
            : '/images/flowers-luxe-hero-image-desktop.webp'
        );
      };
      
      // Set initial image
      updateHeroImage();
      
      // Update on resize
      window.addEventListener('resize', updateHeroImage);
      
      // Cleanup
      return () => window.removeEventListener('resize', updateHeroImage);
    }
  }, []);

  // Categories data for the shop categories section
  const categories = [
    { 
      name: 'Throw Pillows', 
      icon: 'pillow',
      description: 'Premium quality pillows with beautiful floral designs',
      link: '/shop/category/throw-pillows'
    },
    { 
      name: 'Art Prints', 
      icon: 'art',
      description: 'Wall art featuring our unique floral illustrations',
      link: '/shop/category/art'
    },
    { 
      name: 'Mugs', 
      icon: 'mug',
      description: 'Start your day with a beautiful floral mug',
      link: '/shop/category/mugs'
    },
    { 
      name: 'Stickers', 
      icon: 'sticker',
      description: 'Vibrant stickers to express your style',
      link: '/shop/category/stickers'
    }
  ];

  // Preload critical images to improve performance
  const preloadImages = () => {
    const imagesToPreload = [
      '/images/flowers-luxe-hero-image-mobile.webp',
      '/images/flowers-luxe-hero-image-desktop.webp',
      featuredProducts[0]?.imageSrc,
      blogPosts[0]?.imageSrc
    ];
    
    imagesToPreload.forEach(src => {
      if (src) {
        const img = new Image();
        img.src = src;
      }
    });
  };

  useEffect(() => {
    preloadImages();
  }, []);

  return (
    <>
      {/* Hero Section - Performance optimized */}
      <section className="relative h-[80vh] min-h-[600px] max-h-[800px] w-full overflow-hidden">
        {/* Hero Background */}
        <div className="absolute inset-0">
          <Image
            src={heroImage}
            alt="FlowersLuxe - Beautiful floral designs on premium products"
            fill
            priority
            sizes="100vw"
            className="object-cover"
            loading="eager"
            placeholder="blur"
            blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJyZ2JhKDI0NSwgMjQyLCAyMzgsIDAuOCkiPjwvc3ZnPg=="
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/10" />
        </div>
        
        {/* Hero Content */}
        <div className="container-custom relative h-full flex flex-col justify-center items-center text-center text-white">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-cormorant text-4xl md:text-6xl lg:text-7xl font-bold mb-4 max-w-3xl"
          >
            Beautiful Floral Designs on Premium Products
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl"
          >
            Discover our collection of unique floral artwork on high-quality home decor, accessories, and personalized gifts
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link href="/shop" className="btn-primary-light">
              Shop Collection
            </Link>
            <Link href="/custom" className="btn-outline-light">
              Custom Designs
            </Link>
          </motion.div>
        </div>
      </section>
      
      {/* Featured Products Section */}
      <section className="py-16 md:py-24 bg-surface-muted">
        <div className="container-custom">
          <div className="flex flex-col sm:flex-row justify-between items-center mb-12">
            <div>
              <h2 className="font-cormorant text-3xl md:text-4xl font-bold mb-2">
                Featured Products
              </h2>
              <p className="text-gray-600">
                Explore our most popular designs and custom items
              </p>
            </div>
            <Link 
              href="/shop" 
              className="mt-4 sm:mt-0 inline-flex items-center gap-1 text-primary hover:text-primary-dark font-medium"
            >
              <span>View all products</span>
              <ChevronRight size={16} />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard 
                key={product.id} 
                product={product} 
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Categories Section */}
      <section className="py-16 md:py-24">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="font-cormorant text-3xl md:text-4xl font-bold mb-3">
              Shop by Category
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover our beautiful floral designs across a range of high-quality products
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category, index) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="mb-4 text-primary">
                  <CategoryIcon type={category.icon} size={48} />
                </div>
                <h3 className="font-cormorant text-xl font-bold mb-2">{category.name}</h3>
                <p className="text-gray-600 text-sm mb-4">{category.description}</p>
                <Link 
                  href={category.link}
                  className="inline-flex items-center gap-1 text-primary hover:text-primary-dark font-medium"
                >
                  <span>Shop now</span>
                  <ChevronRight size={16} />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Custom Products Feature */}
      <section className="py-16 md:py-24 bg-surface-muted relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute w-96 h-96 -top-48 -right-48 bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute w-64 h-64 bottom-0 left-1/4 bg-primary/5 rounded-full blur-2xl" />
          <div className="subtle-pattern absolute inset-0 opacity-30" />
        </div>
        
        <div className="container-custom relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="bg-primary/10 text-primary text-sm font-medium px-4 py-1.5 rounded-full inline-block mb-4">
                Personalized Items
              </span>
              <h2 className="font-cormorant text-3xl md:text-4xl font-bold mb-4">
                Create Your Custom Design
              </h2>
              <p className="text-gray-600 mb-6">
                Our custom products make perfect gifts for pet lovers, plant enthusiasts, or anyone who wants something truly unique. Add names, special messages, or custom text to create a one-of-a-kind item.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <div className="text-primary mt-1">
                    <Star size={20} />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Personalized Details</h3>
                    <p className="text-gray-600 text-sm">Add names, dates, or special messages to make it truly yours</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="text-primary mt-1">
                    <Star size={20} />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Premium Quality</h3>
                    <p className="text-gray-600 text-sm">Enjoy the same high-quality materials as our standard products</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="text-primary mt-1">
                    <Star size={20} />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Perfect Gifts</h3>
                    <p className="text-gray-600 text-sm">Create meaningful presents for loved ones and special occasions</p>
                  </div>
                </div>
              </div>
              
              <Link href="/shop?category=Custom Items" className="btn-primary">
                Explore Custom Items
              </Link>
            </div>
            
            <div className="relative">
              <div className="aspect-[4/3] rounded-xl overflow-hidden shadow-elevated">
                <Image
                  src="/images/custom-cat-products-showcase.webp"
                  alt="Custom products showcase"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              
              {/* Floating badges */}
              <div className="absolute -top-6 -right-6 bg-white rounded-lg p-3 shadow-md border border-gray-100">
                <FeatureBadge type="personalized" />
              </div>
              
              <div className="absolute -bottom-6 -left-6 bg-white rounded-lg p-3 shadow-md border border-gray-100">
                <FeatureBadge type="highQuality" />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Blog Section */}
      <section className="py-16 md:py-24">
        <div className="container-custom">
          <div className="flex flex-col sm:flex-row justify-between items-center mb-12">
            <div>
              <h2 className="font-cormorant text-3xl md:text-4xl font-bold mb-2">
                From Our Blog
              </h2>
              <p className="text-gray-600">
                Tips, inspiration, and insights from the world of flowers and design
              </p>
            </div>
            <Link 
              href="/blog" 
              className="mt-4 sm:mt-0 inline-flex items-center gap-1 text-primary hover:text-primary-dark font-medium"
            >
              <span>View all posts</span>
              <ChevronRight size={16} />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {blogPosts.map((post, index) => (
              <motion.article
                key={post.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                <Link href={`/blog/${post.slug}`} className="block relative aspect-[16/9]">
                  <Image
                    src={post.imageSrc}
                    alt={post.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    loading={index === 0 ? "eager" : "lazy"}
                  />
                </Link>
                
                <div className="p-6">
                  <span className="inline-block bg-primary/10 text-primary text-xs font-medium px-2 py-1 rounded-full mb-3">
                    {post.category}
                  </span>
                  
                  <h3 className="font-cormorant text-xl font-bold mb-3 line-clamp-2">
                    <Link href={`/blog/${post.slug}`} className="hover:text-primary">
                      {post.title}
                    </Link>
                  </h3>
                  
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-gray-500 text-sm">{post.date}</span>
                    <Link 
                      href={`/blog/${post.slug}`} 
                      className="inline-flex items-center gap-1 text-primary hover:text-primary-dark text-sm font-medium"
                    >
                      <span>Read more</span>
                      <ChevronRight size={14} />
                    </Link>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
      
      {/* Newsletter Section */}
      <section className="py-16 md:py-24 bg-surface-muted">
        <div className="container-custom">
          <div className="bg-white rounded-2xl shadow-elevated border border-border p-8 md:p-12">
            <div className="max-w-3xl mx-auto text-center">
              <span className="bg-primary/10 text-primary text-sm font-medium px-4 py-1.5 rounded-full inline-block mb-4">
                Join Our Community
              </span>
              <h2 className="font-cormorant text-3xl md:text-4xl font-bold mb-4">
                Subscribe to Our Newsletter
              </h2>
              <p className="text-gray-600 mb-8">
                Stay updated with our latest products, exclusive offers, and floral inspiration delivered straight to your inbox.
              </p>
              
              <form className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="flex-grow px-4 py-3 rounded-md border border-border focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                  required
                />
                <button
                  type="submit"
                  className="bg-primary hover:bg-primary-dark text-white font-medium py-3 px-6 rounded-lg transition-colors whitespace-nowrap"
                >
                  Subscribe
                </button>
              </form>
              
              <p className="text-sm text-gray-500 mt-4">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Trust Badges Section */}
      <section className="py-12">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-primary mb-3 flex justify-center">
                <svg width="36" height="36" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="currentColor" />
                </svg>
              </div>
              <h3 className="font-medium mb-1">Premium Quality</h3>
              <p className="text-gray-600 text-sm">Carefully crafted products made to last</p>
            </div>
            
            <div>
              <div className="text-primary mb-3 flex justify-center">
                <svg width="36" height="36" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M7.5 12L10.5 15L16.5 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h3 className="font-medium mb-1">Secure Shopping</h3>
              <p className="text-gray-600 text-sm">Safe transactions & protected data</p>
            </div>
            
            <div>
              <div className="text-primary mb-3 flex justify-center">
                <svg width="36" height="36" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 12V3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M19.7942 7.5C19.7942 7.5 17.5 15 12 15C6.5 15 4.20577 7.5 4.20577 7.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M4.5 16.5C4.5 16.5 7.5 20.5 12 20.5C16.5 20.5 19.5 16.5 19.5 16.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h3 className="font-medium mb-1">Exclusive Designs</h3>
              <p className="text-gray-600 text-sm">Unique floral patterns you'll love</p>
            </div>
            
            <div>
              <div className="text-primary mb-3 flex justify-center">
                <svg width="36" height="36" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16 4H18C18.5304 4 19.0391 4.21071 19.4142 4.58579C19.7893 4.96086 20 5.46957 20 6V20C20 20.5304 19.7893 21.0391 19.4142 21.4142C19.0391 21.7893 18.5304 22 18 22H6C5.46957 22 4.96086 21.7893 4.58579 21.4142C4.21071 21.0391 4 20.5304 4 20V6C4 5.46957 4.21071 4.96086 4.58579 4.58579C4.96086 4.21071 5.46957 4 6 4H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M15 2H9C8.44772 2 8 2.44772 8 3V5C8 5.55228 8.44772 6 9 6H15C15.5523 6 16 5.55228 16 5V3C16 2.44772 15.5523 2 15 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h3 className="font-medium mb-1">Dedicated Support</h3>
              <p className="text-gray-600 text-sm">Here for you every step of the way</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

// Helper function to get a product by ID
function getProductById(id: number): Product | undefined {
  const allProducts = getAllProducts();
  return allProducts.find(product => product.id === id);
}
