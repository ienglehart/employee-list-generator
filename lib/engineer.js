class Engineer extends Employee {
    constructor (){
        this.github = "";
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