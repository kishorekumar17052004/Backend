import { useContext } from "react"
import ThemeContext from "./context/ThemeProvider"


const App = () => {
  const {themeStyle,handleClick} = useContext(ThemeContext)
  return (
    <>
    <div>
      <div className={themeStyle}>
          <h1>Context</h1>
      </div>
      <div>
        <button className="border bg-amber-500 hover:bg-amber-800 text-white p-2 text-2xl rounded" onClick={handleClick}>Change Theme</button>
      </div>
    </div>
    
    
    </>
  )
}

export default App