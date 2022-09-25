import express from 'express'

import Customer from '../models/customersModel.js'

const router = express.Router()

export const getCustomers = async (req, res) => {
  try {
    const customers = await Customer.find()
    res.json(customers)
  } catch (error) {
    res.status(404).json({ message: error.message })
  }
}

export const createCustomer = async (req, res) => {
  const customer = req.body

  const newCustomer = new Customer({ ...customer })

  try {
    await newCustomer.save()
    res.status(201).json(newCustomer)
  } catch (error) {
    res.status(409).json({ message: error.message })
  }
}
