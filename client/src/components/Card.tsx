import { useState } from "react";
import Button from "./ui/Button";
import { FaRegEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { MdOutlineDoneOutline } from "react-icons/md";
import {ToastContainer, toast} from 'react-toastify'

export default function Card() {
    const [done, setDone] = useState<boolean>(false)

    const doneNotify = () => toast.success((!done ? 'Task is done!' : 'task no done'), {
        autoClose: 2000,
    })

    const deleteNotify = () => toast.success('task succesfully deleted', {
        autoClose: 2000,
    })
    return <div>
        <div className={`border-[12px] ${done ? 'border-l-green-700':' border-l-red-700'} border-t-0 border-b-0 border-r-0 bg-zinc-300 w-full py-2 px-4 rounded-md shadow-lg shadow-neutral-200`}>
            
            <div className="flex justify-between flex-col p-4">
                <div className="flex items-center gap-4 mb-3">
                    <p className="text-lg font-bold">created data:</p>
                    <p className="text-gray-600 text-lg">30.12.2024</p>
                </div>
                <p className="text-xl font-medium text-slate-900">Go to Gym
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate numquam quaerat doloribus, obcaecati quidem perferendis ea optio, a officia sint quia in nam ipsa aliquid enim, explicabo illum odit. Natus, hic ipsa? Libero, voluptatum aliquam amet blanditiis sapiente dolor soluta.
                    
                </p>
                
            </div>
            
            <div className="flex items-center gap-4 justify-end p-4">
                <Button text='done' icon={<MdOutlineDoneOutline />}  width="8" backgroundColor="#228B22" onClick={()=>{setDone(!done), doneNotify()} }/>
                <Button text= 'edit' icon={<FaRegEdit />} width="8" backgroundColor='#317873'/>
                <Button text='delete' icon={<MdDelete />} width="8" backgroundColor='indigo' onClick={() => {deleteNotify()}}/>
                <ToastContainer />
            </div>

        </div>
    </div>
}
