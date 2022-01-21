const Manager = require('../lib/Manager');

test('test for Manager methods', () => {
    const manager = new Manager('Dani', '01', '(999) 999-9999', 'dreinholz28@gmail.com')

    expect(manager.getName()).toBe('Dani');
    expect(manager.getRole()).toBe('Manager');
    expect(manager.getId()).toBe('01');
    expect(manager.getPhone()).toBe('(999) 999-9999');
    expect(manager.getEmail()).toBe('dreinholz28@gmail.com');
})