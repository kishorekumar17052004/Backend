import { createContext, useEffect, useState } from "react";

const RegisterContext = createContext()
export const RegisterProvider = ({ children }) => {
    const [registerInputData, setRegisterInputData] = useState({ userName: "", userEmail: "", UserPassword: "" })
    const [registerUserData, setRegisterUserData] = useState(() => {

        const getregisterdata = JSON.parse(localStorage.getItem("registerdata"))
        try {
            return getregisterdata ? getregisterdata : []
        }
        catch {
            return []
        }
    })

    const handlechange = (e) => {
        const { name, value } = e.target;
        setRegisterInputData({ ...registerInputData, [name]: value })
    }
    const handlesubmit = (e) => {
        e.preventDefault();
        setRegisterUserData((prev) => [...prev, registerInputData]);
       
    }
    useEffect(() => {
        localStorage.setItem("registerdata", JSON.stringify(registerUserData))
    }, [registerUserData])
    return (
        <RegisterContext.Provider value={   { registerInputData, handlechange, handlesubmit } }>
            {children}
        </RegisterContext.Provider>
    )
}
export default RegisterContext