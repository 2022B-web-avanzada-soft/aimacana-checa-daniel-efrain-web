
const inquirer = require('inquirer');

inquirer.prompt({
    name: 'color',
    message: 'Cúal es tu color favorito?',
    default: 'red'
})