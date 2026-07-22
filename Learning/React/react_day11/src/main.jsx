import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { RegisterProvider } from './components/AuthRegister.jsx'

createRoot(document.getElementById('root')).render(
    <RegisterProvider>

        <BrowserRouter>
            <App />
        </BrowserRouter>
    </RegisterProvider>

)
