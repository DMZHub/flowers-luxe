// File: utils/generateSitemap.js
const fs = require('fs');
const path = require('path');
const glob = require('glob'); // Ensure glob is installed: npm install glob

// Update this to your actual domain
const SITE_URL = 'https://flowers-luxe.pages.dev';

async function generateSitemap() {
  console.log('Generating sitemap...');

  // Create a simple sitemap structure with main pages
  const mainPages = [
    { url: '/', lastmod: new Date().toISOString(), priority: '1.0', changefreq: 'weekly' },
    { url: '/about', lastmod: new Date().toISOString(), priority: '0.8', changefreq: 'monthly' },
    { url: '/shop', lastmod: new Date().toISOString(), priority: '0.9', changefreq: 'weekly' },
    { url: '/blog', lastmod: new Date().toISOString(), priority: '0.8', changefreq: 'weekly' },
    { url: '/contact', lastmod: new Date().toISOString(), priority: '0.7', changefreq: 'monthly' },
    // Add shop categories
    { url: '/shop/category/throw-pillows', lastmod: new Date().toISOString(), priority: '0.7', changefreq: 'monthly' },
    { url: '/shop/category/stickers', lastmod: new Date().toISOString(), priority: '0.7', changefreq: 'monthly' },
    { url: '/shop/category/mugs', lastmod: new Date().toISOString(), priority: '0.7', changefreq: 'monthly' },
    { url: '/shop/category/art', lastmod: new Date().toISOString(), priority: '0.7', changefreq: 'monthly' },
    { url: '/shop/category/tote-bags', lastmod: new Date().toISOString(), priority: '0.7', changefreq: 'monthly' },
    { url: '/shop/category/tapestries', lastmod: new Date().toISOString(), priority: '0.7', changefreq: 'monthly' },
    { url: '/shop/category/pins', lastmod: new Date().toISOString(), priority: '0.7', changefreq: 'monthly' },
  ];

  // Add known blog posts manually
  const knownBlogPosts = [
    { url: '/blog/floral-themed-workspace', lastmod: new Date().toISOString(), priority: '0.7', changefreq: 'monthly' },
    
  ];

  // Try to find blog posts dynamically
  let dynamicBlogPosts = [];
  try {
    // Look for files in the app/blog directory that might be blog posts
    const blogPostPaths = glob.sync('app/blog/*/page.tsx');
    
    // Convert file paths to URLs
    dynamicBlogPosts = blogPostPaths.map(file => {
      // Extract the slug from the file path
      // This converts 'app/blog/some-post/page.tsx' to 'some-post'
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
    // Continue with known blog posts if dynamic search fails
  }

  // Combine all pages, removing duplicates
  const allUrls = [...mainPages.map(p => p.url), ...knownBlogPosts.map(p => p.url), ...dynamicBlogPosts.map(p => p.url)];
  const uniqueUrls = [...new Set(allUrls)];
  
  // Create the final list of pages, preferring known pages over dynamic ones for duplicates
  const allPages = mainPages.concat(
    knownBlogPosts,
    dynamicBlogPosts.filter(p => !allUrls.includes(p.url) || allUrls.indexOf(p.url) === allUrls.lastIndexOf(p.url))
  );

  // Create sitemap XML content
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allPages
  .map(
    (page) => `  <url>
    <loc>${SITE_URL}${page.url}</loc>
    <lastmod>${page.lastmod}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`
  )
  .join('\n')}
</urlset>`;

  // Ensure public directory exists
  const publicDir = path.join(process.cwd(), 'public');
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }

  // Write sitemap.xml to public directory
  fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), sitemap);
  console.log('Sitemap generated at public/sitemap.xml');
}

module.exports = { generateSitemap };

// If this script is run directly
if (require.main === module) {
  generateSitemap()
    .then(() => console.log('Done!'))
    .catch(error => {
      console.error('Failed:', error);
      process.exit(1);
    });
}
