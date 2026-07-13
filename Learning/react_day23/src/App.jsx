import useCount from "./Hooks/useCount"
import useLocalStorage from "./Hooks/useLocalStorage"

const App = () => {
  // const {count,handleIncrement,handleDecrement,handleReset} = useCount()
  const {name,handleChange} = useLocalStorage("userName", "")
  return (
    <>
    {/* <div>
       <h1>{count}</h1>
       <button onClick={handleIncrement}>Increment</button>
       <button onClick={handleDecrement}>Decrement</button>
       <button onClick={handleReset}>Reset</button>

    </div> */}
    <div>
      <h1>{name}</h1>
      <input type="text" value={name} onChange={handleChange} />
    </div>
    
    
    </>
  )
}

export default App