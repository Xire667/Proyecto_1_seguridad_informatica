//StudentControllers.js

const Student = require('../Models/Student')

const CreateStudentController = async ({id, firstName, lastName}) =>{
    try {
        const newStudent = await Student.create({id, firstName, lastName})
        return newStudent
    } catch (error) {
        throw new Error(error.message)
    }
}

//Get all students
const getAllStudentsController = async () =>{
    try {
        const students = await Student.findAll()
        return students
    } catch (error) {
        throw new Error(error.message);
        
    }
}

//Update Student by ID
const updatedStudentsByIdController = async(id, studentData) =>{
    try {
        const updateStudent = await Student.findByPk(id) //se arreglo esto
        if(!updateStudent){
            return null
        }
        await updateStudent.update(studentData)
        return updateStudent; //se agrego esto
    } catch (error) {
        throw new Error(error.message)
    }
}

//Deleted Student by ID
const deletedStudentsByIdController = async(id) =>{
    try {
        const student = await Student.findByPk(id)
        if(!student){
            return null
        }
        await student.destroy()
        return student
    } catch (error) {
        throw new Error(error.message)
    }
}

module.exports={
    CreateStudentController,
    getAllStudentsController,
    updatedStudentsByIdController,
    deletedStudentsByIdController
}