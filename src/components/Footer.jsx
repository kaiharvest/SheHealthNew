import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-zinc-900 text-white py-10 px-4">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between gap-8">

                {/* Logo & Deskripsi */}
                <div className="md:w-1/4">
                    <h2 className="text-pink-500 text-2xl font-bold flex items-center gap-2">
                        <span className="text-3xl">🛡️</span> SheHealth
                    </h2>
                    <p className="mt-4 text-sm">
                        Solusi kesehatan, mudah diakses kapan saja melalui konsultasi online dengan dokter berpengalaman.
                    </p>
                    <div className="flex gap-3 mt-4">
                        <div className="w-10 h-10 bg-zinc-700 rounded-full flex items-center justify-center text-xl">▶️</div>
                        <div className="w-10 h-10 bg-zinc-700 rounded-full flex items-center justify-center text-xl">📷</div>
                        <div className="w-10 h-10 bg-zinc-700 rounded-full flex items-center justify-center text-xl">❌</div>
                    </div>
                </div>

                {/* Jelajahi */}
                <div>
                    <h3 className="text-lg font-semibold mb-2">Jelajahi</h3>
                    <ul className="space-y-1 text-sm">
                        <li>Beranda</li>
                        <li>Chat Dokter</li>
                        <li>Layanan Terdekat</li>
                        <li>Edukasi</li>
                    </ul>
                </div>

                {/* Informasi */}
                <div>
                    <h3 className="text-lg font-semibold mb-2">Informasi</h3>
                    <ul className="space-y-1 text-sm">
                        <li>Pusat Bantuan</li>
                        <li>Laporkan</li>
                    </ul>
                </div>

                {/* Hubungi Kami */}
                <div>
                    <h3 className="text-lg font-semibold mb-2">Hubungi Kami</h3>
                    <ul className="space-y-2 text-sm">
                        <li className="flex items-center gap-2">📧 email@sehatwanita.id</li>
                        <li className="flex items-center gap-2">📞 +62 8999 9991</li>
                    </ul>
                </div>
            </div>

            <hr className="my-8 border-zinc-700" />

            <p className="text-center text-xs text-zinc-400">© 2025 SheHealth. Semua hak dilindungi.</p>
        </footer>
    );
};

export default Footer;
