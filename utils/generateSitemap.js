// File: utils/generateSitemap.js
const fs = require('fs');
const path = require('path');
// Fix for ESM module issue with globby
// Instead of using globby, use a simpler approach with fs

// Update this to your actual domain
const SITE_URL = 'https://flowers-luxe.pages.dev';

async function generateSitemap() {
  console.log('Generating sitemap...');

  try {
    // Create a simple sitemap structure with main pages
    const mainPages = [
      { url: '/', lastmod: new Date().toISOString(), priority: '1.0', changefreq: 'weekly' },
      { url: '/shop', lastmod: new Date().toISOString(), priority: '0.9', changefreq: 'weekly' },
      { url: '/blog', lastmod: new Date().toISOString(), priority: '0.8', changefreq: 'weekly' },
      { url: '/about', lastmod: new Date().toISOString(), priority: '0.8', changefreq: 'monthly' },
      { url: '/contact', lastmod: new Date().toISOString(), priority: '0.7', changefreq: 'monthly' },
    ];

    // Add category pages - read from the categoryMappings export if available
    let categoryPages = [];
    try {
      const categoriesPath = path.join(process.cwd(), 'utils', 'products.js');
      if (fs.existsSync(categoriesPath)) {
        // Simple string search for category slugs rather than trying to import the module
        const fileContent = fs.readFileSync(categoriesPath, 'utf8');
        const categoryMatch = fileContent.match(/categoryMappings.*?{([^}]*)}/s);
        
        if (categoryMatch && categoryMatch[1]) {
          // Extract category slugs from the match using a simple regex
          const slugRegex = /'([a-z-]+)':/g;
          let match;
          while ((match = slugRegex.exec(categoryMatch[1])) !== null) {
            categoryPages.push({
              url: `/shop/category/${match[1]}`,
              lastmod: new Date().toISOString(),
              priority: '0.8',
              changefreq: 'weekly'
            });
          }
        }
      }
    } catch (error) {
      console.error('Error adding category pages:', error);
      // Continue with what we have
    }

    // Add custom product pages - this is a simplification
    const customPages = [
      { url: '/custom/custom-flower-mug-best-gift-for-new-moms', lastmod: new Date().toISOString(), priority: '0.7', changefreq: 'weekly' },
      { url: '/custom/personalized-name-floral-mug', lastmod: new Date().toISOString(), priority: '0.7', changefreq: 'weekly' },
      // Add more custom pages as needed
    ];

    // Combine all pages
    const allPages = [...mainPages, ...categoryPages, ...customPages];

    // Create the XML structure
    const xmlHeader = '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">';
    const xmlFooter = '\n</urlset>';
    
    const xmlContent = allPages.map(page => `
  <url>
    <loc>${SITE_URL}${page.url}</loc>
    <lastmod>${page.lastmod}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`).join('');

    const fullXml = xmlHeader + xmlContent + xmlFooter;

    // Write sitemap file
    const publicDir = path.join(process.cwd(), 'public');
    if (!fs.existsSync(publicDir)) {
      fs.mkdirSync(publicDir, { recursive: true });
    }

    const sitemapPath = path.join(publicDir, 'sitemap.xml');
    fs.writeFileSync(sitemapPath, fullXml);
    
    console.log(`Sitemap generated at ${sitemapPath}`);
    
    return { success: true, message: 'Sitemap generated successfully' };
    
  } catch (error) {
    console.error('Error generating sitemap:', error);
    return { success: false, message: error.message };
  }
}

// Make it usable as a module or directly
module.exports = { generateSitemap };

if (require.main === module) {
  generateSitemap()
    .then(result => {
      console.log('Result:', result);
      if (!result.success) process.exit(1);
    })
    .catch(error => {
      console.error('Failed:', error);
      process.exit(1);
    });
}
