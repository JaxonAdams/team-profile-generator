const Engineer = require('../lib/Engineer');

test('creates engineer object', () => {
    const engineer = new Engineer('Jaxon', 54321, 'hey@this.com');

    expect(engineer.name).toBe('Jaxon');
    expect(engineer.email).toBe('hey@this.com');
    expect(engineer.id).toBe(54321);
});

test('tests getGithub()', () => {
    const engineer = new Engineer('Jaxon', 54321, 'hey@this.com');

    expect(engineer.getGithub('jaxonadams')).toBe('jaxonadams');
});

test('getRole() overwrites to engineer', () => {
    const engineer = new Engineer('Jaxon', 54321, 'hey@this.com');

    expect(engineer.getRole()).toBe('Engineer');
});