import React from 'react';

// Komponen Card Detail Produk dengan layout yang mirip seperti gambar.
const DetailProdukPage = () => {
  // Data dummy untuk produk
  const product = {
    name: 'Blazer Bisnis Kasual Elegan',
    description: 'Blazer dengan potongan modern dan bahan linen berkualitas tinggi. Sempurna untuk tampilan bisnis kasual yang chic dan profesional.',
    priceStandard: 249, // Nilai US$249
    priceAdvanced: 349, // Nilai US$349
    features: ['Penggunaan terbatas dalam cetakan, iklan, dan kemasan.', 'Tanpa batas lewat web.'],
    idAsset: '2252086853',
    category: 'Pakaian Bisnis Wanita',
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 sm:p-8 lg:p-12">
      <div className="max-w-7xl mx-auto bg-white shadow-2xl rounded-lg overflow-hidden">
        {/* Konten Utama - Layout Dua Kolom (Gambar & Detail) */}
        <div className="lg:flex">
          {/* Bagian Kiri: Galeri/Gambar Produk (Menyerupai Gambar Utama Shutterstock) */}
          <div className="lg:w-3/5 p-4 sm:p-6 bg-gray-100 flex items-center justify-center relative">
            {/* Overlay untuk meniru tampilan gambar yang fokus */}
            <div className="absolute top-4 left-4 text-sm font-semibold text-gray-700 bg-white bg-opacity-70 px-3 py-1 rounded-full">Foto</div>

            {/* Gambar Produk  */}
            <img src="https://via.placeholder.com/800x600/F0F0F0/333333?text=Gambar+Produk+Elegan" alt={product.name} className="w-full h-auto object-cover rounded-lg shadow-xl max-h-[600px]" />

            {/* Tombol Aksi di Bawah Gambar */}
            <div className="absolute bottom-4 right-4 flex space-x-2">
              <button className="flex items-center space-x-1 bg-white hover:bg-gray-100 text-gray-700 py-2 px-4 rounded-full shadow transition duration-150">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span>Simpan</span>
              </button>
              <button className="flex items-center space-x-1 bg-white hover:bg-gray-100 text-gray-700 py-2 px-4 rounded-full shadow transition duration-150">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                </svg>
                <span>Coba</span>
              </button>
            </div>
          </div>

          {/* Bagian Kanan: Detail & Opsi Pembelian (Menyerupai Sidebar pada Gambar) */}
          <div className="lg:w-2/5 p-6 sm:p-8 space-y-8">
            <h1 className="text-3xl font-extrabold text-gray-900">{product.name}</h1>
            <p className="text-gray-600 italic">"{product.description}"</p>

            <hr className="my-6 border-gray-200" />

            {/* Opsi Lisensi/Pembelian */}
            <div className="bg-red-50 border-l-4 border-red-500 p-4 space-y-4">
              <h2 className="text-xl font-bold text-red-800">Konten Premium dari Stok</h2>

              {/* Opsi Lisensi Standar */}
              <label className="flex items-start p-4 bg-white border border-gray-200 rounded-lg shadow-sm cursor-pointer hover:border-red-500 transition duration-150">
                <input type="radio" name="license" value="standard" defaultChecked className="mt-1 mr-3 h-5 w-5 text-red-600 focus:ring-red-500" />
                <div>
                  <p className="font-semibold text-lg text-gray-800">Lisensi Standar</p>
                  <ul className="text-sm text-gray-500 list-disc pl-5 mt-1 space-y-0.5">
                    <li>Penggunaan terbatas dalam cetakan, iklan, dan kemasan.</li>
                    <li>Tanpa batas lewat web.</li>
                  </ul>
                </div>
                <p className="ml-auto text-lg font-bold text-gray-800">US${product.priceStandard}</p>
              </label>

              {/* Opsi Lisensi Lanjut */}
              <label className="flex items-start p-4 bg-white border border-gray-200 rounded-lg shadow-sm cursor-pointer hover:border-red-500 transition duration-150">
                <input type="radio" name="license" value="advanced" className="mt-1 mr-3 h-5 w-5 text-red-600 focus:ring-red-500" />
                <div>
                  <p className="font-semibold text-lg text-gray-800">Lisensi Lanjut</p>
                  <ul className="text-sm text-gray-500 list-disc pl-5 mt-1 space-y-0.5">
                    <li>Penggunaan tanpa batas dalam cetakan, iklan, kemasan, dan barang dagangan.</li>
                    <li>Tanpa batas lewat web.</li>
                  </ul>
                </div>
                <p className="ml-auto text-lg font-bold text-gray-800">US${product.priceAdvanced}</p>
              </label>

              {/* Tombol Tambahkan ke Keranjang */}
              <button className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 rounded-lg transition duration-150 shadow-md hover:shadow-lg mt-4">Tambahkan ke keranjang</button>
            </div>

            <hr className="my-6 border-gray-200" />

            {/* Detail Gambar */}
            <div className="space-y-3 text-sm text-gray-700">
              <h3 className="font-bold text-base text-gray-900">Detail Produk</h3>
              <p>
                <strong>ID Aset:</strong> {product.idAsset}
              </p>
              <p>
                <strong>Kategori:</strong> Orang / {product.category}
              </p>
              <p>
                <strong>Dirilis:</strong> Model/Properti dirilis, tersedia untuk penggunaan komersial.
              </p>
              <p>
                <strong>Diunggah:</strong> 23 Januari 2023
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailProdukPage;
