import React, { useState } from 'react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <nav className="bg-white shadow-lg sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-2 py-6 flex items-center justify-between">
                {/* Logo dan Nama */}
                <div className="flex items-center space-x-2">
                    {/* Tempat untuk SVG */}
                    <div className="w-6 h-6">
                    </div>
                    <img src="/LogoNew.png" alt="Logo" className="w-8 h-8" />
                    <span className="text-pink-400 font-bold text-lg">SheHealth</span>
                </div>


                {/* Menu - Desktop */}
                <ul className="hidden md:flex space-x-10 text-gray-800 font-medium">
                    {['Beranda', 'Chat Dokter', 'Layanan Terdekat', 'Edukasi'].map((item, idx) => (
                        <li key={idx}>
                            <a
                                href="#"
                                className="relative group hover:text-pink-500 transition duration-300"
                            >
                                {item}
                                <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-pink-500 transition-all duration-300 group-hover:w-full"></span>
                            </a>
                        </li>
                    ))}
                </ul>

                {/* Tombol Masuk - Desktop */}
                <div className="hidden md:block">
                    <button className="bg-pink-400 text-white font-semibold px-6 py-2 rounded-full hover:bg-pink-500 transition duration-200">
                        Masuk
                    </button>
                </div>

                {/* Hamburger - Mobile */}
                <div className="md:hidden">
                    <button
                        onClick={toggleMenu}
                        className="p-2 rounded-lg text-gray-700 hover:bg-pink-100 focus:outline-none transition duration-200"
                    >
                        <div className="space-y-1">
                            <span
                                className={`block h-0.5 w-6 bg-current transform transition duration-300 ease-in-out ${isOpen ? 'rotate-45 translate-y-1.5' : ''
                                    }`}
                            ></span>
                            <span
                                className={`block h-0.5 w-6 bg-current transition duration-300 ease-in-out ${isOpen ? 'opacity-0' : ''
                                    }`}
                            ></span>
                            <span
                                className={`block h-0.5 w-6 bg-current transform transition duration-300 ease-in-out ${isOpen ? '-rotate-45 -translate-y-1.5' : ''
                                    }`}
                            ></span>
                        </div>
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden px-4 pb-4">
                    <ul className="space-y-3 text-gray-800 font-medium">
                        {['Beranda', 'Chat Dokter', 'Layanan Terdekat', 'Edukasi'].map((item, idx) => (
                            <li key={idx}>
                                <a
                                    href="#"
                                    className="block relative group hover:text-pink-500 transition duration-300"
                                >
                                    {item}
                                    <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-pink-500 transition-all duration-300 group-hover:w-full"></span>
                                </a>
                            </li>
                        ))}
                        <li>
                            <button className="w-full bg-pink-400 text-white font-semibold px-4 py-2 rounded-full hover:bg-pink-500 transition duration-200">
                                Masuk
                            </button>
                        </li>
                    </ul>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
