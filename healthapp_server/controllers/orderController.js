import Order from "../models/orderModel.js";
import asyncHandler from "express-async-handler";

export const createOrder = asyncHandler(async (req, res) => {
  try {
    const data = req.body;
    console.log(req.body);
    const orderedFor = {
      name: data.selectedUser.name,
      age: data.selectedUser.age,
      sex: data.selectedUser.sex,
    };
    const orderedOn = data.currentDate[0] + " ";
    data.currentDate[1] + " ";
    data.currentDate[2] + " ";
    data.currentDate[3];
    const orderedItem = { item: data.title, lab: data.lab.title };

    const order = await Order.create({
      userName: req.user.name,
      userId: req.user._id,
      totalPrice: data.totalPrice,
      address: data.address,
      orderedOn,
      orderedFor,
      orderedItem,
    });
    res.status(201).json(order);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
});
export const uploadReports = asyncHandler(async (req, res) => {
  try {
    const data = req.body;
    const order = await Order.find({ _id: data._id });
    if (order) {
      order[0].uploadedFiles.report = data.report;
      order[0].uploadedFiles.eReport = data.eReport;
    } else {
      res.status(400);
      throw new Error("Invalid Order");
    }
    await order[0].save();
    res.status(201);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
});
export const changeStatus = asyncHandler(async (req, res) => {
  try {
    const data = req.body;
    const order = await Order.find({ _id: data._id });
    if (order) {
      order[0].status = data.status;
    } else {
      res.status(400);
      throw new Error("Invalid Order");
    }
    await order[0].save();
    res.status(201);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
});

export const getMyOrders = asyncHandler(async (req, res) => {
  const myorders = await Order.find({ userId: req.user._id });
  res.json(myorders);
});

export const getOrders = asyncHandler(async (req, res) => {
  const orders = await Order.find({});
  res.json(orders);
});
