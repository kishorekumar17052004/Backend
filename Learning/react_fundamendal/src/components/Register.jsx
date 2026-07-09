import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

const Register = () => {
  const navigate = useNavigate()
  const [registerInput , setRegisterInput]= useState({UserName:"",UserEmail:"",UserPassword:""})
  const [user , setUser] = useState(()=>{
    const getdata = JSON.parse(localStorage.getItem("userdata"))
    try{
      return getdata ? getdata : []

    }catch(err){
      console.log("Error" , err)
    }
  })
  useEffect(()=>(
     localStorage.setItem("userdata" , JSON.stringify(user))
  ),[user])


  const handleRegisterInput = (e)=>{
    const {name,value} = e.target;
    setRegisterInput({...registerInput ,[name]:value})
  } 
  const handleSubmit = (e)=>{
    e.preventDefault()
  
    setUser([...user, registerInput]);
  
    alert("sucessfully Added")
  setRegisterInput({UserName:"",UserEmail:"",UserPassword:""})
  navigate("/login")
    
  }


  return (
    <>
      <div>Register</div>
      <form onSubmit={handleSubmit} >
        <input type="text" name="UserName" placeholder="Enter the UserName" value={registerInput.UserName} onChange={handleRegisterInput} />
        <input type="email" name="UserEmail" placeholder="Enter the UserEmail" value={registerInput.UserEmail} onChange={handleRegisterInput} />
        <input type="password" name="UserPassword" placeholder="Enter the UserPassword" value={registerInput.UserPassword} onChange={handleRegisterInput} />
         <input type="submit" value={"Register"} />
      </form>
      
    
    </>
  )
}

export default Register