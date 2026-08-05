import { useState } from "react"
import { createData } from "../api/axios";


const UserForm = () => {
 const [formData , setFormData] = useState({userName:"",userEmail:"",userAge:""})

 const handleChange = (e)=>{
     const {name, value} = e.target;

     setFormData({...formData,[name]:value})
     console.log(formData)
 }

 const handleAdd =async(e)=>{
  e.preventDefault()
      try {
         const createUser = await createData(formData)
      } catch (error) {
        console.log(error.data.msg)
      }
 }

  return (
   <>
   <form>
    <input type="text" name="userName" value={formData.userName} onChange={handleChange} placeholder="Enter the Name" />
    <input type="email" name="userEmail" value={formData.userEmail} onChange={handleChange} placeholder="Enter the Email" />
    <input type="number" name="userAge" value={formData.userAge} onChange={handleChange} placeholder="Enter the Age" />
    <button onChange={handleAdd} >Add</button>

   </form>
   
   </>
  )
}

export default UserForm