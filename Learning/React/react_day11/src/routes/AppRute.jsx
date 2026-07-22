import { Route, Routes } from "react-router-dom"
import Register from "../pages/Register"
import DashBoard from "../pages/DashBoard"
import Login from "../pages/Login"


const AppRute = () => {
  return (
    <>
    <Routes>
      <Route path="/" element={<Register/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/dashboard" element={<DashBoard/>}/>

    </Routes>
    
    </>
  )
}

export default AppRute