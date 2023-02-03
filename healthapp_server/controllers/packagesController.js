import express from "express";

import { Package, Discount, Location } from "../models/packageModel.js";
import { Lab } from "../models/LabModel.js";

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

export const editPackage = async (req, res) => {
  const { _id, present, lab } = req.body;
  const AvailableLab = await Lab.findById(lab);

  try {
    const pack = await Package.findById(_id);
    if (pack) {
      pack.title = req.body.title || pack.title;
      pack.details = req.body.details || pack.details;
      pack.parameters = req.body.parameters || pack.parameters;
      pack.requirements = req.body.requirements || pack.requirements;

      if (present) {
        for (let x in pack.availableIn) {
          if (pack.availableIn[x].lab == lab) {
            pack.availableIn[x].originalPrice =
              req.body.originalPrice || pack.originalPrice;
            pack.availableIn[x].discountPrice =
              req.body.discountPrice || pack.discountPrice;
            pack.availableIn[x].stateName =
              AvailableLab.state || pack.stateName;
          }
        }
      } else {
        pack.availableIn.push({
          lab,
          originalPrice: req.body.originalPrice,
          discountPrice: req.body.discountPrice,
          stateName: AvailableLab.state,
        });
      }

      const updatedPack = await pack.save();

      res.status(201).json(updatedPack);
    }
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};
export const addHighlightPackage = async (req, res) => {
  const { id } = req.body;
  console.log(req.body);
  try {
    const pack = await Package.findById(id);
    if (pack) {
      console.log(pack);
      let status = pack.isHighlight;
      pack.isHighlight = !status;
      const updatedPack = await pack.save();
      res.status(201).json(updatedPack);
    }
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
