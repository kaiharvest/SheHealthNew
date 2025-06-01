import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Beranda from './Beranda';
import Navbar from './components/Navbar';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navbar />
    <Beranda />
  </React.StrictMode>
);
