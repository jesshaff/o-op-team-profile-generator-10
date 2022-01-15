// Using employee constructor
const { TestWatcher } = require('@jest/core');
const Engineer = require('../lib/engineer');

// Creates engineer object
test('creates an engineer object', () => {
    const engineer = new Engineer('Jessica' 10, 'jessica@codingbootcamp.com', 'jesshaff');

    expect(engineer.github).toEqual(expect.any(String));
});

// Gets github from  getGithub()
test('gets engineer github value', () => {
    const engineer = new Engineer('Jessica', 10, 'jessica@codingbootcamp.com', 'jesshaff');

    expect(engineer.getGithub()).toEqual(expect.stringContaining(engineer.github.toString()));
});

// Gets role from getRole()
test('gets role of employee', () => {
    const engineer = new Engineer('Jessica', 10, 'jessica@codingbootcamp.com', 'jesshaff');

    expect(engineer.getRole()).toEqual("Engineer");
});