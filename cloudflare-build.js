#!/usr/bin/env node
/**
 * Simple build script for Cloudflare Pages
 */
const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('Running Cloudflare Pages build...');

// Set environment variables
process.env.NEXT_IGNORE_NODE_VERSION = 'true';
process.env.SKIP_NEXTJS_NODE_VERSION_CHECK = 'true';

try {
  // Skip the package-lock check and just install directly
  console.log('Installing dependencies...');
  execSync('npm install --no-package-lock', { 
    stdio: 'inherit',
    env: { 
      ...process.env,
      NEXT_IGNORE_NODE_VERSION: 'true',
      SKIP_NEXTJS_NODE_VERSION_CHECK: 'true'
    }
  });
  
  // Run sitemap generation to create a static sitemap file
  try {
    console.log('Generating sitemap...');
    execSync('node utils/generateSitemap.js', { stdio: 'inherit' });
  } catch (e) {
    console.log('Sitemap generation skipped or failed, continuing...');
  }
  
  // Build Next.js site
  console.log('Building Next.js site...');
  execSync('next build', { 
    stdio: 'inherit',
    env: { 
      ...process.env,
      NEXT_IGNORE_NODE_VERSION: 'true',
      SKIP_NEXTJS_NODE_VERSION_CHECK: 'true'
    }
  });
  
  // Copy the static sitemap to the output directory if it exists
  const publicSitemap = path.join(process.cwd(), 'public', 'sitemap.xml');
  const outSitemap = path.join(process.cwd(), 'out', 'sitemap.xml');
  
  if (fs.existsSync(publicSitemap) && !fs.existsSync(outSitemap)) {
    console.log('Copying sitemap.xml to output directory...');
    fs.copyFileSync(publicSitemap, outSitemap);
  }
  
  console.log('Build completed successfully!');
} catch (error) {
  console.error('Build failed:', error.message);
  process.exit(1);
}
