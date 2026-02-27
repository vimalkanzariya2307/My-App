import { Routes, Route } from "react-router-dom";
import Home from "../components/Home";
import Login from "../components/login";
import Signup from "../components/signup";


function AppRoutes() {
  return (
    
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/home" element={<Home />} />
    </Routes>
  );
} 

export default AppRoutes; 
