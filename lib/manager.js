// Importing Manager Constructor
const Employee = require('./employee');

// Intern constructor extends employee constructor
class Manager extends Employee {
    constructor (name, employeeId, email, officeNumber) {
        // Calling employee constructor
        super (name, employeeId, email);

        this.officeNumber = officeNumber;
    }

    // Returning office # from input
    getOfficeNumber() {
        return this.officeNumber;
    }

    // Override employee role to intern
    getRole() {
        return 'Manager';
    }
}

// To bo exported
module.exports = Manager;