

const Student = ({ name, age, course, city }) => {
  return (
    <>
      <div className="bg-white p-4 rounded shadow">
      <h2 className="text-xl font-bold">Student Profile</h2>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
      <p>Course: {course}</p>
      <p>City: {city}</p>
    </div>
    
    </>
  )
}

export default Student