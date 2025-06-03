import React from 'react';
import { IoArrowBack } from 'react-icons/io5';

const LupaPassword = () => {
  return (
    <div className="py-6 flex justify-center bg-gray-50">
      <div className="bg-white shadow-md rounded-lg flex flex-col md:flex-row w-full max-w-4xl p-16">
        
        {/* Form */}
        <div className="w-full md:w-1/2 px-4">
          {/* Logo */}
          <div className="flex justify-center items-center mb-4 text-pink-600 font-bold text-lg">
            <img src="/LogoNew.png" alt="Logo" className="w-8 h-9 mr-2" />
            <span style={{ color: "#E36CC5" }}>SheHealth</span>
          </div>

          {/* Back Button */}
          <div className="flex items-center text-sm text-gray-600 cursor-pointer mb-3">
            <IoArrowBack className="mr-2" />
            Sebelumnya
          </div>

          {/* Title */}
          <h2 className="text-2xl font-bold mb-2">Lupa Password?</h2>
          <p className="text-gray-500 mb-4">
            Masukkan alamat email Anda dan kami akan mengirimkan kode verifikasi untuk reset password.
          </p>

          {/* Email Input */}
          <label className="block text-sm mb-1 text-black">Email</label>
          <input
            type="email"
            placeholder="masukkan email"
            className="w-full px-4 py-2 border border-black rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-pink-400"
          />

          {/* Submit Button */}
          <button
            style={{ backgroundColor: "#E36CC5" }}
            className="w-full text-white py-2 rounded-full shadow-lg hover:bg-pink-600 transition duration-200 mb-2 mt-2"
          >
            Kirim
          </button>
        </div>

        {/* Illustration */}
        <div className="hidden md:flex w-1/2 items-center justify-center">
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
