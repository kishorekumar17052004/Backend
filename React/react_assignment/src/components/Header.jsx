const Header = () => {
  return (
    <header className="bg-gray-800 text-white shadow p-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-3 md:mb-0">
            <h2 className="text-2xl font-bold">🚀 TechLogo</h2>
            <h3 className="text-sm text-gray-400">Tech Solutions Pvt Ltd</h3>
          </div>
          <nav className="flex gap-6 text-sm">
            <a href="#" className="hover:text-blue-400">Home</a>
            <a href="#" className="hover:text-blue-400">About</a>
            <a href="#" className="hover:text-blue-400">Services</a>
            <a href="#" className="hover:text-blue-400">Contact</a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;