import React, { useState, useEffect, useRef } from "react";

const DoctorChatApp = () => {
  const [selectedChat, setSelectedChat] = useState(null); // null = belum pilih chat
  const [message, setMessage] = useState("");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const chatEndRef = useRef(null);

  const avatarImg = "/icons/dokter-chat.svg";

  const chatList = [
    {
      id: 1,
      name: "dr. Nindy, Sp.PD",
      specialty: "Poli Kesehatan, Spesialis Penyakit Dalam Anak",
      avatar: avatarImg,
      isActive: true,
      messages: [
        {
          id: 1,
          sender: "doctor",
          text: "Selamat siang, Anis. Saya dr. Nindy. Terima kasih telah memilih layanan konsultasi kami. Bagaimana saya bisa membantu Anda hari ini?",
          time: "10:30",
        },
        {
          id: 2,
          sender: "user",
          text: "Selamat siang, Dokter. Saya ingin konsultasi tentang sakit kepala saya.",
          time: "10:32",
        },
      ],
    },
    {
      id: 2,
      name: "dr. Rina, Sp.A",
      specialty: "Spesialis Anak",
      avatar: avatarImg,
      isActive: false,
      messages: [
        {
          id: 1,
          sender: "doctor",
          text: "Halo, saya dr. Rina. Ada yang bisa saya bantu?",
          time: "09:45",
        },
      ],
    },
    {
      id: 3,
      name: "dr. Giselle, Sp.JP",
      specialty: "Spesialis Jantung",
      avatar: avatarImg,
      isActive: false,
      messages: [
                {
          id: 1,
          sender: "doctor",
          text: "Halo, saya dr. Giselle. Ada yang bisa saya bantu?",
          time: "09:45",
        },
      ],
    },
  ];

  // Simpan semua chat dengan messages, agar tiap chat punya history masing-masing
  const [allChats, setAllChats] = useState(chatList);

  // Ambil messages chat yg sedang aktif, kalau belum pilih chat, kosong
  const messages = selectedChat !== null ? allChats[selectedChat].messages : [];

  const handleSendMessage = () => {
    if (message.trim() && selectedChat !== null) {
      const newMessage = {
        id: messages.length + 1,
        sender: "user",
        text: message,
        time: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
      };
      // Update messages chat yang dipilih
      const updatedChats = [...allChats];
      updatedChats[selectedChat] = {
        ...updatedChats[selectedChat],
        messages: [...updatedChats[selectedChat].messages, newMessage],
      };
      setAllChats(updatedChats);
      setMessage("");
    }
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="flex h-screen bg-gray-50 relative">
      {/* Overlay for sidebar in mobile */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-20 lg:hidden"
          onClick={toggleSidebar}
        />
      )}

      {/* Sidebar */}
      <div
        className={`w-80 bg-white border-r border-gray-200 flex flex-col z-30 fixed lg:relative lg:translate-x-0 transition-transform duration-300 ease-in-out ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"
          } h-full lg:w-80 md:w-72 sm:w-64`}
      >
        <div className="p-4 border-b border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <img src="/LogoNew.png" alt="Logo" className="w-8 h-9" />
              <span className="text-xl font-bold text-[#E36CC5]">SheHealth</span>
            </div>
            <button
              className="lg:hidden p-2 hover:bg-gray-100 rounded-lg"
              onClick={toggleSidebar}
            >
              <span className="text-gray-500 text-xl">✕</span>
            </button>
          </div>
          <div className="relative">
            <img
              src="/icons/search.svg"
              alt="Search"
              className="absolute left-3 top-1/2 transform -translate-y-1/2 w-6 text-gray-400"
            />
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
          {allChats.map((chat, index) => (
            <div
              key={chat.id}
              className={`p-4 border-b border-gray-100 cursor-pointer hover:bg-gray-50 ${selectedChat === index
                  ? "bg-pink-50 border-r-2 border-r-[#E36CC5]"
                  : ""
                }`}
              onClick={() => {
                setSelectedChat(index);
                setIsSidebarOpen(false);
              }}
            >
              <div className="flex items-start gap-3">
                <img
                  src={chat.avatar}
                  alt={chat.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <h3 className="font-medium text-gray-900 truncate">
                      {chat.name}
                    </h3>
                    {chat.isActive && (
                      <div className="w-2 h-2 bg-[#E36CC5] rounded-full"></div>
                    )}
                  </div>
                  <p className="text-sm text-gray-500 truncate">
                    {chat.specialty}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Chat Main Area */}
      <div className="flex-1 flex flex-col lg:ml-0">
        {/* Header */}
        <div className="bg-white border-b border-gray-200 p-3 sm:p-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button
              className="lg:hidden p-2 hover:bg-gray-100 rounded-lg"
              onClick={toggleSidebar}
            >
              <span className="text-gray-600 text-lg">☰</span>
            </button>

            {/* Show avatar and name if chat selected */}
            {selectedChat !== null ? (
              <>
                <img
                  src={allChats[selectedChat].avatar}
                  alt={allChats[selectedChat].name}
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover"
                />
                <div>
                  <h2 className="font-semibold text-gray-900 text-sm sm:text-base">
                    {allChats[selectedChat].name}
                  </h2>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-xs sm:text-sm text-gray-500">
                      Online
                    </span>
                  </div>
                </div>
              </>
            ) : (
              <h2 className="font-semibold text-gray-900 text-sm sm:text-base">
                Pilih chat untuk memulai percakapan
              </h2>
            )}
          </div>

          <button className="p-2 hover:bg-gray-100 rounded-lg">
            <span className="text-gray-500 text-lg">⋮</span>
          </button>
        </div>

        {/* Info bar */}
        {selectedChat !== null && (
          <div className="bg-gray-100 px-3 sm:px-4 py-2 text-center">
            <span className="bg-gray-300 text-gray-700 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm">
              Konsultasi dimulai - 10:30 WIB
            </span>
          </div>
        )}

        {/* Chat Messages or placeholder */}
        <div className="flex-1 overflow-y-auto p-3 sm:p-4 space-y-3 sm:space-y-4">
          {selectedChat === null ? (
            <div className="h-full flex items-center justify-center text-gray-400 text-lg">
              Pilih chat dari daftar di sebelah kiri untuk mulai ngobrol
            </div>
          ) : messages.length === 0 ? (
            <div className="h-full flex items-center justify-center text-gray-400 text-lg">
              Belum ada pesan. Mulai ketik pesan di bawah.
            </div>
          ) : (
            messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"
                  }`}
              >
                <div
                  className={`flex items-end gap-2 max-w-[85%] sm:max-w-xs lg:max-w-md ${msg.sender === "user" ? "flex-row-reverse" : ""
                    }`}
                >
                  {msg.sender === "doctor" && (
                    <img
                      src={avatarImg}
                      alt="Doctor"
                      className="w-6 h-6 sm:w-8 sm:h-8 rounded-full object-cover flex-shrink-0"
                    />
                  )}
                  <div
                    className={`px-3 sm:px-4 py-2 sm:py-3 rounded-2xl ${msg.sender === "user"
                        ? "bg-[#E36CC5] text-white rounded-br-md"
                        : "bg-white border border-gray-200 rounded-bl-md"
                      }`}
                  >
                    <p className="text-sm">{msg.text}</p>
                    {msg.time && (
                      <span
                        className={`block mt-1 text-xs ${msg.sender === "user"
                            ? "text-white/70"
                            : "text-gray-400"
                          }`}
                      >
                        {msg.time}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))
          )}
          <div ref={chatEndRef} />
        </div>

        {/* Input form */}
        {selectedChat !== null && (
          <form
            className="bg-white p-3 sm:p-4 flex items-center gap-3 border-t border-gray-200"
            onSubmit={(e) => {
              e.preventDefault();
              handleSendMessage();
            }}
          >
            <input
              type="text"
              placeholder="Ketik pesan..."
              className="flex-1 border border-gray-300 rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#E36CC5]"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              autoFocus
            />
            <button
              type="submit"
              disabled={!message.trim()}
              className={`p-2 rounded-full ${message.trim()
                  ? "bg-[#E36CC5] hover:bg-pink-500 text-white"
                  : "bg-gray-300 cursor-not-allowed"
                }`}
            >
              {/* Paper airplane SVG icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.5 19.5L21 12 2.5 4.5v7.5l13.5 0-13.5 0v7.5z"
                />
              </svg>
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default DoctorChatApp;
