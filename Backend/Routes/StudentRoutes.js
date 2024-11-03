//StudentRoutes.js

const {Router} = require('express')
const {CreateStudentController,
    getAllStudentsController,
    updatedStudentsByIdController,
    deletedStudentsByIdController
} = require('../Controller/StudentControllers')

const StudentRouter = Router()

//Crear un nuevo Student (post = agregar informacion)
StudentRouter.post('/',async(req, res)=>{
    const {id, firstName, lastName} = req.body
    try{
        const newStudent = await CreateStudentController({id, firstName, lastName})
        res.status(201).json(newStudent)
    }catch (error){
        res.status(400).json({error: error.message})
    }
})

//Get all students
StudentRouter.get('/', async (req, res) =>{
    try {
        const students = await getAllStudentsController()
        res.status(200).json(students)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
})

//Update students by ID
StudentRouter.put('/:id', async (req, res) => {
    const { id } = req.params
    const studentData = req.body
    try {
        const updatedStudents = await updatedStudentsByIdController(id, studentData)
        if(!updatedStudents){
            return res.status(400).json({error: "Student not found"})
        }
        res.status(200).json(updatedStudents)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
})

//Delete students by ID
StudentRouter.delete('/:id', async (req, res) =>{
    const { id } = req.params
    try {
        const deteledStudent = await deletedStudentsByIdController(id)
        if(!deteledStudent){
            return res.status(404).json({error: "Student not found"})
        }
        res.status(200).json({message: "Student deleted successfully"})
    } catch (error) {
        res.status(500).json({error: error.message})
    }
})

module.exports={
    StudentRouter
}