"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { products, Product } from "@/data/product";
import Navbar from "@/components/Navbar";
import { Trash2, Plus, Minus, ShoppingBag, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface CartItem {
  productId: string;
  quantity: number;
  licenseType: "personal" | "commercial" | "enterprise";
  addedAt: string;
}

const CartPage = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // Load cart from localStorage on component mount
  useEffect(() => {
    const savedCart = localStorage.getItem('lumbungRupa_cart');
    if (savedCart) {
      try {
        setCartItems(JSON.parse(savedCart));
      } catch (error) {
        console.error('Error parsing cart data:', error);
        localStorage.removeItem('lumbungRupa_cart');
      }
    }
    setIsLoading(false);
  }, []);

  // Save cart to localStorage whenever cartItems changes
  useEffect(() => {
    if (!isLoading) {
      localStorage.setItem('lumbungRupa_cart', JSON.stringify(cartItems));
    }
  }, [cartItems, isLoading]);

  const updateQuantity = (productId: string, newQuantity: number) => {
    if (newQuantity <= 0) {
      removeFromCart(productId);
      return;
    }
    
    setCartItems(prev => 
      prev.map(item => 
        item.productId === productId 
          ? { ...item, quantity: newQuantity }
          : item
      )
    );
  };

  const removeFromCart = (productId: string) => {
    setCartItems(prev => prev.filter(item => item.productId !== productId));
  };

  const updateLicenseType = (productId: string, licenseType: "personal" | "commercial" | "enterprise") => {
    setCartItems(prev => 
      prev.map(item => 
        item.productId === productId 
          ? { ...item, licenseType }
          : item
      )
    );
  };

  const clearCart = () => {
    setCartItems([]);
    localStorage.removeItem('lumbungRupa_cart');
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
    }).format(price);
  };

  const getLicenseMultiplier = (licenseType: string) => {
    switch (licenseType) {
      case 'personal': return 1;
      case 'commercial': return 2;
      case 'enterprise': return 3;
      default: return 1;
    }
  };

  const cartItemsWithProducts = cartItems.map(cartItem => {
    const product = products.find(p => p.id === cartItem.productId);
    return { ...cartItem, product };
  }).filter(item => item.product);

  const subtotal = cartItemsWithProducts.reduce((total, item) => {
    if (!item.product) return total;
    const multiplier = getLicenseMultiplier(item.licenseType);
    return total + (item.product.price * multiplier * item.quantity);
  }, 0);

  const tax = subtotal * 0.11; // PPN 11%
  const total = subtotal + tax;

  if (isLoading) {
    return (
      <div>
        <Navbar />
        <div className="container mx-auto px-4 py-8">
          <div className="text-center">
            <p className="text-gray-600">Memuat keranjang...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div>
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center justify-between mb-8"
        >
          <h1 className="text-3xl font-normal text-gray-900">Keranjang Lisensi</h1>
          {cartItems.length > 0 && (
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={clearCart}
              className="text-red-600 hover:text-red-800 font-medium"
            >
              Kosongkan Keranjang
            </motion.button>
          )}
        </motion.div>

        {cartItems.length === 0 ? (
          /* Empty Cart State */
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="text-center py-16"
          >
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <ShoppingBag size={64} className="mx-auto text-gray-300 mb-4" />
            </motion.div>
            <h2 className="text-xl font-medium text-gray-900 mb-2">
              Keranjang Anda Kosong
            </h2>
            <p className="text-gray-600 mb-6">
              Mulai jelajahi koleksi aset budaya Indonesia untuk proyek B2B Anda
            </p>
            <Link href="/product">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center px-6 py-3 bg-primary text-white rounded-full font-medium hover:bg-primary/90 transition-colors cursor-pointer"
              >
                Jelajahi Katalog
                <ArrowRight size={20} className="ml-2" />
              </motion.div>
            </Link>
          </motion.div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-2"
            >
              <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
                <div className="p-6 border-b border-gray-200">
                  <h2 className="text-xl font-medium text-gray-900">
                    Aset Budaya ({cartItems.length} item)
                  </h2>
                </div>
                
                <div className="divide-y divide-gray-200">
                  <AnimatePresence>
                  {cartItemsWithProducts.map((item, index) => {
                    if (!item.product) return null;
                    
                    const licenseMultiplier = getLicenseMultiplier(item.licenseType);
                    const itemPrice = item.product.price * licenseMultiplier;
                    const itemTotal = itemPrice * item.quantity;

                    return (
                      <motion.div 
                        key={item.productId}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, x: -100 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                        className="p-6"
                      >
                        <div className="flex items-start gap-4">
                          {/* Product Image */}
                          <div className="w-24 h-24 rounded-xl overflow-hidden shrink-0">
                            <Image
                              src={item.product.thumbnail}
                              alt={item.product.title}
                              width={96}
                              height={96}
                              className="w-full h-full object-cover"
                            />
                          </div>

                          {/* Product Info */}
                          <div className="flex-1 min-w-0">
                            <div className="flex items-start justify-between">
                              <div>
                                <h3 className="font-medium text-gray-900 mb-1">
                                  {item.product.title}
                                </h3>
                                <p className="text-sm text-gray-600 mb-2">
                                  {item.product.kategori}
                                </p>
                                <p className="text-xs text-gray-500">
                                  oleh {item.product.creator}
                                </p>
                              </div>
                              <motion.button
                                whileHover={{ scale: 1.1, rotate: 5 }}
                                whileTap={{ scale: 0.9 }}
                                onClick={() => removeFromCart(item.productId)}
                                className="text-gray-400 hover:text-red-600 transition-colors p-1"
                              >
                                <Trash2 size={18} />
                              </motion.button>
                            </div>

                            {/* License Type Selector */}
                            <div className="mt-4">
                              <label className="block text-sm font-medium text-gray-700 mb-2">
                                Jenis Lisensi:
                              </label>
                              <select
                                value={item.licenseType}
                                onChange={(e) => updateLicenseType(
                                  item.productId, 
                                  e.target.value as "personal" | "commercial" | "enterprise"
                                )}
                                className="w-full sm:w-auto px-3 py-2 border border-gray-300 rounded-lg focus:border-primary focus:outline-none"
                              >
                                <option value="personal">Personal (1x)</option>
                                <option value="commercial">Commercial (2x)</option>
                                <option value="enterprise">Enterprise (3x)</option>
                              </select>
                            </div>

                            {/* Quantity and Price */}
                            <div className="flex items-center justify-between mt-4">
                              <div className="flex items-center gap-3">
                                <span className="text-sm text-gray-600">Kuantitas:</span>
                                <div className="flex items-center gap-2">
                                  <button
                                    onClick={() => updateQuantity(item.productId, item.quantity - 1)}
                                    className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50"
                                  >
                                    <Minus size={14} />
                                  </button>
                                  <span className="w-8 text-center font-medium">
                                    {item.quantity}
                                  </span>
                                  <button
                                    onClick={() => updateQuantity(item.productId, item.quantity + 1)}
                                    className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50"
                                  >
                                    <Plus size={14} />
                                  </button>
                                </div>
                              </div>
                              <div className="text-right">
                                <div className="text-sm text-gray-600">
                                  {formatPrice(itemPrice)} × {item.quantity}
                                </div>
                                <div className="font-medium text-primary">
                                  {formatPrice(itemTotal)}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    );
                  })}
                  </AnimatePresence>
                </div>
              </div>
            </motion.div>

            {/* Order Summary */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="lg:col-span-1"
            >
              <div className="bg-white rounded-2xl border border-gray-200 p-6 sticky top-8">
                <h2 className="text-xl font-medium text-gray-900 mb-6">
                  Ringkasan Pesanan
                </h2>

                <div className="space-y-4 mb-6">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Subtotal</span>
                    <span className="font-medium">{formatPrice(subtotal)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">PPN (11%)</span>
                    <span className="font-medium">{formatPrice(tax)}</span>
                  </div>
                  <div className="border-t border-gray-200 pt-4">
                    <div className="flex justify-between">
                      <span className="text-lg font-medium text-gray-900">Total</span>
                      <span className="text-lg font-medium text-primary">{formatPrice(total)}</span>
                    </div>
                  </div>
                </div>

                <motion.button 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-primary text-white py-4 px-6 rounded-full font-medium hover:bg-primary/90 transition-colors mb-4"
                >
                  Proses Pembayaran
                </motion.button>

                <div className="text-center">
                  <Link
                    href="/product"
                    className="text-primary hover:underline text-sm"
                  >
                    Lanjutkan Belanja
                  </Link>
                </div>

                {/* B2B Info */}
                <div className="mt-6 p-4 bg-blue-50 rounded-xl">
                  <h3 className="font-medium text-gray-900 mb-2">Informasi B2B</h3>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Invoice & kontrak resmi</li>
                    <li>• Dukungan teknis khusus</li>
                    <li>• Lisensi untuk penggunaan komersial</li>
                    <li>• Dokumentasi lengkap</li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartPage;