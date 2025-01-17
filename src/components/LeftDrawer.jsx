"use client";

import { menuItems } from "@/utils/menu";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation"; // Import usePathname for current route
import React from "react";

const LeftDrawer = ({ isOpen, onClose }) => {
  const drawerWidth = 250;
  const pathname = usePathname(); // Get the current pathname

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
        onClick={onClose}
      />

      {/* Drawer */}
      <div
        className={clsx(
          "bg-slate-50 pt-20 fixed top-0 left-0 h-full transition-transform z-40",
          { "translate-x-0": isOpen, "-translate-x-full": !isOpen }
        )}
        style={{ width: `${drawerWidth}px` }}
      >
        {/* Close Button (Visible only on small screens) */}
        <button
          onClick={onClose}
          className="absolute top-4 left-4 sm:block hidden p-2 bg-gray-300 text-black rounded-full hover:bg-gray-400"
          aria-label="Close"
        >
          ✕
        </button>

        <ul className="pr-10 ps-4 space-y-2 mt-8">
          {menuItems?.map((menu) => {
            const isActive = pathname === menu.routeName; // Compare current path with menu item route

            return (
              <li
                key={menu.id}
                className={clsx(
                  "flex items-center py-2 px-3 gap-2 text-sm rounded-lg transition-all duration-300",
                  {
                    "bg-[#1DC468] text-white font-semibold": isActive, // Active style
                    "hover:bg-[#1DC468] hover:text-white hover:opacity-80":
                      !isActive, // Hover style
                  }
                )}
              >
                <div className="flex items-center justify-center w-6 h-6">
                  {menu?.icon}
                </div>
                <Link
                  href={
                    menu?.inLink === true
                      ? "https://play.google.com/store/apps/details?id=com.alteryouth.userapp&pli=1"
                      : menu?.routeName
                  }
                  className="block"
                >
                  {menu?.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default LeftDrawer;
