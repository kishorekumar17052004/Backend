const MovieDetails = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-8 flex items-center justify-center">
      <div className="bg-white rounded shadow p-6 max-w-md w-full border-l-4 border-orange-600">
        <h2 className="text-2xl font-bold text-orange-600 mb-4">🎬 Movie Details</h2>
        <div className="space-y-3">
          <div><p className="text-gray-600 font-semibold text-sm">Movie Name</p><p className="text-gray-800 font-semibold">Vikram</p></div>
          <div><p className="text-gray-600 font-semibold text-sm">Hero Name</p><p className="text-gray-800">Kamal Haasan</p></div>
          <div><p className="text-gray-600 font-semibold text-sm">Director Name</p><p className="text-gray-800">Lokesh Kanagaraj</p></div>
          <div><p className="text-gray-600 font-semibold text-sm">Release Year</p><p className="text-orange-600 font-bold">2022</p></div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;