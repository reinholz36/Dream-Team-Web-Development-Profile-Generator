const Employee = require('../lib/Employee');

test('test for Employee methods', () => {
    const employee = new Employee('Dani', '01', 'dreinholz28@gmail.com')

    expect(employee.getName()).toBe('Dani');
    expect(employee.getRole()).toBe('Employee');
    expect(employee.getId()).toBe('01');
    expect(employee.getEmail()).toBe('dreinholz28@gmail.com');
})