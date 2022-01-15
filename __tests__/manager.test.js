const { TestWatcher } = require('@jest/core');

// Using manager constructor
const Manager = require('../lib/manager');

// Creating manager object
test('creates a manager object', () => {
    const manager = new Manager('Jessica', 10, 'jessica@codingbootcamp.com', 5);

    expect(manager.officeNumber).toEqual(expect.any(Number));
});

// Gets role from getRole()
test('gets role of employee', () => {
    const manager = new Manager('Jessica', 10, 'jessica@codingbootcamp.com', 5);

    expect(manager.getRole()).toEqual("Manager");
});