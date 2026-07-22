

const usecallback = () => {
 const App = () => {
  console.log('Compoent Running');

  const [count,setCout] = useState(0)

  const [theme,setTheme] = useState(false)
  

 
 

    const handelThemeChange = useCallback(()=>{
    
        


        console.log('Component callback running');
        setTheme(!theme)

        
    },[])

 const handleClick = ()=>{
  console.log('Count Process');
  
  setCout(count+1)
 }

 
 
  
  return (
   <>
   <h1>{count}</h1>
   
   <p>{theme?"Running":"Not Running"}</p>
   <button onClick={handleClick}>
   Click To update
   </button>
   <button onClick={handelThemeChange}>Click Theme</button>
   </>
  )
}
}

export default usecallback