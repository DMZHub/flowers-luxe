// File: utils/generateSitemap.js

const fs = require('fs');
const path = require('path');
const { globby } = require('globby');

// Define the base URL of your site
const SITE_URL = 'https://www.flowersluxe.com';

/**
 * Creates a simple sitemap for a static Next.js site
 */
async function generateSitemap() {
  console.log('Generating sitemap...');

  // Define priority and change frequency for different page types
  const pagePriorities = {
    home: { priority: 1.0, changefreq: 'weekly' },
    shop: { priority: 0.9, changefreq: 'weekly' },
    blog: { priority: 0.9, changefreq: 'weekly' },
    about: { priority: 0.8, changefreq: 'monthly' },
    category: { priority: 0.8, changefreq: 'weekly' },
    blogPost: { priority: 0.7, changefreq: 'monthly' },
    legal: { priority: 0.5, changefreq: 'yearly' }
  };

  // Current date for lastmod
  const currentDate = new Date().toISOString().split('T')[0];

  try {
    // Find all page.tsx files (representing routes)
    const pages = await globby([
      'app/**/page.tsx',
      '!app/api/**'  // exclude API routes
    ]);

    // Start building the sitemap
    let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
`;

    // Process all static and dynamic pages
    for (const page of pages) {
      // Convert file path to URL path
      let urlPath = page
        .replace('app', '')
        .replace('/page.tsx', '')
        .replace(/\/\[(.+)\]/, ''); // Remove dynamic parameters for now
      
      // Handle index route
      if (urlPath === '') urlPath = '/';
      
      // Skip if this is a dynamic route with parameters
      // We'll handle blog posts and categories separately
      if (urlPath.includes('[') || urlPath.includes('(')) continue;
      
      // Determine page type for priority and change frequency
      let pageType = 'legal';
      if (urlPath === '/') pageType = 'home';
      else if (urlPath === '/shop') pageType = 'shop';
      else if (urlPath === '/blog') pageType = 'blog';
      else if (urlPath === '/about') pageType = 'about';
      else if (urlPath.includes('/privacy-policy') || urlPath.includes('/terms-conditions')) pageType = 'legal';
      
      // Add to sitemap
      sitemap += `  <url>
    <loc>${SITE_URL}${urlPath}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>${pagePriorities[pageType].changefreq}</changefreq>
    <priority>${pagePriorities[pageType].priority}</priority>
  </url>
`;
    }

    // Find actual blog post directories
    const blogDirs = await globby(['app/blog/*'], {
      onlyDirectories: true,
      ignore: ['app/blog/api']
    });

    // Add blog posts based on directory structure
    for (const dir of blogDirs) {
      const slug = path.basename(dir);
      
      // Skip if not an actual blog post
      if (slug === 'api' || slug.startsWith('[') || slug.startsWith('(')) continue;
      
      sitemap += `  <url>
    <loc>${SITE_URL}/blog/${slug}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>${pagePriorities.blogPost.changefreq}</changefreq>
    <priority>${pagePriorities.blogPost.priority}</priority>
  </url>
`;
    }

    // Find category directories
    const categoryDirs = await globby(['app/shop/category/*'], {
      onlyDirectories: true
    });

    // Add categories
    for (const dir of categoryDirs) {
      const slug = path.basename(dir);
      
      // Skip if not an actual category
      if (slug.startsWith('[') || slug.startsWith('(')) continue;
      
      sitemap += `  <url>
    <loc>${SITE_URL}/shop/category/${slug}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>${pagePriorities.category.changefreq}</changefreq>
    <priority>${pagePriorities.category.priority}</priority>
  </url>
`;
    }

    // Close sitemap
    sitemap += `</urlset>`;

    // Write the file to public directory
    const publicDir = path.join(process.cwd(), 'public');
    if (!fs.existsSync(publicDir)) {
      fs.mkdirSync(publicDir, { recursive: true });
    }

    fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), sitemap);
    console.log('Sitemap generated successfully at public/sitemap.xml!');
    
    return { success: true };
  } catch (error) {
    console.error('Error generating sitemap:', error);
    throw error;
  }
}

// Export for use in other files
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