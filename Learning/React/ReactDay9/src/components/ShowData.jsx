
const ShowData = ({name , remove , edit}) => {
  return (
    <>
   

        {name.map((e,i)=>(
           <div key={i+1}>
          <h1>{e.UserName}</h1>
          <p>{e.UserAge}</p>
          <p>{e.UserCity}</p>
        <button onClick={()=> edit(i)}>Edit</button>
        <button onClick={()=> remove(i)}>Delete</button>

           </div>
        ))}
      


   
    
    </>
  )
}

export default ShowData