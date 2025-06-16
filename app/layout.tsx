import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Aphex Pharma Solutions",
  description: "Pharmaceutical Quality, CMC and CMC Regulatory Services",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#080539] flex justify-center`}>
        <div className="w-[1500px]">
          <Navbar />
          {children}
        </div>
      </body>
    </html>
  );
}
