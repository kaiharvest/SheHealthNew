import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

const testimonials = [
    {
        name: "Alealea",
        age: "21 tahun",
        comment:
            "Saya merasa sangat nyaman saat konsultasi di sini. Tidak ada rasa malu. Terima kasih sudah jadi ruang aman untuk kami",
        stars: 5,
        image: "/img-placeholder.png",
    },
    {
        name: "Raisa",
        age: "19 tahun",
        comment:
            "Penjelasan dokternya jelas dan ramah. Baru kali ini saya benar-benar paham soal siklus haid saya.",
        stars: 5,
        image: "/img-placeholder.png",
    },
    {
        name: "Kamara",
        age: "35 tahun",
        comment:
            "Websitenya enak dilihat dan mudah dipakai. Cocok banget buat yang baru pertama kali cari info soal kesehatan reproduksi",
        stars: 5,
        image: "/img-placeholder.png",
    },
    {
        name: "Fitri Nur",
        age: "23 tahun",
        comment:
            "Responsnya cepat dan sangat membantu! Saya jadi lebih percaya diri memahami tubuh saya sendiri.",
        stars: 5,
        image: "/img-placeholder.png",
    },
    {
        name: "Dewi Sartika",
        age: "27 tahun",
        comment:
            "Layanan konsultasi ini sangat membantu saya mengerti lebih baik tentang kesehatan saya.",
        stars: 5,
        image: "/img-placeholder.png",
    },
    {
        name: "Hana Putri",
        age: "22 tahun",
        comment:
            "Informasinya mudah dipahami dan sangat detail, membuat saya merasa lebih tenang.",
        stars: 5,
        image: "/img-placeholder.png",
    },
    {
        name: "Nadia Ramadhani",
        age: "24 tahun",
        comment:
            "Dokternya ramah dan sabar menjawab pertanyaan saya. Sangat direkomendasikan!",
        stars: 5,
        image: "/img-placeholder.png",
    },
];

const TestimonialsSection = () => {
    const [currentPage, setCurrentPage] = useState(0);
    const itemsPerPage = 3;

    const startIndex = currentPage * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentTestimonials = testimonials.slice(startIndex, endIndex);
    const totalPages = Math.ceil(testimonials.length / itemsPerPage);

    const handlePrev = () => {
        if (currentPage > 0) setCurrentPage(currentPage - 1);
    };

    const handleNext = () => {
        if (currentPage < totalPages - 1) setCurrentPage(currentPage + 1);
    };

    return (
        <section className="px-6 md:px-24 py-20 bg-white text-center">
            <h2 className="text-4xl font-bold mb-4">
                Apa Kata Mereka <span className="text-[#E36CC5]">Tentang Kami?</span>
            </h2>
            <p className="text-lg text-gray-600 mb-12 max-w-3xl mx-auto">
                Karena setiap cerita berarti, dan setiap pengalaman membentuk kami jadi lebih baik.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {currentTestimonials.map((item, index) => (
                    <div
                        key={index}
                        className="bg-pink-50 rounded-2xl shadow-md p-6 text-left hover:shadow-lg transition duration-300"
                    >
                        <div className="flex items-center mb-4 gap-1 text-yellow-400">
                            {Array.from({ length: item.stars }).map((_, i) => (
                                <FaStar key={i} />
                            ))}
                        </div>

                        <div className="flex items-center gap-4 mb-4">
                            <img
                                src="/testimonial.png"
                                alt={item.name}
                                className="w-12 h-12 rounded-full object-cover border-2 border-pink-300"
                            />
                            <div>
                                <p className="font-semibold text-gray-900">{item.name}</p>
                                <p className="text-sm text-gray-500">{item.age}</p>
                            </div>
                        </div>

                        <p className="text-gray-700 text-sm leading-relaxed">
                            “{item.comment}”
                        </p>
                    </div>
                ))}
            </div>

            {/* Navigasi Panah */}
            {totalPages > 1 && (
                <div className="flex justify-center gap-4 mt-12">
                    <button
                        onClick={handlePrev}
                        disabled={currentPage === 0}
                        className="w-10 h-10 rounded-full bg-[#E36CC5] text-white text-xl flex items-center justify-center hover:bg-pink-600 transition disabled:opacity-40"
                    >
                        ‹
                    </button>
                    <button
                        onClick={handleNext}
                        disabled={currentPage === totalPages - 1}
                        className="w-10 h-10 rounded-full bg-[#E36CC5] text-white text-xl flex items-center justify-center hover:bg-pink-600 transition disabled:opacity-40"
                    >
                        ›
                    </button>
                </div>
            )}
        </section>
    );
};

export default TestimonialsSection;
