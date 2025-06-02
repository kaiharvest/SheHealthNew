import React from "react";
import { Link } from "react-router-dom";

const doctors = new Array(9).fill({
  name: "dr. Rose, Sp.KK",
  rating: 4.9,
  experience: "7 tahun",
  price: "Rp. 90.000",
  online: true,
  image: "https://via.placeholder.com/100",
});

const DoctorCard = ({ doctor }) => {
  const urlFriendlyName = doctor.name.replace(/\s+/g, "-").toLowerCase();

  return (
    <div className="bg-white rounded-2xl shadow-lg p-4 w-[280px] m-4 hover:shadow-xl transition-all duration-300">
      <div className="flex justify-between items-start">
        <div className="flex items-center gap-3">
          <img
            src={doctor.image}
            alt={doctor.name}
            className="w-14 h-14 rounded-full border-2 border-[#E36CC5]"
          />
          <div>
            <h3 className="font-semibold text-sm text-gray-900">{doctor.name}</h3>
            <p className="text-xs text-gray-500">Spesialis Kulit</p>
          </div>
        </div>
        <Link
          to={`/profil/${urlFriendlyName}`}
          className="text-sm text-[#E36CC5] hover:underline"
        >
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

      <div className="mt-4 flex gap-2 justify-center">
        <button className="text-xs font-semibold px-5 py-2 bg-[#E36CC5] text-white rounded-full border border-[#E36CC5] hover:bg-white hover:text-[#E36CC5] transition">
          Buat Janji
        </button>
        <button className="text-xs font-semibold px-5 py-2 border border-gray-400 rounded-full hover:bg-[#E36CC5] hover:text-white transition">
          Chat
        </button>
      </div>
    </div>
  );
};

const Konsultasi = () => {
  return (
    <div className="px-6 md:px-24 py-10 font-poppins">
      {/* Search */}
      <div className="mb-8 relative w-full max-w-3xl mx-auto">
        <div className="absolute inset-y-0 left-0 pl-4 flex items-center">
          <img src="/icons/search.svg" alt="Search Icon" className="h-6 w-6" />
        </div>
        <div className="absolute inset-y-0 right-0 pr-4 flex items-center">
          <img src="/icons/setting.svg" alt="Settings Icon" className="h-5 w-5" />
        </div>
        <input
          type="text"
          placeholder="Cari dokter, spesialis..."
          className="w-full px-12 py-3 border border-gray-300 rounded-full focus:outline-none shadow-sm placeholder:text-sm"
        />
      </div>

      {/* Promo */}
      <div className="bg-[#FFEFFB] border-l-8 border-[#E36CC5] rounded-xl flex flex-col md:flex-row items-center p-6 mb-10">
        <div className="flex-1">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900">
            Promo Khusus Hari Kesehatan Wanita
          </h2>
          <p className="text-sm md:text-base mt-2">
            Dapatkan <span className="font-bold text-red-600">Diskon 30%</span> untuk konsultasi
            dengan dokter spesialis kandungan. Berlaku hingga akhir bulan.
          </p>
          <button className="mt-4 bg-[#E36CC5] text-white text-sm px-6 py-2 rounded-full hover:opacity-90">
            Lihat Detail
          </button>
        </div>
        <img
          src="/promo.png"
          alt="Promo"
          className="w-[300px] md:w-[400px] lg:w-[500px] h-auto mt-6 md:mt-0 md:ml-6 rounded-lg"
        />
      </div>

      {/* Doctor Cards */}
      <div className="flex flex-wrap justify-center">
        {doctors.map((doctor, index) => (
          <DoctorCard key={index} doctor={doctor} />
        ))}
      </div>
    </div>
  );
};

export default Konsultasi;
