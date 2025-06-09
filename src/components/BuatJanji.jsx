import React, { useState } from "react";

const BuatJanji = () => {
  const [showSuccess, setShowSuccess] = useState(false);
  const [selectedTime, setSelectedTime] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = {
      nama: formData.get("nama"),
      telepon: formData.get("telepon"),
      email: formData.get("email"),
      usia: formData.get("usia"),
      tanggal: formData.get("tanggal"),
      keluhan: formData.get("keluhan"),
      jam: selectedTime,
    };

    const riwayat = JSON.parse(localStorage.getItem("riwayatJanji")) || [];
    riwayat.push(data);
    localStorage.setItem("riwayatJanji", JSON.stringify(riwayat));

    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 3000);

    e.target.reset();
    setSelectedTime(null);
  };

  return (
    <div className="min-h-screen flex flex-col items-center py-6 px-4 bg-gray-50 relative">
      {/* Tombol Back Ikon */}
      <button
        onClick={() => window.history.back()}
        className="absolute top-4 left-4 text-pink-600 hover:text-pink-800"
        aria-label="Kembali"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      {/* Pop-up Sukses */}
      {showSuccess && (
        <div className="fixed top-4 right-4 bg-green-500 text-white px-4 py-2 rounded shadow">
          Janji berhasil dibuat!
        </div>
      )}

      {/* Header */}
      <div className="text-center mb-6 mt-6">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-800">
          Buat Janji Konsultasi
        </h1>
        <p className="text-sm text-gray-600 mt-2">
          Silakan isi formulir berikut untuk membuat janji.
        </p>
      </div>

      {/* Form */}
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-4xl bg-white rounded-b-xl px-4 sm:px-6 space-y-8 pb-8"
      >
        <div className="grid md:grid-cols-2 gap-6">
          {/* Data Pribadi */}
          <div>
            <h4 className="text-lg sm:text-xl font-bold text-black mb-2">
              Data Pribadi
            </h4>
            <div className="space-y-4">
              <p>
                Nama*
                <input
                  name="nama"
                  type="text"
                  placeholder="Nama"
                  className="w-full border border-black rounded px-4 py-2 mt-1 text-sm"
                  required
                />
              </p>
              <p>
                No Telepon*
                <input
                  name="telepon"
                  type="tel"
                  placeholder="No Telepon"
                  className="w-full border border-black rounded px-4 py-2 mt-1 text-sm"
                  required
                />
              </p>
            </div>
          </div>

          {/* Email dan Usia */}
          <div>
            <h4 className="invisible">.</h4>
            <div className="space-y-4 mt-3">
              <p>
                Email*
                <input
                  name="email"
                  type="email"
                  placeholder="Email"
                  className="w-full border border-black rounded px-4 py-2 mt-1 text-sm"
                  required
                />
              </p>
              <p>
                Usia*
                <input
                  name="usia"
                  type="number"
                  placeholder="Usia"
                  className="w-full border border-black rounded px-4 py-2 mt-1 text-sm"
                  min="0"
                />
              </p>
            </div>
          </div>
        </div>

        {/* Jadwal & Keluhan */}
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h4 className="text-lg sm:text-xl font-bold text-black mb-2">
              Jadwal Konsultasi
            </h4>
            <p>
              Tanggal Konsultasi*
              <input
                name="tanggal"
                type="date"
                className="w-full border border-black rounded px-4 py-2 mb-4 mt-2 text-sm"
                required
              />
            </p>
            <div className="grid grid-cols-3 gap-2">
              {["09.00", "10.30", "13.00", "14.00", "16.00", "17.00", "21.00"].map(
                (jam) => (
                  <button
                    key={jam}
                    type="button"
                    className={`border border-black rounded-full px-3 py-2 text-xs sm:text-sm ${
                      selectedTime === jam
                        ? "bg-pink-300 text-white"
                        : "hover:bg-pink-100"
                    }`}
                    onClick={() => setSelectedTime(jam)}
                  >
                    {jam}
                  </button>
                )
              )}
            </div>
          </div>

          <div>
            <h4 className="text-lg sm:text-xl font-bold text-black mb-2">
              Informasi Kesehatan
            </h4>
            <p>
              Keluhan*
              <textarea
                name="keluhan"
                placeholder="Keluhan..."
                className="w-full h-36 border border-black rounded px-4 py-2 mt-2 text-sm"
                required
              />
            </p>
          </div>
        </div>

        {/* Tombol Submit */}
        <div className="text-center">
          <button
            type="submit"
            className="bg-[#E36CC5] hover:bg-pink-400 text-white font-semibold px-10 sm:px-32 py-3 rounded-full text-sm sm:text-base"
          >
            Buat Janji
          </button>
        </div>
      </form>
    </div>
  );
};

export default BuatJanji;
