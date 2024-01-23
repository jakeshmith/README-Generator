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
[Github Repo](${data.username})
[Email](${data.email})
`;
}

module.exports = 
generateMarkdown;
