const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

function renderLicense(license) {
    if (license === 'MIT') {
      return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
    }
    else if (license = 'Apache 2.0') {
      return '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
    }
    else if (license === 'BSD 3-Clause'){
      return '[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)';
    }
    else if (value === 'None'){
      return 'No license selected';
    }
  };
  

const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What would you like the title to be?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please enter a description of the project.',
    },
    {
        type: 'list',
        name: 'tableContents',
        message: 'Table of Contents',
        choices: ['Installation', 'Usage', 'License Info', 'Contribution Info', 'Testing Info', 'Questions'],
    },
    {
        type: 'input',
        name: 'installation',
        message: 'How is this application installed?',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'How is this application used?',
    },
    {
        type: 'list',
        name: 'licenses',
        message: 'Please choose a license.',
        choices: ['MIT', 'Apache 2.0', 'BSD 3-Clause', 'None'],
    },
    {
        type: 'input',
        name: 'contributionGuidelines',
        message: 'Contribution Information',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Testing info',
    },
    {
        type: 'input',
        name: 'username',
        message: 'Please enter your GitHub username',
    },
    {
        type: 'input',
        name: 'email',
        message: 'Please enter you email address',
    },

];


function writeToFile(fileName, data) {
    fs.writeFile(fileName, generateMarkdown(data), function (err) {
        if (err) {
            return console.log(err);
        }
    });
}

function init() {
    inquirer.prompt(questions).then((data) => {
        console.log(JSON.stringify(data, null, ' '));
        data.renderLicense = renderLicense(data.license);
        writeToFile('./README.md', data);
    });
};

init();
