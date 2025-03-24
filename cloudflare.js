// cloudflare.js
console.log('Starting Cloudflare custom build...');

// Set environment variable to bypass Node.js version check
process.env.SKIP_NEXTJS_NODE_VERSION_WARNING = 'true';
process.env.SKIP_NEXTJS_NODE_VERSION_CHECK = 'true';
process.env.NEXT_IGNORE_NODE_VERSION = 'true';

// Run the build command
require('child_process').execSync('next build', { stdio: 'inherit' });