"use client"
import React, { useEffect, useState } from 'react'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import Head from 'next/head'
import { Calendar, Clock, ArrowLeft, Share2, Bookmark, Facebook, Twitter, Linkedin, Copy, ChevronRight } from 'lucide-react'

// Interface for blog post data
interface BlogPost {
  title: string;
  excerpt: string;
  slug: string;
  imageSrc: string;
  date: string;
  readTime: string;
  category: string;
  featured?: boolean;
  content: string;
}

// Next.js route types
type BlogPostPageProps = {
  params: {
    slug: string
  }
}

// This component renders the schema directly in the component
const BlogPostSchema = ({
  post,
  baseUrl,
  authorName,
  publisherName,
  publisherLogo
}: {
  post: BlogPost;
  baseUrl: string;
  authorName: string;
  publisherName: string;
  publisherLogo: string;
}) => {
  // Calculate estimated word count based on read time (assuming average reading speed)
  const avgWordsPerMinute = 200;
  const readTimeMinutes = parseInt(post.readTime.split(' ')[0]);
  const estimatedWordCount = readTimeMinutes * avgWordsPerMinute;
  
  // Convert the date to ISO format for schema compatibility
  const dateObject = new Date(post.date);
  const isoDate = dateObject.toISOString();
  
  // Create the full URL for the article
  const articleUrl = `${baseUrl}/blog/${post.slug}`;
  const imageUrl = post.imageSrc.startsWith('http') ? post.imageSrc : `${baseUrl}${post.imageSrc}`;
  
  // Prepare the schema object
  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "description": post.excerpt,
    "image": imageUrl,
    "datePublished": isoDate,
    "author": {
      "@type": "Person",
      "name": authorName
    },
    "publisher": {
      "@type": "Organization",
      "name": publisherName,
      "logo": {
        "@type": "ImageObject",
        "url": `${baseUrl}${publisherLogo}`
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": articleUrl
    },
    "wordCount": estimatedWordCount,
    "articleSection": post.category,
    "url": articleUrl
  };

  return (
    <Head>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
    </Head>
  );
};

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = params
  const [copied, setCopied] = useState(false)

  // Reset copy state when URL changes
  useEffect(() => {
    setCopied(false)
  }, [slug])

  // Handle copy to clipboard functionality
  const copyToClipboard = () => {
    navigator.clipboard.writeText(window.location.href)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  // Site settings for schema
  const siteSettings = {
    baseUrl: "https://flowersluxe.com",
    publisherName: "FlowersLuxe",
    publisherLogo: "/images/logo.png",
    authorName: "FlowersLuxe Team"
  }

  // Mock blog posts data - in a real app, you'd fetch this from an API or CMS
  const blogPosts: BlogPost[] = [
    {
      title: 'The Meaning Behind Different Flower Patterns',
      excerpt: 'Discover the symbolic meanings and cultural significance of popular flower patterns used in home decor and fashion throughout history.',
      slug: 'flower-patterns-meaning',
      imageSrc: '/images/blog/blog-2.jpg',
      date: 'Oct 28, 2024',
      readTime: '8 min read',
      category: 'Flower Symbolism',
      featured: true,
      content: `
        <p>Throughout history, flower patterns have held deep symbolic meanings across different cultures. This article explores the rich symbolism behind popular floral designs used in home decor, fashion, and art.</p>
        
        <h2>Rose Patterns: Love and Passion</h2>
        <p>Rose patterns are perhaps the most recognizable and beloved of all floral designs. In Western culture, roses symbolize love and passion, with different colors carrying specific meanings:</p>
        <ul>
          <li>Red roses represent romantic love and desire</li>
          <li>Pink roses symbolize grace, gentility, and happiness</li>
          <li>White roses represent purity and innocence</li>
          <li>Yellow roses traditionally symbolize friendship</li>
        </ul>
        
        <p>In interior design, rose patterns create a sense of romance and classic elegance. They reached the height of popularity during the Victorian era but continue to be reimagined in contemporary designs.</p>
        
        <h2>Lotus Patterns: Spiritual Enlightenment</h2>
        <p>The lotus flower holds profound significance in Eastern cultures, particularly in Buddhism and Hinduism. Growing from muddy waters to produce a beautiful bloom, the lotus represents spiritual enlightenment, purity, and rebirth.</p>
        
        <p>Lotus patterns in home decor often create a sense of peace and mindfulness. They're particularly popular in meditation spaces and bathrooms, where their association with water and purification feels especially appropriate.</p>
        
        <h2>Cherry Blossom Patterns: Transience and Renewal</h2>
        <p>In Japanese culture, cherry blossoms (sakura) symbolize the ephemeral nature of life. Their brief but spectacular bloom serves as a reminder that life is beautiful but fleeting. Cherry blossom patterns in design evoke a sense of mindfulness about appreciating present beauty.</p>
        
        <p>These delicate floral patterns bring a sense of spring renewal and optimism to interiors and fashion. They're often used in seasonal decor to mark the transition from winter to spring.</p>
        
        <h2>Sunflower Patterns: Adoration and Loyalty</h2>
        <p>The sunflower's habit of turning to face the sun has made it a symbol of adoration and loyalty across many cultures. Sunflower patterns bring warmth, positivity, and energy to any space or design.</p>
        
        <p>In home decor, sunflower patterns are popular in kitchens and dining areas, where their association with harvest and abundance feels natural. They create a cheerful, welcoming atmosphere that embodies the spirit of hospitality.</p>
      `
    },
    {
      title: 'DIY: Creating a Floral Themed Workspace',
      excerpt: 'Transform your workspace with these creative ideas for incorporating floral elements that boost productivity and create a calming environment.',
      slug: 'floral-themed-workspace',
      imageSrc: '/images/blog/blog-3.jpg',
      date: 'Oct 15, 2024',
      readTime: '6 min read',
      category: 'DIY Projects',
      content: `
        <p>A well-designed workspace can significantly impact your productivity, creativity, and overall well-being. Incorporating floral elements into your work area can create a calming environment that helps reduce stress while boosting focus and inspiration.</p>
        
        <h2>Why Flowers Boost Productivity</h2>
        <p>Numerous studies have shown that natural elements in a workspace can improve productivity and well-being. Plants and floral elements can:</p>
        <ul>
          <li>Reduce stress and anxiety</li>
          <li>Improve air quality</li>
          <li>Boost creativity and problem-solving abilities</li>
          <li>Increase attention span and concentration</li>
          <li>Create a more pleasant work environment</li>
        </ul>
        
        <h2>Fresh Flowers vs. Artificial Arrangements</h2>
        <p>While fresh flowers provide the greatest benefits in terms of air purification and natural scents, high-quality artificial arrangements can be a practical alternative, especially for those with allergies or limited time for maintenance.</p>
        
        <h2>Color Psychology in Floral Arrangements</h2>
        <p>Different flower colors can evoke specific moods and energy levels:</p>
        <ul>
          <li>Blue and purple flowers promote calm and concentration</li>
          <li>Yellow and orange blooms boost energy and creativity</li>
          <li>Green plants enhance feelings of balance and harmony</li>
          <li>Pink flowers create a nurturing, compassionate atmosphere</li>
        </ul>
      `
    }
  ]

  // Find the current blog post from the slug
  const currentPost = blogPosts.find(post => post.slug === slug)
  
  // If post not found, show 404
  if (!currentPost) {
    notFound()
  }
  
  // Get related posts (exclude current post)
  const relatedPosts = blogPosts
    .filter(post => post.slug !== slug)
    .slice(0, 3)

  // Extract headings for table of contents
  const extractHeadings = (content: string) => {
    const headings = content.match(/<h2>(.*?)<\/h2>/g) || [];
    return headings.map(heading => {
      const title = heading.replace('<h2>', '').replace('</h2>', '');
      const id = title.toLowerCase().replace(/[^\w]+/g, '-');
      return { title, id };
    });
  }

  const tableOfContents = extractHeadings(currentPost.content);

  return (
    <>
      {/* Add schema markup for SEO */}
      <BlogPostSchema
        post={currentPost}
        baseUrl={siteSettings.baseUrl}
        authorName={siteSettings.authorName}
        publisherName={siteSettings.publisherName}
        publisherLogo={siteSettings.publisherLogo}
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
          <div className="max-w-4xl mx-auto">
            <Link href="/blog" className="inline-flex items-center text-gray-600 hover:text-primary mb-6 group transition-colors">
              <ArrowLeft size={16} className="mr-2" />
              <span>Back to all articles</span>
            </Link>
            
            <span className="bg-primary/10 text-primary text-sm font-medium px-3 py-1 rounded-full inline-block mb-4">
              {currentPost.category}
            </span>
            
            <h1 className="font-cormorant text-3xl md:text-5xl font-bold mb-6">
              {currentPost.title}
            </h1>
            
            <div className="flex items-center gap-6 text-gray-600">
              <div className="flex items-center gap-1">
                <Calendar size={18} />
                <span>{currentPost.date}</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock size={18} />
                <span>{currentPost.readTime}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Post Content */}
      <section className="py-12 md:py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-8">
              {/* Featured Image */}
              <div className="relative aspect-video rounded-2xl overflow-hidden mb-8">
                <Image
                  src={currentPost.imageSrc}
                  alt={currentPost.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 66vw"
                  priority
                />
              </div>
              
              {/* Article Content */}
              <div 
                className="prose prose-lg max-w-none"
                dangerouslySetInnerHTML={{ __html: currentPost.content }}
              />
              
              {/* Share and Save */}
              <div className="border-t border-b border-gray-100 py-6 mt-10 flex flex-wrap gap-4 justify-between items-center">
                <div className="flex items-center gap-2 font-medium">
                  <Share2 size={18} />
                  <span>Share this article:</span>
                  <div className="flex gap-2">
                    <a 
                      href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(`${siteSettings.baseUrl}/blog/${currentPost.slug}`)}`} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-gray-100 hover:bg-gray-200 p-2 rounded-full transition-colors"
                    >
                      <Facebook size={16} />
                    </a>
                    <a 
                      href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(`${siteSettings.baseUrl}/blog/${currentPost.slug}`)}&text=${encodeURIComponent(currentPost.title)}`} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-gray-100 hover:bg-gray-200 p-2 rounded-full transition-colors"
                    >
                      <Twitter size={16} />
                    </a>
                    <a 
                      href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(`${siteSettings.baseUrl}/blog/${currentPost.slug}`)}`} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-gray-100 hover:bg-gray-200 p-2 rounded-full transition-colors"
                    >
                      <Linkedin size={16} />
                    </a>
                    <button 
                      onClick={copyToClipboard} 
                      className="bg-gray-100 hover:bg-gray-200 p-2 rounded-full transition-colors"
                      aria-label="Copy link to clipboard"
                    >
                      <Copy size={16} className={copied ? "text-primary" : ""} />
                    </button>
                  </div>
                </div>
                
                <button className="inline-flex items-center gap-2 text-gray-700 hover:text-primary transition-colors">
                  <Bookmark size={18} />
                  <span>Save for later</span>
                </button>
              </div>
            </div>
            
            {/* Sidebar */}
            <div className="lg:col-span-4">
              {tableOfContents.length > 0 && (
                <div className="bg-surface-muted rounded-xl p-6 sticky top-24">
                  <h3 className="font-cormorant text-xl font-semibold mb-4">
                    Table of Contents
                  </h3>
                  
                  <nav className="space-y-2">
                    {tableOfContents.map((heading, index) => (
                      <a 
                        key={index}
                        href={`#${heading.id}`}
                        className="block py-2 px-3 rounded-lg hover:bg-gray-100 text-gray-700 hover:text-primary transition-colors"
                      >
                        {heading.title}
                      </a>
                    ))}
                  </nav>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
      
      {/* Related Articles */}
      {relatedPosts.length > 0 && (
        <section className="py-12 bg-surface-muted">
          <div className="container-custom">
            <h2 className="font-cormorant text-3xl font-bold mb-8">
              You might also like
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedPosts.map((post) => (
                <div key={post.slug} className="group h-full flex flex-col overflow-hidden rounded-xl border border-border bg-white shadow-sm hover:shadow-elevated transition-all duration-300">
                  <Link href={`/blog/${post.slug}`} className="block h-full">
                    <div className="relative overflow-hidden aspect-video">
                      <Image
                        src={post.imageSrc}
                        alt={post.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                      <div className="absolute top-3 left-3 flex gap-2">
                        <span className="bg-white/90 backdrop-blur-sm text-primary text-xs font-medium rounded-full px-3 py-1 shadow-sm">
                          {post.category}
                        </span>
                      </div>
                    </div>
                    
                    <div className="p-5 flex-grow flex flex-col">
                      <div className="flex items-center gap-4 text-xs text-gray-500 mb-3">
                        <div className="flex items-center gap-1">
                          <Calendar size={14} />
                          <span>{post.date}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock size={14} />
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                      
                      <h3 className="font-cormorant text-xl font-semibold mb-3 group-hover:text-primary transition-colors duration-300 leading-tight">
                        {post.title}
                      </h3>
                      
                      <p className="text-gray-600 text-sm mb-4 line-clamp-2">{post.excerpt}</p>
                      
                      <div className="mt-auto pt-3 border-t border-gray-100">
                        <span className="inline-flex items-center text-primary font-medium text-sm group-hover:underline">
                          Read Article
                          <ChevronRight size={16} className="ml-1 group-hover:translate-x-0.5 transition-transform" />
                        </span>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  )
}