import express from 'express'

import {
  getRadTests,
  createRadTest,
} from '../controllers/radTestsController.js'

const router = express.Router()

router.get('/', getRadTests)
router.post('/', createRadTest)

export default router
