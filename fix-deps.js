// fix-deps.js
const fs = require('fs');
const path = require('path');

console.log('Running dependency fix script...');

// Path to package.json
const packageJsonPath = path.join(__dirname, 'package.json');

// Read package.json
let packageJson;
try {
  packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
  console.log('Successfully read package.json');
} catch (error) {
  console.error('Error reading package.json:', error);
  process.exit(1);
}

// Update dependencies
packageJson.dependencies = {
  ...packageJson.dependencies,
  'next': '^15.1.7', // Match the version in package-lock.json
};

// Clean up any inconsistent dependencies
if (packageJson.dependencies['@cloudflare/next-on-pages']) {
  delete packageJson.dependencies['@cloudflare/next-on-pages'];
  console.log('Removed @cloudflare/next-on-pages from dependencies');
}

// Update scripts
packageJson.scripts = {
  ...packageJson.scripts,
  'prebuild': 'npm run sitemap',
  'build': 'next build'
};

// Write updated package.json
try {
  fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));
  console.log('Successfully updated package.json');
} catch (error) {
  console.error('Error writing package.json:', error);
  process.exit(1);
}

// Remove package-lock.json to force regeneration
const packageLockPath = path.join(__dirname, 'package-lock.json');
try {
  if (fs.existsSync(packageLockPath)) {
    fs.unlinkSync(packageLockPath);
    console.log('Successfully removed package-lock.json');
  }
} catch (error) {
  console.error('Error removing package-lock.json:', error);
}

console.log('Dependency fix complete! Run "npm install" to regenerate package-lock.json');
