"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import { ArrowLeft, Edit3, Camera, Mail, Phone, MapPin, Calendar, Shield, Save, Key, Bell, Users, FileText } from "lucide-react";

const AdminProfilePage = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [activeTab, setActiveTab] = useState("overview");

  // Dummy admin data
  const adminData = {
    name: "Admin LumbungRupa",
    email: "admin@lumbungrupa.id",
    phone: "+62 21-1234-5678",
    role: "Super Administrator",
    department: "Platform Management",
    location: "Jakarta, Indonesia",
    joinDate: "1 Oktober 2023",
    lastLogin: "15 Jan 2024, 14:30",
    avatar: "https://imgsrv2.voi.id/vgXBZUqvaOA-YhTSo6LH640C9vwnahxotNBSS_PZAIk/auto/1200/675/sm/1/bG9jYWw6Ly8vcHVibGlzaGVycy81MjA0NzMvMjAyNTEwMDYxMDAyLW1haW4uY3JvcHBlZF8xNzU5NzE5NzY2LmpwZw.jpg"
  };

  const stats = {
    totalApprovals: 156,
    pendingApprovals: 12,
    totalPartners: 45,
    totalAssets: 523
  };

  const recentActivities = [
    {
      id: "1",
      action: "Approved cultural partner",
      target: "Sanggar Seni Budaya Nusantara",
      timestamp: "2 jam lalu"
    },
    {
      id: "2",
      action: "Rejected application",
      target: "Studio Kreatif ABC",
      timestamp: "4 jam lalu"
    },
    {
      id: "3",
      action: "Updated platform settings",
      target: "Commission rates",
      timestamp: "1 hari lalu"
    }
  ];

  const tabs = [
    { id: "overview", label: "Ringkasan" },
    { id: "account", label: "Akun" },
    { id: "security", label: "Keamanan" },
    { id: "notifications", label: "Notifikasi" }
  ];

  return (
    <div>
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center text-gray-600 hover:text-primary transition-colors mb-4"
          >
            <ArrowLeft size={20} className="mr-2" />
            Kembali ke Beranda
          </Link>
          
          <h1 className="text-3xl font-normal text-gray-900">Profil Administrator</h1>
        </div>

        {/* Profile Header */}
        <div className="bg-white rounded-2xl border border-gray-200 p-6 lg:p-8 mb-8">
          <div className="flex flex-col lg:flex-row lg:items-center gap-6">
            {/* Avatar Section */}
            <div className="relative">
              <div className="w-24 h-24 lg:w-32 lg:h-32 rounded-full overflow-hidden">
                <Image
                  src={adminData.avatar}
                  alt={adminData.name}
                  width={128}
                  height={128}
                  className="w-full h-full object-cover"
                />
              </div>
              <button className="absolute bottom-0 right-0 p-2 bg-primary text-white rounded-full hover:bg-primary/90 transition-colors">
                <Camera size={16} />
              </button>
            </div>

            {/* Admin Info */}
            <div className="flex-1">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <h1 className="text-2xl lg:text-3xl font-semibold text-gray-900">
                      {adminData.name}
                    </h1>
                    <span className="px-3 py-1 bg-purple-100 text-purple-800 text-xs rounded-full flex items-center gap-1">
                      <Shield size={12} />
                      Admin
                    </span>
                  </div>
                  <p className="text-lg text-primary font-medium mb-1">{adminData.role}</p>
                  <p className="text-gray-600 mb-4">{adminData.department}</p>
                  
                  <div className="flex flex-col sm:flex-row gap-4 text-sm text-gray-600">
                    <span className="flex items-center gap-2">
                      <Mail size={16} />
                      {adminData.email}
                    </span>
                    <span className="flex items-center gap-2">
                      <MapPin size={16} />
                      {adminData.location}
                    </span>
                    <span className="flex items-center gap-2">
                      <Calendar size={16} />
                      Login terakhir: {adminData.lastLogin}
                    </span>
                  </div>
                </div>
                
                <button
                  onClick={() => setIsEditing(!isEditing)}
                  className="flex items-center gap-2 px-4 py-2 border border-gray-300 text-gray-700 rounded-full hover:bg-gray-50 transition-colors"
                >
                  {isEditing ? <Save size={16} /> : <Edit3 size={16} />}
                  {isEditing ? "Simpan" : "Edit Profil"}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mb-8">
          <div className="bg-white rounded-2xl border border-gray-200 p-4 lg:p-6">
            <div className="flex items-center">
              <div className="p-3 bg-blue-100 rounded-full mr-4">
                <FileText className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600 mb-1">Total Approvals</p>
                <p className="text-2xl font-semibold text-gray-900">{stats.totalApprovals}</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-2xl border border-gray-200 p-4 lg:p-6">
            <div className="flex items-center">
              <div className="p-3 bg-yellow-100 rounded-full mr-4">
                <FileText className="w-6 h-6 text-yellow-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600 mb-1">Pending</p>
                <p className="text-2xl font-semibold text-gray-900">{stats.pendingApprovals}</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-2xl border border-gray-200 p-4 lg:p-6">
            <div className="flex items-center">
              <div className="p-3 bg-green-100 rounded-full mr-4">
                <Users className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600 mb-1">Mitra Aktif</p>
                <p className="text-2xl font-semibold text-gray-900">{stats.totalPartners}</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-2xl border border-gray-200 p-4 lg:p-6">
            <div className="flex items-center">
              <div className="p-3 bg-purple-100 rounded-full mr-4">
                <FileText className="w-6 h-6 text-purple-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600 mb-1">Total Aset</p>
                <p className="text-2xl font-semibold text-gray-900">{stats.totalAssets}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
          {/* Tab Headers */}
          <div className="border-b border-gray-200">
            <div className="flex overflow-x-auto">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-6 py-4 text-sm font-medium transition-colors whitespace-nowrap ${
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
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Aktivitas Terbaru</h3>
                  <div className="space-y-4">
                    {recentActivities.map((activity) => (
                      <div key={activity.id} className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <div className="flex-1">
                          <p className="font-medium text-gray-900">{activity.action}</p>
                          <p className="text-sm text-gray-600">{activity.target}</p>
                          <p className="text-xs text-gray-500 mt-1">{activity.timestamp}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === "account" && (
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Nama Lengkap
                    </label>
                    <input
                      type="text"
                      value={adminData.name}
                      disabled={!isEditing}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all disabled:bg-gray-50"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      value={adminData.email}
                      disabled={!isEditing}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all disabled:bg-gray-50"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Nomor Telepon
                    </label>
                    <input
                      type="tel"
                      value={adminData.phone}
                      disabled={!isEditing}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all disabled:bg-gray-50"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Departemen
                    </label>
                    <input
                      type="text"
                      value={adminData.department}
                      disabled={!isEditing}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all disabled:bg-gray-50"
                    />
                  </div>
                </div>
              </div>
            )}

            {activeTab === "security" && (
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="border border-gray-300 rounded-xl p-4">
                    <div className="flex items-center gap-3 mb-3">
                      <Key className="w-5 h-5 text-gray-500" />
                      <h4 className="font-medium text-gray-900">Ubah Password</h4>
                    </div>
                    <p className="text-sm text-gray-600 mb-4">Update password untuk keamanan akun</p>
                    <button className="px-4 py-2 bg-primary text-white rounded-xl hover:bg-primary/90 transition-colors">
                      Ubah Password
                    </button>
                  </div>
                  
                  <div className="border border-gray-300 rounded-xl p-4">
                    <div className="flex items-center gap-3 mb-3">
                      <Shield className="w-5 h-5 text-gray-500" />
                      <h4 className="font-medium text-gray-900">Autentikasi 2 Faktor</h4>
                    </div>
                    <p className="text-sm text-gray-600 mb-4">Aktifkan 2FA untuk keamanan tambahan</p>
                    <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-xl hover:bg-gray-50 transition-colors">
                      Aktifkan 2FA
                    </button>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "notifications" && (
              <div className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 border border-gray-200 rounded-xl">
                    <div className="flex items-center gap-3">
                      <Bell className="w-5 h-5 text-gray-500" />
                      <div>
                        <h4 className="font-medium text-gray-900">Aplikasi Baru</h4>
                        <p className="text-sm text-gray-600">Notifikasi untuk aplikasi mitra baru</p>
                      </div>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" className="sr-only peer" defaultChecked />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                    </label>
                  </div>
                  
                  <div className="flex items-center justify-between p-4 border border-gray-200 rounded-xl">
                    <div className="flex items-center gap-3">
                      <Users className="w-5 h-5 text-gray-500" />
                      <div>
                        <h4 className="font-medium text-gray-900">Aktivitas Mitra</h4>
                        <p className="text-sm text-gray-600">Update dari mitra budaya</p>
                      </div>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" className="sr-only peer" />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                    </label>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminProfilePage;
