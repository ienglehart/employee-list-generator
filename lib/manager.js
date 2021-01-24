class Manager extends Employee {
    constructor() {
        this.officeNumber = "";
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