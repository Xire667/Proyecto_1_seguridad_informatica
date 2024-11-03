const { DataTypes } = require("sequelize")

const sequelize = require('../db')

const Course = sequelize.define('Course', {
    id:{
        type:DataTypes.INTEGER,
        primaryKey: true
    },
    Name:{
        type:DataTypes.STRING,
        allowNull: false
    },
    Credits:{
        type:DataTypes.INTEGER,
        allowNull: false
    }
})

module.exports = Course