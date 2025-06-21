import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { AuthProvider } from './context/AuthContext.jsx';


import './index.css'
import App from './App.jsx'
import { ShopProvider } from './context/ShopContext.jsx';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <AuthProvider>
      <ShopProvider>
        <ToastContainer />
        <App />
      </ShopProvider>
    </AuthProvider>
  </BrowserRouter>,
)
