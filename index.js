#!/usr/bin/env node
const fs = require('fs');
const projectName = process.argv[2];
const CURR_DIR = process.cwd();
const templatePath = `${__dirname}\\templates`;

// Make the project directory
fs.mkdirSync(`${CURR_DIR}/${projectName}`);

createDirectoryContents(templatePath, projectName);

// Core function...
function createDirectoryContents(templatePath, projectName) {
  const filesToCreate = fs.readdirSync(templatePath);
  filesToCreate.forEach(file => {
    // Create each file inside projectName directory
    const origFilePath = `${templatePath}/${file}`;
    const stats = fs.statSync(origFilePath);

    if (stats.isFile()) {
      const contents = fs.readFileSync(origFilePath, 'utf8');
      if (file === '.npmignore') file = '.gitignore';
      const writePath = `${CURR_DIR}/${projectName}/${file}`;
      fs.writeFileSync(writePath, contents, 'utf8');
    } else if (stats.isDirectory()) {
      fs.mkdirSync(`${CURR_DIR}/${projectName}/${file}`);

      // Recursive Call
      createDirectoryContents(
        `${templatePath}/${file}`,
        `${projectName}/${file}`
      );
    }
  });
}

console.log('DONE...Happy Coding 🌟');
