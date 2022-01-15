// Using employee constructor
const { TestWatcher } = require('@jest/core');
const Employee = require('../lib/employee');

// Creates employee object
test('creates an employee object', () => {
    const employee = new Employee('Jessica', 10, 'jessica@codingbootcamp.com');

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
});

// Gets ID from getId()
test('gets employee name', () => {
    const employee = new Employee('Jessica', 10, 'jessica@codingbootcamp.com');

    expect(employee.getName()).toEqual(expect.any(String));
});

// Gets ID from getId()
test('gets employee ID', () => {
    const employee = new Employee('Jessica', 10, 'jessichaf@codingbootcamp.com');

    expect(employee.getEmail()).toEqual(expect.StringContaining(employee.email.toString()));
});

// Gets emails from getEmail()
test('gets employee email', () => {
    const employee = new Employee('Jessica', 10, 'jessicahaff@codingbootcamp.com');

    expect(employee.getEmail()).toEqual(expect.StringContaining(employee.email.toString()));
});

// Gets role from getRole()
test('gets role of employee', () => {
    const employee = new Employee('Jessica', 10, 'jessicahaff@codingbootcamp.com');

    expect(employee.getRole()).toEqual('Employee');
});
