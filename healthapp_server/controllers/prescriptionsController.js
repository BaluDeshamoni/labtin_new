import express from 'express'

import Prescription from '../models/PrescriptionModel.js'

const router = express.Router()

export const getPrescriptions = async (req, res) => {
  try {
    const prescriptions = await Prescription.find()
    res.json(prescriptions)
  } catch (error) {
    res.status(404).json({ message: error.message })
  }
}

export const createPrescription = async (req, res) => {
  const prescription = req.body
  const newPrescription = new Prescription({ ...prescription })

  try {
    await newPrescription.save()
    res.status(201).json(newPrescription)
  } catch (error) {
    res.status(409).json({ message: error.message })
  }
}
