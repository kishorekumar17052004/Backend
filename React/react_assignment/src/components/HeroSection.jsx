const HeroSection = () => {
  return (
    <section className="bg-blue-600 text-white py-16 px-4 flex-1 flex items-center justify-center">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Welcome to Our Website</h1>
        <p className="text-lg text-gray-100 mb-6">Build Modern Applications Using React.js</p>
        <button className="bg-white text-blue-600 px-6 py-2 rounded font-semibold hover:bg-gray-100">Get Started</button>
      </div>
    </section>
  );
};

export default HeroSection;