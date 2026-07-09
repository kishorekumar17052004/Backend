import { useState } from "react"


const App = () => {
  const [ task , setTask] = useState("")
  const [todo , setTodo] = useState([])
  const [edit , setEdit ] = useState(null)

  const handleinput = (e)=>{
    setTask(e.target.value)
  }

  const handleadd = (e)=>{
      e.preventDefault()
      if (!task.trim()) return

      if(edit !== null ){
        setTodo(todo.map((item , i )=>i === edit ? task : item ))
        setEdit(null)
      }
      else{
      setTodo((prev)=>[...prev,task])
      }
      setTask("")
  }

  const handleremove = (index)=>{
      setTodo(todo.filter((_,i)=>i !== index))
  }

  const handleedit =  (index)=>{
            setTask(todo[index])
            setEdit(index)
  }
  
  return (
    <>
      <div>
        <form onSubmit={handleadd}>
             <input type="text" value={task} onChange={handleinput} placeholder="Add Your Todo LIst" />
             <button type="submit">{edit !== null ? "Upadte" : "Add"}</button>

        </form>
      </div>
      <div>
       {
       todo.map((e,i)=>{
          return (
          <div key={i+1}>
           <h1>{e}</h1>
        
       <button onClick={()=>handleremove(i)}>Delete</button>
       <button  onClick={()=>handleedit(i)}>Edit</button>

        </div>
          )
       })
       
       }
       
      </div>
    
    </>
  )
}

export default App
