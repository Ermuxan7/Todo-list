import useStore from "../../../store/store";
import Button from "../Button";




export default function AddModal() {
    const {add, setAdd} = useStore()

    if(!add) return null

    return <div className='w-full h-screen absolute flex flex-col items-center justify-center top-0 left-0 z-50 overflow-hidden px-10 py-5 text-gray-200 bg-gray-700/95 space-y-5 backdrop-blur-md '>
        <button className="absolute right-16 top-6 flex items-center justify-center w-10 h-10 rounded-full text-3xl font-bold" onClick={() =>setAdd(false)}>x</button>

        <h2 className="text-xl font-bold">Add New Todo</h2>
        <textarea placeholder="add text..." cols={30} rows={16} className="w-1/2 text-xl outline-none px-6 py-5 text-gray-200 rounded-md bg-gray-600"/>
        <Button text='Add Todo' backgroundColor="blue" width="8" onClick={() =>setAdd(false)}/>
    </div>;
}
