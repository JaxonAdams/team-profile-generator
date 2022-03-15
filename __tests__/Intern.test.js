const Intern = require('../lib/Intern');

test('creates intern object', () => {
    const intern = new Intern('Jaxon', 54321, 'hey@this.com');

    expect(intern.name).toBe('Jaxon');
    expect(intern.email).toBe('hey@this.com');
    expect(intern.id).toEqual(expect.any(Number));
});

test('getSchool() should return a school', () => {
    const intern = new Intern('Jaxon', 54321, 'hey@this.com');

    expect(intern.getSchool('University of Utah')).toBe('University of Utah');
});