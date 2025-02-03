import Todo from '../models/todo.model.js'

// get all todo
const GetAllToto = async () =>{
    const todos = await Todo.find()

    if(todos.length === 0){
        return {
            data: [],
            message: 'not found'
        }
    }

    return todos
}

// create todo
const CreateTodo = async ({text, status}) =>{
    const newTodo = new Todo({text, status})

    const savedTodo = await newTodo.save()
    return savedTodo
}

// updated todo
const UpdateTodo = async ({ id, text, status }) =>{
    const todo = await Todo.findById(id)

    if(!todo){
        return res.status(404).json({
            message: 'not found'
        })
    }

    todo.text = text || todo.text,
    todo.status = status || todo.status
    

    const updateTodo = await todo.save()
    return updateTodo
}

export {
    GetAllToto,
    CreateTodo,
    UpdateTodo
}