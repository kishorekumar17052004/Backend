const ProductCard = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-8 flex items-center justify-center">
      <div className="bg-white rounded shadow p-6 max-w-md w-full border-l-4 border-purple-600">
        <h2 className="text-2xl font-bold text-purple-600 mb-4">Product Card</h2>
        <div className="space-y-3">
          <div><p className="text-gray-600 font-semibold text-sm">Product Name</p><p className="text-gray-800">Laptop</p></div>
          <div><p className="text-gray-600 font-semibold text-sm">Price</p><p className="text-xl text-purple-600 font-bold">₹55,000</p></div>
          <div><p className="text-gray-600 font-semibold text-sm">Category</p><p className="text-gray-800">Electronics</p></div>
          <div><p className="text-gray-600 font-semibold text-sm">Description</p><p className="text-gray-800">High Performance Laptop</p></div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;