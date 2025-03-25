 #!/usr/bin/env node
/**
 * Custom build script for Cloudflare Pages
 */
const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

// Print Node.js version for debugging
console.log('Using Node.js version:', process.version);

// Set environment variables to bypass Next.js version checks
process.env.NEXT_IGNORE_NODE_VERSION = 'true';
process.env.SKIP_NEXTJS_NODE_VERSION_CHECK = 'true';
process.env.SKIP_NEXTJS_NODE_VERSION_WARNING = 'true';

// Execute commands
try {
  // Run sitemap generation if the script exists
  if (fs.existsSync(path.join(__dirname, 'utils', 'generateSitemap.js'))) {
    console.log('Generating sitemap...');
    execSync('node utils/generateSitemap.js', { stdio: 'inherit' });
  }

  // Build Next.js site
  console.log('Building Next.js site...');
  execSync('next build', { 
    stdio: 'inherit',
    env: { 
      ...process.env,
      NEXT_IGNORE_NODE_VERSION: 'true',
      SKIP_NEXTJS_NODE_VERSION_CHECK: 'true',
      SKIP_NEXTJS_NODE_VERSION_WARNING: 'true'
    }
  });

  console.log('Build completed successfully!');
} catch (error) {
  console.error('Build failed:', error.message);
  process.exit(1);
}
