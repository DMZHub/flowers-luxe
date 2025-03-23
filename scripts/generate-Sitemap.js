// File: scripts/generate-sitemap.js

const path = require('path');

// Use path.resolve to correctly find the module relative to the project root
const { generateSitemap } = require(path.resolve('./utils/generateSitemap'));

async function run() {
  console.log('Starting sitemap generation...');
  
  try {
    await generateSitemap();
    console.log('✅ Sitemap generated successfully!');
  } catch (error) {
    console.error('❌ Error generating sitemap:', error);
    process.exit(1);
  }
}

run();