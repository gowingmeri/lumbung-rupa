"use client";
export const dynamic = "force-dynamic";
import React, { useState, useEffect, Suspense } from "react";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { products, Product } from "@/data/product";
import Navbar from "@/components/Navbar";
import { ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";

const ProductContent = () => {
  const searchParams = useSearchParams();
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  const categories = ["Batik", "Relief", "Wayang", "Ornamen", "Generatif"];

  // Load initial values from URL parameters
  useEffect(() => {
    const categoryParam = searchParams.get('category');
    const searchParam = searchParams.get('search');
    
    if (categoryParam) {
      setSelectedCategory(categoryParam);
    }
    if (searchParam) {
      setSearchQuery(searchParam);
    }
  }, [searchParams]);

  const filteredProducts = products.filter((product) => {
    const matchesCategory = !selectedCategory || product.kategori === selectedCategory;
    const matchesSearch = !searchQuery || 
      product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    
    return matchesCategory && matchesSearch;
  });

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
        {/* Back Button */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6"
        >
          <Link href="/">
            <motion.div
              whileHover={{ x: -5 }}
              className="inline-flex items-center text-gray-600 hover:text-primary transition-colors cursor-pointer"
            >
              <ArrowLeft size={20} className="mr-2" />
              Kembali ke Beranda
            </motion.div>
          </Link>
        </motion.div>

        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <h1 className="text-3xl font-normal text-gray-900 mb-4">Koleksi Aset Budaya</h1>
          
          {/* Search */}
          <div className="mb-6">
            <motion.input
              type="text"
              placeholder="Cari aset budaya..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              whileFocus={{ scale: 1.02 }}
              className="w-full max-w-md px-4 py-3 border border-gray-300 rounded-full focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
            />
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-3 mb-6">
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedCategory(null)}
              className={`px-6 py-2 rounded-full font-normal transition-colors ${
                !selectedCategory
                  ? "bg-primary text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              Semua
            </motion.button>
            {categories.map((category, index) => (
              <motion.button
                key={category}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-normal transition-colors ${
                  selectedCategory === category
                    ? "bg-primary text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Results Count */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-6"
        >
          <p className="text-gray-600">
            Menampilkan {filteredProducts.length} dari {products.length} aset
          </p>
        </motion.div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: Math.min(index * 0.05, 1) }}
            >
              <Link
                href={`/detail-product?id=${product.id}`}
                className="group block border border-gray-200 rounded-2xl overflow-hidden hover:shadow-lg transition-shadow"
              >
                <motion.div 
                  className="aspect-square relative overflow-hidden"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <Image
                    src={product.thumbnail}
                    alt={product.title}
                    fill
                    className="object-cover transition-transform duration-300"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="px-3 py-1 bg-black/70 text-white text-xs rounded-full">
                      {product.kategori}
                    </span>
                  </div>
                  {product.isGenerative && (
                    <div className="absolute top-3 right-3">
                      <span className="px-3 py-1 bg-primary text-white text-xs rounded-full">
                        AI
                      </span>
                    </div>
                  )}
                </motion.div>
                
                <div className="p-4">
                  <h3 className="font-normal text-lg text-gray-900 mb-2 group-hover:text-primary transition-colors">
                    {product.title}
                  </h3>
                  <p className="text-sm text-gray-600 mb-2 line-clamp-2">
                    {product.description}
                  </p>
                  <p className="text-xs text-gray-500 mb-3">
                    oleh {product.creator}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-medium text-primary">
                      {formatPrice(product.price)}
                    </span>
                    <span className={`px-2 py-1 text-xs rounded-full ${
                      product.jenisLisensi === 'personal' 
                        ? 'bg-blue-100 text-blue-800'
                        : product.jenisLisensi === 'commercial'
                        ? 'bg-green-100 text-green-800'
                        : 'bg-purple-100 text-purple-800'
                    }`}>
                      {product.jenisLisensi}
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Empty State */}
        {filteredProducts.length === 0 && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="text-center py-12"
          >
            <p className="text-gray-500 text-lg">Tidak ada aset yang ditemukan</p>
            <p className="text-gray-400 text-sm mt-2">Coba ubah filter atau kata kunci pencarian</p>
          </motion.div>
        )}
      </div>
    </div>
  );
};

const ProductPage = () => {
  return (
    <Suspense fallback={
      <div>
        <Navbar />
        <div className="container mx-auto px-4 py-8 text-center">
          <p className="text-xl text-gray-600">Memuat produk...</p>
        </div>
      </div>
    }>
      <ProductContent />
    </Suspense>
  );
};

export default ProductPage;