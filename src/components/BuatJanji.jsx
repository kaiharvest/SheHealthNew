import React, { useState } from 'react';

const BuatJanji = () => {
  const [formData, setFormData] = useState({
    nama: '',
    email: '',
    nomorHP: '',
    spesialis: '',
    tanggal: '',
    waktu: '',
    catatan: '',
  });

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Janji konsultasi berhasil dibuat!');
  };

  return (
    <div className="max-w-2xl mx-auto mt-4 mb-10 bg-white shadow-xl rounded-3xl overflow-hidden">
      {/* Header Pink dengan Tombol Kembali */}
      <div className="w-full bg-[#E36CC5] rounded-t-3xl text-white py-6 px-6 flex items-center relative">
        <button
          onClick={() => window.history.back()}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white bg-opacity-30 hover:bg-opacity-50 rounded-full p-2"
          aria-label="Kembali"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <div className="mx-auto text-center">
          <h1 className="text-xl sm:text-2xl font-bold">Buat Janji Konsultasi</h1>
          <p className="text-sm sm:text-base mt-1">
            Lengkapi formulir di bawah untuk membuat janji konsultasi
          </p>
        </div>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="p-6 space-y-4">
        <div>
          <label className="block text-gray-700 font-semibold">Nama Lengkap</label>
          <input
            type="text"
            name="nama"
            value={formData.nama}
            onChange={handleChange}
            required
            className="w-full mt-1 p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-400"
          />
        </div>

        <div>
          <label className="block text-gray-700 font-semibold">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full mt-1 p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-400"
          />
        </div>

        <div>
          <label className="block text-gray-700 font-semibold">Nomor HP</label>
          <input
            type="tel"
            name="nomorHP"
            value={formData.nomorHP}
            onChange={handleChange}
            required
            className="w-full mt-1 p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-400"
          />
        </div>

        <div>
          <label className="block text-gray-700 font-semibold">Pilih Spesialis</label>
          <select
            name="spesialis"
            value={formData.spesialis}
            onChange={handleChange}
            required
            className="w-full mt-1 p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-400"
          >
            <option value="">-- Pilih Spesialis --</option>
            <option value="Kandungan">Spesialis Kandungan & Kebidanan</option>
            <option value="Saraf">Spesialis Saraf</option>
            <option value="Gigi">Dokter Gigi Umum</option>
            <option value="Jantung">Spesialis Jantung & Pembuluh Darah</option>
            <option value="Mata">Spesialis Mata</option>
            <option value="Kulit">Dokter Kulit</option>
            <option value="Gizi">Dokter Gizi</option>
            <option value="Umum">Dokter Umum</option>
          </select>
        </div>

        <div>
          <label className="block text-gray-700 font-semibold">Tanggal Konsultasi</label>
          <input
            type="date"
            name="tanggal"
            value={formData.tanggal}
            onChange={handleChange}
            required
            className="w-full mt-1 p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-400"
          />
        </div>

        <div>
          <label className="block text-gray-700 font-semibold">Waktu Konsultasi</label>
          <input
            type="time"
            name="waktu"
            value={formData.waktu}
            onChange={handleChange}
            required
            className="w-full mt-1 p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-400"
          />
        </div>

        <div>
          <label className="block text-gray-700 font-semibold">Catatan (Opsional)</label>
          <textarea
            name="catatan"
            value={formData.catatan}
            onChange={handleChange}
            className="w-full mt-1 p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-400"
            rows="3"
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-[#E36CC5] hover:bg-pink-600 text-white font-bold py-3 rounded-xl transition duration-300"
        >
          Buat Janji
        </button>
      </form>
    </div>
  );
};

export default BuatJanji;
