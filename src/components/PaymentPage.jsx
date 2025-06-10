import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function PaymentPage() {
    const navigate = useNavigate();
    const [selectedMethod, setSelectedMethod] = useState("");

    const subtotal = 110000;
    const discount = 20000;
    const total = subtotal - discount;

    const ewallets = ["Gopay", "ShopeePay", "Ovo", "Dana"];
    const mbankings = ["BRI", "BNI", "BCA"];

    const paymentImages = {
        Gopay: process.env.PUBLIC_URL + "/icons/gopay.svg",
        ShopeePay: process.env.PUBLIC_URL + "/icons/shopepay.svg",
        Ovo: process.env.PUBLIC_URL + "/icons/ovo.svg",
        Dana: process.env.PUBLIC_URL + "/icons/dana.svg",
        BRI: process.env.PUBLIC_URL + "/icons/bri.svg",
        BNI: process.env.PUBLIC_URL + "/icons/bni.svg",
        BCA: process.env.PUBLIC_URL + "/icons/bca.svg",
    };

    const renderOption = (name) => (
        <label
            key={name}
            className="flex items-center justify-between border rounded-lg px-4 py-2 cursor-pointer hover:border-pink-400 transition"
        >
            <div className="flex items-center gap-3">
                <img
                    src={paymentImages[name]}
                    alt={name}
                    className="w-6 h-6 object-contain"
                />
                <span className="font-medium">{name}</span>
            </div>
            <input
                type="radio"
                name="payment"
                value={name}
                checked={selectedMethod === name}
                onChange={() => setSelectedMethod(name)}
                className="form-radio text-pink-500"
            />
        </label>
    );

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
            <div className="bg-white w-full max-w-lg rounded-xl shadow-md p-6 space-y-6">
                <h2 className="text-center text-xl font-semibold text-gray-800">
                    Pilih metode pembayaran
                </h2>

                <div className="space-y-4">
                    <div>
                        <h3 className="font-semibold mb-2">E-Wallet</h3>
                        <div className="space-y-2">
                            {ewallets.map((item) => renderOption(item))}
                        </div>
                    </div>

                    <div>
                        <h3 className="font-semibold mt-4 mb-2">M-banking</h3>
                        <div className="space-y-2">
                            {mbankings.map((item) => renderOption(item))}
                        </div>
                    </div>
                </div>

                <div className="border-t pt-4 text-sm text-gray-600 space-y-1">
                    <div className="flex justify-between">
                        <span>Subtotal</span>
                        <span>Rp. {subtotal.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between">
                        <span>Diskon Member Baru</span>
                        <span className="text-red-500">-Rp. {discount.toLocaleString()}</span>
                    </div>
                </div>

                <div className="border-t pt-4 font-semibold text-lg flex justify-between">
                    <span>Total Pembayaran</span>
                    <span>Rp. {total.toLocaleString()}</span>
                </div>

                <button
                    onClick={() => navigate("/paymentpopup")}
                    className="w-full py-2 rounded-lg bg-gradient-to-r from-pink-400 to-purple-500 text-white font-semibold shadow hover:opacity-90 transition"
                >
                    Bayar Sekarang
                </button>
            </div>
        </div>
    );
}
