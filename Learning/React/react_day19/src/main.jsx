import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { TodoProvider } from './context/TodoListContext.jsx'

createRoot(document.getElementById('root')).render(
 <TodoProvider>
    <App />
 </TodoProvider>

)
