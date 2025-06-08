// src/pages/Konsultasi.jsx
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const doctorsData = [
  { name: "dr. Jennie, Sp.OG", specialization: "Spesialis Kandungan & Kebidanan", image: "icons/dokter-konsul.svg" },
  { name: "dr. Rose, Sp.S", specialization: "Spesialis Saraf", image: "icons/dokter-konsul.svg" },
  { name: "dr. Lisa", specialization: "Dokter Gigi Umum", image: "icons/dokter-konsul.svg" },
  { name: "dr. Jisoo, Sp.JP", specialization: "Spesialis Jantung & Pembuluh Darah", image: "icons/dokter-konsul.svg" },
  { name: "dr. Giselle, Sp.M", specialization: "Spesialis Mata", image: "icons/dokter-konsul.svg" },
  { name: "dr. Karina", specialization: "Dokter Kulit", image: "icons/dokter-konsul.svg" },
  { name: "dr. Irene", specialization: "Dokter Gizi", image: "icons/dokter-konsul.svg" },
  { name: "dr. Wendy", specialization: "Dokter Umum", image: "icons/dokter-konsul.svg" },
  { name: "dr. Yeri, Sp.OG", specialization: "Spesialis Kandungan & Kebidanan", image: "icons/dokter-konsul.svg" },
  { name: "dr. Mina, Sp.S", specialization: "Spesialis Saraf", image: "icons/dokter-konsul.svg" },
  { name: "dr. Jihyo", specialization: "Dokter Gigi Umum", image: "icons/dokter-konsul.svg" },
  { name: "dr. Hansohe, Sp.JP", specialization: "Spesialis Jantung & Pembuluh Darah", image: "icons/dokter-konsul.svg" },
  { name: "dr. Miko, Sp.M", specialization: "Spesialis Mata", image: "icons/dokter-konsul.svg" },
  { name: "dr. Nia", specialization: "Dokter Kulit", image: "icons/dokter-konsul.svg" },
  { name: "dr. Sari", specialization: "Dokter Gizi", image: "icons/dokter-konsul.svg" },
  { name: "dr. Putri", specialization: "Dokter Umum", image: "icons/dokter-konsul.svg" },
].map((d) => ({
  ...d,
  rating: 4.9,
  experience: "7 tahun",
  price: "Rp. 90.000",
  online: true,
}));

const DoctorCard = ({ doctor }) => {
  const urlFriendlyName = doctor.name.replace(/\s+/g, "-").toLowerCase();
  const navigate = useNavigate();

  const handleBuatJanji = () => navigate("/buatjanji", { state: { doctor } });
  const handleChat = () => navigate("/chat", { state: { doctor } });

  return (
    <div className="bg-white rounded-2xl shadow-lg p-4 w-full sm:w-[300px] m-2 hover:shadow-xl transition-all duration-300">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
        <div className="flex items-center gap-3">
          <img src={doctor.image} alt={doctor.name} className="w-14 h-14 rounded-full border-2 border-[#E36CC5] object-cover aspect-square" />
          <div>
            <h3 className="font-semibold text-sm text-gray-900">{doctor.name}</h3>
            <p className="text-xs text-gray-500">{doctor.specialization}</p>
          </div>
        </div>
        <Link to={`/profil/${urlFriendlyName}`} className="text-sm text-[#E36CC5] hover:underline mt-2 sm:mt-0">
          Profil
        </Link>
      </div>

      <div className="mt-3 text-xs text-gray-600">
        <div className="flex items-center justify-between mb-1">
          <span className="text-yellow-400">★★★★★</span>
          <span className="ml-2">{doctor.rating}</span>
          {doctor.online && <span className="text-green-500 ml-auto">🟢 Online</span>}
        </div>
        <p>📅 Pengalaman: {doctor.experience}</p>
        <p>💎 {doctor.price} / bulan</p>
      </div>

      <div className="mt-4 flex flex-col sm:flex-row gap-2 justify-center">
        <button onClick={handleBuatJanji} className="text-xs font-semibold px-5 py-2 bg-[#E36CC5] text-white rounded-full border border-[#E36CC5] hover:bg-white hover:text-[#E36CC5] transition">
          Buat Janji
        </button>
        <button onClick={handleChat} className="text-xs font-semibold px-5 py-2 border border-gray-400 rounded-full hover:bg-white hover:text-[#E36CC5] transition">
          Chat
        </button>
      </div>
    </div>
  );
};

const Konsultasi = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredDoctors = doctorsData.filter(
    (doctor) =>
      doctor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      doctor.specialization.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="px-4 sm:px-6 md:px-24 py-10 font-poppins">
      <div className="mb-8 relative w-full max-w-3xl mx-auto">
        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
          <img src="icons/search.svg" alt="Search Icon" className="h-6 w-6" />
        </div>
        <input
          type="text"
          placeholder="Cari dokter, spesialis..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full px-12 py-3 border border-gray-300 rounded-full focus:outline-none shadow-sm placeholder:text-sm"
        />
      </div>

      <div className="bg-[#FFEFFB] border-l-8 border-[#E36CC5] rounded-xl flex flex-col md:flex-row items-center overflow-hidden">
        <div className="flex-1 mx-6 md:mx-14">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900">Promo Khusus Hari Kesehatan Wanita</h2>
          <p className="text-sm md:text-base mt-2">
            Dapatkan <span className="font-bold text-red-600">Diskon 30%</span> untuk konsultasi dengan dokter spesialis kandungan. Berlaku hingga akhir bulan.
          </p>
          <button className="mt-4 bg-[#E36CC5] text-white text-sm px-6 py-2 rounded-full hover:opacity-90">
            Lihat Detail
          </button>
        </div>
        <img src="promo.png" alt="Promo" className="w-[280px] sm:w-[300px] md:w-[400px] lg:w-[500px] h-auto mt-6 md:mt-0 md:ml-6 rounded-lg" />
      </div>

      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 justify-items-center">
        {filteredDoctors.length > 0 ? (
          filteredDoctors.map((doctor, index) => <DoctorCard key={index} doctor={doctor} />)
        ) : (
          <p className="text-gray-500 text-sm">Dokter tidak ditemukan.</p>
        )}
      </div>
    </div>
  );
};

export default Konsultasi;
