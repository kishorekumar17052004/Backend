import { useState } from "react"
import { useNavigate } from "react-router-dom"

const Login = () => {
const navigate = useNavigate()
const [loginInput , setLoginInput]= useState({UserEmail:"",UserPassword:""})

const handleLoginInput = (e)=>{
   const {name,value} = e.target;
   setLoginInput({...loginInput,[name]:value}) 
}

const handlesubmit = (e)=>{
  e.preventDefault()
  const RegisterData = JSON.parse(localStorage.getItem("userdata") || 'null')

  if (!RegisterData || (Array.isArray(RegisterData) && RegisterData.length === 0)) {
    alert("No registered user found. Please register first.")
    return
  }

  // If userdata is an array (multiple users), find matching user
  const user = Array.isArray(RegisterData)
    ? RegisterData.find(
        (u) => u.UserEmail === loginInput.UserEmail && u.UserPassword === loginInput.UserPassword
      )
    : RegisterData.UserEmail === loginInput.UserEmail && RegisterData.UserPassword === loginInput.UserPassword

  if (user) {
    navigate("/dashboard")
  } else {
    alert("Enter the correct email or password")
  }

  setLoginInput({UserEmail:"",UserPassword:""})
}
  return (
    <>
    <div>Login</div>
    <form  onSubmit={handlesubmit}>
       <input type="email" name="UserEmail" placeholder="Enter the UserEmail" value={loginInput.UserEmail} onChange={handleLoginInput} />
        <input type="password" name="UserPassword" placeholder="Enter the UserPassword" value={loginInput.UserPassword} onChange={handleLoginInput} />
         <input type="submit" value={"Login"} />
    </form>
    
    </>
  )
}

export default Login