import express from 'express'

import {
  getPrescriptions,
  createPrescription,
} from '../controllers/prescriptionsController.js'

const router = express.Router()

router.get('/', getPrescriptions)
router.post('/', createPrescription)

export default router
