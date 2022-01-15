// Using intern constructor
const { TestWatcher } = require('@jest/core');
const Intern = require('../lib/intern');

// creating intern object
test('creates an intern object', () => {
    const intern = new Intern('Jessica', 10, 'jessica@codingbootcamp.com', 'GA TECH');

    expect(intern.school).toEqual(expect.any(String));
});

// Gets school from getSchool()
test('gets employees school', () => {
    const intern = new Intern('Jessica', 10, 'jessica@codingbootcamp.com', 'GA TECH');

    expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school.toString()));
});

// Gets role from getRole()
test('gets role of employee', () => {
    const intern = new Intern('Jessica', 10, 'jessica@codingbootcamp.com', 'GA TECH');

    expect(intern.getRole()).toEqual("Intern");
});