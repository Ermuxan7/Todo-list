interface Props{
    text: String
}


export default function Button({text}:Props) {
    return <div className="w-24 py-1 text-center rounded-md cursor-pointer bg-indigo-500 hover:bg-indigo-600 text-white text-lg font-bold transition-colors delay-100 ease-in">
        {text}
    </div>;
}
