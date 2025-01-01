import { useState } from "react";
import { FaNoteSticky } from "react-icons/fa6";
import { IoMenu } from "react-icons/io5";
import Button from "./ui/Button";


export const Navbar = ()=>{
    const [auth, setAuth] = useState(true)

    return <div className="fixed top-1 mx-auto py-2 px-12 rounded-md w-full flex items-center justify-between bg-red-500">

        {/* logo */}
        <div className="flex items-center gap-2 ">
            <FaNoteSticky className="text-3xl"/>
            <p className="text-2xl font-black">Totoist</p>
        </div>

        <div className="flex items-center gap-4">

            {!auth ? (
                <>
                    {/* no auth */}
                    <Button text='Login' />
                    <Button text='Register' />
                </>
            ):(
                <>
                    {/* auth */}
                    <Button text='+add todo' />
                    <IoMenu/>
                </>
            )}
        </div>
    </div>
}