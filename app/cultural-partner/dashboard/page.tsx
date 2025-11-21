// @/app/cultural-partner/dashboard/page.tsx
"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import { ArrowLeft, Upload, Eye, Download, TrendingUp, DollarSign, Package, Users, Plus, MoreVertical } from "lucide-react";

const CulturalPartnerDashboardPage = () => {
  const [selectedPeriod, setSelectedPeriod] = useState("30days");

  // Dummy dashboard data
  const stats = {
    totalEarnings: 15750000,
    totalProducts: 23,
    totalDownloads: 142,
    totalViews: 3250
  };

  const recentProducts = [
    {
      id: "MOTIF-001",
      title: "Motif Parang Klaten",
      category: "Motif",
      uploadDate: "15 Jan 2024",
      status: "approved",
      downloads: 45,
      earnings: 2250000,
      thumbnail: "https://imgsrv2.voi.id/vgXBZUqvaOA-YhTSo6LH640C9vwnahxotNBSS_PZAIk/auto/1200/675/sm/1/bG9jYWw6Ly8vcHVibGlzaGVycy81MjA0NzMvMjAyNTEwMDYxMDAyLW1haW4uY3JvcHBlZF8xNzU5NzE5NzY2LmpwZw.jpg"
    },
    {
      id: "ILUS-001",
      title: "Wayang Arjuna 2D",
      category: "Ilustrasi",
      uploadDate: "12 Jan 2024",
      status: "pending",
      downloads: 0,
      earnings: 0,
      thumbnail: "https://imgsrv2.voi.id/vgXBZUqvaOA-YhTSo6LH640C9vwnahxotNBSS_PZAIk/auto/1200/675/sm/1/bG9jYWw6Ly8vcHVibGlzaGVycy81MjA0NzMvMjAyNTEwMDYxMDAyLW1haW4uY3JvcHBlZF8xNzU5NzE5NzY2LmpwZw.jpg"
    },
    {
      id: "ORN-001",
      title: "Ornamen Toraja Spiral",
      category: "Ornamen",
      uploadDate: "10 Jan 2024",
      status: "approved",
      downloads: 28,
      earnings: 1400000,
      thumbnail: "https://imgsrv2.voi.id/vgXBZUqvaOA-YhTSo6LH640C9vwnahxotNBSS_PZAIk/auto/1200/675/sm/1/bG9jYWw6Ly8vcHVibGlzaGVycy81MjA0NzMvMjAyNTEwMDYxMDAyLW1haW4uY3JvcHBlZF8xNzU5NzE5NzY2LmpwZw.jpg"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'approved':
        return 'bg-green-100 text-green-800';
      case 'pending':
        return 'bg-yellow-100 text-yellow-800';
      case 'rejected':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
    }).format(price);
  };

  return (
    <div>
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
            <div>
              <Link
                href="/"
                className="inline-flex items-center text-gray-600 hover:text-primary transition-colors mb-4"
              >
                <ArrowLeft size={20} className="mr-2" />
                Kembali ke Beranda
              </Link>
              <h1 className="text-3xl font-normal text-gray-900">Dashboard Mitra Budaya</h1>
            </div>
            
            <Link
              href="/cultural-partner/upload"
              className="flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-full font-medium hover:bg-primary/90 transition-colors"
            >
              <Plus size={20} />
              Upload Aset Baru
            </Link>
          </div>

          {/* Period Filter */}
          <div className="flex items-center gap-4">
            <span className="text-sm text-gray-600">Periode:</span>
            <select
              value={selectedPeriod}
              onChange={(e) => setSelectedPeriod(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-xl focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
            >
              <option value="7days">7 Hari Terakhir</option>
              <option value="30days">30 Hari Terakhir</option>
              <option value="90days">3 Bulan Terakhir</option>
              <option value="1year">1 Tahun Terakhir</option>
            </select>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-2xl border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 bg-primary/10 rounded-full">
                <DollarSign className="w-6 h-6 text-primary" />
              </div>
              <TrendingUp className="w-5 h-5 text-green-500" />
            </div>
            <p className="text-sm text-gray-600 mb-1">Total Pendapatan</p>
            <p className="text-2xl font-semibold text-gray-900">{formatPrice(stats.totalEarnings)}</p>
          </div>
          
          <div className="bg-white rounded-2xl border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 bg-blue-100 rounded-full">
                <Package className="w-6 h-6 text-blue-600" />
              </div>
              <span className="text-sm text-gray-500">+3</span>
            </div>
            <p className="text-sm text-gray-600 mb-1">Total Aset</p>
            <p className="text-2xl font-semibold text-gray-900">{stats.totalProducts}</p>
          </div>
          
          <div className="bg-white rounded-2xl border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 bg-green-100 rounded-full">
                <Download className="w-6 h-6 text-green-600" />
              </div>
              <TrendingUp className="w-5 h-5 text-green-500" />
            </div>
            <p className="text-sm text-gray-600 mb-1">Total Download</p>
            <p className="text-2xl font-semibold text-gray-900">{stats.totalDownloads}</p>
          </div>
          
          <div className="bg-white rounded-2xl border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 bg-purple-100 rounded-full">
                <Eye className="w-6 h-6 text-purple-600" />
              </div>
              <span className="text-sm text-gray-500">+12%</span>
            </div>
            <p className="text-sm text-gray-600 mb-1">Total Views</p>
            <p className="text-2xl font-semibold text-gray-900">{stats.totalViews.toLocaleString()}</p>
          </div>
        </div>

        {/* Recent Products */}
        <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden mb-8">
          <div className="p-6 border-b border-gray-200">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold text-gray-900">Aset Budaya Terbaru</h2>
              <Link
                href="/cultural-partner/product"
                className="text-primary hover:underline text-sm"
              >
                Lihat Semua
              </Link>
            </div>
          </div>
          
          <div className="divide-y divide-gray-200">
            {recentProducts.map((product) => (
              <div key={product.id} className="p-6">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-xl overflow-hidden">
                    <Image
                      src={product.thumbnail}
                      alt={product.title}
                      width={64}
                      height={64}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="font-medium text-gray-900 mb-1">{product.title}</h3>
                        <div className="flex items-center gap-3 text-sm text-gray-600">
                          <span>{product.category}</span>
                          <span>{product.uploadDate}</span>
                          <span className={`px-2 py-1 text-xs rounded-full ${getStatusColor(product.status)}`}>
                            {product.status === 'approved' ? 'Disetujui' : 
                             product.status === 'pending' ? 'Menunggu' : 'Ditolak'}
                          </span>
                        </div>
                      </div>
                      
                      <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors">
                        <MoreVertical size={16} />
                      </button>
                    </div>
                    
                    <div className="flex items-center gap-6 mt-3 text-sm">
                      <div className="flex items-center gap-1 text-gray-600">
                        <Download size={16} />
                        <span>{product.downloads} downloads</span>
                      </div>
                      <div className="text-primary font-medium">
                        {formatPrice(product.earnings)}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Link
            href="/cultural-partner/upload"
            className="bg-white rounded-2xl border border-gray-200 p-6 hover:shadow-lg transition-shadow group"
          >
            <div className="p-3 bg-primary/10 rounded-full w-fit mb-4 group-hover:bg-primary/20 transition-colors">
              <Upload className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Upload Aset Baru</h3>
            <p className="text-sm text-gray-600">Bagikan warisan budaya Indonesia dengan dunia</p>
          </Link>
          
          <Link
            href="/cultural-partner/product"
            className="bg-white rounded-2xl border border-gray-200 p-6 hover:shadow-lg transition-shadow group"
          >
            <div className="p-3 bg-blue-100 rounded-full w-fit mb-4 group-hover:bg-blue-200 transition-colors">
              <Package className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Kelola Aset</h3>
            <p className="text-sm text-gray-600">Pantau dan kelola semua aset budaya Anda</p>
          </Link>
          
          <Link
            href="/cultural-partner/profile"
            className="bg-white rounded-2xl border border-gray-200 p-6 hover:shadow-lg transition-shadow group"
          >
            <div className="p-3 bg-purple-100 rounded-full w-fit mb-4 group-hover:bg-purple-200 transition-colors">
              <Users className="w-6 h-6 text-purple-600" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Profil Mitra</h3>
            <p className="text-sm text-gray-600">Update informasi dan kredensial mitra</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CulturalPartnerDashboardPage;