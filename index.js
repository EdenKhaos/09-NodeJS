//create fixed variables
const inquirer = require("inquirer");
const fs = require('fs');
const axios = require("axios");
const generate = require('./utils/generateMarkdown');

// array of questions for user
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is your project title?"
    },
    {
        type: "input",
        name: "badge",
        message: "Please provide the badges links that you want:"
    },
    {
        type: "input",
        name: "description",
        message: "Please provide your project's description:"
    },
    {
        type: "type",
        name: "installation",
        message: "Please provide the installation instructions:"
    },
    {
        type: "input",
        name: "usage",
        message: "Please provide the project usage:"
    },
    {
        type: "input",
        name: "license",
        message: "Please provide the project license or your badge link:"
    },
    {
        type: "input",
        name: "contributing",
        message: "Please provide the project contributing parties:"
    },
    {
        type: "input",
        name: "test",
        message: "Please provide project tests:"
    },
    {
        type: "input",
        name: "username",
        message: "What is your github user name?"
    },
    {
        type: "input",
        name: "repo",
        message: "What is your repo link?"
    },

];
//use of inquirer node for asking commands or prompts
inquirer
    .prompt(questions)
    .then(function(data){
        const queryUrl = `https://api.github.com/users/${data.username}`;
        //use of axios node to retrieve information from an api or DOM
        axios.get(queryUrl).then(function(res) {
            const githubInfo = {
                githubImage: res.data.avatar_url,
                email: res.data.email,
                profile: res.data.html_url,
                name: res.data.name
            };
          // function to write README file
          fs.writeFile("README.md", generate(data, githubInfo), function(err){
            if (err) {
                throw err;
            };

            console.log("New README file created with success!");
          });

        });
});
          // function to write README file option 2
          // function writeToFile(fileName, data) {
          // }

// function to initialize program
function init() {

}

// function call to initialize program
init();
