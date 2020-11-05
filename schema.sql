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

-- dummy data

INSERT INTO employee (first_name, last_name, role_id, manager_id)
("Mando", "Lorian", 24, 43), ("Greatest", "Ever", 1, 14),("The", "Child", 1, 2),("Rihanna", "just Rihanna",2, 20),("Trevor", "Noah", 32, 11)

INSERT INTO role (title, salary, department_id)
VALUES ("Manager", 65000, 1), ("Accountant", 100000,2), ("Sales Representative", 150000, 3);

INSERT INTO department (dept_name)
VALUES ("Accounting"), ("Human Resources"), ("Sales");
