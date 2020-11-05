// // inquirer 
console.log('Hello');
const mysql = require('mysql');
const inquirer = require('inquirer');

const db = require('./database/db')

inquirer.prompt([
    // pass questions here
    {
        name: 'message',
        type: "list",
        message: "What would you like to do?",
        choices: ['View Employees', 'View Employee Role', 'View Departments', 'Add Employee', 'Add Employee Role', 'Add Department', 'Update Employee Role']

    }
])
    .then(answers => {
        console.log(answers);
        switch (answers.message) {
            case 'View Employees':
                viewEmployees();
                break;

            case 'View Employee Role':
                viewRole();
                break;

            case 'View Departments':
                viewDepartments();
                break;

            case 'Add Employee':
                addEmployee();
                break;

            case 'Add Employee Role':
                addRole();
                break;

            case 'Add Department':
                addDepartment();
                break;

            case 'Update Employee Role':
                updateEmployeeRole();
                break;

        }

    })
    .catch(error => {
        console.log(error);


    })

function viewEmployees() {
    console.log('Hola');

    SELECT


};

function addDepartment() {

};

function addRole() {

};

function addEmployee() {

};


// Build a command-line application that at a minimum allows the user to:

// Add departments, roles, employees

// View departments, roles, employees

// Update employee roles

// Bonus points if you're able to:

// Update employee managers

// View employees by manager

// Delete departments, roles, and employees

// View the total utilized budget of a department -- ie the combined salaries of all employees in that department