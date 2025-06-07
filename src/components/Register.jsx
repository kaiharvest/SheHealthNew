import React from "react";

const Register = () => {
  return (
    <div
      className="flex flex-col md:flex-row w-full items-center md:justify-center font-poppins px-6 pt-10 pb-2 md:py-10 bg-gradient-to-br from-white to-pink-100"
    >
      {/* Left Illustration */}
      <div className="md:w-1/2 hidden md:flex items-center justify-center p-6">
        <img
          src="pana.svg"
          alt="Doctor Illustration"
          className="w-full max-w-md h-auto"
        />
      </div>

      {/* Right Form */}
      <div className="md:w-1/2 w-full max-w-md bg-white shadow-lg rounded-2xl p-8 md:p-10 font-poppins mb-10">
        <div className="text-[#E36CC5] font-bold text-2xl flex items-center justify-center gap-2 mb-1">
          <img src="/LogoNew.png" alt="Logo" className="w-8 h-9" />
          <span style={{ color: "#E36CC5" }}>SheHealth</span>
        </div>
        <h3 className="text-center text-xl font-semibold text-gray-800 mb-6">
          Pendaftaran
        </h3>

        <form className="space-y-4 font-poppins mb-0">
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

          <div className="flex items-center border border-gray-300 rounded-full px-4 py-2 bg-gray-50">
            <img src="icons/Vector.svg" alt="email" className="w-5 h-5 mr-3" />
            <input
              type="email"
              placeholder="Masukkan email anda"
              className="w-full outline-none bg-transparent text-sm"
              required
            />
          </div>

          <div className="flex items-center border border-gray-300 rounded-full px-4 py-2 bg-gray-50">
            <img src="icons/Lock.svg" alt="lock" className="w-5 h-5 mr-3" />
            <input
              type="password"
              placeholder="Masukkan password anda"
              className="w-full outline-none bg-transparent text-sm"
              required
            />
          </div>

          <div className="flex items-center border border-gray-300 rounded-full px-4 py-2 bg-gray-50">
            <img src="icons/Lock.svg" alt="lock" className="w-5 h-5 mr-3" />
            <input
              type="password"
              placeholder="Konfirmasi kata sandi anda"
              className="w-full outline-none bg-transparent text-sm"
              required
            />
          </div>

          <div className="flex justify-center items-center">
            <button
              type="submit"
              className="bg-[#E36CC5] text-white px-12 py-3 rounded-full shadow-lg hover:bg-pink-600 transition duration-200"
            >
              Daftar
            </button>
          </div>
        </form>

        {/* Footer text with margin top sama dengan margin bottom card */}
        <p className="text-sm text-center mt-10">
          Sudah memiliki akun?{" "}
          <a href="Login" className="text-[#E36CC5] hover:underline font-medium">
            Masuk
          </a>
        </p>
      </div>
    </div>
  );
};

export default Register;
