import { useContext } from "react"
import TodoContext from "../context/TodoListContext";

const TodoList = () => {
    const {allTask,showTask,handletask,handleSubmit} = useContext(TodoContext);
  return (
    <>
     <form >
        <input type="text " name="taskTitle" value={allTask.taskTitle} onChange={handletask} required/>
        <input type="text " name="taskDescription" value={allTask.taskDescription} onChange={handletask} required/>
        <button onClick={handleSubmit}>Add</button>
       
     </form>

     <div>
        { showTask.map((task ,i)=>(
            <div key={i+1}>
                <p>{task.taskTitle}</p>
                <p>{task.taskDescription}</p>
            </div>
        ))
           
        }
     </div>
    
    </>
  )
}

export default TodoList