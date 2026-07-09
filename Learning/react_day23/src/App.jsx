import useCount from "./Hooks/useCount"

const App = () => {
  const {count,handleIncrement,handleDecrement,handleReset} = useCount()
  return (
    <>
    <div>
       <h1>{count}</h1>
       <button onClick={handleIncrement}>Increment</button>
       <button onClick={handleDecrement}>Decrement</button>
       <button onClick={handleReset}>Reset</button>

    </div>
    
    
    </>
  )
}

export default App