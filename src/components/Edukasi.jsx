import React, { useRef } from "react";

const Edukasi = () => {
  const scrollRef = useRef(null);

  const articles = new Array(6).fill({
    title: "7 Cara Efektif Menjaga Kesehatan Jantung di Era Modern",
    excerpt:
      "Penyakit jantung menjadi penyebab kematian nomor satu di dunia. Pelajari langkah-langkah sederhana namun efektif untuk menjaga kesehatan jantung Anda sejak dini.",
    date: "5 hari yang lalu",
    image: "/icons/jantung22.png", // path harus dimulai dari root public
  });

  return (
    <div className="bg-[#f9f9f9] min-h-screen px-6 md:px-14 overflow-x-hidden">
      <div className="max-w-screen-xl mx-auto">
        {/* Header */}
        <div className="w-screen bg-pink-50 py-12 mb-10 relative left-1/2 right-1/2 -translate-x-1/2">
          <div className="max-w-4xl mx-auto px-6 sm:px-16 text-center">
            <h1 className="text-2xl sm:text-4xl font-bold text-[#E36CC5] mb-4 leading-tight">
              Tingkatkan Pengetahuan <br className="sm:hidden" />
              Kesehatan Anda
            </h1>
            <p className="text-black text-sm sm:text-base sm:text-xl leading-relaxed">
              Dapatkan informasi kesehatan terpercaya dari para ahli medis untuk <br className="sm:hidden" />
              hidup yang lebih sehat dan berkualitas
            </p>
          </div>
        </div>


        {/* Artikel Terbaru */}
        <div className="mb-12">
          {/* Layout sesuai desain: 1 besar kiri, 3 kecil kanan dengan tinggi sama */}
          <div className="flex flex-col md:flex-row gap-6">
            {/* Artikel utama besar */}
            <div className="flex-1 bg-white rounded-2xl shadow-md p-10 flex flex-col justify-between transition-all duration-300 hover:shadow-lg hover:-translate-y-1 cursor-pointer">
              <img
                src={articles[0].image}
                alt={articles[0].title}
                className="w-full h-56 object-cover rounded-lg mb-8"
              />
              <span className="inline-block bg-[#E36CC5] text-white text-xs font-semibold px-3 py-1 rounded-full mb-2 w-fit">
                Terbaru
              </span>
              <h3 className="font-semibold text-lg text-gray-800 mb-1 leading-tight">
                {articles[0].title}
              </h3>
              <p className="text-xs text-gray-600 mb-2 leading-snug">
                {articles[0].excerpt}
              </p>
            </div>
            {/* Tiga artikel kecil kanan dengan tinggi total sama dengan artikel kiri */}
            <div className="flex flex-col gap-4 flex-1 max-w-xs h-full justify-between">
              {[1, 2, 3].map((idx) => (
                <div
                  key={idx}
                  className="flex gap-3 bg-white rounded-2xl shadow-md p-3 items-center h-1/3 min-h-[90px] flex-1 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 cursor-pointer"
                  style={{ minHeight: '110px' }}
                >
                  <img
                    src={articles[idx].image}
                    alt={articles[idx].title}
                    className="w-20 h-20 object-cover rounded-lg"
                  />
                  <div>
                    <h4 className="font-semibold text-sm text-gray-800 leading-tight mb-1">
                      {articles[idx].title}
                    </h4>
                    <p className="text-xs text-gray-600 truncate max-w-[140px]">
                      {articles[idx].excerpt}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Artikel Terbaru */}
        <div className="mb-10">
          <h2 className="text-4xl font-bold text-gray-800 mb-4 flex items-center gap-2">
            <span className="text-yellow-500 text-2xl">📰</span> Artikel Lainnya
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow p-4 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <h3 className="font-semibold text-sm text-gray-800 mb-1 leading-tight">
                  {item.title}
                </h3>
                <p className="text-xs text-gray-600 mb-2 leading-snug">
                  {item.excerpt}
                </p>
                <div className="flex justify-between items-center text-xs">
                  <p className="text-gray-400 flex items-center gap-1">
                    🕒 {item.date}
                  </p>
                  <span className="text-[#E36CC5] font-medium hover:underline cursor-pointer">
                    Baca Selengkapnya →
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Tombol "Lihat Semua" */}
          <div className="flex justify-center mt-8">
            <button className="flex items-center gap-2 px-6 py-2 border border-gray-400 text-gray-700 rounded-full hover:bg-[#E36CC5] hover:text-white hover:border-[#E36CC5] transition">
              Lihat Semua
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Edukasi;
