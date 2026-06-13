const Login = () => {
  return (
    <div className="rounded bg-slate-900/80 p-12 text-white shadow-xl shadow-slate-950/20 ring-1 ring-white/10">
      <h1 className="text-4xl font-semibold">Login</h1><br></br>
      <input
          type="email"
          placeholder="Enter Email"
          className="   w-100 border border-gray-300 p-3 rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
        /><br></br>
      <input
          type="password"
          placeholder="Enter Password"
          className="w-100 border border-gray-300 p-3 rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
        /><br></br>
         <button className="w-100 bg-blue-600 text-white p-3 rounded-md hover:bg-blue-700">
          Login
        </button>
      
    </div>
  )
}

export default Login