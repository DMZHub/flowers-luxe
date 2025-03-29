// File: utils/generateSitemap.js
const fs = require('fs');
const path = require('path');
const globby = require('globby'); // Use globby instead of glob

// Update this to your actual domain
const SITE_URL = 'https://flowers-luxe.pages.dev';

async function generateSitemap() {
  console.log('Generating sitemap...');

  // Create a simple sitemap structure with main pages
  const mainPages = [
    // Your existing pages...
  ];

  // Add known blog posts manually
  const knownBlogPosts = [
    // Your known blog posts...
  ];

  // Try to find blog posts dynamically
  let dynamicBlogPosts = [];
  try {
    // With globby, use await and patterns work slightly differently
    const blogPostPaths = await globby(['app/blog/*/page.tsx']);
    
    // Convert file paths to URLs
    dynamicBlogPosts = blogPostPaths.map(file => {
      const slug = file.replace('app/blog/', '').replace('/page.tsx', '');
      
      return {
        url: `/blog/${slug}`,
        lastmod: new Date().toISOString(),
        priority: '0.7',
        changefreq: 'monthly'
      };
    });
    
    console.log(`Found ${dynamicBlogPosts.length} dynamic blog posts`);
  } catch (error) {
    console.error('Error finding dynamic blog posts:', error);
  }

  // Rest of your sitemap generation code...
}

// Since we're using async/await, update the execution
module.exports = { generateSitemap };

if (require.main === module) {
  generateSitemap()
    .then(() => console.log('Done!'))
    .catch(error => {
      console.error('Failed:', error);
      process.exit(1);
    });
}
