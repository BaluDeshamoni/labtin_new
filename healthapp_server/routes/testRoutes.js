import express from 'express'

import { getTests, createTest } from '../controllers/TestsController.js'

const router = express.Router()

router.get('/', getTests)
router.post('/', createTest)

export default router
