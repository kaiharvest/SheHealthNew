import React from 'react';

const doctors = [
  {
    name: 'dr. Rose, Sp.KK',
    rating: 4.9,
    experience: '7 tahun',
    price: 'Rp. 90.000',
    online: true,
    image: 'https://via.placeholder.com/100',
  },
  {
    name: 'dr. Jennie, Sp.KK',
    rating: 4.9,
    experience: '7 tahun',
    price: 'Rp. 90.000',
    online: true,
    image: 'https://via.placeholder.com/100',
  },
  {
    name: 'dr. Lisa, Sp.KK',
    rating: 4.9,
    experience: '7 tahun',
    price: 'Rp. 90.000',
    online: false,
    image: 'https://via.placeholder.com/100',
  },
  {
    name: 'dr. Jisoo, Sp.KK',
    rating: 4.9,
    experience: '7 tahun',
    price: 'Rp. 90.000',
    online: true,
    image: 'https://via.placeholder.com/100',
  },
  {
    name: 'dr. Karina, Sp.KK',
    rating: 4.9,
    experience: '7 tahun',
    price: 'Rp. 90.000',
    online: false,
    image: 'https://via.placeholder.com/100',
  },
  {
    name: 'dr. Giselle, Sp.KK',
    rating: 4.9,
    experience: '7 tahun',
    price: 'Rp. 90.000',
    online: true,
    image: 'https://via.placeholder.com/100',
  },
];

const DoctorCard = ({ doctor }) => (
  <div className="bg-white shadow-md rounded-lg p-4 w-full md:w-1/3 lg:w-1/4 m-2">
    <div className="flex items-center">
      <img
        src={doctor.image}
        alt={doctor.name}
        className="w-16 h-16 rounded-full border-4 border-red-500"
      />
      <div className="ml-4">
        <h2 className="font-bold text-sm">{doctor.name}</h2>
        <p className="text-xs text-gray-500">Spesialis Kulit</p>
        <div className="flex items-center text-yellow-400 text-sm">
          ★★★★★ <span className="ml-1 text-gray-600 text-xs">{doctor.rating}</span>
        </div>
        <p className="text-xs mt-1">🕒 Pengalaman: {doctor.experience}</p>
        <p className="text-xs">💰 {doctor.price} / konsultasi</p>
        <p className={`text-xs mt-1 ${doctor.online ? 'text-green-500' : 'text-gray-400'}`}>
          {doctor.online ? '🟢 Tersedia' : '⚪ Tidak Tersedia'}
        </p>
      </div>
    </div>
    <div className="mt-3 flex gap-2">
      <button className="bg-pink-500 text-white px-3 py-1 text-xs rounded-full">Buat Janji</button>
      <button className="border border-gray-400 text-xs px-3 py-1 rounded-full">Lihat Profil</button>
    </div>
  </div>
);

const Konsultasi = () => {
  return (
    <div className="p-6">
      {/* Search Bar */}
      <div className="mb-6">
        <input
          type="text"
          placeholder="Cari dokter, spesialis..."
          className="w-full md:w-1/2 px-4 py-2 border rounded-full focus:outline-none shadow-sm"
        />
      </div>

      {/* Promo Section */}
      <div className="bg-pink-100 border-l-8 border-pink-500 p-6 rounded-lg flex items-center mb-8">
        <div className="flex-1">
          <h2 className="font-bold text-lg text-pink-800">Promo Khusus Hari Kesehatan Wanita</h2>
          <p className="text-sm mt-2">
            Dapatkan diskon <span className="font-bold text-pink-600">30%</span> untuk konsultasi
            dengan dokter spesialis kandungan. Berlaku hingga akhir bulan.
          </p>
          <button className="mt-3 bg-pink-500 text-white px-4 py-2 text-sm rounded-full">
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
