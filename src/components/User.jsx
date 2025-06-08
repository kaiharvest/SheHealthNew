import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const User = () => {
  const { nama } = useParams();
  const navigate = useNavigate();

  // State untuk form
  const [formData, setFormData] = useState({
    nama: "Addina Zara",
    email: "hekel@gmail.com",
    tanggalLahir: "19 Januari 2007",
    noTelepon: "",
  });

  // Handle perubahan input
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle simpan data (contoh: alert, bisa diganti API call)
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Data disimpan:\n" + JSON.stringify(formData, null, 2));
    // Di sini bisa tambahkan logic simpan ke backend/API
  };

  // Logout (contoh)
  const handleLogout = () => {
    // localStorage.removeItem("token"); misal hapus token
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8">
      {/* Header dengan judul dan tombol logout */}
      <header className="flex justify-between items-center bg-pink-100 rounded-xl p-4 shadow mb-8 relative">
        <h1 className="text-2xl font-semibold text-gray-800 w-full text-center">
          Profil 
        </h1>
        <button
          onClick={handleLogout}
          className="bg-[#E36CC5] hover:bg-pink-600 text-white px-4 py-2 rounded-full text-sm font-semibold transition absolute top-1/2 -translate-y-1/2 right-8"
          aria-label="Logout"
        >
          Logout
        </button>
      </header>

      {/* Profile Picture */}
      <div className="flex justify-center mb-8 relative">
        <img
          src="https://randomuser.me/api/portraits/women/44.jpg"
          alt="Profile"
          className="w-28 h-28 sm:w-32 sm:h-32 rounded-full object-cover border-4 border-white shadow-md"
        />
        
        <button
          aria-label="Edit Profile Picture"
          className="absolute bottom-0 right-[calc(50%-56px)] sm:right-[calc(50%-64px)] bg-pink-500 text-white p-2 rounded-full border-2 border-white shadow-lg hover:bg-pink-600 transition"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15.232 5.232l3.536 3.536M9 11l6-6 3 3-6 6H9v-3z"
            />
          </svg>
        </button>
      </div>

      {/* Form Profile */}
      <form
        onSubmit={handleSubmit}
        className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6 bg-white p-6 rounded-xl shadow-md"
      >
        <div>
          <label className="block mb-1 text-sm font-medium text-gray-700">
            Nama
          </label>
          <input
            type="text"
            name="nama"
            className="w-full border border-gray-300 rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-pink-500"
            value={formData.nama}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label className="block mb-1 text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            name="email"
            className="w-full border border-gray-300 rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-pink-500"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label className="block mb-1 text-sm font-medium text-gray-700">
            Tanggal Lahir
          </label>
          <input
            type="text"
            name="tanggalLahir"
            className="w-full border border-gray-300 rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-pink-500"
            value={formData.tanggalLahir}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label className="block mb-1 text-sm font-medium text-gray-700">
            No Telepon
          </label>
          <input
            type="text"
            name="noTelepon"
            className="w-full border border-gray-300 rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-pink-500"
            value={formData.noTelepon}
            onChange={handleChange}
            placeholder="Isi nomor telepon"
          />
        </div>

        {/* Tombol Simpan */}
        <div className="sm:col-span-2 flex justify-end mt-2">
          <button
            type="submit"
            className="bg-[#E36CC5] text-white px-8 py-3 rounded-full text-sm font-semibold shadow hover:bg-pink-600 transition"
          >
            Simpan
          </button>
        </div>
      </form>
    </div>
  );
};

export default User;