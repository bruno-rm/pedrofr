import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/dist/client/link";
// import { Analytics } from "@vercel/analytics/next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Pedro Marques",
  description: "Aulas de francês",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body>
        <div className=" bg-[#404682] flex text-white font-bold gap-4 pb-2 pt-2 pl-2">
          <Link href="/metodologia">
            <h2>Metodologia</h2>
          </Link>
          <Link href="/contato">
            <h2>Contato</h2>
          </Link>
          <Link href="/">
            <h2>Home</h2>
          </Link>
        </div>
        <div className=" bg-[#c8e093] ">
          {children}
          {/* Vercel Analytics */}
          {/* <Analytics /> */}
        </div>
      </body>
    </html>
  );
}
