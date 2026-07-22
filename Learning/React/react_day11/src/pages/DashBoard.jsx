
const DashBoard = () => {
  const currentUser= JSON.parse(localStorage.getItem("currentuser"))
  console.log(currentUser)
  return (
    <div>{currentUser?.userName}</div>
  )
}

export default DashBoard