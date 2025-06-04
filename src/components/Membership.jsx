// src/components/Membership.jsx

export default function Membership() {
    return (
        <div className="text-gray-700 font-sans">
            {/* Section 1 - Hero */}
            <section className="flex flex-col lg:flex-row items-start justify-center px-6 pt-10 lg:pt-16 gap-6 lg:gap-10">
                {/* Kartu harga */}
                <div className="bg-white border border-pink-300 rounded-2xl p-6 text-center shadow-md w-full max-w-sm">
                    {/* Gambar */}
                    <div className="mb-4 flex justify-center">
                        <img
                            src="/path/to/your/image.png"
                            alt="Icon Membership"
                            className="w-16 h-16 object-contain"
                        />
                    </div>
                    <hr className="border-t-2 border-pink-300 w-1/3 mx-auto mb-4" />
                    <h3 className="font-bold text-xl mb-1">Premium Monthly</h3>
                    <p className="text-sm text-gray-500 mb-4">Konsultasi Bebas Unlimited</p>
                    <p className="text-red-500 text-3xl font-extrabold mb-1">Rp 90k</p>
                    <p className="text-gray-500 mb-6">1 bulan</p>
                    <button className="text-pink-500 border border-pink-500 hover:bg-pink-50 px-6 py-2 rounded-full text-sm transition duration-200">
                        Langganan Sekarang
                    </button>
                </div>

                {/* Deskripsi */}
                <div className="max-w-xl">
                    <h1 className="text-3xl font-bold text-black mb-2">
                        <span className="text-pink-500">SheHealth</span> Membership
                    </h1>
                    <h2 className="text-2xl font-bold text-pink-500 mb-4 leading-snug">
                        Solusi Kesehatan Lengkap<br />dalam Genggaman
                    </h2>
                    <p className="text-gray-600 mb-4">
                        Dapatkan kebebasan berkonsultasi dengan dokter berpengalaman kapan saja, di mana saja.
                        Tanpa batasan waktu, tanpa antrian panjang, tanpa khawatir biaya konsultasi bertambah.
                    </p>
                    <ul className="space-y-2 text-sm">
                        <li className="flex items-start gap-2">
                            ✅ Konsultasi 24/7 tanpa batas dengan dokter umum ataupun spesialis selama satu bulan
                        </li>
                        <li className="flex items-start gap-2">
                            ✅ Reminder jadwal konsultasi
                        </li>
                        <li className="flex items-start gap-2">
                            ✅ Akses riwayat konsultasi kapan saja
                        </li>
                        <li className="flex items-start gap-2">
                            ✅ Privasi terjamin dan data aman
                        </li>
                    </ul>
                </div>
            </section>


            {/* Section 2 - Statistik */}
            <section className="bg-pink-400 text-white py-16 px-6 mt-16">
                <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10 max-w-6xl mx-auto">
                    {/* Kiri: Deskripsi */}
                    <div className="text-center md:text-left">
                        <h2 className="text-2xl font-semibold mb-2">
                            Mengalami Inovasi dan Kepercayaan
                        </h2>
                        <p className="text-sm leading-relaxed">
                            Bergabunglah dengan ratusan pasien yang telah merasakan pelayanan kesehatan digital terbaik.
                            Kami berkomitmen untuk memberikan layanan yang cepat, aman, dan terpercaya.
                        </p>
                    </div>

                    {/* Kanan: Statistik */}
                    <div className="grid grid-cols-2 gap-4 text-center">
                        <div className="border border-white p-6 rounded-lg flex items-start gap-4">
                            <img
                                src="/icons/anggota.png"
                                alt="Anggota"
                                className="w-20 h-20 object-contain"
                            />
                            <div>
                                <div className="text-3xl font-bold">200+</div>
                                <p className="text-sm mt-2">Anggota Berlangganan</p>
                            </div>
                        </div>

                        <div className="border border-white p-6 rounded-lg flex items-start gap-4">
                            <img
                                src="/icons/penghargaan.png"
                                alt="Anggota"
                                className="w-20 h-20 object-contain"
                            />
                            <div>
                                <div className="text-3xl font-bold">500+</div>
                                <p className="text-sm mt-2">Pasien nyaman</p>
                            </div>
                        </div>

                        <div className="border border-white p-6 rounded-lg flex items-start gap-4">
                            <img
                                src="/icons/konsultasi01.png"
                                alt="Anggota"
                                className="w-20 h-20 object-contain"
                            />
                            <div>
                                <div className="text-3xl font-bold">500+</div>
                                <p className="text-sm mt-2">Konsultasi Selesai</p>
                            </div>
                        </div>

                        <div className="border border-white p-6 rounded-lg flex items-start gap-4">
                            <img
                                src="/icons/rating.png"
                                alt="Anggota"
                                className="w-20 h-20 object-contain"
                            />
                            <div>
                                <div className="text-3xl font-bold">4.9</div>
                                <p className="text-sm mt-2">Rating Kepuasan</p>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </section>

            {/* Section 3 - Manfaat */}
            <section className="py-12 px-10 text-center">
                <h2 className="text-3xl font-bold mb-10">Manfaat Berlangganan</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="border rounded-xl p-6 shadow-sm hover:shadow-md transition duration-200">
                        <div className="text-pink-500 text-4xl mb-3">👩‍⚕️</div>
                        <h3 className="font-semibold text-lg mb-2">Dokter Berpengalaman</h3>
                        <p className="text-sm text-gray-500">
                            Tim dokter bersertifikat dengan pengalaman lebih dari 10 tahun.
                        </p>
                    </div>
                    <div className="border rounded-xl p-6 shadow-sm hover:shadow-md transition duration-200">
                        <div className="text-pink-500 text-4xl mb-3">🔐</div>
                        <h3 className="font-semibold text-lg mb-2">Data Aman</h3>
                        <p className="text-sm text-gray-500">
                            Privasi Anda terjamin dengan enkripsi dan perlindungan data terbaik.
                        </p>
                    </div>
                    <div className="border rounded-xl p-6 shadow-sm hover:shadow-md transition duration-200">
                        <div className="text-pink-500 text-4xl mb-3">⚡</div>
                        <h3 className="font-semibold text-lg mb-2">Akses Cepat</h3>
                        <p className="text-sm text-gray-500">
                            Respon cepat dari tim dokter dan layanan pelanggan setiap saat.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
}
