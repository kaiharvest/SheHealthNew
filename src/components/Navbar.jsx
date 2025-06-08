import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);
  const location = useLocation();
  const navigate = useNavigate();

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [nama, setNama] = useState("");
  const [profileImage, setProfileImage] = useState("");

  useEffect(() => {
    const loggedIn = localStorage.getItem("isLoggedIn") === "true";
    const namaUser = localStorage.getItem("nama") || "";
    const image =
      localStorage.getItem("profileImage") ||
      "https://randomuser.me/api/portraits/women/44.jpg";

    setIsLoggedIn(loggedIn);
    setNama(namaUser);
    setProfileImage(image);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("nama");
    localStorage.removeItem("profileImage");
    setIsLoggedIn(false);
    setNama("");
    setProfileImage("");
    navigate("/login");
  };

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
        <div className="ml-2 md:ml-10 flex items-center space-x-3">
          <img src="/LogoNew.png" alt="Logo" className="w-8 h-9" />
          <span className="text-xl font-bold text-[#E36CC5]">SheHealth</span>
        </div>

        {/* Desktop & Tablet Menu */}
        <div className="hidden md:flex items-center space-x-10">
          <ul className="flex space-x-8 font-medium">
            {menuItems.map((item, idx) => {
              const isActive = location.pathname === item.path;
              return (
                <li key={idx}>
                  <Link
                    to={item.path}
                    className={`relative group transition ${
                      isActive
                        ? "text-[#E36CC5] font-semibold"
                        : "text-gray-700 hover:text-[#E36CC5]"
                    }`}
                  >
                    {item.name}
                    <span
                      className={`absolute left-0 -bottom-1 h-0.5 bg-[#E36CC5] transition-all duration-300 ${
                        isActive ? "w-full" : "w-0 group-hover:w-full"
                      }`}
                    ></span>
                  </Link>
                </li>
              );
            })}
          </ul>

          {!isLoggedIn ? (
            <Link to="/login">
              <button className="mr-2 md:mr-4 lg:mr-6 xl:mr-10 bg-[#E36CC5] text-white font-semibold px-6 py-2 rounded-full hover:bg-pink-500 transition duration-200">
                Masuk
              </button>
            </Link>
          ) : (
            <div className="flex items-center space-x-4 mr-2 md:mr-4 lg:mr-6 xl:mr-10">
              <Link to={`/user/${nama}`}>
                <img
                  src={profileImage}
                  alt={nama || "User Profile"}
                  className="w-10 h-10 rounded-full object-cover cursor-pointer"
                />
              </Link>
              {/* Logout tidak ditampilkan di view desktop/tablet */}
            </div>
          )}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="p-2 text-gray-700 hover:bg-pink-100 rounded-lg focus:outline-none transition"
          >
            <div className="space-y-1">
              <span
                className={`block h-0.5 w-6 bg-current transform transition duration-300 ${
                  isOpen ? "rotate-45 translate-y-1.5" : ""
                }`}
              />
              <span
                className={`block h-0.5 w-6 bg-current transition duration-300 ${
                  isOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`block h-0.5 w-6 bg-current transform transition duration-300 ${
                  isOpen ? "-rotate-45 -translate-y-1.5" : ""
                }`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md px-4 pb-4">
          <ul className="space-y-4 text-gray-800 font-medium pt-4">
            {menuItems.map((item, idx) => {
              const isActive = location.pathname === item.path;
              return (
                <li key={idx}>
                  <Link
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                    className={`block relative group transition ${
                      isActive ? "text-pink-500 font-semibold" : "hover:text-pink-500"
                    }`}
                  >
                    {item.name}
                    <span
                      className={`absolute left-0 -bottom-1 h-0.5 bg-pink-500 transition-all duration-300 ${
                        isActive ? "w-full" : "w-0 group-hover:w-full"
                      }`}
                    ></span>
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Mobile Profile Section + Logout */}
          {isLoggedIn && (
            <div className="mt-6 flex items-center space-x-4">
              <img
                src={profileImage}
                alt="Profile"
                className="w-10 h-10 rounded-full object-cover"
              />
              <div className="flex flex-col">
                <span className="font-semibold">{nama}</span>
              </div>
            </div>
          )}

          {!isLoggedIn && (
            <div className="mt-4">
              <Link to="/login">
                <button
                  onClick={() => setIsOpen(false)}
                  className="w-full bg-pink-500 text-white font-semibold px-4 py-2 rounded-full hover:bg-pink-600 transition duration-200"
                >
                  Masuk
                </button>
              </Link>
            </div>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
