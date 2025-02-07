import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Route, Routes } from 'react-router'
import Home from './pages/home/Home.jsx'
import ErrorPage from './components/ErrorPage.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
      <Routes>
        {/* main layout */}
        <Route element={<App/>}>
          <Route path="/" element={<Home/>} />
          <Route path="/pricing" element={<div>Pricing Page</div>} />
          <Route path="/services" element={<div>services Page</div>} />
          <Route path="/blogs" element={<div>Blogs Page</div>} />

          {/* error page */}
          <Route path="*" element={<div>ErrorPage</div>} />
        </Route>
      </Routes>
  </BrowserRouter>,
)
