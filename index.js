var inquirer = require("inquirer");
var fs = require('fs');
var axios =require('axios');
const generateMarkdown = require("./utils/generateMarkdown");
// var licenseType = "";
// var badges = "";

const questions = [
  {
  type: "input",
  name: "title",
  message: "What is the name of your project?"
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
    type: "list",
    message: "What kind of license do you want your project to have?",
    name: "license",
    choices: [
      "MIT",
      "GNU GPLv3",
      "Unlicense",
      "WTFPL",
      "Other (you will need to add it once your README is created)"
    ]
  }
//   {
//     type: "input",
//     name: "name",
//     message: "What is your name?"
//   },
//   {
//     type: "input",
//     name: "name",
//     message: "What is your name?"
//   },
//   {
//     type: "input",
//     name: "name",
//     message: "What is your name?"
//   },
//   {
//     type: "input",
//     name: "name",
//     message: "What is your name?"
//   },
//   {
//     type: "input",
//     name: "name",
//     message: "What is your name?"
//   },
//   {
//     type: "input",
//     name: "name",
//     message: "What is your name?"
//   },
//   {
//     type: "input",
//     name: "name",
//     message: "What is your name?"
//   }

];


function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, err => {
    if (err) {
      throw err;
    } 
    console.log("ReadMe created successfully!");
  });
}



function init() {
  inquirer.prompt(questions).then(answers => {

    

    // console.log(licenseType, badges);
    console.log(answers);
    // console.log(answers.github);
    // console.log(answers.license);
  
    let data = {...answers}

    // if (answers.license === "MIT") {
    //   data.licenseType = "This project is licensed under the MIT license";
    //    data.badges = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
    //  }

    const queryUrl = `https://api.github.com/users/${answers.github}`; 
    console.log(queryUrl);

    axios.get(queryUrl).then(function(response) {
      // console.log(response.data);
      console.log(response.data.url);
      console.log(response.data.email);
      console.log(response.data.avatar_url);
      data.photo = response.data.avatar_url;
      console.log(`Combined inputs` , data);
      const markdown = generateMarkdown(data);
      writeToFile("test.md", markdown);
  
    })
    .catch(err => {
      console.log("Github user not found");
    })
  }) 

}



init();
