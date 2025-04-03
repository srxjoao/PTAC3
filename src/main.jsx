import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import AuthMiddleware from './middleware.jsx'
import Home from './Home.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <Routes>
      <Route element={<AuthMiddleware/>}>
        <Route path="/" element={<Home/>}/>
      </Route>
      <Route path="/login" element={<App/>}/>
    </Routes>
    </BrowserRouter>
  </StrictMode>,
)
