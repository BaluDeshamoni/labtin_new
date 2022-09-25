import express from 'express'

import {
  getLabs,
  createLab,
  getRadLabs,
  createRadLab,
} from '../controllers/labsController.js'

const router = express.Router()

router.get('/', getLabs)
router.post('/', createLab)
router.get('/radLab', getRadLabs)
router.post('/radLab', createRadLab)

export default router
