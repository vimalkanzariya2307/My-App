  import { Link } from "react-router-dom";
  import { useState } from "react";
  import signupValidate from "../utils/signupValidate";
  import { useNavigate } from "react-router-dom";

  function Signup() {

    const [form, setForm] = useState({
      name: "",
      email: "",
      phone: "",
      password: "",
    });
 
    const navigate = useNavigate();

  
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
      setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
      e.preventDefault();
      const validationErrors = signupValidate(form);
      setErrors(validationErrors);
      if (Object.keys(validationErrors).length === 0) { 
        // Object.keys(validationErrors)
        //Converts the object keys into an array. 
        alert("Form Submitted ");
        navigate("/login");
      }
    };

    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <form onSubmit = {handleSubmit} className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
          <h2 className="text-2xl font-bold text-center mb-6">Create Account</h2>

          <div className="mb-4">
            <label className="block text-gray-700 mb-1">Full Name</label>
            <input
              type="text"
              placeholder="Enter your full name"
              name="name"
              value={form.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.name && (
              <p className="text-red-500 text-sm">{errors.name}</p>
            )} 
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 mb-1">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={form.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email}</p>
            )}
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 mb-1">phone Number</label>
            <input
              type="tel"
              name="phone"
              placeholder="Enter your phone number"
              value={form.phone}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.phone && (
              <p className="text-red-500 text-sm">{errors.phone}</p>
            )}
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 mb-1">Password</label>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              value={form.password}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.password && (
              <p className="text-red-500 text-sm">{errors.password}</p>
            )}
          </div>

          <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition">
            Signup
          </button>

          <p className="text-center text-sm text-gray-600 mt-4">
            Already have an account?{" "}
            <Link to="/login" className="text-blue-600 hover:underline">
              Login here
            </Link>
          </p>
        </form>
      </div>
    );
  }

  export default Signup;