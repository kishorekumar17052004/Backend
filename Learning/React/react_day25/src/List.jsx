import { useEffect, useState } from "react"

const List = ({getNumber}) => {
    const [item , setItem] = useState([])
  useEffect(()=>{
    console.log("pros")
    setItem(getNumber())
  },[getNumber])
  return (
    <>
    {
        item.map((e,i)=>(
            <div key={e+1}>
               <h1>{e}</h1>
            </div>
        ))
    }
    
    </>
  )
}

export default List