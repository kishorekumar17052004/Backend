import { useContext } from "react"
import CountContext from "../components/AuthCount"


const Counter = () => {
    const {count,handleincrease , handledecrease ,handlerest } = useContext(CountContext)
  return (
    <>
    <div>Count{count}</div>
    <button onClick={handleincrease}>increment</button>
    <button onClick={handledecrease}>Decrement</button>
    <button onClick={handlerest}>increment</button>
    
    
    </>
  )
}

export default Counter