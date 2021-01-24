class Employee {
    constructor() {
      this.name = "";
      this.id = "";
      this.email = "";
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
                type: 'text',
                name: 'role',
                message: 'What is the employees Role?'
            })
            .then(({ role }) => {
                this.Employee = new Employee(role);
                if(this.role === "engineer"){
                    //call engineer.js
                }
                else if(this.role === "intern"){
                    //call intern.js
                }
                else if(this.role === "manager"){
                    //call manager.js
                }
                
            });
    }
}