"use client"
import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ChevronRight, ArrowRight, CheckCircle } from 'lucide-react'
import ProductCard from '@/components/ProductCard'
import BlogCard from '@/components/BlogCard'
import TestimonialSlider from '@/components/TestimonialSlider'
import { 
  getAllProducts, 
  getProductBySlug,
  getFeaturedProducts,
  categoryMappings, 
  type Product 
} from '@/utils/products'

// Get the specific products by ID for featured section
const getFeaturedProductsById = (ids: number[]): Product[] => {
  const allProducts = getAllProducts();
  return ids
    .map(id => allProducts.find(product => product.id === id))
    .filter((product): product is Product => product !== undefined);
};

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
};

// Featured blog posts data
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
    excerpt: 'Celebrate the bond between you and your feline friend with our personalized Cat Dad Mug! Featuring a touching "fist bump" design between a dad and a cat, along with your cat's name, this mug is the perfect custom gift for any proud cat dad.',
    slug: 'cat-dad-mug-unique-personalized-gift-for-cat-loving-dads',
    imageSrc: '/images/blog/cat-dad-mug-unique-personalized-gift-for-cat-loving-dads.webp',
    date: 'May 15, 2025',
    readTime: '5 min read',
    category: 'Gift Ideas',
  },
  { 
    title: 'What Flowers Are Safe for Cats? 10 Gorgeous Pet-Friendly Picks Youll Love',
    excerpt: 'Discover which beautiful blooms are completely safe for your feline friends. Our guide to cat-friendly flowers ensures both your decor and your kitty stay happy and healthy.',
    slug: 'what-flowers-are-safe-for-cats',
    imageSrc: '/images/blog/what-flowers-are-safe-for-cats.webp',
    date: 'May 12, 2025',
    readTime: '7 min read',
    category: 'Gardening',
  },
];

