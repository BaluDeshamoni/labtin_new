import express from 'express'

import { Lab, RadLab } from '../models/LabModel.js'

const router = express.Router()

export const getLabs = async (req, res) => {
  try {
    const labs = await Lab.find()
    res.json(labs)
  } catch (error) {
    res.status(404).json({ message: error.message })
  }
}

export const createLab = async (req, res) => {
  const lab = req.body

  const newLab = new Lab({ ...lab })

  try {
    await newLab.save()
    res.status(201).json(newLab)
  } catch (error) {
    res.status(409).json({ message: error.message })
  }
}

export const getRadLabs = async (req, res) => {
  try {
    const radLabs = await RadLab.find()
    res.json(radLabs)
  } catch (error) {
    res.status(404).json({ message: error.message })
  }
}

export const createRadLab = async (req, res) => {
  const radLab = req.body

  const newRadLab = new RadLab({ ...radLab })

  try {
    await newRadLab.save()
    res.status(201).json(newRadLab)
  } catch (error) {
    res.status(409).json({ message: error.message })
  }
}
