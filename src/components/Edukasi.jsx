import React, { useRef, useState, useEffect } from "react";

const Edukasi = () => {
  const scrollRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const articles = [
    {
      title: "7 Cara Menjaga Kesehatan Reproduksi Wanita",
      excerpt:
        "Pelajari cara menjaga kebersihan dan kesehatan organ reproduksi untuk mencegah infeksi dan masalah kesehatan lainnya.",
      date: "3 hari yang lalu",
      image: "https://via.placeholder.com/400x250?text=Kesehatan+Reproduksi",
    },
    {
      title: "Pentingnya Nutrisi Seimbang untuk Wanita",
      excerpt:
        "Nutrisi yang tepat dapat membantu menjaga hormon, energi, dan kesehatan secara keseluruhan bagi wanita di segala usia.",
      date: "5 hari yang lalu",
      image: "https://via.placeholder.com/400x250?text=Nutrisi+Seimbang",
    },
    {
      title: "Tips Mengurangi Stres dan Menjaga Kesehatan Mental Wanita",
      excerpt:
        "Ketahui teknik-teknik efektif untuk mengelola stres yang sering dialami wanita dalam kehidupan sehari-hari.",
      date: "1 minggu yang lalu",
      image: "https://via.placeholder.com/400x250?text=Kesehatan+Mental",
    },
    {
      title: "Manfaat Olahraga Ringan untuk Kesehatan Wanita",
      excerpt:
        "Olahraga teratur seperti yoga dan jalan kaki bisa meningkatkan kesehatan jantung dan fleksibilitas tubuh wanita.",
      date: "2 minggu yang lalu",
      image: "https://via.placeholder.com/400x250?text=Olahraga+Ringan",
    },
    {
      title: "Pentingnya Pemeriksaan Rutin untuk Deteksi Dini Kanker Payudara",
      excerpt:
        "Deteksi dini melalui pemeriksaan rutin bisa meningkatkan peluang kesembuhan kanker payudara pada wanita.",
      date: "3 minggu yang lalu",
      image: "https://via.placeholder.com/400x250?text=Kanker+Payudara",
    },
    {
      title: "Cara Mengatasi Gejala Menopause dengan Alami",
      excerpt:
        "Beberapa perubahan gaya hidup dan pola makan dapat membantu mengurangi gejala menopause yang mengganggu.",
      date: "1 bulan yang lalu",
      image: "https://via.placeholder.com/400x250?text=Menopause",
    },
  ];

  // Fungsi untuk update activeIndex berdasarkan scroll
  const handleScroll = () => {
    if (!scrollRef.current) return;
    const scrollLeft = scrollRef.current.scrollLeft;
    const containerWidth = scrollRef.current.offsetWidth;

    // Lebar setiap card minimum + gap
    const cardWidth = 360 + 20; // min-w-[320px], max-w-[360px] + gap-5 (20px)
    // Hitung index yang paling dekat dengan scrollLeft
    const index = Math.round(scrollLeft / cardWidth);
    setActiveIndex(index);
  };

  useEffect(() => {
    const refCurrent = scrollRef.current;
    if (refCurrent) {
      refCurrent.addEventListener("scroll", handleScroll);
    }
    return () => {
      if (refCurrent) {
        refCurrent.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  return (
    <div className="bg-[#f9f9f9] min-h-screen px-6 md:px-14 overflow-x-hidden">
      <div className="max-w-screen-xl mx-auto">
        {/* Header */}
        <div className="w-screen bg-gradient-to-br from-pink-100 to-pink-200 rounded-b-[80px] shadow-md py-10 mb-14 relative left-1/2 right-1/2 -translate-x-1/2">
          <div className="max-w-4xl mx-auto sm:px-10 text-center">
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-2 flex justify-center items-center gap-2">
              📚 Tingkatkan Pengetahuan Kesehatan Anda
            </h1>
            <p className="text-gray-600 text-sm sm:text-base">
              Dapatkan informasi kesehatan terpercaya dari para ahli medis
              <br />
              untuk hidup yang lebih sehat dan berkualitas.
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
            className="flex gap-5 overflow-x-auto scrollbar-thin scrollbar-thumb-pink-300 pb-2"
          >
            {articles.slice(0, 6).map((item, index) => (
              <div
                key={index}
                className="min-w-[320px] max-w-[360px] bg-white rounded-xl shadow-md p-5 flex-shrink-0 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
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
                <p className="text-xs text-gray-400 flex items-center gap-1">
                  🕒 {item.date}
                </p>
              </div>
            ))}
          </div>

          {/* Indikator titik-titik */}
          <div className="flex justify-center mt-4 space-x-2">
            {articles.slice(0, 6).map((_, index) => {
              const isActive = index === activeIndex;
              return (
                <div
                  key={index}
                  className={`transition-all duration-300 rounded-full ${
                    isActive
                      ? "w-2 h-2 bg-pink-500"
                      : "w-1.5 h-1.5 bg-gray-400 opacity-50"
                  }`}
                />
              );
            })}
          </div>
        </div>

        {/* Artikel Terbaru */}
        <div className="mb-10">
          <h2 className="text-4xl font-bold text-gray-800 mb-4 flex items-center gap-2">
            <span className="text-yellow-500 text-2xl">📰</span> Artikel Terbaru
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
                  <span className="text-pink-600 font-medium hover:underline cursor-pointer">
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
              <span>➡️</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Edukasi;
