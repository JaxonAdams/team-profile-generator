const Employee = require('./Employee');

// Sets up manager class which inherits from Employee
class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email)

        this.officeNumber = officeNumber;
    }

    getRole() {
        return 'Manager';
    }
}

module.exports = Manager;