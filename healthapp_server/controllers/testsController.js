import express from "express";

import Test from "../models/testsModel.js";

const router = express.Router();

export const getTests = async (req, res) => {
  try {
    const tests = await Test.find();
    res.json(tests);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createTest = async (req, res) => {
  const test = req.body;

  const newTest = new Test({ ...test });

  try {
    await newTest.save();
    res.status(201).json(newTest);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const editTest = async (req, res) => {
  const { _id, present, lab } = req.body;

  try {
    const test = await Test.findById(_id);
    if (test) {
      test.title = req.body.title || test.title;
      test.details = req.body.details || test.details;

      if (present) {
        for (let x in test.availableIn) {
          if (test.availableIn[x].lab == lab) {
            test.availableIn[x].originalPrice =
              req.body.originalPrice || test.originalPrice;
            test.availableIn[x].discountPrice =
              req.body.discountPrice || test.discountPrice;
          }
        }
      } else {
        test.availableIn.push({
          lab,
          originalPrice: req.body.originalPrice,
          discountPrice: req.body.discountPrice,
        });
      }

      const updatedTest = await test.save();

      res.status(201).json(updatedTest);
    }
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};
export const addHighlightTest = async (req, res) => {
  const { id } = req.body;
  try {
    const test = await Test.findById(id);
    if (test) {
      test.isHighlight = !test.isHighlight;
      const updatedTest = await test.save();
      res.status(201).json(updatedTest);
    }
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};
