import React, { useState } from "react";
import { Link } from "react-router-dom";

const doctors = [
  {
    name: "dr. Ayu Lestari, Sp.OG",
    specialization: "Spesialis Kandungan & Kebidanan",
    rating: 4.9,
    experience: "8 tahun",
    price: "Rp. 90.000",
    online: true,
    image: "https://via.placeholder.com/100",
  },
  {
    name: "dr. Budi Santoso, Sp.S",
    specialization: "Spesialis Saraf",
    rating: 4.8,
    experience: "10 tahun",
    price: "Rp. 90.000",
    online: true,
    image: "https://via.placeholder.com/100",
  },
  {
    name: "dr. Cindy Ramadhani",
    specialization: "Dokter Gigi Umum",
    rating: 4.7,
    experience: "5 tahun",
    price: "Rp. 90.000",
    online: true,
    image: "https://via.placeholder.com/100",
  },
  {
    name: "dr. Dimas Hakim, Sp.JP",
    specialization: "Spesialis Jantung & Pembuluh Darah",
    rating: 4.9,
    experience: "12 tahun",
    price: "Rp. 90.000",
    online: true,
    image: "https://via.placeholder.com/100",
  },
  {
    name: "dr. Erika Natalia, Sp.M",
    specialization: "Spesialis Mata",
    rating: 4.8,
    experience: "7 tahun",
    price: "Rp. 90.000",
    online: true,
    image: "https://via.placeholder.com/100",
  },
  {
    name: "dr. Farhan Yusuf, Sp.KK",
    specialization: "Dokter Kulit",
    rating: 4.6,
    experience: "6 tahun",
    price: "Rp. 90.000",
    online: true,
    image: "https://via.placeholder.com/100",
  },
  {
    name: "dr. Gina Rosalia, Sp.KK",
    specialization: "Dokter Kulit",
    rating: 4.7,
    experience: "9 tahun",
    price: "Rp. 90.000",
    online: true,
    image: "https://via.placeholder.com/100",
  },
  {
    name: "dr. Hendra Wijaya",
    specialization: "Dokter Umum",
    rating: 4.5,
    experience: "4 tahun",
    price: "Rp. 90.000",
    online: true,
    image: "https://via.placeholder.com/100",
  },
  {
    name: "dr. Intan Permatasari",
    specialization: "Dokter Umum",
    rating: 4.6,
    experience: "6 tahun",
    price: "Rp. 90.000",
    online: true,
    image: "https://via.placeholder.com/100",
  },
];

const Konsultasi = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedSpecialization, setSelectedSpecialization] = useState("Semua");

  const specializations = [
    "Semua",
    ...Array.from(new Set(doctors.map((d) => d.specialization))),
  ];

  const filteredDoctors = doctors.filter((doctor) => {
    const matchesSearch = (doctor.name + " " + doctor.specialization)
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesSpecialization =
      selectedSpecialization === "Semua" || doctor.specialization === selectedSpecialization;
    return matchesSearch && matchesSpecialization;
  });

  return (
    <div className="px-6 md:px-24 py-10 font-poppins">
      {/* Search and Filter */}
      <div className="flex flex-col md:flex-row gap-4 mb-8">
        <div className="relative flex-1">
          <div className="absolute inset-y-0 left-3 flex items-center">
            <img src="/icons/search.svg" alt="Search Icon" className="h-5 w-5" />
          </div>
          <input
            type="text"
            placeholder="Cari dokter..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full py-3 px-10 border border-gray-300 rounded-full focus:outline-none"
          />
        </div>
        <div>
          <select
            value={selectedSpecialization}
            onChange={(e) => setSelectedSpecialization(e.target.value)}
            className="py-3 px-6 border border-gray-300 rounded-full focus:outline-none"
          >
            {specializations.map((spec, idx) => (
              <option key={idx} value={spec}>
                {spec}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Promo Section */}
      <div className="bg-[#FFEFFB] border-l-8 border-[#E36CC5] rounded-xl flex justify-between items-center px-8 py-6 mb-10">
        <div className="max-w-md">
          <h2 className="text-2xl font-bold mb-2">Promo Hari Kesehatan Wanita!</h2>
          <p className="text-sm mb-4">
            Dapatkan diskon 30% untuk konsultasi dengan dokter pilihan.
          </p>
          <button className="bg-[#E36CC5] text-white px-5 py-2 rounded-full text-sm">
            Lihat Detail
          </button>
        </div>
        <img src="/promo.png" alt="Promo" className="w-48 h-32 object-cover rounded-md" />
      </div>

      {/* Doctor Cards */}
      <div className="flex flex-wrap justify-center">
        {filteredDoctors.length > 0 ? (
          filteredDoctors.map((doctor, index) => {
            const urlFriendlyName = doctor.name.replace(/\s+/g, "-").toLowerCase();

            return (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-md p-5 w-[280px] m-4 flex flex-col justify-between"
              >
                <div>
                  <div className="flex justify-between items-start">
                    <div className="flex items-center gap-3">
                      <img
                        src={doctor.image}
                        alt={doctor.name}
                        className="w-14 h-14 rounded-full border-2 border-[#E36CC5]"
                      />
                      <div>
                        <h3 className="font-semibold text-sm">{doctor.name}</h3>
                        <p className="text-xs text-gray-500">{doctor.specialization}</p>
                      </div>
                    </div>
                    <Link to={`/profil/${urlFriendlyName}`} className="text-sm text-[#E36CC5]">
                      Profil
                    </Link>
                  </div>

                  <div className="mt-3 text-xs">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-yellow-400">★★★★★</span>
                      <span className="ml-2">{doctor.rating}</span>
                      {doctor.online && (
                        <span className="text-green-500 ml-auto">🟢 Online</span>
                      )}
                    </div>
                    <p>📅 Pengalaman: {doctor.experience}</p>
                    <p>💎 {doctor.price} / bulan</p>
                  </div>
                </div>

                <div className="mt-5 flex gap-3">
                  <button className="text-xs font-semibold px-6 py-2 bg-[#E36CC5] text-white rounded-full border border-[#E36CC5] hover:bg-white hover:text-[#E36CC5] transition">
                    Buat Janji
                  </button>
                  <button className="text-xs font-semibold px-6 py-2 border border-gray-400 rounded-full hover:bg-[#E36CC5] hover:text-white transition">
                    Chat
                  </button>
                </div>
              </div>
            );
          })
        ) : (
          <p className="text-gray-500 text-sm text-center mt-10">
            Dokter tidak ditemukan.
          </p>
        )}
      </div>
    </div>
  );
};

export default Konsultasi;
