import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // for redirect
import { registerUser } from "../api/auth"; // your frontend API function

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();

    // Check passwords
    if (password !== confirmPassword) {
      setMessage("Passwords do not match!");
      return;
    }

    const userData = { name, email, password };

    try {
      const data = await registerUser(userData); // call backend
      setMessage(data.message);

      // Redirect to home page after 1 second
      setTimeout(() => {
        navigate("/"); // change "/" to your home route
      }, 1000);

    } catch (err) {
      setMessage(err.response?.data?.message || "Registration failed");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
     <div className="bg-white p-12 rounded-10xl h-[800px] w-[800px]">
        <h2 className="text-3xl font-bold text-center mb-6">Create Account</h2>

        {message && (
          <p className="text-center mb-4 text-red-500 text-lg">{message}</p>
        )}

        <form onSubmit={handleRegister}>

          <div className="mb-4">
            <label className="block text-gray-700 text-3xl font-bold mb-2">Full Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full px-4 py-2 text-xl border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-3xl font-bold mb-2">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 text-xl border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-3xl font-bold mb-2">Password</label>
            <input
              type="password"
              placeholder="Enter password"
              className="w-full px-4 py-2 text-xl border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 text-3xl font-bold mb-2">Confirm Password</label>
            <input
              type="password"
              placeholder="Confirm password"
              className="w-full px-4 py-2 border text-xl rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-xl text-white py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Register
          </button>

        </form>
      </div>
    </div>
  );
};

export default Register;