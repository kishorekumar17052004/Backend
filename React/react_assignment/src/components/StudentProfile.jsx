const StudentProfile = ()=> {
  return (
    <div className="min-h-screen bg-gray-100 p-8 flex items-center justify-center">
      <div className="bg-white rounded shadow p-6 max-w-md w-full border-l-4 border-blue-600">
        <h2 className="text-2xl font-bold text-blue-600 mb-4">Student Profile</h2>
        <div className="space-y-3">
          <div><p className="text-gray-600 font-semibold text-sm">Name</p><p className="text-gray-800">Kishore Kumar</p></div>
          <div><p className="text-gray-600 font-semibold text-sm">Course</p><p className="text-gray-800">Full Stack Development</p></div>
          <div><p className="text-gray-600 font-semibold text-sm">City</p><p className="text-gray-800">Chennai</p></div>
          <div><p className="text-gray-600 font-semibold text-sm">Institute</p><p className="text-gray-800">SLA Institute</p></div>
        </div>
      </div>
    </div>
  );
}

export default StudentProfile;