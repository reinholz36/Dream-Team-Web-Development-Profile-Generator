const Intern = require('../lib/Intern');

test('test for Intern methods', () => {
    const intern = new Intern('Dani', '01', 'dreinholz28@gmail.com', 'School')

    expect(intern.getName()).toBe('Dani');
    expect(intern.getRole()).toBe('Intern');
    expect(intern.getId()).toBe('01');
    expect(intern.getEmail()).toBe('dreinholz28@gmail.com');
    expect(intern.getSchool()).toBe('School');
})