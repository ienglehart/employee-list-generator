const inquirer = require('inquirer');
const Employee = require('../lib/employee');

class Intern extends Employee {
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
            });
    }
    getRole() {
        
    }
}

module.exports = Intern;