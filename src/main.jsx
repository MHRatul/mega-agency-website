import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Route, Routes } from 'react-router'
import Home from './pages/home/Home.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
      <Routes>
        <Route element={<App/>}>
          <Route path="/" element={<Home/>} />
          <Route path="/pricing" element={<div>Pricing Page</div>} />
          <Route path="/services" element={<div>services Page</div>} />
          <Route path="/blogs" element={<div>Blogs Page</div>} />
        </Route>
      </Routes>
  </BrowserRouter>,
)
