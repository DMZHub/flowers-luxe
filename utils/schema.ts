// utils/schema.ts
// Make sure to use proper export syntax

// Define types for blog post data
export interface Author {
    name: string;
    role: string;
    avatarSrc: string;
  }
  
  export interface BlogPost {
    title: string;
    excerpt: string;
    content: string;
    slug: string;
    imageSrc: string;
    date: string;
    readTime: string;
    category: string;
    author: Author;
    featured?: boolean;
    relatedPosts?: Array<{
      title: string;
      slug: string;
      imageSrc: string;
    }>;
  }
  
  /**
   * Generates structured data schema for blog posts
   */
  export function generateBlogPostSchema(blogPost: BlogPost): Record<string, any> {
    // Create the schema object following the Schema.org Article structure
    return {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": `${process.env.NEXT_PUBLIC_SITE_URL}/blog/${blogPost.slug}`
      },
      "headline": blogPost.title,
      "description": blogPost.excerpt,
      "image": `${process.env.NEXT_PUBLIC_SITE_URL}${blogPost.imageSrc}`,
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
          "url": `${process.env.NEXT_PUBLIC_SITE_URL}/images/logo.png`
        }
      },
      "datePublished": convertDisplayDateToISO(blogPost.date),
      "dateModified": convertDisplayDateToISO(blogPost.date),
      "articleBody": stripHtmlTags(blogPost.content),
      "articleSection": blogPost.category,
      "timeRequired": blogPost.readTime,
      "keywords": generateKeywords(blogPost)
    };
  }
  
  // Helper function to convert display dates like "Nov 5, 2024" to ISO format
  function convertDisplayDateToISO(displayDate: string): string {
    const date = new Date(displayDate);
    return date.toISOString();
  }
  
  // Helper function to strip HTML tags from content
  function stripHtmlTags(html: string): string {
    return html.replace(/<\/?[^>]+(>|$)/g, "");
  }
  
  // Helper function to generate keywords from the blog post
  function generateKeywords(blogPost: BlogPost): string {
    const baseKeywords = ["FlowersLuxe", "floral design", blogPost.category];
    
    // Add title words as keywords
    const titleWords = blogPost.title
      .split(' ')
      .filter(word => word.length > 3)
      .map(word => word.toLowerCase());
    
    return [...new Set([...baseKeywords, ...titleWords])].join(", ");
  }