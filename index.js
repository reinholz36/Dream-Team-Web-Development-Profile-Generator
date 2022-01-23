const fs = require('fs')
const inquirer = require('inquirer');

const Manager = require('./lib/Manager')
const Engineer = require('./lib/Engineer')
const Intern = require('./lib/Intern');


const generateManagerQuestions = [
            {
                type: 'input',
                name: 'name',
                message: "What is your team manager's name?",
                validate: titleInput => {
                    if (titleInput) {
                        return true;
                    } else {
                        console.log("Please enter your team manager's name.")
                    }
                }
            },
            {
                type: 'input',
                name: 'id',
                message: "What is your team manager's employee ID?",
                validate: idInput => {
                    if (idInput) {
                        return true;
                    } else {
                        console.log("Please enter your team manager's employee ID.")
                    }
                }
            },
            {
                type: 'input',
                name: 'email',
                message: "What is your team manager's email address?",
                validate: emailInput => {
                    if (emailInput) {
                        return true;
                    } else {
                        console.log("Please enter your team manager's email address.")
                    }
                }
            },
            {
                type: 'input',
                name: 'phone',
                message: "What is your team manager's office phone number?",
                validate: phoneInput => {
                    if (phoneInput) {
                        return true;
                    } else {
                        console.log("Please enter your team manager's office phone number.")
                    }
                }
            },
        ]

const generateCombinedQuestions = [
    {
        type: 'list',
        name: 'title',
        message: 'Select an emplyee title from the list.',
        choices:['Engineer', 'Intern']
    },
    {
        type: 'input',
        name: 'name',
        message: "What is your team member's name?",
        validate: titleInput => {
            if (titleInput) {
                return true;
            } else {
                console.log("Please enter your team member's name.")
            }
        }
    },
    {
        type: 'input',
        name: 'id',
        message: "What is your team member's employee ID?",
        validate: idInput => {
            if (idInput) {
                return true;
            } else {
                console.log("Please enter your team member's employee ID.")
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: "What is your team member's email address?",
        validate: emailInput => {
            if (emailInput) {
                return true;
            } else {
                console.log("Please enter your team member's email address.")
            }
        }
    },
    {
        type: 'input',
        name: 'github',
        message: "What is your team engineer's GitHub username?",
        validate: githubInput => {
            if (githubInput) {
                return true;
            } else {
                console.log("Please enter your team engineer's GitHub username.")
            }
        },
        when: (answers) => answers.title === 'Engineer'
    },
    {
        type: 'input',
        name: 'school',
        message: "Which school is your intern currently attending?",
        validate: schoolInput => {
            if (schoolInput) {
                return true;
            } else {
                console.log("Please enter the school your intern is currently attending.")
            }
        },
        when: (answers) => answers.title === 'Intern'
    },

]

const generateHeader = () => {
        const startPage = 
        `<!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/css/bootstrap.min.css">
            <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.0/css/all.css" integrity="sha384-lZN37f5QGtY3VHgisS14W3ExzMWZxybE1SJSEsQp9S+oqd12jhcu+A56Ebc1zFSJ" crossorigin="anonymous">
            <title>My Team</title>
        </head>
        <header class="p-5 text-center bg-info text-white">
            <h1 class="display-4"><i class="fab fa-centos fa-2x"></i> My Team</h1>
        </header>
        <main class="container col d-flex justify-content-center">
            <div class="row">` 
    fs.writeFile('./dist/teampage.html', startPage, (err) => err ? console.log(err) : '')
    inquirer.prompt(generateManagerQuestions).then((answers) => {
        const manager = new Manager(answers.name, answers.id, answers.email, answers.phone)
        managerContent(manager);
        addToTeam();
    })
}

const teamMember = () => {
    inquirer.prompt(generateCombinedQuestions).then((answers) => {
        if (answers.title === 'Engineer') {
            const engineer = new Engineer(answers.name, answers.id, answers.email, answers.github)
            engineerContent(engineer)
        } else {
            const intern = new Intern(answers.name, answers.id, answers.email, answers.school)
            internContent(intern)
        } 
            addToTeam();
    })
}

const managerContent = (manager) => {
    const managerHTML =` <!-- Manager template -->
            <section class="card p-3 m-3 shadow p-4 mb-4 bg-white">
                <div class="card-header bg-dark text-white">
                    <h2>${manager.getName()}</h2>
                    <h3><i class="fas fa-coffee"></i> Manager</h3>
                </div>
                <ul class="card-body list-group list-group-flush">
                    <li class="list-group-item">ID: ${manager.getId()}</li>
                    <li class="list-group-item">Email: <a href="mailto:${manager.getEmail()}" title="Go to employee email">${manager.getEmail()}</a></li>
                    <li class="list-group-item">Office number: ${manager.getPhone()}</li>
                </ul>
            </section>`
    fs.appendFile('./dist/teampage.html', managerHTML, (err) => err ? console.log(err) : '')
}

const engineerContent = (engineer) => {
    const engineerHTML = `<!-- Engineer Template -->
            <section class="card p-3 m-3 shadow p-4 mb-4 bg-white">
                <div class="card-header bg-dark text-white">
                    <h2>${engineer.getName()}</h2>
                    <h3><i class="fas fa-cogs"></i> Engineer</h3>
                </div>
                <ul class="card-body list-group list-group-flush">
                    <li class="list-group-item">ID: ${engineer.getId()}</li>
                    <li class="list-group-item">Email: <a href="mailto:${engineer.getEmail()}" title="Go to employee email">${engineer.getEmail()}</a></li>
                    <li class="list-group-item">GitHub: <a href="https://github.com/${engineer.getGitHub()}" title="Go to employee GitHub profile" target="_blank" rel="noopener">
                    ${engineer.getGitHub()}</a></li>
                </ul>
            </section>`
    fs.appendFile('./dist/teampage.html', engineerHTML, (err) => err ? console.log(err) : '')
}

const internContent = (intern) => {
    const internHTML = `<!-- Intern Template  -->
            <section class="card p-3 m-3 shadow p-4 mb-4 bg-white">
                <div class="card-header bg-dark text-white">
                    <h2>${intern.getName()}</h2>
                    <h3><i class="fab fa-black-tie"></i> Intern</h3>
                </div>
                <ul class="card-body list-group list-group-flush">
                    <li class="list-group-item">ID: ${intern.getId()}</li>
                    <li class="list-group-item">Email: <a href="mailto:${intern.getEmail()}" title="Go to employee email">${intern.getEmail()}</a></li>
                    <li class="list-group-item">School: ${intern.getSchool()}</li>
                </ul>
            </section>`
    fs.appendFile('./dist/teampage.html', internHTML, (err) => err ? console.log(err) : '')
}

const addToTeam = () => {
    inquirer.prompt([{
        type: 'confirm',
        name: 'newMember',
        message: 'Would you like to add another team member?',
        default: true,
    }]).then((answer) => {
        if (answer.newMember) {
            teamMember();
        } else {
            console.log('Your Team Profile has been generated.');
            const endPage = `<!-- End of Template  -->
                </div>
            </main>
            </html>`
            fs.appendFile('./dist/teampage.html', endPage, (err) => err ? console.log(err) : '')
        }
    })
}

generateHeader();

// THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number