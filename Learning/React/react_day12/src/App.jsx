import { useEffect, useState } from "react"


const App = () => {
  
  const [count ,  setCount ]= useState(0)
   
   useEffect(()=>{
     const timer = setInterval(()=>{
       setCount((prev)=>prev+1)
     },1000)
     return ()=>{ clearInterval(timer)}
  
   },[])
  


  return (
    <>
    <h1>count-{count}</h1>
 
    </>
  )
}

export default App