const inquirer = require('inquirer'); //import inquirer
const fs = require('fs'); //import for reading and writing
const generateMarkdown = require('./generateMarkdown');

//our main function that gets user info
function getInfo(){
    inquirer
     .prompt([
         {
             type: 'input',
             name: 'projectTitle',
             message: 'What is the name of your project?',
         },
         {
             type: 'input',
             name: 'description',
             message: 'Enter a small description for your project.',
         },
         {
             type: 'input',
             name: 'installation',
             message: 'How should I install this project?',
         },
         {
             type: 'input',
             name: 'usage',
             message: 'Enter usage information.',
         },
         {
             type: 'input',
             name: 'userName',
             message: 'What is your github user name?',
         },
         {
             type: 'input',
             name: 'email',
             message: 'What is your email address?',
         },
         {
             type: 'input',
             name: 'fileName',
             message: 'What is the name of your ReadMe file?',
         },
         {
             type: 'list',
             name: 'license',
             message: 'Which license would you like to use?',
             choices: ['MIT', 'ISC'],
         },
     ])
     .then((data) => {
         console.log(data);
         writeToFile(data);
     });
 }

 //this function creates our readme with the information provided
 function writeToFile(data) {
    fs.appendFile(`${data.fileName}.md`,generateMarkdown(data),function(err){
        if (err) throw err;
        console.log('Updated');
    });
}
//initialization function
function init() {
    getInfo();
}
//call init
init();