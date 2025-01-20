'use client';


import LeftDrawer from "@/components/LeftDrawer";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { useState } from "react";
import { Toaster } from "react-hot-toast";
import MobileNav from "@/components/MobileNav";
import Footer from "@/components/Footer";


export default function RootLayout({ children }) {
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  return (
    <html lang="en">
      <body

       
      >
        <Toaster
  position="top-center"
  reverseOrder={false}
/>
        
        {/* Navbar */}
        <Navbar onToggleDrawer={() => setDrawerOpen(!isDrawerOpen)} />
          <MobileNav onToggleDrawer={() => setDrawerOpen(!isDrawerOpen)} />

          {/* Drawer */}
          <LeftDrawer isOpen={isDrawerOpen} onClose={() => setDrawerOpen(false)} />
          

          <main>
            {children}
          </main>
          <Footer/>
      </body>
    </html>
  );
}
