// Importing Employee Constructor
const Employee = require('./employee');

// Intern constructor extends employee constructor
class Intern extends Employee {
    constructor (name, employeeId, email, school) {
        // Calling employee constructor
        super (name, employeeId, email);

        this.school = school;
    }

    // Returning school from input
    getSchool() {
        return this.school;
    }

    // Override employee role to intern
    getRole() {
        return 'Intern';
    }
}

// To bo exported
module.exports = Intern;