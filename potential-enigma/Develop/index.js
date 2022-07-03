// TODO: Include packages needed for this application
const fs = require('fs')
const inquirer = require('inquirer');
const { kill } = require('process');


const generateMarkdown = require('./utils/generateMarkdown')

// TODO: Create an array of questions for user input
const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'What is the title of your project?'
  },
  {
    type: 'input',
    name: 'description',
    message: 'Please give a brief description of your project.'
  },
  {
    type: 'list',
    name: 'tableOfContents',
    message: 'Would you like to add a Table of Contents to your README file?',
    choices: [
      'Yes',
      'No',
    ],
    default() {
      return 'Yes';
    },
  },
  {
    type: 'input',
    name: 'dependencies',
    message: 'What is the user required to have installed to use your project (dependencies)?'
  },
  {
    type: 'input',
    name: 'instructions',
    message: 'Please give some basic instructions on how to use your project.',
  },
  {
    type: 'input',
    name: 'credits',
    message: 'Who were the contributors to this project?'
  },
  {
    type: 'list',
    name: 'license',
    message: "Choose which license your project will use. If none, select 'Unlicensed'.",
    choices: [
      'Unlicensed',
      'MIT',
      'GPLv2',
      'GPLv3',
      'Apache',
    ],
    default () {
      return 'MIT'
    },
  },
  {
    type: 'input',
    name: 'username',
    message: 'What is your GitHub username?'
  },
  {
    type: 'input',
    name: 'email',
    message: 'What is your email address?'
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if (err) {
          console.error(err);
        } else {
          console.log('Thank you for your time. Your README file has been generated!')
        }
      });
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions)
    .then(function(data) {
      writeToFile("README.md", generateMarkdown(data),
      console.log(data))
    })
  };


// Function call to initialize app
init();
