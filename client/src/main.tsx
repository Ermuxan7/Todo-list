import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Main from './pages/Main'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')!).render(
  <>
    
    <StrictMode>
      <BrowserRouter>
          <Main />
      </BrowserRouter>
    </StrictMode>
  </>
)