export default function Home() {
  // Get specific featured products by ID (1, 2, 29, 34)
  const featuredProducts = getFeaturedProductsById([1, 2, 29, 34]);
  
  // State for the newsletter form
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  
  // Handle newsletter submission
  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the email to your newsletter service
    console.log('Subscribing email:', email);
    setSubmitted(true);
    // Reset the form after 3 seconds
    setTimeout(() => {
      setEmail('');
      setSubmitted(false);
    }, 3000);
  };

  // For performance optimization - only load images when visible
  const [isImagesLoaded, setIsImagesLoaded] = useState(false);
  
  useEffect(() => {
    // Set images to load after component mounts
    setIsImagesLoaded(true);
    
    // Preload important images for faster LCP
    const preloadImages = () => {
      const imageUrls = [
        '/images/flowers-luxe-hero-image-mobile.webp',
        '/images/flowers-luxe-hero-image.webp'
      ];
      
      imageUrls.forEach(src => {
        const img = new Image();
        img.src = src;
      });
    };
    
    preloadImages();
  }, []);

  return (
    <>
      {/* Hero Section - Optimized for performance */}
      <section className="relative h-[80vh] min-h-[600px] flex items-center">
        {/* Hero image with responsive handling for better LCP */}
        <div className="absolute inset-0 z-0">
          {isImagesLoaded && (
            <>
              {/* Mobile image */}
              <div className="block md:hidden h-full">
                <Image
                  src="/images/flowers-luxe-hero-image-mobile.webp"
                  alt="FlowersLuxe - Beautiful floral designs on premium products"
                  fill
                  priority={true}
                  className="object-cover"
                  sizes="100vw"
                  // Display a placeholder color until image loads
                  style={{ backgroundColor: '#f8f8f8' }}
                />
              </div>
              
              {/* Desktop image */}
              <div className="hidden md:block h-full">
                <Image
                  src="/images/flowers-luxe-hero-image.webp"
                  alt="FlowersLuxe - Beautiful floral designs on premium products"
                  fill
                  priority={true}
                  className="object-cover"
                  sizes="100vw"
                  // Display a placeholder color until image loads
                  style={{ backgroundColor: '#f8f8f8' }}
                />
              </div>
            </>
          )}
          {/* Simple colored background shown before images load for perceived performance */}
          {!isImagesLoaded && (
            <div className="absolute inset-0 bg-gradient-to-br from-pink-50 to-gray-100"></div>
          )}
          <div className="absolute inset-0 bg-black/30" />
        </div>
        
        <div className="container-custom relative z-10">
          <motion.div 
            className="max-w-2xl text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h1 className="font-cormorant text-4xl md:text-6xl font-bold mb-4">
              Beautiful Floral Designs on Premium Products
            </h1>
            <p className="text-lg md:text-xl mb-8 text-white/90">
              Discover our unique collection of floral-inspired goods for your home, office, or as the perfect gift.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/shop" className="btn-primary">
                Shop Collection
              </Link>
              <Link href="/custom" className="btn-outline-light">
                Customize Your Own
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* Featured Products Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
            <div>
              <span className="bg-primary/10 text-primary text-sm font-medium px-4 py-1.5 rounded-full inline-block mb-3">
                Featured Products
              </span>
              <h2 className="font-cormorant text-3xl md:text-4xl font-bold">
                Our Most Popular Items
              </h2>
            </div>
            <Link href="/shop" className="group flex items-center text-primary font-medium hover:underline">
              <span>View all products</span>
              <ChevronRight size={18} className="ml-1 group-hover:ml-2 transition-all" />
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
      <section className="py-16 md:py-24 bg-surface-muted">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="bg-primary/10 text-primary text-sm font-medium px-4 py-1.5 rounded-full inline-block mb-3">
              Product Categories
            </span>
            <h2 className="font-cormorant text-3xl md:text-4xl font-bold mb-4">
              Shop by Category
            </h2>
            <p className="text-gray-600">
              Browse our diverse collection of floral-inspired products, from wall art to mugs and apparel.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {Object.entries(categoryMappings).slice(0, 8).map(([slug, category], index) => (
              <motion.div
                key={slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link href={`/shop/category/${slug}`} className="group block">
                  <div className="relative h-64 rounded-xl overflow-hidden">
                    <Image
                      src={`/images/categories/flower-${slug}.webp`}
                      alt={category}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                      sizes="(max-width: 768px) 50vw, 25vw"
                      // Only eagerly load the first few categories
                      loading={index < 4 ? "eager" : "lazy"}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <h3 className="font-cormorant text-2xl font-bold text-white">{category}</h3>
                      <div className="flex items-center mt-2 text-white">
                        <span className="text-sm font-medium">Shop now</span>
                        <ArrowRight size={16} className="ml-2 group-hover:ml-3 transition-all" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* From Our Blog Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
            <div>
              <span className="bg-primary/10 text-primary text-sm font-medium px-4 py-1.5 rounded-full inline-block mb-3">
                From Our Blog
              </span>
              <h2 className="font-cormorant text-3xl md:text-4xl font-bold">
                Latest Articles
              </h2>
            </div>
            <Link href="/blog" className="group flex items-center text-primary font-medium hover:underline">
              <span>View all articles</span>
              <ChevronRight size={18} className="ml-1 group-hover:ml-2 transition-all" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {blogPosts.map((post, index) => (
              <motion.div
                key={post.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <BlogCard
                  title={post.title}
                  excerpt={post.excerpt}
                  slug={post.slug}
                  imageSrc={post.imageSrc}
                  date={post.date}
                  readTime={post.readTime}
                  category={post.category}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Customer Testimonials */}
      <section className="py-16 md:py-24 bg-surface-muted">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="bg-primary/10 text-primary text-sm font-medium px-4 py-1.5 rounded-full inline-block mb-3">
              Testimonials
            </span>
            <h2 className="font-cormorant text-3xl md:text-4xl font-bold mb-4">
              What Our Customers Say
            </h2>
            <p className="text-gray-600">
              Don't just take our word for it — see what our customers have to say about our products and service.
            </p>
          </div>
          
          {/* Testimonial Slider Component (you would need to implement this) */}
          <TestimonialSlider />
        </div>
      </section>
      
      {/* Newsletter Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container-custom">
          <div className="bg-surface-muted rounded-2xl shadow-sm border border-gray-100 p-8 md:p-12">
            <div className="max-w-3xl mx-auto text-center">
              <span className="bg-primary/10 text-primary text-sm font-medium px-4 py-1.5 rounded-full inline-block mb-3">
                Newsletter
              </span>
              <h2 className="font-cormorant text-3xl md:text-4xl font-bold mb-4">
                Subscribe for Updates
              </h2>
              <p className="text-gray-600 mb-8">
                Join our newsletter to receive updates on new products, special promotions, and floral inspiration.
              </p>
              
              {!submitted ? (
                <form 
                  onSubmit={handleNewsletterSubmit} 
                  className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto"
                >
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your email address"
                    className="flex-grow px-4 py-3 rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                    required
                  />
                  <button
                    type="submit"
                    className="bg-primary hover:bg-primary-dark text-white font-medium py-3 px-6 rounded-lg transition-colors"
                  >
                    Subscribe
                  </button>
                </form>
              ) : (
                <div className="bg-green-50 border border-green-100 rounded-lg p-6 max-w-lg mx-auto">
                  <CheckCircle size={32} className="text-green-500 mx-auto mb-2" />
                  <h3 className="text-xl font-medium mb-2">Thanks for subscribing!</h3>
                  <p className="text-gray-600">
                    We've added your email to our newsletter. Watch your inbox for upcoming promotions and updates.
                  </p>
                </div>
              )}
              
              <p className="text-xs text-gray-500 mt-4">
                By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-16 md:py-24 bg-surface-muted border-t border-gray-100">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm">
                <Image
                  src="/images/icons/shipping.svg"
                  alt="Fast Shipping"
                  width={32}
                  height={32}
                  loading="lazy"
                />
              </div>
              <h3 className="font-medium text-lg mb-2">Fast Shipping</h3>
              <p className="text-gray-600 text-sm">
                Quick delivery on all orders with tracking provided
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm">
                <Image
                  src="/images/icons/quality.svg"
                  alt="Premium Quality"
                  width={32}
                  height={32}
                  loading="lazy"
                />
              </div>
              <h3 className="font-medium text-lg mb-2">Premium Quality</h3>
              <p className="text-gray-600 text-sm">
                High-quality materials and printing for lasting beauty
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm">
                <Image
                  src="/images/icons/custom.svg"
                  alt="Custom Options"
                  width={32}
                  height={32}
                  loading="lazy"
                />
              </div>
              <h3 className="font-medium text-lg mb-2">Custom Options</h3>
              <p className="text-gray-600 text-sm">
                Personalize many items with names or special messages
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm">
                <Image
                  src="/images/icons/support.svg"
                  alt="Customer Support"
                  width={32}
                  height={32}
                  loading="lazy"
                />
              </div>
              <h3 className="font-medium text-lg mb-2">Customer Support</h3>
              <p className="text-gray-600 text-sm">
                Friendly support team available to answer your questions
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
