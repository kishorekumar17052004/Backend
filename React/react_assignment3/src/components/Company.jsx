import Employee from "./Employee";


const Company = ({ companyName, employeeName, employeeRole, employeeSalary }) => {
  return (
    <>
     <Employee
      companyName={companyName}
      employeeName={employeeName}
      employeeRole={employeeRole}
      employeeSalary={employeeSalary}
    />
    
    </>
  )
}

export default Company