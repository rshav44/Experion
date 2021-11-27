const Sequelize = require('sequelize');
const db = require('../config/database');

const Request = db.define('requestTable', {
    Request_ID: {
        type: Sequelize.STRING,
        primaryKey: true,
    },
    Cause_travel: {
        type: Sequelize.STRING,
        allowNull: false
    },
    Source: {
        type: Sequelize.STRING,
        allowNull: false
    },
    Destination: {
        type: Sequelize.STRING,
        allowNull: false
    },
    Mode: {
        type: Sequelize.STRING,
        allowNull: false
    },
    From_date: {
        type: Sequelize.DATEONLY,
        allowNull: false
    },
    To_date: {
        type: Sequelize.DATEONLY,
        allowNull: false
    },
    No_days:{
        type: Sequelize.STRING,
        allowNull: false
    },
    Priority:{
        type: Sequelize.STRING,
        allowNull: false
    },
    Project_id:{
        type: Sequelize.STRING,
        allowNull: false
    },
    Emp_id:{
        type: Sequelize.STRING,
        allowNull: false
    },
    Status:{
        type: Sequelize.STRING,
        allowNull: false
    }
});

module.exports = Employee;

