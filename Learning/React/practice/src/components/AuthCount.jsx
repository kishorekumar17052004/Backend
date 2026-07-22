import { createContext, useState } from "react"

const CountContext = createContext()

export const CountProvider = ({children})=>{

  const [count ,setCount] = useState(0)
  const handleincrease = ()=>{
    setCount(count+1)
  }
   const handledecrease = ()=>{
    setCount(count-1)
  }
   const handlerest = ()=>{
    setCount(0)
  }
return(

    <CountContext.Provider value={{count , handleincrease , handledecrease,handlerest}}>
        {children}
    </CountContext.Provider>
)

}
export default CountContext