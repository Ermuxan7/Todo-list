import { Router } from 'express'
import { getAllUsers, registerUser, loginUser, logout, checkAuth }  from '../controllers/auth.controller.js'
import protectRoute from '../middleware/auth.middleware.js'

const router = Router()

// get all users
router.get('/', getAllUsers)

// register user
router.post('/register', registerUser)

// login
router.post('/login', loginUser)

router.post('/logout', logout)

router.get('/check-auth', protectRoute, checkAuth)

export default router