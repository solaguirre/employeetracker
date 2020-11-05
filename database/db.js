let connection = require('./connection');

// create all the queries and put them in a class
// send queries to database and send data back 

class Database {

    // Add departments, roles, employees

    // View departments, roles, employees

    // Update employee roles

    // view employees
    query() {
        connection.query("SELECT * employee", function (err, res) {
            if (err) throw err;
            console.table(res);

        });
    }
    // add employee
    query() {
        connection.query("INSERT INTO employee SET ?", function (err, res) {
            if (err) throw err;
            console.log(res);

        });
    }
    // add employee role
    query() {
        connection.query("INSERT INTO role SET ?", function (err, res) {
            if (err) throw err;
            console.log(res);

        });
    }

    // view employee role 
    query() {
        connection.query("SELECT * FROM role", function (err, res) {
            if (err) throw err;
            console.table(res);

        });
    }

    // add department
    query() {
        connection.query("INSERT INTO department SET ?", function (err, res) {
            if (err) throw err;
            console.log(res);

        });
    }
// view department
    query() {
        connection.query("SELECT * FROM department", function (err, res) {
            if (err) throw err;
            console.table(res);

        });
    }
    //  update employee role
    query() {
        connection.query("SELECT * FROM employee", function (err, res) {
            if (err) throw err;
            console.log(res);

        });
    }

}

module.exports = new Database();