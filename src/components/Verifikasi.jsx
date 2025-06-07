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
<div className="h-screen flex items-center justify-center px-4 bg-[#f8f8f8]">
  <div className="bg-white rounded-2xl shadow-md max-w-6xl w-full flex flex-col lg:flex-row p-6 lg:p-14 gap-10">
        {/* Kiri: Form */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center">

          {/* Tombol kembali */}
          <button
            onClick={() => navigate("/lupapassword")}
            className="flex items-center text-sm text-gray-600 mb-4 hover:underline w-fit"
          >
            <ArrowLeft size={16} className="mr-1" /> Sebelumnya
          </button>

          {/* Logo */}
          <div className="text-pink-700 font-bold text-3xl flex items-center justify-center gap-2 mb-4">
            <img src="/LogoNew.png" alt="Logo" className="w-8 h-9" />
            <span style={{ color: "#E36CC5" }}>SheHealth</span>
          </div>

          {/* Judul dan instruksi */}
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Verifikasi kode</h2>
          <p className="text-gray-600 text-sm mb-6 leading-relaxed">
            Kami telah mengirimkan kode 4 digit ke email Anda. Masukkan kode tersebut di bawah ini.
          </p>

          {/* Input kode */}
          <label className="block text-sm text-gray-700 mb-1 font-medium">
            Masukkan Kode
          </label>
          <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2 mb-3 bg-white shadow-sm">
            <input
              type="text"
              className="flex-1 outline-none text-sm placeholder-gray-400"
              placeholder="7789BM6X"
              value={kode}
              onChange={(e) => setKode(e.target.value)}
            />
            <Eye size={18} className="text-gray-400" />
          </div>

          {/* Kirim ulang */}
          <p className="text-sm text-gray-600 mb-6">
            Belum menerima kode?{" "}
            <span
              onClick={handleKirimUlang}
              className={`${bisaKirimUlang
                ? "text-pink-600 hover:underline cursor-pointer"
                : "text-gray-400 cursor-not-allowed"
                }`}
            >
              Kirim Ulang
            </span>
          </p>

          {/* Tombol Verifikasi */}
          <button
            onClick={() => navigate("/login")}
            className="w-full bg-[#E36CC5] hover:bg-pink-600 text-white py-3 rounded-full text-sm font-semibold shadow-md transition duration-300"
          >
            Verifikasi
          </button>

          {/* Timer */}
          <p className="text-center text-xs text-gray-500 mt-4">
            Kirim ulang kode dalam {waktu > 0 ? `${waktu} detik` : "sekarang"}
          </p>
        </div>

        {/* Kanan: Ilustrasi */}
        <div className="hidden lg:flex w-1/2 items-center justify-center">
          <img
            src="/verifikasi-ilustrasi.png"
            alt="Ilustrasi Verifikasi"
            className="max-w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default Verifikasi;
