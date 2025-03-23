// File: scripts/install-deps.js

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

// Check if a package is already installed
function isPackageInstalled(packageName) {
  try {
    require.resolve(packageName);
    return true;
  } catch (e) {
    return false;
  }
}

// Main function to install dependencies
function installDependencies() {
  console.log('Checking and installing missing dependencies...');
  
  const dependencies = [
    '@emailjs/browser',
    'globby'
  ];
  
  const devDependencies = [
    '@types/prettier'
  ];
  
  // Install missing regular dependencies
  for (const dep of dependencies) {
    if (!isPackageInstalled(dep)) {
      console.log(`Installing missing dependency: ${dep}`);
      try {
        execSync(`npm install ${dep}`, { stdio: 'inherit' });
      } catch (error) {
        console.error(`Failed to install ${dep}:`, error.message);
      }
    }
  }
  
  // Install missing dev dependencies
  for (const dep of devDependencies) {
    if (!isPackageInstalled(dep)) {
      console.log(`Installing missing dev dependency: ${dep}`);
      try {
        execSync(`npm install -D ${dep}`, { stdio: 'inherit' });
      } catch (error) {
        console.error(`Failed to install ${dep}:`, error.message);
      }
    }
  }
  
  console.log('Dependency check complete!');
}

// Run the function
installDependencies();