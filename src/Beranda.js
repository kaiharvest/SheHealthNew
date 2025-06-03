// Beranda.jsx
import './index.css';
import TestimonialsSection from './TestimonialsSection';
import MemberSection from './components/MemberSection';
import { Link } from 'react-router-dom';

function Beranda() {
  return (
    <div className="font-poppins">
      {/* Konten Utama 1 */}
      <section className="bg-white pt-24 md:pt-40 pb-24 md:pb-40">
        <div className="container mx-auto px-6 md:px-10 flex flex-col-reverse md:flex-row items-center gap-10">
          {/* Teks */}
          <div className="flex-1">
            <h2 className="text-pink-400 text-3xl md:text-5xl font-semibold mb-2">Teman Sehat Perempuan</h2>
            <h1 className="text-2xl md:text-4xl font-bold mb-6">di setiap tahap kehidupan.</h1>
            <p className="text-gray-600 mb-6 text-lg leading-relaxed">
              Kami di sini bukan hanya sebagai layanan saja, tapi juga sebagai teman.
              Teman yang siap mendengar, membantu, dan memberikan solusi terbaik untuk Anda.
            </p>
            <Link
              to="/konsultasi"
              className="bg-pink-400 text-white px-10 py-4 rounded-full hover:bg-pink-500 transition inline-block w-full md:w-auto text-center"
            >
              Konsultasi
            </Link>
            <div className='bg-pink-500 mt-8 w-24 h-1 hidden md:block'></div>
          </div>

          {/* Gambar */}
          <div className="flex-1 relative">
            <img src="/icons/hati.svg" alt="Heart Icon" className="absolute -top-5 left-36 w-20 z-30 hidden md:block" />
            <img src="/icons/rumah-sakit.svg" alt="Hospital Icon" className="absolute top-10 right-16 w-16 z-30 hidden md:block" />
            <img src="/icons/logo.svg" alt="Shield Icon" className="absolute -bottom-20 right-24 w-24 z-30 hidden md:block" />
            <img src="/icons/Card Item.svg" alt="Plus Icon" className="absolute bottom-1 left-16 w-28 md:w-56 z-30 hidden md:block" />
            <img src="/dokter & bundaran.png" alt="Dokter" className="rounded-lg w-full max-w-sm mx-auto relative z-10" />
          </div>
        </div>
      </section>

      {/* Anggota */}
      <MemberSection />

      {/* Konten Utama 2 */}
      <section className="pt-24 md:pt-36 pb-24 md:pb-40">
        <div className="container mx-auto px-6 md:px-10 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-black mb-6">Mengapa memilih kami?</h2>
          <p className="text-gray-500 text-lg leading-relaxed max-w-4xl mx-auto">
            Siap mendampingi perempuan di setiap fase kehidupan. Kami hadir untuk membantu
            Anda memahami kondisi tubuh, memberikan panduan yang dipersonalisasi, dan
            mendukung Anda mencapai hidup yang lebih sehat — semua bisa diakses dengan mudah lewat ponsel Anda.
          </p>

          {/* Cards */}
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

      {/* Konten Utama 3 - Layanan */}
      <section className="pt-24 pb-40 bg-pink-50">
        <div className="container mx-auto px-6 md:px-10 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-black mb-10">Layanan Tersedia</h2>

          <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-4 justify-items-center">
            {[
              { label: 'Spesialis Kandungan & Kebidanan', icon: '/icons/mata.png' },
              { label: 'Layanan Kandungan', icon: '/icons/kandungan.png' },
              { label: 'Layanan Psikologi', icon: '/icons/psikologi.png' },
              { label: 'Layanan Umum', icon: '/icons/umum.png' },
              { label: 'Layanan Nutrisi', icon: '/icons/nutrisi.png' },
              { label: 'Layanan Nutrisi', icon: '/icons/nutrisi.png' },
              { label: 'Layanan Nutrisi', icon: '/icons/nutrisi.png' },
              { label: 'Layanan Nutrisi', icon: '/icons/nutrisi.png' },
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

      {/* Testimoni */}
      <TestimonialsSection />
    </div>
  );
}

export default Beranda;
