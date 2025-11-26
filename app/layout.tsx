import localFont from "next/font/local";
import type { Metadata } from "next";
import "./globals.css"
// import { SpeedInsights } from "@vercel/speed-insights/next";

const generalSans = localFont({
  src: [
    {
      path: "./fonts/GeneralSans/GeneralSans-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/GeneralSans/GeneralSans-Italic.otf",
      weight: "400",
      style: "italic",
    },

    {
      path: "./fonts/GeneralSans/GeneralSans-Light.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "./fonts/GeneralSans/GeneralSans-LightItalic.otf",
      weight: "300",
      style: "italic",
    },

    {
      path: "./fonts/GeneralSans/GeneralSans-Extralight.otf",
      weight: "200",
      style: "normal",
    },
    {
      path: "./fonts/GeneralSans/GeneralSans-ExtralightItalic.otf",
      weight: "200",
      style: "italic",
    },

    {
      path: "./fonts/GeneralSans/GeneralSans-Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/GeneralSans/GeneralSans-MediumItalic.otf",
      weight: "500",
      style: "italic",
    },

    {
      path: "./fonts/GeneralSans/GeneralSans-Semibold.otf",
      weight: "600",
      style: "normal",
    },
    {
      path: "./fonts/GeneralSans/GeneralSans-SemiboldItalic.otf",
      weight: "600",
      style: "italic",
    },

    {
      path: "./fonts/GeneralSans/GeneralSans-Bold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "./fonts/GeneralSans/GeneralSans-BoldItalic.otf",
      weight: "700",
      style: "italic",
    },
  ],
  variable: "--font-general-sans",
  fallback: ["system-ui", "arial", "sans-serif"],
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  title: "Open Recruitment UTY Software House 2025",
  description:
    "Bergabunglah dengan UTY Software House! Komunitas teknologi mahasiswa Universitas Teknologi Yogyakarta. Tingkatkan skill, bangun portofolio, dan berkolaborasi dalam proyek nyata. Posisi tersedia: Backend, Frontend, UI/UX, AI, QA, dan Non-IT.",
  authors: [{ name: "UTY Software House Team" }],
  creator: "UTY Software House",
  publisher: "UTY Software House",
  icons: {
    icon: "/favicon/favicon.ico",
    shortcut: "/favicon/favicon.ico",
    apple: "/favicon/favicon.ico",
  }
};

const RootLayout = ({ children }: { children: React.ReactNode }) => (
  <html lang="en">
    <body className={`${generalSans.variable} antialiased`}>
      {children}
    </body>
  </html>
);

export default RootLayout;