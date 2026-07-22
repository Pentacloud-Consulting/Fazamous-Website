"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Search } from "lucide-react";

const navLinks = [
  { label: "Platforms", href: "#platforms" },
  { label: "Solutions", href: "#solutions" },
  { label: "Technology", href: "#technology" },
  { label: "Company", href: "#about" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      setScrolled(currentY > 60);
      if (currentY > 500) {
        setHidden(currentY > lastScrollY.current + 5);
      } else {
        setHidden(false);
      }
      lastScrollY.current = currentY;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{
        y: hidden ? -120 : 0,
        opacity: hidden ? 0 : 1,
      }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 left-0 right-0 z-[100] flex justify-center px-5 pt-5"
    >
      {/* Vignette / Ambient Glow */}
      <div className="absolute top-0 left-0 right-0 h-[120px] bg-gradient-to-b from-[#050505]/90 via-[#050505]/40 to-transparent pointer-events-none -z-10" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[100px] bg-[#4EA8FF]/[0.08] blur-[80px] pointer-events-none -z-10" />

      <nav
        className={`
          relative flex items-center justify-between w-full max-w-[1400px]
          px-7 py-3.5 rounded-2xl
          transition-all duration-700 ease-out
          ${scrolled
            ? "bg-[#0a0a0a]/60 backdrop-blur-3xl border border-white/[0.08] border-b-white/[0.12] shadow-[0_4px_40px_rgba(0,0,0,0.6),inset_0_1px_0_rgba(255,255,255,0.05)]"
            : "bg-transparent border border-transparent"
          }
        `}
      >
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <motion.div
            whileHover={{ scale: 1.04 }}
            transition={{ type: "spring", stiffness: 500, damping: 30 }}
            className="flex items-center gap-2.5"
          >
            <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-[#4EA8FF] to-[#2a6fc7] flex items-center justify-center shadow-[0_0_20px_rgba(78,168,255,0.2)]">
              <span className="text-[#050505] font-bold text-xs leading-none">F</span>
            </div>
            <span className="text-white/90 font-semibold text-[15px] tracking-[0.08em] uppercase group-hover:text-white transition-colors duration-300">
              Fazamous
            </span>
          </motion.div>
        </Link>

        {/* Center Nav */}
        <div className="hidden md:flex items-center gap-1 p-1">
          {navLinks.map((link, idx) => {
            const isActive = hoveredIdx === idx;
            return (
              <Link
                key={link.label}
                href={link.href}
                onMouseEnter={() => setHoveredIdx(idx)}
                onMouseLeave={() => setHoveredIdx(null)}
                className={`relative px-5 py-2 rounded-full text-[13px] font-medium transition-colors duration-300 tracking-wide z-10 ${
                  isActive ? "text-white" : "text-white/60 hover:text-white"
                }`}
              >
                <span className="relative z-10">{link.label}</span>
                {isActive && (
                  <motion.div
                    layoutId="nav-pill"
                    className="absolute inset-0 rounded-full bg-white/[0.03] border border-white/[0.08] backdrop-blur-md shadow-[0_4px_12px_rgba(0,0,0,0.2)]"
                    transition={{ type: "spring", stiffness: 500, damping: 35 }}
                  />
                )}
              </Link>
            );
          })}
        </div>

        {/* Right */}
        <div className="flex items-center gap-2">
          <button
            className="hidden sm:flex w-9 h-9 items-center justify-center rounded-full text-white/30 hover:text-white/70 hover:bg-white/[0.05] transition-all duration-300"
            aria-label="Search"
          >
            <Search size={15} strokeWidth={1.5} />
          </button>

          <motion.a
            href="#contact"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="relative overflow-hidden ml-1 px-5 py-2 rounded-full text-[13px] font-medium bg-white text-[#050505] shadow-[0_0_15px_rgba(255,255,255,0.1)] hover:shadow-[0_0_25px_rgba(255,255,255,0.3),0_0_15px_rgba(78,168,255,0.2)] transition-shadow duration-500"
          >
            <span className="relative z-10">Request Demo</span>
          </motion.a>
        </div>
      </nav>
    </motion.header>
  );
}
