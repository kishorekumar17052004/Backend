import { useState } from "react"

const UseState = () => {
const [input , setInput] = useState({name:"kishore",age:{
    age:22
}})


  return (
   <>
{  <div>
   <h1>{input.name}</h1>
   <h1>{input.age.age}</h1>
   </div>
}
   </>
  )
}

export default UseState