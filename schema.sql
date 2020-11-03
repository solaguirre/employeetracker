-- design a database schema containing three tables: employee, role, department

DROP DATABASE IF EXISTS employeeTracker_db;

CREATE DATABASE employeeTracker_db;

USE employeeTracker_db;

CREATE TABLE employee (
    id INT 
    first_name VARCHAR(30)
    last_name VARCHAR(30)
    role_id INT 
    manager_id INT 
    PRIMARY KEY (id)
);

CREATE TABLE role (
    id INT 
    title VARCHAR(30)
    salary DECIMAL
    department_id INT 
    PRIMARY KEY(id)
);

CREATE TABLE department (
    name VARCHAR(30)
    id INT PRIMARY KEY
);

-- INSERT INTO products (flavor, price, quantity)
-- VALUES ("vanilla", 2.50, 100);

