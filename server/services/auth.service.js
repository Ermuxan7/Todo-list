const User = require('../models/user.model.js')
const hashPassword = require('../helpers/hashPassword.js')
const bcrypt = require('bcrypt')

// Get all users
const GetAllUsers = async () =>{
    const users = await User.find()
        
    if(users.length === 0){
        return res.status(404).json({
            message: 'user not found'
        })
    }

    return users
}

// Register a user
const RegisterUser = async ({username, email, password}) =>{
    const existingUser = await User.findOne({email})

    if(existingUser){
        throw new Error('An account with this email already exists')
    }

    const hashedPassword = await hashPassword(password)

    const user = new User({
        username,
        email,
        password: hashedPassword
    })

    await user.save()
    return user
}

// Login a user
const LoginUser = async ({email, password}) =>{
    const user = await User.findOne({ email })
    
    if(!user){
        throw new Error('Invalid credentials')
    }

    const match = await bcrypt.compare(password, user.password)

    if(!match){
        throw new Error('Invalid credentials')
    }

    return {
        message: 'login succesfully',
    }
}

module.exports = {
    GetAllUsers,
    RegisterUser,
    LoginUser
}