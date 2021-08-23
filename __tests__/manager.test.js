const Manager = require('../lib/manager');

//test1: can set office number via constructor argument
describe('Manager', () => {
    it('should return an object with "officeNum" property', () => {
        const managerObj = new Manager();
        expect('officeNum' in managerObj).toEqual(true);
    })
})
//test2: getRole() should return "Manager"
describe("getRole function", () => {
    it("should return 'manager' as role", () =>{
        const manager= new Manager();
        const role = manager.getRole();
        expect(role).toEqual('Manager');
    })
})
//test3: can get office number via getOffice();
describe("getOfficeNum function", () => {
    it("should return managers's office number", () =>{
        const manager = new Manager('Luz', '032593', 'c12vida@gmail.com', '2525');
        const officeNum = manager.getOfficeNum();
        expect(officeNum).toEqual('2525');
    })
})