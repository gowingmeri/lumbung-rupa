"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import { ArrowLeft, Search, Filter, Eye, Check, X, Clock, User, Building, FileText, Download } from "lucide-react";

const AdminApprovalsPage = () => {
  const [selectedStatus, setSelectedStatus] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  // Dummy applications data
  const applications = [
    {
      id: "APP-2024-001",
      organizationName: "Sanggar Seni Budaya Nusantara",
      organizationType: "Sanggar",
      picName: "Dr. Siti Nurhaliza",
      email: "siti@sanggar-nusantara.id",
      phone: "+62 274-558899",
      address: "Jl. Malioboro No. 123, Yogyakarta 55271",
      portfolio: "https://sanggar-nusantara.id",
      submitDate: "15 Jan 2024",
      status: "pending",
      documents: {
        buktiKemitraan: "kemitraan_sanggar_nusantara.pdf",
        dokumenLegal: "akta_yayasan.pdf",
        suratPernyataan: "pernyataan_ip.pdf",
        dokumenKYC: "ktp_pic.jpg"
      },
      avatar: "https://imgsrv2.voi.id/vgXBZUqvaOA-YhTSo6LH640C9vwnahxotNBSS_PZAIk/auto/1200/675/sm/1/bG9jYWw6Ly8vcHVibGlzaGVycy81MjA0NzMvMjAyNTEwMDYxMDAyLW1haW4uY3JvcHBlZF8xNzU5NzE5NzY2LmpwZw.jpg"
    },
    {
      id: "APP-2024-002",
      organizationName: "Museum Batik Heritage",
      organizationType: "Museum",
      picName: "Prof. Ahmad Suryanto",
      email: "ahmad@batikheritage.id",
      phone: "+62 812-3456-7890",
      address: "Jl. Sudirman No. 45, Solo 57126",
      portfolio: "https://batikheritage.museum.id",
      submitDate: "12 Jan 2024",
      status: "approved",
      documents: {
        buktiKemitraan: "kemitraan_museum.pdf",
        dokumenLegal: "izin_museum.pdf",
        suratPernyataan: "pernyataan_koleksi.pdf",
        dokumenKYC: "ktp_kurator.jpg"
      },
      avatar: "https://imgsrv2.voi.id/vgXBZUqvaOA-YhTSo6LH640C9vwnahxotNBSS_PZAIk/auto/1200/675/sm/1/bG9jYWw6Ly8vcHVibGlzaGVycy81MjA0NzMvMjAyNTEwMDYxMDAyLW1haW4uY3JvcHBlZF8xNzU5NzE5NzY2LmpwZw.jpg"
    },
    {
      id: "APP-2024-003",
      organizationName: "Yayasan Pelestari Budaya",
      organizationType: "Yayasan",
      picName: "Dra. Wulan Sari",
      email: "wulan@pelestari.org",
      phone: "+62 21-5678-9012",
      address: "Jl. Kemang Raya No. 88, Jakarta 12560",
      portfolio: "https://pelestari-budaya.org",
      submitDate: "8 Jan 2024",
      status: "rejected",
      documents: {
        buktiKemitraan: "kemitraan_yayasan.pdf",
        dokumenLegal: "akta_notaris.pdf",
        suratPernyataan: "pernyataan_budaya.pdf",
        dokumenKYC: "ktp_ketua.jpg"
      },
      avatar: "https://imgsrv2.voi.id/vgXBZUqvaOA-YhTSo6LH640C9vwnahxotNBSS_PZAIk/auto/1200/675/sm/1/bG9jYWw6Ly8vcHVibGlzaGVycy81MjA0NzMvMjAyNTEwMDYxMDAyLW1haW4uY3JvcHBlZF8xNzU5NzE5NzY2LmpwZw.jpg"
    }
  ];

  const statusOptions = [
    { value: "all", label: "Semua Status" },
    { value: "pending", label: "Menunggu Review" },
    { value: "approved", label: "Disetujui" },
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

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'approved':
        return <Check size={16} className="text-green-600" />;
      case 'pending':
        return <Clock size={16} className="text-yellow-600" />;
      case 'rejected':
        return <X size={16} className="text-red-600" />;
      default:
        return <Clock size={16} className="text-gray-600" />;
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'approved': return 'Disetujui';
      case 'pending': return 'Menunggu Review';
      case 'rejected': return 'Ditolak';
      default: return 'Unknown';
    }
  };

  const filteredApplications = applications.filter(app => {
    const matchesStatus = selectedStatus === "all" || app.status === selectedStatus;
    const matchesSearch = !searchQuery || 
      app.organizationName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      app.picName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      app.email.toLowerCase().includes(searchQuery.toLowerCase());
    
    return matchesStatus && matchesSearch;
  });

  const handleApprove = (id: string) => {
    console.log("Approving application:", id);
    // API call to approve
  };

  const handleReject = (id: string) => {
    console.log("Rejecting application:", id);
    // API call to reject
  };

  const stats = {
    total: applications.length,
    pending: applications.filter(app => app.status === 'pending').length,
    approved: applications.filter(app => app.status === 'approved').length,
    rejected: applications.filter(app => app.status === 'rejected').length
  };

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
          
          <h1 className="text-3xl font-normal text-gray-900 mb-4">Approval Mitra Budaya</h1>
          <p className="text-gray-600">Review dan approve aplikasi pendaftaran mitra budaya</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-2xl border border-gray-200 p-6">
            <div className="flex items-center">
              <div className="p-3 bg-blue-100 rounded-full mr-4">
                <FileText className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Total Aplikasi</p>
                <p className="text-2xl font-semibold text-gray-900">{stats.total}</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-2xl border border-gray-200 p-6">
            <div className="flex items-center">
              <div className="p-3 bg-yellow-100 rounded-full mr-4">
                <Clock className="w-6 h-6 text-yellow-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Menunggu Review</p>
                <p className="text-2xl font-semibold text-gray-900">{stats.pending}</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-2xl border border-gray-200 p-6">
            <div className="flex items-center">
              <div className="p-3 bg-green-100 rounded-full mr-4">
                <Check className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Disetujui</p>
                <p className="text-2xl font-semibold text-gray-900">{stats.approved}</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-2xl border border-gray-200 p-6">
            <div className="flex items-center">
              <div className="p-3 bg-red-100 rounded-full mr-4">
                <X className="w-6 h-6 text-red-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Ditolak</p>
                <p className="text-2xl font-semibold text-gray-900">{stats.rejected}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-2xl border border-gray-200 p-6 mb-8">
          <div className="flex items-center gap-4 mb-4">
            <Filter size={20} className="text-gray-500" />
            <h3 className="font-medium text-gray-900">Filter & Pencarian</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="relative">
              <Search size={20} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Cari nama organisasi atau PIC..."
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
            
            <button className="px-6 py-3 border border-gray-300 text-gray-700 rounded-xl hover:bg-gray-50 transition-colors">
              Reset Filter
            </button>
          </div>
        </div>

        {/* Applications List */}
        <div className="space-y-6">
          {filteredApplications.map((application) => (
            <div key={application.id} className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
              {/* Application Header */}
              <div className="p-6 border-b border-gray-200">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                  <div className="flex items-start gap-4">
                    <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
                      <Image
                        src={application.avatar}
                        alt={application.organizationName}
                        width={64}
                        height={64}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-xl font-semibold text-gray-900">
                          {application.organizationName}
                        </h3>
                        <span className={`px-3 py-1 text-xs rounded-full flex items-center gap-1 ${getStatusColor(application.status)}`}>
                          {getStatusIcon(application.status)}
                          {getStatusText(application.status)}
                        </span>
                      </div>
                      <p className="text-primary font-medium mb-1">{application.organizationType}</p>
                      <p className="text-gray-600">PIC: {application.picName}</p>
                      <p className="text-sm text-gray-500">ID: {application.id} • Diajukan {application.submitDate}</p>
                    </div>
                  </div>
                  
                  {application.status === 'pending' && (
                    <div className="flex gap-3">
                      <button
                        onClick={() => handleReject(application.id)}
                        className="px-4 py-2 border border-red-300 text-red-600 rounded-xl hover:bg-red-50 transition-colors flex items-center gap-2"
                      >
                        <X size={16} />
                        Tolak
                      </button>
                      <button
                        onClick={() => handleApprove(application.id)}
                        className="px-6 py-2 bg-green-600 text-white rounded-xl hover:bg-green-700 transition-colors flex items-center gap-2"
                      >
                        <Check size={16} />
                        Setujui
                      </button>
                    </div>
                  )}
                </div>
              </div>

              {/* Application Details */}
              <div className="p-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {/* Contact Information */}
                  <div>
                    <h4 className="font-medium text-gray-900 mb-4 flex items-center gap-2">
                      <User size={18} />
                      Informasi Kontak
                    </h4>
                    <div className="space-y-3">
                      <div>
                        <p className="text-sm text-gray-500">Email</p>
                        <p className="font-medium text-gray-900">{application.email}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Telepon</p>
                        <p className="font-medium text-gray-900">{application.phone}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Alamat</p>
                        <p className="font-medium text-gray-900">{application.address}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Portfolio</p>
                        <a 
                          href={application.portfolio} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="font-medium text-primary hover:underline"
                        >
                          {application.portfolio}
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Documents */}
                  <div>
                    <h4 className="font-medium text-gray-900 mb-4 flex items-center gap-2">
                      <FileText size={18} />
                      Dokumen Verifikasi
                    </h4>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
                        <div>
                          <p className="font-medium text-gray-900 text-sm">Bukti Kemitraan Budaya</p>
                          <p className="text-xs text-gray-600">{application.documents.buktiKemitraan}</p>
                        </div>
                        <button className="p-2 text-gray-500 hover:text-primary transition-colors">
                          <Download size={16} />
                        </button>
                      </div>
                      
                      <div className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
                        <div>
                          <p className="font-medium text-gray-900 text-sm">Dokumen Legal</p>
                          <p className="text-xs text-gray-600">{application.documents.dokumenLegal}</p>
                        </div>
                        <button className="p-2 text-gray-500 hover:text-primary transition-colors">
                          <Download size={16} />
                        </button>
                      </div>
                      
                      <div className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
                        <div>
                          <p className="font-medium text-gray-900 text-sm">Surat Pernyataan IP</p>
                          <p className="text-xs text-gray-600">{application.documents.suratPernyataan}</p>
                        </div>
                        <button className="p-2 text-gray-500 hover:text-primary transition-colors">
                          <Download size={16} />
                        </button>
                      </div>
                      
                      <div className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
                        <div>
                          <p className="font-medium text-gray-900 text-sm">Dokumen KYC</p>
                          <p className="text-xs text-gray-600">{application.documents.dokumenKYC}</p>
                        </div>
                        <button className="p-2 text-gray-500 hover:text-primary transition-colors">
                          <Download size={16} />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredApplications.length === 0 && (
          <div className="text-center py-16">
            <FileText size={64} className="mx-auto text-gray-300 mb-4" />
            <h3 className="text-xl font-medium text-gray-900 mb-2">Tidak ada aplikasi ditemukan</h3>
            <p className="text-gray-600">Coba ubah filter atau kata kunci pencarian</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminApprovalsPage;
