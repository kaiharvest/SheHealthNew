import React from "react";
import { useParams } from "react-router-dom";

const User = () => {
  const { nama } = useParams();
  return (
    <div className="min-h-screen bg-gray-50 p-6">

      {/* Banner */}
      <div className="bg-pink-100 text-center py-3 rounded-xl shadow text-xl font-semibold text-gray-800 mb-8">
        Profile
      </div>

      {/* Profile Picture */}
      <div className="flex justify-center mb-6 relative">
        <img
          src="https://randomuser.me/api/portraits/women/44.jpg"
          alt="Profile"
          className="w-32 h-32 rounded-full object-cover border-4 border-white shadow-md"
        />
        <button className="absolute bottom-0 right-[calc(50%-64px)] bg-pink-500 text-white p-2 rounded-full border-2 border-white">
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

      {/* Form */}
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block mb-1 text-sm font-medium text-gray-700">
            Nama
          </label>
          <input
            type="text"
            className="w-full border rounded-md px-4 py-2 text-sm bg-gray-100"
            value="Addina Zara"
            readOnly
          />
        </div>
        <div>
          <label className="block mb-1 text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            className="w-full border rounded-md px-4 py-2 text-sm bg-gray-100"
            value="hekel@gmail.com"
            readOnly
          />
        </div>
        <div>
          <label className="block mb-1 text-sm font-medium text-gray-700">
            Tanggal Lahir
          </label>
          <input
            type="text"
            className="w-full border rounded-md px-4 py-2 text-sm bg-gray-100"
            value="19 Januari 2007"
            readOnly
          />
        </div>
        <div>
          <label className="block mb-1 text-sm font-medium text-gray-700">
            No Telepon
          </label>
          <input
            type="text"
            className="w-full border rounded-md px-4 py-2 text-sm bg-gray-100"
            placeholder="Isi nomor telepon"
          />
        </div>
      </div>

      {/* Simpan Button */}
      <div className="flex justify-end mt-8">
        <button className="bg-pink-500 text-white px-8 py-2 rounded-full text-sm font-semibold shadow hover:bg-pink-600 transition">
          Simpan
        </button>
      </div>
    </div>
  );
};

export default User;
