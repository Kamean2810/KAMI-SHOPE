import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../api/auth";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    const credentials = { email, password };

    try {
      const data = await loginUser(credentials);
      localStorage.setItem("token", data.token);
      setMessage("Login successful!");

      setTimeout(() => {
        navigate("/");
      }, 1000);

    } catch (err) {
      setMessage(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      {/* Bigger login box */}
      <div className="bg-white p-12 rounded-10xl h-[800px] w-[700px]">
        <h2 className="text-6xl font-bold text-center mb-6">Login</h2>

        {message && (
          <p className="text-center mb-4 text-red-500 text-3xl">{message}</p>
        )}

        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label className="block text-gray-700 text-2xl font-semibold mb-2">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-5 py-3 border rounded-lg text-xl focus:outline-none focus:ring-2 focus:ring-blue-400 text-lg"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 text-2xl font-bold mb-2">Password</label>
            <input
              type="password"
              placeholder="Enter password"
              className="w-full px-5 py-3 text-xl border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 text-lg"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition text-lg"
          >
            Login
          </button>

          <div className="text-center mt-4">
            <button
              type="button"
              className="text-blue-500 hover:underline text-lg"
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