const { GetAllUsers, RegisterUser, LoginUser } = require('../services/auth.service.js')

// get all users 
const getAllUsers = async (req, res) =>{
    try {
        const users = await GetAllUsers()

        res.status(200).json({
            message: 'success',
            users
        })

    } catch (error) {
        res.status(500).json('Error', error)

    }
} 

// register user
const registerUser = async (req, res) =>{
    try {
        const { username, email, password } = req.body

        if(!username || !email || !password){
            return res.status(400).json({message: 'Please fill in all fields'})
        }
        
        const user = await RegisterUser({username, email, password})
        
        res.status(200).json({
            message: 'success',
            user
        })

    } catch (error) {
        res.status(500).json({
            message: 'Error',
            error: error.message
        })
    }
}

// login
const loginUser = async (req, res) =>{
    try {
        const { email, password } = req.body

        if(!email || !password){
            return res.status(400).json({message: 'Please fill in all fields'})
        }
        
        const user = await LoginUser({email, password})

        res.status(200).json({
            user
        })

        
    } catch (error) {
        res.status(500).json({
            message: 'Error',
            error: error.message
        })
    }
}

module.exports = {
    getAllUsers,
    registerUser,
    loginUser
};