import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Komponen Halaman
import Navbar from './Navbar';
import Footer from './Footer';
import Login from './Login';
import Register from './Register';
import ChatApp from './Chat';
import Konsultasi from './Konsultasi';
import Profil from './Profil';
import Edukasi from './Edukasi';
import LupaPassword from './LupaPassword';
import Membership from './Membership';
import Beranda from '../Beranda';
import BuatJanji from './BuatJanji';
import Verifikasi from './Verifikasi'; // ✅ Tambahkan Verifikasi

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
            <Route path="/verifikasi" element={<Verifikasi />} /> {/* ✅ Routing ke halaman Verifikasi */}
            <Route path="/buatjanji" element={<BuatJanji />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
};

export default App;
