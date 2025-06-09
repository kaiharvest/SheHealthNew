import React, { useState } from 'react';

const BuatJanji = () => {
  const [formData, setFormData] = useState({
    nama: '',
    tanggal: '',
    waktu: '',
    layanan: '',
    catatan: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Janji berhasil dibuat!\n' + JSON.stringify(formData, null, 2));
    // Reset form
    setFormData({
      nama: '',
      tanggal: '',
      waktu: '',
      layanan: '',
      catatan: '',
    });
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {/* Header */}
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

      {/* Formulir */}
      <div className="flex-1 p-6">
        <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md space-y-4">
          <div>
            <label className="block text-gray-700 font-semibold mb-1">Nama Lengkap</label>
            <input
              type="text"
              name="nama"
              value={formData.nama}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-[#E36CC5]"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700 font-semibold mb-1">Tanggal Konsultasi</label>
              <input
                type="date"
                name="tanggal"
                value={formData.tanggal}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-[#E36CC5]"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-1">Waktu</label>
              <input
                type="time"
                name="waktu"
                value={formData.waktu}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-[#E36CC5]"
              />
            </div>
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-1">Pilih Layanan</label>
            <select
              name="layanan"
              value={formData.layanan}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-[#E36CC5]"
            >
              <option value="">-- Pilih Layanan --</option>
              <option value="Spesialis Kandungan & Kebidanan">Spesialis Kandungan & Kebidanan</option>
              <option value="Spesialis Saraf">Spesialis Saraf</option>
              <option value="Dokter Gigi Umum">Dokter Gigi Umum</option>
              <option value="Spesialis Jantung & Pembuluh Darah">Spesialis Jantung & Pembuluh Darah</option>
              <option value="Spesialis Mata">Spesialis Mata</option>
              <option value="Dokter Kulit">Dokter Kulit</option>
              <option value="Dokter Gizi">Dokter Gizi</option>
              <option value="Dokter Umum">Dokter Umum</option>
            </select>
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-1">Catatan Tambahan (Opsional)</label>
            <textarea
              name="catatan"
              value={formData.catatan}
              onChange={handleChange}
              rows="4"
              className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-[#E36CC5]"
              placeholder="Tulis hal-hal yang perlu diperhatikan dokter..."
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#E36CC5] text-white py-2 rounded hover:bg-[#d055ae] transition duration-200"
          >
            Buat Janji
          </button>
        </form>
      </div>
    </div>
  );
};

export default BuatJanji;
