

const UserCard = ({ user }) => {
     const { name, email, phone, city } = user;
  return (
    <>
     <div className="bg-white p-4 rounded shadow">
      <h2 className="text-xl font-bold">User Information</h2>
      <p>Name: {name}</p>
      <p>Email: {email}</p>
      <p>Phone: {phone}</p>
      <p>City: {city}</p>
    </div>
    </>
  )
}

export default UserCard