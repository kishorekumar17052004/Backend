import { Route, Routes } from "react-router-dom"
import Contact from "../pages/Contact"
import About from "../pages/About"
import Home from "../pages/Home"

const AllRoutes = () => {
  return (
    <>
     <Routes>

         <Route path="/" element={<Home/>}/>
         <Route path="/about" element={<About/>}/>
         <Route path="/" element={<Contact/>}/>

     </Routes>
    
    
    </>
  )
}

export default AllRoutes