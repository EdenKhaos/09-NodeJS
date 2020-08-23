// function to generate markdown for README
function generateMarkdown(data, githubInfo) { //markdown data to be generated for README
  return `
  # **${data.title}**

  ${data.badge}

  ## Description

  ${data.description}

  ## Table of Contents

  - [Description](#Description)
  - [Installation](#Installation)
  - [Usage](#Usage)
  - [Licence](#Licence)
  - [Contributors](#Contributors)
  - [Test](#Test)
  - [Repository Link](#Repository)
  - [Github Info](#Github)

  ## Installation

  ${data.installation}

  ## Usage

  ${data.usage}

  ## Licence

  ${data.licence}

  ## Contributors

  ${data.contributing}

  ## Test

  ${data.test}

  ## Repository

  - [Project Repo](${data.repo})

  ## Github

  ![image of me](${githubInfo.githubImage})
  - ${githubInfo.name}
  - [Github Profile](${githubInfo.profile})
  - <${githubInfo.email}>

`;
}

module.exports = generateMarkdown;
