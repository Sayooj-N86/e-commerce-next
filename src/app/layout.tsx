import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Footer from "./_layout/Footer";
import Header from "./_layout/header/Header";
import "./globals.css";
import CartProviders from "./provider/CartProviders";
import { Toaster } from "react-hot-toast";
// import { SessionProvider } from "next-auth/react";
import SessionProviderClinet from "./provider/sessionProviderClient";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <SessionProviderClinet>
        <Toaster position="top-right" containerClassName="mt-4" />

          <CartProviders>
            <Header/>
            {children}
            <Footer/>
          </CartProviders>
        </SessionProviderClinet>
      </body>
    </html>
  );
}
