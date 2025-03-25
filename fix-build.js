#!/usr/bin/env node
// fix-build.js - Direct approach to fix package.json and rebuild package-lock.json
const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('Starting build fix...');

// Path to package.json
const packageJsonPath = path.join(__dirname, 'package.json');

// Read package.json
try {
  const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
  console.log('Successfully read package.json');
  
  // Update next version to match package-lock.json
  packageJson.dependencies.next = "^15.1.7";
  
  // Remove Cloudflare dependencies that are causing conflicts
  delete packageJson.dependencies['@cloudflare/next-on-pages'];
  
  // Update scripts to simplify build process
  packageJson.scripts.build = "next build";
  packageJson.scripts.prebuild = "npm run sitemap";
  packageJson.scripts.cloudflare = "node cloudflare-build.js";
  
  // Add a special install script for Cloudflare
  packageJson.scripts.cfinstall = "npm install --no-package-lock && npm install";
  
  // Write updated package.json
  fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));
  console.log('Successfully updated package.json');
  
  // Force install dependencies
  console.log('Installing dependencies (this may take a minute)...');
  try {
    // Force clean install
    execSync('npm install --no-package-lock', { stdio: 'inherit' });
    execSync('npm install', { stdio: 'inherit' });
    console.log('Successfully installed dependencies');
  } catch (error) {
    console.error('Error installing dependencies:', error.message);
  }
  
  console.log('Build fix complete!');
} catch (error) {
  console.error('Error:', error.message);
  process.exit(1);
}
