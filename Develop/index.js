// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    message: "What is the title of your project?",
    name: "title",
  },
  {
    type: "input",
    message: "What is a short description of your project?",
    name: "description",
  },
  {
    type: "input",
    message: "How do you install the project?",
    name: "install",
  },
  {
    type: "input",
    message: "Provide instructions for using the project.",
    name: "instruct",
  },
  {
    type: "list",
    message: "What is the license for you project?",
    name: "license",
    choices: [
      "GPL-3.0",
      "MIT",
      "Apache-2.0",
      "BSD-2-Clause",
      "BSD-3-Clause",
      "BSD-4-Clause",
    ],
  },
  {
    type: "input",
    message: "What are the contributing guidelines?",
    name: "contrib",
  },
  {
    type: "input",
    message: "What are some tests to run for contributing code?",
    name: "test",
  },
  {
    type: "input",
    message: "What is your github username?",
    name: "username",
  },
  {
    type: "input",
    message: "What is your email?",
    name: "email",
  },
];

const generateREADME = ({
  title,
  description,
  install,
  instruct,
  license,
  contrib,
  test,
  username,
  email,
}) => `# ${title}

## Table of Contents

[Description](#description)<br>
[Installation](#installation)<br>
[Usage](#usage)<br>
[License](#license)<br>
[Contributing](#contributing)<br>
[Tests](#tests)<br>
[Questions](#questions)<br>


## Description 
${description}

## Installation
${install}

## Usage
${instruct}

## License
${license}

## Contributing
${contrib}

## Tests
${test}

## Questions
If you have further questions about the project, reach out to me at ${email} with "${title} - Question" in the subject line. Check out some of my other projects on my github: [${username}](https://github.com/${username}/) .`;

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) =>
    err
      ? console.log(err)
      : console.log("Successfully created SAMPLE-README.md!")
  );
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((answers) => {
    const readmeContent = generateREADME(answers);

    writeToFile("SAMPLE-README.md", readmeContent);
  });
}

// Function call to initialize app
init();
