import { useState } from "react"
import Button from "./components/Button"
import WithButton from "./hoc/WithButton"

const EnhanceComponents = WithButton(Button)
const App = () => {
  const [them , setThem]= useState(true)
  
  const handleclick = ()=>{

      setThem((prev)=> !prev )
  }

  
  return (
    <>
    <EnhanceComponents click={handleclick} change={them }/>
   <button onChange={handlechange}>Change Color</button>
    
    </>
  )
}

export default App