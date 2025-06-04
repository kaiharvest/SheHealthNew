import React, { useState, useEffect } from "react";
import { Eye, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Verifikasi = () => {
  const [kode, setKode] = useState("");
  const [waktu, setWaktu] = useState(60);
  const [bisaKirimUlang, setBisaKirimUlang] = useState(false);
  const navigate = useNavigate();

  // Timer untuk kirim ulang kode
  useEffect(() => {
    if (waktu > 0) {
      const timer = setInterval(() => setWaktu((prev) => prev - 1), 1000);
      return () => clearInterval(timer);
    } else {
      setBisaKirimUlang(true);
    }
  }, [waktu]);

  // Fungsi kirim ulang kode
  const handleKirimUlang = () => {
    if (bisaKirimUlang) {
      setWaktu(60);
      setBisaKirimUlang(false);
      // Simulasi kirim ulang kode (bisa ditambahkan fungsi fetch API ke backend di sini)
      console.log("Kode verifikasi dikirim ulang.");
    }
  };

  return (
    <div className="min-h-screen bg-[#f8f8f8] flex items-center justify-center px-4">
      <div className="bg-white rounded-2xl shadow-md max-w-6xl w-full flex flex-col lg:flex-row p-6 lg:p-12 gap-10">
        
        {/* Kiri: Form */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center">
          
          {/* Tombol kembali */}
          <button
            onClick={() => navigate("/lupapassword")}
            className="flex items-center text-sm text-gray-600 mb-6 hover:underline w-fit"
          >
            <ArrowLeft size={16} className="mr-1" /> Sebelumnya
          </button>

          {/* Logo */}
          <img src="/logo-shehealth.svg" alt="SheHealth" className="h-8 mb-4" />

          {/* Judul */}
          <h2 className="text-2xl font-bold text-gray-800 mb-2">
            Verifikasi Kode
          </h2>
          <p className="text-gray-600 text-sm mb-6">
            Kami telah mengirimkan kode 4 digit ke email Anda. Masukkan kode
            tersebut di bawah ini.
          </p>

          {/* Input kode */}
          <label className="block text-sm text-gray-700 mb-1">
            Masukkan Kode
          </label>
          <div className="flex items-center border rounded-lg px-3 py-2 mb-3">
            <input
              type="text"
              className="flex-1 outline-none text-sm"
              placeholder="Contoh: 7789BM6X"
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
              className={`${
                bisaKirimUlang
                  ? "text-pink-600 hover:underline cursor-pointer"
                  : "text-gray-400 cursor-not-allowed"
              }`}
            >
              Kirim Ulang
            </span>
          </p>

          {/* Tombol verifikasi */}
          <button
            onClick={() => alert("Kode diverifikasi (simulasi)")}
            className="w-full bg-gradient-to-r from-pink-400 to-pink-500 hover:opacity-90 text-white py-2 rounded-full text-sm font-semibold shadow-md transition duration-300"
          >
            Verifikasi
          </button>

          {/* Timer */}
          <p className="text-center text-xs text-gray-500 mt-4">
            Kirim ulang kode dalam: {waktu > 0 ? `${waktu} detik` : "Bisa dikirim ulang"}
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
