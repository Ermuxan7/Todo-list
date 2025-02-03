import Input from '../ui/Input.tsx'

export default function Register() {
    return <div className="max-w-[600px] mx-auto mt-24 shadow-lg px-4 py-10">
        <h2 className="text-4xl font-bold text-center">Register</h2>
        <form className='flex flex-col items-center justify-center gap-6 mt-6'>
            <Input type='text' label='Username:' placeholder='Username...' />
            <Input type='email' label='Email:' placeholder='Email...' />
            <Input type='password' label='Password:' placeholder='Password...' />
        </form>
        <div className='flex items-center justify-between px-20 mt-10'>
            <p className='text-gray-500'>Have account already yes?</p>
            <a href="/login" className='underline hover:text-blue-600'>Login</a>
        </div>
    </div>;
}
