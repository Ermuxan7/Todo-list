import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'
// config
import connectDB from './config/db.js'
// routes
import userRouter from './routes/auth.route.js'
import todoRouter from './routes/todo.route.js'
// dotenv
import dotenv from'dotenv'

dotenv.config()

const app = express()

connectDB()

app.use(cookieParser())
app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use(cors())

app.use('/api/users', userRouter)
app.use('/todos', todoRouter)

const PORT = process.env.PORT || 5000

app.listen(PORT, ()=> console.log(`Server running on port http://localhost:${PORT}`))