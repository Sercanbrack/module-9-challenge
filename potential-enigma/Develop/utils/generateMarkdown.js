// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(data) {
  
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(data) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(data) {
  if (data.license !== 'Unlicensed') {
  `<a name='license'/>
  ## License
  This project is licensed under the ${data.license} license.`
  } else {
    return ''
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  let tableOfContents = ' '
  if (data.tableOfContents == 'Yes') {
    let tableOfContents = `## Table of Contents
    * [Installation](#installation)
    * [Instructions](#instructions)
    * [License](#license)
    * [Contributors](#contributors)
    * [Questions](#questions)`
    return tableOfContents
  }
  
  let markdownText = `# ${data.title}
  Repository link: https://github.com/${data.username}/${data.title}
  ## Description
  ${data.description}
  ${tableOfContents}
  <a name='installation'/>
  ## Installation
  The following must be installed to use this project: ${data.dependencies}
  <a name='instructions'/>
  ## Instructions
  Instructions from the developer on how to get started: "${data.instructions}
  ${renderLicenseSection}
  <a name='contributors'/>
  ## Contributors
  Project contributors: ${data.credits}
  <a name='questions'/>
  ## Questions
  If you have any questions about this project, you can open an issue or reach the developer at ${data.email}.
`;
}

module.exports = generateMarkdown;
