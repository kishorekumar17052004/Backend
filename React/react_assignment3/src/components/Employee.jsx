

const Employee = ({ companyName, employeeName, employeeRole, employeeSalary }) => {
  return (
  <>
  
  <div className="bg-white p-4 rounded shadow">
      <h2 className="text-xl font-bold">Company Dashboard</h2>
      <p>Company Name: {companyName}</p>
      <p>Employee Name: {employeeName}</p>
      <p>Role: {employeeRole}</p>
      <p>Salary: ₹{employeeSalary}</p>
    </div>
  
  </>
  )
}

export default Employee