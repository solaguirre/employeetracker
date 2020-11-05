// // inquirer 
console.log("Hello");

var inquirer = require('inquirer');

const db = require('./database/db')

inquirer.prompt([
    // pass questions here
    {
        name: 'message',
        type: "list",
        message: "What would you like to do?",
        choices: ['View All Employess', 'Remove Employee', 'Update Employee Manager', 'Add Employee', 'View All Employees by Department', 'View All Employees by Manager']

    }
])
    .then(answers => {
        console.log(answers);
        switch (answers.message) {
            case 'View All Employess':
                viewEmployees();
                break;

            case 'Add Departments':
                addDepartment();
                break;

            case 'Add Role':
                addRole();
                break;

            case 'Add Employee':
                addEmployee();
                break;

        }




    })
    .catch(error => {


    })

   function viewEmployees(){
       console.log('Hola');

    SELECT 


    };

    function addDepartment(){

    };

    function addRole(){

    };

    function addEmployee(){

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