const Intern = require('../lib/intern');

//test1: can set school via constructor
describe('Intern', () => {
    it('should return an object with "school" property', () => {
        const internObj = new Intern();
        expect('school' in internObj).toEqual(true);
    })
})
//test2: getRole() should return 'Intern'
describe("getRole function", () => {
    it("should return 'intern' as role", () =>{
        const intern = new Intern();
        const role = intern.getRole();
        expect(role).toEqual('Intern');
    })
})
//test3: getSchool() should return intern's school
describe("getSchool function", () => {
    it("should return intern's school", () =>{
        const intern = new Intern('Luz', '032593', 'c12vida@gmail.com', 'Augsburg');
        const school = intern.getSchool();
        expect(school).toEqual('Augsburg');
    })
})