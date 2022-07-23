import React, { useEffect, useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Auth from './pages/Auth';
import Profile from './pages/Profile';
import Carts from './pages/Carts';

// Componen
import Navbar from './components/Navbar';

function App() {
 const [isLogedIn, setIslogIn] = useState(false);

 useEffect(() => {
  const token = localStorage.getItem('eshop_jtw');
  if (token) {
   setIslogIn(true);
  }
 }, []);

 return (
  <Router>
   <Navbar isLogedIn={isLogedIn} />
   <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/auth/login" element={<Auth isLogedIn={isLogedIn} login setIslogIn={setIslogIn} />} />
    <Route path="/auth/register" element={<Auth isLogedIn={isLogedIn} register />} />
    <Route path="/profile" element={<Profile isLogedIn={isLogedIn} setIslogIn={setIslogIn} />} />
    <Route path="/carts" element={<Carts isLogedIn={isLogedIn} />} />
   </Routes>
  </Router>
 );
}

export default App;
