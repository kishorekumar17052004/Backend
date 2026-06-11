import { NavLink } from "react-router-dom"


const Navbar = () => {
  return (
    <>
    <nav className="bg-black text-white flex justify-between ">
    <NavLink to="/">Home</NavLink>
    <NavLink to="/about">About Us</NavLink>
    <NavLink to="/project">Project</NavLink>
    <NavLink to="/contact">Contact Us</NavLink>
    </nav>
    </>
  )
}

export default Navbar

