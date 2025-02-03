import { GetAllUsers, RegisterUser, LoginUser } from '../services/auth.service.js'
import generateToken from '../lib/utils.js'


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

        if(user){
            generateToken(existingUser._id, res)

            res.status(200).json({
                message: 'success',
                user
            })
        }

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

        if(user){
            generateToken(user.id, res)
            res.status(200).json({
                user
            })
        }

    } catch (error) {
        res.status(500).json({
            message: 'Error',
            error: error.message
        })
    }
}

const logout = async (req, res) =>{
    try {
        const token = res.clearCookie('token')
        res.status(200).json({message: 'User succesfully log out'})
    } catch (error) {
        console.log('Error logout controller', error);
        res.status(500).json('Internal server error')
    }
}

const checkAuth = async (req, res) =>{
    try {
        res.status(200).json('User authenticated succesfully')
    } catch (error) {
        console.log('Error checkAuth contoller', error);
        res.status(500).json({msg: 'Internal server error'})
    }
}

export {
    getAllUsers,
    registerUser,
    loginUser,
    logout,
    checkAuth
};