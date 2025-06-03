import React from 'react';
import { FaGoogle, FaFacebookF } from 'react-icons/fa';
import { IoArrowBack } from 'react-icons/io5';

const LupaPassword = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="bg-white shadow-md rounded-lg flex flex-col md:flex-row w-full max-w-4xl p-6">
        {/* Form */}
        <div className="w-full md:w-1/2 px-4">
          <div className="flex items-center mb-4 text-pink-600 font-bold text-lg">
            <div className="w-6 h-6 bg-pink-500 rounded-full flex items-center justify-center text-white mr-2">+</div>
            SheHealth
          </div>

          <div className="flex items-center text-sm text-gray-600 cursor-pointer mb-3">
            <IoArrowBack className="mr-2" />
            Sebelumnya
          </div>

          <h2 className="text-2xl font-bold mb-2">Lupa password?</h2>
          <p className="text-gray-500 mb-4">
            Masukkan alamat email Anda dan kami akan mengirimkan kode verifikasi untuk reset password.
          </p>

          <label className="block text-sm mb-1 text-gray-700">Email</label>
          <input
            type="email"
            placeholder="masukkan email"
            className="w-full px-4 py-2 border rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-pink-400"
          />

          <button className="w-full bg-pink-500 text-white py-2 rounded-full shadow-lg hover:bg-pink-600 transition duration-200 mb-4">
            Kirim
          </button>

          <div className="flex items-center my-4">
            <div className="flex-grow h-px bg-gray-300" />
            <span className="mx-2 text-sm text-gray-500">Atau login dengan</span>
            <div className="flex-grow h-px bg-gray-300" />
          </div>

          <div className="space-y-3">
            <button className="w-full flex items-center justify-center border py-2 rounded-md hover:bg-gray-100 transition duration-200">
              <FaGoogle className="text-red-500 mr-2" />
              Login with Google
            </button>
            <button className="w-full flex items-center justify-center border py-2 rounded-md hover:bg-gray-100 transition duration-200">
              <FaFacebookF className="text-blue-600 mr-2" />
              Login with Facebook
            </button>
          </div>
        </div>

        {/* Illustration */}
        <div className="hidden md:flex w-1/2 items-center justify-center">
          <img
            src="/illustration_password.png" // ganti dengan path ilustrasi kamu
            alt="Forgot Password Illustration"
            className="w-full max-w-xs"
          />
        </div>
      </div>
    </div>
  );
};

export default LupaPassword;
