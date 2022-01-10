// Accept user input for the following:
// Team members information 

// Generate an HTML file based off user input

//  When I click email address in HTML, email opens and populated TOL field with email address

// When i click GitHub username, GitHub profile opens in a new tab

// At application start, prompt to enter team managers name, employee ID, email address & office #

// Enter team managers name, employee ID, email address & office # > presented with menu w/ option to add an engineer or intern, or to finish building team

// Select engineer option > Prompted to enter engineers name, ID, email, and GitHub username > then taken back to menu

// Select intern option > Prompted to enter interns name, ID, email, and school > then taken back to menu

// Once finished building team > exit the application > HTML is generated 

// EXAMPLE DIRECTORY
// .
// ├── __tests__/             //jest tests
// │   ├── Employee.test.js
// │   ├── Engineer.test.js
// │   ├── Intern.test.js
// │   └── Manager.test.js
// ├── dist/                  // rendered output (HTML) and CSS style sheet      
// ├── lib/                   // classes
// ├── src/                   // template helper code 
// ├── .gitignore             // indicates which folders and files Git should ignore
// ├── index.js               // runs the application
// └── package.json    

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