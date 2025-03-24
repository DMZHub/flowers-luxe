// cloudflare.js
console.log('Starting Cloudflare custom build...');

// First, explicitly set the environment variables to bypass Next.js Node version check
process.env.NEXT_IGNORE_NODE_VERSION = 'true';
process.env.SKIP_NEXTJS_NODE_VERSION_CHECK = 'true';
process.env.SKIP_NEXTJS_NODE_VERSION_WARNING = 'true';

// Then patch the Next.js file that does the version check
const fs = require('fs');
const path = require('path');

try {
  // Find the node_modules/next directory
  const nextPath = path.resolve('node_modules/next');
  const nextDistPath = path.join(nextPath, 'dist');
  
  // Path to the file that likely contains the Node.js version check
  const checkFilePath = path.join(nextDistPath, 'server', 'lib', 'patch-incorrect-node-version.js');
  
  if (fs.existsSync(checkFilePath)) {
    // Read the file
    let content = fs.readFileSync(checkFilePath, 'utf8');
    
    // Replace the content with a no-op version
    content = `
// File patched by cloudflare.js build script
module.exports = function() {
  // Do nothing, bypass Node.js version check
  console.log('Node.js version check bypassed');
};
`;
    
    // Write the patched file
    fs.writeFileSync(checkFilePath, content);
    console.log('Successfully patched Node.js version check in Next.js');
  } else {
    console.log('Could not find Next.js Node.js version check file. It may have moved in this version.');
  }
} catch (error) {
  console.error('Error patching Next.js Node.js version check:', error);
}

// Run the build command
require('child_process').execSync('next build', { stdio: 'inherit' });