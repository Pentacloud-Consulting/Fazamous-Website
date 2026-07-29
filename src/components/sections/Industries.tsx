"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { industryData } from "@/data/industryData";
import { fonts } from "@/styles/tokens";

export function Industries() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Auto-advance logic
  useEffect(() => {
    if (isHovering || !isInView) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % industryData.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [isHovering, isInView]);

  const activeIndustry = industryData[activeIndex];

  return (
    <section id="industries" className="py-24 relative overflow-hidden bg-[#0A0B0F] border-t border-white/[0.02]" ref={ref}>
      {/* Background ambient lighting */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[1000px] rounded-full bg-gradient-to-tr from-[#22D3EE]/[0.03] via-[#6366F1]/[0.03] to-transparent blur-[200px] pointer-events-none" />

      <div className="w-full max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header */}
        <div className="mb-16 md:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="mb-6"
          >
            <span className="glass-pill px-4 py-1.5 inline-flex items-center gap-2 border-glow text-white/50 uppercase tracking-widest text-[10px] font-mono">
              <span className="w-1.5 h-1.5 rounded-full bg-[#22D3EE] animate-pulse" />
              Industry Applications
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="text-2xl md:text-4xl font-bold tracking-tight leading-tight mb-6 pb-2 text-white"
            style={{ fontFamily: fonts.display }}
          >
            Empowering <span className="text-white/40">Every Sector.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-white/50 max-w-xl text-[16px] leading-[1.7] font-light"
          >
            Tailored AI architectures engineered to solve high-stakes challenges across critical global industries.
          </motion.p>
        </div>

        {/* Desktop Split Layout */}
        <div 
          className="hidden lg:grid grid-cols-12 gap-16 xl:gap-24"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          {/* Left Column: List */}
          <div className="col-span-5 flex flex-col gap-2 relative">
             <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-white/[0.05]" />
             
             {industryData.map((industry, idx) => {
                const isActive = activeIndex === idx;
                return (
                  <div 
                    key={industry.id}
                    onMouseEnter={() => setActiveIndex(idx)}
                    className="relative py-4 pl-8 cursor-pointer group flex items-center justify-between"
                  >
                    {/* Active line indicator */}
                    {isActive && (
                      <motion.div 
                        layoutId="activeIndicator"
                        className="absolute left-0 top-0 bottom-0 w-[2px] bg-[#22D3EE] shadow-[0_0_10px_#22D3EE]"
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      />
                    )}

                    <div className="flex items-center gap-6">
                      <span className={`font-mono text-[11px] transition-colors duration-300 ${isActive ? 'text-[#22D3EE]' : 'text-white/20 group-hover:text-white/40'}`}>
                        {industry.id}
                      </span>
                      <span 
                        className={`text-[16px] font-medium tracking-wide transition-colors duration-300 ${isActive ? 'text-white' : 'text-white/40 group-hover:text-white/70'}`}
                        style={{ fontFamily: fonts.display }}
                      >
                        {industry.name}
                      </span>
                    </div>

                    {industry.isNew && (
                       <span className="text-[9px] font-mono uppercase tracking-widest px-2 py-0.5 rounded border border-[#F59E0B]/30 text-[#F59E0B] bg-[#F59E0B]/10">
                         New
                       </span>
                    )}
                  </div>
                );
             })}
          </div>

          {/* Right Column: Detail Panel */}
          <div className="col-span-7 relative min-h-[450px]">
             <div className="sticky top-32 glass-card rounded-[32px] border border-white/[0.08] p-10 xl:p-14 bg-[#12141C] overflow-hidden">
                <AnimatePresence mode="wait">
                   <motion.div
                     key={activeIndustry.id}
                     initial={{ opacity: 0, y: 10, filter: 'blur(4px)' }}
                     animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                     exit={{ opacity: 0, y: -10, filter: 'blur(4px)' }}
                     transition={{ duration: 0.2 }}
                     className="relative z-10 flex flex-col h-full"
                   >
                     <div className="flex justify-between items-start mb-8">
                       <div className="w-16 h-16 rounded-2xl flex items-center justify-center bg-white/[0.02] border border-white/[0.05]">
                         <activeIndustry.icon size={28} style={{ color: activeIndustry.color }} />
                       </div>
                       
                       <div className="px-3 py-1.5 rounded-full border border-white/10 bg-white/[0.03] flex items-center gap-2">
                         <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: activeIndustry.color }} />
                         <span className="text-[10px] font-mono text-white/70 uppercase tracking-widest">{activeIndustry.metric}</span>
                       </div>
                     </div>

                     <h3 className="text-4xl font-bold text-white mb-6 tracking-tight leading-tight" style={{ fontFamily: fonts.display }}>
                       {activeIndustry.name}
                     </h3>

                     <p className="text-white/50 text-[16px] leading-[1.8] font-light mb-12 max-w-lg">
                       {activeIndustry.desc}
                     </p>

                     <div className="mt-auto pt-8 border-t border-white/[0.06] flex items-center justify-between">
                       <div className="flex flex-col gap-1">
                          <span className="text-white/30 text-[10px] font-mono uppercase tracking-widest">Powered By</span>
                          <div className="flex items-center gap-2">
                            {activeIndustry.products.map((prod, i) => (
                              <span key={prod} className="text-white/80 text-[13px] font-medium">
                                {prod}{i < activeIndustry.products.length - 1 && <span className="text-white/20 mx-1">/</span>}
                              </span>
                            ))}
                          </div>
                       </div>
                       
                       <Link href={`/services/${activeIndustry.slug}`}>
                         <button className="flex items-center gap-3 px-6 py-3 bg-white text-black rounded-full text-[13px] font-bold hover:scale-105 transition-transform group">
                           View Application
                           <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                         </button>
                       </Link>
                     </div>
                   </motion.div>
                </AnimatePresence>

                {/* Decorative background icon */}
                <div className="absolute -bottom-16 -right-16 opacity-[0.03] pointer-events-none">
                  <AnimatePresence mode="wait">
                     <motion.div
                       key={`bg-${activeIndustry.id}`}
                       initial={{ opacity: 0, scale: 0.8 }}
                       animate={{ opacity: 1, scale: 1 }}
                       exit={{ opacity: 0, scale: 1.1 }}
                       transition={{ duration: 0.4 }}
                     >
                       <activeIndustry.icon size={300} strokeWidth={0.5} style={{ color: activeIndustry.color }} />
                     </motion.div>
                  </AnimatePresence>
                </div>
             </div>
          </div>
        </div>

        {/* Mobile Fallback Layout (Stacked Cards) */}
        <div className="lg:hidden flex flex-col gap-6 mt-8">
           {industryData.map((industry) => (
             <Link key={industry.id} href={`/services/${industry.slug}`}>
               <div className="glass-card rounded-[24px] p-6 sm:p-8 border border-white/[0.08] hover:border-white/20 transition-colors flex flex-col h-full bg-[#12141C]">
                  <div className="flex justify-between items-start mb-6">
                     <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-white/[0.03] border border-white/5">
                        <industry.icon size={20} style={{ color: industry.color }} />
                     </div>
                     <span className="text-[10px] font-mono text-white/30 uppercase tracking-widest">{industry.id}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 tracking-tight" style={{ fontFamily: fonts.display }}>
                    {industry.name}
                  </h3>
                  <p className="text-white/50 text-[14px] leading-relaxed font-light mb-8 line-clamp-3">
                    {industry.desc}
                  </p>
                  <div className="mt-auto pt-6 border-t border-white/[0.05] flex justify-between items-center">
                     <span className="text-[10px] font-mono uppercase tracking-widest text-white/50 border border-white/10 px-2 py-1 rounded">
                       {industry.metric}
                     </span>
                     <div className="flex items-center gap-2 text-[12px] font-semibold text-white">
                       View <ArrowRight size={12} />
                     </div>
                  </div>
               </div>
             </Link>
           ))}
        </div>

      </div>
    </section>
  );
}
