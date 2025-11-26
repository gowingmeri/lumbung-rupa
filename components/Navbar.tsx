"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  ShoppingCart, 
  Menu, 
  X, 
  LogOut, 
  LayoutDashboard, 
  Package, 
  Upload, 
  Sparkles, 
  User, 
  CheckSquare, 
  History,
  Loader2
} from "lucide-react";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [cartItemCount, setCartItemCount] = useState(0);
  const [userRole, setUserRole] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Load cart count and user role from localStorage
  useEffect(() => {
    const updateCartCount = () => {
      const savedCart = localStorage.getItem('lumbungRupa_cart');
      if (savedCart) {
        try {
          const cartItems = JSON.parse(savedCart);
          const totalItems = cartItems.reduce((total: number, item: any) => total + item.quantity, 0);
          setCartItemCount(totalItems);
        } catch (error) {
          setCartItemCount(0);
        }
      } else {
        setCartItemCount(0);
      }
    };

    const updateUserRole = () => {
      const role = localStorage.getItem('roleUser');
      setUserRole(role);
      setIsLoading(false);
    };

    updateCartCount();
    updateUserRole();
    
    // Listen for storage changes
    window.addEventListener('storage', updateCartCount);
    window.addEventListener('storage', updateUserRole);
    
    // Listen for custom cart update events
    window.addEventListener('cartUpdated', updateCartCount);

    return () => {
      window.removeEventListener('storage', updateCartCount);
      window.removeEventListener('storage', updateUserRole);
      window.removeEventListener('cartUpdated', updateCartCount);
    };
  }, []);

  // Detect scroll position
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('roleUser');
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    localStorage.removeItem('lumbungRupa_cart');
    setUserRole(null);
    setCartItemCount(0);
    window.location.href = '/';
  };

  const getNavItems = () => {
    switch (userRole) {
      case 'mitra_budaya':
      case 'CULTURAL_PARTNER':
        return [
          { href: '/cultural-partner/dashboard', label: 'Dashboard', icon: LayoutDashboard },
          { href: '/cultural-partner/product', label: 'Aset Saya', icon: Package },
          { href: '/cultural-partner/upload', label: 'Unggah Aset', icon: Upload },
          { href: '/rupagen-ai', label: 'RupaGen AI', icon: Sparkles },
          { href: '/cultural-partner/profile', label: 'Profil', icon: User }
        ];
      case 'pembeli_lisensi':
      case 'LICENSE_BUYER':
        return [
          { href: '/product', label: 'Semua Aset', icon: Package },
          { href: '/history', label: 'Riwayat Pembelian Lisensi', icon: History },
          { href: '/rupagen-ai', label: 'RupaGen AI', icon: Sparkles },
          { href: '/profile', label: 'Profil', icon: User }
        ];
      case 'admin_lumbung_rupa':
      case 'ADMIN':
        return [
          { href: '/admin/approvals', label: 'Persetujuan', icon: CheckSquare },
          { href: '/admin/profile', label: 'Profil', icon: User }
        ];
      default:
        return [];
    }
  };

  const navItems = getNavItems();

  // Helper function to check if route is active
  const isActiveRoute = (href: string) => {
    return pathname === href;
  };

  // Show loading state while checking localStorage
  if (isLoading) {
    return (
      <nav className={`bg-white/5 backdrop-blur-lg sticky top-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'mx-4 mt-4 rounded-2xl border border-gray-200/50' 
          : 'border-b-2 border-gray-200/50'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`flex items-center justify-between transition-all duration-300 ${
            isScrolled ? 'h-16' : 'h-20'
          }`}>
            <div className="flex items-center gap-2 animate-pulse">
              <div className="w-10 h-10 bg-primary/20 rounded-xl"></div>
              <div className="w-32 h-6 bg-gray-200 rounded"></div>
            </div>
            <div className="flex items-center gap-3">
              <Loader2 className="animate-spin text-primary" size={20} />
            </div>
          </div>
        </div>
      </nav>
    );
  }

  return (
    <nav className={`bg-transparent backdrop-blur sticky top-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'mx-4 mt-4 rounded-2xl border border-gray-200/50 bg-white/5' 
        : 'border-b-2 border-gray-200/50'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex items-center justify-between transition-all duration-300 ${
          isScrolled ? 'h-16' : 'h-20'
        }`}>
          {/* Left - Logo with icon */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className={`bg-gradient-to-br from-primary to-primary/80 rounded-xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 ${
              isScrolled ? 'w-8 h-8' : 'w-10 h-10'
            }`}>
              <Sparkles className="text-white group-hover:animate-pulse" size={isScrolled ? 16 : 20} />
            </div>
            <span className={`font-normal bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent group-hover:tracking-wide transition-all duration-300 ${
              isScrolled ? 'text-xl' : 'text-2xl'
            }`}>
              LumbungRupa
            </span>
          </Link>

          {/* Desktop - Right side */}
          <div className="hidden md:flex items-center gap-3">
            {userRole ? (
              <>
                {/* Show cart only for LICENSE_BUYER */}
                {userRole === 'LICENSE_BUYER' && (
                  <Link 
                    href="/cart" 
                    className={`relative rounded-xl transition-all duration-300 group border-2 ${
                      isScrolled ? 'p-2' : 'p-3'
                    } ${
                      isActiveRoute('/cart')
                        ? 'text-primary bg-primary/10 border-primary'
                        : 'text-gray-600 border-transparent hover:text-primary hover:bg-primary/5 hover:border-primary/30'
                    }`}
                  >
                    <ShoppingCart size={isScrolled ? 20 : 22} className="group-hover:scale-110 group-hover:rotate-12 transition-all duration-300" />
                    {cartItemCount > 0 && (
                      <span className="absolute -top-1 -right-1 bg-primary text-white text-xs font-bold rounded-full min-w-[20px] h-5 px-1 flex items-center justify-center animate-[bounce_1s_ease-in-out_infinite]">
                        {cartItemCount > 99 ? '99+' : cartItemCount}
                      </span>
                    )}
                  </Link>
                )}

                {/* Navigation Items with icons */}
                <div className="flex items-center gap-1">
                  {navItems.map((item) => {
                    const Icon = item.icon;
                    const isActive = isActiveRoute(item.href);
                    return (
                      <Link
                        key={item.href}
                        href={item.href}
                        className={`relative flex items-center gap-2 text-sm font-medium rounded-xl transition-all duration-300 group overflow-hidden border-2 ${
                          isScrolled ? 'px-3 py-2' : 'px-4 py-2.5'
                        } ${
                          isActive
                            ? 'text-primary bg-primary/10 border-primary'
                            : 'text-gray-700 border-transparent hover:text-primary hover:bg-primary/5 hover:border-primary/30'
                        }`}
                      >
                        <div className={`absolute inset-0 bg-primary/5 transform ${
                          isActive ? 'translate-x-0' : '-translate-x-full group-hover:translate-x-0'
                        } transition-transform duration-300`}></div>
                        <Icon size={isScrolled ? 16 : 18} className="relative group-hover:scale-110 group-hover:-rotate-12 transition-all duration-300" />
                        <span className="relative">{item.label}</span>
                      </Link>
                    );
                  })}
                </div>

                {/* Logout Button with icon */}
                <button
                  onClick={handleLogout}
                  className={`flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-red-600 hover:bg-red-50 rounded-xl transition-all duration-300 group border-2 border-transparent hover:border-red-300 ${
                    isScrolled ? 'px-3 py-2' : 'px-4 py-2.5'
                  }`}
                >
                  <LogOut size={isScrolled ? 16 : 18} className="group-hover:scale-110 group-hover:translate-x-1 transition-all duration-300" />
                  <span>Logout</span>
                </button>
              </>
            ) : (
              <>
                {/* Cart Icon for guests */}
                <Link 
                  href="/cart" 
                  className={`relative rounded-xl transition-all duration-300 group border-2 ${
                    isScrolled ? 'p-2' : 'p-3'
                  } ${
                    isActiveRoute('/cart')
                      ? 'text-primary bg-primary/10 border-primary'
                      : 'text-gray-600 border-transparent hover:text-primary hover:bg-primary/5 hover:border-primary/30'
                  }`}
                >
                  <ShoppingCart size={isScrolled ? 20 : 22} className="group-hover:scale-110 group-hover:rotate-12 transition-all duration-300" />
                  {cartItemCount > 0 && (
                    <span className="absolute -top-1 -right-1 bg-primary text-white text-xs font-bold rounded-full min-w-[20px] h-5 px-1 flex items-center justify-center animate-[bounce_1s_ease-in-out_infinite]">
                      {cartItemCount > 99 ? '99+' : cartItemCount}
                    </span>
                  )}
                </Link>

                {/* Auth Buttons for guests with icons */}
                <div className="flex gap-3">
                  <Link
                    className={`relative flex items-center gap-2 text-sm font-medium text-primary border-2 border-primary rounded-full hover:bg-primary hover:text-white hover:scale-105 active:scale-95 transition-all duration-300 overflow-hidden group ${
                      isScrolled ? 'px-4 py-2' : 'px-5 py-2.5'
                    }`}
                    href="/auth/cultural-partner/login"
                  >
                    <div className="absolute inset-0 bg-primary transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
                    <User size={isScrolled ? 16 : 18} className="relative group-hover:scale-110 transition-transform duration-300" />
                    <span className="relative whitespace-nowrap">Masuk sebagai Mitra Budaya</span>
                  </Link>
                  <Link
                    className={`relative flex items-center gap-2 text-sm font-medium bg-primary text-white rounded-full border-2 border-primary hover:bg-transparent hover:text-primary hover:scale-105 active:scale-95 transition-all duration-300 overflow-hidden group ${
                      isScrolled ? 'px-4 py-2' : 'px-5 py-2.5'
                    }`}
                    href="/auth/license-buyer/login"
                  >
                    <div className="absolute inset-0 bg-white transform translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
                    <User size={isScrolled ? 16 : 18} className="relative group-hover:scale-110 transition-transform duration-300" />
                    <span className="relative whitespace-nowrap">Masuk sebagai Pembeli Lisensi</span>
                  </Link>
                </div>
              </>
            )}
          </div>

          {/* Mobile - Right side */}
          <div className="md:hidden flex items-center gap-2">
            {/* Show cart only for LICENSE_BUYER or guests */}
            {(userRole === 'LICENSE_BUYER' || !userRole) && (
              <Link 
                href="/cart" 
                className={`relative p-2.5 rounded-xl transition-all duration-300 border-2 ${
                  isActiveRoute('/cart')
                    ? 'text-primary bg-primary/10 border-primary'
                    : 'text-gray-600 border-transparent hover:text-primary hover:bg-primary/5 hover:border-primary/30'
                }`}
              >
                <ShoppingCart size={22} />
                {cartItemCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-primary text-white text-xs font-bold rounded-full min-w-[18px] h-[18px] flex items-center justify-center animate-[bounce_1s_ease-in-out_infinite]">
                    {cartItemCount > 9 ? '9+' : cartItemCount}
                  </span>
                )}
              </Link>
            )}

            {/* Mobile menu button with animation */}
            <button
              onClick={toggleMobileMenu}
              className="p-2.5 text-gray-600 hover:text-primary hover:bg-primary/5 rounded-xl transition-all duration-300 border-2 border-transparent hover:border-primary/30"
            >
              {isMobileMenuOpen ? (
                <X size={24} className="animate-[spin_0.3s_ease-in-out]" />
              ) : (
                <Menu size={24} className="hover:scale-110 transition-transform duration-300" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu with slide animation */}
        {isMobileMenuOpen && (
          <div className="md:hidden animate-[slideDown_0.3s_ease-out]">
            <div className="px-2 pt-2 pb-4 space-y-1 bg-white/95 backdrop-blur-lg border-t-2 border-gray-200/50 rounded-b-2xl">
              <div className="space-y-2 px-3 py-4">
                {userRole ? (
                  <>
                    {/* Navigation Items for authenticated users */}
                    {navItems.map((item) => {
                      const Icon = item.icon;
                      const isActive = isActiveRoute(item.href);
                      return (
                        <Link
                          key={item.href}
                          href={item.href}
                          className={`relative flex items-center gap-3 w-full p-4 border-2 rounded-2xl transition-all duration-300 group overflow-hidden ${
                            isActive
                              ? 'text-primary bg-primary/10 border-primary'
                              : 'text-gray-700 border-gray-200 hover:bg-primary/5 hover:border-primary'
                          }`}
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          <div className={`absolute inset-0 bg-primary/5 transform ${
                            isActive ? 'translate-x-0' : '-translate-x-full group-hover:translate-x-0'
                          } transition-transform duration-300`}></div>
                          <Icon size={20} className="relative text-primary group-hover:scale-110 group-hover:rotate-12 transition-all duration-300" />
                          <span className="relative font-medium">{item.label}</span>
                        </Link>
                      );
                    })}
                    
                    {/* Logout Button */}
                    <button
                      onClick={() => {
                        handleLogout();
                        setIsMobileMenuOpen(false);
                      }}
                      className="flex items-center gap-3 w-full p-4 text-red-600 border-2 border-red-200 rounded-2xl hover:bg-red-50 hover:border-red-400 transition-all duration-300 group"
                    >
                      <LogOut size={20} className="group-hover:scale-110 group-hover:translate-x-1 transition-all duration-300" />
                      <span className="font-medium">Logout</span>
                    </button>
                  </>
                ) : (
                  <>
                    {/* Auth Buttons for guests */}
                    <Link
                      className="relative flex items-center justify-center gap-2 w-full p-4 text-primary border-2 border-primary rounded-2xl hover:bg-primary hover:text-white transition-all duration-300 group overflow-hidden"
                      href="/auth/cultural-partner/login"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <div className="absolute inset-0 bg-primary transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
                      <User size={20} className="relative group-hover:scale-110 transition-transform duration-300" />
                      <span className="relative font-medium">Masuk sebagai Mitra Budaya</span>
                    </Link>
                    <Link
                      className="relative flex items-center justify-center gap-2 w-full p-4 bg-primary text-white border-2 border-primary rounded-2xl hover:bg-transparent hover:text-primary transition-all duration-300 group overflow-hidden"
                      href="/auth/license-buyer/login"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <div className="absolute inset-0 bg-white transform translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
                      <User size={20} className="relative group-hover:scale-110 transition-transform duration-300" />
                      <span className="relative font-medium">Masuk sebagai Pembeli Lisensi</span>
                    </Link>
                  </>
                )}
              </div>
            </div>
          </div>
        )}
      </div>

      <style jsx>{`
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes bounce {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.1);
          }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
