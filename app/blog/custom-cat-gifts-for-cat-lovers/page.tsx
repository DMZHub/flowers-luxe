"use client"
import React, { useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Head from 'next/head'
import { ArrowLeft, Calendar, Clock, Share2, Bookmark, Facebook, Twitter, Linkedin } from 'lucide-react'
import { useParams } from 'next/navigation'

export default function CatGiftsBlogPostPage() {
  const { slug } = useParams()
  const blogPost = {
    title: 'Top 4 Custom Cat Gifts for Cat Lovers - Personalized & Unique Ideas for 2025',
    excerpt: 'Discover the purr-fect personalized gifts for cat lovers! Explore unique custom cat pillows, mugs, stickers, and tote bags to celebrate their furry friends in style for 2025.',
    content: `
      <p>Cat lovers don't just love their cats—they adore them, celebrate them, and want to see them in every part of their daily life. Whether it's a thoughtful gift for a fellow feline fanatic or a keepsake for your own furry friend, custom cat gifts make the bond between human and kitty even more special. Here are the top 4 personalized cat gift ideas for 2025 that are stylish, meaningful, and completely unique.</p>
  
      <h2 id="custom-cat-pillow">Custom Cat Pillow: Cozy Up with a Personalized Touch</h2>
      <div class="relative rounded-lg overflow-hidden my-6">
        <Link href="https://flowers-luxe.pages.dev/custom/custom-cat-pillow-unique-cat-gift">
          <Image
            src="/images/products/throw-pillows/custom-cat-pillow-unique-cat-gift.webp"
            alt="Custom cat pillow with personalized name - unique gift for cat lovers"
            width={800}
            height={500}
            className="w-full object-cover rounded-lg"
          />
        </Link>
      </div>
      
      <p>Celebrate your bond with a one-of-a-kind <strong>custom cat pillow</strong>. Featuring a bold fist bump design personalized with your cat's name, these pillows add warmth and attitude to any room.</p>
      
      <p><strong>Why You'll Love It:</strong></p>
      <ul>
        <li>Personalized with your cat's name</li>
        <li>Textured Poly "Twill" pillow cover with concealed zipper</li>
        <li>Synthetic insert included for comfort</li>
        <li>Machine washable and handcrafted in the USA</li>
        <li>Makes an unforgettable gift for cat lovers or a cozy tribute to a beloved pet</li>
      </ul>
      
      <div class="my-6">
        <Link href="https://flowers-luxe.pages.dev/custom/custom-cat-pillow-unique-cat-gift" className="inline-flex items-center bg-primary hover:bg-primary-dark text-white font-medium py-3 px-6 rounded-lg transition-colors">
          Submit Your Cat's Name to Order
        </Link>
      </div>
  
      <h2 id="custom-cat-mug">Custom Cat Mug: Start Mornings With Pawsitive Vibes</h2>
      <div class="relative rounded-lg overflow-hidden my-6">
        <Link href="https://flowersluxe.com/custom/custom-cat-mug-personalized-mug-for-cat-lovers">
          <Image
            src="/images/products/mugs/custom-cat-mug-personalized-mug-for-cat-lovers.webp"
            alt="Custom cat mug with personalized name - unique gift for cat lovers"
            width={800}
            height={500}
            className="w-full object-cover rounded-lg"
          />
        </Link>
      </div>
      
      <p>This <strong>personalized cat mug</strong> features the same iconic fist bump design, making each sip a sweet reminder of your feline companion. Whether it's for coffee, tea, or cocoa, this is a daily dose of cat love.</p>
      
      <p><strong>Key Features:</strong></p>
      <ul>
        <li>Printed with your cat's name</li>
        <li>11oz premium ceramic mug</li>
        <li>Microwave and top-rack dishwasher safe</li>
        <li>Gloss finish that won't fade</li>
        <li>Designed and vacuum-form printed in the USA</li>
      </ul>
      
      <div class="my-6">
        <Link href="https://flowersluxe.com/custom/custom-cat-mug-personalized-mug-for-cat-lovers" className="inline-flex items-center bg-primary hover:bg-primary-dark text-white font-medium py-3 px-6 rounded-lg transition-colors">
          Submit Your Cat's Name to Order
        </Link>
      </div>
  
      <h2 id="custom-cat-stickers">Custom Cat Stickers: Add Your Cat to Everything</h2>
      <div class="relative rounded-lg overflow-hidden my-6">
        <Link href="https://flowersluxe.com/custom/custom-cat-stickers-personalized-gifts">
          <Image
            src="/images/products/stickers/custom-cat-stickers-personalized-gifts.webp"
            alt="Custom cat stickers with personalized name - unique gift for cat lovers"
            width={800}
            height={500}
            className="w-full object-cover rounded-lg"
          />
        </Link>
      </div>
      
      <p>Brighten up your gear with <strong>custom cat stickers</strong>! Featuring your cat's name and a bold floral fist bump, these stickers are waterproof and full of flair. A fun, low-cost gift that makes a big impression.</p>
      
      <p><strong>Why They're Awesome:</strong></p>
      <ul>
        <li>Individually kiss cut vinyl with semi-gloss finish</li>
        <li>Waterproof and perfect for laptops, bottles, and planners</li>
        <li>Printed with eco-friendly inks in the USA</li>
        <li>3x4 inch size with white border for a polished look</li>
      </ul>
      
      <div class="my-6">
        <Link href="https://flowersluxe.com/custom/custom-cat-stickers-personalized-gifts" className="inline-flex items-center bg-primary hover:bg-primary-dark text-white font-medium py-3 px-6 rounded-lg transition-colors">
          Submit Your Cat's Name to Order
        </Link>
      </div>
  
      <h2 id="custom-cat-tote-bag">Custom Cat Tote Bag: Purr-sonalized Style on the Go</h2>
      <div class="relative rounded-lg overflow-hidden my-6">
        <Link href="https://flowersluxe.com/custom/custom-cat-tote-bag-unique-tote-bag">
          <Image
            src="/images/products/tote-bags/custom-cat-tote-bag-unique-tote-bag.webp"
            alt="Custom cat tote bag with personalized name - unique gift for cat lovers"
            width={800}
            height={500}
            className="w-full object-cover rounded-lg"
          />
        </Link>
      </div>
      
      <p>Take your cat everywhere you go with this stylish and spacious <strong>custom cat tote bag</strong>. Great for shopping, the gym, or beach days, and made to last with eco-conscious materials.</p>
      
      <p><strong>Features:</strong></p>
      <ul>
        <li>Personalized floral fist bump design with your cat's name</li>
        <li>Durable poly-poplin outer & laminate-coated interior</li>
        <li>Comfortable cotton handles</li>
        <li>Roomy enough for groceries, books, or weekend gear</li>
        <li>Machine washable and reusable</li>
      </ul>
      
      <div class="my-6">
        <Link href="https://flowersluxe.com/custom/custom-cat-tote-bag-unique-tote-bag" className="inline-flex items-center bg-primary hover:bg-primary-dark text-white font-medium py-3 px-6 rounded-lg transition-colors">
          Submit Your Cat's Name to Order
        </Link>
      </div>
      
      <h2 id="how-it-works">How It Works:</h2>
      <ol>
        <li>Choose your favorite product from above.</li>
        <li>Submit your cat's name using the product link.</li>
        <li>We'll create the custom design and email you a link to purchase securely on our TeePublic store.</li>
      </ol>
      
      <h2 id="final-thoughts">Final Thoughts</h2>
      <p>These custom cat gifts are more than just cute items—they're daily reminders of love, loyalty, and your cat's unique personality. Whether it's for yourself or another cat lover in your life, our personalized products turn everyday items into meaningful keepsakes.</p>
    `,
    imageSrc: '/images/blog/top-4-custom-cat-gifts-for-cat-lovers-custom-cat-pillow-and-mug-sticker-tote-bag-ersonalized-&-unique-ideas.webp',
    date: 'May 15, 2025',
    readTime: '6 min read',
    category: 'Gift Ideas',
    author: {
      name: 'Ryan John',
      role: 'Blogger',
      avatarSrc: '/author/Ryan-John.jpg',
    },
  };

  // Generate schema directly in the component
  const blogPostSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://flowersluxe.com/blog/${slug}`,
    },
    "headline": blogPost.title,
    "description": blogPost.excerpt,
    "image": `https://flowersluxe.com/${blogPost.imageSrc}`,
    "author": {
      "@type": "Person",
      "name": blogPost.author.name,
      "jobTitle": blogPost.author.role,
    },
    "publisher": {
      "@type": "Organization",
      "name": "FlowersLuxe",
      "logo": {
        "@type": "ImageObject",
        "url": "https://flowersluxe.com/public/images/flowersluxe-logo.png",
        "width": "112",
        "height": "112"
      }
    },
    "datePublished": new Date(blogPost.date).toISOString(),
    "dateModified": new Date(blogPost.date).toISOString(),
    "articleSection": blogPost.category,
    "timeRequired": "PT6M",
    "keywords": "custom cat gifts, personalized cat gifts, cat lover gifts, custom cat pillow, custom cat mug, custom cat stickers, custom cat tote bag, cat merchandise, unique cat gifts, personalized pet gifts",
    "articleBody": blogPost.excerpt,
    "speakable": {
      "@type": "SpeakableSpecification",
      "cssSelector": [".article-title", ".article-summary"]
    }
  };

  // Product schema for the items
  const productSchemas = [
    {
      "@context": "https://schema.org/",
      "@type": "Product",
      "name": "Custom Cat Pillow",
      "image": "https://flowersluxe.com/images/products/throw-pillows/custom-cat-pillow-unique-cat-gift.webp",
      "description": "Personalized cat pillow featuring a bold fist bump design with your cat's name",
      "brand": {
        "@type": "Brand",
        "name": "FlowersLuxe"
      },
      "offers": {
        "@type": "Offer",
        "url": "https://flowers-luxe.pages.dev/custom/custom-cat-pillow-unique-cat-gift",
        "priceCurrency": "USD",
        "availability": "https://schema.org/InStock"
      }
    },
    {
      "@context": "https://schema.org/",
      "@type": "Product",
      "name": "Custom Cat Mug",
      "image": "https://flowersluxe.com/images/products/mugs/custom-cat-mug-personalized-mug-for-cat-lovers.webp",
      "description": "Personalized cat mug with your cat's name and iconic fist bump design",
      "brand": {
        "@type": "Brand",
        "name": "FlowersLuxe"
      },
      "offers": {
        "@type": "Offer",
        "url": "https://flowersluxe.com/custom/custom-cat-mug-personalized-mug-for-cat-lovers",
        "priceCurrency": "USD",
        "availability": "https://schema.org/InStock"
      }
    },
    {
      "@context": "https://schema.org/",
      "@type": "Product",
      "name": "Custom Cat Stickers",
      "image": "https://flowersluxe.com/images/products/stickers/custom-cat-stickers-personalized-gifts.webp",
      "description": "Waterproof custom cat stickers featuring your cat's name and floral fist bump design",
      "brand": {
        "@type": "Brand",
        "name": "FlowersLuxe"
      },
      "offers": {
        "@type": "Offer",
        "url": "https://flowersluxe.com/custom/custom-cat-stickers-personalized-gifts",
        "priceCurrency": "USD",
        "availability": "https://schema.org/InStock"
      }
    },
    {
      "@context": "https://schema.org/",
      "@type": "Product",
      "name": "Custom Cat Tote Bag",
      "image": "https://flowersluxe.com/images/products/tote-bags/custom-cat-tote-bag-unique-tote-bag.webp",
      "description": "Spacious custom cat tote bag with personalized floral fist bump design and your cat's name",
      "brand": {
        "@type": "Brand",
        "name": "FlowersLuxe"
      },
      "offers": {
        "@type": "Offer",
        "url": "https://flowersluxe.com/custom/custom-cat-tote-bag-unique-tote-bag",
        "priceCurrency": "USD",
        "availability": "https://schema.org/InStock"
      }
    }
  ];

  // Add smooth scrolling for anchor links
  useEffect(() => {
    // Fix for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', (e) => {
        e.preventDefault();
        const element = e.currentTarget as HTMLAnchorElement;
        const targetId = element.getAttribute('href')?.substring(1);
        
        if (targetId) {
          const targetElement = document.getElementById(targetId);
          
          if (targetElement) {
            window.scrollTo({
              top: targetElement.offsetTop - 100, // Offset for fixed headers
              behavior: 'smooth'
            });
            
            // Update URL without refresh
            history.pushState(undefined, '', `#${targetId}`);
          }
        }
      });
    });
  }, []);

  return (
    <>
      <Head>
        <title>{blogPost.title} | FlowersLuxe</title>
        <meta name="description" content={blogPost.excerpt} />
        <meta property="og:title" content={blogPost.title} />
        <meta property="og:description" content={blogPost.excerpt} />
        <meta property="og:image" content={`https://flowersluxe.com${blogPost.imageSrc}`} />
        <meta property="og:url" content={`https://flowersluxe.com/blog/${slug}`} />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href={`https://flowersluxe.com/blog/${slug}`} />
      </Head>
      
      {/* Add schema markup directly */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostSchema) }}
      />
      
      {/* Add product schema markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchemas) }}
      />
      
      {/* Blog Post Header */}
      <section className="bg-surface-muted py-16 md:py-24 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute w-96 h-96 -top-48 -right-48 bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute w-64 h-64 bottom-0 left-1/4 bg-primary/5 rounded-full blur-2xl" />
          <div className="subtle-pattern absolute inset-0 opacity-30" />
        </div>

        <div className="container-custom relative">
          <div className="max-w-3xl mx-auto">
            <Link href="/blog" className="inline-flex items-center text-gray-500 hover:text-primary mb-6">
              <ArrowLeft size={16} className="mr-2" />
              <span>Back to blog</span>
            </Link>
            
            <div className="flex items-center gap-3 mb-4">
              <span className="bg-primary/10 text-primary text-sm font-medium px-3 py-1 rounded-full">
                {blogPost.category}
              </span>
            </div>
            
            <h1 className="font-cormorant text-3xl md:text-4xl lg:text-5xl font-bold mb-6 article-title">
              {blogPost.title}
            </h1>
            <p className="text-lg text-gray-700 mb-6 article-summary">
              {blogPost.excerpt}
            </p>
            
            <div className="flex items-center gap-4 text-sm text-gray-600 mb-8">
              <div className="flex items-center gap-1">
                <Calendar size={14} />
                <span>{blogPost.date}</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock size={14} />
                <span>{blogPost.readTime}</span>
              </div>
            </div>
            
            {/* Author info */}
            <div className="flex items-center gap-4 mb-8">
              <div className="relative w-12 h-12 rounded-full overflow-hidden">
                <Image
                  src={blogPost.author.avatarSrc}
                  alt={blogPost.author.name}
                  fill
                  className="object-cover"
                  sizes="48px"
                /> 
              </div>
              <div>
                <h3 className="font-medium text-gray-900">{blogPost.author.name}</h3>
                <p className="text-sm text-gray-500">{blogPost.author.role}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <div className="container-custom">
        <div className="relative h-64 md:h-96 -mt-10 mb-12 rounded-xl overflow-hidden shadow-md">
          <Image
            src={blogPost.imageSrc}
            alt={`Collection of custom cat gifts including pillows, mugs, stickers and tote bags - ${blogPost.title}`}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 1200px"
            priority
          />
        </div>
      </div>

      {/* Blog Content */}
      <section className="py-8 md:py-12">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-8">
              <article className="prose prose-lg max-w-none">
                <style jsx global>{`
                  .prose h2 {
                    font-size: 1.75rem !important;
                    margin-top: 2.5rem !important;
                    margin-bottom: 1rem !important;
                    font-weight: 700 !important;
                    font-family: var(--font-cormorant) !important;
                    color: #1a202c !important;
                    scroll-margin-top: 100px;
                  }
                  
                  .prose h3 {
                    scroll-margin-top: 100px;
                  }
                  
                  .prose p {
                    font-size: 1.125rem !important;
                    line-height: 1.75 !important;
                    margin-bottom: 1.5rem !important;
                  }
                  
                  .prose strong {
                    color: #1a202c !important;
                  }
                  
                  .prose ul {
                    margin-bottom: 1.5rem !important;
                  }
                  
                  .prose ol {
                    margin-bottom: 1.5rem !important;
                  }
                `}</style>
                <div dangerouslySetInnerHTML={{ __html: blogPost.content }} />
              </article>
              
              {/* Share */}
              <div className="mt-8 pt-6 border-t border-gray-100">
                <div className="flex items-center gap-4">
                  <span className="text-gray-700 font-medium">Share:</span>
                  <div className="flex gap-2">
                    <a 
                      href="#"
                      className="p-2 bg-gray-100 hover:bg-gray-200 rounded-full text-gray-700"
                      onClick={(e) => {
                        e.preventDefault();
                        window.open(
                          `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`,
                          'facebook-share',
                          'width=580,height=296'
                        );
                      }}
                    >
                      <Facebook size={18} />
                    </a>
                    <a 
                      href="#"
                      className="p-2 bg-gray-100 hover:bg-gray-200 rounded-full text-gray-700"
                      onClick={(e) => {
                        e.preventDefault();
                        window.open(
                          `https://twitter.com/intent/tweet?text=${encodeURIComponent(blogPost.title)}&url=${encodeURIComponent(window.location.href)}`,
                          'twitter-share',
                          'width=550,height=235'
                        );
                      }}
                    >
                      <Twitter size={18} />
                    </a>
                    <a 
                      href="#"
                      className="p-2 bg-gray-100 hover:bg-gray-200 rounded-full text-gray-700"
                      onClick={(e) => {
                        e.preventDefault();
                        window.open(
                          `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`,
                          'linkedin-share',
                          'width=750,height=600'
                        );
                      }}
                    >
                      <Linkedin size={18} />
                    </a>
                    <button 
                      className="p-2 bg-gray-100 hover:bg-gray-200 rounded-full text-gray-700"
                      onClick={() => {
                        navigator.clipboard.writeText(window.location.href);
                        alert('Link copied to clipboard!');
                      }}
                    >
                      <Share2 size={18} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Sidebar */}
            <div className="lg:col-span-4">
              <div className="sticky top-24">
                {/* Table of Contents */}
                <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm mb-8">
                  <h3 className="font-cormorant text-xl font-bold mb-4">Table of Contents</h3>
                  <nav aria-label="Article Table of Contents">
                    <ul className="space-y-2">
                      <li>
                        <a href="#custom-cat-pillow" className="text-gray-600 hover:text-primary">
                          <span>Custom Cat Pillow</span>
                        </a>
                      </li>
                      <li>
                        <a href="#custom-cat-mug" className="text-gray-600 hover:text-primary">
                          <span>Custom Cat Mug</span>
                        </a>
                      </li>
                      <li>
                        <a href="#custom-cat-stickers" className="text-gray-600 hover:text-primary">
                          <span>Custom Cat Stickers</span>
                        </a>
                      </li>
                      <li>
                        <a href="#custom-cat-tote-bag" className="text-gray-600 hover:text-primary">
                          <span>Custom Cat Tote Bag</span>
                        </a>
                      </li>
                      <li>
                        <a href="#how-it-works" className="text-gray-600 hover:text-primary">
                          <span>How It Works</span>
                        </a>
                      </li>
                      <li>
                        <a href="#final-thoughts" className="text-gray-600 hover:text-primary">
                          <span>Final Thoughts</span>
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>
                
                {/* Save for Later Option */}
                <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm mb-8">
                  <div className="flex items-center gap-3">
                    <Bookmark size={20} className="text-primary" />
                    <h3 className="font-medium">Save for later</h3>
                  </div>
                  <p className="text-sm text-gray-600 mt-2 mb-4">
                    Want to remember these gift ideas? Bookmark this page to come back to it later.
                  </p>
                  <button 
                    className="w-full py-2 px-4 bg-gray-100 hover:bg-gray-200 text-gray-800 rounded-lg font-medium transition-colors flex items-center justify-center gap-2"
                    onClick={() => {
                      if (window.sidebar && window.sidebar.addPanel) { 
                        window.sidebar.addPanel(document.title, window.location.href, ''); 
                      } else if (window.external && 'AddFavorite' in window.external) { 
                        window.external.AddFavorite(window.location.href, document.title);
                      } else { 
                        alert('Press ' + (navigator.userAgent.toLowerCase().indexOf('mac') != - 1 ? 'Command/Cmd' : 'CTRL') + ' + D to bookmark this page.');
                      }
                    }}
                  >
                    <Bookmark size={16} />
                    <span>Bookmark Page</span>
                  </button>
                </div>
                
                {/* Related Products */}
                <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
                  <h3 className="font-cormorant text-xl font-bold mb-4">Featured Products</h3>
                  <div className="space-y-4">
                    <Link href="https://flowers-luxe.pages.dev/custom/custom-cat-pillow-unique-cat-gift" className="flex items-center gap-3 group">
                      <div className="w-16 h-16 rounded-md overflow-hidden flex-shrink-0">
                        <Image
                          src="/images/products/throw-pillows/custom-cat-pillow-unique-cat-gift.webp"
                          alt="Custom Cat Pillow"
                          width={64}
                          height={64}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900 group-hover:text-primary transition-colors">Custom Cat Pillow</h4>
                        <p className="text-sm text-gray-500">Personalized with your cat's name</p>
                      </div>
                    </Link>
                    
                    <Link href="https://flowersluxe.com/custom/custom-cat-mug-personalized-mug-for-cat-lovers" className="flex items-center gap-3 group">
                      <div className="w-16 h-16 rounded-md overflow-hidden flex-shrink-0">
                        <Image
                          src="/images/products/mugs/custom-cat-mug-personalized-mug-for-cat-lovers.webp"
                          alt="Custom Cat Mug"
                          width={64}
                          height={64}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900 group-hover:text-primary transition-colors">Custom Cat Mug</h4>
                        <p className="text-sm text-gray-500">Start mornings with pawsitive vibes</p>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
