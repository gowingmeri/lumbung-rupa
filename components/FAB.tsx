"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const FAB = () => {
  const [userRole, setUserRole] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const checkUserRole = () => {
      const role = localStorage.getItem('roleUser');
      setUserRole(role);
      setIsLoading(false);
    };

    checkUserRole();
    
    // Listen for storage changes
    window.addEventListener('storage', checkUserRole);
    
    return () => {
      window.removeEventListener('storage', checkUserRole);
    };
  }, []);

  // Don't show FAB if user is not logged in or still loading
  if (isLoading || !userRole) {
    return null;
  }

  return (
    <Link href="/rupagen-ai">
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ 
          type: "spring", 
          stiffness: 260, 
          damping: 20,
          delay: 0.5 
        }}
        whileHover={{ 
          scale: 1.1,
          boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)"
        }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-4 sm:bottom-5 right-4 sm:right-5 bg-primary text-white px-4 py-3 sm:p-5 rounded-full shadow-lg hover:bg-primary/90 transition-all z-50 text-sm sm:text-base font-medium cursor-pointer"
      >
        <motion.div
          animate={{ 
            scale: [1, 1.1, 1],
          }}
          transition={{ 
            duration: 2,
            repeat: Infinity,
            repeatType: "reverse" 
          }}
        >
          <span className="hidden sm:inline">RupaGen AI</span>
          <span className="sm:hidden">AI</span>
        </motion.div>
      </motion.div>
    </Link>
  );
};

export default FAB;