import User from "../models/userModel.js";
import asyncHandler from "express-async-handler";
import jwt from "jsonwebtoken";

const generateToken = (id) => {
  return jwt.sign({ id }, "Labtin", {
    expiresIn: "300d",
  });
};

export const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (user && (await user.matchPassword(password))) {
    res.json({
      _id: user._id,
      email: user.email,
      name: user.name,
      isEmployee: user.isEmployee,
      isAdmin: user.isAdmin,
      token: generateToken(user._id),
    });
  } else {
    res.status(401);
    throw new Error("Invalid login");
  }
});

export const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;
  const userExists = await User.findOne({ email });
  if (userExists) {
    res.status(400);
    throw new Error("user already exists");
  }
  const user = await User.create({
    name,
    email,
    password,
  });
  if (user) {
    res.status(201).json({
      _id: user._id,
      email: user.email,
      name: user.name,
      isEmployee: user.isEmployee,
      isAdmin: user.isAdmin,
      token: generateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error("Invalid user data");
  }
});

export const getUsers = asyncHandler(async (req, res) => {
  const users = await User.find({});
  res.json(users);
});

export const getDetails = asyncHandler(async (req, res) => {
  try {
    const user = await User.findById(req.user._id).select("-password");
    res.json(user);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
});
export const addUser = asyncHandler(async (req, res) => {
  try {
    const user = await User.findById(req.user._id).select("-password");
    user.users.push(req.body);
    await user.save();
    res.json(user.users);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
});

export const addAddress = asyncHandler(async (req, res) => {
  try {
    const user = await User.findById(req.user._id);

    user.address.push(req.body);
    await user.save();
    res.json(user.address);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
});
