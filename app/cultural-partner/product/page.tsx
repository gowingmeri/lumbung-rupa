// @/app/cultural-partner/product/page.tsx
"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import { ArrowLeft, Plus, Search, Filter, Eye, Download, Edit, Trash2, MoreVertical } from "lucide-react";

const CulturalPartnerProductPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("all");
  const [selectedCategory, setSelectedCategory] = useState("all");

  // Dummy products data
  const products = [
    {
      id: "MOTIF-001",
      title: "Motif Parang Klaten",
      category: "Motif",
      uploadDate: "15 Jan 2024",
      status: "approved",
      downloads: 45,
      views: 234,
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
      views: 45,
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
      views: 156,
      earnings: 1400000,
      thumbnail: "https://imgsrv2.voi.id/vgXBZUqvaOA-YhTSo6LH640C9vwnahxotNBSS_PZAIk/auto/1200/675/sm/1/bG9jYWw6Ly8vcHVibGlzaGVycy81MjA0NzMvMjAyNTEwMDYxMDAyLW1haW4uY3JvcHBlZF8xNzU5NzE5NzY2LmpwZw.jpg"
    },
    {
      id: "TEX-001",
      title: "Texture Anyaman Bambu",
      category: "Texture",
      uploadDate: "8 Jan 2024",
      status: "rejected",
      downloads: 0,
      views: 12,
      earnings: 0,
      thumbnail: "https://imgsrv2.voi.id/vgXBZUqvaOA-YhTSo6LH640C9vwnahxotNBSS_PZAIk/auto/1200/675/sm/1/bG9jYWw6Ly8vcHVibGlzaGVycy81MjA0NzMvMjAyNTEwMDYxMDAyLW1haW4uY3JvcHBlZF8xNzU5NzE5NzY2LmpwZw.jpg"
    }
  ];

  const categories = ["Motif", "Pola", "Aksara", "Ornamen", "Ilustrasi", "Texture", "Generatif"];
  const statusOptions = [
    { value: "all", label: "Semua Status" },
    { value: "approved", label: "Disetujui" },
    { value: "pending", label: "Menunggu" },
    { value: "rejected", label: "Ditolak" }
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

  const filteredProducts = products.filter(product => {
    const matchesSearch = !searchQuery || 
      product.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = selectedStatus === "all" || product.status === selectedStatus;
    const matchesCategory = selectedCategory === "all" || product.category === selectedCategory;
    
    return matchesSearch && matchesStatus && matchesCategory;
  });

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
          
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <h1 className="text-3xl font-normal text-gray-900">Kelola Aset Budaya</h1>
            
            <Link
              href="/cultural-partner/upload"
              className="flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-full font-medium hover:bg-primary/90 transition-colors"
            >
              <Plus size={20} />
              Upload Aset Baru
            </Link>
          </div>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-2xl border border-gray-200 p-6 mb-8">
          <div className="flex items-center gap-4 mb-4">
            <Filter size={20} className="text-gray-500" />
            <h3 className="font-medium text-gray-900">Filter & Pencarian</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="relative">
              <Search size={20} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Cari aset..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
              />
            </div>
            
            <select
              value={selectedStatus}
              onChange={(e) => setSelectedStatus(e.target.value)}
              className="px-4 py-3 border border-gray-300 rounded-xl focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
            >
              {statusOptions.map(option => (
                <option key={option.value} value={option.value}>{option.label}</option>
              ))}
            </select>
            
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-3 border border-gray-300 rounded-xl focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
            >
              <option value="all">Semua Kategori</option>
              {categories.map(category => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>
            
            <button className="px-6 py-3 border border-gray-300 text-gray-700 rounded-xl hover:bg-gray-50 transition-colors">
              Reset Filter
            </button>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <div key={product.id} className="bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-square relative overflow-hidden">
                <Image
                  src={product.thumbnail}
                  alt={product.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute top-3 left-3">
                  <span className="px-3 py-1 bg-black/70 text-white text-xs rounded-full">
                    {product.category}
                  </span>
                </div>
                <div className="absolute top-3 right-3">
                  <span className={`px-3 py-1 text-xs rounded-full ${getStatusColor(product.status)}`}>
                    {product.status === 'approved' ? 'Disetujui' : 
                     product.status === 'pending' ? 'Menunggu' : 'Ditolak'}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="font-medium text-gray-900 mb-1">{product.title}</h3>
                    <p className="text-sm text-gray-600">{product.uploadDate}</p>
                  </div>
                  
                  <div className="relative">
                    <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors">
                      <MoreVertical size={16} />
                    </button>
                  </div>
                </div>
                
                <div className="grid grid-cols-3 gap-4 mb-4">
                  <div className="text-center">
                    <div className="flex items-center justify-center mb-1">
                      <Eye size={16} className="text-gray-400" />
                    </div>
                    <p className="text-sm font-medium text-gray-900">{product.views}</p>
                    <p className="text-xs text-gray-500">Views</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="flex items-center justify-center mb-1">
                      <Download size={16} className="text-gray-400" />
                    </div>
                    <p className="text-sm font-medium text-gray-900">{product.downloads}</p>
                    <p className="text-xs text-gray-500">Downloads</p>
                  </div>
                  
                  <div className="text-center">
                    <p className="text-sm font-medium text-primary">{formatPrice(product.earnings)}</p>
                    <p className="text-xs text-gray-500">Pendapatan</p>
                  </div>
                </div>
                
                <div className="flex gap-2">
                  <button className="flex-1 flex items-center justify-center gap-2 py-2 px-3 border border-gray-300 text-gray-700 rounded-xl hover:bg-gray-50 transition-colors text-sm">
                    <Edit size={16} />
                    Edit
                  </button>
                  <button className="flex items-center justify-center gap-2 py-2 px-3 border border-red-300 text-red-600 rounded-xl hover:bg-red-50 transition-colors text-sm">
                    <Trash2 size={16} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-16">
            <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Search size={32} className="text-gray-400" />
            </div>
            <h3 className="text-xl font-medium text-gray-900 mb-2">Tidak ada aset ditemukan</h3>
            <p className="text-gray-600 mb-6">Coba ubah filter atau upload aset budaya baru</p>
            <Link
              href="/cultural-partner/upload"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-full font-medium hover:bg-primary/90 transition-colors"
            >
              <Plus size={20} />
              Upload Aset Baru
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default CulturalPartnerProductPage;