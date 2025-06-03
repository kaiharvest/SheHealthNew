import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Login from './Login';
import Register from './Register';
import Konsultasi from './Konsultasi';
import Profil from './Profil';
import Edukasi from './Edukasi';
import Beranda from '../Beranda';
import Footer from './Footer';
import ChatApp from './Chat';

// Halaman Dummy
const Layanan = () => <div className="p-4">Halaman Layanan Terdekat</div>;

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Beranda />} />
        <Route path="/konsultasi" element={<ChatApp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/layanan" element={<Layanan />} />
        <Route path="/edukasi" element={<Edukasi />} />
        <Route path="/profil/:nama" element={<Profil />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
