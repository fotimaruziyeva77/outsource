import "./globals.css";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Navbar from './(root)/_components/navbar'
import Footer from './(root)/_components/footer'
import { SpeedInsights } from "@vercel/speed-insights/next"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Navoi Regional Government",
  description: "Official investment portal of Navoi region",
  icons: {
    icon: "/removebg.png", // yoki "/icon.png"
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="uz">
      <body className={`${poppins.className} bg-white text-gray-900`}>
        {/* Navbar */}
        <Navbar />

        {/* Asosiy kontent */}
        <main className="min-h-screen">{children}</main>
<Footer/>
  <SpeedInsights />
      </body>
    </html>
  );
}
