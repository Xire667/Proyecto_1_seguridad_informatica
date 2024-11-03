import { useState } from "react"
import axios from "axios"
import useStudentStore from "../../Store/StudentStore"
import Navegador from '../Navegador/Navegador'
import './StudentForm.css'

const StudentForm = () =>{
    const {addStudent} = useStudentStore()
    const [StudenData, setStudentData] = useState({
        firstName:"",
        lastName:""
    })

    console.log(StudenData);

    const handleInputChange = (e)=>{
        const {name, value} = e.target;
        setStudentData({
            ...StudenData,
            [name]: value
        });
    }

    const handleSubmit = async(e)=>{
        e.preventDefault();
        addStudent(StudenData)
        setStudentData({
            firstName:"",
            lastName:""
        })
        alert("Student add Successfully")
        // try {
        //     const response = await axios.post("http://localhost:3001/student", StudenData)
        //     console.log("Response", response.data)
        // } catch (error) {
        //     console.log("Error:", error)
        // }
    }

    return (
        <div className="form-container">
            <Navegador/>
            <div className="form-content">
                <h1>Student Form</h1>
                <form onSubmit={handleSubmit}>
                    <label>Nombre:</label>
                    <input
                        type="text"
                        placeholder="Enter firstname"
                        required
                        name="firstName"
                        value={StudenData.firstName}
                        onChange={handleInputChange}
                    />
                    <label>Apellido:</label>
                    <input
                        type="text"
                        placeholder="Enter lastname"
                        required
                        name="lastName"
                        value={StudenData.lastName}
                        onChange={handleInputChange}
                    />
                    <button type="submit">Save</button>
                </form>
            </div>
        </div>
    )
}

export default StudentForm