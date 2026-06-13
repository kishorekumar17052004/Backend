import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <>
    <div className="bg-blue-500 flex justify-between p-5  " >
        <div className="text-2xl text-white"> Logo </div>
            <div className="flex gap-10 text-1xl text-white">
             
                <Link to={"/"} > Home</Link>
                <Link to={"/about"} > About</Link>
                <Link to={"/contact"} > Contact</Link>
                 <button className="bg-white">login </button>

            </div>
       
    </div>
    
    </>
  )
}

export default Navbar