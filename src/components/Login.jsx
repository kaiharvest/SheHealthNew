import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { IoArrowBack } from "react-icons/io5";

const Login = ({ onLoginSuccess }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [emailInput, setEmailInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    const dummyUser = {
      nama: "Hekel Pintar",
      email: "hekel@gmail.com",
      tanggalLahir: "14 Januari 2006",
      umur: "19", 
      telepon: "08123456789",
      password: "123456",
    };

    if (
      emailInput === dummyUser.email &&
      passwordInput === dummyUser.password
    ) {
      localStorage.setItem("isLoggedIn", "true");
      localStorage.setItem("nama", dummyUser.nama);
      localStorage.setItem("email", dummyUser.email);
      localStorage.setItem("tanggalLahir", dummyUser.tanggalLahir);
      localStorage.setItem("umur", dummyUser.umur);
      localStorage.setItem("telepon", dummyUser.telepon);

      if (onLoginSuccess) onLoginSuccess(dummyUser);

      navigate("/");
    } else {
      alert("Email atau password salah!");
    }
  };

  return (
    <div className="px-4 py-10 md:py-8 flex justify-center items-start md:items-center bg-gray-50 min-h-screen">
      <div className="bg-white shadow-md rounded-lg flex flex-col md:flex-row w-full max-w-4xl">
        {/* Form Section */}
        <div className="w-full md:w-1/2 p-6 md:p-8 max-w-md">
          {/* Back Navigation */}
          <div
            onClick={() => navigate("/")}
            className="flex items-center text-sm text-gray-600 cursor-pointer hover:text-[#E36CC5] transition mb-4 w-fit"
          >
            <IoArrowBack className="mr-1" />
            Sebelumnya
          </div>

          {/* Logo */}
          <div className="text-[#E36CC5] font-bold text-2xl flex items-center justify-center gap-2 mb-1">
            <img src="/LogoNew.png" alt="Logo SheHealth" className="w-8 h-9" />
            <span>SheHealth</span>
          </div>

          <h2 className="text-2xl font-semibold text-gray-700 mt-4 mb-6 text-center">
            Masuk
          </h2>

          <form onSubmit={handleLogin}>
            {/* Email */}
            <div className="mb-4">
              <div className="flex items-center border border-black rounded px-3">
                <img
                  src="icons/Vector.svg"
                  alt="Ikon Email"
                  className="w-5 h-5 mr-3"
                />
                <input
                  type="email"
                  placeholder="Masukkan email anda"
                  className="w-full py-3 outline-none bg-transparent"
                  required
                  value={emailInput}
                  onChange={(e) => setEmailInput(e.target.value)}
                />
              </div>
            </div>

            {/* Password */}
            <div className="mb-4">
              <div className="flex items-center border border-black rounded px-3">
                <img
                  src="icons/Lock.svg"
                  alt="Ikon Password"
                  className="w-5 h-5 mr-3"
                />
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Masukkan kata sandi anda"
                  className="w-full py-3 outline-none bg-transparent"
                  required
                  value={passwordInput}
                  onChange={(e) => setPasswordInput(e.target.value)}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="ml-2 focus:outline-none"
                >
                  <img
                    src={showPassword ? "icons/Hidden.png" : "icons/eye.png"}
                    alt={
                      showPassword ? "Sembunyikan password" : "Lihat password"
                    }
                    className="w-5 h-5"
                  />
                </button>
              </div>
            </div>

            {/* Ingat saya + Lupa password */}
            <div className="flex justify-between items-center text-sm mb-6">
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" />
                Ingat Saya
              </label>
              <Link
                to="/lupapassword"
                className="text-gray-500 hover:underline"
              >
                Lupa kata sandi?
              </Link>
            </div>

            {/* Tombol Masuk */}
            <div className="flex justify-center mb-6">
              <button
                type="submit"
                className="bg-[#E36CC5] text-white px-16 py-2 rounded-full shadow hover:opacity-80 w-full max-w-xs"
              >
                Masuk
              </button>
            </div>

            {/* Garis OR */}
            <div className="flex items-center justify-center my-4">
              <span className="mx-2 text-sm text-gray-400">OR</span>
            </div>

            {/* Tombol Sosial */}
            <div className="flex flex-col items-center space-y-4">
              <button
                type="button"
                className="flex items-center justify-center border shadow-md rounded-lg px-6 py-2 text-black hover:bg-gray-100 max-w-xs"
              >
                <img
                  src="https://www.svgrepo.com/show/355037/google.svg"
                  alt="Google Login"
                  className="h-5 w-5 mr-2"
                />
                Login dengan Google
              </button>
              <button
                type="button"
                className="flex items-center justify-center border shadow-md rounded-lg px-4 py-2 text-black hover:bg-gray-100 max-w-xs"
              >
                <img
                  src="https://www.svgrepo.com/show/475647/facebook-color.svg"
                  alt="Facebook Login"
                  className="h-5 w-5 mr-2"
                />
                Login dengan Facebook
              </button>
            </div>

            {/* Link ke Register */}
            <p className="mt-4 text-sm text-center">
              Belum memiliki akun?{" "}
              <Link to="/register" className="text-[#E36CC5] hover:underline">
                Daftar
              </Link>
            </p>
          </form>
        </div>

        {/* Ilustrasi Kanan */}
        <div className="w-full md:w-1/2 p-6 md:p-8 max-w-md flex flex-col justify-center">
          <div className="text-gray-700 max-w-md mx-auto">
            <h3 className="text-base md:text-lg mb-4 text-center md:text-left">
              Platform <span className="text-[#E36CC5]">konsultasi online</span>{" "}
              untuk kebutuhan Anda. Dapatkan saran dari para ahli kapan saja dan
              dimana saja.
            </h3>

            <ul className="space-y-2 text-sm">
              {[
                "Konsultasi dengan dokter berpengalaman",
                "Privasi dan keamanan data terjamin",
                "Biaya terjangkau dengan layanan berkualitas",
              ].map((item, idx) => (
                <li key={idx} className="flex items-start">
                  <img
                    src="icons/Frame.svg"
                    alt="Checklist"
                    className="w-6 mr-2"
                  />
                  {item}
                </li>
              ))}
            </ul>

            <img
              src="rafiki.svg"
              alt="Ilustrasi Konsultasi"
              className="mt-5 h-auto max-w-xs mx-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
