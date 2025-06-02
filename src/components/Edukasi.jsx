import React, { useRef } from "react";

const Edukasi = () => {
  const scrollRef = useRef(null);

  const articles = new Array(6).fill({
    title: "7 Cara Efektif Menjaga Kesehatan Jantung di Era Modern",
    excerpt:
      "Penyakit jantung menjadi penyebab kematian nomor satu di dunia. Pelajari langkah-langkah sederhana namun efektif untuk menjaga kesehatan jantung Anda sejak dini.",
    date: "5 hari yang lalu",
    image: "https://via.placeholder.com/400x250?text=Stetoskop",
  });

  return (
    <div className="bg-[#f9f9f9] min-h-screen px-6 md:px-14 overflow-x-hidden">
      <div className="max-w-screen-xl mx-auto">
      {/* Header */}
      <div className="w-screen bg-[#FFEFFB] rounded-b-[80px] shadow-md py-10 mb-14 relative left-1/2 right-1/2 -translate-x-1/2">
        <div className="max-w-4xl mx-auto sm:px-10 text-center">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-2">
            Tingkatkan Pengetahuan Kesehatan Anda
          </h1>
          <p className="text-gray-600">
            Dapatkan informasi kesehatan terpercaya dari para ahli medis untuk <br />
            hidup yang lebih sehat dan berkualitas.
          </p>
        </div>
      </div>

        {/* Artikel Pilihan */}
        <div className="mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4 flex items-center gap-2">
            <span className="text-yellow-500 text-2xl">⭐</span> Artikel Pilihan
          </h2>

          <div
            ref={scrollRef}
            className="flex gap-5 overflow-x-auto scrollbar-hide pb-2"
          >
            {articles.slice(0, 6).map((item, index) => (
              <div
                key={index}
                className="min-w-[320px] max-w-[360px] bg-white rounded-xl shadow-md p-5 flex-shrink-0 transition duration-300 hover:shadow-lg"
              >
                <img
                  src="/artikel-pilihan.png"
                  alt={item.title}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <h3 className="font-semibold text-sm text-gray-800 mb-1 leading-tight">
                  {item.title}
                </h3>
                <p className="text-xs text-gray-600 mb-2 leading-snug">
                  {item.excerpt}
                </p>
                <p className="text-xs text-gray-400 flex items-center gap-1">
                  🕒 {item.date}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Artikel Terbaru */}
        <div className="mb-10">
          <h2 className="text-4xl font-bold text-gray-800 mb-4 flex items-center gap-2">
            <span className="text-yellow-500 text-2xl">⭐</span> Artikel Terbaru
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow p-4 transition hover:shadow-lg"
              >
                <img
                  src="/artikel-terbaru.png"
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
                  <span className="text-pink-500 font-semibold hover:underline cursor-pointer">
                    Baca Selengkapnya &gt;
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Tombol "Lihat Semua" */}
          <div className="flex justify-center mt-8">
            <button className="px-6 py-2 border border-gray-400 text-gray-700 rounded-full hover:bg-[#E36CC5] hover:text-white hover:border-[#E36CC5] transition">
              Lihat Semua →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Edukasi;
