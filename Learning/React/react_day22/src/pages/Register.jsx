import { useEffect, useState } from "react"


const Register = () => {
    const [registerInput ,setRegisterInput] = useState({userName:"",userEmail:"",userPassword:""})
    const [registerData ,  setRegisterData ] = useState(()=>{
        const getRegisterData = JSON.parse(localStorage.getItem("userdata"))
        try{
            return getRegisterData ? getRegisterData : []
        }catch(err){
             console.log(err)
        }
    })
     
    useEffect(()=>(
     localStorage.setItem("usedata" , JSON.stringify(registerData))
    ),[registerData])
   
    const handleRegisterInput = (e)=>{
          const {name , value} = e.target
         setRegisterInput({...}) 
    }



  return (
   <>
    <div>Register</div>
    <form onSubmit={handlesubmit}>
        <input type="text" onChange={handleRegisterInput} value={registerInput.userName} placeholder="Enter the name " name="userName" required />
        <input type="email" onChange={handleRegisterInput} value={registerInput.userEmail} placeholder="Enter the Email" name="userEmail" required />
        <input type="password" onChange={handleRegisterInput} value={registerInput.userPassword} placeholder="Enater the Password" name="userPassword" required />
        <input type="submit"value={"Register"}  />
    </form>
   
   </>
  )
}

export default Register