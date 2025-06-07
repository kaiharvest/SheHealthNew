import React from 'react';
import { IoArrowBack } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';

const LupaPassword = () => {
  const navigate = useNavigate();

  const handleKirim = () => {
    navigate('/verifikasi');
  };

  return (
    <div className="flex justify-center px-10 pt-20">
      {/* Card utama */}
      <div className="bg-white shadow-md rounded-lg flex flex-col md:flex-row w-full max-w-4xl p-4 md:p-10 mt-4 mb-2">
        
        {/* Form */}
        <div className="w-full md:w-1/2 px-2 md:px-4 flex flex-col">
          
          {/* Tombol Kembali di kiri atas */}
          <div
            onClick={() => navigate('/login')}
            className="flex items-center text-sm text-gray-600 cursor-pointer hover:text-[#E36CC5] transition mb-4 w-fit"
          >
            <IoArrowBack className="mr-1" />
            Sebelumnya
          </div>

          {/* Header Logo */}
          <div className="flex items-center justify-center text-[#E36CC5] font-bold text-lg mb-4">
            <img src="/LogoNew.png" alt="Logo" className="w-8 h-9 mr-2" />
            <span>SheHealth</span>
          </div>

          {/* Judul */}
          <h2 className="text-2xl font-bold mb-2">Lupa Password?</h2>
          <p className="text-gray-500 mb-3">
            Masukkan alamat email Anda dan kami akan mengirimkan kode verifikasi untuk reset password.
          </p>

          {/* Input Email */}
          <label className="text-sm mb-1 text-black">Email</label>
          <input
            type="email"
            placeholder="masukkan email"
            className="px-4 py-2 border border-black rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-[#E36CC5]"
          />

          {/* Tombol Kirim di tengah */}
          <div className="flex justify-center mt-3">
            <button
              onClick={handleKirim}
              style={{ backgroundColor: "#E36CC5" }}
              className="text-white px-4 py-2 rounded-full shadow-lg hover:bg-pink-400 transition duration-200 w-32"
            >
              Kirim
            </button>
          </div>
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
