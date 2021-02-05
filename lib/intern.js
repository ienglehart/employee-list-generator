const inquirer = require('inquirer');
const Employee = require('./Employee');

class Intern{
    constructor(school){

        this.school = school;
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
                this.getRole();
            });
    }
    getRole() {
        
    }
}

module.exports = Intern;