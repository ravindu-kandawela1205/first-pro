import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import "@fontsource/poppins/400.css"; 
import "@fontsource/poppins/700.css"; 
import "@fontsource/poppins/400-italic.css"; 


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
