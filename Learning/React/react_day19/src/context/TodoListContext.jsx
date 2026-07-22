import { createContext, useState } from "react";

const TodoContext = createContext()
export const TodoProvider = ({children})=>{
  const [allTask, setAllTask] = useState({taskTitle:"",taskDescription:""})
  const [showTask , setShowTask]= useState([])

  const handletask = (e)=>{
    const {name , value}= e.target;
    setAllTask({...allTask,[name]:value})
  }
  const handleSubmit = (e)=>{
      e.preventDefault()
      setShowTask((prev)=>[...prev,allTask])
      setAllTask({taskTitle:"",taskDescription:""})
  }

    return(
        <TodoContext.Provider value={{allTask,showTask,handletask,handleSubmit}}>
            {children}
        </TodoContext.Provider>
    )
}
export default TodoContext