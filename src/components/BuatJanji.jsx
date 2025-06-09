import React, { useState } from "react";

const AppointmentForm = () => {
  const [selectedTime, setSelectedTime] = useState(null);

  const waktu = ["09:00", "10:00", "13:00", "15:00", "16:00"];

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Formulir berhasil dikirim!");
  };

  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-50 px-4 py-8">
      {/* Header Pink */}
      <div className="bg-pink-400 w-full max-w-4xl rounded-t-xl text-white py-6 px-4 sm:px-8 text-center shadow-md">
        <h1 className="text-xl sm:text-2xl font-bold">Buat Janji Konsultasi</h1>
        <p className="text-sm sm:text-base mt-1">
          Lengkapi formulir di bawah untuk membuat janji konsultasi
        </p>
      </div>

      {/* Kartu Dokter */}
      <div className="bg-white w-full max-w-4xl rounded-xl shadow p-4 mt-4 mb-6 flex items-center gap-4 border border-gray-200">
        <img
          src={`${process.env.PUBLIC_URL}/dokter-konsul.svg`} // ganti dengan path gambar dokter kamu
          alt="Dr. Rose"
          className="w-16 h-16 rounded-full object-cover"
        />
        <div>
          <h3 className="font-bold text-lg text-black">dr. Rose, Sp.KK</h3>
          <p className="text-sm text-gray-500">Spesialis Kulit</p>
          <div className="flex items-center text-yellow-500 text-sm mt-1">
            {"★".repeat(5)} <span className="ml-1 text-gray-600 text-sm">4.9</span>
          </div>
        </div>
      </div>

      {/* Form */}
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-4xl bg-white rounded-b-xl px-6 sm:px-10 pt-8 pb-10 shadow-md space-y-8"
      >
        {/* Input Nama */}
        <div>
          <label className="block text-gray-700 font-medium mb-2">
            Nama Lengkap
          </label>
          <input
            type="text"
            placeholder="Masukkan nama"
            className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-pink-400"
            required
          />
        </div>

        {/* Input Email */}
        <div>
          <label className="block text-gray-700 font-medium mb-2">Email</label>
          <input
            type="email"
            placeholder="Masukkan email"
            className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-pink-400"
            required
          />
        </div>

        {/* Input No HP */}
        <div>
          <label className="block text-gray-700 font-medium mb-2">
            No. Telepon
          </label>
          <input
            type="tel"
            placeholder="Masukkan nomor HP"
            className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-pink-400"
            required
          />
        </div>

        {/* Pilih Jam */}
        <div>
          <label className="block text-gray-700 font-medium mb-3">
            Pilih Jam Konsultasi
          </label>
          <div className="grid grid-cols-3 sm:grid-cols-5 gap-3">
            {waktu.map((jam, index) => (
              <button
                key={index}
                type="button"
                className={`px-4 py-2 rounded-full border border-pink-400 ${
                  selectedTime === jam
                    ? "bg-pink-300 text-white font-semibold"
                    : "hover:bg-pink-100"
                }`}
                onClick={() => setSelectedTime(jam)}
              >
                {jam}
              </button>
            ))}
          </div>
        </div>

        {/* Tombol Submit */}
        <div className="text-center">
          <button
            type="submit"
            className="bg-pink-400 text-white font-semibold px-6 py-2 rounded-lg hover:bg-pink-500 transition"
          >
            Kirim
          </button>
        </div>
      </form>
    </div>
  );
};

export default AppointmentForm;
