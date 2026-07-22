import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <>
  
     <nav className= "p-5 bg-blue-600 flex justify-between  text-white ">
      <Link>Logo</Link>
      <Link to="/" >Home</Link>
      <Link to="/contact" >Contact</Link>
      <Link to="/about" >About</Link>
      </nav>
     
      
 
   

    </>
    
  )
}

export default Navbar