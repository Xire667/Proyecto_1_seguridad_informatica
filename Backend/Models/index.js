const {Sequelize} = require('../db')

// importar los modelos

const Student = require('../Models/Student')
const Course = require('../Models/Course')
const sequelize = require('../db')

const db ={
    sequelize,
    Student,
    Course,
    //Agregar mas modelos
}

module.exports = db