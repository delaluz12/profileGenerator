const Employee = require('./employee');
class Intern extends Employee {
    constructor(name, id, email,  school) {
        this.school = school;
        super(name, id, email, school);
    }
    getSchool() {
        return this.school;
    }
    getRole(){
        return "Intern";
    }
}
module.exports = Intern;