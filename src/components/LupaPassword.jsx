import React from 'react';
import { IoArrowBack } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';

const LupaPassword = () => {
  const navigate = useNavigate();

  const handleKirim = () => {
    navigate('/verifikasi');
  };

  return (
    <div className="flex justify-center bg-gray-50 px-4 pt-4 pb-6">
      {/* Card utama */}
      <div className="bg-white shadow-md rounded-lg flex flex-col md:flex-row w-full max-w-4xl p-4 md:p-10 mt-4 mb-2">
        
        {/* Form */}
        <div className="w-full md:w-1/2 px-2 md:px-4 flex flex-col">
          {/* Logo */}
          <div className="flex justify-center items-center mb-4 text-pink-600 font-bold text-lg">
            <img src="/LogoNew.png" alt="Logo" className="w-8 h-9 mr-2" />
            <span style={{ color: "#E36CC5" }}>SheHealth</span>
          </div>

          {/* Tombol Kembali */}
          <div
            onClick={() => navigate('/login')}
            className="flex items-center text-sm text-gray-600 cursor-pointer mb-3 hover:text-[#E36CC5] transition"
          >
            <IoArrowBack className="mr-2" />
            Sebelumnya
          </div>

          {/* Judul */}
          <h2 className="text-2xl font-bold mb-2">Lupa Password?</h2>
          <p className="text-gray-500 mb-4">
            Masukkan alamat email Anda dan kami akan mengirimkan kode verifikasi untuk reset password.
          </p>

          {/* Input Email */}
          <label className="block text-sm mb-1 text-black">Email</label>
          <input
            type="email"
            placeholder="masukkan email"
            className="w-full px-4 py-2 border border-black rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-pink-400"
          />

          {/* Tombol Kirim */}
          <button
            onClick={handleKirim}
            style={{ backgroundColor: "#E36CC5" }}
            className="w-full text-white py-2 rounded-full shadow-lg hover:bg-pink-600 transition duration-200 mt-auto"
          >
            Kirim
          </button>
        </div>

        {/* Ilustrasi */}
        <div className="hidden md:flex w-1/2 items-center justify-center px-4">
          <img
            src="/lupapass.svg"
            alt="Forgot Password Illustration"
            className="w-full max-w-xs"
          />
        </div>
      </div>
    </div>
  );
};

export default LupaPassword;
