

const Skills = ({ skills }) => {
  return (
  <>
  <div className="bg-white p-4 rounded shadow">
      <h2 className="text-xl font-bold">User Skills</h2>

      <ul className="list-disc pl-5">
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </div>
  
  </>
  )
}

export default Skills