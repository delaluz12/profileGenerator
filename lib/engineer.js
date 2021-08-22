const Employee = require('./employee');

class Engineer extends Employee {
    constructor (name, id, email, githubUsername){
       this.githubUsername = username;
       super(name, id, email, username);

    }
    getGithub(){
        return this.username;
    }
    getRole(){
        return "Engineer"
    }
}
module.exports = Engineer;