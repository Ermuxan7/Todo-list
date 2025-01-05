import { useEffect, useState } from "react";
import Button from "./ui/Button";
import { FaRegEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { MdOutlineDoneOutline } from "react-icons/md";
import {ToastContainer, toast} from 'react-toastify'
import { getTodos } from "../api/api";

interface SData {
    _id: string
    text: string
    status: boolean 
    createdAt: string
    updatedAt: string
}

export default function Card() {
    const [todos, setTodos] = useState<Array<SData>>([])

    
    useEffect(() =>{
        const fetchTodos = async() =>{
            try {
                const data = await getTodos()
                setTodos(data)
                
            } catch (error) {
                console.error("Error fetching todos:", error);
            }
        }

        fetchTodos()
    },[])

    const doneNotify = () => toast.success('Task is done!' , {
        autoClose: 2000,
    })

    const deleteNotify = () => toast.success('task succesfully deleted', {
        autoClose: 2000,
    })

    
    return <div>
            {todos.length > 0  ? (
                todos.map(todo =>(
                    <div key={todo._id} className={`border-[12px] ${todo.status ? 'border-l-green-700':' border-l-red-700'} border-t-0 border-b-0 border-r-0 bg-zinc-300 w-full py-2 px-4 rounded-md shadow-lg shadow-neutral-200`}>
                        <div  className="flex justify-between flex-col p-4">
                            <div className="flex items-center gap-4 mb-3">
                                <p className="text-lg font-bold">created data:</p>
                                <p className="text-gray-600 text-lg">{todo.createdAt}</p>
                            </div>
                            <p className="text-xl font-medium text-slate-900">
                                {todo.text}
                            </p>
                            
                        </div>
                    
                        <div className="flex items-center gap-4 justify-end p-4">
                            <Button text='done' icon={<MdOutlineDoneOutline />}  width="8" backgroundColor="#228B22" onClick={() => { setTodos(todos.map(t => t._id === todo._id ? { ...t, status: !t.status } : t)); doneNotify(); }}/>
                            <Button text= 'edit' icon={<FaRegEdit />} width="8" backgroundColor='#317873'/>
                            <Button text='delete' icon={<MdDelete />} width="8" backgroundColor='indigo' onClick={() => {deleteNotify()}}/>
                            <ToastContainer />
                        </div>
                    </div>
                ))
            ):(
                <p>No todos available</p>
            )}
    </div>
}
