const { Router } = require('express')
const { getAllTodo, createTodo, updateTodo, deleteTodo } = require('../controllers/todo.controller')

const router = Router()

router.get('/', getAllTodo)

router.post('/create', createTodo)

router.put('/:id', updateTodo)

router.delete('/:id', deleteTodo)

module.exports = router