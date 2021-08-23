const Engineer = require('../lib/engineer');

//test1: can set github account via constructor
describe('Engineer', () => {
    it('should return an object with "githubUsername" property', () => {
        const engineerObj = new Engineer();
        expect('githubUsername' in engineerObj).toEqual(true);
    })
})

//test2: getRole() should return 'Engineer'
describe("getRole function", () => {
    it("should return 'engineer' as role", () =>{
        const engineer = new Engineer();
        const role = engineer.getRole();
        expect(role).toEqual('Engineer');
    })
})
//test3: getGithub() should return Engineer's github username
describe("getGithub function", () => {
    it("should return engineer's github username", () =>{
        const engineer = new Engineer('Luz', '032593', 'c12vida@gmail.com', 'delaluz12');
        const github = engineer.getUsername();
        expect(github).toEqual('delaluz12');
    })
})