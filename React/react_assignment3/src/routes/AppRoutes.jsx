import { Route, Routes } from "react-router-dom"
import Home from "../pages/Home"
import Assignment1 from "../pages/Assignment1"


const AppRoutes = () => {
  return (
    <>
    
    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/assignment1" element={<Assignment1 />} />
      </Routes>
    
    </>
  )
}

export default AppRoutes