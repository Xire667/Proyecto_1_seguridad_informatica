import {create} from 'zustand'
import axios from 'axios'

const useStudentStore = create((set)=>({
    students: [],
    addStudent: async(student)=>{
        try {
            const response = await axios.post('http://localhost:3001/student', student)
            set((state)=>({
                student: [...state.student, response.data]
            }))
        } catch (error) {
            console.log("Error adding user", error.message);
        }
    },
    fetchStudents: async ()=>{
        try {
            const response = await axios.get('http://localhost:3001/student')
            set({students: response.data})
        } catch (error) {
            console.log('Error fetching students', error.message)
        }
    },
    deleteStudent: async (id) =>{
        try {
            const response = await axios.delete(`http://localhost:3001/student/${id}`)
            console.log('Student deleted:', response.data)
            set((state) => ({
                students: state.students.filter((student) => student.id !== id),
            }))
        } catch (error) {
            console.log('Error', error.message)
        }
    },
    updateStudent: async (id, updatedData) => {
        try {
            const response = await axios.put(`http://localhost:3001/student/${id}`, updatedData);
            set((state) => ({
                students: state.students.map((student) =>
                    student.id === id ? response.data : student
                ),
            }));
        } catch (error) {
            console.log('Error updating student', error.message);
        }
    }
}))

export default useStudentStore