import React, { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from 'react-router-dom';

import Navbar from './Navbar';
import Footer from './Footer';


import Beranda from '../Beranda';
import Login from './Login';
import Register from './Register';
import LupaPassword from './LupaPassword';
import Verifikasi from './Verifikasi';
import ResetPassword from './ResetPassword';
import ChatApp from './Chat';
import Konsultasi from './Konsultasi';
import BuatJanji from './BuatJanji';
import Profil from './Profil';
import Edukasi from './Edukasi';
import Membership from './Membership';
import User from './User';
import PaymentPage from './PaymentPage';
import PaymentSuccessPopup from './PaymentSuccessPopup';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const Layout = ({ children }) => {
  const location = useLocation();
  const noLayoutRoutes = [
    '/login',
    '/register',
    '/lupapassword',
    '/verifikasi',
    '/resetpassword' 
  ];
  const isNoLayout = noLayoutRoutes.includes(location.pathname);

  return (
    <div className="flex flex-col min-h-screen">
      {!isNoLayout && <Navbar />}
      <main className="flex-grow">{children}</main>
      {!isNoLayout && <Footer />}
    </div>
  );
};

const AppRoutes = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Beranda />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/lupapassword" element={<LupaPassword />} />
        <Route path="/verifikasi" element={<Verifikasi />} />
        <Route path="/resetpassword" element={<ResetPassword />} /> 
        <Route path="/chat" element={<ChatApp />} />
        <Route path="/konsultasi" element={<Konsultasi />} />
        <Route path="/buatjanji" element={<BuatJanji />} />
        <Route path="/profil/:nama" element={<Profil />} />
        <Route path="/user/:nama" element={<User />} />
        <Route path="/edukasi" element={<Edukasi />} />
        <Route path="/layanan" element={<Membership />} />
        <Route path="/payment" element={<PaymentPage />} />
        <Route path="/paymentpopup" element={<PaymentSuccessPopup />} />
      </Routes>
    </Layout>
  );
};

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <AppRoutes />
    </Router>
  );
};

export default App;
