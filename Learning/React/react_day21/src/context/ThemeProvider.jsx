import { createContext,  useState } from "react";

const ThemeContext = createContext()



export const ThemeProvider = ({children})=>{
    const [theme , setTheme ] = useState(false)
    const handleClick = ()=>{
        setTheme(!theme)
    }
    const themeStyle = theme ? "bg-black text-white w-40 text-2xl  " : "bg-white text-black w-40 text-2xl" 
    return(
        <ThemeContext.Provider value={{themeStyle,handleClick }}>
            {children}
        </ThemeContext.Provider>
    )

}
export default ThemeContext