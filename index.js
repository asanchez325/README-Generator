// External packages
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');

// Internal modules
const generateMarkdown = require('./utils/generateMarkdown.js');
const api = require('./utils/api')


// array of questions for user
const questions = [
    {
        type: 'input',
        message: "What is your GitHub username? (No @ needed)",
        name: 'username',
    },
    {
        type: 'input',
        message: "What is the name of your GitHub repo?",
        name: 'repo',
    },
    {   
        type: 'input',
        message: "What is the title of your project?",
        name: "title"
    },
    {  
        type:'input',
        message: "Provide a description of your project",
        name: "description"
    },
    {   
        type: 'input',
        message: "Provide a table of contents",
        name: "table of contents"
    },
    {   
        type: 'input', 
        message: "What is the installation process?",
        name: "installation"
    },
    {   
        type: 'input',
        message: "How will this project be used?",
        name: "usage"
    },
    {   
        type: 'input',
        message: "Who were the collaborators to this project?",
        name: "credits"
    },
    {   
        type: 'input',
        message: "What licenses are required with this project?",
        name: "licenses"
    },
    {   
        type: 'input',
        message: "Provide list of badges",
        name: "badges"
    },
    {   
        type: 'input',
        message: "What are the contributing guidelines",
        name: "Contributing"
    },
    {   
        type:'input', 
        message: "What is the test process for this project?",
        name: "test"
    },

];

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if (err) {
          return console.log(err);
        }
      
        console.log("Success! Your README.md file has been generated")
    });
}

// function to write README file
const writeFileAsync = util.promisify(writeToFile);


// Main function
async function init() {
    try {

        // Prompt Inquirer questions
        const userResponses = await inquirer.prompt(questions);
        console.log("Your responses: ", userResponses);
        console.log("Thank you for your responses! Fetching your GitHub data next...");
    
        // Call GitHub api for user info const userInfo = await api.getUser(userResponses); console.log("Your GitHub user info: ", userInfo);
        const userInfo = await api.getUser(userResponses);
        console.log("Your GitHub user info: ", userInfo);
    
        // Pass Inquirer userResponses and GitHub userInfo to generateMarkdown
        console.log("Generating your README next...")
        const markdown = generateMarkdown(userResponses, userInfo);
        console.log(markdown);
    
        // Write markdown to file
        await writeFileAsync('ExampleREADME.md', markdown);

    } catch (error) {
        console.log(error);
    }
};

init(); 
