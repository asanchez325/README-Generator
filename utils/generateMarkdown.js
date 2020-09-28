// function to generate markdown for README
function generateMarkdown(userResponses, userInfo) {
// Generate Table of Contents
let draftToC = `## Table of Contents`;

if (userResponses.installation !== '') { draftToC += `
* [Installation](#installation)` };

if (userResponses.usage !== '') { draftToC += `
* [Usage](#usage)` };

if (userResponses.contributing !== '') { draftToC += `
* [Contributing](#contributing)` };

if (userResponses.tests !== '') { draftToC += `
* [Tests](#tests)` };


// Generate markdown for the top required portions of the README
let draftMarkdown = 
`# ${userResponses.title}
![Badge for GitHub repo top language](https://img.shields.io/github/languages/top/${userResponses.username}/${userResponses.repo}?style=flat&logo=appveyor) ![Badge for GitHub last commit](https://img.shields.io/github/last-commit/${userResponses.username}/${userResponses.repo}?style=flat&logo=appveyor)

Check out the badges hosted by [shields.io](https://shields.io/).

---

## Description 

*Description of the project; including the what, the why and the how:* 

${userResponses.description}
`

// Add Table of Contents to markdown
draftMarkdown += draftToC;

// Add License section since License is required to Table of Contents
draftMarkdown += `
* [License](#license)`;


// Optional Installation section
if (userResponses.installation !== '') {

draftMarkdown +=
`
---

## Installation

*Instructions required to install and run the project:*

${userResponses.installation}`
};


// Optional Usage section
if (userResponses.usage !== '') {

draftMarkdown +=

`
---

## Usage 

*Instructions and, if applicable, examples for use.:*

${userResponses.usage}`
};


// Optional Contributing section
if (userResponses.contributing !== '') {
`
---

## Contributing

*Follow these guidelines if you would like to contribute:*

${userResponses.contributing}`
};


// Optional Tests section
if (userResponses.tests !== '') {

draftMarkdown +=
`
---

## Tests

*Tests used and how they are ran:*

${userResponses.tests}`
};


// License section is required
draftMarkdown +=
`
---

## License

${userResponses.license}
`;


// Questions / About Developer section
let draftDev = 
`
---

## Questions?

For any questions, please contact me with the information below:

GitHub: [@${userInfo.login}](${userInfo.url})
`;


draftDev +=

// Add developer section to markdown
draftMarkdown += draftDev;

// Return markdown
return draftMarkdown;
}

module.exports = generateMarkdown;