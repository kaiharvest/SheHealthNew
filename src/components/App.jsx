import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Login from './Login';
import Register from './Register';
import Konsultasi from './Konsultasi';
import Edukasi from './Edukasi';
import Beranda from '../Beranda';

// Halaman Dummy
const Layanan = () => <div className="p-4">Halaman Layanan Terdekat</div>;

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Beranda />} />
        <Route path="/konsultasi" element={<Konsultasi />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/layanan" element={<Layanan />} />
        <Route path="/edukasi" element={<Edukasi />} />
      </Routes>
    </Router>
  );
};

export default App;
