import { Link } from "react-router-dom";
import { useState } from "react";
import loginValidate from "../utils/loginValidate";
import { useNavigate } from "react-router-dom";

function Login() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const Navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = loginValidate(form);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      // Object.keys(validationErrors)
      //Converts the object keys into an array. 
      alert("Form Submitted ");
      Navigate("/home");
    }
  };


  return (
    <div className="min-h-screen flex  border border items-center justify-center bg-gray-100">
      <form onSubmit={handleSubmit} className="bg-gray p-8 rounded-lg shadow-md w-full max-w-md">

        <h2 className="text-2xl font-bold text-center mb-6">Login</h2>

        {/* Email */}
        <div className="mb-4">
          <label className="block text-gray-700 mb-1">Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            name="email"
            value={form.email}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded"

          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email}</p>
          )}
        </div>

        {/* Password */}
        <div className="mb-6">
          <label className="block text-gray-700 mb-1">Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            name="password"
            value={form.password}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded"

          />
          {errors.password && (
            <p className="text-red-500 text-sm">{errors.password}</p>
          )}
        </div>

        <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded">
          <Link to="/home"></Link>
          Login
        </button>

        {/* Register Link */}
        <p className="text-center text-sm mt-4">
          Don’t have an account?{" "}
          <Link to="/signup" className="text-blue-600 hover:underline">
            Register here
          </Link>
        </p>
      </form>
    </div>
  );
}

export default Login;
