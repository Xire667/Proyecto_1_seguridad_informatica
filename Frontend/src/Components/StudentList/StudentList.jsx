import { useEffect, useState } from "react";
import useStudentStore from "../../Store/StudentStore";
import style from "./StudentList.module.css";
import Navegador from '../Navegador/Navegador';

const StudentList = () => {
    const { fetchStudents, students, deleteStudent, updateStudent } = useStudentStore();
    const [searchTerm, setSearchTerm] = useState("");
    const [filteredStudents, setFilteredStudents] = useState([]);
    const [selectedStudent, setSelectedStudent] = useState(null); // Estado para el estudiante seleccionado

    useEffect(() => {
        fetchStudents();
    }, []);

    useEffect(() => {
        setFilteredStudents(
            students.filter((student) =>
                `${student.firstName} ${student.lastName}`
                    .toLowerCase()
                    .includes(searchTerm.toLowerCase())
            )
        );
    }, [searchTerm, students]);

    const handleDelete = (id) => {
        if (window.confirm("Are you sure?")) {
            deleteStudent(id);
        }
    };

    const handleUpdate = (id) => {
        if (window.confirm("Are you sure?")) {
            updateStudent(id);
        }
    };

    const handleSelectStudent = (student) => {
        setSelectedStudent(student); // Selecciona el estudiante
    };

    const handleEditChange = (e) => {
        const { name, value } = e.target;
        setSelectedStudent({
            ...selectedStudent,
            [name]: value
        });
    };

    const handleEditSubmit = (e) => {
        e.preventDefault();
        updateStudent(selectedStudent.id, selectedStudent);
        setSelectedStudent(null); // Desselecciona el estudiante después de la actualización
    };

    return (
        <div className="contenedorGeneral">
            <Navegador />
            <h1>Student List</h1>
            <input
                type="text"
                placeholder="Buscar estudiante..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className={style.searchInput} // Corregido el nombre de la clase
            />
            <div className={style.container}>
                {filteredStudents.map((user) => (
                    <div key={user.id} className={style.listContainer}>
                        <h3>{user.firstName} {user.lastName}</h3> {/* Corregido el acceso a lastName */}
                        <button onClick={() => handleDelete(user.id)}>❌</button>
                        <button onClick={() => handleSelectStudent(user)}>✍️</button>
                    </div>
                ))}
            </div>
            {selectedStudent && (
                <div className={style.editContainer}> {/* Nuevo contenedor de edición */}
                    <h2>Edit Student</h2>
                    <form onSubmit={handleEditSubmit}>
                        <label>
                            First Name:
                            <input
                                type="text"
                                name="firstName"
                                value={selectedStudent.firstName}
                                onChange={handleEditChange}
                            />
                        </label>
                        <label>
                            Last Name:
                            <input
                                type="text"
                                name="lastName"
                                value={selectedStudent.lastName}
                                onChange={handleEditChange}
                            />
                        </label>
                        <button type="submit">Save</button>
                    </form>
                </div>
            )}
        </div>
    );
}

export default StudentList;
