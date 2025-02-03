import { Router } from 'express'
import { getAllTodo, createTodo, updateTodo, deleteTodo } from '../controllers/todo.controller.js'
import protectRoute from '../middleware/auth.middleware.js'

const router = Router()

router.get('/', protectRoute, getAllTodo)

router.post('/create', protectRoute, createTodo)

router.put('/:id', protectRoute, updateTodo)

router.delete('/:id', protectRoute, deleteTodo)

export default router