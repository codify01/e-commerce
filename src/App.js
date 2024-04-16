import { useState } from "react"
import AddTodo from "./component/addTodo"
import Display from "./component/display"
import StudentForm from "./component/studentForm"
import StudentTable from "./component/studentTable"
import { Routes,Route, Navigate } from "react-router-dom"
import About from "./pages/about"
import Deals from "./deals"
import Home from "./pages/Home"
import Header from "./header"
import NotFound from "./pages/NotFound"
import UserPage from "./pages/UserPage"
import Api from "./component/Api"
import Effect from "./component/Effect"
import Signup from "./Signup"
import Dashboard from "./pages/Dashboard"
import Counter from "./component/Counter"
import Upload from "./component/Upload"
// import Weather from "./pages/Weather"

// import Header from "./component/header"
const App = ()=>{
  const submit = (students, setdetails)=> {
    setallStudents([...allStudents, students])
    setdetails.fName("")
    setdetails.lName("")
    setdetails.mail("")
    setdetails.pass("")
  }
  const [allStudents, setallStudents] = useState([])
  const token = localStorage.getItem('token')
  return(
    <>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/counter" element={<Counter/>} />
        <Route path="/:username" element={<UserPage/>}/>
        <Route path="/home" element={<Navigate to="/"/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/deals" element={<Deals/>}/>
        <Route path="*" element={<NotFound/>}/>
        <Route path="/api" element={<Api/>}/>
        <Route path="/effect" element={<Effect/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/upload" element={<Upload/>}/>
        <Route path="/dashboard" element={token ? <Dashboard/> : <Navigate to="/signup"/>} />
      </Routes>
    </>  
  )
}
export default App