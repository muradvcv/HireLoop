"use client";

import Image from "next/image";
import { FaFacebook } from "react-icons/fa";
import { LiaLinkedin } from "react-icons/lia";
import { PinIcon } from "lucide-react";

const Footer = () => {
  return (
    <footer className="w-full bg-black text-white">
      <div className="max-w-7xl mx-auto px-8 lg:px-12 py-16">

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">

          {/* LEFT */}
          <div className="space-y-8">

            {/* Logo */}
            <Image
              src="/assets/logo.png"
              alt="Hireloop"
              width={120}
              height={40}
              className="object-contain"
            />

            <p className="text-gray-500 text-sm leading-7 max-w-xs">
              The AI-native career platform. Built for people who take their work seriously.
            </p>

            {/* Social */}
            <div className="flex items-center gap-3">
              <a href="#" className="w-10 h-10 bg-[#111] rounded-md flex items-center justify-center hover:bg-[#1a1a1a]">
                <FaFacebook size={18} />
              </a>

              <a href="#" className="w-10 h-10 bg-[#111] rounded-md flex items-center justify-center hover:bg-[#1a1a1a]">
                <PinIcon size={18} />
              </a>

              <a href="#" className="w-10 h-10 bg-[#111] rounded-md flex items-center justify-center hover:bg-[#1a1a1a]">
                <LiaLinkedin size={18} />
              </a>
            </div>
          </div>

          {/* PRODUCT */}
          <div>
            <h3 className="text-indigo-500 text-sm font-medium mb-6">
              Product
            </h3>
            <ul className="space-y-4 text-sm text-gray-500">
              <li><a href="#" className="hover:text-white">Job discovery</a></li>
              <li><a href="#" className="hover:text-white">Worker AI</a></li>
              <li><a href="#" className="hover:text-white">Companies</a></li>
              <li><a href="#" className="hover:text-white">Salary data</a></li>
            </ul>
          </div>

          {/* NAVIGATION */}
          <div>
            <h3 className="text-indigo-500 text-sm font-medium mb-6">
              Navigation
            </h3>
            <ul className="space-y-4 text-sm text-gray-500">
              <li><a href="#" className="hover:text-white">Help center</a></li>
              <li><a href="#" className="hover:text-white">Career library</a></li>
              <li><a href="#" className="hover:text-white">Contact</a></li>
            </ul>
          </div>

          {/* RESOURCES */}
          <div>
            <h3 className="text-indigo-500 text-sm font-medium mb-6">
              Resources
            </h3>
            <ul className="space-y-4 text-sm text-gray-500">
              <li><a href="#" className="hover:text-white">Brand Guideline</a></li>
              <li><a href="#" className="hover:text-white">Newsroom</a></li>
            </ul>
          </div>
        </div>

        {/* DIVIDER */}
        <div className="border-t border-gray-800 my-12" />

        {/* BOTTOM */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">

          <p>Copyright 2024 — Programming Hero</p>

          <div className="flex gap-6">
            <a href="#" className="hover:text-white">Terms & Policy</a>
            <a href="#" className="hover:text-white">Privacy Guideline</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;