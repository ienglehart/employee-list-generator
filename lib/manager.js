const inquirer = require('inquirer');
const Employee = require('../lib/employee');

class Manager extends Employee {
    constructor(officeNumber) {
        this.officeNumber = officeNumber;
    }
    officeNumber(){
        inquirer
            .prompt({
                type: 'text',
                name: 'officeNumber',
                message: 'What is the Managers Office Number?'
            })
            .then(({ officeNumber }) => {
                this.Manager = new Manager(officeNumber);
            });
    }
    getRole(){

    }
}

module.exports = Manager;