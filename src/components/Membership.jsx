import { useNavigate } from "react-router-dom";

export default function Membership() {
  const navigate = useNavigate();

  return (
    <div className="text-gray-700 font-sans">
      {/* Section 1 - Membership */}
      <section className="px-4 sm:px-6 pt-8 lg:pt-10">
        <div className="text-center mb-10">
          <h1 className="text-3xl sm:text-4xl font-bold">
            <span className="text-[#E36CC5]">SheHealth</span>{" "}
            <span className="text-gray-700">Membership</span>
          </h1>
        </div>

        <div className="flex flex-col lg:flex-row items-center lg:items-start justify-center gap-10">
          {/* Kartu harga */}
          <div className="bg-white border border-[#E36CC5] rounded-2xl p-10 text-center shadow-md w-full max-w-xs order-2 lg:order-none">
            <div className="mb-4 flex items-center justify-center">
              <img
                src="/icons/premium.svg"
                alt="Premium"
                className="w-20 h-20"
              />
            </div>
            <hr className="border-t-2 border-pink-300 w-1/3 mx-auto mb-4" />
            <h3 className="font-bold text-lg mb-1">Premium Monthly</h3>
            <p className="text-sm text-gray-500 mb-3">
              Konsultasi Bebas Unlimited
            </p>
            <p className="text-[#E36CC5] text-3xl font-extrabold mb-1 relative inline-block">
              <span className="absolute -top-2 -left-4 text-sm text-red-500">
                Rp
              </span>
              <span className="text-red-500 text-4xl">90k</span>
            </p>
            <p className="text-gray-500 text-sm mb-6">1 bulan</p>
            <button
              onClick={() => navigate("/payment")}
              className=" bg-[#E36CC5] text-white border border-[#E36CC5] hover:bg-white hover:text-[#E36CC5] px-6 py-2 rounded-full text-sm transition duration-200"
            >
              Langganan Sekarang
            </button>
          </div>

          {/* Deskripsi */}
          <div className="max-w-2xl text-center lg:text-left order-1 lg:order-none pt-6">
            <h2 className="text-xl sm:text-2xl font-bold text-[#E36CC5] mb-4 leading-snug">
              Solusi Kesehatan Lengkap <br className="hidden sm:block" /> dalam
              Genggaman
            </h2>
            <p className="text-gray-600 mb-5 text-sm sm:text-base leading-relaxed">
              Dapatkan kebebasan berkonsultasi dengan dokter <br />
              berpengalaman kapan saja, di mana saja. <br />
              Tanpa batasan waktu, tanpa antrian panjang, tanpa khawatir biaya
              konsultasi bertambah.
            </p>
            <ul className="space-y-3 text-sm sm:text-base text-left max-w-md mx-auto lg:mx-0">
              {[
                "Konsultasi 24/7 tanpa batas dengan dokter umum ataupun spesialis selama satu bulan",
                "Reminder jadwal konsultasi",
                "Akses riwayat konsultasi kapan saja",
                "Privasi terjamin dan data aman",
              ].map((text, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <img
                    src="/icons/centang.svg"
                    alt="check icon"
                    className="w-5 h-5 mt-1"
                  />
                  <span>{text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Section 2 - Statistik */}
      <section
        className="text-white py-12 sm:py-10 px-4 sm:px-6 mt-16 bg-cover bg-center"
        style={{ backgroundImage: "url('/bg-langganan.svg')" }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10 max-w-6xl mx-auto">
          <div className="text-center md:text-left">
            <h2 className="text-5xl font-bold mb-2">
              Mengalami Inovasi <br /> dan Kepercayaan
            </h2>
            <p>
              Bergabunglah dengan ratusan pasien yang telah merasakan pelayanan
              kesehatan digital terbaik. Kami berkomitmen untuk memberikan
              layanan yang cepat, aman, dan terpercaya.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-2 gap-4 text-center">
            {[
              {
                icon: "langganan.svg",
                title: "200+",
                desc: "Anggota Berlangganan",
              },
              { icon: "langganan2.svg", title: "500+", desc: "Pasien nyaman" },
              {
                icon: "langganan3.svg",
                title: "500+",
                desc: "Konsultasi Selesai",
              },
              { icon: "langganan4.svg", title: "4.9", desc: "Rating Kepuasan" },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white/20 border border-white p-4 sm:p-6 rounded-lg flex gap-4 items-start transform transition duration-300 hover:shadow-lg hover:scale-105"
              >
                <img
                  src={`/icons/${item.icon}`}
                  alt={item.desc}
                  className="w-14 sm:w-20 h-14 sm:h-20 object-contain"
                />
                <div className="text-left">
                  <div className="text-xl sm:text-3xl font-bold">
                    {item.title}
                  </div>
                  <p className="text-xs sm:text-sm mt-1 sm:mt-2">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3 - Manfaat */}
      <section className="py-14 sm:px-14 text-center">
        <h2 className="text-2xl sm:text-3xl font-bold mb-8">
          Manfaat Berlangganan
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {[
            {
              title: "Dokter Berpengalaman",
              desc: "Tim dokter bersertifikat dengan pengalaman lebih dari 10 tahun.",
            },
            {
              title: "Data Aman",
              desc: "Privasi Anda terjamin dengan enkripsi dan perlindungan data terbaik.",
            },
            {
              title: "Akses Cepat",
              desc: "Respon cepat dari tim dokter dan layanan pelanggan setiap saat.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white border border-gray-500 rounded-xl p-6 shadow-sm hover:shadow-lg hover:scale-105 transition duration-300 transform"
            >
              <div className="mb-3 flex flex-col items-center">
                <img
                  src="/icons/manfaat-memb.svg"
                  alt={item.title}
                  className="w-14 h-14 object-contain mb-2"
                />
                <hr className="border-t-2 border-[#E36CC5] w-10" />
              </div>
              <h3 className="text-[#E36CC5] font-bold text-lg mb-2 text-center">
                {item.title}
              </h3>
              <p className="text-sm text-gray-500 text-center">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
