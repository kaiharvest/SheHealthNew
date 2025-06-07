import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center font-poppins px-6 py-10 bg-gradient-to-br from-white min-h-screen">

      {/* Left Illustration */}
      <div className="md:w-1/2 hidden md:flex items-center justify-center p-6">
        <img
          src="pana.svg"
          alt="Doctor Illustration"
          className="w-full max-w-md h-auto"
        />
      </div>

      {/* Right Form */}
      <div className="md:w-1/2 w-full max-w-md bg-white shadow-lg rounded-2xl p-8 md:p-10 font-poppins mb-10 z-0">
        {/* Logo */}
        <div className="text-[#E36CC5] font-bold text-2xl flex items-center justify-center gap-2 mb-1">
          <img src="/LogoNew.png" alt="Logo" className="w-8 h-9" />
          <span style={{ color: "#E36CC5" }}>SheHealth</span>
        </div>

        {/* Title */}
        <h3 className="text-center text-xl font-semibold text-gray-800 mb-6">
          Pendaftaran
        </h3>

        {/* Form */}
        <form className="space-y-4 font-poppins mb-0">
          {/* Nama */}
          <div className="flex items-center border border-gray-300 rounded-full px-4 py-2 bg-gray-50">
            <img
              src="icons/ic_baseline-person.svg"
              alt="person"
              className="w-5 h-5 mr-3"
            />
            <input
              type="text"
              placeholder="Masukkan nama anda"
              className="w-full outline-none bg-transparent text-sm"
              required
            />
          </div>

          {/* Email */}
          <div className="flex items-center border border-gray-300 rounded-full px-4 py-2 bg-gray-50">
            <img src="icons/Vector.svg" alt="email" className="w-5 h-5 mr-3" />
            <input
              type="email"
              placeholder="Masukkan email anda"
              className="w-full outline-none bg-transparent text-sm"
              required
            />
          </div>

          {/* Password */}
          <div className="flex items-center border border-gray-300 rounded-full px-4 py-2 bg-gray-50">
            <img src="icons/Lock.svg" alt="lock" className="w-5 h-5 mr-3" />
            <input
              type="password"
              placeholder="Masukkan password anda"
              className="w-full outline-none bg-transparent text-sm"
              required
            />
          </div>

          {/* Konfirmasi Password */}
          <div className="flex items-center border border-gray-300 rounded-full px-4 py-2 bg-gray-50">
            <img src="icons/Lock.svg" alt="lock" className="w-5 h-5 mr-3" />
            <input
              type="password"
              placeholder="Konfirmasi kata sandi anda"
              className="w-full outline-none bg-transparent text-sm"
              required
            />
          </div>

          {/* Tombol Daftar */}
          <div className="flex justify-center mb-6">
            <button
              type="submit"
              className="bg-[#E36CC5] text-white px-16 py-2 rounded-full shadow hover:opacity-80 w-full max-w-xs"
            >
              Daftar
            </button>
          </div>
        </form>

        {/* Link ke Login */}
        <p className="mt-6 text-sm text-center">
          Sudah memiliki akun?{" "}
          <Link to="/login" className="text-[#E36CC5] hover:underline">
            Masuk
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
