import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import HomeComponents from './Components/HomeComponents/HomeComponents'
import StudentForm from './Components/StudentForm/StudentForm'
import StudentList from './Components/StudentList/StudentList'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomeComponents/>} />
          <Route path='/studentform' element={<StudentForm/>}/>
          <Route path='/studentlist' element={<StudentList/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App