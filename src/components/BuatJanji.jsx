import React from "react";

const BuatJanji = () => {
  return (
    <div className="min-h-screen flex flex-col items-center py-10 px-4">
      {/* Header */}
      <div className="w-full max-w-4xl bg-[#E36CC5] text-white rounded-t-2xl px-6 pt-8 pb-6 relative">
        <button
          className="absolute top-6 left-6 w-10 h-10 bg-[#E36CC5] rounded-full flex justify-center text-white text-3xl leading-none"
          aria-label="Kembali"
          onClick={() => window.history.back()}
        >
          ←
        </button>

        <h2 className="text-2xl font-bold text-center">
          Buat Janji Konsultasi
        </h2>
        <p className="text-center text-base mt-1">
          Lengkapi formulir di bawah untuk membuat janji konsultasi
        </p>
      </div>

      {/* Card Dokter - dengan kotak sendiri */}
      <div className="w-full mt-6 mb-6 max-w-4xl px-10">
        <div className="bg-white border border-[#E36CC5] rounded-xl p-8 shadow-md flex items-center space-x-4">
          <img
            src="https://via.placeholder.com/60"
            alt="dokter"
            className="w-16 h-16 rounded-full object-cover"
          />
          <div>
            <h3 className="font-bold text-lg">dr. Rose, Sp.KK</h3>
            <p className="text-sm text-[#E36CC5]">Spesialis Kulit</p>
            <p className="text-yellow-500 text-sm flex items-center">
              {"★".repeat(5)}{" "}
              <span className="text-gray-600 ml-2 text-sm">4.9</span>
            </p>
          </div>
        </div>
      </div>

      {/* Form */}
      <form className="w-full max-w-4xl bg-white rounded-b-xl px-4 space-y-8">
        <div className="grid md:grid-cols-2 gap-6">
          {/* Data Pribadi */}
          <div>
            <h4 className="text-xl font-bold text-black mb-2">Data Pribadi</h4>
            <div className="space-y-4">
              <p>
                Nama*
                <input
                  type="text"
                  placeholder="Nama"
                  className="w-full border border-black rounded px-4 py-2 mt-1"
                  required
                />
              </p>
              <p>
                {" "}
                No Telepon*
                <input
                  type="tel"
                  placeholder="No Telepon"
                  className="w-full border border-black rounded px-4 py-2 mt-1"
                  required
                />
              </p>
            </div>
          </div>

          <div>
            <h4 className="invisible">.</h4>
            <div className="space-y-4 mt-3">
              <p>
                {" "}
                Email*
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full border border-black rounded px-4 py-2 mt-1"
                  defaultValue=""
                  required
                />
              </p>
              <p>
                Usia*
                <input
                  type="number"
                  placeholder="Usia"
                  className="w-full border border-black rounded px-4 py-2 mt-1"
                  min="0"
                />
              </p>
            </div>
          </div>
        </div>

        {/* Jadwal & Keluhan */}
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h4 className="text-xl font-bold text-black mb-2">
              Jadwal Konsultasi
            </h4>
            <p>
              Tanggal Konsultasi*
              <input
                type="date"
                className="w-full border border-black rounded px-4 py-2 mb-4 mt-2"
                required
              />
            </p>
            <div className="grid grid-cols-3 gap-2">
              {["09.00", "10.30", "13.00", "14.00", "16.00", "17.00", "21.00"].map(
                (jam) => (
                  <button
                    key={jam}
                    type="button"
                    className="border border-black rounded-full px-4 py-2 text-sm hover:bg-pink-100"
                  >
                    {jam}
                  </button>
                )
              )}
            </div>
          </div>

          <div>
            <h4 className="text-xl font-bold text-black mb-2">
              Informasi Kesehatan
            </h4>
            <p>
              Keluhan*
              <textarea
                placeholder="Keluhan..."
                className="w-full h-36 border border-black rounded px-4 py-2 mt-2"
              />
            </p>
          </div>
        </div>

        {/* Tombol */}
        <div className="text-center">
          <button
            type="submit"
            className="bg-[#E36CC5] hover:bg-pink-400 text-white font-semibold px-32 py-3 rounded-full"
          >
            Buat Janji
          </button>
        </div>
      </form>
    </div>
  );
};

export default BuatJanji;