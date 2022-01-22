const Employee = require('./Employee.js')

class Intern extends Employee {
    constructor(name, id, email, school){
        super(name, id, email)
        this.title = 'Intern';
        this.school = school;
    }

    getSchool() {
        return this.school;
    }

    getRole() {
        return this.title;
    }
}

module.exports = Intern;

// In addition to Employee's properties and methods, Intern will also have:

// school

// getSchool()

// getRole() // Overridden to return 'Intern'