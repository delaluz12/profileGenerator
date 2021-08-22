const Employee = require("../lib/employee");

function generateHTML(teamArr) {
    

    const renderManagerCard = (manager) => {
        return `<div class="col">
    <div class="card">
        <div class="cardHeaderWrapper white-text">
            <div class="cardHeader">${manager.getName()}</div>
            <div class="cardHeader"><i class="material-icons small">manage_accounts</i> ${manager.getRole()}
            </div>
        </div>
        <div class="card-content grey lighten-5 black-text">
            <ul class="collection">
                <li class="collection-item">ID: <span id="managerID"> ${manager.getId()}</span></li>
                <li class="collection-item">Email: <a href="mailto:${manager.getEmail()}" id="managerEmail"> ${manager.getEmail()}</a>
                </li>
                <li class="collection-item">Office Number: <span id="officeNum"> ${manager.getOfficeNum()}</span>
                </li>
            </ul>
        </div>
    </div>
        </div>`
    }

    const renderEngineerCard = (engineer) => {
        return `<div class="col">
        <div class="card">
            <div class="cardHeaderWrapper white-text">
                <div class="cardHeader">${engineer.getName()}</div>
                <div class="cardHeader"><i class="material-icons small">engineering</i> ${engineer.getRole()}
                </div>
            </div>
            <div class="card-content grey lighten-5 black-text">
                <ul class="collection">
                    <li class="collection-item">ID: <span id="engineerID">${engineer.getId()}</span></li>
                    <li class="collection-item">Email: <a href="mailto:${engineer.getEmail()}" id="engineerEmail"> ${engineer.getEmail()}</a>
                    </li>
                    <li class="collection-item">GitHub: <a href="https://github.com/${engineer.getUsername()}" id="engineerGithub">
                    ${engineer.getUsername()}</a>
                    </li>
                </ul>
            </div>
        </div>
    </div>`
    }

    const renderInternCard = (intern) => {
        return `<div class="col">
        <div class="card">
            <div class="cardHeaderWrapper white-text">
                <div class="cardHeader">${intern.getName()}</div>
                <div class="cardHeader"><i class="material-icons small">school</i> ${intern.getRole()}
                </div>
            </div>
            <div class="card-content grey lighten-5 black-text">
                <ul class="collection">
                    <li class="collection-item">ID: <span id="internID">${intern.getId()}</span></li>
                    <li class="collection-item">Email: <a href="mailto:${intern.getEmail()}" id="internEmail"> ${intern.getEmail()}</a>
                    </li>
                    <li class="collection-item">School: <span id="internGithub"> ${intern.getSchool()}</span>
                    </li>
                </ul>
            </div>
        </div>
    </div>`
    }

    const manager = teamArr[0];
    

    //filter through teamArr for employee type then map through them to run appropriate function to generate card for each type of employee
    const engineerHTML = teamArr.filter((employee)=> employee.getRole() === "Engineer").map((engineer)=> renderEngineerCard(engineer)).join('');
    
    const internHTML = teamArr.filter((employee)=> employee.getRole() === "Intern").map((intern)=> renderInternCard(intern)).join('');
   
    return `<!DOCTYPE html>
    <html lang="en">

    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Team Profiles</title>

        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">
        <link rel="stylesheet" href="../dist/style.css">

    </head>
    <body>
    <nav>
    <div class="nav-wrapper">
        <a href="#" class="brand-logo center">My Team Profiles</a>
    </div>
    </nav>
    <body>
     <div class = "container">
            <div class="row">
            ${renderManagerCard(manager)}
            ${engineerHTML}
            ${internHTML}
            </div>
     </div>
    </body>

    <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
    </body>
    </html>
    `
}

module.exports = generateHTML;