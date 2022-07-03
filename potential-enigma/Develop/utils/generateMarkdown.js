// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
let licenseBadge = function renderLicenseBadge(data) {
  switch (data.license) {
    case 'MIT': return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
    case 'GPLv2': return `[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)`;
    case 'GPLv3': return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`;
    case 'Apache': return '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
    default: return ''
  }
}
// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
let licenseSection = function renderLicenseSection(data) {
  if (data.license !== 'Unlicensed') {
  return `<a name='license'/>
  ## License
  This project is licensed under the ${data.license} license.`
  } else {
    return ''
  }
}
let tableOfContentsObject = function tableOfContents(data) {
  if (data.tableOfContents == 'Yes') {
    let tableOfContents = `## Table of Contents
    * [Installation](#installation)
    * [Instructions](#instructions)
    * [Contributors](#contributors)
    * [Questions](#questions)
    * [License](#license)`
    return tableOfContents
  } else {
    return ' '
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  
  let markdownText = `# ${data.title}
  Repository link: https://github.com/${data.username}/${data.title}
  ## Description
  ${data.description}
  ${tableOfContentsObject}
  <a name='installation'/>
  ## Installation
  The following must be installed to use this project: ${data.dependencies}
  <a name='instructions'/>
  ## Instructions
  Instructions from the developer on how to get started: "${data.instructions}
  <a name='contributors'/>
  ## Contributors
  Project contributors: ${data.credits}
  <a name='questions'/>
  ## Questions
  If you have any questions about this project, you can open an issue or reach the developer at ${data.email}.
  ${licenseSection}
  ${licenseBadge}
`;
return markdownText
}

module.exports = generateMarkdown;
