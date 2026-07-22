import React, { useEffect, useMemo, useState } from 'react'

const App = () => {
  const [product , setProducts]= useState([])
  const [sortData , setSortData] = useState("")

  const getdata = async()=>{
    const response = await fetch("https://dummyjson.com/products")
    const data = await response.json()
    setProducts(data.products)
  }
  useEffect(()=>{
   getdata()
  },[])
  



const  sortProductsFn = (prd , sort)=>{
  const sortdata = [...prd] 

     if(sort ===  "lowtohigh"){
      return sortdata.sort((a,b)=>a.price - b.price )
     }
     else if(sort === "hightolow")
     {
      return sortdata.sort((a,b)=>b.price - a.price )
     }
     return sortdata
   
}
const  sortProducts =useMemo(()=>{
    return sortProductsFn(product ,sortData)
},[product ,sortData])
     
  

   
 



  return (
  <>
  <select value={sortData} onChange={(e)=>setSortData(e.target.value)}>
     <option value="">All</option>
     <option value="lowtohigh">Low</option>
     <option value="hightolow">High</option>

  </select>
  {
    sortProducts.map((item)=>(
         <div key={item.id}>
          <h1 > {item.title}</h1>
          <p>{item.category}</p>
          <p>{item.price}</p>
         </div>
    ))
  }
  </>
  )
}

export default App