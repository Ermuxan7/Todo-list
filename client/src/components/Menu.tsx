import { FaNoteSticky } from "react-icons/fa6";
import Button from "./ui/Button";
import { MdOutlineDownloadDone } from "react-icons/md";
import { RiProgress3Line } from "react-icons/ri";
import { GrClearOption } from "react-icons/gr";
import { MdLogout } from "react-icons/md";
import useStore from "../store/store";

interface MenuProps{
    menu: boolean,
    setMenu: any
}

export default function Menu({menu, setMenu}:MenuProps ) {

    const {setAuth} = useStore()

    return <div className={`fixed  right-1 top-1 flex flex-col items-end py-4 px-6 rounded-md w-1/4 min-h-screen text-white bg-gray-700 transition-all delay-500 ease-linear ${menu ? 'block' : 'hidden'}`}>
        <div className="relative flex justify-center items-center h-10 w-full">
            <p className="absolute top-1 left-1 text-2xl font-bold cursor-pointer px-2 rounded-md border border-gray-200 hover:bg-gray-300/10" onClick={()=> setMenu(!menu)}>x</p>
            <div className="flex items-center gap-2 cursor-pointer">
                <FaNoteSticky className="text-3xl"/>
                <p className="text-2xl font-black">Totoist</p>
            </div>
        </div>
        <div className="flex flex-col gap-4 mt-12">
            
            <div className="flex flex-col gap-4">
                <Button text='done' icon={<MdOutlineDownloadDone />} width="12" backgroundColor={'#228B22 '} />
                <Button text='progress' icon={<RiProgress3Line />} width="12" backgroundColor={'#C46210'}/>
                <Button text='clear todo' icon={<GrClearOption />} width="12" backgroundColor={'#6F00FF'}/>
                <Button text='logout' icon={<MdLogout />} width="12" backgroundColor={'#FE0000'} onClick={() =>setAuth(false)}/>
            </div>
            
        </div>
    </div>;
}
