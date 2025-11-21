"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowLeft, Send, Image, History, Plus, Download, Heart, Share2, Menu, X } from "lucide-react";

const RupaGenAIPage = () => {
  const [prompt, setPrompt] = useState("");
  const [selectedHistory, setSelectedHistory] = useState<string | null>(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  
  // Check if mobile on client side
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  
  // Dummy chat history data
  const chatHistory = [
    {
      id: "1",
      title: "Batik Mega Mendung Cyberpunk",
      timestamp: "2 jam lalu",
      preview: "https://imgsrv2.voi.id/vgXBZUqvaOA-YhTSo6LH640C9vwnahxotNBSS_PZAIk/auto/1200/675/sm/1/bG9jYWw6Ly8vcHVibGlzaGVycy81MjA0NzMvMjAyNTEwMDYxMDAyLW1haW4uY3JvcHBlZF8xNzU5NzE5NzY2LmpwZw.jpg"
    },
    {
      id: "2", 
      title: "Ornamen Dayak Futuristik",
      timestamp: "1 hari lalu",
      preview: "https://imgsrv2.voi.id/vgXBZUqvaOA-YhTSo6LH640C9vwnahxotNBSS_PZAIk/auto/1200/675/sm/1/bG9jYWw6Ly8vcHVibGlzaGVycy81MjA0NzMvMjAyNTEwMDYxMDAyLW1haW4uY3JvcHBlZF8xNzU5NzE5NzY2LmpwZw.jpg"
    },
    {
      id: "3",
      title: "Wayang Modern Digital",
      timestamp: "3 hari lalu", 
      preview: "https://imgsrv2.voi.id/vgXBZUqvaOA-YhTSo6LH640C9vwnahxotNBSS_PZAIk/auto/1200/675/sm/1/bG9jYWw6Ly8vcHVibGlzaGVycy81MjA0NzMvMjAyNTEwMDYxMDAyLW1haW4uY3JvcHBlZF8xNzU5NzE5NzY2LmpwZw.jpg"
    }
  ];

  const promptExamples = [
    "Batik parang dengan style cyberpunk neon",
    "Ornamen Toraja dengan sentuhan futuristik",
    "Motif mega mendung dalam gaya minimalis modern",
    "Wayang Arjuna dengan aesthetic synthwave"
  ];

  const handleSendPrompt = () => {
    if (prompt.trim()) {
      console.log("Generating with prompt:", prompt);
      setPrompt("");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex relative">
      {/* Mobile Overlay */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 md:hidden" 
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div className={`
        fixed md:relative inset-y-0 left-0 z-50
        w-80 sm:w-96 md:w-80 lg:w-96
        bg-white border-r border-gray-200 flex flex-col
        transform transition-transform duration-300 ease-in-out
        ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
      `}>
        {/* Sidebar Header */}
        <div className="p-4 sm:p-6 border-b border-gray-200 flex-shrink-0">
          <div className="flex items-center justify-between mb-4 md:mb-0">
            <Link
              href="/"
              className="inline-flex items-center text-gray-600 hover:text-primary transition-colors text-sm"
            >
              <ArrowLeft size={16} className="mr-2" />
              <span className="hidden sm:inline">Kembali ke Beranda</span>
              <span className="sm:hidden">Beranda</span>
            </Link>
            
            {/* Mobile Close Button */}
            <button
              onClick={() => setIsSidebarOpen(false)}
              className="md:hidden p-2 text-gray-500 hover:text-gray-700 transition-colors"
            >
              <X size={20} />
            </button>
          </div>
          
          <h1 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-2">RupaGen AI</h1>
          <p className="text-xs sm:text-sm text-gray-600 mb-4">AI Generatif untuk Aset Budaya Indonesia</p>
          
          {/* New Chat Button */}
          <button className="w-full flex items-center justify-center gap-2 p-3 bg-primary text-white rounded-full hover:bg-primary/90 transition-colors text-sm">
            <Plus size={16} />
            Chat Baru
          </button>
        </div>

        {/* Chat History */}
        <div className="flex-1 p-4 overflow-y-auto">
          <div className="flex items-center gap-2 mb-4">
            <History size={16} className="text-gray-500" />
            <h3 className="font-medium text-gray-900 text-sm">Riwayat Chat</h3>
          </div>
          
          <div className="space-y-3">
            {chatHistory.map((chat) => (
              <button
                key={chat.id}
                onClick={() => {
                  setSelectedHistory(chat.id);
                  setIsSidebarOpen(false);
                }}
                className={`w-full text-left p-3 rounded-xl border transition-all ${
                  selectedHistory === chat.id
                    ? "border-primary bg-primary/5"
                    : "border-gray-200 hover:border-gray-300"
                }`}
              >
                <div className="flex gap-3">
                  <img
                    src={chat.preview}
                    alt={chat.title}
                    className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg object-cover flex-shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <h4 className="font-medium text-xs sm:text-sm text-gray-900 truncate">
                      {chat.title}
                    </h4>
                    <p className="text-xs text-gray-500 mt-1">{chat.timestamp}</p>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Mobile Header */}
        <div className="md:hidden bg-white border-b border-gray-200 p-4 flex items-center gap-3">
          <button
            onClick={() => setIsSidebarOpen(true)}
            className="p-2 text-gray-600 hover:text-primary transition-colors"
          >
            <Menu size={20} />
          </button>
          <h1 className="text-lg font-semibold text-gray-900 truncate">
            {selectedHistory 
              ? chatHistory.find(c => c.id === selectedHistory)?.title 
              : "RupaGen AI"
            }
          </h1>
        </div>

        {selectedHistory ? (
          /* Chat View */
          <div className="flex-1 flex flex-col">
            {/* Chat Header - Desktop Only */}
            <div className="hidden md:block p-4 lg:p-6 border-b border-gray-200 bg-white">
              <h2 className="text-xl font-semibold text-gray-900">
                {chatHistory.find(c => c.id === selectedHistory)?.title}
              </h2>
            </div>

            {/* Generated Image Result */}
            <div className="flex-1 p-4 lg:p-6 overflow-y-auto">
              <div className="max-w-2xl mx-auto">
                <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden mb-6">
                  <img
                    src="https://imgsrv2.voi.id/vgXBZUqvaOA-YhTSo6LH640C9vwnahxotNBSS_PZAIk/auto/1200/675/sm/1/bG9jYWw6Ly8vcHVibGlzaGVycy81MjA0NzMvMjAyNTEwMDYxMDAyLW1haW4uY3JvcHBlZF8xNzU5NzE5NzY2LmpwZw.jpg"
                    alt="Generated result"
                    className="w-full aspect-square object-cover"
                  />
                  <div className="p-4 lg:p-6">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 gap-4">
                      <div>
                        <h3 className="font-medium text-gray-900">Hasil Generasi</h3>
                        <p className="text-sm text-gray-600">1024x1024px • PNG</p>
                      </div>
                      <div className="flex gap-2 flex-wrap">
                        <button className="p-2 border border-gray-300 rounded-full hover:bg-gray-50 transition-colors">
                          <Heart size={16} />
                        </button>
                        <button className="p-2 border border-gray-300 rounded-full hover:bg-gray-50 transition-colors">
                          <Share2 size={16} />
                        </button>
                        <button className="p-2 bg-primary text-white rounded-full hover:bg-primary/90 transition-colors">
                          <Download size={16} />
                        </button>
                      </div>
                    </div>
                    
                    <div className="bg-gray-50 rounded-xl p-4">
                      <h4 className="font-medium text-gray-900 mb-2">Prompt:</h4>
                      <p className="text-gray-700 text-sm leading-relaxed">
                        "Batik mega mendung dengan style cyberpunk neon, warna biru electric dan pink, detail tinggi, artistic"
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          /* Welcome/Empty State */
          <div className="flex-1 flex flex-col items-center justify-center p-4 lg:p-6 text-center">
            <div className="max-w-md mx-auto w-full">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Image size={24} className="text-primary sm:w-8 sm:h-8" />
              </div>
              
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4">
                Selamat datang di RupaGen AI
              </h2>
              <p className="text-gray-600 mb-8 text-sm sm:text-base">
                Ciptakan aset budaya Indonesia yang unik dengan teknologi AI generatif yang dilatih secara etis
              </p>

              {/* Example Prompts */}
              <div className="text-left">
                <h3 className="font-medium text-gray-900 mb-4 text-sm sm:text-base">Contoh prompt:</h3>
                <div className="space-y-2">
                  {promptExamples.map((example, index) => (
                    <button
                      key={index}
                      onClick={() => setPrompt(example)}
                      className="w-full text-left p-3 bg-gray-50 hover:bg-gray-100 rounded-xl transition-colors text-xs sm:text-sm"
                    >
                      "{example}"
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Input Field */}
        <div className="p-4 lg:p-6 bg-white border-t border-gray-200 flex-shrink-0">
          <div className="max-w-4xl mx-auto">
            <div className="flex gap-3">
              <div className="flex-1 relative">
                <textarea
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  placeholder="Deskripsikan aset budaya yang ingin Anda buat..."
                  className="w-full px-4 py-3 pr-12 border border-gray-300 rounded-2xl focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all resize-none text-sm sm:text-base"
                  rows={isMobile ? 2 : 3}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' && !e.shiftKey) {
                      e.preventDefault();
                      handleSendPrompt();
                    }
                  }}
                />
                <button
                  onClick={handleSendPrompt}
                  disabled={!prompt.trim()}
                  className="absolute right-2 bottom-2 sm:right-3 sm:bottom-3 p-2 bg-primary text-white rounded-full hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Send size={16} className="sm:w-4 sm:h-4" />
                </button>
              </div>
            </div>
            
            <p className="text-xs text-gray-500 mt-2 text-center">
              RupaGen AI dilatih dengan dataset budaya Indonesia yang terverifikasi dan etis
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RupaGenAIPage;