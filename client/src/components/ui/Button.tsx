import React from "react"

interface BtnProps{
    text: string
    icon?: React.ReactNode
    backgroundColor: string
    width: string
    onClick?: ()=>void
}


export default function Button({text, icon, onClick, backgroundColor, width}:BtnProps) {
    return <button className={`flex items-center justify-center gap-2 py-1 text-center rounded-md cursor-pointer text-gray-100 text-lg font-bold hover:opacity-85 transition-all ease-linear shadow-md active:scale-95 `} 
    onClick={onClick}
    style={{
        backgroundColor: `${backgroundColor}`,
        width: `${width}rem`,
    }} >
        <p className="text-xl">{icon}</p>
        {text}
    </button>;
}
