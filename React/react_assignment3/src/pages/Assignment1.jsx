import Student from "../components/Student";
import EmployeeCard from "../components/EmployeeCard";
import Product from "../components/Product";
import Skills from "../components/Skills";
import UserCard from "../components/UserCard";
import Company from "../components/Company";
import Parent from "../components/Parent";
import CourseCard from "../components/CourseCard";

const Assignment1 = () => {
   const skills = ["HTML", "CSS", "JavaScript", "React", "Node.js"];

  const user = {
    name: "Kishore",
    email: "kishore@gmail.com",
    phone: "9876543210",
    city: "Chennai",
  };

  return (
    <>
    
   
 
    <div className="p-6 space-y-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold">Assignment 1 - Props</h1>

      <Student name="Kishore" age={22} course="MERN Stack" city="Chennai" />

      <EmployeeCard
        employeeName="Ravi"
        employeeId="EMP101"
        department="IT"
        salary={30000}
        experience="2 Years"
      />

      <Product
        productName="Laptop"
        productPrice={55000}
        productCategory="Electronics"
        productBrand="HP"
      />

      <Skills skills={skills} />

      <UserCard user={user} />

      <Company
        companyName="Tech Solutions"
        employeeName="Arun"
        employeeRole="Frontend Developer"
        employeeSalary={40000}
      />

      <Parent name="Sudhan" course="MERN" />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <CourseCard courseName="MERN Stack" duration="6 Months" fees="₹30,000" />
        <CourseCard courseName="Python Full Stack" duration="5 Months" fees="₹28,000" />
        <CourseCard courseName="Java Full Stack" duration="6 Months" fees="₹35,000" />
      </div>
    </div>
    
    
    
    </>
  )
}

export default Assignment1