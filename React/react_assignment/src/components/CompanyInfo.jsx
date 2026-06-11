const CompanyInfo = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-8 flex items-center justify-center">
      <div className="bg-white rounded shadow p-6 max-w-md w-full border-l-4 border-red-600">
        <h2 className="text-2xl font-bold text-red-600 mb-4">🏢 Company Info</h2>
        <div className="space-y-3">
          <div><p className="text-gray-600 font-semibold text-sm">Company Name</p><p className="text-gray-800 font-semibold">Tech Solutions</p></div>
          <div><p className="text-gray-600 font-semibold text-sm">Location</p><p className="text-gray-800">Chennai</p></div>
          <div><p className="text-gray-600 font-semibold text-sm">Founder</p><p className="text-gray-800">Raj Kumar</p></div>
          <div><p className="text-gray-600 font-semibold text-sm">Established Year</p><p className="text-red-600 font-bold">2015</p></div>
        </div>
      </div>
    </div>
  );
};

export default CompanyInfo;