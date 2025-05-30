import { Routes, Route } from 'react-router-dom';
import Start from './pages/Start';
// import Home from './pages/Home';
import { useContext, useEffect, useState } from 'react';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { AuthContext } from './context/AuthContext';
// import View from './pages/View';
import AdminDashboard from './pages/AdminDashboard';
import Home from './pages/Home';
import OneProduct from './components/OneProduct';
function App() {

  const { user } = useContext(AuthContext)

  useEffect(() => {
    document.title = 'Final Project'
    console.log('This is the user from Auth Context', user);
  })

  const RouteHandler = ({ user }) => {
    if (!user) return <Start />
    if (user.isAdmin) return <AdminDashboard />
    return <Home />
  }

  return (
    <Routes>
    
      //This is the original code
      {/* <Route path='/*' element={<RouteHandler user={user} />} /> */}


      //This is just for testing components

      { 
        <Route path='/*' element={<OneProduct />} />
      }
    </Routes>
  );
}

export default App;

