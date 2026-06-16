

const GrandChild = ({name,course}) => {
  return (
 <>
 <div className="bg-white p-4 rounded shadow">
      <h2 className="text-xl font-bold">Props Drilling Example</h2>
      <p>Name: {name}</p>
      <p>Course: {course}</p>
    </div>
 
 
 </>
  )
}

export default GrandChild