import React, { useState, useEffect, useRef } from "react";

const DoctorChatApp = () => {
  const [selectedChat, setSelectedChat] = useState(null);
  const [message, setMessage] = useState("");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const chatEndRef = useRef(null);

  const chatList = [
    {
      id: 1,
      name: "dr. Nindy, Sp.PD",
      specialty: "Poli Kesehatan, Spesialis Penyakit Dalam Anak",
      avatar: `${process.env.PUBLIC_URL}/icons/dokter-chat.svg`,
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
      avatar: `${process.env.PUBLIC_URL}/icons/dokter-chat.svg`,
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
      avatar: `${process.env.PUBLIC_URL}/icons/dokter-chat.svg`,
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

  const [allChats, setAllChats] = useState(chatList);
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
    if (chatEndRef.current) {
      chatEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  return (
    <div className="flex flex-col h-screen bg-gray-50">
      {/* Navbar */}
      <nav className="bg-white shadow-md flex items-center px-4 py-3">
        <img
          src={`${process.env.PUBLIC_URL}/icons/dokter-chat.svg`}
          alt="Doctor Chat Logo"
          className="w-10 h-10 mr-3"
        />
        <h1 className="text-xl font-semibold text-gray-800">
          Doctor Chat App
        </h1>
      </nav>

      <div className="flex flex-1 relative">
        {isSidebarOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-20 lg:hidden"
            onClick={toggleSidebar}
          />
        )}

        {/* Sidebar */}
        <div
          className={`w-80 bg-white border-r border-gray-200 flex flex-col z-30 fixed lg:relative lg:translate-x-0 transition-transform duration-300 ease-in-out ${
            isSidebarOpen ? "translate-x-0" : "-translate-x-full"
          } h-full lg:w-80 md:w-72 sm:w-64`}
        >
          <div className="p-4 border-b border-gray-200">
            <div className="flex items-center justify-between mb-4">
              <button
                className="lg:hidden p-2 hover:bg-gray-100 rounded-lg"
                onClick={toggleSidebar}
              >
                <span className="text-gray-500 text-xl">✕</span>
              </button>
            </div>
            <div className="relative">
              <img
                src={`${process.env.PUBLIC_URL}/icons/search.svg`}
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

          <div className="flex-1 overflow-y-auto scrollbar-hide">
            {allChats.map((chat, index) => (
              <div
                key={chat.id}
                className={`p-4 border-b border-gray-100 cursor-pointer hover:bg-gray-50 ${
                  selectedChat === index
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

        {/* Main Chat Area */}
        <div className="flex-1 flex flex-col">
          {/* Header */}
          <div className="bg-white border-b border-gray-200 p-3 sm:p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <button
                className="lg:hidden p-2 hover:bg-gray-100 rounded-lg"
                onClick={toggleSidebar}
              >
                <span className="text-gray-600 text-lg">☰</span>
              </button>
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

          {/* Info Bar */}
          {selectedChat !== null && (
            <div className="bg-gray-100 px-3 sm:px-4 py-2 text-center">
              <span className="bg-gray-300 text-gray-700 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm">
                Konsultasi dimulai - 10:30 WIB
              </span>
            </div>
          )}

          {/* Messages */}
          <div className="flex-1 overflow-y-auto scrollbar-hide p-3 sm:p-4 space-y-3 sm:space-y-4">
            {selectedChat !== null ? (
              allChats[selectedChat].messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex items-start ${
                    msg.sender === "user" ? "justify-end" : ""
                  }`}
                >
                  {msg.sender === "doctor" && (
                    <img
                      src={allChats[selectedChat].avatar}
                      alt="Doctor"
                      className="w-9 h-9 rounded-full object-cover mr-3"
                    />
                  )}
                  <div
                    className={`max-w-[70%] rounded-lg px-4 py-2 sm:px-5 sm:py-3 text-sm sm:text-base ${
                      msg.sender === "user"
                        ? "bg-pink-600 text-white rounded-br-none"
                        : "bg-gray-200 text-gray-900 rounded-bl-none"
                    }`}
                  >
                    {msg.text}
                    <div className="text-xs text-gray-400 text-right mt-1">
                      {msg.time}
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-center text-gray-400 mt-10">
                Tidak ada chat yang dipilih
              </p>
            )}
            <div ref={chatEndRef} />
          </div>

          {/* Input area */}
          {selectedChat !== null && (
            <div className="bg-white border-t border-gray-200 px-3 sm:px-4 py-3 flex items-center gap-3">
              <input
                type="text"
                className="flex-1 border border-gray-300 rounded-lg px-4 py-2 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-pink-500"
                placeholder="Tulis pesan..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    handleSendMessage();
                  }
                }}
              />
              <button
                onClick={handleSendMessage}
                className="bg-pink-600 text-white rounded-lg px-4 py-2 text-sm sm:text-base hover:bg-pink-700"
              >
                Kirim
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DoctorChatApp;
