import './index.css';

function Beranda() {
  return (
    <div className="font-poppins">
      {/* main konten ke 1 */}
      <section className="bg-white pt-40 pb-40">
        <div className="container mx-auto px-6 md:px-10 flex flex-col-reverse md:flex-row items-center gap-10">
          {/* Text Content */}
          <div className="flex-1">
            <h2 className="text-pink-400 text-6xl font-semibold mb-2">Teman Sehat Perempuan</h2>
            <h1 className="text-5xl md:text-4xl font-bold mb-4">di setiap tahap kehidupan.</h1>
            <p className="text-gray-600 mb-6 text-2xl">
              Kami di sini bukan hanya sebagai layanan saja, tapi juga sebagai teman.
              Teman yang siap mendengar, membantu, <br></br>dan memberikan solusi terbaik untuk Anda.
            </p>
            <div className="flex gap-4">
              <button className="bg-pink-400 text-1xl text-white px-10 py-4 rounded-full hover:bg-pink-500">
                Konsultasi
              </button>
            </div>
          </div>

          {/* Image Section */}
          <div className="flex-1 relative">
            <img
              src="/icons/hati.svg"
              alt="Heart Icon"
              className="absolute -top-5 left-36 w-28 md:w-24 z-30"
            />
            <img
              src="/icons/rumah-sakit.svg"
              alt="Hospital Icon"
              className="absolute top-10 right-16 w-20 md:w-20 z-30"
            />
            <img
              src="/icons/logo.svg"
              alt="Shield Icon"
              className="absolute -bottom-20 right-24 w-28 md:w-24 z-30"
            />
            <img
              src="/icons/Card Item.svg"
              alt="Plus Icon"
              className="absolute bottom-1 left-16 w-28 md:w-56 z-30"
            />
            <img
              src="/dokter & bundaran.png"
              alt="Dokter"
              className="rounded-lg w-full max-w-sm mx-auto relative z-10"
            />
          </div>
        </div>
      </section>
      {/* main konten ke 1 end */}

      {/* main konten ke 2 */}
      <section className="pt-36 pb-40">
        <div className="container mx-auto px-6 md:px-10 text-center">
          <h2 className="text-5xl font-bold text-black mb-4">Mengapa memilih kami?</h2>
          <p className="text-gray-500 text-xl">Siap mendampingi perempuan di setiap fase kehidupan. Kami hadir untuk membantu<br></br> Anda memahami kondisi tubuh, memberikan panduan yang dipersonalisasi, dan<br></br> mendukung Anda mencapai hidup yang lebih sehat — semua bisa diakses dengan<br></br> mudah lewat ponsel Anda.</p>
          <div className="mt-20 flex justify-center items-center">

            {/* cards wrapper */}
            <div className="mt-10 flex flex-wrap justify-center items-center">
              {/* satu card */}
              <div className="p-10 m-6 border-2 border-gray-400 rounded-lg bg-white transition-transform duration-300 hover:scale-105 hover:shadow-xl">
                <div className="grid">
                  <img
                    src="/icons/content2.png"
                    alt="Plus Icon"
                    className="w-40 -mt-12 -ml-16"
                  />
                  <p className="text-2xl mb-5 text-left">Fleksibel & Mudah di<br /> Akses</p>
                  <p className="text-sm text-left">Konsultasi kapan saja, di mana<br /> saja — cukup dari rumah lewat<br /> perangkat Anda.</p>
                </div>
              </div>
              {/* satu card end */}

              {/* dua card */}
              <div className="p-10 m-6 border-2 border-gray-400 rounded-lg bg-white transition-transform duration-300 hover:scale-105 hover:shadow-xl">
                <div className="grid">
                  <img
                    src="/icons/content2.png"
                    alt="Plus Icon"
                    className="w-40 -mt-12 -ml-16"
                  />
                  <p className="text-2xl mb-5 text-left">Aman & Terpercaya</p>
                  <p className="text-sm text-left">Dibimbing oleh tenaga profesional<br /> dan menjaga privasi serta kenyamanan<br /> setiap pengguna.</p>
                </div>
              </div>
              {/* dua card end */}

              {/* tiga card */}
              <div className="p-10 m-6 border-2 border-gray-400 rounded-lg bg-white transition-transform duration-300 hover:scale-105 hover:shadow-xl">
                <div className="grid">
                  <img
                    src="/icons/content2.png"
                    alt="Plus Icon"
                    className="w-40 -mt-12 -ml-16"
                  />
                  <p className="text-2xl mb-5 text-left">Panduan Personal</p>
                  <p className="text-sm text-left">Setiap perempuan itu unik.<br /> Kami sesuaikan panduan<br /> berdasarkan kebutuhan pribadi Anda.</p>
                </div>
              </div>
              {/* tiga card end */}
            </div>
          </div>

        </div>
      </section>
      {/* main konten ke 2 end */}

      {/* main konten ke 3 */}
      <section className="pt-36 pb-40">
        <div className="container mx-auto px-6 md:px-10 text-center">
          <h2 className="text-5xl font-bold text-black mb-4">Layanan Tersedia</h2>
          <div className="mt-20 flex justify-center items-center">

            {/* cards wrapper */}
            <div className="mt-20 flex flex-wrap justify-center items-center">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-28">

                <div className="flex flex-col items-center px-4">
                  <div className="w-40 h-40 border-2 rounded-full flex items-center justify-center mb-4">
                    <img src="/icons/mata.png" alt="Layanan Mata" className="w-16 h-12" />
                  </div>
                  <p className="text-xl font-medium text-black">Spesialis Kandungan &
                    Kebidanan</p>
                </div>

                <div className="flex flex-col items-center">
                  <div className="w-40 h-40 border-2 rounded-full flex items-center justify-center mb-4">
                    <img src="/icons/kandungan.png" alt="Layanan Kandungan" />
                  </div>
                  <p className="text-xl font-medium text-black">Layanan Kandungan</p>
                </div>

                <div className="flex flex-col items-center">
                  <div className="w-40 h-40 border-2 rounded-full flex items-center justify-center mb-4">
                    <img src="/icons/psikologi.png" alt="Layanan Psikologi" />
                  </div>
                  <p className="text-xl font-medium text-black">Layanan Psikologi</p>
                </div>

                <div className="flex flex-col items-center">
                  <div className="w-40 h-40 border-2 rounded-full flex items-center justify-center mb-4">
                    <img src="/icons/umum.png" alt="Layanan Umum" />
                  </div>
                  <p className="text-xl font-medium text-black">Layanan Umum</p>
                </div>

                <div className="flex flex-col items-center">
                  <div className="w-40 h-40 border-2 rounded-full flex items-center justify-center mb-4">
                    <img src="/icons/nutrisi.png" alt="Layanan Nutrisi" />
                  </div>
                  <p className="text-xl font-medium text-black">Layanan Nutrisi</p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>
      {/* main konten ke 3 end */}

      

    </div>
  );
}

export default Beranda;
