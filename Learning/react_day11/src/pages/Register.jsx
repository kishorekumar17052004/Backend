import { useContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import RegisterContext from "../components/AuthRegister"
const Register = () => {
    const { registerInputData, handlechange, handlesubmit } = useContext(RegisterContext)
    console.log(registerInputData)

    return (
        <>
            <div>
                <form onSubmit={handlesubmit}>
                    <input type="text " onChange={handlechange} name="userName" value={registerInputData.userName} placeholder="Enter the Name" required />
                    <input type="email" onChange={handlechange} name="userEmail" value={registerInputData.userEmail} placeholder="Enter the E-mail" required />
                    <input type="password" onChange={handlechange} name="userPassword" value={registerInputData.userPassword} placeholder="Enter the Password" required />
                    <input type="submit" />

                </form>
            </div>
            <div>
              
            </div>

        </>
    )
}

export default Register
