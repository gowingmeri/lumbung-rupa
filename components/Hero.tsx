"use client";
import React, { useState } from "react";
import { Search } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { products } from "@/data/product";

const Hero = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();

  const categories = [
    { id: "motif", name: "Motif", description: "Parang, Kawung, Lereng, Mega Mendung" },
    { id: "pola", name: "Pola / Pattern", description: "Pattern repetitif untuk design, fashion, UI, texture" },
    { id: "aksara", name: "Aksara / Karakter", description: "Hanacaraka (Jawa), Aksara Sunda, Bali, Bugis" },
    { id: "ornamen", name: "Ornamen", description: "Ornamen Toraja, Dayak, Bali, Minang" },
    { id: "ilustrasi", name: "Ilustrasi Budaya 2D", description: "Wayang, ikon budaya, simbol adat" },
    { id: "texture", name: "Texture / Surface", description: "Kayu ukiran, anyaman, kain songket, batik texture" },
    { id: "generatif", name: "Aset Generatif", description: "Kategori khusus untuk aset hasil AI generatif etis" },
  ];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/product?search=${encodeURIComponent(searchQuery.trim())}`);
    } else {
      router.push('/product');
    }
  };

  const handleCategoryClick = (categoryName: string) => {
    router.push(`/product?category=${encodeURIComponent(categoryName)}`);
  };

  return (
    <section className="bg-white py-12 lg:py-20 relative overflow-hidden min-h-[70vh]">
      {/* Background Image */}
      <div className="absolute inset-0 flex items-center justify-center">
        <Image
          src="/branding/circle.png"
          alt="Background circle"
          width={800}
          height={800}
          className="opacity-20 object-contain"
          priority={false}
        />
      </div>
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Main Content */}
        <div className="text-center mb-12 lg:mb-16">
          {/* Headline */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-normal text-gray-900 mb-6 leading-tight">
            Bank IP Digital dengan AI <br />untuk{" "}
            <span className="text-primary">Budaya Indonesia</span>
          </h1>
          
          {/* Subheadline */}
          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">
            Temukan, lisensikan, atau ciptakan aset budaya baru dengan teknologi AI generatif 
            yang dilatih secara etis dari warisan budaya terverifikasi.
          </p>

          {/* Search Input */}
          <div className="max-w-2xl mx-auto mb-12">
            <form onSubmit={handleSearch} className="relative">
              <input
                type="text"
                placeholder="Cari aset budaya..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-6 py-4 pr-14 text-lg border border-gray-300 rounded-full focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
              />
              <button 
                type="submit"
                className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-primary text-white rounded-full hover:bg-primary/90 transition-colors"
              >
                <Search size={24} />
              </button>
            </form>
          </div>
        </div>

        {/* Product Carousel Section (replaces Categories) */}
        <div className="mb-8">
          <h2 className="text-2xl md:text-3xl font-normal text-gray-900 mb-8 text-center">
            Kategori Aset Budaya
          </h2>

          {/* Horizontal Scroll Container - product thumbnails from data/product.ts */}
          <div className="border-t border-black/15 relative overflow-hidden">
            <div className="flex gap-10 animate-scroll px-5 py-10">
              {(() => {
                const items = products.slice(0, 12);
                const duplicated = [...items, ...items];
                return duplicated.map((property, index) => (
                  <div
                    key={index}
                    className="flex flex-col justify-center items-center w-[400px] flex-shrink-0"
                  >
                    <img
                      className="rounded-3xl w-full h-[360px] object-cover"
                      src={property.thumbnail}
                      alt={property.title}
                    />
                    <h1 className="mt-2 font-semibold">{property.title}</h1>
                    <p className="text-gray-500">{property.kategori}</p>
                  </div>
                ));
              })()}
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link 
              href="/product"
              className="w-full sm:w-auto px-8 py-4 bg-primary text-white rounded-full font-normal hover:bg-primary/90 transition-colors shadow-lg"
            >
              Jelajahi Koleksi
            </Link>
            <button className="w-full sm:w-auto px-8 py-4 border-2 border-primary text-primary rounded-full font-normal hover:bg-primary hover:text-white transition-colors">
              Pelajari Lebih Lanjut
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;