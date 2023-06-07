// Function that returns a license badge based on the license
function renderLicenseBadge(license) {
  if (!license) {
    return '';
  }

  // Map license names to badge URLs
  const licenseBadges = {
    MIT: '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)',
    Apache: '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)',
    GPL: '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)',
  };

  return licenseBadges[license] || '';
}

// Function that returns the license link
function renderLicenseLink(license) {
  if (!license) {
    return '';
  }

  // Map license names to license URLs
  const licenseLinks = {
    MIT: '[MIT](https://opensource.org/licenses/MIT)',
    Apache: '[Apache](https://opensource.org/licenses/Apache-2.0)',
    GPL: '[GPL v3](https://www.gnu.org/licenses/gpl-3.0)',
  };

  return licenseLinks[license] || '';
}

// Function that returns the license section of the README
function renderLicenseSection(license) {
  if (!license) {
    return '';
  }

  return `
## License
This application is covered under the ${license} license. ${renderLicenseLink(license)}
`;
}

// Function to generate markdown for the README
function generateMarkdown(data) {
  return `# ${data.title}

${renderLicenseBadge(data.license)}

## Description
${data.description}

## Table of Contents
- [License](#license)

${renderLicenseSection(data.license)}
`;
}

module.exports = generateMarkdown;
