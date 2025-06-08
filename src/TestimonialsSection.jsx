import React, { useRef } from "react";
import { FaStar } from "react-icons/fa";

const testimonials = [
    {
        name: "Alealea",
        age: "21 tahun",
        comment: "Saya merasa sangat nyaman saat konsultasi di sini. Tidak ada rasa malu. Terima kasih sudah jadi ruang aman untuk kami",
        stars: 5,
    },
    {
        name: "Raisa",
        age: "19 tahun",
        comment: "Penjelasan dokternya jelas dan ramah. Baru kali ini saya benar-benar paham soal siklus haid saya.",
        stars: 5,
    },
    {
        name: "Kamara",
        age: "35 tahun",
        comment: "Websitenya enak dilihat dan mudah dipakai. Cocok banget buat yang baru pertama kali cari info soal kesehatan reproduksi",
        stars: 5,
    },
    {
        name: "Fitri Nur",
        age: "23 tahun",
        comment: "Responsnya cepat dan sangat membantu! Saya jadi lebih percaya diri memahami tubuh saya sendiri.",
        stars: 5,
    },
    {
        name: "Dewi Sartika",
        age: "27 tahun",
        comment: "Layanan konsultasi ini sangat membantu saya mengerti lebih baik tentang kesehatan saya.",
        stars: 5,
    },
    {
        name: "Hana Putri",
        age: "22 tahun",
        comment: "Informasinya mudah dipahami dan sangat detail, membuat saya merasa lebih tenang.",
        stars: 5,
    },
    {
        name: "Nadia Ramadhani",
        age: "24 tahun",
        comment: "Dokternya ramah dan sabar menjawab pertanyaan saya. Sangat direkomendasikan!",
        stars: 5,
    },
];

const TestimonialsSection = () => {
    const carouselRef = useRef(null);

    const scrollLeft = () => {
        if (carouselRef.current) {
            carouselRef.current.scrollBy({ left: -320, behavior: "smooth" });
        }
    };

    const scrollRight = () => {
        if (carouselRef.current) {
            carouselRef.current.scrollBy({ left: 320, behavior: "smooth" });
        }
    };

    return (
        <section className="px-6 md:px-24 py-20 bg-white text-center">
            <h2 className="text-4xl font-bold mb-4">
                Apa Kata Mereka{" "}
                <span className="text-[#E36CC5]">Tentang Kami?</span>
            </h2>
            <p className="text-lg text-gray-600 mb-12 max-w-3xl mx-auto">
                Karena setiap cerita berarti, dan setiap pengalaman membentuk kami jadi lebih baik.
            </p>

            {/* Carousel container */}
            <div className="relative">
                <div
                    ref={carouselRef}
                    className="flex gap-6 overflow-hidden scroll-smooth snap-x snap-mandatory pointer-events-none px-3"
                >
                    <div className="flex gap-6 pointer-events-auto">
                        {testimonials.map((item, index) => (
                            <div
                                key={index}
                                className="bg-pink-50 rounded-2xl shadow-md p-6 text-left min-w-[300px] max-w-[300px] snap-center flex-shrink-0 transition duration-300 hover:shadow-xl"
                            >
                                <div className="flex items-center mb-4 gap-1 text-yellow-400">
                                    {Array.from({ length: item.stars }).map((_, i) => (
                                        <FaStar key={i} />
                                    ))}
                                </div>

                                <div className="flex items-center gap-4 mb-4">
                                    <img
                                        src={`${process.env.PUBLIC_URL}/testimonial.png`}
                                        alt={item.name}
                                        className="w-12 h-12 rounded-full object-cover border-2 border-[#E36CC5]"
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
                </div>

                {/* Arrow buttons */}
                <div className="flex justify-center gap-4 mt-8">
                    <button
                        onClick={scrollLeft}
                        className="w-10 h-10 rounded-full bg-[#E36CC5] text-white text-xl flex items-center justify-center hover:bg-pink-600 transition"
                    >
                        ‹
                    </button>
                    <button
                        onClick={scrollRight}
                        className="w-10 h-10 rounded-full bg-[#E36CC5] text-white text-xl flex items-center justify-center hover:bg-pink-600 transition"
                    >
                        ›
                    </button>
                </div>
            </div>
        </section>
    );
};

export default TestimonialsSection;
