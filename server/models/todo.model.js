const { Schema, model } = require('mongoose')

const todoSchema = new Schema({
    text: {
        type: String,
        required: true,
    },
    status: {
        type: Boolean,
        default: false
    }
    
}, {timestamps: true})

module.exports = model('Todo', todoSchema)