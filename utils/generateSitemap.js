// File: utils/generateSitemap.js

const fs = require('fs');
const path = require('path');
// Remove the CommonJS require
// const { globby } = require('globby');

// Define the base URL of your site
const SITE_URL = 'https://www.flowersluxe.com';

/**
 * Creates a simple sitemap for a static Next.js site
 */
async function generateSitemap() {
  console.log('Generating sitemap...');

  // Import globby dynamically
  const { globby } = await import('globby');

  // Rest of your code remains the same...
  // ...
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