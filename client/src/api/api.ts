import axios from 'axios'

export type SApi={
    id: string
    text: string
}

const apiUrl = import.meta.env.VITE_SERVER_URL

const getTodos = async () =>{
    try {
        const res = await axios.get(`${apiUrl}/todos`)
        return res.data.data
        
        
    } catch (error) {
        console.error("Error fetching todos:", error);
        throw error
    }
}

const postTodo= async (todo:string) =>{
    try {
        const res = await axios.post((`${apiUrl}/todos/create`), todo)
        console.log(res);
        
        return res.data
        
    } catch (error) {
        console.error("Error fetching todo:", error);
        throw error
    }
}

const deleteTodo = async (id:string) =>{
    try {
        const res = await axios.delete(`${apiUrl}/todos/${id}`)
        return res
        
    } catch (error) {
        console.error("Error deleted todo:", error);
        throw error
    }
}

export {
    getTodos,
    postTodo,
    deleteTodo
}