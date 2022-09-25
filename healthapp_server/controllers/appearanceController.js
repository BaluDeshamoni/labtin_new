import express from "express";

import { Banner, Scrollmenu } from "../models/appearanceModel.js";

const router = express.Router();

export const getBanners = async (req, res) => {
  try {
    const banners = await Banner.find();
    res.json(banners);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createBanner = async (req, res) => {
  const banner = req.body;

  const newBanner = new Banner({ ...banner });

  try {
    await newBanner.save();
    res.status(201).json(newBanner);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const getScrollmenus = async (req, res) => {
  try {
    const scrollmenus = await Scrollmenu.find();
    res.json(scrollmenus);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createScrollmenu = async (req, res) => {
  const scrollmenu = req.body;

  const newScrollmenu = new Scrollmenu({ ...scrollmenu });

  try {
    await newScrollmenu.save();
    res.status(201).json(newScrollmenu);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};
