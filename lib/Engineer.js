const Employee = require('./Employee.js')

class Engineer extends Employee {
    constructor(name, id, email, github){
        super(name, id, email)
        this.title = 'Engineer';
        this.github = github;
    }

    getGitHub() {
        return this.github;
    }

    getRole() {
        return this.title;
    }
}

module.exports = Engineer;

// In addition to Employee's properties and methods, Engineer will also have:

// github // GitHub username

// getGithub()

// getRole() // Overridden to return 'Engineer'