"use client"
import React, { useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Head from 'next/head'
import { ArrowLeft, Calendar, Clock, Share2, /* Bookmark - Not used in new design */ Facebook, Twitter, Linkedin } from 'lucide-react'
import { useParams } from 'next/navigation'

export default function BlogPostPage() {
  const { slug } = useParams() // In a real app, you'd fetch blogPost based on slug

  // Content for the new blog post: "Top 4 Custom Cat Gifts for Cat Lovers"
  const blogPost = {
    title: 'Top 4 Custom Cat Gifts for Cat Lovers - Personalized & Unique Ideas for 2025',
    excerpt: 'Discover the purr-fect personalized gifts for cat lovers! Explore unique custom cat pillows, mugs, stickers, and tote bags to celebrate their furry friends in style for 2025.',
    content: `
      <p>Cat lovers don’t just love their cats—they adore them, celebrate them, and want to see them in every part of their daily life. Whether it’s a thoughtful gift for a fellow feline fanatic or a keepsake for your own furry friend, custom cat gifts make the bond between human and kitty even more special. Here are the top 4 personalized cat gift ideas for 2025 that are stylish, meaningful, and completely unique.</p>
  
      <h2 id="custom-cat-pillow">Custom Cat Pillow: Cozy Up with a Personalized Touch</h2>
      <div style="margin-bottom: 1rem;">
        <img src="/images/products/throw-pillows/custom-cat-pillow-unique-cat-gift.webp" alt="Custom cat pillow with fist bump design" style="width:100%; max-width:400px; margin: 0 auto; display:block; border-radius: 8px;" />
      </div>
      <p><strong>Product Page:</strong> <a href="/submit-order?product=custom-cat-pillow" style="color: #c026d3; text-decoration: underline;">Submit your cat’s name to order</a></p>
      <p>Celebrate your bond with a one-of-a-kind <strong>custom cat pillow</strong>. Featuring a bold fist bump design personalized with your cat’s name, these pillows add warmth and attitude to any room.</p>
      <p><strong>Why You’ll Love It:</strong></p>
      <ul>
        <li>Personalized with your cat’s name</li>
        <li>Textured Poly "Twill" pillow cover with concealed zipper</li>
        <li>Synthetic insert included for comfort</li>
        <li>Machine washable and handcrafted in the USA</li>
        <li>Makes an unforgettable gift for cat lovers or a cozy tribute to a beloved pet</li>
      </ul>
  
      <h2 id="custom-cat-mug">Custom Cat Mug: Start Mornings With Pawsitive Vibes</h2>
      <div style="margin-bottom: 1rem;">
        <img src="/images/products/mugs/custom-cat-mug-personalized-mug-for-cat-lovers.webp" alt="Custom cat mug with personalized name" style="width:100%; max-width:400px; margin: 0 auto; display:block; border-radius: 8px;" />
      </div>
      <p><strong>Product Page:</strong> <a href="/submit-order?product=custom-cat-mug" style="color: #c026d3; text-decoration: underline;">Submit your cat’s name to order</a></p>
      <p>This <strong>personalized cat mug</strong> features the same iconic fist bump design, making each sip a sweet reminder of your feline companion. Whether it’s for coffee, tea, or cocoa, this is a daily dose of cat love.</p>
      <p><strong>Key Features:</strong></p>
      <ul>
        <li>Printed with your cat’s name</li>
        <li>11oz premium ceramic mug</li>
        <li>Microwave and top-rack dishwasher safe</li>
        <li>Gloss finish that won’t fade</li>
        <li>Designed and vacuum-form printed in the USA</li>
      </ul>
  
      <h2 id="custom-cat-stickers">Custom Cat Stickers: Add Your Cat to Everything</h2>
      <div style="margin-bottom: 1rem;">
        <img src="/images/products/stickers/custom-cat-stickers-personalized-gifts.webp" alt="Custom cat stickers with floral fist bump design" style="width:100%; max-width:400px; margin: 0 auto; display:block; border-radius: 8px;" />
      </div>
      <p><strong>Product Page:</strong> <a href="/submit-order?product=custom-cat-stickers" style="color: #c026d3; text-decoration: underline;">Submit your cat’s name to order</a></p>
      <p>Brighten up your gear with <strong>custom cat stickers</strong>! Featuring your cat’s name and a bold floral fist bump, these stickers are waterproof and full of flair. A fun, low-cost gift that makes a big impression.</p>
      <p><strong>Why They're Awesome:</strong></p>
      <ul>
        <li>Individually kiss cut vinyl with semi-gloss finish</li>
        <li>Waterproof and perfect for laptops, bottles, and planners</li>
        <li>Printed with eco-friendly inks in the USA</li>
        <li>3x4 inch size with white border for a polished look</li>
      </ul>
  
      <h2 id="custom-cat-tote-bag">Custom Cat Tote Bag: Purr-sonalized Style on the Go</h2>
      <div style="margin-bottom: 1rem;">
        <img src="/images/products/tote-bags/custom-cat-tote-bag-unique-tote-bag.webp" alt="Custom cat tote bag with personalized design" style="width:100%; max-width:400px; margin: 0 auto; display:block; border-radius: 8px;" />
      </div>
      <p><strong>Product Page:</strong> <a href="/submit-order?product=custom-cat-tote-bag" style="color: #c026d3; text-decoration: underline;">Submit your cat’s name to order</a></p>
      <p>Take your cat everywhere you go with this stylish and spacious <strong>custom cat tote bag</strong>. Great for shopping, the gym, or beach days, and made to last with eco-conscious materials.</p>
      <p><strong>Features:</strong></p>
      <ul>
        <li>Personalized floral fist bump design with your cat’s name</li>
        <li>Durable poly-poplin outer & laminate-coated interior</li>
        <li>Comfortable cotton handles</li>
        <li>Roomy enough for groceries, books, or weekend gear</li>
        <li>Machine washable and reusable</li>
      </ul>

      <h2 id="how-it-works">How It Works:</h2>
      <ol>
        <li>Choose your favorite product from above.</li>
        <li>Submit your cat's name using the product link.</li>
        <li>We’ll create the custom design and email you a link to purchase securely on our T-Public store.</li>
      </ol>

      <h2 id="final-thoughts">Final Thoughts:</h2>
      <p>These custom cat gifts are more than just cute items—they’re daily reminders of love, loyalty, and your cat’s unique personality. Whether it’s for yourself or another cat lover in your life, our personalized products turn everyday items into meaningful keepsakes.</p>
      <p><strong>Ready to create your custom cat gift?</strong> <a href="/start-custom-order" style="color: #c026d3; text-decoration: underline; font-weight: bold;">Start Here</a></p>
    `,
    imageSrc: '/images/blog/top-4-custom-cat-gifts-for-cat-lovers-custom-cat-pillow-and-mug-sticker-tote-bag-ersonalized-&-unique-ideas.webp', // Main image for the blog post
    date: 'May 15, 2025', // Publication date
    readTime: '6 min read', // Estimated read time
    category: 'Gift Ideas', 
    author: {
      name:   'Ryan John',   // Example author
      role:  'Product Writer', // Example role
      avatarSrc: '/author/Ryan-John.jpg', // Example avatar path, ensure this image exists in public/author
    },
  };

  // Generate schema directly in the component
  const blogPostSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://flowersluxe.com/blog/${slug}`, // Assuming slug for this page is 'custom-cat-gifts-for-cat-lovers-2025'
    },
    "headline": blogPost.title,
    "description": blogPost.excerpt,
    "image": `https://flowersluxe.com${blogPost.imageSrc}`, // Main image for schema
    "author": {
      "@type": "Person",
      "name": blogPost.author.name,
      "jobTitle": blogPost.author.role,
      // "image": `https://flowersluxe.com${blogPost.author.avatarSrc}` // Optional: author image for schema
    },
    "publisher": {
      "@type": "Organization",
      "name": "FlowersLuxe", // Replace if site name is different
      "logo": {
        "@type": "ImageObject",
        "url": "https://flowersluxe.com/images/flowersluxe-logo.png", // Ensure this logo exists
        "width": "112",
        "height": "112"
      }
    },
    "datePublished": new Date(blogPost.date).toISOString(),
    "dateModified": new Date(blogPost.date).toISOString(), // Can be different if post is updated
    "articleSection": blogPost.category,
    "timeRequired": "PT6M", // ISO 8601 duration format for read time
    "keywords": "custom cat gifts, personalized cat gifts, cat lover gifts, unique cat gifts, cat pillow, cat mug, cat stickers, cat tote bag, 2025 gifts",
    "articleBody": blogPost.excerpt, // Using excerpt for simplicity, ideally full text or more comprehensive summary
    "speakable": {
      "@type": "SpeakableSpecification",
      "cssSelector": [".article-title", ".article-summary"] // CSS selectors for speakable content
    }
  };

  // Add smooth scrolling for anchor links
  useEffect(() => {
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
            history.pushState(undefined, '', `#${targetId}`);
          }
        }
      });
    });
  }, []);

  // Fallback if slug is not available during initial render or if blogPost isn't "loaded"
  // In a real app, you'd have loading states or fetch data in getServerSideProps/getStaticProps
  if (!slug || !blogPost) {
    return <div>Loading...</div>; // Or a proper loading component
  }

  const currentUrl = typeof window !== 'undefined' ? window.location.href : `https://flowersluxe.com/blog/${slug}`;

  return (
    <>
      <Head>
        <title>{`${blogPost.title} | FlowersLuxe`}</title>
        <meta name="description" content={blogPost.excerpt} />
        <meta property="og:title" content={blogPost.title} />
        <meta property="og:description" content={blogPost.excerpt} />
        <meta property="og:image" content={`https://flowersluxe.com${blogPost.imageSrc}`} />
        <meta property="og:url" content={currentUrl} />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href={currentUrl} />
      </Head>
      
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostSchema) }}
      />
      
      <section className="bg-surface-muted py-16 md:py-24 relative overflow-hidden">
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
            
            <div className="flex items-center gap-4 mb-8">
              <div className="relative w-12 h-12 rounded-full overflow-hidden">
                <Image
                  src={blogPost.author.avatarSrc} // Make sure this image is in public/author/feline-fiona.jpg
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

      <div className="container-custom">
        <div className="relative h-64 md:h-96 -mt-10 mb-12 rounded-xl overflow-hidden shadow-md">
          <Image
            src={blogPost.imageSrc}
            alt={`Featured image for ${blogPost.title} - a custom cat pillow`}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 1200px"
            priority
          />
        </div>
      </div>

      <section className="py-8 md:py-12">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-8">
              <article className="prose prose-lg max-w-none">
                <style jsx global>{`
                  .prose h2 {
                    font-size: 1.75rem !important; /* Approx 28px */
                    margin-top: 2.5rem !important; /* Approx 40px */
                    margin-bottom: 1rem !important; /* Approx 16px */
                    font-weight: 700 !important;
                    font-family: var(--font-cormorant), serif !important; /* Ensure cormorant font is loaded */
                    color: #1a202c !important; /* tailwind gray-900 */
                    scroll-margin-top: 100px; /* For anchor link offset */
                  }
                  
                  .prose h3 {
                    font-size: 1.5rem !important; /* Approx 24px */
                    margin-top: 2rem !important;
                    margin-bottom: 0.75rem !important;
                    font-weight: 600 !important;
                    font-family: var(--font-cormorant), serif !important;
                    color: #2d3748 !important; /* tailwind gray-800 */
                    scroll-margin-top: 100px;
                  }
                  
                  .prose p, .prose li {
                    font-size: 1.125rem !important; /* Approx 18px */
                    line-height: 1.75 !important;
                    margin-bottom: 1.5rem !important;
                  }

                  .prose a {
                    color: #9333ea; /* tailwind purple-600 as an example for primary color */
                    text-decoration: none;
                  }
                  .prose a:hover {
                    text-decoration: underline;
                  }
                  .prose strong {
                    font-weight: 600;
                  }
                  .prose img { /* Basic styling for images in content if not handled by div wrapper */
                    border-radius: 0.5rem; /* 8px */
                    margin-top: 1rem;
                    margin-bottom: 1rem;
                  }
                `}</style>
                <div dangerouslySetInnerHTML={{ __html: blogPost.content }} />
              </article>
              
              <div className="mt-8 pt-6 border-t border-gray-100">
                <div className="flex items-center gap-4">
                  <span className="text-gray-700 font-medium">Share:</span>
                  <div className="flex gap-2">
                    <a 
                      href="#"
                      aria-label="Share on Facebook"
                      className="p-2 bg-gray-100 hover:bg-gray-200 rounded-full text-gray-700"
                      onClick={(e) => {
                        e.preventDefault();
                        window.open(
                          `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`,
                          'facebook-share',
                          'width=580,height=296'
                        );
                      }}
                    >
                      <Facebook size={18} />
                    </a>
                    <a 
                      href="#"
                      aria-label="Share on Twitter"
                      className="p-2 bg-gray-100 hover:bg-gray-200 rounded-full text-gray-700"
                      onClick={(e) => {
                        e.preventDefault();
                        window.open(
                          `https://twitter.com/intent/tweet?text=${encodeURIComponent(blogPost.title)}&url=${encodeURIComponent(currentUrl)}`,
                          'twitter-share',
                          'width=550,height=235'
                        );
                      }}
                    >
                      <Twitter size={18} />
                    </a>
                    <a 
                      href="#"
                      aria-label="Share on LinkedIn"
                      className="p-2 bg-gray-100 hover:bg-gray-200 rounded-full text-gray-700"
                      onClick={(e) => {
                        e.preventDefault();
                        window.open(
                          `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(currentUrl)}`,
                          'linkedin-share',
                          'width=750,height=600'
                        );
                      }}
                    >
                      <Linkedin size={18} />
                    </a>
                    <button 
                      aria-label="Copy link to clipboard"
                      className="p-2 bg-gray-100 hover:bg-gray-200 rounded-full text-gray-700"
                      onClick={() => {
                        navigator.clipboard.writeText(currentUrl);
                        alert('Link copied to clipboard!');
                      }}
                    >
                      <Share2 size={18} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-4">
              <div className="sticky top-24">
                <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm mb-8">
                  <h3 className="font-cormorant text-xl font-bold mb-4">Table of Contents</h3>
                  <nav aria-label="Article Table of Contents">
                    <ul className="space-y-2">
                      <li><a href="#custom-cat-pillow" className="text-gray-600 hover:text-primary">Custom Cat Pillow</a></li>
                      <li><a href="#custom-cat-mug" className="text-gray-600 hover:text-primary">Custom Cat Mug</a></li>
                      <li><a href="#custom-cat-stickers" className="text-gray-600 hover:text-primary">Custom Cat Stickers</a></li>
                      <li><a href="#custom-cat-tote-bag" className="text-gray-600 hover:text-primary">Custom Cat Tote Bag</a></li>
                      <li><a href="#how-it-works" className="text-gray-600 hover:text-primary">How It Works</a></li>
                      <li><a href="#final-thoughts" className="text-gray-600 hover:text-primary">Final Thoughts</a></li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
