import express from 'express'

import Test from '../models/testsModel.js'

const router = express.Router()

export const getTests = async (req, res) => {
  try {
    const tests = await Test.find()
    res.json(tests)
  } catch (error) {
    res.status(404).json({ message: error.message })
  }
}

export const createTest = async (req, res) => {
  const test = req.body

  const newTest = new Test({ ...test })

  try {
    await newTest.save()
    res.status(201).json(newTest)
  } catch (error) {
    res.status(409).json({ message: error.message })
  }
}
