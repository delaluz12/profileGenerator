const Employee = require('./employee');
class Manager extends Employee {
    constructor(name, id, email,  officeNum){
        this.officeNum = officeNum;
        super(name, id, email, officeNum);
    }
    getSchool(){
        return this.getSchool;
    }
    getRole(){
        return "Manager";
    }
}
module.exports = Manager;