'use client';


import LeftDrawer from "@/components/LeftDrawer";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { useState } from "react";

export default function RootLayout({ children }) {
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  return (
    <html lang="en">
      <body
       
      >
        {/* Navbar */}
        <Navbar onToggleDrawer={() => setDrawerOpen(!isDrawerOpen)} />

          {/* Drawer */}
          <LeftDrawer isOpen={isDrawerOpen} onClose={() => setDrawerOpen(false)} />
          

          <main className="pt-16">
        {children}

          </main>
      </body>
    </html>
  );
}
