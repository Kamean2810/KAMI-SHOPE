import axios from "axios";

const API_URL = "http://localhost:5000/api/auth"; // backend base URL

// Register
export const registerUser = async (userData) => {
  const res = await axios.post(`${API_URL}/register`, userData);
  return res.data;
};

// Login
export const loginUser = async (credentials) => {
  const res = await axios.post(`${API_URL}/login`, credentials);
  return res.data;
};

// Optional: Get current user (protected route)
export const getMe = async (token) => {
  const res = await axios.get(`${API_URL}/me`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.data;
};