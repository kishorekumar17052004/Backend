import { useState } from "react"
import ShowData from "./ShowData"



const Register = () => {
    const [userData,setUserData]= useState({UserName:"",UserAge:"",UserCity:""})
    const [showData, setShowData] = useState([])
    const [editIndex , setEditIndex]=useState(null)
    const handleclick = (e)=>{
      setUserData({...userData,[e.target.name]:e.target.value})
      
    }  
    const  handlesubmit = (e)=>{

      e.preventDefault()
      if(editIndex === null){
setShowData([...showData,userData])

      }
      else{
        const update = [...showData]
        update[editIndex]=userData
        setShowData(update)
        setEditIndex(null)
      }
      
      
  setUserData({UserName:"",UserAge:"",UserCity:""})
    }
    const handledelete = (id)=>{
       setShowData(showData.filter((_,i)=>i!==id))
    }
 const handleEdit = (index) => {
    setUserData(showData[index]);
    setEditIndex(index);
  };

  return (
    <>
    <div>
      <form onSubmit={handlesubmit}>
        <label>Enter the Name</label>
        <input type="text" onChange={handleclick}name={"UserName"} value={userData.UserName} />
        <label>Enter the Age</label>
        <input type="text" onChange={handleclick}name={"UserAge"} value={userData.UserAge}/>
        <label>Enter the City</label>
        <input type="text" onChange={handleclick}name={"UserCity"} value={userData.UserCity}/>
        <input type="submit"/>


      </form>
      <ShowData name={showData} remove={handledelete}  edit={handleEdit}/>



    </div>
    
    
    </>
  )
}

export default Register