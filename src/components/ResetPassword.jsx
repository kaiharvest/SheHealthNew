import React, { useState } from 'react';

export default function ResetPassword() {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  const [isConfirmVisible, setIsConfirmVisible] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Password tidak cocok!");
    } else {
      alert("Password berhasil diubah!");
      // Kirim password ke backend
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 px-4">
      <div className="bg-white shadow-md rounded-lg flex flex-col md:flex-row p-6 md:p-10 max-w-5xl w-full">
        {/* Left side - Form */}
        <div className="w-full md:w-1/2">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Buat password baru</h2>
          <p className="text-gray-600 mb-6 text-sm">
            Kata sandi Anda sebelumnya telah diatur ulang. Tetapkan kata sandi baru untuk akun Anda.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <input
                type={isVisible ? "text" : "password"}
                placeholder="Masukkan password baru"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-pink-500"
              />
              <button
                type="button"
                onClick={() => setIsVisible(!isVisible)}
                className="absolute mt-[-2.5rem] right-4 text-gray-500"
              >
                👁
              </button>
            </div>
            <div>
              <input
                type={isConfirmVisible ? "text" : "password"}
                placeholder="Masukkan ulang password baru"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-pink-500"
              />
              <button
                type="button"
                onClick={() => setIsConfirmVisible(!isConfirmVisible)}
                className="absolute mt-[-2.5rem] right-4 text-gray-500"
              >
                👁
              </button>
            </div>
            <button
              type="submit"
              className="w-full bg-pink-500 hover:bg-pink-600 text-white py-3 rounded font-semibold"
            >
              Atur Password
            </button>
          </form>
        </div>

        {/* Right side - Illustration */}
        <div className="w-full md:w-1/2 mt-8 md:mt-0 flex items-center justify-center">
          <img
            src="/path/to/reset-password-image.png" // Ganti dengan path gambar lokal atau URL
            alt="Reset Password Illustration"
            className="max-w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
}
