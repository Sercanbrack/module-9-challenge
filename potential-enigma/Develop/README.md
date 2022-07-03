# Module-9-Challenge
  Repository link: https://github.com/Sercanbrack/Module-9-Challenge
  ## Description
  This is my submission for the module 9 project.
  function tableOfContents(data) {
  if (data.tableOfContents == 'Yes') {
    let tableOfContents = `## Table of Contents
    * [Installation](#installation)
    * [Instructions](#instructions)
    * [Contributors](#contributors)
    * [Questions](#questions)
    * [License](#license)`
    return tableOfContents
  }
}
  <a name='installation'/>
  ## Installation
  The following must be installed to use this project: NPM and Inquirer
  <a name='instructions'/>
  ## Instructions
  Instructions from the developer on how to get started: "Install npm and inquirer, then open an integrated terminal in the 'Develop' folder and run 'node index.js'.
  <a name='contributors'/>
  ## Contributors
  Project contributors: Samuel Ercanbrack
  <a name='questions'/>
  ## Questions
  If you have any questions about this project, you can open an issue or reach the developer at sam.ercanbrack@outlook.com.
  function renderLicenseSection(data) {
  if (data.license !== 'Unlicensed') {
  return `<a name='license'/>
  ## License
  This project is licensed under the ${data.license} license.`
  } else {
    return ''
  }
}
  function renderLicenseBadge(data) {
  switch (data.license) {
    case 'MIT': return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
    case 'GPLv2': return `[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)`;
    case 'GPLv3': return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`;
    case 'Apache': return '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
    default: return ''
  }
}
