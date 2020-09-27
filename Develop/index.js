const fs = require("fs");

// array of questions for user
const questions = [
    {   
        message: "What is the title of your project?",
        name: "title"
    },
    {  
        message: "Provide a description of your project",
        name: "description"
    },
    {   
        message: "Provide a table of contents",
        name: "table of contents"
    },
    {   
        message: "What is the installation process?",
        name: "installation"
    },
    {   
        message: "How will this project be used?",
        name: "usage"
    },
    {   
        message: "Who were the collaborators to this project?",
        name: "credits"
    },
    {   
        message: "What licenses are required with this project?",
        name: "licenses"
    },
    {   
        message: "Provide list of badges",
        name: "badges"
    },
    {   
        message: "What are the contributing guidelines",
        name: "Contributing"
    },
    {   
        message: "What is the test process for this project?",
        name: "test"
    },

];

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {
    inquirer.prompt(questions)
    .then((inquirerResponse, data) => {   
        console.log("Making ReadMe");
        fs.writeFileSync("ReadMe.md", inquirerResponse, data);
    })
    .catch((err) => {
        console.log(err);
    })
}
// function call to initialize program
init();
