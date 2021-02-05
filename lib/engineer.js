const inquirer = require('inquirer');
const Employee = require('./Employee');

class Engineer{
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
                this.getRole();
            })
        }
    getRole() {
        
    }
}

module.exports.Engineer = Engineer;