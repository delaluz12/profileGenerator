const Employee = require('../lib/employee')


describe("Employee", () => {
    describe("Instantiation", () => {
        //test1: can instantiate employee instance
        it("it should return return object if an employee object is created with 'new' keyword", () => {
            const employeeObj = new Employee();
            expect(employeeObj).toEqual(expect.any(Employee));

        });
        //test2: can set name via constructor argument
        it("it should return an object with 'name' property when called with the 'new' keyword", () => {
            const employeeObj = new Employee();
            expect('name' in employeeObj).toEqual(true);

        });
        //test3: can set id via constructor argument
        it("it should return an object with 'id' property when called with the 'new' keyword", () => {
            const employeeObj = new Employee();
            expect('id' in employeeObj).toEqual(true);

        });
        //test4: can set email via constructor argument
        it("it should return an object with 'email' property when called with the 'new' keyword", () => {
            const employeeObj = new Employee();
            expect('email' in employeeObj).toEqual(true);

        });
    });
});

//test5: can get name via getName()
describe('getName function', () => {
    it('should return name of employee', () => {
        const employee = new Employee('Luz', '032593', 'c12vida@gmail.com');
        const employeeName = employee.getName();
        expect(employeeName).toEqual('Luz');
    });
})
//test6: can get id via getId()
describe('getId function', () => {
    it('should return ID of employee', () => {
        const employee = new Employee('Luz', '032593', 'c12vida@gmail.com');
        const employeeId = employee.getId();
        expect(employeeId).toEqual('032593');
    });
})
//test7: can get email via getEmail()
describe('getEmail function', () => {
    it('should return email of employee', () => {
        const employee = new Employee('Luz', '032593', 'c12vida@gmail.com');
        const employeeEmail = employee.getEmail();
        expect(employeeEmail).toEqual('c12vida@gmail.com');
    });
})
//test8: getRole() should return "Employee"
describe('getRole function', () => {
    it('should return "employee" as role', () => {
        const employee = new Employee();
        const role = employee.getRole();
        expect(role).toEqual('Employee');
    })
})