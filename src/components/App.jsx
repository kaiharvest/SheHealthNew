import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './Navbar';
import Footer from './Footer';
import Login from './Login';
import Register from './Register';
import Konsultasi from './Konsultasi';
import Profil from './Profil';
import Edukasi from './Edukasi';
import LupaPassword from './LupaPassword';

import Beranda from '../Beranda';
<<<<<<< HEAD
import Footer from './Footer';
import ChatApp from './Chat';
=======
>>>>>>> 8b04b18224f26764e033a7796e05dabd61899347

// Halaman Dummy
const Layanan = () => <div className="p-4">Halaman Layanan Terdekat</div>;

const App = () => {
  return (
    <Router>
<<<<<<< HEAD
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
=======
      <div className="flex flex-col min-h-screen">
        <Navbar />

        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Beranda />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/konsultasi" element={<Konsultasi />} />
            <Route path="/layanan" element={<Layanan />} />
            <Route path="/edukasi" element={<Edukasi />} />
            <Route path="/profil/:nama" element={<Profil />} />
            <Route path="/lupapassword" element={<LupaPassword />} />
          </Routes>
        </main>

        <Footer />
      </div>
>>>>>>> 8b04b18224f26764e033a7796e05dabd61899347
    </Router>
  );
};

export default App;
