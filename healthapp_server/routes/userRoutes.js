import express from 'express'
import {
  authUser,
  registerUser,
  getUsers,
} from '../controllers/userController.js'
import { admin, protect } from '../middleware/auth.js'

const router = express.Router()

router.route('/').post(registerUser).get(protect, admin, getUsers)
router.post('/login', authUser)

export default router
