

const CourseCard = ({ courseName, duration, fees }) => {
  return (
    <>
    <div className="bg-white p-4 rounded shadow">
      <h2 className="text-xl font-bold">{courseName}</h2>
      <p>Duration: {duration}</p>
      <p>Fees: {fees}</p>
    </div>
      
    </> 
  )
}

export default CourseCard