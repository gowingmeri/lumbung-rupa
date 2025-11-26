"use client";
import React, { useState, useEffect, useRef } from "react";
import { Search } from "lucide-react";
import { useRouter } from "next/navigation";
import { suggestion } from "@/data/suggestion";
import { motion, AnimatePresence } from "framer-motion";

const Hero = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState<typeof suggestion>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  // Handle click outside to close suggestions
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setShowSuggestions(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Filter suggestions based on search query
  useEffect(() => {
    if (searchQuery.trim().length > 0) {
      const filtered = suggestion.filter(
        (item) =>
          item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.region.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setSuggestions(filtered.slice(0, 5)); // Limit to 5 suggestions
      setShowSuggestions(true);
    } else {
      setSuggestions([]);
      setShowSuggestions(false);
    }
  }, [searchQuery]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/product?search=${encodeURIComponent(searchQuery.trim())}`);
    } else {
      router.push('/product');
    }
    setShowSuggestions(false);
  };

  const handleSuggestionClick = (suggestion: string) => {
    setSearchQuery(suggestion);
    setShowSuggestions(false);
    router.push(`/product?search=${encodeURIComponent(suggestion)}`);
  };

  return (
    <section className="min-h-[70vh] sm:min-h-[75vh] md:min-h-[80vh] lg:min-h-screen bg-transparent py-12 sm:py-16 lg:py-24 relative overflow-hidden flex items-center">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-8 relative z-10 w-full">
        {/* Main Content */}
        <div className="text-center mb-12 sm:mb-14 md:mb-16 lg:mb-20">
          {/* Headline with fade-in animation */}
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="leading-none sm:leading-none text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-normal text-black/75 mb-6 sm:mb-8 px-4 sm:px-0"
          >
            Bank IP Budaya<br />
            <span className="text-primary bg-clip-text">Indonesia</span>
          </motion.h1>
          
          {/* Subheadline with delayed fade-in */}
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="font-normal text-base sm:text-lg md:text-xl lg:text-2xl text-black/35 mb-8 sm:mb-10 max-w-4xl mx-auto leading-relaxed px-4 sm:px-0"
          >
            Temukan, lisensikan, atau ciptakan aset budaya baru dengan teknologi AI generatif 
            yang dilatih secara etis dari warisan budaya terverifikasi.
          </motion.p>

          {/* Search Input with glassmorphism */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="max-w-2xl mx-auto mb-12 sm:mb-14 md:mb-16 relative z-50" 
            ref={searchRef}
          >
            <form onSubmit={handleSearch} className="relative group">
              <motion.input
                type="text"
                placeholder="Cari aset budaya..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onFocus={() => searchQuery.trim().length > 0 && setShowSuggestions(true)}
                whileFocus={{ scale: 1.02 }}
                className="w-full px-5 sm:px-6 md:px-8 py-3 sm:py-4 md:py-5 pr-14 sm:pr-16 text-base sm:text-lg border-2 border-gray-200 rounded-full focus:border-primary focus:outline-none focus:ring-4 focus:ring-primary/10 transition-all duration-300 bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-xl group-hover:border-gray-300"
              />
              <motion.button 
                type="submit"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
                className="absolute right-2 sm:right-3 top-1/2 -translate-y-1/2 p-2 sm:p-2.5 md:p-3 bg-primary text-white rounded-full hover:bg-primary/90 transition-all duration-300 shadow-lg"
              >
                <Search size={20} className="sm:w-6 sm:h-6" />
              </motion.button>

              {/* Suggestions Dropdown */}
              <AnimatePresence>
              {showSuggestions && suggestions.length > 0 && (
                <motion.div 
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-full mt-2 w-full bg-white rounded-xl sm:rounded-2xl shadow-2xl border border-gray-100 overflow-hidden z-50 backdrop-blur-lg"
                >
                  {suggestions.map((item, index) => (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                      onClick={() => handleSuggestionClick(item.name)}
                      whileHover={{ backgroundColor: "rgba(var(--color-primary-rgb, 147, 51, 234), 0.05)", x: 5 }}
                      className="px-4 sm:px-6 py-3 sm:py-4 cursor-pointer transition-colors duration-200 border-b border-gray-50 last:border-b-0 group"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex-1 min-w-0">
                          <p className="text-sm sm:text-base text-gray-900 font-medium group-hover:text-primary transition-colors truncate">
                            {item.name}
                          </p>
                          <p className="text-xs sm:text-sm text-gray-500 mt-1 truncate">
                            {item.category} • {item.region}
                          </p>
                        </div>
                        <Search size={16} className="text-gray-400 group-hover:text-primary transition-colors shrink-0 ml-2" />
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              )}
              </AnimatePresence>
            </form>
          </motion.div>
        </div>

      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .mask-fade {
          -webkit-mask-image: linear-gradient(to right, transparent, black 5%, black 95%, transparent);
          mask-image: linear-gradient(to right, transparent, black 5%, black 95%, transparent);
        }
      `}</style>
    </section>
  );
};

export default Hero;