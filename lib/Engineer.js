const Employee = require('./Employee');

// Sets up engineer class, which inherits some properties from Employee
class Engineer extends Employee {
    constructor(name, id, email) {
        super(name, id, email);
    }

    getGithub(github) {
        this.github = github;
        return this.github;
    }
}

module.exports = Engineer;