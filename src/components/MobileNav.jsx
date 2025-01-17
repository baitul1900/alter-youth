"use client";

import Link from "next/link";
import Icon from "./Icon";
import SvgLogoAy from "../../public/assets/icons/LogoAy2";

const MobileNav = ({ onToggleDrawer }) => {
  return (
    <div
      className="fixed top-0 left-0 w-full z-30 transition-all duration-300 bg-white text-[#fff] mobile-nav"
    >
      <div className="container mx-auto h-16 flex items-center justify-between px-4 max-w-screen-xl">
        {/* Left: Menu Icon */}
        <button
          onClick={onToggleDrawer}
          className="flex items-center justify-center p-2"
        >
          <Icon name="AiOutlineMenu" fill={"#1DC468"} className="text-2xl" />
        </button>

        {/* Center: Logo */}
        <Link href="/" className="flex items-center justify-center">
          <SvgLogoAy color={"#1DC468"} className="w-32 h-auto" />
        </Link>

        <div>

        </div>
      </div>
    </div>
  );
};

export default MobileNav;
