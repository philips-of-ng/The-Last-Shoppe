import { Routes, Route } from 'react-router-dom';
import Start from './pages/Start';
import './app.css'
import { useContext, useEffect } from 'react';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { AuthContext } from './context/AuthContext';
import AdminDashboard from './pages/AdminDashboard';
import Home from './pages/Home';

// Component Testing
import OneProduct from './components/OneProductPage';
import { products } from './assets/assets/assets';

function App() {

  const { user } = useContext(AuthContext);

  useEffect(() => {
    document.title = 'Final Project';
    console.log('This is the user from Auth Context', user);
  }, [user]);

  const testProduct = products.slice(1, 2)[0]
  console.log('These are the assets imported in the APP.JSX file', testProduct);

  const RouteHandler = ({ user }) => {
    if (!user) return <Start />;
    if (user.isAdmin) return <AdminDashboard />;
    return <Home />;
  };

  return (
    <>
      <Routes>
        {/* This is the original code */}
        <Route path='/*' element={<RouteHandler user={user} />} />

        {/* This is just for testing components */}
        {/* <Route path='/*' element={<OneProduct product={testProduct} />} /> */}
      </Routes>

      <ToastContainer />
    </>
  );
}

export default App;
