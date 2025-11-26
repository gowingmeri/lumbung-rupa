"use client";
import React from "react";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

interface FooterLink {
  label: string;
  href: string;
}

interface FooterSection {
  title: string;
  links: FooterLink[];
}

const Footer: React.FC = () => {
  const footers: FooterSection[] = [
    {
      title: "Tentang LumbungRupa",
      links: [
        { label: "Tentang Kami", href: "#tentang" },
        { label: "Visi & Misi", href: "#visi-misi" },
        { label: "Tim Kami", href: "#tim" },
        { label: "Kontak", href: "#kontak" },
      ],
    },
    {
      title: "Layanan",
      links: [
        { label: "Lisensi Aset Budaya", href: "/product" },
        { label: "RupaGen AI", href: "/rupagen-ai" },
        { label: "Mitra Budaya", href: "/auth/cultural-partner/register" },
        { label: "Pembeli Lisensi", href: "/auth/license-buyer/register" },
      ],
    },
    {
      title: "Kategori",
      links: [
        { label: "Batik", href: "/product?category=batik" },
        { label: "Wayang", href: "/product?category=wayang" },
        { label: "Relief", href: "/product?category=relief" },
        { label: "Semua Kategori", href: "/product" },
      ],
    },
    {
      title: "Bantuan",
      links: [
        { label: "Cara Membeli", href: "#cara-membeli" },
        { label: "Kebijakan Lisensi", href: "#kebijakan" },
        { label: "FAQ", href: "#faq" },
        { label: "Syarat & Ketentuan", href: "#syarat" },
      ],
    },
    {
      title: "Tautan",
      links: [
        { label: "Dokumentasi API", href: "/docs" },
        { label: "Blog", href: "#blog" },
        { label: "Kebijakan Privasi", href: "#privasi" },
        { label: "Sitemap", href: "#sitemap" },
      ],
    },
    {
      title: "Media Sosial",
      links: [
        { label: "Instagram", href: "https://instagram.com/lumbungrupa" },
        { label: "Facebook", href: "https://facebook.com/lumbungrupa" },
        { label: "Twitter", href: "https://twitter.com/lumbungrupa" },
        { label: "LinkedIn", href: "https://linkedin.com/company/lumbungrupa" },
      ],
    },
  ];

  return (
    <footer className="bg-gradient-to-b from-[var(--color-background)] to-[var(--color-primary)] text-black pt-12 md:pt-20 relative overflow-hidden">
      {/* Footer Links */}
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-4 md:gap-6 lg:gap-8">
          {footers.map((section, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="w-full"
            >
              <h2 className="text-sm md:text-lg xl:text-xl font-normal tracking-wide text-black mb-2 md:mb-4 font-roboto">
                {section.title}
              </h2>
              <ul className="space-y-1 md:space-y-2">
                {section.links.map((link, linkIndex) => (
                  <motion.li
                    key={linkIndex}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: linkIndex * 0.05 }}
                    whileHover={{ x: 5 }}
                    className="group flex items-center justify-between border-b border-black/10 pb-1 md:pb-2 hover:text-black transition-colors duration-200"
                  >
                    <a
                      href={link.href}
                      className="text-xs md:text-sm text-black/60 group-hover:text-black transition font-roboto leading-tight"
                      target={link.href.startsWith("http") ? "_blank" : "_self"}
                      rel="noopener noreferrer"
                    >
                      {link.label}
                    </a>
                    <motion.div
                      whileHover={{ scale: 1.2, x: 3 }}
                    >
                      <ArrowRight className="w-3 h-3 md:w-4 md:h-4 text-black/30 group-hover:text-black transition-colors duration-300 shrink-0 ml-1" />
                    </motion.div>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Footer Image */}
      <div className="pt-20">
        <img className="w-full" src="/background/footer.svg" alt="" />
      </div>
    </footer>
  );
};

export default Footer;