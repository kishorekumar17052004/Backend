import { Route, Routes } from "react-router-dom";
import HomeLayout from "../layouts/HomeLayout";
import Dashboard from "../pages/Dashboard";
import Home from "../pages/Home";
import Topics from "../pages/Topics";
import Login from "../pages/Login";

const Approutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />

      <Route element={<HomeLayout />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/home" element={<Home />} />
        <Route path="/topics" element={<Topics />} />
      </Route>
    </Routes>
  );
};

export default Approutes;