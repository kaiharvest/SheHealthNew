import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Login submitted");
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center font-poppins"
      style={{
        background:
          "linear-gradient(135deg, rgba(255,255,255,1) 0%, rgba(227,108,197,0.2) 100%)",
      }}
    >
      {/* Form Section */}
      <div className="md:w-1/2 p-8">
        <div className="text-pink-700 font-bold text-2xl flex items-center justify-center gap-2 mb-1">
          <img src="/LogoNew.png" alt="Logo" className="w-8 h-9" />
          <span style={{ color: "#E36CC5" }}>SheHealth</span>
        </div>
        <h2 className="flex justify-center items-center text-2xl font-semibold text-gray-700 mt-4 mb-6">
          Masuk
        </h2>
        <form onSubmit={handleLogin}>
          <div className="mb-2 px-20 py-2">
            <div className="flex items-center border border-black rounded px-3">
              <img
                src="icons/Vector.svg"
                alt="email"
                className="w-5 h-5 mr-3 "
              />
              <input
                type="email"
                placeholder="Masukkan email anda"
                className="w-full py-3 outline-none bg-transparent"
                required
              />
            </div>
          </div>
          <div className="mb-3 px-20 py-2">
            <div className="flex items-center border border-black rounded px-3">
              <img src="icons/Lock.svg" alt="email" className="w-5 h-5 mr-3" />
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Masukkan kata sandi anda"
                className="w-full py-3 outline-none bg-transparent"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="text-gray-500 ml-2"
              ></button>
            </div>
          </div>
          <div className="flex justify-between items-center text-sm px-20 mb-6">
            <label className="flex items-center">
              <input type="checkbox" className="mr-2" />
              Ingat Saya
            </label>
            <a href="#" className="text-gray-500 hover:underline">
              Lupa kata sandi?
            </a>
          </div>
          <div className="flex justify-center items-center">
            <button
              type="submit"
              style={{ backgroundColor: "#E36CC5" }}
              className="text-white px-16 py-2 rounded-full shadow hover:opacity-80"
            >
              Masuk
            </button>
          </div>
          <div className="flex items-center justify-center my-4">
            <span className="mx-2 text-sm text-gray-400">OR</span>
          </div>
          <div className="flex flex-col items-center space-y-3">
            <button
              type="button"
              className="flex items-center justify-center border shadow-md rounded-lg px-8 py-2 text-black hover:bg-gray-100"
            >
              <img
                src="https://www.svgrepo.com/show/355037/google.svg"
                alt="Google"
                className="h-5 w-5 mr-2"
              />
              Login with Google
            </button>
            <button
              type="button"
              className="flex items-center justify-center border shadow-md rounded-lg px-6 py-2 text-black hover:bg-gray-100"
            >
              <img
                src="https://www.svgrepo.com/show/475647/facebook-color.svg"
                alt="Facebook"
                className="h-5 w-5 mr-2"
              />
              Login with Facebook
            </button>
          </div>
          <p className="mt-4 text-sm text-center">
            Belum memiliki akun?{" "}
            <Link
              to="/register"
              style={{ color: "#E36CC5" }}
              className="hover:underline"
            >
              Daftar
            </Link>
          </p>
        </form>
      </div>

      {/* Illustration Section */}
      <div className=" md:w-1/2 p-8">
        <div className="text-black-700 max-w-md">
          <h3 className="text-m mb-4">
            Platform <span style={{ color: "#E36CC5" }}>konsultasi online</span>{" "}
            untuk kebutuhan Anda. Dapatkan saran dari para ahli kapan saja
            <br /> dan dimana saja.
          </h3>

          <ul className="space-y-2 text-sm">
            <li className="flex items-start">
              <span className="text-black-500 mr-2">
                <img src="icons/Frame.svg" alt="frame" className="w-6" />
              </span>{" "}
              Konsultasi dengan dokter berpengalaman
            </li>
            <li className="flex items-start">
              <span className="text-black-500 mr-2">
                <img src="icons/Frame.svg" alt="frame" className="w-6" />
              </span>{" "}
              Privasi dan keamanan data terjamin
            </li>
            <li className="flex items-start">
              <span className="text-black-500 mr-2">
                <img src="icons/Frame.svg" alt="frame" className="w-6" />
              </span>{" "}
              Biaya terjangkau dengan layanan berkualitas
            </li>
          </ul>
          <img
            src="rafiki.svg"
            alt="Logo"
            className="mt-5 w-96 md:w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
};
export default Login;