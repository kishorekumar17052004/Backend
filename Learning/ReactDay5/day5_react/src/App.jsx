import { useState } from "react"


const App = () => {
   const [user,setUser] = useState("React")
  const handlechange = ()=>{
     
    setUser(user ? null:"react")


  }
  
  return (
   <>
      
      {user ?? <h1>Thia is React</h1>}
      <button onClick={handlechange}>Change</button>
   
  
   
   </>
  )
}

export default App