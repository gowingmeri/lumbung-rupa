'use client';

import React, { useState } from 'react';
import { Eye, EyeOff, User, Mail, LockKeyhole, UserPlus } from 'lucide-react';
import Link from 'next/link';

const RegisterPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Register attempt:', { fullName, email, password, confirmPassword });

    // Validasi sederhana
    if (password !== confirmPassword) {
      alert('Password dan Konfirmasi Password tidak cocok!');
      return;
    }
    // TODO: Lakukan pendaftaran akun di sini (panggil API register)
  };

  const PRIMARY_COLOR_CLASS = 'bg-indigo-600 hover:bg-indigo-700';

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4 py-12">
      <div className="w-full max-w-lg">
        {/* Card Container - Tampilan Modern */}
        <div className="bg-white p-8 sm:p-10 rounded-3xl shadow-2xl border border-gray-100/50">
          {/* Header */}
          <div className="text-center mb-8">
            <UserPlus size={32} className={`text-indigo-600 mx-auto mb-2`} />
            <h1 className="text-3xl font-extrabold text-gray-900">Create Your Account</h1>
            <p className="mt-2 text-gray-500">Join us and start your journey today!</p>
          </div>

          {/* Form Content */}
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Input Full Name */}
            <div>
              <label htmlFor="fullName" className="block text-sm font-semibold text-gray-700 mb-2">
                Full Name
              </label>
              <div className="relative">
                <User size={20} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl placeholder:text-gray-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/30 focus:outline-none transition-all duration-200"
                  placeholder="John Doe"
                  required
                />
              </div>
            </div>

            {/* Input Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                Email Address
              </label>
              <div className="relative">
                <Mail size={20} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl placeholder:text-gray-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/30 focus:outline-none transition-all duration-200"
                  placeholder="name@example.com"
                  required
                />
              </div>
            </div>

            {/* Input Password */}
            <div>
              <label htmlFor="password" className="block text-sm font-semibold text-gray-700 mb-2">
                Password
              </label>
              <div className="relative">
                <LockKeyhole size={20} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  id="password"
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-10 pr-12 py-3 border border-gray-300 rounded-xl placeholder:text-gray-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/30 focus:outline-none transition-all duration-200"
                  placeholder="Min. 8 characters"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-indigo-600 transition-colors"
                  aria-label={showPassword ? 'Hide password' : 'Show password'}
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>

            {/* Input Confirm Password */}
            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-semibold text-gray-700 mb-2">
                Confirm Password
              </label>
              <div className="relative">
                <LockKeyhole size={20} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  type={showConfirmPassword ? 'text' : 'password'}
                  id="confirmPassword"
                  name="confirmPassword"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="w-full pl-10 pr-12 py-3 border border-gray-300 rounded-xl placeholder:text-gray-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/30 focus:outline-none transition-all duration-200"
                  placeholder="Re-enter your password"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-indigo-600 transition-colors"
                  aria-label={showConfirmPassword ? 'Hide password' : 'Show password'}
                >
                  {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>

            {/* Tombol Register Utama */}
            <button
              type="submit"
              className={`w-full p-3 flex items-center justify-center gap-2 ${PRIMARY_COLOR_CLASS} text-white rounded-xl font-bold shadow-lg shadow-indigo-500/30 transition-all duration-300 transform hover:scale-[1.01] mt-6`}
            >
              <UserPlus size={20} /> Register Account
            </button>
          </form>

          {/* Divider */}
          <div className="flex items-center gap-4 my-8">
            <hr className="flex-1 border-gray-200" />
            <span className="text-sm text-gray-500 font-medium">Or sign up with</span>
            <hr className="flex-1 border-gray-200" />
          </div>

          {/* Register Alternatif */}
          <div className="grid grid-cols-2 gap-3">
            {/* Continue with Google */}
            <button type="button" className="col-span-2 sm:col-span-1 px-4 py-2.5 border border-gray-300 text-gray-700 rounded-xl font-medium hover:bg-gray-100 transition-all duration-200 flex items-center justify-center gap-2">
              <svg viewBox="0 0 24 24" className="w-5 h-5">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
              </svg>
              Google
            </button>

            {/* Continue with Apple */}
            <button type="button" className="col-span-2 sm:col-span-1 px-4 py-2.5 border border-gray-300 text-gray-700 rounded-xl font-medium hover:bg-gray-100 transition-all duration-200 flex items-center justify-center gap-2">
              <svg fill="currentColor" viewBox="0 0 16 16" className="w-5 h-5">
                <path d="M11.127 6.476a.714.714 0 0 1 .428-.669c.35-.125.642-.397.642-.718 0-.583-.564-.818-1.111-.818-.465 0-.745.244-1.01.551-.252.3-.538.745-.989.745-.445 0-.75-.375-1.124-.375s-.8.375-1.226.375c-.563 0-1.05-.333-1.43-.873-.55-.776-.985-2.316-.312-3.48.373-.658.995-1.04 1.768-1.04 1.096 0 1.954.73 2.378 1.96.118.344.4.63.792.63h.001c.42 0 .736-.308.835-.747.288-1.332-.782-2.868-2.63-2.868-1.016 0-1.875.474-2.545 1.488-.95 1.4-.413 3.682.49 4.3.435.3.947.38 1.458.38.077 0 .15-.003.218-.006.12-.005.152.013.158.146.015.367.014 1.03-.015 1.62-.05.98-.387 2.2-.093 2.76.51.986 2.27.75 2.77.712.112.016.216.024.318.024.78 0 1.48-.415 1.968-1.085z" />
              </svg>
              Apple
            </button>

            <button type="button" className="col-span-2 px-4 py-2.5 border border-gray-300 text-gray-700 rounded-xl font-medium hover:bg-gray-100 transition-all duration-200">
              Sign up with Email Link
            </button>
          </div>

          {/* Footer Login */}
          <div className="mt-8 pt-6 border-t border-gray-100 text-center">
            <p className="text-sm text-gray-600">
              Already have an account?
              <Link href="/auth/login" className="ml-2 font-semibold text-indigo-600 hover:text-indigo-700 hover:underline transition-colors">
                Log in
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
