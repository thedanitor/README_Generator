var inquirer = require("inquirer");
var fs = require('fs');
var axios =require('axios');
const generateMarkdown = require("./utils/generateMarkdown");

const questions = [
  {
  type: "input",
  name: "title",
  message: "What is the name of your project?"
},
{
  type: "input",
  name: "url",
  message: "What is the URL to the project?"
},
{
    type: "input",
    name: "description",
    message: "Write a brief description of the project."
  },
  {
    type: "input",
    name: "github",
    message: "What is your Github username?"
  },
  {
    type: "input",
    name: "email",
    message: "What is your email?"
  },
  {
    type: "list",
    message: "What kind of license do you want your project to have?",
    name: "license",
    choices: [
      "MIT",
      "GNU GPLv3",
      "WTFPL",
      "Unlicense",
      "Other (you will need to add it once your README is created)"
    ]
  },
  {
    type: "input",
    name: "usage",
    message: "How do you use this project?"
  },
  {
    type: "input",
    name: "install",
    message: "What commands do you use to intall this project?",
    default: "npm i"

  },
  {
    type: "input",
    name: "credits",
    message: "Enter any acknowledgements here."
  }
];

function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, err => {
    if (err) {
      throw err;
    } 
    console.log("ReadMe created successfully!");
  });
};

function init() {
  inquirer.prompt(questions).then(answers => {
    // console.log(licenseType, badges);
    // console.log(answers);
    // console.log(answers.github);
    // console.log(answers.license);
  
    let data = {...answers}

    const queryUrl = `https://api.github.com/users/${answers.github}`; 
    console.log(queryUrl);

    axios.get(queryUrl).then(function(response) {
      // console.log(response.data);
      // console.log(response.data.url);
      // console.log(response.data.email);
      // console.log(response.data.avatar_url);
      data.photo = response.data.avatar_url;
      // console.log(`Combined inputs` , data);
      const markdown = generateMarkdown(data);
      writeToFile("test.md", markdown);
  
    })
    .catch(err => {
      console.log("Github user not found");
    })
  }) 

}

init();
