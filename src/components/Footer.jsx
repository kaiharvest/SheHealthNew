import React from "react";

const Footer = () => {
  return (
    <footer
      className="text-white py-10 px-8"
      style={{ backgroundColor: "#343434" }}
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between gap-8">
        {/* Logo & Deskripsi */}
        <div className="md:w-1/4">
          <h2 className="text-2xl font-bold flex items-center gap-3 text-[#E36CC5]">
            <img src="/icons/logo.svg" alt="Logo" className="w-7 h-7" />
            SheHealth
          </h2>

          <p className="mt-4 text-sm">
            Solusi kesehatan, mudah diakses kapan saja melalui konsultasi online
            dengan dokter berpengalaman.
          </p>
          <div className="flex gap-3 mt-4">
            <button
              onClick={() => window.open("https://youtube.com", "_blank")}
              className="w-10 h-10 rounded-full flex items-center justify-center"
            >
              <img
                src="/icons/youtube.svg"
                alt="Play Icon"
                className="w-8 h-8"
              />
            </button>
            <button
              onClick={() => window.open("https://instagram.com", "_blank")}
              className="w-10 h-10 rounded-full flex items-center justify-center"
            >
              <img
                src="/icons/instagram.svg"
                alt="Play Icon"
                className="w-8 h-8"
              />
            </button>
            <button
              onClick={() => window.open("https://x.com", "_blank")}
              className="w-10 h-10 rounded-full flex items-center justify-center"
            >
              <img src="/icons/x.svg" alt="Play Icon" className="w-8 h-8" />
            </button>
          </div>
        </div>

        {/* Jelajahi */}
        <div>
          <h3 className="text-lg font-bold mb-2">Jelajahi</h3>
          <ul className="space-y-1 text-sm">
            <li>Beranda</li>
            <li>Chat Dokter</li>
            <li>Layanan Terdekat</li>
            <li>Edukasi</li>
          </ul>
        </div>

        {/* Informasi */}
        <div>
          <h3 className="text-lg font-bold mb-2">Informasi</h3>
          <ul className="space-y-1 text-sm">
            <li>Pusat Bantuan</li>
            <li>Laporkan</li>
          </ul>
        </div>

        {/* Hubungi Kami */}
        <div>
          <h3 className="text-lg font-bold mb-2">Hubungi Kami</h3>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center gap-2">
              <img
                src="/icons/email.svg"
                alt="Email Icon"
                className="w-4 h-4"
              />
              email@sehatwanita.id
            </li>
            <li className="flex items-center gap-2">
              <img
                src="/icons/call.svg"
                alt="Phone Icon"
                className="w-4 h-4"
              />
              +62 8999 9991
            </li>
          </ul>
        </div>
      </div>

      <hr className="my-8 border-zinc-700" />

      <p className="text-center text-xs text-zinc-400">
        © 2025 SheHealth. Semua hak dilindungi.
      </p>
    </footer>
  );
};

export default Footer;
