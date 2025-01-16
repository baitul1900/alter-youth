"use client";

import React, { useEffect, useState } from "react";
import clsx from "clsx";

const Navbar = ({ onToggleDrawer }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={clsx(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300",
        scrolled
          ? "bg-blue-700 text-white shadow-md"
          : "bg-transparent text-black"
      )}
    >
      <div className="h-16 flex items-center px-4">
        <button onClick={onToggleDrawer} className="mr-4">
          Toggle Drawer
        </button>
        <nav className="ml-auto space-x-4">
          <a href="/" className="hover:underline">
            Home
          </a>
          <a href="/about" className="hover:underline">
            About
          </a>
          <a href="/services" className="hover:underline">
            Services
          </a>
          <a href="/contact" className="hover:underline">
            Contact
          </a>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
