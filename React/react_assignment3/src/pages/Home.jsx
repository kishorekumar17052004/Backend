import { Link } from "react-router-dom"


const Home = () => {
  return (
  <>
  
   <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">React Assignments</h1>

      <div className="flex flex-col gap-4 w-60">
        <Link
          to="/assignment1"
          className="bg-blue-600 text-white text-center p-3 rounded"
        >
          Assignment 1
        </Link>

        <button className="bg-gray-400 text-white p-3 rounded">
          Assignment 2
        </button>

        <button className="bg-gray-400 text-white p-3 rounded">
          Assignment 3
        </button>
      </div>
    </div>
  
  
  </>
  )
}

export default Home