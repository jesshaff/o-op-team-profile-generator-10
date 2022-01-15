// Generate an HTML file based off user input
// Link to page creation
const generateHTML = require('./src/generate-html');

// Team profiles
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');

// Node modules
const fs = require('fs');
const inquirer = require('inquirer');

// Team array
const teamArray = [];

// Start of manager prompts
const addManager = () => {
    return inquirer.prompt ([
        {
            type: 'input',
            name: 'name',
            message: 'Who is the manager of this team?',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter the managers name.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'employeeId',
            message: 'What is the managers employee ID?',
            validate: nameInput => {
                if (isNaN(nameInput)) {
                    console.log('Please enter the managers employee ID.');
                    return false;
                } else {
                    return true;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'Please enter the managers email.',
            validate: email => {
                valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
                if (valid) {
                    return true;
                } else {
                    console.log('Please enter the managers email.');
                    return false;
                }
            }   
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: 'What is the managers office number?',
            validate: nameInput => {
                if (isNaN(nameInput)) {
                    console.log('Please enter the managers office number.');
                    return false;
                } else {
                    return true;
                }
            }
        }
    ])
    .then(managerInput => {
        const { name, employeeId, email, officeNumber } = managerInput;
        const manager = new Manager (name, employeeId, email, officeNumber);

        teamArray.push(manager);
        console.log(manager);
    }) 
};

// Add employee prompt
const addEmployee = () => {
    console.log(`>>>Adding employees to the team<<<`);

    return inquirer.prompt ([
        {
            type: 'list',
            name: 'role',
            message: "Please choose your employees role",
            choices: ['Engineer', 'Intern']
        },
        {
            type: 'input',
            name: 'name',
            message: 'What is the name of the employee?',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter the employees name.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'employeeId',
            message: 'What is employees ID?',
            validate: nameInput => {
                if (isNaN(nameInput)) {
                    console.log('Please enter the employees ID.');
                    return false;
                } else {
                    return true;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'Please enter the employees email.',
            validate: email => {
                valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
                if (valid) {
                    return true;
                } else {
                    console.log('Please enter the employees email.');
                    return false;
                }
            }   
        },
        {
            type: 'input',
            name: 'github',
            message: 'Please enter the employees github username.',
            when: (input) => input.role === 'Engineer',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("Please enter the employees github username.");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'school',
            message: 'Please enter the interns school.',
            when: (input) => input.role === 'Intern',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("Please enter the interns school.");
                    return false;
                }
            }
        },
        {
            type: 'confirm',
            name: 'confirmAddEmployee',
            message: 'Would you like to add more team members?',
            default: false
        }   
    ])
    .then(employeeData => {
        // data for employee types

        let { name, employeeId, email, role, github, school, confirmAddEmployee } = employeeData;
        let employee;

        if (role === 'Engineer') {
            employee = new Engineer (name, employeeId, email, github);

            console.log(employee);

        } else if (role === 'Intern') {
            employee = new Intern (name, employeeId, email, school);

            console.log(employee);
        }

        teamArray.push(employee);

        if (confirmAddEmployee) {
            return addEmployee(teamArray);
        } else {
            return teamArray;
        }
    })
};

// Function to generate HTML file
const writeFile = data => {
    fs.writeFile('./dist/output-index.html', data, err => {
        // If there is an error
        if (err) {
            console.log(err);
            return;
        // When the profile has been created
        } else {
            console.log('Your team profile has successfully been create! Please check out the output-index.html');
        }
    })
};

addManager()
    .then(addEmployee)
    .then(teamArray => { 
        return generateHTML(teamArray);
    })
    .then(pageHTML => {
        return writeFile(pageHTML);
    })
    .catch(err => {
        console.log(err);
    });

//  When I click email address in HTML, email opens and populated TOL field with email address

// When i click GitHub username, GitHub profile opens in a new tab

// At application start, prompt to enter team managers name, employee ID, email address & office #

// Enter team managers name, employee ID, email address & office # > presented with menu w/ option to add an engineer or intern, or to finish building team

// Select engineer option > Prompted to enter engineers name, ID, email, and GitHub username > then taken back to menu

// Select intern option > Prompted to enter interns name, ID, email, and school > then taken back to menu

// Once finished building team > exit the application > HTML is generated 

// The application must include Employee, Manager, Engineer, and Intern classes. The tests for these classes (in the _tests_ directory) must ALL pass.
// The first class is an Employee parent class with the following properties and methods:
// name, id, email, 
// getName(), getId(), getEmail(), getRole()—returns 'Employee'

// The other three classes will extend Employee.
//In addition to Employee's properties and methods, Manager will also have the following:
// officeNumber
// getRole()—overridden to return 'Manager'

// In addition to Employee's properties and methods, Engineer will also have the following:
// github—GitHub username

// getGithub()
// getRole()—overridden to return 'Engineer'

// In addition to Employee's properties and methods, Intern will also have the following:
// school
// getSchool()
// getRole()—overridden to return 'Intern'


// Finally, although it’s not a requirement, consider adding validation to ensure that user input is in the proper format.