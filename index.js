//packages needed for application

const inquirer = require('inquirer');
const fs = require('fs');
const employee = require('./lib/employee');
const manager = require('./lib/manager');
const engineer = require('./lib/engineer');
const intern = require('./lib/intern');

//inquirer questions to gather data about team
const questions = [
    {
        type: 'input',
        name: 'managerName',
        message: "What is the team manager's name?"
    },
    {
        type: 'input',
        name: 'managerId',
        message: "What is the team manager's ID?"
    },
    {
        type: 'input',
        name: 'managerEmail',
        message: "What is the team manager's email?"
    },
    {
        type: 'input',
        name: 'managerOffice',
        message: "What is the team manager's office number?"
    },
    {
        type: 'list',
        name: 'teamMemberType',
        message: "What type of team member would you like to add?",
        choices: ['Engineer', 'Intern', "I don't want to add any more team members"],
    },
    {
        type: 'input',
        name: 'engineerName',
        message: "What is the engineer's name?",
        when:(responseObj) => responseObj.teamMemberType === 'Engineer',
    },
    {
        type: 'input',
        name: 'engineerEmail',
        message: "What is the engineer's email?",
    },
    {
        type: 'input',
        name: 'engineerGithub',
        message: "What is the engineer's GitHub username?"
    },
    {
        type: 'input',
        name: 'internName',
        message: "What is the intern's name?",
        when:(responseObj) => responseObj.teamMemberType === 'Intern'
    },
    {
        type: 'input',
        name: 'internId',
        message: "What is the intern's ID?"
    },
    {
        type: 'input',
        name: 'internSchool',
        message: "What school does the intern attend?"
    },


];
function init() {
    console.log("Let's start building your team")
    inquirer.prompt({questions});
    
}