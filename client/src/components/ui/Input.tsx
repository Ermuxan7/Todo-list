interface InputProps {
    type: string
    placeholder: string,
    label: string,
    fullWidth?: boolean
}

export default function Input({type, placeholder, label, fullWidth,}:InputProps) {
    return <div className="flex items-center gap-2 ">
        <label className="text-md font-semibold w-20">{label}</label>
        <input type={type} placeholder={placeholder} className={`px-3 py-1 text-lg outline-none rounded-sm border ${fullWidth ? 'w-full' : 'w-80'}`} />
    </div>;
}
