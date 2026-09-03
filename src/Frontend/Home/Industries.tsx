"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import Link from "next/link";
import { ArrowRight, ChevronRight, Sparkles } from "lucide-react";
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
    }, 3500);
    return () => clearInterval(interval);
  }, [isHovering, isInView]);

  const activeIndustry = industryData[activeIndex];

  return (
    <section id="industries" className="hidden md:block py-12 md:py-24 relative bg-[#0A0B0F] border-t border-white/[0.02]" ref={ref}>
      {/* Background ambient lighting */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[1200px] rounded-full bg-gradient-to-b from-[#22D3EE]/[0.02] via-[#6366F1]/[0.02] to-transparent blur-[150px] pointer-events-none" />

      <div className="w-full max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header */}
        <div className="mb-10 md:mb-16 flex flex-col items-center md:items-start text-center md:text-left">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="mb-6"
          >
            <span className="glass-pill px-4 py-2 inline-flex items-center gap-2 border-glow text-white/60 uppercase tracking-[0.2em] text-[10px] md:text-[11px] font-mono font-medium shadow-[0_0_20px_rgba(34,211,238,0.1)]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#22D3EE] shadow-[0_0_8px_#22D3EE] animate-pulse" />
              Industry Applications
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] mb-5 text-white"
            style={{ fontFamily: fonts.display }}
          >
            Empowering <span className="text-transparent bg-clip-text bg-gradient-to-r from-white/60 to-white/20">Every Sector.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-white/50 max-w-2xl text-[14px] md:text-[18px] leading-[1.7] font-light"
          >
            Tailored AI architectures engineered to solve high-stakes challenges across critical global industries.
          </motion.p>
        </div>

        {/* Desktop Split Layout */}
        <div 
          className="hidden lg:grid grid-cols-12 gap-12 xl:gap-20 items-start"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          {/* Left Column: List */}
          <div className="col-span-5 flex flex-col relative z-20">
             {industryData.map((industry, idx) => {
                const isActive = activeIndex === idx;
                return (
                  <div 
                    key={industry.id}
                    onMouseEnter={() => setActiveIndex(idx)}
                    className={`relative py-4 px-6 mb-2 cursor-pointer group flex items-center justify-between rounded-2xl transition-all duration-500 ease-out ${isActive ? 'bg-white/[0.04] border border-white/[0.08] shadow-lg translate-x-2' : 'border border-transparent hover:bg-white/[0.02]'}`}
                  >
                    {/* Active line indicator */}
                    {isActive && (
                      <motion.div 
                        layoutId="activeIndicatorDesktop"
                        className="absolute left-0 top-1/4 bottom-1/4 w-[3px] rounded-r-full shadow-[0_0_12px_var(--color)]"
                        style={{ backgroundColor: activeIndustry.color, '--color': activeIndustry.color } as any}
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      />
                    )}

                    <div className="flex items-center gap-6">
                      <span className={`font-mono text-[12px] transition-colors duration-500 ${isActive ? 'text-white/80' : 'text-white/20 group-hover:text-white/40'}`}>
                        {industry.id}
                      </span>
                      <span 
                        className={`text-[17px] tracking-wide transition-colors duration-500 ${isActive ? 'text-white font-semibold' : 'text-white/40 font-medium group-hover:text-white/70'}`}
                        style={{ fontFamily: fonts.display }}
                      >
                        {industry.name}
                      </span>
                    </div>

                    <div className="flex items-center gap-3">
                      {industry.isNew && (
                         <span className="text-[9px] font-mono uppercase tracking-widest px-2.5 py-1 rounded-full border border-[#F59E0B]/30 text-[#F59E0B] bg-[#F59E0B]/10">
                           New
                         </span>
                      )}
                      <ChevronRight 
                        size={16} 
                        className={`transition-all duration-500 ${isActive ? 'text-white opacity-100 translate-x-0' : 'text-white/20 opacity-0 -translate-x-4'}`} 
                        style={isActive ? { color: activeIndustry.color } : {}}
                      />
                    </div>
                  </div>
                );
             })}
          </div>

          {/* Right Column: Detail Panel */}
          <div className="col-span-7 sticky top-32 self-start pb-12">
             {/* Dynamic background glow matching industry color */}
             <div className="absolute inset-0 opacity-20 blur-[120px] pointer-events-none transition-colors duration-1000 ease-in-out scale-110" style={{ backgroundColor: activeIndustry.color }} />
             
             <div className="glass-card rounded-[32px] border border-white/[0.08] p-6 xl:p-8 bg-[#10121A]/80 backdrop-blur-2xl overflow-hidden relative z-10 min-h-[460px] flex flex-col shadow-2xl">
                {/* Moving top gradient line */}
                <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-50" />

                <AnimatePresence mode="wait">
                   <motion.div
                     key={activeIndustry.id}
                     initial={{ opacity: 0, y: 15, filter: 'blur(8px)' }}
                     animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                     exit={{ opacity: 0, y: -15, filter: 'blur(8px)' }}
                     transition={{ duration: 0.3, ease: "easeOut" }}
                     className="relative z-10 flex flex-col h-full flex-grow"
                   >
                     <div className="flex justify-between items-start mb-5">
                       <div className="w-12 h-12 rounded-2xl flex items-center justify-center bg-white/[0.03] border border-white/[0.08] shadow-inner relative group">
                         <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />
                         <activeIndustry.icon size={24} style={{ color: activeIndustry.color }} className="drop-shadow-lg" />
                       </div>
                       
                       <div className="px-4 py-2 rounded-full border border-white/10 bg-white/[0.02] backdrop-blur-md flex items-center gap-2 shadow-[0_4px_12px_rgba(0,0,0,0.1)]">
                         <div className="relative flex h-2 w-2">
                           <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75" style={{ backgroundColor: activeIndustry.color }}></span>
                           <span className="relative inline-flex rounded-full h-2 w-2" style={{ backgroundColor: activeIndustry.color }}></span>
                         </div>
                         <span className="text-[10px] font-mono text-white/80 uppercase tracking-[0.15em] font-medium">{activeIndustry.metric}</span>
                       </div>
                     </div>

                     <h3 className="text-2xl xl:text-3xl font-bold text-white mb-3 tracking-tight leading-tight" style={{ fontFamily: fonts.display }}>
                       {activeIndustry.name}
                     </h3>

                     <p className="text-white/60 text-[14px] xl:text-[15px] leading-[1.7] font-light mb-6 max-w-lg">
                       {activeIndustry.desc}
                     </p>

                     {/* Key Use Cases - Premium Detail */}
                     {activeIndustry.useCases && (
                       <div className="mb-6 flex-grow">
                         <div className="flex items-center gap-2 mb-3">
                           <Sparkles size={14} className="text-white/40" />
                           <span className="text-[10px] font-mono text-white/40 uppercase tracking-widest">Key Intelligence</span>
                         </div>
                         <div className="grid grid-cols-1 gap-2">
                           {activeIndustry.useCases.slice(0, 3).map((uc, i) => (
                             <div key={i} className="flex items-start gap-3 px-3 py-2.5 rounded-xl bg-white/[0.02] border border-white/[0.04] hover:bg-white/[0.04] transition-colors">
                               <div className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0" style={{ backgroundColor: activeIndustry.color }} />
                               <div>
                                 <h4 className="text-[12px] font-medium text-white/90 mb-0.5">{uc.title}</h4>
                                 <p className="text-[11px] text-white/40 leading-relaxed line-clamp-1">{uc.elaboration}</p>
                               </div>
                             </div>
                           ))}
                         </div>
                       </div>
                     )}

                     <div className="mt-auto pt-5 border-t border-white/[0.08] flex flex-wrap items-center justify-between gap-4">
                       <div className="flex flex-col gap-1">
                          <span className="text-white/30 text-[10px] font-mono uppercase tracking-widest">Powered By</span>
                          <div className="flex items-center gap-2">
                            {activeIndustry.products.map((prod, i) => (
                              <span key={prod} className="text-white/90 text-[13px] font-semibold tracking-wide">
                                {prod}{i < activeIndustry.products.length - 1 && <span className="text-white/20 mx-2 font-light">/</span>}
                              </span>
                            ))}
                          </div>
                       </div>
                       
                       <Link href={`/services/${activeIndustry.slug}`}>
                         <button className="flex items-center gap-2 px-6 py-3 bg-white text-black rounded-full text-[12px] font-bold hover:scale-105 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] transition-all duration-300 group">
                           Explore Solution
                           <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                         </button>
                       </Link>
                     </div>
                   </motion.div>
                </AnimatePresence>

                {/* Decorative background icon */}
                <div className="absolute -bottom-24 -right-24 opacity-[0.02] pointer-events-none mix-blend-plus-lighter">
                  <AnimatePresence mode="wait">
                     <motion.div
                       key={`bg-${activeIndustry.id}`}
                       initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
                       animate={{ opacity: 1, scale: 1, rotate: 0 }}
                       exit={{ opacity: 0, scale: 1.1, rotate: 10 }}
                       transition={{ duration: 0.6, ease: "easeOut" }}
                     >
                       <activeIndustry.icon size={400} strokeWidth={0.5} style={{ color: activeIndustry.color }} />
                     </motion.div>
                  </AnimatePresence>
                </div>
             </div>
          </div>
        </div>

        {/* Mobile Layout (Bento Grid) */}
        <div className="lg:hidden grid grid-cols-2 gap-3 mt-8 relative z-20">
           {industryData.map((industry, idx) => {
             // Bento Grid pattern: 0 is wide, 1 & 2 are small, 3 is wide...
             const isWide = idx % 3 === 0;
             const spanClass = isWide ? "col-span-2" : "col-span-1";
             
             return (
               <Link key={industry.id} href={`/services/${industry.slug}`} className={`${spanClass} block h-full`}>
                 <div className="glass-card relative overflow-hidden rounded-[20px] p-5 border border-white/[0.08] hover:border-white/20 transition-all duration-300 flex flex-col h-full bg-[#10121A]/80 backdrop-blur-xl group">
                    <div className="absolute -top-16 -right-16 w-32 h-32 rounded-full blur-[50px] opacity-20 pointer-events-none transition-opacity group-hover:opacity-40" style={{ backgroundColor: industry.color }} />
                    
                    <div className="flex justify-between items-start mb-4 relative z-10">
                       <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-white/[0.03] border border-white/[0.08] shadow-inner">
                          <industry.icon size={18} style={{ color: industry.color }} />
                       </div>
                       <div className="flex flex-col items-end gap-1.5">
                         <span className="text-[9px] font-mono text-white/40 uppercase tracking-widest">{industry.id}</span>
                         {industry.isNew && (
                           <span className="text-[7px] font-mono uppercase tracking-widest px-2 py-0.5 rounded-full border border-[#F59E0B]/30 text-[#F59E0B] bg-[#F59E0B]/10">
                             New
                           </span>
                         )}
                       </div>
                    </div>
                    
                    <h3 className={`${isWide ? 'text-lg md:text-xl' : 'text-[14px] leading-tight'} font-bold text-white mb-2 tracking-tight relative z-10`} style={{ fontFamily: fonts.display }}>
                      {industry.name}
                    </h3>
                    
                    <p className={`text-white/50 ${isWide ? 'text-[13px] mb-5 line-clamp-3' : 'text-[11px] mb-4 line-clamp-2'} leading-relaxed font-light relative z-10 flex-grow`}>
                      {industry.desc}
                    </p>
                    
                    <div className="mt-auto pt-4 border-t border-white/[0.06] flex justify-between items-center relative z-10">
                       {isWide ? (
                         <div className="flex items-center gap-2">
                           <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: industry.color }} />
                           <span className="text-[8px] font-mono uppercase tracking-widest text-white/60">
                             {industry.metric}
                           </span>
                         </div>
                       ) : (
                         <div />
                       )}
                       <div className="flex items-center gap-1.5 text-[11px] font-semibold text-white group-hover:text-[var(--color)] transition-colors" style={{ '--color': industry.color } as any}>
                         {isWide ? 'Explore' : 'View'} <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                       </div>
                    </div>
                 </div>
               </Link>
             );
           })}
        </div>

      </div>
    </section>
  );
}

