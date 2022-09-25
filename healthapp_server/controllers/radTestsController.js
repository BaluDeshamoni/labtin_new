import express from 'express'

import RadTest from '../models/radTestsModel.js'

const router = express.Router()

export const getRadTests = async (req, res) => {
  try {
    const radTests = await RadTest.find()
    res.json(radTests)
  } catch (error) {
    res.status(404).json({ message: error.message })
  }
}

export const createRadTest = async (req, res) => {
  const radTest = req.body

  const newRadTest = new RadTest({ ...radTest })

  try {
    await newRadTest.save()
    res.status(201).json(newRadTest)
  } catch (error) {
    res.status(409).json({ message: error.message })
  }
}
