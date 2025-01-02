interface Props{
    text: String
    background?: [String]
    onClick?: ()=>void
}


export default function Button({text, onClick, background}:Props) {
    return <button className="w-24 py-1 text-center rounded-md cursor-pointer bg-indigo-500 hover:bg-indigo-600 text-white text-lg font-bold transition-all ease-linear shadow-md active:scale-95" onClick={onClick}>
        {text}
    </button>;
}
