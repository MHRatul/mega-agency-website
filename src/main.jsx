import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import  'sweetalert2/dist/sweetalert2.js'
import { BrowserRouter, Route, Routes } from 'react-router'
import Home from './pages/home/Home.jsx'
import ErrorPage from './components/ErrorPage.jsx'
import Pricing from './pages/home/Pricing.jsx'
import Services from './pages/home/Services.jsx'
import Blogs from './pages/home/Blogs.jsx'
import Register from './components/Register.jsx'
import AuthProvider from './context/AuthContext.jsx'

createRoot(document.getElementById('root')).render(
<AuthProvider>
<BrowserRouter>
      <Routes>
        {/* main layout */}
        <Route element={<App/>}>
          <Route path="/" element={<Home/>} />
          <Route path="/pricing" element={<Pricing/>} />
          <Route path="/services" element={<Services/>} />
          <Route path="/blogs" element={<Blogs/>} />

          {/* error page */}
          <Route path="*" element={<ErrorPage/>} />
        </Route>

        {/* Authentication */}

        <Route path="/register" element={<Register/>} />
        <Route path="/login" element={<div>Login Page</div>} />
      </Routes>
  </BrowserRouter>
</AuthProvider>,
)
