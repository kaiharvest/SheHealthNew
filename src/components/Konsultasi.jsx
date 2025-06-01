import React from "react";

const doctors = [
  {
    name: "dr. Rose, Sp.KK",
    rating: 4.9,
    experience: "7 tahun",
    price: "Rp. 90.000",
    online: true,
    image: "https://via.placeholder.com/100",
  },
  {
    name: "dr. Jennie, Sp.KK",
    rating: 4.9,
    experience: "7 tahun",
    price: "Rp. 90.000",
    online: true,
    image: "https://via.placeholder.com/100",
  },
  {
    name: "dr. Lisa, Sp.KK",
    rating: 4.9,
    experience: "7 tahun",
    price: "Rp. 90.000",
    online: false,
    image: "https://via.placeholder.com/100",
  },
  {
    name: "dr. Jisoo, Sp.KK",
    rating: 4.9,
    experience: "7 tahun",
    price: "Rp. 90.000",
    online: true,
    image: "https://via.placeholder.com/100",
  },
  {
    name: "dr. Karina, Sp.KK",
    rating: 4.9,
    experience: "7 tahun",
    price: "Rp. 90.000",
    online: false,
    image: "https://via.placeholder.com/100",
  },
  {
    name: "dr. Giselle, Sp.KK",
    rating: 4.9,
    experience: "7 tahun",
    price: "Rp. 90.000",
    online: true,
    image: "https://via.placeholder.com/100",
  },
  {
    name: "dr. Jisoo, Sp.KK",
    rating: 4.9,
    experience: "7 tahun",
    price: "Rp. 90.000",
    online: true,
    image: "https://via.placeholder.com/100",
  },
  {
    name: "dr. Karina, Sp.KK",
    rating: 4.9,
    experience: "7 tahun",
    price: "Rp. 90.000",
    online: false,
    image: "https://via.placeholder.com/100",
  },
  {
    name: "dr. Giselle, Sp.KK",
    rating: 4.9,
    experience: "7 tahun",
    price: "Rp. 90.000",
    online: true,
    image: "https://via.placeholder.com/100",
  },
];

const DoctorCard = ({ doctor }) => (
  <div className="bg-white shadow-md rounded-xl p-4 w-full sm:w-[300px] md:w-[300px] lg:w-[280px] m-8 transform transition-transform duration-300 hover:scale-105">
    <div className="flex justify-between items-start">
      <div className="flex items-center gap-2">
        <img
          src={doctor.image}
          alt={doctor.name}
          className="w-14 h-14 rounded-full border-2"
          style={{ borderColor: "#E36CC5" }}
        />
        <div>
          <h2 className="font-bold text-sm text-black">{doctor.name}</h2>
          <p className="text-xs text-gray-500">Spesialis Kulit</p>
        </div>
      </div>
      <button className="text-sm text-pink-500 hover:underline">
        Lihat Profil
      </button>
    </div>

    <div className="mt-2 text-yellow-400 text-sm flex items-center gap-1">
      ★★★★★ <span className="ml-1 text-gray-600 text-xs">{doctor.rating}</span>
      {doctor.online && (
        <span className="ml-auto text-green-500 text-xs">🟢 Tersedia</span>
      )}
    </div>

    <div className="mt-2 text-xs text-gray-700 space-y-1">
      <p>📅 Pengalaman: {doctor.experience}</p>
      <p>💎 {doctor.price} / bulan (Membership)</p>
    </div>

    <div className="mt-3 flex gap-2">
      <button className="px-4 py-1 text-xs rounded-full border border-[#E36CC5] bg-[#E36CC5] text-white transition duration-200 hover:bg-white hover:text-black hover:border-black">
        Buat Janji
      </button>
      <button className="border border-black text-black text-xs px-4 py-1 rounded-full bg-white transition duration-200 hover:bg-[#E36CC5] hover:text-white hover:border-[#E36CC5]">
        Chat
      </button>
    </div>
  </div>
);

const Konsultasi = () => {
  return (
    <div className="px-24 py-10">
      {/* Search */}
      <div className="mb-6 relative w-full">
        <div className="absolute inset-y-0 left-0 pl-4 flex items-center">
          <img src="/icons/search.svg" alt="Search Icon" className="h-8 w-8" />
        </div>
        <div className="absolute inset-y-0 right-0 pr-4 flex items-center">
          <img src="/icons/setting.svg" alt="Search Icon" className="h-6 w-6" />
        </div>
        <input
          type="text"
          placeholder="Cari dokter, spesialis..."
          className="w-full px-16 py-2 border border-black rounded-full focus:outline-none shadow-sm"
        />
      </div>

      {/* Promo Section */}
      <div
        className="border-l-8 p-6 rounded-lg flex items-center mb-8"
        style={{
          backgroundColor: "#FFEFFB",
          borderColor: "#E36CC5",
        }}
      >
        <div className="flex-1">
          <h2 className="font-bold text-2xl text-black">
            Promo Khusus Hari Kesehatan Wanita
          </h2>
          <p className="text-xl mt-2">
            Dapatkan <span className="font-bold text-red-600"> Diskon 30%</span>{" "}
            untuk konsultasi dengan dokter <br /> spesialis kandungan. Berlaku
            hingga akhir bulan.
          </p>
          <button
            className="mt-4 text-white px-8 py-2 text-sm rounded-full"
            style={{ backgroundColor: "#E36CC5" }}
          >
            Lihat Detail
          </button>
        </div>
        <img
          src="https://via.placeholder.com/100x150"
          alt="Promo"
          className="w-24 h-auto ml-4 rounded"
        />
      </div>

      {/* Doctor Cards */}
      <div className="flex flex-wrap items-center justify-center">
        {doctors.map((doctor, index) => (
          <DoctorCard key={index} doctor={doctor} />
        ))}
      </div>
    </div>
  );
};

export default Konsultasi;
