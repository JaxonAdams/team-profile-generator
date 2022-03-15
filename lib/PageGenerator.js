const Employee = require('./Employee');
const Manager = require('./Manager');
const Engineer = require('./Engineer');
const Intern = require('./Intern');
const inquirer = require('inquirer');
const ListPrompt = require('inquirer/lib/prompts/list');

// Creates generator class to store generator logic
class PageGenerator {
    constructor() {
        this.manager;
        this.otherEmployees = [];
    }

    init() {
        console.log("Let's build your profile. I just need some information.");

        inquirer.prompt([
            {
                type: 'text',
                name: 'managerName',
                message: "What is the team manager's name?"
            },
            {
                type: 'text',
                name: 'managerId',
                message: "What is the manager's id?"
            },
            {
                type: 'text',
                name: 'managerEmail',
                message: "What is the manager's email?"
            },
            {
                type: 'text',
                name: 'officeNumber',
                message: "What is the manager's office number?"
            }
        ])
        .then(({ managerName, managerId, managerEmail, officeNumber }) => {
            this.manager = new Manager(managerName, managerId, managerEmail, officeNumber);
            
            // Ask about new employee
            this.newEmployee();
        });
    }

    newEmployee() {
        console.log(`
=======================
        `);
        
        inquirer.prompt({
            type: 'confirm',
            name: 'newEmployeeConfirm',
            message: 'Would you like to add another employee?',
            default: false
        })
        .then(({ newEmployeeConfirm }) => {
            if (newEmployeeConfirm) {
                // Ask which type of employee to build
                inquirer.prompt({
                    type: 'list',
                    name: 'employeeType',
                    message: "What is the employee's position?",
                    choices: ['Engineer', 'Intern', 'Other']
                })
                .then(({ employeeType }) => {
                    // Build employee object based on type
                    if (employeeType === 'Engineer') {
                        this.newEngineer();
                    } else if (employeeType === 'Intern') {
                        this.newIntern();
                    } else if (employeeType === 'Other') {
                        this.newOther();
                    }
                });
                
            } else {
                // generate page
                console.log(this.otherEmployees);
            }
        });
    }

    newEngineer() {
        inquirer.prompt([
            {
                type: 'text',
                name: 'engineerName',
                message: "What is the engineer's name?"
            },
            {
                type: 'text',
                name: 'engineerId',
                message: "What is the engineer's id?"
            },
            {
                type: 'text',
                name: 'engineerEmail',
                message: "What is the engineer's email?"
            },
            {
                type: 'text',
                name: 'engineerGithub',
                message: "What is the engineer's GitHub username?"
            }
        ])
        .then(({ engineerName, engineerId, engineerEmail, engineerGithub }) => {
            // Build a new engineer object
            const newEngineer = new Engineer(engineerName, engineerId, engineerEmail);
            newEngineer.github = newEngineer.getGithub(engineerGithub);

            // Push this to the array of employees
            this.otherEmployees.push(newEngineer);

            // Ask about adding another employee
            this.newEmployee();
        });
    }

    newIntern() {
        inquirer.prompt([
            {
                type: 'text',
                name: 'internName',
                message: "What is the intern's name?"
            },
            {
                type: 'text',
                name: 'internId',
                message: "What is the intern's id?"
            },
            {
                type: 'text',
                name: 'internEmail',
                message: "What is the intern's email?"
            },
            {
                type: 'text',
                name: 'internSchool',
                message: "What school does your intern attend?"
            }
        ])
        .then(({ internName, internId, internEmail, internSchool }) => {
            // Build a new intern object
            const newIntern = new Intern(internName, internId, internEmail);
            newIntern.school = newIntern.getSchool(internSchool);

            // Push this to the array of employees
            this.otherEmployees.push(newIntern);

            // Ask about adding another employee
            this.newEmployee();
        });
    }

    newOther() {
        inquirer.prompt([
            {
                type: 'text',
                name: 'otherName',
                message: "What is the employee's name?"
            },
            {
                type: 'text',
                name: 'otherId',
                message: "What is the employee's id?"
            },
            {
                type: 'text',
                name: 'otherEmail',
                message: "What is the employee's email?"
            }
        ])
        .then(({ otherName, otherId, otherEmail }) => {
            // Build a new employee object
            const newOther = new Employee(otherName, otherId, otherEmail);

            // Push this to the array of employees
            this.otherEmployees.push(newOther);

            // Ask about adding another employee
            this.newEmployee();
        });
    }
}

module.exports = PageGenerator;