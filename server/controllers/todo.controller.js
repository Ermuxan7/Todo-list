import Todo from '../models/todo.model.js'
import { GetAllToto, CreateTodo, UpdateTodo } from '../services/todo.service.js'

const getAllTodo = async (req, res) =>{
    try {
        const todos = await GetAllToto()

        res.status(200).json({
            message: 'succes',
            data: todos
        })
        
    } catch (error) {
        res.status(500).json({
            message: "error",
            error
        })
    }
}

const createTodo = async (req, res) =>{
    try {
        const { text, status} = req.body

        if(!text){
            return res.status(400).json({
                message: 'title is required'
            })
        }

        const todo = await CreateTodo({text, status})

        res.status(201).json({
            message: 'succes',
            data: todo
        })
        
    } catch (error) {
        res.status(500).json({
            message: "error",
            error
        })
    }
}

// Update Todo
const updateTodo = async (req, res) =>{
    try {
        const { id } = req.params
        const { text, status } = req.body

        const todo = await UpdateTodo({ id, text, status })

        res.status(200).json({
            message: 'succes',
            data: todo
        })
        
    } catch (error) {
        res.status(500).json({
            message: 'error',
            error
        })
    }
}

// Delete Todo by id
const deleteTodo = async (req, res) =>{
    try {

        const { id } = req.params

        const todo = await Todo.findByIdAndDelete(id)

        res.status(200).json({
            message: 'succes',
            data: todo
        })
        
    } catch (error) {
        res.status(500).json({
            message: 'error',
            error
        })
    }
}

export {
    getAllTodo,
    createTodo,
    updateTodo,
    deleteTodo
}