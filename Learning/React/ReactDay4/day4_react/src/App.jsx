import { useState } from "react"


const App = () => {
  const [count,setCount] = useState(0)

  const increment = ()=>{

    setCount(count+1)

  }
  const decrement = ()=>{
     setCount(count-1)

  }
  const clear = ()=>{
     setCount(0)
  }


  return (
   <>
   
   <h1 className="">{count}</h1>
   <button onClick={increment}>increment</button>   
   <button onClick={decrement}>decrement</button>   
   <button onClick={clear}>delete</button>   


   
   </>
  )
}

export default App