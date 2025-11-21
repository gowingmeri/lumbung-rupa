"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import { ArrowLeft, Edit3, Camera, Mail, Phone, MapPin, Calendar, CreditCard, Download, Eye, Settings, LogOut, Shield } from "lucide-react";

const ProfilePage = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [activeTab, setActiveTab] = useState("overview");

  // Dummy user data
  const userData = {
    name: "Budi Santoso",
    email: "budi.santoso@example.com",
    phone: "+62 812-3456-7890",
    company: "Creative Studio Nusantara",
    industry: "Game Development",
    location: "Jakarta, Indonesia",
    joinDate: "15 Januari 2024",
    avatar: "https://imgsrv2.voi.id/vgXBZUqvaOA-YhTSo6LH640C9vwnahxotNBSS_PZAIk/auto/1200/675/sm/1/bG9jYWw6Ly8vcHVibGlzaGVycy81MjA0NzMvMjAyNTEwMDYxMDAyLW1haW4uY3JvcHBlZF8xNzU5NzE5NzY2LmpwZw.jpg",
    accountType: "License Buyer",
    verified: true
  };

  const stats = {
    totalSpent: 2450000,
    totalOrders: 8,
    downloadedAssets: 15,
    favorites: 23
  };

  const recentPurchases = [
    {
      id: "LR-2024-001",
      title: "Motif Parang Klaten",
      category: "Motif",
      date: "15 Jan 2024",
      price: 500000,
      status: "completed",
      thumbnail: "https://imgsrv2.voi.id/vgXBZUqvaOA-YhTSo6LH640C9vwnahxotNBSS_PZAIk/auto/1200/675/sm/1/bG9jYWw6Ly8vcHVibGlzaGVycy81MjA0NzMvMjAyNTEwMDYxMDAyLW1haW4uY3JvcHBlZF8xNzU5NzE5NzY2LmpwZw.jpg"
    },
    {
      id: "LR-2024-002",
      title: "Cyberpunk Mega Mendung",
      category: "Generatif",
      date: "10 Jan 2024",
      price: 600000,
      status: "completed",
      thumbnail: "https://imgsrv2.voi.id/vgXBZUqvaOA-YhTSo6LH640C9vwnahxotNBSS_PZAIk/auto/1200/675/sm/1/bG9jYWw6Ly8vcHVibGlzaGVycy81MjA0NzMvMjAyNTEwMDYxMDAyLW1haW4uY3JvcHBlZF8xNzU5NzE5NzY2LmpwZw.jpg"
    }
  ];

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
    }).format(price);
  };

  const tabs = [
    { id: "overview", label: "Ringkasan" },
    { id: "purchases", label: "Pembelian" },
    { id: "settings", label: "Pengaturan" }
  ];

  return (
    <div>
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        {/* Back Button */}
        <div className="mb-6">
          <Link
            href="/"
            className="inline-flex items-center text-gray-600 hover:text-primary transition-colors"
          >
            <ArrowLeft size={20} className="mr-2" />
            Kembali ke Beranda
          </Link>
        </div>

        {/* Profile Header */}
        <div className="bg-white rounded-2xl border border-gray-200 p-6 lg:p-8 mb-8">
          <div className="flex flex-col lg:flex-row lg:items-center gap-6">
            {/* Avatar Section */}
            <div className="relative">
              <div className="w-24 h-24 lg:w-32 lg:h-32 rounded-full overflow-hidden">
                <Image
                  src={userData.avatar}
                  alt={userData.name}
                  width={128}
                  height={128}
                  className="w-full h-full object-cover"
                />
              </div>
              <button className="absolute bottom-0 right-0 p-2 bg-primary text-white rounded-full hover:bg-primary/90 transition-colors">
                <Camera size={16} />
              </button>
            </div>

            {/* User Info */}
            <div className="flex-1">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <h1 className="text-2xl lg:text-3xl font-semibold text-gray-900">
                      {userData.name}
                    </h1>
                    {userData.verified && (
                      <span className="px-3 py-1 bg-green-100 text-green-800 text-xs rounded-full flex items-center gap-1">
                        <Shield size={12} />
                        Terverifikasi
                      </span>
                    )}
                  </div>
                  <p className="text-lg text-primary font-medium mb-1">{userData.company}</p>
                  <p className="text-gray-600 mb-4">{userData.accountType} • {userData.industry}</p>
                  
                  <div className="flex flex-col sm:flex-row gap-4 text-sm text-gray-600">
                    <span className="flex items-center gap-2">
                      <Mail size={16} />
                      {userData.email}
                    </span>
                    <span className="flex items-center gap-2">
                      <MapPin size={16} />
                      {userData.location}
                    </span>
                    <span className="flex items-center gap-2">
                      <Calendar size={16} />
                      Bergabung {userData.joinDate}
                    </span>
                  </div>
                </div>
                
                <button
                  onClick={() => setIsEditing(!isEditing)}
                  className="flex items-center gap-2 px-4 py-2 border border-gray-300 text-gray-700 rounded-full hover:bg-gray-50 transition-colors"
                >
                  <Edit3 size={16} />
                  Edit Profil
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mb-8">
          <div className="bg-white rounded-2xl border border-gray-200 p-4 lg:p-6">
            <div className="flex items-center">
              <div className="p-3 bg-primary/10 rounded-full mr-4">
                <CreditCard className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Total Belanja</p>
                <p className="text-xl font-semibold text-gray-900">{formatPrice(stats.totalSpent)}</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-2xl border border-gray-200 p-4 lg:p-6">
            <div className="flex items-center">
              <div className="p-3 bg-blue-100 rounded-full mr-4">
                <Calendar className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Pesanan</p>
                <p className="text-xl font-semibold text-gray-900">{stats.totalOrders}</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-2xl border border-gray-200 p-4 lg:p-6">
            <div className="flex items-center">
              <div className="p-3 bg-green-100 rounded-full mr-4">
                <Download className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Aset</p>
                <p className="text-xl font-semibold text-gray-900">{stats.downloadedAssets}</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-2xl border border-gray-200 p-4 lg:p-6">
            <div className="flex items-center">
              <div className="p-3 bg-red-100 rounded-full mr-4">
                <span className="w-6 h-6 text-red-600 flex items-center justify-center">♥</span>
              </div>
              <div>
                <p className="text-sm text-gray-600">Favorit</p>
                <p className="text-xl font-semibold text-gray-900">{stats.favorites}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
          {/* Tab Headers */}
          <div className="border-b border-gray-200">
            <div className="flex">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-6 py-4 text-sm font-medium transition-colors ${
                    activeTab === tab.id
                      ? "text-primary border-b-2 border-primary bg-primary/5"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Tab Content */}
          <div className="p-6 lg:p-8">
            {activeTab === "overview" && (
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Pembelian Terakhir</h3>
                  <div className="space-y-4">
                    {recentPurchases.map((purchase) => (
                      <div key={purchase.id} className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl">
                        <div className="w-16 h-16 rounded-xl overflow-hidden">
                          <Image
                            src={purchase.thumbnail}
                            alt={purchase.title}
                            width={64}
                            height={64}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-medium text-gray-900">{purchase.title}</h4>
                          <div className="flex items-center gap-4 text-sm text-gray-600 mt-1">
                            <span>{purchase.category}</span>
                            <span>{purchase.date}</span>
                            <span className="font-medium text-primary">{formatPrice(purchase.price)}</span>
                          </div>
                        </div>
                        <button className="p-2 text-gray-400 hover:text-primary transition-colors">
                          <Download size={20} />
                        </button>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4">
                    <Link
                      href="/history"
                      className="inline-flex items-center text-primary hover:underline"
                    >
                      Lihat Semua Riwayat
                    </Link>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "purchases" && (
              <div>
                <div className="text-center py-8">
                  <Calendar size={48} className="mx-auto text-gray-300 mb-4" />
                  <h3 className="text-lg font-medium text-gray-900 mb-2">Riwayat Lengkap</h3>
                  <p className="text-gray-600 mb-4">Akses riwayat pembelian lengkap Anda</p>
                  <Link
                    href="/history"
                    className="inline-block px-6 py-3 bg-primary text-white rounded-full font-medium hover:bg-primary/90 transition-colors"
                  >
                    Lihat Riwayat Pembelian
                  </Link>
                </div>
              </div>
            )}

            {activeTab === "settings" && (
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Pengaturan Akun</h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 border border-gray-200 rounded-xl">
                      <div className="flex items-center gap-3">
                        <Settings className="w-5 h-5 text-gray-500" />
                        <div>
                          <h4 className="font-medium text-gray-900">Informasi Akun</h4>
                          <p className="text-sm text-gray-600">Kelola data pribadi dan perusahaan</p>
                        </div>
                      </div>
                      <button className="text-primary hover:underline text-sm">
                        Edit
                      </button>
                    </div>
                    
                    <div className="flex items-center justify-between p-4 border border-gray-200 rounded-xl">
                      <div className="flex items-center gap-3">
                        <Shield className="w-5 h-5 text-gray-500" />
                        <div>
                          <h4 className="font-medium text-gray-900">Keamanan</h4>
                          <p className="text-sm text-gray-600">Kata sandi dan autentikasi dua faktor</p>
                        </div>
                      </div>
                      <button className="text-primary hover:underline text-sm">
                        Kelola
                      </button>
                    </div>
                    
                    <div className="flex items-center justify-between p-4 border border-gray-200 rounded-xl">
                      <div className="flex items-center gap-3">
                        <Mail className="w-5 h-5 text-gray-500" />
                        <div>
                          <h4 className="font-medium text-gray-900">Notifikasi</h4>
                          <p className="text-sm text-gray-600">Pengaturan email dan push notification</p>
                        </div>
                      </div>
                      <button className="text-primary hover:underline text-sm">
                        Atur
                      </button>
                    </div>
                  </div>
                </div>
                
                <div className="pt-6 border-t border-gray-200">
                  <button className="flex items-center gap-2 text-red-600 hover:text-red-800 transition-colors">
                    <LogOut size={20} />
                    Keluar dari Akun
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;