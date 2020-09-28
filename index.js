// External packages
const fs = require("fs");
const util = require("util");
const inquirer = require("inquirer");
const generateMarkdown = require("util")


// array of questions for user
const questions = [
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

// function to write README file
function writeToFile(fileName, data) {
}

// Async function using util.promisify 
async function init() {
    try {
        // Ask user questions and generate responses
        const answers = await promptUser();
        const generateContent = generateReadme(answers);
        // Write new README.md to dist directory
        await writeFileAsync('./dist/README.md', generateContent);
        console.log('✔️  Successfully wrote to README.md');
    }   catch(err) {
        console.log(err);
    }
  }
  
  init();  
