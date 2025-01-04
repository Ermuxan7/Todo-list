const { Router } = require('express')
const { getAllUsers, registerUser, loginUser } = require('../controllers/auth.controller.js')

const router = Router()

// get all users
router.get('/', getAllUsers)

// register user
router.post('/register', registerUser)

// login
router.post('/login', loginUser)

module.exports = router