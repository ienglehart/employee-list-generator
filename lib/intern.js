class Intern extends Employee {
    constructor(){
        this.school = "";
    }
    getSchool() {
        inquirer
            .prompt({
                type: 'text',
                name: 'school',
                message: 'What is the employees Email?'
            })
            .then(({ school }) => {
                this.Intern = new Intern(school);
            });
    }
    getRole() {
        
    }
}