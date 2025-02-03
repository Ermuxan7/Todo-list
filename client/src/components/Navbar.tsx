import React, { useState } from "react";
import { FaNoteSticky } from "react-icons/fa6";
import { IoMenu } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { MdLogout } from "react-icons/md";
import Button from "./ui/Button";
import Menu from "./Menu";
import useStore from "../store/store";
import { Link } from "react-router-dom";

export const Navbar: React.FC = ()=>{
    const {add, setAdd, auth, setAuth} = useStore()
    const [menu, setMenu] = useState<boolean>(false)
    const [profile, setProfile] = useState(false)

    

    return (
        <div className="fixed top-1 py-2 px-12 rounded-md w-full h-16 flex items-center justify-between bg-red-500">

            {/* logo */}
            <div className="flex items-center gap-2 cursor-pointer text-gray-800">
                <FaNoteSticky className="text-3xl"/>
                <p className="text-2xl font-black">Totoist</p>
            </div>

            <div className="flex items-center gap-4" >

                {!auth ? (
                    <>
                        {/* no auth */}
                        <Link to='/login'><Button text='Login' width="8" backgroundColor='#8806CE'/></Link>
                        <Link to='/register'><Button text='Register' width="8" backgroundColor='#D99058'/></Link>
                        
                    </>
                ):(
                    <>
                        {/* auth */}
                        <div className="hidden sm:block">
                            <Button text='+add todo' width="8" backgroundColor='#6F00FF' onClick={() =>setAdd(!add)} classNames='hover:bg-[#62339f]'/>
                        </div>
                        <button className="relative w-10 h-10 rounded-full flex items-center justify-center bg-gray-700/90 text-white"
                        onClick={()=> setProfile(!profile)}>
                            <button className=" cursor-pointer" >av</button>
                            {profile && (
                                <ul className="absolute top-10 right-1 w-28 p-3 rounded-md shadow-md bg-gray-700/90 font-bolder text-gray-100 space-y-3">
                                    <li className="flex items-center justify-center gap-2 py-1 rounded-md hover:bg-gray-800/50">
                                        <CgProfile className="text-lg"/>
                                        Profile
                                    </li>
                                    <li className="flex items-center justify-center gap-1 py-1 rounded-md hover:bg-gray-800/50" onClick={() =>setAuth(!auth)}>
                                        <MdLogout className="text-lg"/>
                                        Logout
                                    </li>
                                </ul>
                            )}
                        
                        </button>
                        <IoMenu className='text-4xl cursor-pointer hover:text-gray-700' onClick={()=> setMenu(!menu)} />
                        <Menu menu={menu} setMenu={setMenu}/>
                    </>
                )}
            </div>
        </div>
)}

