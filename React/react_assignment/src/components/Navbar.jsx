import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-blue-600 text-white shadow p-4 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-xl font-bold mb-4">React Assignment Portal</h1>
        <div className="grid grid-cols-4 md:grid-cols-8 gap-2">
          <Link to="/task1"><button className="w-full bg-white text-blue-600 px-2 py-2 rounded text-sm font-semibold hover:bg-gray-100">Task 1</button></Link>
          <Link to="/task2"><button className="w-full bg-white text-blue-600 px-2 py-2 rounded text-sm font-semibold hover:bg-gray-100">Task 2</button></Link>
          <Link to="/task3"><button className="w-full bg-white text-blue-600 px-2 py-2 rounded text-sm font-semibold hover:bg-gray-100">Task 3</button></Link>
          <Link to="/task4"><button className="w-full bg-white text-blue-600 px-2 py-2 rounded text-sm font-semibold hover:bg-gray-100">Task 4</button></Link>
          <Link to="/task5"><button className="w-full bg-white text-blue-600 px-2 py-2 rounded text-sm font-semibold hover:bg-gray-100">Task 5</button></Link>
          <Link to="/task6"><button className="w-full bg-white text-blue-600 px-2 py-2 rounded text-sm font-semibold hover:bg-gray-100">Task 6</button></Link>
          <Link to="/task7"><button className="w-full bg-white text-blue-600 px-2 py-2 rounded text-sm font-semibold hover:bg-gray-100">Task 7</button></Link>
          <Link to="/task8"><button className="w-full bg-white text-blue-600 px-2 py-2 rounded text-sm font-semibold hover:bg-gray-100">Task 8</button></Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;