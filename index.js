const fs = require("fs");
// const axios = require("axios"); not needed 
const inquirer = require("inquirer");
// const generateMarkdown = require("./utils/generateMarkdown.js");

const questions = [
    {
        "message": "What is your github id?",
        "type": "input",
        "name": "username"
    },
    {
        "message": "What's the project repo name?",
        "type": "input",
        "name": "project"
    },
    {
        "message": "What's the project title?",
        "type": "input",
        "name": "projectTitle",
        "default": "No Project Title Provided"
    },
    {
        "message": "What's the project description?",
        "type": "input",
        "name": "projectDescription",
        "default": "No Description Provided"
    },
    {
        "message": "What are the installation instructions?",
        "type": "input",
        "name": "installationInsctructions",
        "default": "No Installation Instructions Provided"
    },
    {
        "message": "How do you run the application?",
        "type": "input",
        "name": "usage",
        "default": "No Usage Instructions Provided"
    },
    {
        "message": "Which license do you want to use for this project?",
        "type": "list",
        "name": "license",
        "default": "MIT License"
    },
    {
        "message": "How do you run the tests?",
        "type": "input",
        "name": "tests",
        "default": "No Testing"
    },
    {
        "message": "What is the email address of the repo owner?",
        "type": "input",
        "name": "email",
        "default":  "mory.d192@gmail.com"
    },
];

function init() {
inquirer.prompt(questions).then((response)=>{

// this will Create the first line and main header for the repo (that is what the "# " is for) using the users resonse to RepoName
fs.appendFileSync("README.md", ("# " + response.repoName )+ '\n', function(err) { 

    if (err) { 
    console.log(err)
    }
    else {
    console.log("Success")
    }

})
// this will create the 2nd line of readme discribing the application was developed by the users reponse to githubname 
fs.appendFileSync("README.md", ("This application was developed by: " + response.gitHubName + '\n') + '\n', function(err) { 

    if (err) { 
    console.log(err)
    }
    else {
    console.log("Success")
    }

})
// adds the discription of the project that the users entered 
fs.appendFileSync("README.md", ( response.description ) + '\n', function(err) { 

    if (err) { 
    console.log(err)
    }
    else {
    console.log("Success")
    }

})
//creates a sub header for installation and adds the instructions the users entered 
fs.appendFileSync("README.md", ("## Installation" + '\n' + response.installApp )+ '\n', function(err) { 

    if (err) { 
    console.log(err)
    }
    else {
    console.log("Success")
    }

})
// creates a sub header for App usage and adds the instructions the users entered 
fs.appendFileSync("README.md", ("## How to use the Application" + '\n' + response.appInstructions)+ '\n', function(err) { 

    if (err) { 
    console.log(err)
    }
    else {
    console.log("Success")
    }

})
// creates a sub header for issue reporting and contriubiting and adds the instructions the users entered 
fs.appendFileSync("README.md", ("## Issue Reporting and Contributing" + '\n' + response.appIssuesAndCont)+ '\n', function(err) { 

    if (err) { 
    console.log(err)
    }
    else {
    console.log("Success")
    }

})
// creates a sub header for issue reporting and contriubiting and adds the instructions the users entered 
fs.appendFileSync("README.md", ("## Other Contibuting Developers:" + '\n' + response.contributors)+ '\n', function(err) { 

    if (err) { 
    console.log(err)
    }
    else {
    console.log("Success")
    }

})
// creates a sub header for licences and adds the licences the users entered 
fs.appendFileSync("README.md", ("## Licence(s)" + '\n' + response.license)+ '\n', function(err) { 

    if (err) { 
    console.log(err)
    }
    else {
    console.log("Success")
    }

})

})
}

//runs the function to creat the file 
init();


//-------------------------------------------------------------------------------------------------------------------------------------------------


//for testing purposes: 

//Shows waht the resposne for the questions were. 
// console.log(response)
// console.log(response.gitHubName)
// console.log(response.repoName)
// console.log(response.description)
// console.log(response.appInstructions)
// console.log(response.appIssuesAndCont)
// console.log(response.license)
// console.log(response.contributors)
