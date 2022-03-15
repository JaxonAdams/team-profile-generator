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
                    console.log('Building new ' + employeeType + ' employee.');
                });
                
            } else {
                // generate page
                console.log('generating webpage');
            }
        });
    }
}

module.exports = PageGenerator;