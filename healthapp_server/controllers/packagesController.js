import express from "express";

import { Package, Discount, Location } from "../models/packageModel.js";

const router = express.Router();

export const getPackages = async (req, res) => {
  try {
    const posts = await Package.find();
    res.json(posts);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createPackage = async (req, res) => {
  const post = req.body;

  const newPackage = new Package({ ...post });

  try {
    await newPackage.save();
    res.status(201).json(newPackage);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const getDiscounts = async (req, res) => {
  try {
    const discounts = await Discount.find();
    res.json(discounts);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createDiscount = async (req, res) => {
  const discount = req.body;

  const newDiscount = new Discount({ ...discount });

  try {
    await newDiscount.save();
    res.status(201).json(newDiscount);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const getLocations = async (req, res) => {
  try {
    const locations = await Location.find();
    res.json(locations);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createLocation = async (req, res) => {
  const location = req.body;
  console.log(location);
  const newLocation = new Location({ ...location });

  try {
    await newLocation.save();
    res.status(201).json(newLocation);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};
