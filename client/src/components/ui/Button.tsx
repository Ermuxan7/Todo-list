import React from "react"

interface BtnProps{
    text: string
    icon?: React.ReactNode
    backgroundColor: React.ReactNode
    width: string
    onClick?: ()=>void,
    classNames?: React.ReactNode
}


export default function Button({text, icon, onClick, backgroundColor, width, classNames}:BtnProps) {
    return <button className={`flex items-center justify-center gap-2 py-1 text-center rounded-md cursor-pointer text-gray-100 text-lg font-bold transition-all ease-linear shadow-md active:scale-95 ${classNames}`} 
    onClick={onClick}
    style={{
        backgroundColor: `${backgroundColor}`,
        width: `${width}rem`,
    }} >
        <p className="text-xl">{icon}</p>
        {text}
    </button>;
}
