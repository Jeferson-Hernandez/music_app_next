import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/app/ui/globals.css";

import SideNav from "@/app/ui/app/sidenav";
import Navbar from "@/app/ui/app/navbar";
import Search from "@/app/ui/main/search";
import MusicPlayer from "@/app/ui/main/musicPlayer";

const inter = Inter({ subsets: ["latin"] });

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
      <body id="body" className={inter.className}>
        <Navbar />
        <SideNav />
        <section className="section_container">
          <Search />
          {children}
        </section>
        <MusicPlayer/>
      </body>
    </html>
  );
}
