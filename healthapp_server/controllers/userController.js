import { User, Complaint } from "../models/userModel.js";
import asyncHandler from "express-async-handler";
import jwt from "jsonwebtoken";

const generateToken = (id) => {
  return jwt.sign({ id }, "Labtin", {
    expiresIn: "300d",
  });
};

export const authUser = asyncHandler(async (req, res) => {
  const { number } = req.body;

  const user = await User.findOne({ number });

  if (user) {
    const data = { ...user };
    res.json({ ...data._doc, token: generateToken(user._id) });
  } else {
    res.status(401);
    throw new Error("user does not exist");
  }
});

export const registerUser = asyncHandler(async (req, res) => {
  const { name, number, sex, age, img } = req.body;
  const userExists = await User.findOne({ number });
  if (userExists) {
    res.status(400);
    throw new Error("user already exists");
  }
  const user = await User.create({
    name,
    number,
    profileImage: img,
    users: [{ name, sex, img, age }],
  });
  if (user) {
    const data = { ...user };
    res.json({ ...data._doc, token: generateToken(user._id) });
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
    const user = await User.findById(req.user._id);
    res.json(user);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
});
export const addUser = asyncHandler(async (req, res) => {
  try {
    const user = await User.findById(req.user._id);
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
export const createComplaint = asyncHandler(async (req, res) => {
  try {
    const { customer, number, complaint } = req.body;

    const newComplaint = await Complaint.create({
      customer,
      number,
      complaint,
    });
    if (newComplaint) {
      res.json(newComplaint);
    }
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
});
export const getComplaints = asyncHandler(async (req, res) => {
  try {
    const complaints = await Complaint.find({});
    res.json(complaints);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
});

export const verify = asyncHandler(async (req, res) => {
  console.log(req);
  try {
    const userExists = await User.findOne({ number: req.params.num });
    console.log(userExists);
    userExists ? res.json({ status: true }) : res.json({ status: false });
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
});
