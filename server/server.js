const express = require('express')
const cors= require('cors')
// config
const connectDB = require('./config/db')
// routes
const userRouter = require('./routes/auth.route')
const todoRouter = require('./routes/todo.route')
// dotenv
const dotenv = require('dotenv').config()

const app = express()

connectDB()

app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use(cors())

app.use('/api/users', userRouter)
app.use('/todos', todoRouter)

const PORT = process.env.PORT || 5000

app.listen(PORT, ()=> console.log(`Server running on port http://localhost:${PORT}`))