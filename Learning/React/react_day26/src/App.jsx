// import { useReducer } from "react"

import { useReducer, useState } from "react"

// const intialvalue = 0

// const reducer = (state , action)=>{
//   switch (action.type) {
//     case "Increment":
//       return state+1   
//     case "Decrement":
//       return state-1 
//     case "Reset":
//       return intialvalue
      
//     default :
//     return intialvalue
  

//   }
// }

// const App = () => {

//   const [state , dispatch]=useReducer(reducer,intialvalue)

//   return (
//     <>
//     <h1>{state}</h1>
//     <button onClick={()=>dispatch({type:"Increment"})}>Increment</button>
//     <button onClick={()=>dispatch({type:"Decrement"})}>Decrement</button>
//     <button onClick={()=>dispatch({type:"Reset"})}>Reset</button>
    
    
//     </>
//   )
// }

// export default App

const todoReducer =(state , action)=>{
    
  switch (action.type) {
    case "Add":
       return [...state , action.payload]
    case "remove":
      return state.filter((e)=>e.userId !== action.payload)
    case "Update":
      return state.map((e)=>e.userId === action.payload.id ? {...e , userName:action.payload.userName }:e)
      
  
    default:
      return state
  }

}


const App = () => {
  const [userData , setUserData ]= useState("")
  const[edit , setEdit] = useState(null)
  const[state , dispatch] = useReducer(todoReducer , [])

  const handlechange=(e)=>{
     setUserData(e.target.value)
  }
  const handleClick =()=>{
    const newData ={
      userId:Date.now(),
      userName:userData
    }

    dispatch({
      type:"Add",
      payload:newData
    })
    setUserData("")

  }

  const handleEdit = (user)=>{
   setUserData(user.userName)  
   setEdit(user.userId)
  
  }

  const handleRemove = (id)=>{
      dispatch({
        type:"remove",
        payload:id
      })
  }

  const handleUpadte = (id)=>{
    dispatch({
      type:"Update",
      payload:{
        id:edit,
        userName:userData
      }
    })
    
  } 
  return (
  <>
    <input type="text" value={userData} onChange={handlechange} placeholder="Enter the Todo" />
    {edit === null ? <button onClick={handleClick}>Add</button> : <button onClick={handleUpadte}>Update</button>}
    {
      state.map((todo)=>(
        <div key={todo.userId}>
            
            <p>{todo.userName}</p>
            <button onClick={()=>handleEdit(todo)}>Edit</button>||
            <button onClick={()=>handleRemove(todo.userId)}>Delete</button>
             
        </div>
      ))
    }
  
  </>
  )
}

export default App