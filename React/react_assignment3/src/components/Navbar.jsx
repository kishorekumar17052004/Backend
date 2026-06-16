import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-blue-600 text-white p-4 flex gap-6">
      <Link to="/" className="font-bold">Home</Link>
      <Link to="/assignment1">Assignment 1</Link>
    </nav>
  );
}

export default Navbar;