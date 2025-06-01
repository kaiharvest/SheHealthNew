import React from "react";

const Register = () => {
  return (
    <div
      className="min-h-screen flex flex-col md:flex-row w-full items-center justify-center font-poppins p-4"
      style={{
        background:
          "linear-gradient(135deg, rgba(255,255,255,1) 0%, rgba(227,108,197,0.2) 100%)",
      }}
    >
      {/* Left side illustration */}
      <div className="md:w-1/2 flex items-center justify-center p-16">
        <img
          src="pana.svg"
          alt="Doctor Illustration"
          className="w-full h-auto"
        />
      </div>

      {/* Right side form */}
      <div className="md:w-1/2 p-16">
        <h2
          style={{ color: "#E36CC5" }}
          className="justify-center text-3xl font-bold flex items-center gap-2 mb-1 "
        >
          <img src="/LogoNew.png" alt="Logo" className="w-8 h-9" />
          SheHealth
        </h2>
        <h3 className="justify-center text-3xl font-bold flex items-center gap-2 text-xl font-semibold text-gray-800 mb-6">
          Pendaftaran
        </h3>
        <form className="space-y-4">
          <div className="flex items-center border border-black rounded px-3">
            <img
              src="icons/ic_baseline-person.svg"
              alt="person"
              className="w-5 h-5 mr-3 "
            />
            <input
              type="text"
              placeholder="Masukkan nama anda"
              className="w-full py-3 outline-none bg-transparent"
              required
            />
          </div>
          <div className="flex items-center border border-black rounded px-3">
            <img src="icons/Vector.svg" alt="email" className="w-5 h-5 mr-3 " />
            <input
              type="email"
              placeholder="Masukkan email anda"
              className="w-full py-3 outline-none bg-transparent"
              required
            />
          </div>
          <div className="flex items-center border border-black rounded px-3">
            <img src="icons/Lock.svg" alt="lock" className="w-5 h-5 mr-3 " />
            <input
              type="password"
              placeholder="Masukkan password anda"
              className="w-full py-3 outline-none bg-transparent"
              required
            />
          </div>
          <div className="flex items-center border border-black rounded px-3">
            <img src="icons/Lock.svg" alt="lock" className="w-5 h-6 mr-3 " />
            <input
              type="password"
              placeholder="Konfirmasi kata sandi anda"
              className="w-full py-3 outline-none bg-transparent"
              required
            />
          </div>
          <div className="flex justify-center items-center">
            <button
              type="submit"
              style={{ backgroundColor: "#E36CC5" }}
              className="text-white px-16 py-2 rounded-full shadow hover:opacity-80"
            >
              Daftar
            </button>
          </div>
        </form>
        <p className="text-sm text-center mt-4">
          Sudah memiliki akun?{" "}
          <a href="#" className="text-pink-500 hover:underline">
            Masuk
          </a>
        </p>
      </div>
    </div>
  );
};

export default Register;