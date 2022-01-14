// Employee constructor
class Employee {
    constructor (name, employeeId, email) {
        this.name = name;
        this.employeeId = employeeId;
        this.email = email;
    }

    // Returning name from input
    getName() {
        return this.name;
    }

    // Returning id from input
    getEmployeeId() {
        return this.employeeId;
    }

    // Returning email from input
    getEmail() {
        return this.email;
    }

    // Returning employee type
    getRole() {
        return 'Employee';
    }
};

// To be exported
module.exports = Employee;