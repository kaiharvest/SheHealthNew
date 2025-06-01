import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';          // Navbar ada di folder components
import Login from './Login';            // Login ada di folder components
import Register from './Register';      // Register ada di folder components
import Konsultasi from './Konsultasi';  // Konsultasi ada di folder components
import Beranda from '../Beranda';       // Beranda ada di luar folder components

// Tambahan halaman dummy
const Layanan = () => <div className="p-4">Halaman Layanan Terdekat</div>;
const Edukasi = () => <div className="p-4">Halaman Edukasi</div>;

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
