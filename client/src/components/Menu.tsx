import { FaNoteSticky } from "react-icons/fa6";
import Button from "./ui/Button";

interface MenuProps{
    menu: boolean,
    setMenu: any
}

export default function Menu({menu, setMenu}:MenuProps ) {
    return <div className={`fixed  right-1 top-1 flex flex-col items-end py-4 px-6 rounded-md w-1/4 min-h-screen text-white bg-zinc-700 transition-all delay-500 ease-linear ${menu ? 'block' : 'hidden'}`}>
        <div className="relative flex justify-center items-center h-10 w-full">
            <p className="absolute top-1 left-1 text-2xl font-bold cursor-pointer px-2 rounded-md border border-gray-200 hover:bg-gray-300/10" onClick={()=> setMenu(!menu)}>x</p>
            <div className="flex items-center gap-2 ">
                <FaNoteSticky className="text-3xl"/>
                <p className="text-2xl font-black">Totoist</p>
            </div>
        </div>
        <div className="flex flex-col gap-4 mt-6">
            <p className="bg-red-300 rounded-full w-1/2 p-4">av</p>
            <div className="flex flex-col gap-4">
                <Button text='done todo' />
                <Button text='progress todo' />
                <Button text='clear todo' />
                <Button text='logout' />
            </div>
            
        </div>
    </div>;
}
