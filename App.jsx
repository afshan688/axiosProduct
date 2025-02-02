import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './Pages/Dashboard';
import Productspage from './Pages/Productspage';
import Userpage from './Pages/Userspage';
import Githubfinder from './Pages/Githubfinder';
import ProductDetails from './Pages/ProductDetails';
import UserDetails from './Pages/UserDetails';
import axios from 'axios';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/Productspage" element={<Productspage />} />
        <Route path="/Userpage" element={<Userpage />} />
        <Route path="/Github" element={<Githubfinder />} />
        <Route path="/ProductDetails/:id" element={<ProductDetails />} />
        <Route path="/UserDetails/:id" element={<UserDetails />} />
      </Routes>
    </Router>
  );
}

export default App;

       
