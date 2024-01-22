// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generate = require('')
// TODO: Create an array of questions for user input
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
        choices: ['MIT', '']
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
        name: 'GitHub',
        message: 'Please enter your GitHub username',
    },
    {
        type: 'input',
        name: 'email',
        message: 'Please enter you email address',
    },

];
inquirer
.prompt(questions)
.then((response) =>
{fs.writeFile('README.md',generate(data), function(err) {
    if (err) {
        throw err;
    };
    console.log('Successfully created a new README!');
});
});
    console.log(response)

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
