import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './Navbar';
import Footer from './Footer';
import Login from './Login';
import Register from './Register';
import ChatApp from './Chat';             // Chat Dokter
import Konsultasi from './Konsultasi';     // Konsultasi dari Beranda
import Profil from './Profil';
import Edukasi from './Edukasi';
import LupaPassword from './LupaPassword';
import Membership from './Membership';
import Beranda from '../Beranda';
import BuatJanji from './BuatJanji';       // ✅ Import halaman Buat Janji

const App = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />

        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Beranda />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/chat" element={<ChatApp />} />
            <Route path="/konsultasi" element={<Konsultasi />} />
            <Route path="/layanan" element={<Membership />} />
            <Route path="/edukasi" element={<Edukasi />} />
            <Route path="/profil/:nama" element={<Profil />} />
            <Route path="/lupapassword" element={<LupaPassword />} />
            <Route path="/buatjanji" element={<BuatJanji />} />  {/* ✅ Tambahkan route Buat Janji */}
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
};

export default App;
