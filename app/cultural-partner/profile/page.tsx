// @/app/cultural-partner/profile/page.tsx
"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import { ArrowLeft, Edit3, Camera, Mail, Phone, MapPin, Calendar, Shield, Save, Upload } from "lucide-react";

const CulturalPartnerProfilePage = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [activeTab, setActiveTab] = useState("overview");

  // Dummy profile data
  const profileData = {
    organizationName: "Sanggar Seni Budaya Nusantara",
    organizationType: "Sanggar",
    picName: "Dr. Siti Nurhaliza",
    email: "siti@sanggar-nusantara.id",
    phone: "+62 274-558899",
    address: "Jl. Malioboro No. 123, Yogyakarta 55271",
    portfolio: "https://sanggar-nusantara.id",
    joinDate: "15 Oktober 2023",
    verified: true,
    avatar: "https://imgsrv2.voi.id/vgXBZUqvaOA-YhTSo6LH640C9vwnahxotNBSS_PZAIk/auto/1200/675/sm/1/bG9jYWw6Ly8vcHVibGlzaGVycy81MjA0NzMvMjAyNTEwMDYxMDAyLW1haW4uY3JvcHBlZF8xNzU5NzE5NzY2LmpwZw.jpg"
  };

  const stats = {
    totalAssets: 23,
    totalDownloads: 142,
    totalEarnings: 15750000,
    approvalRate: 95
  };

  const recentUploads = [
    {
      id: "MOTIF-001",
      title: "Motif Parang Klaten",
      uploadDate: "15 Jan 2024",
      status: "approved"
    },
    {
      id: "ILUS-001", 
      title: "Wayang Arjuna 2D",
      uploadDate: "12 Jan 2024",
      status: "pending"
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
    { id: "organization", label: "Data Organisasi" },
    { id: "documents", label: "Dokumen" }
  ];

  return (
    <div>
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <Link
            href="/cultural-partner/dashboard"
            className="inline-flex items-center text-gray-600 hover:text-primary transition-colors mb-4"
          >
            <ArrowLeft size={20} className="mr-2" />
            Kembali ke Dashboard
          </Link>
          
          <h1 className="text-3xl font-normal text-gray-900">Profil Mitra Budaya</h1>
        </div>

        {/* Profile Header */}
        <div className="bg-white rounded-2xl border border-gray-200 p-6 lg:p-8 mb-8">
          <div className="flex flex-col lg:flex-row lg:items-center gap-6">
            {/* Avatar Section */}
            <div className="relative">
              <div className="w-24 h-24 lg:w-32 lg:h-32 rounded-full overflow-hidden">
                <Image
                  src={profileData.avatar}
                  alt={profileData.organizationName}
                  width={128}
                  height={128}
                  className="w-full h-full object-cover"
                />
              </div>
              <button className="absolute bottom-0 right-0 p-2 bg-primary text-white rounded-full hover:bg-primary/90 transition-colors">
                <Camera size={16} />
              </button>
            </div>

            {/* Organization Info */}
            <div className="flex-1">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <h1 className="text-2xl lg:text-3xl font-semibold text-gray-900">
                      {profileData.organizationName}
                    </h1>
                    {profileData.verified && (
                      <span className="px-3 py-1 bg-green-100 text-green-800 text-xs rounded-full flex items-center gap-1">
                        <Shield size={12} />
                        Terverifikasi
                      </span>
                    )}
                  </div>
                  <p className="text-lg text-primary font-medium mb-1">{profileData.organizationType}</p>
                  <p className="text-gray-600 mb-4">PIC: {profileData.picName}</p>
                  
                  <div className="flex flex-col sm:flex-row gap-4 text-sm text-gray-600">
                    <span className="flex items-center gap-2">
                      <Mail size={16} />
                      {profileData.email}
                    </span>
                    <span className="flex items-center gap-2">
                      <Calendar size={16} />
                      Bergabung {profileData.joinDate}
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
            <p className="text-sm text-gray-600 mb-1">Total Aset</p>
            <p className="text-2xl font-semibold text-gray-900">{stats.totalAssets}</p>
          </div>
          
          <div className="bg-white rounded-2xl border border-gray-200 p-4 lg:p-6">
            <p className="text-sm text-gray-600 mb-1">Total Download</p>
            <p className="text-2xl font-semibold text-gray-900">{stats.totalDownloads}</p>
          </div>
          
          <div className="bg-white rounded-2xl border border-gray-200 p-4 lg:p-6">
            <p className="text-sm text-gray-600 mb-1">Pendapatan</p>
            <p className="text-xl font-semibold text-primary">{formatPrice(stats.totalEarnings)}</p>
          </div>
          
          <div className="bg-white rounded-2xl border border-gray-200 p-4 lg:p-6">
            <p className="text-sm text-gray-600 mb-1">Approval Rate</p>
            <p className="text-2xl font-semibold text-green-600">{stats.approvalRate}%</p>
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
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Upload Terbaru</h3>
                  <div className="space-y-3">
                    {recentUploads.map((upload) => (
                      <div key={upload.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                        <div>
                          <h4 className="font-medium text-gray-900">{upload.title}</h4>
                          <p className="text-sm text-gray-600">{upload.uploadDate}</p>
                        </div>
                        <span className={`px-3 py-1 text-xs rounded-full ${
                          upload.status === 'approved' 
                            ? 'bg-green-100 text-green-800'
                            : 'bg-yellow-100 text-yellow-800'
                        }`}>
                          {upload.status === 'approved' ? 'Disetujui' : 'Menunggu'}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === "organization" && (
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Nama Organisasi
                    </label>
                    <input
                      type="text"
                      value={profileData.organizationName}
                      disabled={!isEditing}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all disabled:bg-gray-50"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Jenis Organisasi
                    </label>
                    <select
                      value={profileData.organizationType}
                      disabled={!isEditing}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all disabled:bg-gray-50"
                    >
                      <option value="Sanggar">Sanggar</option>
                      <option value="Museum">Museum</option>
                      <option value="Yayasan">Yayasan</option>
                      <option value="Kurator">Kurator</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Nama PIC
                    </label>
                    <input
                      type="text"
                      value={profileData.picName}
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
                      value={profileData.email}
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
                      value={profileData.phone}
                      disabled={!isEditing}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all disabled:bg-gray-50"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Portfolio/Website
                    </label>
                    <input
                      type="url"
                      value={profileData.portfolio}
                      disabled={!isEditing}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all disabled:bg-gray-50"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Alamat Organisasi
                  </label>
                  <textarea
                    value={profileData.address}
                    disabled={!isEditing}
                    rows={3}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all disabled:bg-gray-50 resize-none"
                  />
                </div>
              </div>
            )}

            {activeTab === "documents" && (
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="border-2 border-dashed border-gray-300 rounded-xl p-6 text-center hover:border-primary transition-colors">
                    <Upload className="w-8 h-8 text-gray-400 mx-auto mb-4" />
                    <h4 className="font-medium text-gray-900 mb-2">Dokumen Legal</h4>
                    <p className="text-sm text-gray-600 mb-4">Akta/yayasan/registrasi legal</p>
                    <button className="px-4 py-2 bg-primary text-white rounded-xl hover:bg-primary/90 transition-colors">
                      Upload File
                    </button>
                  </div>
                  
                  <div className="border-2 border-dashed border-gray-300 rounded-xl p-6 text-center hover:border-primary transition-colors">
                    <Upload className="w-8 h-8 text-gray-400 mx-auto mb-4" />
                    <h4 className="font-medium text-gray-900 mb-2">Dokumen KYC</h4>
                    <p className="text-sm text-gray-600 mb-4">KTP/Paspor PIC</p>
                    <button className="px-4 py-2 bg-primary text-white rounded-xl hover:bg-primary/90 transition-colors">
                      Upload File
                    </button>
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

export default CulturalPartnerProfilePage;