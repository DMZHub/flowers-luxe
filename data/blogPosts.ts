export interface BlogPost {
  id: string
  title: string
  excerpt: string
  slug: string
  category: string
  categorySlug: string
  date: string
  readTime: string
  imageSrc: string
  featured: boolean
}

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'How to Style Flower Throw Pillows in Your Living Room',
    excerpt: 'Discover expert tips for incorporating flower throw pillows into your living space. Learn about color coordination, pattern mixing, and seasonal updates.',
    slug: 'how-to-style-flower-throw-pillows-living-room',
    category: 'Home Decor',
    categorySlug: 'home-decor',
    date: 'March 15, 2025',
    readTime: '6 min read',
    imageSrc: '/images/blog/styling-flower-pillows-living-room.webp',
    featured: false
  },
  {
  id: '2',
  title: 'What Color Pillows Go With a Gray Couch? (Stylish Ideas)',
  excerpt: 'A complete guide to choosing pillow colors for gray sofas—undertones, formulas, pattern mixing, seasonal swaps, and 8 real floral examples.',
  slug: 'what-color-pillows-go-with-a-gray-couch',
  category: 'Home Decor',
  categorySlug: 'home-decor',
  date: 'August 8, 2025',
  readTime: '11 min read',
  imageSrc: '/images/blog/gray-couch/gray-couch-usa-flag-floral-pillows.webp',
  featured: true
},
{
  id: '3',
  title: 'What Kind of Pillows Go With a Leather Couch',
  excerpt: 'Learn how to choose the perfect pillows for your leather sofa. Discover texture combinations, color palettes, and styling tips that complement leather furniture.',
  slug: 'what-kind-of-pillows-go-with-a-leather-couch',
  category: 'Home Decor',
  categorySlug: 'home-decor',
  date: 'August 11, 2025',
  readTime: '16 min read',
  imageSrc: '/images/blog/leather-couch/cognac-pillow-leather-sectional.webp',
  featured: true
},
{
  id: '4',
  title: 'What Color Pillows Go With Cream Sofa',
  excerpt: 'Explore beautiful color combinations for cream sofas. From bold accent colors to subtle neutrals, find the perfect pillow palette for your cream furniture.',
  slug: 'what-color-pillows-go-with-cream-sofa',
  category: 'Home Decor',
  categorySlug: 'home-decor',
  date: 'August  11, 2025',
  readTime: '16 min read',
  imageSrc: '/images/blog/cream-sofa-decor/cream-sofa-with-orange-floral-pillows.webp',
  featured: true
},
{
  id: '5',
  title: 'What Color Pillows Go With a Navy Blue Couch',
  excerpt: 'Discover stunning pillow color combinations for navy blue sofas. Get inspired with complementary colors, patterns, and styling ideas for your navy furniture.',
  slug: 'what-color-pillows-go-with-a-navy-blue-couch',
  category: 'Home Decor',
  categorySlug: 'home-decor',
  date: 'April 10, 2025',
  readTime: '14 min read',
  imageSrc: '/images/blog/navy-blue-couch/navy-blue-couch-pillow-ideas.webp',
  featured: true
}

]

// Helper functions
export const getFeaturedBlogPosts = () => {
  return blogPosts.filter(post => post.featured)
}

export const getRecentBlogPosts = () => {
  return blogPosts.filter(post => !post.featured)
}

export const getBlogPostsByCategory = (categorySlug: string) => {
  return blogPosts.filter(post => post.categorySlug === categorySlug)
}

export const getBlogPostBySlug = (slug: string) => {
  return blogPosts.find(post => post.slug === slug)
}

export const getBlogCategoryCount = (categorySlug: string) => {
  return blogPosts.filter(post => post.categorySlug === categorySlug).length

}

