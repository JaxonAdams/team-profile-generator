const Manager = require('../lib/Manager');

test('creates manager object', () => {
    const manager = new Manager('Jaxon', 54321, 'hey@this.com');

    expect(manager.name).toBe('Jaxon');
    expect(manager.email).toBe('hey@this.com');
    expect(manager.id).toEqual(expect.any(Number));
});

test('manager should also have office number', () => {
    const manager = new Manager('Jaxon', 54321, 'hey@this.com', 207);

    expect(manager.officeNumber).toEqual(expect.any(Number));
});

test('getRole() should return Manager', () => {
    const manager = new Manager('Jaxon', 54321, 'hey@this.com', 207);

    expect(manager.getRole()).toBe('Manager');
});