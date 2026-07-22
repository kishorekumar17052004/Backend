import { useCallback, useState } from "react"
import List from "./List"

const App = () => {
  console.log("components")
  const [number ,  setNumber] = useState(0)
  const [theme , setTheme ] = useState (false)

  const getNumber = useCallback(()=>{
    return [number+1 , number+2 ,number+3]
  },[number])
  const light = {
    backgroundColor:"black",
    color:"white"
  }
   const dark = {
    backgroundColor:"white",
    color:"black"
  }

  return (
  <>
  <div style={theme?light:dark}>
  <input type="number"  value={number} onChange={(e)=>setNumber(parseInt(e.target.value))} />
  <button onClick={()=>setTheme((prev)=>!prev)}>Change Theme</button>
  <List getNumber={getNumber}/> 
  </div>
  
  </>  
  )
}

export default App