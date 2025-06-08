import React, { useState, useEffect } from "react";
import { Eye, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Verifikasi = () => {
  const [kode, setKode] = useState("");
  const [waktu, setWaktu] = useState(60);
  const [bisaKirimUlang, setBisaKirimUlang] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (waktu > 0) {
      const timer = setInterval(() => setWaktu((prev) => prev - 1), 1000);
      return () => clearInterval(timer);
    } else {
      setBisaKirimUlang(true);
    }
  }, [waktu]);

  const handleKirimUlang = () => {
    if (bisaKirimUlang) {
      setWaktu(60);
      setBisaKirimUlang(false);
      console.log("Kode verifikasi dikirim ulang.");
    }
  };

  return (
    <div className="flex justify-center px-6 mt-4 mb-6">
      <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 max-w-6xl w-full flex flex-col lg:flex-row p-6 sm:p-10 gap-6 sm:gap-10">
        {/* Form Verifikasi - Kiri */}
        <div className="px-8 lg:w-1/2 flex flex-col justify-center">
          {/* Tombol Kembali */}
          <button
            onClick={() => navigate("/lupapassword")}
            className="flex items-center text-sm text-gray-600 mb-12 hover:underline w-fit"
          >
            <ArrowLeft size={16} className="mr-1" />
            Sebelumnya
          </button>

          {/* Logo dan Judul */}
          <div className="text-[#E36CC5] font-bold text-3xl flex items-center justify-center gap-2 mb-14">
            <img src="/LogoNew.png" alt="Logo" className="w-8 h-9" />
            <span style={{ color: "#E36CC5" }}>SheHealth</span>
          </div>

          {/* Judul Form */}
          <h2 className="text-2xl font-bold text-gray-800 mb-2">
            Verifikasi kode
          </h2>
          <p className="text-gray-600 text-sm mb-6 leading-relaxed">
            Kami telah mengirimkan kode 4 digit ke email Anda. Masukkan kode
            tersebut di bawah ini.
          </p>

          {/* Input Kode */}
          <label className="block text-sm text-gray-700 mb-1 font-medium">
            Masukkan Kode
          </label>
          <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2 mb-3 bg-white shadow-sm">
            <input
              type="text"
              className="flex-1 outline-none text-sm placeholder-gray-400"
              placeholder="7789BM6X"
              value="7789BM6X"
              onChange={(e) => setKode(e.target.value)}
            />
            <Eye size={18} className="text-gray-400" />
          </div>

          {/* Kirim Ulang */}
          <p className="text-sm text-gray-600 mb-6">
            Belum menerima kode?{" "}
            <span
              onClick={handleKirimUlang}
              className={`${
                bisaKirimUlang
                  ? "text-[#E36CC5] hover:underline cursor-pointer"
                  : "text-gray-400 cursor-not-allowed"
              }`}
            >
              Kirim Ulang
            </span>
          </p>

          {/* Tombol Verifikasi */}
          <div className="flex justify-center items-center mt-3">
            <button
              onClick={() => navigate("/resetpassword")}
              className="text-white px-4 py-2 rounded-full shadow-lg bg-[#E36CC5] hover:bg-pink-400 transition duration-200 w-32"
            >
              Verifikasi
            </button>
          </div>

          {/* Timer */}
          <p className="text-center text-xs text-gray-500 mt-4">
            Kirim ulang kode dalam {waktu > 0 ? `${waktu} detik` : "sekarang"}
          </p>
        </div>

        {/* Kanan: Ilustrasi */}
        <div className="hidden lg:flex w-1/2 items-center justify-center">
          <img
            src="/verifikasi.png"
            alt="Ilustrasi Verifikasi"
            className="w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default Verifikasi;
