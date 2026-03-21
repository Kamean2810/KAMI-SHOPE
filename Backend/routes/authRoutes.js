import express from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/User.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

// -------------------- REGISTER --------------------
router.post("/register", async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new user
    const user = await User.create({
      name,
      email,
      password: hashedPassword,
    });

    // Return success without password
    res.status(201).json({
      message: "User registered successfully",
      data: { _id: user._id, name: user.name, email: user.email },
    });
  } catch (error) {
    console.error("Register Error:", error.message);
    res.status(500).json({ message: "Server error: " + error.message });
  }
});

// -------------------- LOGIN --------------------
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    // Find user
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: "User not found" });

    // Compare password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: "Invalid password" });

    // Create JWT
    const token = jwt.sign(
      { id: user._id },
      process.env.JWT_SECRET_KEY,
      { expiresIn: process.env.JWT_EXPIRES || "7d" }
    );

    // Return success
    res.json({
      message: "Login successful",
      token,
      data: { _id: user._id, name: user.name, email: user.email },
    });
  } catch (error) {
    console.error("Login Error:", error.message);
    res.status(500).json({ message: "Server error: " + error.message });
  }
});

// -------------------- PROTECTED ROUTE EXAMPLE --------------------
router.get("/me", protect, (req, res) => {
  res.json({
    message: "Protected data accessed",
    data: { _id: req.user._id, name: req.user.name, email: req.user.email },
  });
});

export default router;