import './index.css';
import TestimonialsSection from './TestimonialsSection';
import MemberSection from './components/MemberSection';
import { Link } from 'react-router-dom';

function Beranda() {
  return (
    <div className="font-poppins">
      <section className="bg-white pt-16 md:pt-32 pb-24 md:pb-40 relative overflow-visible z-0">
        {/* Background image */}
        <div
          className="hidden md:block absolute inset-0 bg-no-repeat bg-right-top z-0 pointer-events-none"
          style={{
            backgroundImage: "url('/icons/background1.png')",
            backgroundSize: "50%",
          }}
        ></div>

        <div className="relative container mx-auto px-4 md:px-12 grid grid-cols-1 md:grid-cols-2 items-center gap-10 md:gap-12">
          {/* Gambar dokter dan icon */}
          <div className="relative z-10 scale-90 md:scale-100 origin-top md:origin-top-right mt-10 md:mt-0 order-1 md:order-2">
            <img
              src="/icons/hati.svg"
              alt="Heart Icon"
              className="absolute -top-6 left-6 md:-top-10 md:left-4 w-10 md:w-16 z-20"
            />
            <img
              src="/icons/rumah-sakit.svg"
              alt="Hospital Icon"
              className="absolute top-2 right-4 md:top-6 md:right-2 w-10 md:w-16 z-20"
            />
            <img
              src="/icons/logo.svg"
              alt="Shield Icon"
              className="absolute -bottom-6 right-6 md:-bottom-10 md:right-4 w-12 md:w-16 z-20"
            />
            <img
              src="/icons/Card Item.svg"
              alt="Plus Icon"
              className="absolute bottom-0 left-6 md:bottom-4 md:left-4 w-14 md:w-32 z-20"
            />
            <img
              src="/dokter-&-bundaran.png"
              alt="Dokter"
              className="rounded-lg w-full max-w-xs md:max-w-md mx-auto relative z-10"
            />
          </div>

          {/* Teks */}
          <div className="relative z-10 scale-100 origin-top-left text-center md:text-left order-2 md:order-1">
            <h2 className="text-[#E36CC5] text-3xl md:text-5xl font-bold mb-2 leading-tight">
              Teman Sehat Perempuan
            </h2>
            <h1 className="text-xl md:text-3xl font-semibold mb-4 leading-snug text-black">
              di setiap tahap kehidupan.
            </h1>
            <p className="text-gray-600 mb-6 text-sm md:text-lg leading-relaxed max-w-md mx-auto md:mx-0">
              Kami di sini bukan hanya sebagai layanan saja, tapi juga sebagai teman.
              Teman yang siap mendengar, membantu, dan memberikan solusi terbaik untuk Anda.
            </p>
            <Link
              to="/konsultasi"
              className="bg-[#E36CC5] text-white px-6 py-2 md:px-10 md:py-4 rounded-full hover:bg-pink-400 transition inline-block w-full md:w-auto text-center text-sm md:text-lg font-medium"
            >
              Konsultasi
            </Link>
            <div className="bg-[#E36CC5] mt-6 w-20 h-1 hidden md:block ml-10"></div>
          </div>
        </div>
      </section>

      <MemberSection />

      <section className="pt-24 md:pt-36 pb-24 md:pb-40">
        <div className="container mx-auto px-6 md:px-10 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-black mb-6">Mengapa memilih kami?</h2>
          <p className="text-gray-500 text-lg leading-relaxed max-w-4xl mx-auto">
            Siap mendampingi perempuan di setiap fase kehidupan. Kami hadir untuk membantu
            Anda memahami kondisi tubuh, memberikan panduan yang dipersonalisasi, dan
            mendukung Anda mencapai hidup yang lebih sehat — semua bisa diakses dengan mudah lewat ponsel Anda.
          </p>

          <div className="mt-16 grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center">
            {[
              {
                title: 'Fleksibel & Mudah di Akses',
                desc: 'Konsultasi kapan saja, di mana saja — cukup dari rumah lewat perangkat Anda.',
              },
              {
                title: 'Aman & Terpercaya',
                desc: 'Dibimbing oleh tenaga profesional dan menjaga privasi serta kenyamanan setiap pengguna.',
              },
              {
                title: 'Panduan Personal',
                desc: 'Setiap perempuan itu unik. Kami sesuaikan panduan berdasarkan kebutuhan pribadi Anda.',
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="p-8 w-full max-w-xs border border-gray-300 rounded-lg bg-white transition-transform duration-300 hover:scale-105 hover:shadow-lg"
              >
                <img src="/icons/content2.png" alt="Icon" className="w-24 mb-6 mx-auto" />
                <h3 className="text-xl font-semibold mb-3 text-left">{item.title}</h3>
                <p className="text-sm text-left text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="pt-24 pb-40 bg-white">
        <div className="container mx-auto px-6 md:px-10 text-center">
          <h2 className="text-3xl md:text-5xl font-semibold text-gray-600 mb-10">Layanan Tersedia</h2>
          <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-4 justify-items-center">
            {[
              { label: 'Spesialis Kandungan & Kebidanan', icon: '/icons/kandungan.png' },
              { label: 'Spesialis Saraf', icon: '/icons/saraf.png' },
              { label: 'Dokter Gigi Umum', icon: '/icons/gigi.png' },
              { label: 'Spesialis Jantung & Pembuluh Darah', icon: '/icons/jantung.png' },
              { label: 'Spesialis Mata', icon: '/icons/mata.png' },
              { label: 'Dokter Kulit', icon: '/icons/kulit.png' },
              { label: 'Dokter Gizi', icon: '/icons/gizi.png' },
              { label: 'Dokter Umum', icon: '/icons/dokterumum.png' },
            ].map((item, idx) => (
              <div key={idx} className="flex flex-col items-center text-center">
                <div className="w-24 h-24 md:w-32 md:h-32 border-2 rounded-full flex items-center justify-center mb-4">
                  <img src={item.icon} alt={item.label} className="w-10 md:w-14" />
                </div>
                <p className="text-sm md:text-lg font-medium text-black">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-pink-100 py-24">
        <div className="container mx-auto px-6 md:px-10 grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
          <div>
            <h3 className="text-xl md:text-3xl font-bold text-[#E36CC5] mb-2">| 1000+</h3>
            <p className="text-black text-xs md:text-base">Konsultasi per bulan, melayani kebutuhan kesehatan perempuan setiap hari.</p>
          </div>
          <div>
            <h3 className="text-xl md:text-3xl font-bold text-[#E36CC5] mb-2">| 99%</h3>
            <p className="text-black text-xs md:text-base">Tingkat kepuasan pengguna untuk layanan konsultasi kesehatan perempuan.</p>
          </div>
          <div>
            <h3 className="text-xl md:text-3xl font-bold text-[#E36CC5] mb-2">| 90%</h3>
            <p className="text-black text-xs md:text-base">Perempuan Indonesia mempercayai kami sebagai partner kesehatan terpercaya mereka.</p>
          </div>
          <div>
            <h3 className="text-xl md:text-3xl font-bold text-[#E36CC5] mb-2">| 100+</h3>
            <p className="text-black text-xs md:text-base">Tim profesional yang terdiri dari tenaga medis spesialis dan umum berpengalaman.</p>
          </div>
        </div>
      </section>

      <TestimonialsSection />
    </div>
  );
}

export default Beranda;
