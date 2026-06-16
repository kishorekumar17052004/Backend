

const EmployeeCard = ({ employeeName, employeeId, department, salary, experience }) => {
  return (
    <>
      <div className="bg-white p-4 rounded shadow">
      <h2 className="text-xl font-bold">Employee Card</h2>
      <p>Name: {employeeName}</p>
      <p>ID: {employeeId}</p>
      <p>Department: {department}</p>
      <p>Salary: ₹{salary}</p>
      <p>Experience: {experience}</p>
    </div>
    </>
  )
}

export default EmployeeCard