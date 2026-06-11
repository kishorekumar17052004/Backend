const EmployeeCard = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-8 flex items-center justify-center">
      <div className="bg-white rounded shadow p-6 max-w-md w-full border-l-4 border-green-600">
        <h2 className="text-2xl font-bold text-green-600 mb-4">Employee Card</h2>
        <div className="space-y-3">
          <div><p className="text-gray-600 font-semibold text-sm">Employee Name</p><p className="text-gray-800">Arun</p></div>
          <div><p className="text-gray-600 font-semibold text-sm">Employee ID</p><p className="text-gray-800">EMP101</p></div>
          <div><p className="text-gray-600 font-semibold text-sm">Department</p><p className="text-gray-800">IT</p></div>
          <div><p className="text-gray-600 font-semibold text-sm">Salary</p><p className="text-lg text-green-600 font-bold">₹30,000</p></div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeCard;