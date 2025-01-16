"use client";

import clsx from "clsx";
import React from "react";

const LeftDrawer = ({ isOpen, onClose }) => {
  const drawerWidth = 250;

  return (
    <>
      {/* Overlay */}
      <div
        className={clsx(
          "fixed inset-0 bg-black bg-opacity-50 transition-opacity",
          {
            "opacity-50 pointer-events-auto": isOpen,
            "opacity-0 pointer-events-none": !isOpen,
          }
        )}
        onClick={onClose} // Close drawer when clicking the overlay
      />

      {/* Drawer */}
      <div
        className={clsx(
          "bg-gray-800 text-white fixed top-0 left-0 h-full transition-transform",
          { "translate-x-0": isOpen, "-translate-x-full": !isOpen }
        )}
        style={{ width: `${drawerWidth}px` }}
      >
        <ul className="p-4 space-y-4">
          <li>
            <a href="/" className="block hover:underline">
              Home
            </a>
          </li>
          <li>
            <a href="/about" className="block hover:underline">
              About
            </a>
          </li>
          <li>
            <a href="/services" className="block hover:underline">
              Services
            </a>
          </li>
          <li>
            <a href="/contact" className="block hover:underline">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default LeftDrawer;
