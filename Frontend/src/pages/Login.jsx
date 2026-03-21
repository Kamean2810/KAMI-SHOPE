import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // for redirect
import { loginUser } from "../api/auth"; // your frontend API function

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    const credentials = { email, password };

    try {
      const data = await loginUser(credentials); // call backend
      localStorage.setItem("token", data.token); // save JWT token
      setMessage("Login successful!");

      // Redirect to home after 1 second
      setTimeout(() => {
        navigate("/"); // change "/" to your home route
      }, 1000);

    } catch (err) {
      setMessage(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">

      <div className="bg-white p-10 rounded-xl shadow-md w-full max-w-md">
        <h2 className="text-3xl font-bold text-center mb-6">Login</h2>

        {message && (
          <p className="text-center mb-4 text-red-500 text-lg">{message}</p>
        )}

        <form onSubmit={handleLogin}>

          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 mb-2">Password</label>
            <input
              type="password"
              placeholder="Enter password"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Login
          </button>

          <div className="text-center mt-4">
            <button
              type="button"
              className="text-blue-500 hover:underline"
            >
              Forgot Password?
            </button>
          </div>

        </form>
      </div>

    </div>
  );
};

export default Login;