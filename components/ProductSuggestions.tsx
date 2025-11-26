"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { products } from "@/data/product";
import { motion } from "framer-motion";

const ProductSuggestions = () => {
  // Get featured products (first 8 products)
  const featuredProducts = products.slice(0, 8);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
    }).format(price);
  };

  return (
    <section className="mt-20 py-12 sm:py-14 md:py-16">
      <div className="mx-auto px-4 sm:px-6 md:px-8 lg:px-8">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-10 md:mb-12"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-normal text-gray-900 mb-3 sm:mb-4 px-4 sm:px-0">
            Rekomendasi Aset Budaya Pilihan Untuk Anda
          </h2>
          <p className="font-normal text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-4 sm:px-0">
            Temukan aset budaya Indonesia berkualitas tinggi untuk proyek kreatif Anda
          </p>
        </motion.div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5 md:gap-6 mb-8 sm:mb-10 md:mb-12">
          {featuredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link
                href={`/detail-product?id=${product.id}`}
                className="group block border border-gray-200 rounded-xl sm:rounded-2xl overflow-hidden hover:shadow-lg transition-shadow"
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
                  <div className="absolute top-2 sm:top-3 left-2 sm:left-3">
                    <span className="px-2 sm:px-3 py-0.5 sm:py-1 bg-black/70 text-white text-[10px] sm:text-xs rounded-full">
                      {product.kategori}
                    </span>
                  </div>
                  {product.isGenerative && (
                    <div className="absolute top-2 sm:top-3 right-2 sm:right-3">
                      <span className="px-2 sm:px-3 py-0.5 sm:py-1 bg-primary text-white text-[10px] sm:text-xs rounded-full">
                        AI
                      </span>
                    </div>
                  )}
                </motion.div>
                
                <div className="p-3 sm:p-4">
                  <h3 className="font-normal text-base sm:text-lg text-gray-900 mb-1.5 sm:mb-2 group-hover:text-primary transition-colors line-clamp-1">
                    {product.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 mb-1.5 sm:mb-2 line-clamp-2">
                    {product.description}
                  </p>
                  <p className="text-[10px] sm:text-xs text-gray-500 mb-2 sm:mb-3">
                    oleh {product.creator}
                  </p>
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-base sm:text-lg font-medium text-primary truncate">
                      {formatPrice(product.price)}
                    </span>
                    <span className={`px-1.5 sm:px-2 py-0.5 sm:py-1 text-[10px] sm:text-xs rounded-full whitespace-nowrap shrink-0 ${
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

        {/* CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <Link href="/product">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block px-6 sm:px-8 py-3 sm:py-4 bg-primary text-white rounded-full font-normal hover:bg-primary/90 transition-colors shadow-lg text-sm sm:text-base cursor-pointer"
            >
              Lihat Semua Koleksi
            </motion.div>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ProductSuggestions;
