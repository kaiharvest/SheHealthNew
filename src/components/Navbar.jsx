import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  const menuItems = [
    { name: "Beranda", path: "/" },
    { name: "Chat Dokter", path: "/chat" },
    { name: "Langganan", path: "/layanan" },
    { name: "Edukasi", path: "/edukasi" },
  ];

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <img src="/LogoNew.png" alt="Logo" className="w-8 h-8" />
          <span className="text-xl font-bold text-pink-500">SheHealth</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-10">
          <ul className="flex space-x-8 text-gray-700 font-medium">
            {menuItems.map((item, idx) => (
              <li key={idx}>
                <Link
                  to={item.path}
                  className="relative group hover:text-pink-500 transition"
                >
                  {item.name}
                  <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-pink-500 group-hover:w-full transition-all duration-300"></span>
                </Link>
              </li>
            ))}
          </ul>

          {/* Tombol Masuk */}
          <Link to="/login">
            <button className="ml-6 bg-pink-500 text-white font-semibold px-6 py-2 rounded-full hover:bg-pink-600 transition duration-200">
              Masuk
            </button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="p-2 text-gray-700 hover:bg-pink-100 rounded-lg focus:outline-none transition"
          >
            <div className="space-y-1">
              <span
                className={`block h-0.5 w-6 bg-current transform transition duration-300 ${isOpen ? "rotate-45 translate-y-1.5" : ""
                  }`}
              />
              <span
                className={`block h-0.5 w-6 bg-current transition duration-300 ${isOpen ? "opacity-0" : ""
                  }`}
              />
              <span
                className={`block h-0.5 w-6 bg-current transform transition duration-300 ${isOpen ? "-rotate-45 -translate-y-1.5" : ""
                  }`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md px-4 pb-4">
          <ul className="space-y-3 text-gray-800 font-medium">
            {menuItems.map((item, idx) => (
              <li key={idx}>
                <Link
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className="block relative group hover:text-pink-500 transition"
                >
                  {item.name}
                  <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-pink-500 group-hover:w-full transition-all duration-300"></span>
                </Link>
              </li>
            ))}
            <li>
              <Link to="/login" onClick={() => setIsOpen(false)}>
                <button className="w-full bg-pink-500 text-white font-semibold px-4 py-2 rounded-full hover:bg-pink-600 transition duration-200">
                  Masuk
                </button>
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
