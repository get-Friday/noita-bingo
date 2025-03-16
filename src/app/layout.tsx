import type { Metadata } from "next";
import localFont from 'next/font/local';
import { Geist, Geist_Mono } from "next/font/google";
import { Header, Footer } from "@/components";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const noitaBlackLetter = localFont({
  variable: '--font-noita-black-letter',
  src: "../../public/fonts/NoitaBlackletter-Regular.ttf",
})

export const metadata: Metadata = {
  title: "Noita Bingo",
  description: "Noita Bingo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} ${noitaBlackLetter.variable}`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
