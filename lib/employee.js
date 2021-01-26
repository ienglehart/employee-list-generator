const inquirer = require('inquirer');

/*
const Engineer = require('../lib/engineer')
const Manager = require('../lib/manager')
const Intern = require('../lib/intern')
*/

class Employee {
    constructor(name, id, email) {
      this.name = name;
      this.id = id;
      this.email = email;
    }

    getName(){
        inquirer
            .prompt({
                type: 'text',
                name: 'name',
                message: 'What is the employees name?'
            })
            .then(({ name }) => {
                this.Employee = new Employee(name);
            });
        this.getId();
    }

    getId(){
        inquirer
            .prompt({
                type: 'text',
                name: 'id',
                message: 'What is the employees ID?'
            })
            .then(({ id }) => {
                this.Employee = new Employee(id);
            });
    }

    getEmail(){
        inquirer
        //do i use regex to verify this, and how?
            .prompt({
                type: 'text',
                name: 'email',
                message: 'What is the employees Email?'
            })
            .then(({ email }) => {
                this.Employee = new Employee(email);
            });
    }

    getRole(){
        inquirer
            // make choices prompt?
            .prompt({
                type: 'list',
                name: 'role',
                message: 'What is the employees Role?',
                choices: [
                    "Engineer",
                    "Intern",
                    "Manager",
                    "No additional role"
                ]
            })
            .then(({ role }) => {
                this.Employee = new Employee(role);
                if(this.role === "Engineer"){
                    this.Employee = new Engineer(role);
                }
                else if(this.role === "Intern"){
                    this.Employee = new Intern(role);
                }
                else if(this.role === "Manager"){
                    this.Employee = new Manager(role);
                }
                
            });
    }
}

module.exports = Employee;