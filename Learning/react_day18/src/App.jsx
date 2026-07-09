import { useEffect, useState } from "react"


const App = () => {
  const [product , setProduct] = useState([])
  const [category , setCategory] = useState([])
  const [unicat ,  setUniCat] = useState("All Products")
  const [sort ,  SetSort] = useState("")

     const fetchData = async()=>{
         try{
            const response = await fetch("https://dummyjson.com/products")
            const data = await response.json()
           setProduct(data.products)

         const unidata = data.products.map((e)=>e.category)
         const uniCategorey = ["All Products",...new Set(unidata)]
         console.log(uniCategorey)
          setCategory(uniCategorey)
         }
         catch(error){

          return error

         }
         
     }
useEffect(()=>{
  fetchData()
},[])



let allProducts = [...product]

  if(unicat){
    allProducts =   unicat === "All Products" ? product : product.filter((e)=>(e.category === unicat))
  
  }







  return (
    <>
   <select onChange={(e)=>setUniCat(e.target.value)} value={unicat}> 
     
      {
        category.map((e,i)=>(
          <option value={e} key={i+1}>{e}</option>
        ))
      }
  
   </select>

   <select onChange={(e)=>SetSort(e.target.value)}>
    <option value="">Sort Products</option>
    <option value="asc"></option>
   </select>


   {
    allProducts.map((e)=>(
       <div key={e.id}>
        <p>{e.title}</p>
        <p>{e.category}</p>
       </div>
    ))
   }
     


  
  </>
  )
}

export default App