import {  Route, Routes } from "react-router-dom"
import Register from "./components/Register"
import Login from "./components/Login"
import Dashboard from "./pages/Dashboard"
import UseState from "./components/UseState"



const App = () => {
  return (
   <>
    
      {/* <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    */}
   <UseState/>

   </>
   
  )
}

export default App
