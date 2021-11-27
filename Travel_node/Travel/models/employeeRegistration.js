const Sequelize = require('sequelize');
const db = require('../config/database');

const Employee = db.define('employeeRegistration', {
    emp_ID: {
        type: Sequelize.STRING,
        primaryKey: true,
    },
    First_Name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    Last_Name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    Age: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    Gender: {
        type: Sequelize.STRING,
        allowNull: false
    },
    Address: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    Phone_Number: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    I_id:{
        type: Sequelize.INTEGER,
        allowNull: false
    }
});

module.exports = Employee;

