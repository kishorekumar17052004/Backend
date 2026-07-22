import { useState } from "react"


const useCount = (intialvalue = 0) => {
    const [count , setCount] = useState(intialvalue)
    const handleIncrement =()=>setCount(count+1)
    
    const handleDecrement =()=>setCount(prev=>prev-1)
    
    const handleReset =()=>setCount(0)


  return {count,handleIncrement,handleDecrement,handleReset}
  
}

export default useCount