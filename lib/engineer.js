const inquirer = require('inquirer');
const Employee = require('../lib/employee');

class Engineer extends Employee {
    constructor (github){
        this.github = github;
    }
    getGithub () {
        inquirer
            .prompt({
                type: 'text',
                name: 'github',
                message: 'What is the employees Github?'
            })
            .then(({ github }) => {                    
                this.Engineer = new Engineer(github);
            })
        }
    getRole() {
        
    }
}

module.exports.Engineer = Engineer;