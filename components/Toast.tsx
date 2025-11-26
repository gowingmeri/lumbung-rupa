"use client";
import React, { useEffect } from "react";

export default function Toast({ message = "Sukses", onClose, duration = 2000 }: { message?: string; onClose?: () => void; duration?: number }) {
  useEffect(() => {
    const t = setTimeout(() => {
      onClose && onClose()
    }, duration)
    return () => clearTimeout(t)
  }, [duration, onClose])

  return (
    <div className="fixed right-3 sm:right-4 bottom-4 sm:bottom-6 z-50 max-w-[calc(100vw-1.5rem)] sm:max-w-md">
      <div className="bg-green-600 text-white px-3 sm:px-4 py-2 sm:py-2.5 rounded-lg shadow-lg text-sm sm:text-base">
        {message}
      </div>
    </div>
  )
}
