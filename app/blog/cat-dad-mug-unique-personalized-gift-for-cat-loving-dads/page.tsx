"use client"
import React, { useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Head from 'next/head'
import { ArrowLeft, Calendar, Clock, Share2, Bookmark, Facebook, Twitter, Linkedin } from 'lucide-react'
import { useParams } from 'next/navigation'

export default function CatDadMugBlogPostPage() {
  const { slug } = useParams()
  const blogPost = {
    title: 'Cat Dad Mug – Unique Personalized Gift for Cat‑Loving Dads',
    excerpt: 'Discover the perfect gift for cat-loving fathers with our personalized Cat Dad Mug. This custom ceramic mug features your cat\'s name and a playful fist-bump design that celebrates the special bond between dads and their feline friends.',
    content: `
      <p>Every cat dad knows the scene: you're trying to sip your first coffee while your whiskered roommate winds between your feet. Why not celebrate that daily routine with a mug that's as devoted to your feline friend as you are? The <strong>Cat Dad Mug</strong> isn't just another cup—it's a <em>statement</em> for men who proudly wear the "cat dad" badge.</p>
      
      <h2 id="why-best-cat-dad-mug">Why This Might Be the Best Cat Dad Mug You'll Ever Own</h2>
      <div className="relative rounded-lg overflow-hidden my-6">
        <Link href="https://flowersluxe.com/custom/cat-dad-mug-unique-personalized-gift-for-cat-loving-dads" passHref legacyBehavior>
          <a className="cursor-pointer block">
            <Image
              src='/images/products/mugs/cat-dad-mug-personalized-cat-gifts.webp',
              alt='Cat Dad Mug with personalized name - unique gift for cat-loving fathers',
              width={800}
              height={500}
              className='w-full object-cover rounded-lg'
            />
          </a>
        </Link>
      </div>
      
      <ul>
        <li><strong>Personalized Artwork:</strong> Add your cat's name (or multiple names if you're a multi‑cat household) beneath a playful fist‑bump illustration.</li>
        <li><strong>Premium Ceramic Build:</strong> 11 oz, microwave‑safe, and ready for countless dishwasher cycles.</li>
        <li><strong>Gloss Finish:</strong> The embedded image won't fade, even after years of caffeine‑fuelled mornings.</li>
        <li><strong>Made in the USA:</strong> Crafted and vacuum‑form printed for sharp detail and long‑lasting color.</li>
      </ul>
      
      <blockquote class="bg-primary/5 p-4 border-l-4 border-primary my-6 italic">
        If you've been hunting for <em>custom cat dad gifts</em> that feel genuine—not generic—this mug sits at the top of the list.
      </blockquote>
      
      <div class="my-6">
        <Link href="https://flowersluxe.com/custom/cat-dad-mug-unique-personalized-gift-for-cat-loving-dads" className="inline-flex items-center bg-primary hover:bg-primary-dark text-white font-medium py-3 px-6 rounded-lg transition-colors">
          Submit Your Cat's Name to Order
        </Link>
      </div>
      
      <h2 id="design-story">The Story Behind the Design</h2>
      <p>Our art team started with a simple idea: capture a feline's paw reaching in for a fist bump. It's the unspoken agreement every cat lover understands—respect, friendship, and maybe a request for breakfast. By adding your cat's name in a handwritten script, the mug becomes a one‑of‑a‑kind keepsake.</p>
      
      <h2 id="who-will-love">Who Will Love This Mug?</h2>
      
      <h3>New Cat Dads</h3>
      <p>That first kitten deserves a proper introduction to morning coffee.</p>
      
      <h3>Veteran Cat Dads</h3>
      <p>Because the cats, the stories, and the caffeine just keep multiplying.</p>
      
      <h3>Daughters & Sons Looking for Gifts for Dad Who Has Everything</h3>
      <p>If socks and power tools feel stale, a <em>personalized cat mug</em> will score heartfelt points.</p>
      
      <h3>Girl Dad Cat Lovers</h3>
      <p>For dads who juggle tea parties, homework help, and fur‑baby shenanigans all before 9 a.m.</p>
      
      <h2 id="how-to-order">How to Order</h2>
      <ol>
        <li><strong>Click "Submit Your Cat's Name"</strong> below the product photo.</li>
        <li>Enter your cat's name (or names) and your email.</li>
        <li>We'll send your bespoke design proof within 24 hours.</li>
        <li>Approve the artwork, receive a private TeePublic link, and complete checkout at your convenience.</li>
      </ol>
      
      <h2 id="technical-specs">Technical Specs at a Glance</h2>
      <ul>
        <li><strong>Capacity:</strong> 11 oz (standard)</li>
        <li><strong>Material:</strong> Lead‑free, BPA‑free ceramic</li>
        <li><strong>Finish:</strong> High‑gloss, fade‑resistant print</li>
        <li><strong>Care:</strong> Microwave‑safe, top‑rack dishwasher‑safe</li>
        <li><strong>Origin:</strong> Designed, printed, and packaged in the USA</li>
      </ul>
      
      <h2 id="faqs">Frequently Asked Questions</h2>
      <p><strong>Q: Can I put more than one cat on the mug?</strong><br />
      A: Absolutely—just list each name when you fill out the order form.</p>
      
      <p><strong>Q: Is this suitable as a hot‑chocolate mug for my kids?</strong><br />
      A: Yes! It's food-safe and great for any hot beverage.</p>
      
      <p><strong>Q: I'm searching for gifts for dad from daughter—will this arrive before Father's Day?</strong><br />
      A: We design within 24 hours and ship from the U.S.; most orders arrive in 3‑6 business days.</p>
      
      <h2 id="final-sips">Final Sips</h2>
      <p>Being a cat dad is part patience, part play, and 100 percent love. With the <strong>Cat Dad Mug</strong>, every gulp of coffee—or tea, or cocoa—carries a reminder of that bond. For birthdays, Father's Day, or "just because," this is one of those <em>gifts for cat dads</em> that will never end up forgotten in the back of a cupboard.</p>
      
      <p>Ready to claim the <em>best cat dad mug</em> for yourself—or surprise a dad who already owns everything else?</p>
      
      <div class="my-6">
        <Link href="https://flowersluxe.com/custom/cat-dad-mug-unique-personalized-gift-for-cat-loving-dads" className="inline-flex items-center bg-primary hover:bg-primary-dark text-white font-medium py-3 px-6 rounded-lg transition-colors">
          Start Your Custom Order Here
        </Link>
      </div>
    `,
    imageSrc: '/images/blog/cat-dad-mug-unique-personalized-gift-for-cat-loving-dads.webp',
    date: 'May 17, 2025',
    readTime: '5 min read',
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
    "timeRequired": "PT5M",
    "keywords": "cat dad mug, cat dad gift, personalized cat mug, gifts for cat dads, custom cat gifts, dad gifts, cat lover gifts, father's day gifts, gifts for dad, best cat dad mug, girl dad gift",
    "articleBody": blogPost.excerpt,
    "speakable": {
      "@type": "SpeakableSpecification",
      "cssSelector": [".article-title", ".article-summary"]
    }
  };

 

  // FAQ schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Can I put more than one cat on the mug?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Absolutely—just list each name when you fill out the order form."
        }
      },
      {
        "@type": "Question",
        "name": "Is this suitable as a hot-chocolate mug for my kids?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes! It's food-safe and great for any hot beverage."
        }
      },
      {
        "@type": "Question",
        "name": "Will this arrive before Father's Day?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We design within 24 hours and ship from the U.S.; most orders arrive in 3-6 business days."
        }
      }
    ]
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
              top: targetElement.offsetTop - 100, 
              behavior: 'smooth'
            });
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
      
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostSchema) }}
     
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
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

      <div className="container-custom">
        <div className="relative h-64 md:h-96 -mt-10 mb-12 rounded-xl overflow-hidden shadow-md">
          <Image
            src={blogPost.imageSrc}
            alt={`Personalized Cat Dad Mug with custom cat name - perfect gift for cat-loving fathers - ${blogPost.title}`}
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
                    font-size: 1.75rem !important;
                    margin-top: 2.5rem !important;
                    margin-bottom: 1rem !important;
                    font-weight: 700 !important;
                    font-family: var(--font-cormorant) !important;
                    color: #1a202c !important;
                    scroll-margin-top: 100px;
                  }
                  .prose h3 {
                    font-size: 1.35rem !important;
                    margin-top: 1.75rem !important;
                    margin-bottom: 0.75rem !important;
                    font-weight: 600 !important;
                    color: #2d3748 !important;
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
                  .prose ul, .prose ol {
                    margin-bottom: 1.5rem !important;
                  }
                  .prose blockquote {
                    font-style: italic !important;
                    color: #4a5568 !important;
                  }
                `}</style>
                
                <p>Every cat dad knows the scene: you're trying to sip your first coffee while your whiskered roommate winds between your feet. Why not celebrate that daily routine with a mug that's as devoted to your feline friend as you are? The <strong>Cat Dad Mug</strong> isn't just another cup—it's a <em>statement</em> for men who proudly wear the "cat dad" badge.</p>
                
                <h2 id="why-best-cat-dad-mug">Why This Might Be the Best Cat Dad Mug You'll Ever Own</h2>
                <div className="relative rounded-lg overflow-hidden my-6">
                  <a href="https://flowersluxe.com/custom/cat-dad-mug-unique-personalized-gift-for-cat-loving-dads" className="cursor-pointer block">
                    <Image
                      src="/images/products/mugs/cat-dad-mug-personalized-cat-gifts.webp"
                      alt="Cat Dad Mug with personalized name - unique gift for cat-loving fathers"
                      width={800}
                      height={500}
                      className="w-full object-cover rounded-lg"
                    />
                  </a>
                </div>
                
                <ul>
                  <li><strong>Personalized Artwork:</strong> Add your cat's name (or multiple names if you're a multi‑cat household) beneath a playful fist‑bump illustration.</li>
                  <li><strong>Premium Ceramic Build:</strong> 11 oz, microwave‑safe, and ready for countless dishwasher cycles.</li>
                  <li><strong>Gloss Finish:</strong> The embedded image won't fade, even after years of caffeine‑fuelled mornings.</li>
                  <li><strong>Made in the USA:</strong> Crafted and vacuum‑form printed for sharp detail and long‑lasting color.</li>
                </ul>
                
                <blockquote className="bg-primary/5 p-4 border-l-4 border-primary my-6 italic">
                  If you've been hunting for <em>custom cat dad gifts</em> that feel genuine—not generic—this mug sits at the top of the list.
                </blockquote>
                
                <div className="my-6">
                  <a href="https://flowersluxe.com/custom/cat-dad-mug-unique-personalized-gift-for-cat-loving-dads" className="inline-flex items-center bg-primary hover:bg-primary-dark text-white font-medium py-3 px-6 rounded-lg transition-colors">
                    Submit Your Cat's Name to Order
                  </a>
                </div>
                
                <h2 id="design-story">The Story Behind the Design</h2>
                <p>Our art team started with a simple idea: capture a feline's paw reaching in for a fist bump. It's the unspoken agreement every cat lover understands—respect, friendship, and maybe a request for breakfast. By adding your cat's name in a handwritten script, the mug becomes a one‑of‑a‑kind keepsake.</p>
                
                <h2 id="who-will-love">Who Will Love This Mug?</h2>
                
                <h3>New Cat Dads</h3>
                <p>That first kitten deserves a proper introduction to morning coffee.</p>
                
                <h3>Veteran Cat Dads</h3>
                <p>Because the cats, the stories, and the caffeine just keep multiplying.</p>
                
                <h3>Daughters & Sons Looking for Gifts for Dad Who Has Everything</h3>
                <p>If socks and power tools feel stale, a <em>personalized cat mug</em> will score heartfelt points.</p>
                
                <h3>Girl Dad Cat Lovers</h3>
                <p>For dads who juggle tea parties, homework help, and fur‑baby shenanigans all before 9 a.m.</p>
                
                <h2 id="how-to-order">How to Order</h2>
                <ol>
                  <li><strong>Click "Submit Your Cat's Name"</strong> below the product photo.</li>
                  <li>Enter your cat's name (or names) and your email.</li>
                  <li>We'll send your bespoke design proof within 24 hours.</li>
                  <li>Approve the artwork, receive a private TeePublic link, and complete checkout at your convenience.</li>
                </ol>
                
                <h2 id="technical-specs">Technical Specs at a Glance</h2>
                <ul>
                  <li><strong>Capacity:</strong> 11 oz (standard)</li>
                  <li><strong>Material:</strong> Lead‑free, BPA‑free ceramic</li>
                  <li><strong>Finish:</strong> High‑gloss, fade‑resistant print</li>
                  <li><strong>Care:</strong> Microwave‑safe, top‑rack dishwasher‑safe</li>
                  <li><strong>Origin:</strong> Designed, printed, and packaged in the USA</li>
                </ul>
                
                <h2 id="faqs">Frequently Asked Questions</h2>
                <p><strong>Q: Can I put more than one cat on the mug?</strong><br />
                A: Absolutely—just list each name when you fill out the order form.</p>
                
                <p><strong>Q: Is this suitable as a hot‑chocolate mug for my kids?</strong><br />
                A: Yes! It's food-safe and great for any hot beverage.</p>
                
                <p><strong>Q: I'm searching for gifts for dad from daughter—will this arrive before Father's Day?</strong><br />
                A: We design within 24 hours and ship from the U.S.; most orders arrive in 3‑6 business days.</p>
                
                <h2 id="final-sips">Final Sips</h2>
                <p>Being a cat dad is part patience, part play, and 100 percent love. With the <strong>Cat Dad Mug</strong>, every gulp of coffee—or tea, or cocoa—carries a reminder of that bond. For birthdays, Father's Day, or "just because," this is one of those <em>gifts for cat dads</em> that will never end up forgotten in the back of a cupboard.</p>
                
                <p>Ready to claim the <em>best cat dad mug</em> for yourself—or surprise a dad who already owns everything else?</p>
                
                <div className="my-6">
                  <a href="https://flowersluxe.com/custom/cat-dad-mug-unique-personalized-gift-for-cat-loving-dads" className="inline-flex items-center bg-primary hover:bg-primary-dark text-white font-medium py-3 px-6 rounded-lg transition-colors">
                    Start Your Custom Order Here
                  </a>
                </div>
              </article>
              
              <div className="mt-8 pt-6 border-t border-gray-100">
                <div className="flex items-center gap-4">
                  <span className="text-gray-700 font-medium">Share:</span>
                  <div className="flex gap-2">
                    <a 
                      href="#"
                      className="p-2 bg-gray-100 hover:bg-gray-200 rounded-full text-gray-700"
                      onClick={(e) => {
                        e.preventDefault();
                        if (typeof window !== "undefined") {
                            window.open(
                            `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`,
                            'facebook-share',
                            'width=580,height=296'
                            );
                        }
                      }}
                    >
                      <Facebook size={18} />
                    </a>
                    <a 
                      href="#"
                      className="p-2 bg-gray-100 hover:bg-gray-200 rounded-full text-gray-700"
                      onClick={(e) => {
                        e.preventDefault();
                        if (typeof window !== "undefined") {
                            window.open(
                            `https://twitter.com/intent/tweet?text=${encodeURIComponent(blogPost.title)}&url=${encodeURIComponent(window.location.href)}`,
                            'twitter-share',
                            'width=550,height=235'
                            );
                        }
                      }}
                    >
                      <Twitter size={18} />
                    </a>
                    <a 
                      href="#"
                      className="p-2 bg-gray-100 hover:bg-gray-200 rounded-full text-gray-700"
                      onClick={(e) => {
                        e.preventDefault();
                        if (typeof window !== "undefined") {
                            window.open(
                            `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`,
                            'linkedin-share',
                            'width=750,height=600'
                            );
                        }
                      }}
                    >
                      <Linkedin size={18} />
                    </a>
                    <button 
                      className="p-2 bg-gray-100 hover:bg-gray-200 rounded-full text-gray-700"
                      onClick={() => {
                        if (typeof window !== "undefined" && navigator.clipboard) {
                           navigator.clipboard.writeText(window.location.href);
                           alert('Link copied to clipboard!');
                        }
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
                      <li><a href="#why-best-cat-dad-mug" className="text-gray-600 hover:text-primary">Why This Might Be the Best Cat Dad Mug</a></li>
                      <li><a href="#design-story" className="text-gray-600 hover:text-primary">The Story Behind the Design</a></li>
                      <li><a href="#who-will-love" className="text-gray-600 hover:text-primary">Who Will Love This Mug</a></li>
                      <li><a href="#how-to-order" className="text-gray-600 hover:text-primary">How to Order</a></li>
                      <li><a href="#technical-specs" className="text-gray-600 hover:text-primary">Technical Specs</a></li>
                      <li><a href="#faqs" className="text-gray-600 hover:text-primary">FAQs</a></li>
                      <li><a href="#final-sips" className="text-gray-600 hover:text-primary">Final Sips</a></li>
                    </ul>
                  </nav>
                </div>
                
                <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm mb-8">
                  <h3 className="font-cormorant text-xl font-bold mb-4">Perfect Gift For</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2"><span className="w-2 h-2 bg-primary rounded-full"></span>Father's Day</li>
                    <li className="flex items-center gap-2"><span className="w-2 h-2 bg-primary rounded-full"></span>Birthday Gifts</li>
                    <li className="flex items-center gap-2"><span className="w-2 h-2 bg-primary rounded-full"></span>Christmas Gifts</li>
                    <li className="flex items-center gap-2"><span className="w-2 h-2 bg-primary rounded-full"></span>"Just Because" Surprises</li>
                    <li className="flex items-center gap-2"><span className="w-2 h-2 bg-primary rounded-full"></span>New Cat Parent Celebration</li>
                  </ul>
                </div>
                
                <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
                  <h3 className="font-cormorant text-xl font-bold mb-4">You Might Also Like</h3>
                  <div className="space-y-4">
                    <a href="https://flowers-luxe.pages.dev/custom/custom-cat-pillow-unique-cat-gift" className="flex items-center gap-3 group">
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
                        <p className="text-sm text-gray-500">Add a cozy touch to your home</p>
                      </div>
                    </a>
                    <a href="https://flowersluxe.com/custom/custom-cat-tote-bag-unique-tote-bag" className="flex items-center gap-3 group">
                      <div className="w-16 h-16 rounded-md overflow-hidden flex-shrink-0">
                        <Image
                          src="/images/products/tote-bags/custom-cat-tote-bag-unique-tote-bag.webp"
                          alt="Custom Cat Tote Bag"
                          width={64}
                          height={64}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900 group-hover:text-primary transition-colors">Custom Cat Tote Bag</h4>
                        <p className="text-sm text-gray-500">Take your cat everywhere</p>
                      </div>
                    </a>
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
