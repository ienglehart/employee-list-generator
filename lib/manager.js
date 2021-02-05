const inquirer = require('inquirer');
const Employee = require('./Employee');

class Manager{
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
                this.getRole();
            });
    }
    getRole(){

    }
}

module.exports = Manager;