"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { ChevronDown, Rocket, Menu, X } from "lucide-react";
import { industryData } from "@/data/industryData";

const navLinks = [
  { label: "Industries", href: "/services", hasDropdown: true },
  { label: "Solutions", href: "/solutions" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileIndustriesOpen, setMobileIndustriesOpen] = useState(false);
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
  const lastScrollY = useRef(0);
  const pathname = usePathname();

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
      className="fixed top-0 left-0 right-0 z-[100] flex flex-col items-center px-4 sm:px-5 pt-4 sm:pt-5"
    >
      {/* Vignette / Ambient Glow */}
      <div className="absolute top-0 left-0 right-0 h-[120px] bg-gradient-to-b from-[#0A0B0F]/90 via-[#0A0B0F]/40 to-transparent pointer-events-none -z-10" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[600px] h-[100px] bg-[#6366F1]/[0.08] blur-[80px] pointer-events-none -z-10" />

      <nav
        className={`
          relative flex items-center justify-between w-full max-w-[1200px]
          px-6 py-3 rounded-full
          transition-all duration-700 ease-out
          ${scrolled
            ? "bg-[#0A0B0F]/80 backdrop-blur-3xl border border-white/[0.1] border-b-white/[0.15] shadow-[0_8px_32px_rgba(0,0,0,0.8),inset_0_1px_0_rgba(255,255,255,0.1)]"
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
            <Image
              src="/Logo/Final.png"
              alt="Fazamous Logo"
              width={32}
              height={32}
              className="object-contain"
              priority
            />
            <span className="text-white/90 font-semibold text-[15px] tracking-[0.08em] uppercase group-hover:text-white transition-colors duration-300" style={{ fontFamily: "var(--font-display)" }}>
              Fazamous
            </span>
          </motion.div>
        </Link>

        {/* Center Nav */}
        <div className="hidden md:flex items-center gap-1 p-1">
          {navLinks.map((link, idx) => {
            const isActive = pathname === link.href;
            const isHovered = hoveredIdx === idx;
            return (
              <div
                key={link.label}
                className="relative"
                onMouseEnter={() => setHoveredIdx(idx)}
                onMouseLeave={() => setHoveredIdx(null)}
              >
                <Link
                  href={link.href}
                  className={`relative flex items-center gap-1 px-5 py-2 rounded-full text-[13px] font-medium transition-colors duration-300 tracking-wide z-20 ${
                    isActive || isHovered ? "text-white" : "text-white/60 hover:text-white"
                  }`}
                >
                  <span className="relative z-10">{link.label}</span>
                  {link.hasDropdown && (
                    <ChevronDown size={14} className={`relative z-10 transition-transform duration-300 ${isHovered ? "rotate-180" : ""}`} />
                  )}
                  {(isHovered || isActive) && (
                    <motion.div
                      layoutId="nav-pill"
                      className={`absolute inset-0 rounded-full border backdrop-blur-md shadow-[0_4px_12px_rgba(0,0,0,0.2)] ${
                        isActive ? "bg-white/[0.06] border-white/[0.12]" : "bg-white/[0.03] border-white/[0.08]"
                      }`}
                      transition={{ type: "spring", stiffness: 500, damping: 35 }}
                    />
                  )}
                </Link>

                {/* Dropdown Menu */}
                {link.hasDropdown && isHovered && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 z-50">
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      transition={{ duration: 0.2, ease: "easeOut" }}
                      className="w-[800px] p-6 bg-black/95 backdrop-blur-3xl border border-white/10 rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.8)] flex gap-6"
                    >
                      {/* Left side: Flagship Platform */}
                      <div className="w-1/4 flex flex-col p-4 rounded-xl bg-white/[0.02] border border-white/5 relative overflow-hidden group">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-[#4EA8FF]/20 blur-3xl group-hover:bg-[#4EA8FF]/30 transition-colors pointer-events-none" />
                        <div className="w-10 h-10 rounded-lg bg-[#4EA8FF]/10 flex items-center justify-center mb-4">
                          <Rocket size={20} className="text-[#4EA8FF]" />
                        </div>
                        <h4 className="text-white font-bold mb-2">Flagship Platform</h4>
                        <p className="text-white/50 text-[12px] leading-relaxed mb-6">The Intelligence Layer Behind Every Industry.</p>
                        <Link href="/services" className="mt-auto inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-[#4EA8FF]/10 hover:bg-[#4EA8FF]/20 border border-[#4EA8FF]/20 text-[#4EA8FF] hover:text-white text-[13px] font-semibold rounded-lg transition-all duration-300 group/btn">
                          View Services
                          <span className="group-hover/btn:translate-x-1 transition-transform">&rarr;</span>
                        </Link>
                      </div>

                      {/* Right side: Industry Verticals Grid */}
                      <div className="w-3/4">
                        <h4 className="text-white/40 text-[11px] uppercase tracking-widest font-mono mb-4 px-2">Industries</h4>
                        <div className="grid grid-cols-3 gap-x-4 gap-y-2">
                          {industryData.map((ind) => {
                            const isIndActive = pathname === `/services/${ind.slug}`;
                            return (
                            <Link 
                              key={ind.slug} 
                              href={`/services/${ind.slug}`}
                              className={`group flex items-center gap-3 p-2 rounded-lg transition-colors ${
                                isIndActive ? "bg-white/[0.05] ring-1 ring-white/10" : "hover:bg-white/[0.04]"
                              }`}
                            >
                              <div className={`w-6 h-6 flex-shrink-0 rounded flex items-center justify-center border transition-transform ${
                                isIndActive ? "bg-white/[0.03] border-white/20" : "bg-white/[0.02] border-white/5 group-hover:scale-110"
                              }`}>
                                <ind.icon size={12} style={{ color: ind.color }} />
                              </div>
                              <span className={`text-[13px] transition-colors ${
                                isIndActive ? "font-semibold text-white" : "font-medium text-white/70 group-hover:text-white"
                              }`}>
                                {ind.name}
                              </span>
                            </Link>
                            )
                          })}
                        </div>
                      </div>
                    </motion.div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Right */}
        <div className="flex items-center gap-2">
          <Link href="/contact" className="hidden sm:block">
            <motion.div
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="relative overflow-hidden ml-1 px-5 py-2 rounded-full text-[13px] font-medium bg-white text-[#0A0B0F] shadow-[0_0_15px_rgba(255,255,255,0.1)] hover:shadow-[0_0_25px_rgba(255,255,255,0.3),0_0_15px_rgba(99,102,241,0.2)] transition-shadow duration-500 cursor-pointer"
            >
              <span className="relative z-10">Request Demo</span>
            </motion.div>
          </Link>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden flex items-center justify-center w-9 h-9 rounded-full text-white/70 hover:text-white hover:bg-white/10 transition-colors ml-1"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0, marginTop: 0 }}
            animate={{ opacity: 1, height: "auto", marginTop: 12 }}
            exit={{ opacity: 0, height: 0, marginTop: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="w-full max-w-[1200px] overflow-hidden md:hidden px-1"
          >
            <div className="bg-[#0A0B0F]/95 backdrop-blur-3xl border border-white/10 rounded-2xl p-6 flex flex-col shadow-[0_8px_32px_rgba(0,0,0,0.8)] relative overflow-hidden">
              {/* Internal glow for mobile menu */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#6366F1]/10 blur-[80px] pointer-events-none rounded-full"></div>
              
              {/* Top Row: Solutions, About, Contact */}
              <div className="flex items-center justify-between relative z-10 pb-6 mb-4 border-b border-white/10">
                {navLinks.filter(l => !l.hasDropdown).map((link) => {
                  const isActive = pathname === link.href;
                  return (
                    <Link
                      key={link.label}
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`text-[15px] font-medium transition-colors ${isActive ? "text-white" : "text-white/60 hover:text-white"}`}
                    >
                      {link.label}
                    </Link>
                  )
                })}
              </div>

              {/* Industries Accordion */}
              {navLinks.filter(l => l.hasDropdown).map((link) => (
                <div key={link.label} className="flex flex-col relative z-10 mb-4">
                  <button
                    onClick={() => setMobileIndustriesOpen(!mobileIndustriesOpen)}
                    className={`flex items-center justify-between text-[17px] font-semibold py-2 transition-colors ${mobileIndustriesOpen ? "text-white" : "text-white/60 hover:text-white"}`}
                  >
                    {link.label}
                    <ChevronDown size={18} className={`transition-transform duration-300 ${mobileIndustriesOpen ? "rotate-180" : ""}`} />
                  </button>
                  
                  <AnimatePresence>
                    {mobileIndustriesOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="overflow-hidden"
                      >
                        <div className="flex flex-col gap-4 pl-3 pt-4 border-l border-white/10 mt-2 mb-2 ml-1">
                          {/* Services Link for Mobile */}
                          <Link
                            href="/services"
                            onClick={() => {
                              setMobileMenuOpen(false);
                              setMobileIndustriesOpen(false);
                            }}
                            className="flex items-center gap-4 text-sm font-medium text-[#4EA8FF] hover:text-[#4EA8FF]/80 transition-colors mb-2"
                          >
                            <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-[#4EA8FF]/10 border border-[#4EA8FF]/20 shrink-0">
                              <Rocket size={14} className="text-[#4EA8FF]" />
                            </div>
                            <span className="text-[14px] leading-tight font-semibold">View Services &rarr;</span>
                          </Link>
                          {industryData.map((ind) => (
                            <Link
                              key={ind.slug}
                              href={`/services/${ind.slug}`}
                              onClick={() => {
                                setMobileMenuOpen(false);
                                setMobileIndustriesOpen(false);
                              }}
                              className="flex items-center gap-4 text-sm text-white/50 hover:text-white transition-colors"
                            >
                              <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-white/[0.03] border border-white/10 shrink-0">
                                <ind.icon size={14} style={{ color: ind.color }} />
                              </div>
                              <span className="text-[14px] leading-tight">{ind.name}</span>
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
              
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-3.5 mt-2 rounded-xl bg-white text-[#0A0B0F] text-center font-bold text-sm shadow-[0_0_15px_rgba(255,255,255,0.1)] relative z-10"
              >
                Request Demo
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

