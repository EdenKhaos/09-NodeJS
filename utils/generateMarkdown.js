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
  - [License](#Licence)
  - [Contributors](#Contributors)
  - [Test](#Test)
  - [Questions](#Questions)
  - [Repository Link](#Repository)
  - [Github Info](#Github)
  - [Badges](#Badges)

  ## Installation

  ${data.installation}

  ## Usage

  ${data.usage}

  ## License

  ${data.license}

  ## Contributors

  ${data.contributing}

  ## Test

  ${data.test}

  ## Questions
  If you have any questions, contact ${data.username} on GitHub.

  ## Repository

  - [Project Repo](${data.repo})

  ## Github

  ![image of me](${githubInfo.githubImage})
  - ${githubInfo.name}
  - [Github Profile](${githubInfo.profile})
  - <${githubInfo.email}>

  ## Badges
![badmath](https://img.shields.io/github/repo-size/${data.username}/${data.repo})


`;
}

module.exports = generateMarkdown;
