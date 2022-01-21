const Engineer = require('../lib/Engineer');

test('test for Engineer methods', () => {
    const engineer = new Engineer('Dani', '01', 'dreinholz28@gmail.com', 'reinholz36')

    expect(engineer.getName()).toBe('Dani');
    expect(engineer.getRole()).toBe('Engineer');
    expect(engineer.getId()).toBe('01');
    expect(engineer.getEmail()).toBe('dreinholz28@gmail.com');
    expect(engineer.getGitHub()).toBe('reinholz36');
})