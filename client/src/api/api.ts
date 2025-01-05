import axios from 'axios'

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

export {
    getTodos
}