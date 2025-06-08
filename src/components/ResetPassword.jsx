import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Eye, EyeOff } from 'lucide-react';
import { IoArrowBack } from 'react-icons/io5';

export default function ResetPassword() {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  const [isConfirmVisible, setIsConfirmVisible] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password.length < 6) {
      alert("Password harus minimal 6 karakter.");
    } else if (password !== confirmPassword) {
      alert("Password tidak cocok!");
    } else {
      alert("Password berhasil diubah!");
      navigate('/login');
    }
  };

  return (
    <div className="flex justify-center px-6 mt-4 mb-6">
      <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 max-w-6xl w-full flex flex-col lg:flex-row p-6 sm:p-10 gap-6 sm:gap-10">
        {/* Form Kiri */}
        <div className="px-8 md:w-1/2 md:pr-6">
          <div
            onClick={() => navigate('/login')}
            className="flex items-center text-sm text-gray-600 cursor-pointer hover:text-[#E36CC5] transition mb-4 w-fit"
          >
            <IoArrowBack className="mr-2" />
            Sebelumnya
          </div>

          <div className="flex items-center justify-center text-[#E36CC5] font-bold text-lg mb-10">
            <img src="/LogoNew.png" alt="Logo" className="w-8 h-9 mr-2" />
            <span>SheHealth</span>
          </div>

          <h2 className="text-2xl font-bold text-gray-800 mb-2">Buat Password Baru</h2>
          <p className="text-gray-600 mb-6 text-sm">
            Kata sandi Anda sebelumnya telah diatur ulang. Silakan tetapkan kata sandi baru untuk akun Anda.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Input Password */}
            <div className="relative">
              <p className="mb-1">Masukkan Password Baru</p>
              <input
                type={isVisible ? 'text' : 'password'}
                placeholder="Masukkan password baru"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#E36CC5]"
              />
              <button
                type="button"
                onClick={() => setIsVisible(!isVisible)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500"
              >
                {isVisible ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>

            {/* Input Konfirmasi Password */}
            <div className="relative">
              <p className="mb-1">Masukkan Ulang Password Baru</p>
              <input
                type={isConfirmVisible ? 'text' : 'password'}
                placeholder="Masukkan ulang password baru"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#E36CC5]"
              />
              <button
                type="button"
                onClick={() => setIsConfirmVisible(!isConfirmVisible)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500"
              >
                {isVisible ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>

            <button
              type="submit"
              className="w-full bg-[#E36CC5] hover:bg-pink-600 text-white py-3 rounded-full font-semibold transition duration-200"
            >
              Atur Password
            </button>
          </form>
        </div>

        {/* Ilustrasi Kanan */}
        <div className="w-full md:w-1/2 mt-10 md:mt-0 flex items-center justify-center">
          <img
            src="/reset.png"
            alt="Ilustrasi Reset Password"
            className="w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
}
