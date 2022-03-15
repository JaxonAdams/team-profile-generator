const Employee = require('../lib/Employee');

test('checks that employee is created and has information assigned', () => {
    const employee = new Employee('Jaxon', 12345, 'hey@this.com');

    expect(employee.name).toBe('Jaxon');
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toBe('hey@this.com');
});

test('checks that getRole() returns employee', () => {
    const employee = new Employee('Jaxon', 12345, 'hey@this.com');

    expect(employee.getRole()).toBe('Employee');
});