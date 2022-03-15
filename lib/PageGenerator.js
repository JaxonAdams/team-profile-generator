const Employee = require('./Employee');
const Manager = require('./Manager');
const Engineer = require('./Engineer');
const Intern = require('./Intern');
const inquirer = require('inquirer');

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
                message: "What is your office number?"
            }
        ])
        .then(({ managerName, managerId, managerEmail, officeNumber }) => {
            this.manager = new Manager(managerName, managerId, managerEmail, officeNumber);
        })
    }
}

module.exports = PageGenerator;