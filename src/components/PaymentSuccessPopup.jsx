import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function PaymentSuccessPopup() {
    const [showPopup, setShowPopup] = useState(true);
    const navigate = useNavigate();

    if (!showPopup) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 z-50">
            <div className="bg-white p-6 rounded-2xl border-2 border-[#E36CC5] text-center shadow-lg max-w-sm w-full">
                <div className="flex justify-center mb-4">
                    <div className="bg-green-400 rounded-full p-4">
                        <svg
                            className="w-8 h-8 text-white"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={3}
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M5 13l4 4L19 7"
                            />
                        </svg>
                    </div>
                </div>
                <h2 className="text-lg font-bold text-black">Pembayaran berhasil!</h2>
                <p className="text-gray-500 mt-2">
                    Terimakasih telah berlangganan! Nikmati konsultasi unlimited selama 1
                    bulan bersama SheHealth! :)
                </p>
                <button
                    onClick={() => navigate("/")}
                    className="mt-4 bg-[#E36CC5] hover:bg-pink-400 text-white font-bold py-2 px-6 rounded-full"
                >
                    Beranda
                </button>
            </div>
        </div>
    );
}
