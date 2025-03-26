// File: utils/generateSitemap.js
const fs = require('fs');
const path = require('path');

// Define the base URL of your site
const SITE_URL = 'https://www.flowersluxe.com';

/**
 * Creates a simple sitemap for a static Next.js site
 */
async function generateSitemap() {
  console.log('Generating sitemap...');

  // Create a simple sitemap structure
  const pages = [
    { url: '/', lastmod: new Date().toISOString(), priority: '1.0', changefreq: 'weekly' },
    { url: '/about', lastmod: new Date().toISOString(), priority: '0.8', changefreq: 'monthly' },
    { url: '/shop', lastmod: new Date().toISOString(), priority: '0.9', changefreq: 'weekly' },
    { url: '/blog', lastmod: new Date().toISOString(), priority: '0.8', changefreq: 'weekly' },
    { url: '/contact', lastmod: new Date().toISOString(), priority: '0.7', changefreq: 'monthly' },
  ];

  // Create sitemap XML content
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages
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
