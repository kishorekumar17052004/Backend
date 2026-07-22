import { useState } from "react"
import { useNavigate } from "react-router-dom"


const Login = () => {


  // const [currUser, setCurrentUser] = useState(
  //   JSON.parse(localStorage.getItem("currentUser")) || null
  // )
  const [loginData, setLoginData] = useState({ userEmail: "", userPassword: "" })
  const handleinput = (e) => {
    const { name, value } = e.target
    setLoginData({ ...loginData, [name]: value })
  }

  const navigate = useNavigate()
  const getdata = JSON.parse(localStorage.getItem("userdata")) || [];
  console.log(getdata)


  const handlesubmit = (e) => {
    e.preventDefault()
    const user = getdata.find((e) => e.userEmail === loginData.userEmail && e.userPassword === loginData.userPassword)
    if (user) {
      localStorage.setItem("currentuser", JSON.stringify(user));
      setLoginData({ userEmail: "", userPassword: "" })
      navigate("/dashboard")
      return
    }
    else {
      alert(" check Email or password ")
      console.log(user)
    }
  }




  return (
    <>

      <div>
        <form onSubmit={handlesubmit}>

          <input type="email" onChange={handleinput} name="userEmail" value={loginData.userEmail} placeholder="Enter the E-mail" required />
          <input type="password" onChange={handleinput} name="userPassword" value={loginData.userPassword} placeholder="Enter the Password" required />
          <input type="submit" />
        </form>
      </div>

    </>
  )
}

export default Login