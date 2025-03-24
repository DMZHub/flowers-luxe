// cloudflare.js
console.log('Starting Cloudflare custom build...');

// Set environment variables to bypass Node.js version check
process.env.NEXT_IGNORE_NODE_VERSION = 'true';
process.env.SKIP_NEXTJS_NODE_VERSION_CHECK = 'true';
process.env.SKIP_NEXTJS_NODE_VERSION_WARNING = 'true';

// Run the build command with the environment variables
const { execSync } = require('child_process');

try {
  console.log('Running Next.js build with Node.js version check bypassed...');
  execSync('next build', { 
    stdio: 'inherit',
    env: { 
      ...process.env,
      NEXT_IGNORE_NODE_VERSION: 'true',
      SKIP_NEXTJS_NODE_VERSION_CHECK: 'true',
      SKIP_NEXTJS_NODE_VERSION_WARNING: 'true'
    }
  });
  console.log('Next.js build completed successfully!');
} catch (error) {
  console.error('Error during Next.js build:', error);
  process.exit(1);
}
