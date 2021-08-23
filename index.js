//packages needed for application
const inquirer = require('inquirer');
const fs = require('fs');
const Employee = require('./lib/employee');
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');
const generateHTML = require('./src/page-template');

//path where output will be printed
const path = require('path');
const pathDirectory = path.resolve(__dirname, 'dist'); //absolute pathDirectory 
const outputPath = path.join(pathDirectory, 'team.html',)

//array to store team member objects from constructor
const teamArr = [];

//function that initates the application
function init() {
    console.log("Let's start building your team")
    //function that creates manager
    function generateManager() {
        inquirer.prompt([
            {
                type: 'input',
                name: 'managerName',
                message: "What is the team manager's name?",
                validate: (response)=> {
                    //if response is not empty return true and move to next question -- else let them to enter at least 1 char
                    return (response !== "")? true : 'Must enter at least 1 character' ;
                }
            },
            {
                type: 'input',
                name: 'managerId',
                message: "What is the team manager's ID?",
                validate: (response) => {
                    const isNum = /^\d+$/.test(response);
                    return (isNum) ? true : 'must enter postive whole numbers'
                }
            },
            {
                type: 'input',
                name: 'managerEmail',
                message: "What is the team manager's email?",
                validate: (response) => {
                    const re = `/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/`;
                    const isValidEmail = re.test(response.managerEmail);
                    console.log(isValidEmail);
                    // return (isValidEmail) ? true : 'email entry not valid - please try again';
                }
            },
            {
                type: 'input',
                name: 'managerOffice',
                message: "What is the team manager's office number?",
                validate: (response) => {
                    const isNum = /^\d+$/.test(response);
                    return (isNum) ? true : 'must enter postive whole numbers'
                }

            },
        ]).then(response => {
            const manager = new Manager(response.managerName, response.managerId, response.managerEmail, response.managerOffice);
            //push manager to array of teamMembers
            teamArr.push(manager);
            //function that will build out team members under manager entered
            generateTeamMembers();
        })
    };

    function generateTeamMembers() {
        inquirer.prompt([
            {
                type: 'list',
                name: 'teamMemberType',
                message: "What type of team member would you like to add?",
                choices: ['Engineer', 'Intern', "I don't want to add any more team members"],
            },
        ]).then(managerChoice => {
            //switch case for the 3 diff case types
            switch (managerChoice.teamMemberType) {
                case 'Engineer':
                    addEngineer();
                    break;
                case 'Intern':
                    addIntern();
                    break;
                default:
                    generateTeam(); 
            }
        });
    };

    function addEngineer() {
        inquirer.prompt([
            {
                type: 'input',
                name: 'engineerName',
                message: "What is the engineer's name?",
            },
            {
                type: 'input',
                name: 'engineerEmail',
                message: "What is the engineer's email?",
            },
            {
                type: 'input',
                name: 'engineerId',
                message: "What is the engineer's ID?"
            },
            {
                type: 'input',
                name: 'engineerGithub',
                message: "What is the engineer's GitHub username?"
            },
        ]).then(response => {
            const engineer = new Engineer(response.engineerName, response.engineerId, response.engineerEmail, response.engineerGithub);
            teamArr.push(engineer);
            generateTeamMembers(); //call this function again to ask if want to add more team members
        });
    };

    function addIntern() {
        inquirer.prompt([
            {
                type: 'input',
                name: 'internName',
                message: "What is the intern's name?",
            },
            {
                type: 'input',
                name: 'internId',
                message: "What is the intern's ID?"
            },
            {
                type: 'input',
                name: 'internEmail',
                message: "What is the intern's email?"
            },
            {
                type: 'input',
                name: 'internSchool',
                message: "What school does the intern attend?"
            },
        ]).then(response => {
            const intern = new Intern(response.internName, response.internId, response.internEmail, response.internSchool);
            teamArr.push(intern);
            generateTeamMembers();
        });
    };
    //function that generates entire team to be rendered on HTML page
    function generateTeam() {
        
        //check to see if pathDirectory already exists if not then create it
        if (!pathDirectory) {
            fs.mkdirSync(pathDirectory);
        }
        //write data to html file and generate team.html file in dist folder
        fs.writeFile(outputPath, generateHTML(teamArr), (err)=> {
            err ? console.log(err) : console.log("success your team.html has rendered");
        })
    };

    //call manager function
    generateManager();
}

//start app
init();