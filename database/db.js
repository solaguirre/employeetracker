let connection = require('./connection');

// create all the queries and put them in a class
// send queries to database and send data back 

class Database {
    // methods repeated

    // Add departments, roles, employees

    // View departments, roles, employees

    // Update employee roles

    query() {
        connection.query("SELECT * FROM employees", function (err, res) {
            if (err) throw err;
            console.log(res);

        });
    }

    query() {
        connection.query("SELECT * FROM employees", function (err, res) {
            if (err) throw err;
            console.log(res);

        });
    }

}

module.exports = new Database();