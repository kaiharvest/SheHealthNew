import React from 'react';
import '../style/Beranda.css';

function Beranda() {
  const publicUrl = process.env.PUBLIC_URL;

  return (
    <div>
      <div className="header">
        <div className="header-content">
          <h1>Selamat Datang di Rumah Sakit Kami</h1>
          <p>Kami menyediakan layanan kesehatan terbaik untuk Anda dan keluarga.</p>
          <button className="btn-mulai">Mulai Konsultasi</button>
        </div>
        <div className="header-image">
          <img src={`${publicUrl}/dokter & bundaran.png`} alt="Dokter" />
        </div>
      </div>

      <div className="mengapa-kami">
        <h2>Mengapa Memilih Kami?</h2>
        <div className="card-container">
          <div className="card">
            <img src={`${publicUrl}/icons/hati.svg`} alt="Heart Icon" />
            <h3>Perawatan Terbaik</h3>
            <p>Kami memberikan perawatan terbaik kepada setiap pasien dengan sepenuh hati.</p>
          </div>
          <div className="card">
            <img src={`${publicUrl}/icons/rumah-sakit.svg`} alt="Hospital Icon" />
            <h3>Fasilitas Lengkap</h3>
            <p>Rumah sakit kami dilengkapi dengan fasilitas modern dan lengkap.</p>
          </div>
          <div className="card">
            <img src={`${publicUrl}/icons/logo.svg`} alt="Shield Icon" />
            <h3>Tenaga Medis Profesional</h3>
            <p>Dokter dan perawat kami berpengalaman dan profesional di bidangnya.</p>
          </div>
        </div>
      </div>

      <div className="layanan">
        <h2>Layanan Tersedia</h2>
        <div className="layanan-container">
          <div className="layanan-item">
            <img src={`${publicUrl}/icons/kandungan.png`} alt="Spesialis Kandungan" />
            <h3>Spesialis Kandungan</h3>
          </div>
          <div className="layanan-item">
            <img src={`${publicUrl}/icons/saraf.png`} alt="Spesialis Saraf" />
            <h3>Spesialis Saraf</h3>
          </div>
          <div className="layanan-item">
            <img src={`${publicUrl}/icons/anak.png`} alt="Spesialis Anak" />
            <h3>Spesialis Anak</h3>
          </div>
          <div className="layanan-item">
            <img src={`${publicUrl}/icons/bedah.png`} alt="Spesialis Bedah" />
            <h3>Spesialis Bedah</h3>
          </div>
          <div className="layanan-item">
            <img src={`${publicUrl}/icons/paru.png`} alt="Spesialis Paru" />
            <h3>Spesialis Paru</h3>
          </div>
          <div className="layanan-item">
            <img src={`${publicUrl}/icons/gigi.png`} alt="Dokter Gigi" />
            <h3>Dokter Gigi</h3>
          </div>
        </div>
      </div>

      <div className="konsultasi">
        <h2>Konsultasi Sekarang</h2>
        <p>Jangan ragu untuk berkonsultasi dengan dokter kami secara online maupun offline.</p>
        <button className="btn-konsultasi">Konsultasi Sekarang</button>
        <img className="konsultasi-img" src={`${publicUrl}/icons/Card Item.svg`} alt="Plus Icon" />
      </div>

      <div className="footer">
        <p>&copy; 2025 Rumah Sakit Kita. All rights reserved.</p>
      </div>
    </div>
  );
}

export default Beranda;
