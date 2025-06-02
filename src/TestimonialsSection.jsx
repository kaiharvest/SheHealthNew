import React, { useState } from 'react';

const testimonials = [
    {
        name: "Alealea Wekwow",
        age: "21 tahun",
        comment: "Saya merasa sangat nyaman saat konsultasi di sini. Tidak ada rasa malu. Terima kasih sudah jadi ruang aman untuk kami",
        stars: 5,
        image: "/img-placeholder.png",
    },
    {
        name: "Raisa Asekk",
        age: "19 tahun",
        comment: "Penjelasan dokternya jelas dan ramah. Baru kali ini saya benar-benar paham soal siklus haid saya.",
        stars: 5,
        image: "/img-placeholder.png",
    },
    {
        name: "Kamara",
        age: "35 tahun",
        comment: "Websitenya enak dilihat dan mudah dipakai. Cocok banget buat yang baru pertama kali cari info soal kesehatan reproduksi",
        stars: 5,
        image: "/img-placeholder.png",
    },
    {
        name: "Fitri Nur",
        age: "23 tahun",
        comment: "Responsnya cepat dan sangat membantu! Saya jadi lebih percaya diri memahami tubuh saya sendiri.",
        stars: 5,
        image: "/img-placeholder.png",
    },
    {
        name: "Dewi Sartika",
        age: "27 tahun",
        comment: "Layanan konsultasi ini sangat membantu saya mengerti lebih baik tentang kesehatan saya.",
        stars: 5,
        image: "/img-placeholder.png",
    },
    {
        name: "Hana Putri",
        age: "22 tahun",
        comment: "Informasinya mudah dipahami dan sangat detail, membuat saya merasa lebih tenang.",
        stars: 5,
        image: "/img-placeholder.png",
    },
    {
        name: "Nadia Ramadhani",
        age: "24 tahun",
        comment: "Dokternya ramah dan sabar menjawab pertanyaan saya. Sangat direkomendasikan!",
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
        <section className="px-40 py-20 bg-white text-center">
            <h2 className="text-4xl font-bold mb-4">
                Apa Kata Mereka <span className="text-pink-500">Tentang Kami?</span>
            </h2>
            <p className="text-lg text-gray-700 mb-12">
                Karena setiap cerita berarti, dan setiap pengalaman membentuk kami jadi lebih baik.
            </p>

            <div className="flex flex-wrap justify-center gap-6 px-4">
                {currentTestimonials.map((item, index) => (
                    <div key={index} className="bg-pink-100 rounded-2xl shadow-md p-6 max-w-xs text-left">
                        <div className="flex items-center mb-4">
                            <div className="flex text-yellow-400 mr-2">
                                {'★'.repeat(item.stars)}
                            </div>
                        </div>
                        <div className="flex items-center gap-3 mb-3">
                            <img
                                src={item.image}
                                alt={item.name}
                                className="w-10 h-10 rounded-full object-cover"
                            />
                            <div>
                                <p className="font-bold">{item.name}</p>
                                <p className="text-sm text-gray-600">{item.age}</p>
                            </div>
                        </div>
                        <p className="text-sm text-gray-800">
                            {item.comment}
                        </p>
                    </div>
                ))}
            </div>

            {/* Navigasi Panah */}
            {totalPages > 1 && (
                <div className="flex justify-center gap-4 mt-10">
                    <button
                        onClick={handlePrev}
                        className="bg-pink-500 text-white w-10 h-10 rounded-full text-xl disabled:opacity-50"
                        disabled={currentPage === 0}
                    >
                        ‹
                    </button>
                    <button
                        onClick={handleNext}
                        className="bg-pink-500 text-white w-10 h-10 rounded-full text-xl disabled:opacity-50"
                        disabled={currentPage === totalPages - 1}
                    >
                        ›
                    </button>
                </div>
            )}
        </section>
    );
};

export default TestimonialsSection;
