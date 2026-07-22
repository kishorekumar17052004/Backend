import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav
     
    >
      <Link  to="/dashboard">
        Dashboard
      </Link>

      <Link  to="/home">
        Home
      </Link>

      <Link to="/topics">
        Topics
      </Link>
    </nav>
  );
};

export default Navbar;