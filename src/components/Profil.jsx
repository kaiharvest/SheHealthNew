import React from "react";
import { useParams } from "react-router-dom";

const Profil = () => {
  const { nama } = useParams();

  return (
    <div className="max-w-4xl mx-auto rounded-2xl shadow-lg my-8">
      {/* Header */}
      <div className="bg-[#FFEFFB] w-full rounded-2xl p-10 flex flex-col md:flex-row items-center md:items-start gap-6 shadow-sm">
        <img
          src={`${process.env.PUBLIC_URL}/icons/dokter-konsul.svg`}
          alt="dr. Rose"
          className="w-28 h-28 rounded-full object-cover border-4 border-white shadow-md"
        />
        <div className="text-center md:text-left">
          <h1 className="text-xl font-bold text-gray-800">dr. Rose, Sp.KK</h1>
          <p className="text-sm text-pink-500">Spesialis Kulit</p>
          <div className="flex justify-center md:justify-start items-center gap-2 mt-2 text-sm">
            <span className="text-yellow-500 text-lg">★</span>
            <span className="font-semibold text-gray-700">4.9</span>
            <span className="text-gray-600">| 18 Ulasan</span>
          </div>
          <div className="flex flex-wrap justify-center md:justify-start gap-2 mt-3">
            <span className="bg-white text-gray-800 px-3 py-1 rounded-full text-xs shadow-sm">
              RS Medika Jaya
            </span>
            <span className="bg-white text-gray-800 px-3 py-1 rounded-full text-xs shadow-sm">
              10 Tahun Pengalaman
            </span>
          </div>
        </div>
      </div>

      {/* Konten */}
      <div className="px-6 md:px-10 py-4 text-white">
        {/* Tentang */}
        <div className="mb-8">
          <h2 className="text-lg font-semibold text-[#E36CC5] mb-2 flex items-center gap-3">
            <img
              src={`${process.env.PUBLIC_URL}/icons/tentang.svg`}
              alt="Tentang"
              className="w-5 h-5"
            />
            Tentang
          </h2>
          <p className="text-sm text-black">
            dr. Rose, Sp.KK dokter spesialis kulit dan kelamin yang berdedikasi
            dalam memberikan pelayanan terbaik di bidang dermatologi dan
            venerologi. dr. Rose berkomitmen untuk membantu pasien mengatasi
            berbagai permasalahan kulit, rambut, kuku, serta penyakit menular
            seksual dengan pendekatan medis yang profesional, empatik, dan
            berbasis bukti.
          </p>
        </div>

        {/* Pendidikan */}
        <div className="mb-6">
          <h2 className="text-lg font-bold text-[#E36CC5] mb-4 flex items-center gap-3">
            <img
              src={`${process.env.PUBLIC_URL}/icons/pendidikan.svg`}
              alt="Pendidikan"
              className="w-6 h-6"
            />
            Pendidikan
          </h2>

          <div className="space-y-4">
            <div>
              <p className="text-base text-black font-medium">
                Universitas Muhammadiyah Semarang
              </p>
              <p className="text-sm text-gray-500">
                Spesialis Kandungan & Kebidanan
              </p>
            </div>

            <div>
              <p className="text-base text-black font-medium">
                Universitas Muhammadiyah Semarang
              </p>
              <p className="text-sm text-gray-500">Dokter Umum</p>
            </div>
          </div>
        </div>

        {/* Lokasi Praktik */}
        <div className="mb-6">
          <h2 className="text-lg font-semibold text-[#E36CC5] mb-2 flex items-center gap-3">
            <img
              src={`${process.env.PUBLIC_URL}/icons/lokasi.svg`}
              alt="Tentang"
              className="w-5 h-5"
            />
            Lokasi
          </h2>
          <h3 className="font-bold text-black">RS Medika Jaya</h3>
          <p className="text-sm text-black">
            Jl. Pemuda No.90, Wiradesa, Pekalongan
            <br />
            Senin - Jumat: 08.00 – 16.00
            <br />
            Sabtu: 09.00 – 14.00
          </p>
          <a
            href="https://www.google.com/maps"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-blue-400 hover:underline mt-2 inline-block"
          >
            Lihat di Google Maps
          </a>
        </div>

        {/* Ulasan Pasien */}
        <div>
          <div className="flex justify-between items-center mb-2">
            <h2 className="text-lg font-semibold text-[#E36CC5] mb-2 flex items-center gap-3">
              <img
                src={`${process.env.PUBLIC_URL}/icons/ulasan.svg`}
                alt="Tentang"
                className="w-5 h-5"
              />
              Ulasan Pasien
            </h2>
            <a href="#" className="text-sm text-gray-400 hover:text-pink-500">
              Lihat semua ulasan
            </a>
          </div>

          {[1, 2, 3].map((_, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-xl p-4 mb-4 shadow-sm text-black"
            >
              <div className="flex items-center gap-3 mb-2">
                <img
                  src={`${process.env.PUBLIC_URL}/icons/profil-ulasan.svg`}
                  alt="User"
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold text-sm">Sari Wulandari</p>
                  <p className="text-xs text-gray-400">
                    5 hari yang lalu ⭐⭐⭐⭐⭐
                  </p>
                </div>
              </div>
              <p className="text-sm text-gray-700">
                {index === 2
                  ? "Pelayanan baik dan dokter sangat sabar menjelaskan kondisi kulit saya. Hanya saja jadwal praktik agak terbatas, tapi overall puas dengan pelayanannya. Konsultasi online sangat membantu dan praktis."
                  : "Dr. Rose sangat profesional dan ramah. Penjelasannya sangat detail dan mudah dipahami. Masalah jerawat saya sudah membaik setelah mengikuti pengobatan yang diberikan. Terima kasih dokter!"}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Profil;
