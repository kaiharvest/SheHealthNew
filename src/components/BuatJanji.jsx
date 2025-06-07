import React from "react";

const BuatJanji = () => {
  return (
    <div className="min-h-screen flex flex-col items-center py-6 px-4 bg-gray-50">
      {/* Header */}
      <div className="w-full max-w-4xl bg-[#E36CC5] text-white rounded-t-2xl px-4 sm:px-6 pt-16 pb-6 relative">
        <button
          className="absolute top-4 left-4 w-10 h-10 bg-[#D85EBB] hover:bg-[#cc56b0] rounded-full flex items-center justify-center text-white text-xl shadow"
          aria-label="Kembali"
          onClick={() => window.history.back()}
        >
          ←
        </button>
        <h2 className="text-2xl sm:text-3xl font-bold text-center">
          Buat Janji Konsultasi
        </h2>
        <p className="text-center text-sm sm:text-base mt-1">
          Lengkapi formulir di bawah untuk membuat janji konsultasi
        </p>
      </div>

      {/* Card Dokter */}
      <div className="w-full mt-6 mb-6 max-w-4xl px-4 sm:px-10">
        <div className="bg-white border border-[#E36CC5] rounded-xl p-6 sm:p-8 shadow-md flex items-center space-x-4">
          <img
            src="/icons/dokter-konsul.svg"
            alt="dokter"
            className="w-16 h-16 rounded-full object-cover"
          />
          <div>
            <h3 className="font-bold text-base sm:text-lg">dr. Rose, Sp.KK</h3>
            <p className="text-sm text-[#E36CC5]">Spesialis Kulit</p>
            <p className="text-yellow-500 text-sm flex items-center">
              {"★".repeat(5)}{" "}
              <span className="text-gray-600 ml-2 text-sm">4.9</span>
            </p>
          </div>
        </div>
      </div>

      {/* Form */}
      <form className="w-full max-w-4xl bg-white rounded-b-xl px-4 sm:px-6 space-y-8 pb-8">
        {/* Data Pribadi */}
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h4 className="text-lg sm:text-xl font-bold text-black mb-2">Data Pribadi</h4>
            <div className="space-y-4">
              <p>
                Nama*
                <input
                  type="text"
                  placeholder="Nama"
                  className="w-full border border-black rounded px-4 py-2 mt-1 text-sm"
                  required
                />
              </p>
              <p>
                No Telepon*
                <input
                  type="tel"
                  placeholder="No Telepon"
                  className="w-full border border-black rounded px-4 py-2 mt-1 text-sm"
                  required
                />
              </p>
            </div>
          </div>

          <div>
            <h4 className="invisible">.</h4>
            <div className="space-y-4 mt-3">
              <p>
                Email*
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full border border-black rounded px-4 py-2 mt-1 text-sm"
                  required
                />
              </p>
              <p>
                Usia*
                <input
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
                    className="border border-black rounded-full px-3 py-2 text-xs sm:text-sm hover:bg-pink-100"
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
                placeholder="Keluhan..."
                className="w-full h-36 border border-black rounded px-4 py-2 mt-2 text-sm"
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
