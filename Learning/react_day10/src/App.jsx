import { useEffect, useState } from "react"

const App = () => {
  const [userData, setUserData] = useState({ userName: "", userAge: "", userEmail: "" })
  const [showData, setShowData] = useState(() => {
    const savedData = JSON.parse(localStorage.getItem("users"))

    try {
      return savedData ? savedData : []
    } catch {
      return []
    }
  })

  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(showData))
  }, [showData])

  const handlechange = (e) => {

    const { name, value } = e.target
    setUserData({ ...userData, [name]: value })

  }

  const handleclick = (e) => {

    

    e.preventDefault()
    setShowData([...showData, userData])
    setUserData({ userName: "", userAge: "", userEmail: "" })
    console.log(userData)


  }


  return (
    <>
      <div>

        <form onSubmit={handleclick}>
          <input type="text" onChange={handlechange} name="userName" value={userData.userName} placeholder="Enter the Name" />
          <input type="text" onChange={handlechange} name="userAge" value={userData.userAge} placeholder="Enter the Age" />
          <input type="text" onChange={handlechange} name="userEmail" value={userData.userEmail} placeholder="Enter the E-mail" />
          <input type="submit" />
        </form>

        <div>
          {showData.map((e, i) => (
            <div key={i + 1}>
              <h1>{e.userName}</h1>
              <p>{e.userAge}</p>
              <p>{e.userEmail}</p>
            </div>
          ))}
        </div>

      </div>

    </>
  )
}

export default App
