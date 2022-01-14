// Importing employee constructor 
const Employee = require('./employee');

// Engineer constructor extends employee constructor
class Engineer extends Employee {
    constructor (name, employeeId, email, github) {
        // Calling employee constructor
        super (name, employeeId, email);

        this.github = github;
    }

    // Returning github from input
    getGithub() {
        return this.github;
    }

    // Override employee role to engineer
    getRole() {
        return 'Engineer';
    }
}

// To be exported
module.exports = Engineer;