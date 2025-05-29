import { Routes, Route } from 'react-router-dom';
import Start from './pages/Start';
// import Home from './pages/Home';
import { useContext, useEffect, useState } from 'react';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// import { AuthContext } from './context/AuthContext';
// import View from './pages/View';

function App() {

  //This is how to get the user
  // const { user } = useContext(AuthContext)

  //This is the fake user for now
  const { user } = {
    username: 'Philips',
    type: "admin"
  }

  useEffect(() => {
    document.title = 'Final Project'
  })

  return (
    <Routes>
      
      //This is the original code
      {/* <Route path='/*' element={ user ? <View /> : <Start />} /> */}

      //This is the render method for now 

      <Route path='/*' element={ <Start />} />

    </Routes>
  );
}

export default App;

