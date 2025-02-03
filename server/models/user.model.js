import { Schema, model } from 'mongoose'

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        minlength: 3
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
        minlength: 5
    },
    avatar: {
        type: String,
        default: 'example.png'
    }
}, {timestamps: true})

const User = model('User', userSchema)

export default User