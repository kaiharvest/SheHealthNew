// src/components/Membership.jsx

import { useNavigate } from 'react-router-dom';

export default function Membership() {
    const navigate = useNavigate();

    return (
        <div className="text-gray-700 font-sans">
            {/* Section 1 - Membership Card & Description */}
            <section className="flex flex-col lg:flex-row items-center lg:items-start justify-center px-4 sm:px-6 pt-10 lg:pt-16 gap-6 lg:gap-10">
                {/* Kartu harga */}
                <div className="bg-white border border-pink-300 rounded-2xl p-6 text-center shadow-md w-full max-w-sm order-2 lg:order-none">
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
                    <button
                        onClick={() => navigate("/payment")}
                        className="text-pink-500 border border-pink-500 hover:bg-pink-50 px-6 py-2 rounded-full text-sm transition duration-200"
                    >
                        Langganan Sekarang
                    </button>
                </div>

                {/* Deskripsi */}
                <div className="max-w-2xl text-center lg:text-left order-1 lg:order-none">
                    <h1 className="text-2xl sm:text-3xl font-bold text-black mb-2">
                        <span className="text-pink-500">SheHealth</span> Membership
                    </h1>
                    <h2 className="text-xl sm:text-2xl font-bold text-pink-500 mb-4 leading-snug">
                        Solusi Kesehatan Lengkap<br className="hidden sm:block" />dalam Genggaman
                    </h2>
                    <p className="text-gray-600 mb-4 text-sm sm:text-base">
                        Dapatkan kebebasan berkonsultasi dengan dokter berpengalaman kapan saja, di mana saja.
                        Tanpa batasan waktu, tanpa antrian panjang, tanpa khawatir biaya konsultasi bertambah.
                    </p>
                    <ul className="space-y-3 text-sm sm:text-base text-left max-w-md mx-auto lg:mx-0">
                        {[
                            "Konsultasi 24/7 tanpa batas dengan dokter umum ataupun spesialis",
                            "Reminder jadwal konsultasi",
                            "Akses riwayat konsultasi kapan saja",
                            "Privasi terjamin dan data aman"
                        ].map((text, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                                <span className="text-green-600 text-xl">✅</span>
                                <span>{text}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            {/* Section 2 - Statistik */}
            <section className="bg-pink-400 text-white py-12 sm:py-16 px-4 sm:px-6 mt-16">
                <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10 max-w-6xl mx-auto">
                    <div className="text-center md:text-left">
                        <h2 className="text-2xl font-semibold mb-2">Mengalami Inovasi dan Kepercayaan</h2>
                        <p className="text-sm leading-relaxed">
                            Bergabunglah dengan ratusan pasien yang telah merasakan pelayanan kesehatan digital terbaik.
                            Kami berkomitmen untuk memberikan layanan yang cepat, aman, dan terpercaya.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-2 gap-4 text-center">
                        {[
                            { icon: "anggota.png", title: "200+", desc: "Anggota Berlangganan" },
                            { icon: "penghargaan.png", title: "500+", desc: "Pasien nyaman" },
                            { icon: "konsultasi01.png", title: "500+", desc: "Konsultasi Selesai" },
                            { icon: "rating.png", title: "4.9", desc: "Rating Kepuasan" }
                        ].map((item, index) => (
                            <div key={index} className="border border-white p-4 sm:p-6 rounded-lg flex gap-4 items-start">
                                <img
                                    src={`/icons/${item.icon}`}
                                    alt={item.desc}
                                    className="w-14 sm:w-20 h-14 sm:h-20 object-contain"
                                />
                                <div>
                                    <div className="text-xl sm:text-3xl font-bold">{item.title}</div>
                                    <p className="text-xs sm:text-sm mt-1 sm:mt-2">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Section 3 - Manfaat */}
            <section className="py-12 px-4 sm:px-10 text-center">
                <h2 className="text-2xl sm:text-3xl font-bold mb-10">Manfaat Berlangganan</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {[
                        { icon: "👩‍⚕️", title: "Dokter Berpengalaman", desc: "Tim dokter bersertifikat dengan pengalaman lebih dari 10 tahun." },
                        { icon: "🔐", title: "Data Aman", desc: "Privasi Anda terjamin dengan enkripsi dan perlindungan data terbaik." },
                        { icon: "⚡", title: "Akses Cepat", desc: "Respon cepat dari tim dokter dan layanan pelanggan setiap saat." }
                    ].map((item, index) => (
                        <div key={index} className="border rounded-xl p-6 shadow-sm hover:shadow-md transition duration-200">
                            <div className="text-pink-500 text-4xl mb-3">{item.icon}</div>
                            <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                            <p className="text-sm text-gray-500">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}
