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
];

const DoctorCard = ({ doctor }) => (
  <div className=" bg-black shadow-md rounded-lg px-2 py-4 m-8 md:w-1/3 lg:w-1/4">
    <div className=" flex items-center">
      <img
        src={doctor.image}
        alt={doctor.name}
        className="w-16 h-16 rounded-full border-4 border-red-500"
      />
      <div className="ml-6">
        <h2 className="font-bold text-sm">{doctor.name}</h2>
        <p className="text-xs text-gray-500">Spesialis Kulit</p>
        <div className="flex items-center text-yellow-400 text-sm">
          ★★★★★{" "}
          <span className="ml-1 text-gray-600 text-xs">{doctor.rating}</span>
        </div>
        <p className="text-xs mt-1">🕒 Pengalaman: {doctor.experience}</p>
        <p className="text-xs">💰 {doctor.price} / konsultasi</p>
        <p
          className={`text-xs mt-1 ${
            doctor.online ? "text-green-500" : "text-gray-400"
          }`}
        >
          {doctor.online ? "🟢 Tersedia" : "⚪ Tidak Tersedia"}
        </p>
      </div>
    </div>
    <div className="mt-3 flex gap-2">
      <button className="bg-pink-500 text-white px-3 py-1 text-xs rounded-full">
        Buat Janji
      </button>
      <button className="border border-gray-400 text-xs px-3 py-1 rounded-full">
        Lihat Profil
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
      <div className="flex flex-wrap">
        {doctors.map((doctor, index) => (
          <DoctorCard key={index} doctor={doctor} />
        ))}
      </div>
    </div>
  );
};

export default Konsultasi;
