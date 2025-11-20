import Link from 'next/link';
import { Search, ChevronDown, Menu } from 'lucide-react'; // Menggunakan ikon dari lucide-react

// Placeholder untuk Logo Bank IPE Digital
const Logo = () => (
  <div className="text-2xl font-bold text-white tracking-widest">
    IPE<span className="text-[#FFD700]">Bank</span>
  </div>
);

// Menu Navigasi (Ambil inspirasi dari menu Gambar, Video, Musik, dll.)
const NavItem = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <Link href={href} className="flex items-center text-sm text-gray-300 hover:text-white transition duration-200">
    {children}
    <ChevronDown className="ml-1 h-3 w-3" />
  </Link>
);

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gray-900 font-sans">
      {/* --- 1. Header/Navbar --- */}
      <header className="bg-black/80 backdrop-blur-sm fixed w-full z-10 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
          {/* Kiri: Logo dan Navigasi */}
          <div className="flex items-center space-x-8">
            <Link href="/" passHref>
              <Logo />
            </Link>
            <nav className="hidden lg:flex space-x-6">
              <NavItem href="/tentang">Tentang Kami</NavItem>
              <NavItem href="/layanan">Layanan Digital</NavItem>
              <NavItem href="/edukasi">Edukasi Keuangan</NavItem>
              {/* Tambahkan item navigasi lain yang relevan dengan bank/budaya */}
              <NavItem href="/budaya">Budaya Indonesia</NavItem>
            </nav>
          </div>

          {/* Kanan: Tombol dan Menu Mobile */}
          <div className="flex items-center space-x-4">
            {/* Mengambil inspirasi dari tombol Masuk dan Harga */}
            <button className="text-gray-300 hover:text-white transition duration-200 text-sm hidden sm:block">Pusat Bantuan</button>

            {/* Tombol Utama Login dan Register */}
            <Link href="/auth/login" className="px-4 py-2 bg-[#FFD700] text-gray-900 font-semibold rounded-lg hover:bg-[#E6C300] transition duration-200 text-sm">
              Masuk
            </Link>
            <Link href="/auth/register" className="px-4 py-2 bg-transparent border border-white text-white font-semibold rounded-lg hover:bg-white/10 transition duration-200 text-sm hidden md:block">
              Daftar Akun
            </Link>

            <button className="lg:hidden text-white">
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      {/* --- 2. Hero Section (Jumbotron) --- */}
      {/* Latar belakang: Gunakan pola Batik atau Tenun digital sebagai inspirasi latar. 
          Tambahkan kelas 'bg-batik-pattern' jika Anda memiliki utility CSS untuk pola */}
      <main className="pt-16 bg-cover bg-center" style={{ backgroundImage: 'linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url("/images/batik-abstract.jpg")' }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
          {/* Judul Utama yang Kuat, terinspirasi dari teks besar di gambar */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight">
            <span className="text-[#FFD700]">Inovasi Digital,</span> Kearifan Lokal.
          </h1>
          <p className="mt-4 text-xl text-gray-300 max-w-3xl mx-auto">Bank IPE, merevolusi pengalaman perbankan Anda dengan sentuhan budaya Indonesia yang tak lekang oleh waktu.</p>

          {/* Kotak Pencarian Modern, seperti di gambar Shutterstock */}
          <div className="mt-10 flex flex-col sm:flex-row max-w-2xl mx-auto bg-white rounded-xl shadow-2xl p-2">
            {/* Dropdown Kategori (Seperti "Semua gambar") */}
            <div className="flex-shrink-0 relative">
              <button className="flex items-center justify-center h-full px-5 text-gray-700 bg-gray-100 rounded-lg sm:rounded-r-none hover:bg-gray-200 transition duration-200 w-full sm:w-auto py-3 sm:py-0">
                Layanan
                <ChevronDown className="ml-2 h-4 w-4" />
              </button>
            </div>

            {/* Input Pencarian (Seperti "Cari gambar") */}
            <input type="text" placeholder="Cari fitur, produk, atau edukasi budaya..." className="flex-grow p-4 text-gray-800 focus:outline-none placeholder-gray-500 my-2 sm:my-0 sm:ml-2" />

            {/* Tombol Pencarian (Warna Merah Khas Indonesia/Shutterstock) */}
            <button className="flex-shrink-0 px-6 py-3 bg-red-600 text-white rounded-lg sm:rounded-l-none hover:bg-red-700 transition duration-200 flex items-center justify-center">
              <Search className="w-5 h-5" />
            </button>
          </div>

          {/* Sub-menu kategori pencarian seperti Gambar, Foto, Vektor */}
          <div className="mt-6 flex justify-center space-x-6">
            <button className="text-sm text-[#FFD700] border-b-2 border-[#FFD700] pb-1">Transaksi</button>
            <button className="text-sm text-gray-400 hover:text-white pb-1">Investasi</button>
            <button className="text-sm text-gray-400 hover:text-white pb-1">Pinjaman</button>
            <button className="text-sm text-gray-400 hover:text-white pb-1">Edukasi</button>
          </div>
        </div>
      </main>

      {/* --- 3. Content Placeholder (Bagian Bawah) --- */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-white mb-8">Kenali Lebih Dalam Budaya Digital Kami</h2>

        {/* Contoh grid untuk fitur unggulan dengan ikon budaya */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gray-800 p-6 rounded-xl shadow-lg border-t-4 border-[#FFD700]">
            <h3 className="text-xl font-semibold text-white mb-2">Transfer Cepat (FastPay)</h3>
            <p className="text-gray-400">Terinspirasi dari semangat **Gotong Royong**, setiap transaksi menjadi mudah dan cepat.</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-xl shadow-lg border-t-4 border-red-600">
            <h3 className="text-xl font-semibold text-white mb-2">Simpanan Berencana</h3>
            <p className="text-gray-400">Filosofi **Padi**—menunduk saat berisi. Rencanakan masa depan keuangan Anda dengan bijak.</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-xl shadow-lg border-t-4 border-white">
            <h3 className="text-xl font-semibold text-white mb-2">Edukasi Budaya</h3>
            <p className="text-gray-400">Jelajahi fitur virtual untuk melestarikan dan mempelajari kekayaan **Batik dan Tenun** Indonesia.</p>
          </div>
        </div>
      </section>

      {/* Anda bisa menambahkan Footer di sini */}
    </div>
  );
};

export default HomePage;
