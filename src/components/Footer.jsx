"use client";

import {
  ABOUT_US_PAGE,
  HOME_PAGE,
  HOW_IT_WORKS_PAGE,
  SCHOLARSHIP_POLICY_PAGE,
} from "@/utils/router";
import Link from "next/link";
import React from "react";
import Icon from "./Icon";

const Footer = () => {
  return (
    <div className="section">
      <div className="desktop-footer container mx-auto px-4 max-w-screen-xl py-6 hidden md:block">
        <div>
          <h6 className="text-dark font-bold text-md">
            Learn About AlterYouth
          </h6>

          <div className="flex flex-col mt-4 pb-4 gap-y-2 border-b border-slate-400">
            <Link href={HOME_PAGE} className="text-sm">
              Home
            </Link>
            <Link href={ABOUT_US_PAGE} className="text-sm">
              About Us
            </Link>
            <Link href={HOW_IT_WORKS_PAGE} className="text-sm">
              How it works
            </Link>
            <Link href={SCHOLARSHIP_POLICY_PAGE} className="text-sm">
              Scholarship Policy
            </Link>
            <div className="flex justify-between">
              <Link
                href={
                  "https://play.google.com/store/apps/details?id=com.alteryouth.userapp&pli=1"
                }
                className="text-sm"
              >
                Get the app
              </Link>
              <p className="text-sm">Towards a literate Bangladesh</p>
            </div>
          </div>

          <div className="flex justify-between mt-4">
            <div>
              <p className="text-sm">© 2025 AlterYouth Limited</p>
            </div>
            <div className="flex gap-1">
              <Link
                href={"https://facebook.com"}
                className="hover:text-[#1DC468]"
              >
                <Icon name="CiFacebook" className="w-6 h-6 " />
              </Link>
              <Link
                href={"https://facebook.com"}
                className="hover:text-[#1DC468]"
              >
                <Icon name="FaInstagram" className="w-6 h-6 " />
              </Link>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <Link href={"/"} className="text-sm hover:text-[#1DC468]">
              Terms of Service
            </Link>
            <div>.</div>
            <Link href={"/"} className="text-sm hover:text-[#1DC468]">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
      {/* ---------------------------------------------------------------------------------------------------- */}
      <div className="mobile-footer container mx-auto px-4 max-w-screen-xl block md:hidden py-6">
        <h6 className="text-dark font-bold text-md">Learn About AlterYouth</h6>

        <div className="flex flex-col mt-4 pb-4 gap-y-2 border-b border-slate-400">
          <Link href={HOME_PAGE} className="text-sm">
            Home
          </Link>
          <Link href={ABOUT_US_PAGE} className="text-sm">
            About Us
          </Link>
          <Link href={HOW_IT_WORKS_PAGE} className="text-sm">
            How it works
          </Link>
          <Link href={SCHOLARSHIP_POLICY_PAGE} className="text-sm">
            Scholarship Policy
          </Link>
        </div>

        <div className="flex flex-col mt-4 pb-4 gap-y-2 border-b border-slate-400">
          <div>
            <p className="text-sm">Towards a literate Bangladesh</p>
          </div>
          <div className="flex gap-1">
            <Link
              href={"https://facebook.com"}
              className="hover:text-[#1DC468]"
            >
              <Icon name="CiFacebook" className="w-6 h-6 " />
            </Link>
            <Link
              href={"https://facebook.com"}
              className="hover:text-[#1DC468]"
            >
              <Icon name="FaInstagram" className="w-6 h-6 " />
            </Link>
          </div>
        </div>

        <div className="flex flex-col items-start gap-2 mt-2">
          <div>
            <p className="text-sm">© 2025 AlterYouth Limited</p>
          </div>
          <div className="flex items-center gap-2">
            <Link href={"/"} className="text-sm hover:text-[#1DC468]">
              Terms of Service
            </Link>
            <div>.</div>
            <Link href={"/"} className="text-sm hover:text-[#1DC468]">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
