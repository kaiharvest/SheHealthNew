import React from "react";

const BuatJanji = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* HEADER */}
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

      {/* FORM */}
      <div className="px-6 py-10 max-w-5xl mx-auto">
        <form className="space-y-8">
          {/* DATA PRIBADI */}
          <div>
            <h2 className="text-xl font-bold text-gray-800 mb-4">Data Pribadi</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block mb-2 font-medium text-gray-700">Nama *</label>
                <input
                  type="text"
                  defaultValue="Addina Zara"
                  className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none"
                />
              </div>
              <div>
                <label className="block mb-2 font-medium text-gray-700">Email *</label>
                <input
                  type="email"
                  defaultValue="addinaze14@gmail.com"
                  className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none"
                />
              </div>
              <div>
                <label className="block mb-2 font-medium text-gray-700">No Telepon *</label>
                <input
                  type="tel"
                  placeholder="Masukkan nomor anda..."
                  className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none"
                />
              </div>
              <div>
                <label className="block mb-2 font-medium text-gray-700">Usia</label>
                <input
                  type="number"
                  placeholder="Masukkan usia anda"
                  className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none"
                />
              </div>
            </div>
          </div>

          {/* JADWAL KONSULTASI */}
          <div>
            <h2 className="text-xl font-bold text-gray-800 mb-4">Jadwal Konsultasi</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block mb-2 font-medium text-gray-700">Tanggal Konsultasi *</label>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="dd/mm/yyyy"
                    className="w-full border border-gray-300 rounded-md px-4 py-3 pr-10 focus:outline-none"
                  />
                  <span className="absolute inset-y-0 right-3 flex items-center text-gray-500">
                    📅
                  </span>
                </div>
              </div>
              <div>
                <label className="block mb-2 font-medium text-gray-700">Jam Konsultasi *</label>
                <div className="flex flex-wrap gap-2">
                  {["09.00", "10.30", "13.00", "14.00", "16.00", "17.00", "21.00"].map((jam, i) => (
                    <button
                      type="button"
                      key={i}
                      disabled={jam === "13.00" || jam === "21.00"}
                      className={`px-4 py-2 rounded-md text-sm border ${
                        jam === "13.00" || jam === "21.00"
                          ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                          : "bg-white hover:bg-gray-100"
                      }`}
                    >
                      {jam}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* INFORMASI KESEHATAN */}
          <div>
            <h2 className="text-xl font-bold text-gray-800 mb-4">Informasi Kesehatan</h2>
            <label className="block mb-2 font-medium text-gray-700">Keluhan *</label>
            <textarea
              rows="4"
              placeholder="Keluhan . . ."
              className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none"
            ></textarea>
          </div>

          {/* SUBMIT */}
          <div className="text-center">
            <button
              type="submit"
              className="bg-pink-500 hover:bg-pink-600 text-white font-semibold px-10 py-3 rounded-full shadow-md transition duration-300"
            >
              Buat Janji
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BuatJanji;
