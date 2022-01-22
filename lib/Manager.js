const Employee = require('./Employee.js')

class Manager extends Employee {
    constructor(name, id, email, phone){
        super(name, id, email)
        this.title = 'Manager';
        this.phone = phone;
    }

    getPhone() {
        return this.phone;
    }

    getRole() {
        return this.title;
    }
}


module.exports = Manager;

// In addition to Employee's properties and methods, Manager will also have:

// officeNumber

// getRole() // Overridden to return 'Manager'