#!/usr/bin/env node
/**
 * Simple build script for Cloudflare Pages
 */
const { execSync } = require('child_process');

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
  
  // Run sitemap generation if it exists
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
  
  console.log('Build completed successfully!');
} catch (error) {
  console.error('Build failed:', error.message);
  process.exit(1);
}
