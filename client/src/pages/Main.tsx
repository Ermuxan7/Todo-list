import { Routes, Route, useLocation } from 'react-router-dom'
import App from '../App.tsx'
import Register from '../components/auth/Register.tsx'
import Login from '../components/auth/Login.tsx'
import { Navbar } from '../components/Navbar.tsx'



const Main = () =>{
    const location = useLocation()
    const hideNavbarPaths = ['/login', '/register']
    return (<>
        {!hideNavbarPaths.includes(location.pathname) && <Navbar />}

        <Routes >
            <Route path="/" element={<App />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
        </Routes>

    </>)
}

export default Main
