"use client"
import React, { useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, Calendar, Clock, Share2, Bookmark, Facebook, Twitter, Linkedin } from 'lucide-react'
import { useParams } from 'next/navigation'

export default function BlogPostPage() {
  const { slug } = useParams()
  
  // In a real application, you would fetch the blog post data based on the slug
  // For this demo, we'll use mock data
  const blogPost = {
    title: 'DIY: Creating a Floral Themed Workspace',
    excerpt: 'Transform your workspace with these creative ideas for incorporating floral elements that boost productivity and create a calming environment',
    content: `
      <p>Floral throw pillows are one of the easiest ways to transform a living space and bring the beauty of nature indoors. Not only do they add color and texture, but they also provide an opportunity to express your personal style without committing to a major design change.</p>
      
      <h2 id="choose-a-color-palette">Color Palette Selection</h2>
      <p>Before selecting your floral throw pillows, consider the existing color scheme in your living room. Floral patterns work best when they complement the room's palette rather than compete with it. Look for floral designs that incorporate at least one color that's already present in your space.</p>
      <p>If your living room features neutral tones, floral pillows can be your statement piece, introducing vibrant colors in a controlled way. For rooms that already have bold colors, consider floral patterns with a more subtle palette that harmonizes with your existing décor.</p>
      
      <h2 id="mix-and-match-patterns">Mixing Patterns</h2>
      <p>Don't be afraid to mix different floral patterns together! The key is to vary the scale: combine large-scale floral prints with smaller, more delicate patterns. This creates visual interest without overwhelming the space.</p>
      <p>You can also mix floral patterns with other designs like stripes, geometric shapes, or solids. A good rule of thumb is to include at least one solid color pillow that pulls a shade from your floral pattern, creating a cohesive look.</p>
      
      <h2 id="consider-the-seasons">Seasonal Updates</h2>
      <p>Floral throw pillows offer a wonderful opportunity to reflect the changing seasons. In spring and summer, opt for bright, fresh floral designs featuring daisies, sunflowers, or tropical blooms. For fall and winter, choose deeper hues with richer floral patterns like roses, dahlias, or poinsettias.</p>
      <p>Switching out your throw pillows seasonally is an affordable way to keep your living room feeling fresh and current throughout the year.</p>
      
      <h2 id="arrangement-techniques">Arrangement Ideas</h2>
      <p>The way you arrange your throw pillows can make a significant difference in the overall look. On a sofa, try the classic arrangement of larger pillows at the outer corners, with smaller ones in front. For a more casual, lived-in look, try an asymmetrical arrangement with different sized pillows grouped together.</p>
      <p>Don't limit floral pillows to just the sofa; consider adding them to accent chairs, window seats, or even on the floor for additional seating during gatherings.</p>
      
      <h2 id="care-and-maintenance">Care Tips</h2>
      <p>To keep your floral throw pillows looking their best, follow the care instructions on the label. Most covers can be removed and washed, but some may require dry cleaning. Regularly fluffing and rotating your pillows will help them maintain their shape and extend their lifespan.</p>
      
      <h2 id="conclusion">Final Thoughts</h2>
      <p>Floral throw pillows are a versatile and relatively inexpensive way to update your living room's look. By thoughtfully selecting patterns that complement your existing décor and experimenting with different arrangements, you can create a space that feels both professionally designed and personally meaningful.</p>
      <p>Remember, there are no strict rules when it comes to decorating with throw pillows. The most important thing is to choose designs that bring you joy every time you enter the room!</p>
    `,
    imageSrc: '/images/blog/blog-1.jpg',
    date: 'Nov 5, 2024',
    readTime: '5 min read',
    category: 'Trends',
    author: {
      name: 'Sophia Williams',
      role: 'Interior Design Specialist',
      avatarSrc: '/images/blog/author-3.jpg'
    },
    relatedPosts: [
      {
        title: 'Flower Pattern Meanings',
        slug: 'flower-patterns-meaning',
        imageSrc: '/images/blog/blog-2.jpg'
      },
      {
        title: 'Creating a Floral Workspace',
        slug: 'floral-themed-workspace',
        imageSrc: '/images/blog/blog-3.jpg'
      }
    ]
  }

  // Generate schema directly in the component
  const blogPostSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://yourwebsite.com/blog/${slug}`
    },
    "headline": blogPost.title,
    "description": blogPost.excerpt,
    "image": `https://yourwebsite.com${blogPost.imageSrc}`,
    "author": {
      "@type": "Person",
      "name": blogPost.author.name,
      "jobTitle": blogPost.author.role
    },
    "publisher": {
      "@type": "Organization",
      "name": "FlowersLuxe",
      "logo": {
        "@type": "ImageObject",
        "url": "https://yourwebsite.com/images/logo.png"
      }
    },
    "datePublished": new Date(blogPost.date).toISOString(),
    "dateModified": new Date(blogPost.date).toISOString(),
    "articleSection": blogPost.category,
    "timeRequired": blogPost.readTime
  };

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
      {/* Add schema markup directly */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostSchema) }}
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
            
            <h1 className="font-cormorant text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              {blogPost.title}
            </h1>
            
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
            alt={blogPost.title}
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
                  }
                  
                  .prose p {
                    font-size: 1.125rem !important;
                    line-height: 1.75 !important;
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
                  <ul className="space-y-2">
                    <li>
                      <a href="#choose-a-color-palette" className="text-gray-600 hover:text-primary">
                        Color Palette Selection
                      </a>
                    </li>
                    <li>
                      <a href="#mix-and-match-patterns" className="text-gray-600 hover:text-primary">
                        Mixing Patterns
                      </a>
                    </li>
                    <li>
                      <a href="#consider-the-seasons" className="text-gray-600 hover:text-primary">
                        Seasonal Updates
                      </a>
                    </li>
                    <li>
                      <a href="#arrangement-techniques" className="text-gray-600 hover:text-primary">
                        Arrangement Ideas
                      </a>
                    </li>
                    <li>
                      <a href="#care-and-maintenance" className="text-gray-600 hover:text-primary">
                        Care Tips
                      </a>
                    </li>
                    <li>
                      <a href="#conclusion" className="text-gray-600 hover:text-primary">
                        Final Thoughts
                      </a>
                    </li>
                  </ul>
                </div>
                
                {/* Related Posts */}
                <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
                  <h3 className="font-cormorant text-xl font-bold mb-4">Related Articles</h3>
                  <div className="space-y-4">
                    {blogPost.relatedPosts.map((post) => (
                      <Link key={post.slug} href={`/blog/${post.slug}`} className="flex gap-3 group">
                        <div className="relative w-20 h-20 rounded-lg overflow-hidden flex-shrink-0">
                          <Image
                            src={post.imageSrc}
                            alt={post.title}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-300"
                            sizes="80px"
                          />
                        </div>

                        <div>
                          <h4 className="text-gray-800 font-medium group-hover:text-primary transition-colors">
                            {post.title}
                          </h4>
                        </div>
                      </Link>
                    ))}
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