import React, { useState, useEffect, useRef } from 'react';

const ChatApp = () => {
    const [selectedChat, setSelectedChat] = useState(0);
    const [message, setMessage] = useState('');
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const chatEndRef = useRef(null);

    const chatList = [
        {
            id: 1,
            name: 'dr. Nindy, Sp.PD',
            specialty: 'Polt, Kes, Spesialis penyakit dalam Anak',
            avatar: '👨‍⚕️',
            isActive: true
        },
        {
            id: 2,
            name: 'dr. Nindy, Sp.PD',
            specialty: 'Polt, Kes, Spesialis penyakit dalam Anak',
            avatar: '👨‍⚕️',
            isActive: false
        },
        {
            id: 3,
            name: 'dr. Nindy, Sp.PD',
            specialty: 'Polt, Kes, Spesialis penyakit dalam Anak',
            avatar: '👨‍⚕️',
            isActive: false
        }
    ];

    const [messages, setMessages] = useState([
        {
            id: 1,
            sender: 'doctor',
            text: 'Selamat siang, Anis. Saya dr. Nindy. Terima kasih telah memilih layanan konsultasi kami. Bagaimana saya bisa membantu Anda hari ini?',
            time: '10:30',
            avatar: '👨‍⚕️'
        },
        {
            id: 2,
            sender: 'user',
            text: 'Selamat siang, Dokter. Terima kasih. Saya ingin berkonsultasi mengenai sakit kepala yang saya alami hampir setiap hari selama 2 minggu terakhir. Biasanya terjadi di pagi hari dan terkadang disertai mual.',
            time: '10:30'
        },
        {
            id: 3,
            sender: 'doctor',
            text: 'Baik, Budi. Saya mengerti keluhan Anda. Apakah intensitas nyeri kepala tersebut bertambah dari waktu ke waktu? Dan apakah ada aktivitas atau makanan tertentu yang memicu sakit kepala tersebut?',
            time: '10:30',
            avatar: '👨‍⚕️'
        },
        {
            id: 4,
            sender: 'user',
            text: 'Ya, sepertinya makin terasa setiap harinya. Saya perhatikan kadang muncul setelah minum kopi atau kurang tidur.',
            time: '10:31'
        },
    ]);

    const handleSendMessage = () => {
        if (message.trim()) {
            const newMessage = {
                id: messages.length + 1,
                sender: 'user',
                text: message,
                time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
            };
            setMessages(prev => [...prev, newMessage]);
            setMessage('');
        }
    };

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    useEffect(() => {
        // Scroll to bottom whenever messages update
        chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages]);

    return (
        <div className="flex h-screen bg-gray-50 relative">
            {/* Mobile Overlay */}
            {isSidebarOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 z-20 lg:hidden"
                    onClick={toggleSidebar}
                />
            )}

            {/* Sidebar */}
            <div className={`
                w-80 bg-white border-r border-gray-200 flex flex-col z-30
                fixed lg:relative lg:translate-x-0 transition-transform duration-300 ease-in-out
                ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}
                h-full lg:w-80 md:w-72 sm:w-64
            `}>
                <div className="p-4 border-b border-gray-200">
                    <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-3">
                            <div className="w-8 h-8 bg-pink-500 rounded-lg flex items-center justify-center">
                                <span className="text-white text-sm">💗</span>
                            </div>
                            <span className="font-semibold text-gray-800 text-lg">StelHealth</span>
                        </div>
                        <button
                            className="lg:hidden p-2 hover:bg-gray-100 rounded-lg"
                            onClick={toggleSidebar}
                        >
                            <span className="text-gray-500 text-xl">✕</span>
                        </button>
                    </div>
                    <div className="relative">
                        <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-sm">🔍</span>
                        <input
                            type="text"
                            placeholder="Cari"
                            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                        />
                    </div>
                </div>

                <div className="px-4 py-2">
                    <div className="flex bg-gray-100 rounded-lg p-1">
                        <button className="flex-1 bg-gray-800 text-white text-sm py-2 px-3 rounded-md">
                            Chat
                        </button>
                        <button className="flex-1 text-gray-600 text-sm py-2 px-3">
                            Riwayat
                        </button>
                    </div>
                </div>

                <div className="flex-1 overflow-y-auto">
                    {chatList.map((chat, index) => (
                        <div
                            key={chat.id}
                            className={`p-4 border-b border-gray-100 cursor-pointer hover:bg-gray-50 ${selectedChat === index ? 'bg-pink-50 border-r-2 border-r-pink-500' : ''
                                }`}
                            onClick={() => {
                                setSelectedChat(index);
                                setIsSidebarOpen(false);
                            }}
                        >
                            <div className="flex items-start gap-3">
                                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-xl">
                                    {chat.avatar}
                                </div>
                                <div className="flex-1 min-w-0">
                                    <div className="flex items-center justify-between">
                                        <h3 className="font-medium text-gray-900 truncate">{chat.name}</h3>
                                        {chat.isActive && (
                                            <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                                        )}
                                    </div>
                                    <p className="text-sm text-gray-500 truncate">{chat.specialty}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Chat Area */}
            <div className="flex-1 flex flex-col lg:ml-0">
                {/* Header */}
                <div className="bg-white border-b border-gray-200 p-3 sm:p-4">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <button
                                className="lg:hidden p-2 hover:bg-gray-100 rounded-lg"
                                onClick={toggleSidebar}
                            >
                                <span className="text-gray-600 text-lg">☰</span>
                            </button>
                            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 rounded-full flex items-center justify-center text-lg sm:text-xl">
                                👨‍⚕️
                            </div>
                            <div>
                                <h2 className="font-semibold text-gray-900 text-sm sm:text-base">dr. Nindy, Sp.PD</h2>
                                <div className="flex items-center gap-2">
                                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                                    <span className="text-xs sm:text-sm text-gray-500">Online</span>
                                </div>
                            </div>
                        </div>
                        <button className="p-2 hover:bg-gray-100 rounded-lg">
                            <span className="text-gray-500 text-lg">⋮</span>
                        </button>
                    </div>
                </div>

                {/* Status */}
                <div className="bg-gray-100 px-3 sm:px-4 py-2 text-center">
                    <span className="bg-gray-300 text-gray-700 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm">
                        Konsultasi dimulai - 10:30 WIB
                    </span>
                </div>

                {/* Messages */}
                <div className="flex-1 overflow-y-auto p-3 sm:p-4 space-y-3 sm:space-y-4">
                    {messages.map((msg) => (
                        <div key={msg.id} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                            <div className={`flex items-end gap-2 max-w-[85%] sm:max-w-xs lg:max-w-md ${msg.sender === 'user' ? 'flex-row-reverse' : ''}`}>
                                {msg.sender === 'doctor' && (
                                    <div className="w-6 h-6 sm:w-8 sm:h-8 bg-blue-100 rounded-full flex items-center justify-center text-sm flex-shrink-0">
                                        {msg.avatar}
                                    </div>
                                )}
                                <div className={`px-3 sm:px-4 py-2 sm:py-3 rounded-2xl ${msg.sender === 'user'
                                        ? 'bg-pink-500 text-white rounded-br-md'
                                        : 'bg-white border border-gray-200 rounded-bl-md'
                                    }`}>
                                    <p className={`text-sm ${msg.sender === 'user' ? 'text-white' : 'text-gray-800'}`}>
                                        {msg.text}
                                    </p>
                                    {msg.time && (
                                        <div className={`text-xs mt-1 ${msg.sender === 'user' ? 'text-pink-100' : 'text-gray-500'}`}>
                                            {msg.time}
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                    <div ref={chatEndRef} />
                </div>

                {/* Input */}
                <div className="bg-white border-t border-gray-200 p-4">
                    <div className="flex items-center gap-3">
                        <div className="flex-1 relative">
                            <input
                                type="text"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                                placeholder="Tulis pesan disini..."
                                className="w-full px-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                            />
                        </div>
                        <button
                            onClick={handleSendMessage}
                            className="w-12 h-12 bg-pink-500 hover:bg-pink-600 rounded-full flex items-center justify-center text-white transition-colors"
                        >
                            <span className="text-lg">➤</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChatApp;
