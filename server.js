// // inquirer 
console.log('Hello');

const inquirer = require('inquirer');

const db = require('./database/db')

function main() {


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
};

function viewEmployees() {
    main();

};

function viewDepartments() {
    main();
}

function viewRole() {
    main();
}

function addDepartment() {
    inquirer.prompt([
        {
            type: 'input',
            name: "dept_name",
            message: "Type in the new department"
        }
    ])
    main();
};

function addRole() {
    inquirer.prompt([
        {
            type: 'input',
            name: "title",
            message: "What is the employee's title?"
        },
        {
            type: 'input',
            name: "salary",
            message: "What is the employee's salary?"
        },
        {
            type: 'input',
            name: "department_id",
            message: "What is the employee's department ID?"
        }

    ])
    main();
};

function addEmployee() {
    inquirer.prompt([
        {
            type: 'input',
            name: "first_name",
            message: "What is the employee's first name?"
        },
        {
            type: 'input',
            name: "last_name",
            message: "What is the employee's last name?"
        },
        {
            type: 'input',
            name: "role_id",
            message: "What is the employee's role ID?"
        },
        {
            type: 'input',
            name: 'manager_id',
            message: "What is the employee's manager ID?"
        },
    ])
    main();
};

function updateEmployeeRole() {
    inquirer.prompt([
        {
            type: 'input',
            name: "employee_id",
            message: "What is the employee's ID #?"
        },
        {
            type: 'input',
            name: "role_id",
            message: "What is the employee's new role ID #?"
        }
    ])
    main();
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