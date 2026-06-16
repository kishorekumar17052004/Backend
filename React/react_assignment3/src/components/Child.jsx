import GrandChild from "./GrandChild"


const Child = ({ name, course }) => {
  return (
   <>
   
   <GrandChild name={name} course={course} />
   
   </>
  )
}

export default Child