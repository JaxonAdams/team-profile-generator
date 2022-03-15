const Employee = require('./Employee');

// Sets up Intern class which inherits from Employee
class Intern extends Employee {
    constructor(name, id, email) {
        super(name, id, email);
    }

    getSchool(school) {
        this.school = school;
        return this.school;
    }
};

module.exports = Intern;