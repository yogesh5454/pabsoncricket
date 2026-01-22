"use client";

import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

import pabLogo from "../../../Logo/pablogo.png";


export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Teams", href: "/teams" },
    { name: "Fixtures", href: "/#fixtures" },
    { name: "Gallery", href: "/#gallery" },
    { name: "Contact", href: "/#contact" },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-md shadow-md py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">

          {/* LOGO */}
          <Link href="/" className="flex items-center gap-3">
            <Image
              src={pabLogo}
              alt="PCL Logo"
              width={scrolled ? 48 : 64}
              height={scrolled ? 48 : 64}
              className="transition-all duration-300 w-auto"
              priority
            />

            {/* Logo Text */}
            <div
              className={`flex flex-col transition-opacity duration-300 ${
                scrolled ? "opacity-100" : "opacity-0 md:opacity-100"
              }`}
            >
              <span className="text-lg font-black tracking-tight text-slate-900 leading-none">
                PCL <span className="text-red-600">U-15</span>
              </span>
              <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">
                Official League
              </span>
            </div>
          </Link>

          {/* DESKTOP NAV */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-bold uppercase tracking-wide text-slate-600 hover:text-red-600 transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-slate-900 hover:text-red-600 transition-colors"
          >
            {isOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden bg-white border-t border-slate-100 shadow-xl overflow-hidden"
          >
            <div className="px-4 py-6 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block text-lg font-bold text-slate-700 hover:text-red-600 hover:bg-slate-50 px-4 py-3 rounded-xl transition-all"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
