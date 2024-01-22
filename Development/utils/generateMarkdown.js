// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

##Description
${data.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Licenses](#licenses)
- [Contribution Info](#contributionGuidelines)
- [Testing Info](#tests)
- [Repository Link](#Github)
- [Email](#email)

## Installation
${data.installation}

## Usage
${data.usage}

## License
${data.licenses}

## Contribution Info
${data.contributionGuideLines}

## Testing Info
${data.tests}

## Questions
[Github Repo](#{data.Github})
[Email](#{data.email})
`;
}

module.exports = generateMarkdown;
