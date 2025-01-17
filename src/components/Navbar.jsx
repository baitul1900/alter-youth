'use client';

import React, { useEffect, useState } from "react";
import clsx from "clsx";
import Link from "next/link";
import Icon from "./Icon";
import { navbarMenus } from "@/utils/menu";
import SvgLogoAy from "../../public/assets/icons/LogoAy2";

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
        "fixed top-0 left-0 w-full z-30 transition-all duration-300 desktop-nav",
        scrolled ? "bg-white text-[#1DC468]" : "bg-transparent text-[#fff]"
      )}
    >
      <div className="container mx-auto h-16 flex items-center px-4 max-w-screen-xl">
        <div className="flex items-center">
          <button onClick={onToggleDrawer} className="mr-4">
            <Icon name="AiOutlineMenu" />
          </button>
          <Link href="/">
            <SvgLogoAy
              color={clsx(scrolled ? "#1DC468" : "#fff")}
              className="w-40 h-40"
            />
          </Link>
        </div>

        <nav className="ml-auto space-x-4">
          {navbarMenus?.map((menu) => {
            return (
              <Link
                key={menu?.id}
                href={menu?.routeName}
                className="group relative text-sm font-bold "
              >
                {menu?.name}
                {/* Underline Effect */}
                <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#1DC468] transition-all duration-300 group-hover:w-full"></span>
              </Link>
            );
          })}
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
