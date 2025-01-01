import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import {Navbar} from "./components/Navbar.tsx";


createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <BrowserRouter>
            <Navbar />
            <Routes >
                <Route path="/" element={<App />} />
            </Routes>
        </BrowserRouter>
  </StrictMode>,
)
