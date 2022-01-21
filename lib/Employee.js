class Employee {
    constructor(name, id, email){
        this.name = name;
        this.title = "Employee";
        this.id = id;
        this.email = email;
    };

    getName(){
        return this.name;
    }

    getRole() {
        return this.title;
    }

    getId() {
        return this.id;
    }

    getEmail() {
        return this.email;
    }

}

module.exports = Employee;

// The first class is an Employee parent class with the following properties and methods:

// name

// id

// email

// getName()

// getId()

// getEmail()

// getRole() // Returns 'Employee'

// The other three classes will extend Employee.