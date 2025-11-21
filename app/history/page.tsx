"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import { ArrowLeft, Download, Eye, Calendar, CreditCard, CheckCircle, Clock, XCircle, Filter } from "lucide-react";

const HistoryPage = () => {
  const [selectedFilter, setSelectedFilter] = useState<string>("all");
  const [selectedPeriod, setSelectedPeriod] = useState<string>("all");

  // Dummy purchase history data
  const purchaseHistory = [
    {
      id: "LR-2024-001",
      date: "15 Jan 2024",
      items: [
        {
          id: "MOTIF-001",
          title: "Motif Parang Klaten",
          category: "Motif",
          licenseType: "Commercial",
          quantity: 2,
          price: 500000,
          thumbnail: "https://imgsrv2.voi.id/vgXBZUqvaOA-YhTSo6LH640C9vwnahxotNBSS_PZAIk/auto/1200/675/sm/1/bG9jYWw6Ly8vcHVibGlzaGVycy81MjA0NzMvMjAyNTEwMDYxMDAyLW1haW4uY3JvcHBlZF8xNzU5NzE5NzY2LmpwZw.jpg"
        },
        {
          id: "ILUS-001",
          title: "Wayang Arjuna 2D",
          category: "Ilustrasi",
          licenseType: "Personal",
          quantity: 1,
          price: 280000,
          thumbnail: "https://imgsrv2.voi.id/vgXBZUqvaOA-YhTSo6LH640C9vwnahxotNBSS_PZAIk/auto/1200/675/sm/1/bG9jYWw6Ly8vcHVibGlzaGVycy81MjA0NzMvMjAyNTEwMDYxMDAyLW1haW4uY3JvcHBlZF8xNzU5NzE5NzY2LmpwZw.jpg"
        }
      ],
      total: 780000,
      status: "completed",
      paymentMethod: "Bank Transfer",
      downloadCount: 3
    },
    {
      id: "LR-2024-002",
      date: "10 Jan 2024",
      items: [
        {
          id: "GEN-001",
          title: "Cyberpunk Mega Mendung",
          category: "Generatif",
          licenseType: "Enterprise",
          quantity: 1,
          price: 600000,
          thumbnail: "https://imgsrv2.voi.id/vgXBZUqvaOA-YhTSo6LH640C9vwnahxotNBSS_PZAIk/auto/1200/675/sm/1/bG9jYWw6Ly8vcHVibGlzaGVycy81MjA0NzMvMjAyNTEwMDYxMDAyLW1haW4uY3JvcHBlZF8xNzU5NzE5NzY2LmpwZw.jpg"
        }
      ],
      total: 600000,
      status: "processing",
      paymentMethod: "Credit Card",
      downloadCount: 0
    },
    {
      id: "LR-2024-003",
      date: "5 Jan 2024",
      items: [
        {
          id: "ORN-001",
          title: "Ornamen Toraja Spiral",
          category: "Ornamen",
          licenseType: "Commercial",
          quantity: 3,
          price: 1350000,
          thumbnail: "https://imgsrv2.voi.id/vgXBZUqvaOA-YhTSo6LH640C9vwnahxotNBSS_PZAIk/auto/1200/675/sm/1/bG9jYWw6Ly8vcHVibGlzaGVycy81MjA0NzMvMjAyNTEwMDYxMDAyLW1haW4uY3JvcHBlZF8xNzU5NzE5NzY2LmpwZw.jpg"
        }
      ],
      total: 1350000,
      status: "failed",
      paymentMethod: "Bank Transfer",
      downloadCount: 0
    }
  ];

  const filterOptions = [
    { value: "all", label: "Semua Status" },
    { value: "completed", label: "Selesai" },
    { value: "processing", label: "Diproses" },
    { value: "failed", label: "Gagal" }
  ];

  const periodOptions = [
    { value: "all", label: "Semua Waktu" },
    { value: "7days", label: "7 Hari Terakhir" },
    { value: "30days", label: "30 Hari Terakhir" },
    { value: "90days", label: "3 Bulan Terakhir" }
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "completed":
        return <CheckCircle size={20} className="text-green-500" />;
      case "processing":
        return <Clock size={20} className="text-yellow-500" />;
      case "failed":
        return <XCircle size={20} className="text-red-500" />;
      default:
        return <Clock size={20} className="text-gray-500" />;
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case "completed":
        return "Selesai";
      case "processing":
        return "Diproses";
      case "failed":
        return "Gagal";
      default:
        return "Unknown";
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "bg-green-100 text-green-800";
      case "processing":
        return "bg-yellow-100 text-yellow-800";
      case "failed":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
    }).format(price);
  };

  const filteredHistory = purchaseHistory.filter(order => {
    if (selectedFilter !== "all" && order.status !== selectedFilter) {
      return false;
    }
    // Add period filtering logic here if needed
    return true;
  });

  const totalSpent = purchaseHistory
    .filter(order => order.status === "completed")
    .reduce((sum, order) => sum + order.total, 0);

  const totalOrders = purchaseHistory.length;
  const completedOrders = purchaseHistory.filter(order => order.status === "completed").length;

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

        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-normal text-gray-900 mb-4">Riwayat Pembelian Lisensi</h1>
          
          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white rounded-2xl border border-gray-200 p-6">
              <div className="flex items-center">
                <div className="p-3 bg-primary/10 rounded-full mr-4">
                  <CreditCard className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-gray-600">Total Belanja</p>
                  <p className="text-2xl font-semibold text-gray-900">{formatPrice(totalSpent)}</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-2xl border border-gray-200 p-6">
              <div className="flex items-center">
                <div className="p-3 bg-blue-100 rounded-full mr-4">
                  <Calendar className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-600">Total Pesanan</p>
                  <p className="text-2xl font-semibold text-gray-900">{totalOrders}</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-2xl border border-gray-200 p-6">
              <div className="flex items-center">
                <div className="p-3 bg-green-100 rounded-full mr-4">
                  <CheckCircle className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-600">Selesai</p>
                  <p className="text-2xl font-semibold text-gray-900">{completedOrders}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-2xl border border-gray-200 p-6 mb-8">
          <div className="flex items-center gap-4 mb-4">
            <Filter size={20} className="text-gray-500" />
            <h3 className="font-medium text-gray-900">Filter Riwayat</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Status Pesanan</label>
              <select
                value={selectedFilter}
                onChange={(e) => setSelectedFilter(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
              >
                {filterOptions.map(option => (
                  <option key={option.value} value={option.value}>{option.label}</option>
                ))}
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Periode Waktu</label>
              <select
                value={selectedPeriod}
                onChange={(e) => setSelectedPeriod(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
              >
                {periodOptions.map(option => (
                  <option key={option.value} value={option.value}>{option.label}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Order History */}
        <div className="space-y-6">
          {filteredHistory.length === 0 ? (
            <div className="text-center py-16">
              <Calendar size={64} className="mx-auto text-gray-300 mb-4" />
              <h3 className="text-xl font-medium text-gray-900 mb-2">Belum Ada Riwayat</h3>
              <p className="text-gray-600 mb-6">Anda belum memiliki riwayat pembelian lisensi</p>
              <Link
                href="/product"
                className="inline-block px-6 py-3 bg-primary text-white rounded-full font-medium hover:bg-primary/90 transition-colors"
              >
                Mulai Belanja
              </Link>
            </div>
          ) : (
            filteredHistory.map((order) => (
              <div key={order.id} className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
                {/* Order Header */}
                <div className="p-6 border-b border-gray-200">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="font-semibold text-gray-900">#{order.id}</h3>
                        <span className={`px-3 py-1 text-xs rounded-full ${getStatusColor(order.status)}`}>
                          {getStatusText(order.status)}
                        </span>
                      </div>
                      <div className="flex items-center gap-4 text-sm text-gray-600">
                        <span className="flex items-center gap-1">
                          <Calendar size={16} />
                          {order.date}
                        </span>
                        <span className="flex items-center gap-1">
                          <CreditCard size={16} />
                          {order.paymentMethod}
                        </span>
                      </div>
                    </div>
                    
                    <div className="text-right">
                      <p className="text-2xl font-semibold text-primary mb-1">
                        {formatPrice(order.total)}
                      </p>
                      <p className="text-sm text-gray-600">
                        {order.items.length} item{order.items.length > 1 ? 's' : ''}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Order Items */}
                <div className="p-6">
                  <div className="space-y-4">
                    {order.items.map((item, index) => (
                      <div key={index} className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl">
                        <div className="w-16 h-16 rounded-xl overflow-hidden flex-shrink-0">
                          <Image
                            src={item.thumbnail}
                            alt={item.title}
                            width={64}
                            height={64}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        
                        <div className="flex-1 min-w-0">
                          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                            <div>
                              <h4 className="font-medium text-gray-900 mb-1">{item.title}</h4>
                              <div className="flex items-center gap-3 text-sm text-gray-600">
                                <span className="px-2 py-1 bg-white rounded-full text-xs">
                                  {item.category}
                                </span>
                                <span>{item.licenseType}</span>
                                <span>Qty: {item.quantity}</span>
                              </div>
                            </div>
                            <div className="text-right">
                              <p className="font-medium text-gray-900">
                                {formatPrice(item.price)}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Order Actions */}
                  <div className="flex flex-col sm:flex-row gap-3 mt-6 pt-6 border-t border-gray-200">
                    <Link
                      href={`/order/${order.id}`}
                      className="flex items-center justify-center gap-2 px-4 py-2 border border-gray-300 text-gray-700 rounded-full hover:bg-gray-50 transition-colors"
                    >
                      <Eye size={16} />
                      Detail Pesanan
                    </Link>
                    
                    {order.status === "completed" && (
                      <button className="flex items-center justify-center gap-2 px-4 py-2 bg-primary text-white rounded-full hover:bg-primary/90 transition-colors">
                        <Download size={16} />
                        Download ({order.downloadCount}/∞)
                      </button>
                    )}
                    
                    {order.status === "failed" && (
                      <button className="flex items-center justify-center gap-2 px-4 py-2 bg-primary text-white rounded-full hover:bg-primary/90 transition-colors">
                        Beli Ulang
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Load More */}
        {filteredHistory.length > 0 && (
          <div className="text-center mt-8">
            <button className="px-6 py-3 border border-gray-300 text-gray-700 rounded-full hover:bg-gray-50 transition-colors">
              Muat Lebih Banyak
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default HistoryPage;