-- design a database schema containing three tables: employee, role, department

DROP DATABASE IF EXISTS employeeTracker_db;

CREATE DATABASE employeeTracker_db;

USE employeeTracker_db;

CREATE TABLE employee (
    id INT NOT NULL AUTO_INCREMENT,
    first_name VARCHAR(30),
    last_name VARCHAR(30),
    role_id INT,
    manager_id INT,
    PRIMARY KEY (id)
);

CREATE TABLE role (
    id INT NOT NULL AUTO_INCREMENT,
    title VARCHAR(30),
    salary DECIMAL,
    department_id INT, 
    PRIMARY KEY(id)
);

CREATE TABLE department (
    dept_name VARCHAR(30),
    id INT NOT NULL AUTO_INCREMENT,
    PRIMARY KEY (id)
);


