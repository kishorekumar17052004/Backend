import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import StudentProfile from "./components/StudentProfile";
import EmployeeCard from "./components/EmployeeCard";
import ProductCard from "./components/ProductCard";
import MovieDetails from "./components/MovieDetails";
import CompanyInfo from "./components/CompanyInfo";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";

const App = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <Routes>
        <Route path="/" element={<div className="flex-1 bg-gray-100 flex items-center justify-center p-4"><h2 className="text-3xl font-bold text-gray-800 text-center">🚀 Select Any Assignment</h2></div>} />

        <Route path="/task1" element={<StudentProfile />} />
        <Route path="/task2" element={<EmployeeCard />} />
        <Route path="/task3" element={<ProductCard />} />
        <Route path="/task4" element={<MovieDetails />} />
        <Route path="/task5" element={<CompanyInfo />} />

        <Route path="/task6" element={<Header />} />

        <Route
          path="/task7"
          element={
            <>
              <Header />
              <MainContent />
              <Footer />
            </>
          }
        />

        <Route
          path="/task8"
          element={
            <>
              <Header />
              <HeroSection />
              <Footer />
            </>
          }
        />
      </Routes>
    </div>
  );
};

export default App;