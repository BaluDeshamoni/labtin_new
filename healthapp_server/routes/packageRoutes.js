import express from 'express'

import {
  getPackages,
  createPackage,
  getDiscounts,
  createDiscount,
  getLocations,
  createLocation,
} from '../controllers/packagesController.js'

const router = express.Router()

router.get('/', getPackages)
router.post('/', createPackage)

router.get('/discount', getDiscounts)
router.post('/discount', createDiscount)

router.get('/location', getLocations)
router.post('/location', createLocation)

export default router
