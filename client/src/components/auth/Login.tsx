import Input from "../ui/Input";

export default function Login() {
        return (
            <div className="max-w-[600px] mx-auto mt-24 shadow-lg px-4 py-10">
                <h2 className="text-4xl font-bold text-center">Login</h2>
                <form className='flex flex-col items-center justify-center gap-6 mt-6'>
                    <Input type='email' label='Email:' placeholder='Email...' />
                    <Input type='password' label='Password:' placeholder='Password...' />
                </form>
                <div className='flex items-center justify-between px-20 mt-10'>
                    <p className='text-gray-500'>Create new account</p>
                    <a href="/register" className='underline hover:text-blue-600'>Register</a>
                </div>
            </div>
)}
