//function that returns a license badge
function renderLicenseBadge(license) {
    switch(license){
      case 'MIT':
        return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
        break;
      case 'ISC':
        return `[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)`;
        break;
      default:
        return '';
        break;
    }
  }

//funtion to return license link
function renderLicenseLink(license) {
    switch(license){
      case 'MIT':
        return `https://opensource.org/licenses/MIT`;
        break;
      case 'ISC':
        return `https://opensource.org/licenses/ISC`;
        break;
      default:
        return '';
        break;
    }
  }

//function to generate our markdown file
function generateMarkdown(data) {
    return `# ${data.projectTitle}
    ## Table of Contents
    [Description](#description)
    [Installation Instructions](#installation)
    [Usage](#usage)
    [Questions](#questions)
    [License](#license)
    <a name="description"/>
    ## Description
    * ${data.description}
    <a name="install"/>
    ## Installation
    * ${data.installation}
    <a name="usage"/>
    ## Usage
    * ${data.usage}
    <a name="questions"/>
    ## Questions
    * Profile: https://github.com/${data.userName}
    * Email: ${data.email}
    <a name="license"/>
    # License
    * ${renderLicenseBadge(data.license)}
    * Link: ${renderLicenseLink(data.license)}`;
  }

  module.exports = generateMarkdown; //exports our functions for use in another file