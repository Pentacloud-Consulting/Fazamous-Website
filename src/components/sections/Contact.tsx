"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Shield, ShieldCheck, ArrowRight, Lock, CheckCircle2 } from "lucide-react";

export function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="py-12 md:py-16 relative overflow-hidden bg-[#020203]">
      
      {/* Background Dot Matrix - Orange/Amber on Bottom-Left */}
      <div 
        className="absolute -bottom-10 -left-10 w-[450px] h-[350px] pointer-events-none opacity-25"
        style={{
          backgroundImage: `radial-gradient(circle at bottom left, rgba(255, 120, 0, 0.4) 0%, transparent 60%), radial-gradient(rgba(255, 120, 0, 0.4) 1.5px, transparent 1.5px)`,
          backgroundSize: '100% 100%, 20px 20px',
        }}
      />

      {/* Background Dot Matrix - Blue/Cyan on Top-Right */}
      <div 
        className="absolute -top-10 -right-10 w-[450px] h-[350px] pointer-events-none opacity-30"
        style={{
          backgroundImage: `radial-gradient(circle at top right, rgba(0, 229, 255, 0.4) 0%, transparent 60%), radial-gradient(rgba(0, 229, 255, 0.4) 1.5px, transparent 1.5px)`,
          backgroundSize: '100% 100%, 20px 20px',
        }}
      />

      {/* Ambient background bloom */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full bg-gradient-to-r from-[#ff7800]/[0.03] via-[#00e5ff]/[0.04] to-transparent blur-[140px] pointer-events-none" />

      <div className="w-full max-w-[1150px] mx-auto px-6 md:px-12 relative z-10" ref={ref}>
        
        {/* Main Reference Card Container with Compact Height & Gradient Border */}
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.98 }}
          animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative rounded-[24px] md:rounded-[30px] bg-[#05060b]/90 backdrop-blur-2xl px-8 py-10 md:px-14 md:py-12 text-center shadow-[0_25px_70px_rgba(0,0,0,0.85)]"
          style={{
            border: "1px solid transparent",
            backgroundImage: "linear-gradient(#05060b, #05060b), linear-gradient(135deg, rgba(255,120,0,0.5) 0%, rgba(255,255,255,0.05) 50%, rgba(0,229,255,0.6) 100%)",
            backgroundOrigin: "border-box",
            backgroundClip: "padding-box, border-box"
          }}
        >

          {/* Top Floating Metallic Shield Badge */}
          <motion.div 
            initial={{ scale: 0, y: -20 }}
            animate={isInView ? { scale: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 rounded-xl bg-gradient-to-b from-[#1c2333] via-[#0d121f] to-[#05060b] border border-white/20 shadow-[0_0_25px_rgba(0,229,255,0.3),inset_0_2px_4px_rgba(255,255,255,0.3)] flex items-center justify-center cursor-pointer group"
          >
            <div className="w-9 h-9 rounded-lg bg-black/60 flex items-center justify-center border border-white/10 group-hover:border-[#00e5ff]/50 transition-colors">
              <Shield size={18} className="text-white group-hover:text-[#00e5ff] transition-colors drop-shadow-[0_0_8px_rgba(0,229,255,0.8)]" />
            </div>
          </motion.div>

          {/* Overline Badge */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/[0.03] border border-white/10 mb-4 mt-1"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#00e5ff] animate-ping" />
            <span className="text-white/40 uppercase tracking-[0.25em] text-[9px] font-mono font-medium">Get In Touch</span>
          </motion.div>

          {/* Compact Headline in One Line */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="text-2xl sm:text-4xl lg:text-5xl font-semibold tracking-tight leading-tight mb-4 text-white whitespace-nowrap"
          >
            Ready to build <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/70">the future?</span>
          </motion.h2>

          {/* Subtitle Monospace Paragraph */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-white/50 text-[13px] md:text-[14px] leading-relaxed max-w-lg mx-auto font-mono mb-7"
          >
            Connect with our enterprise team to discover how FAZAMOUS can transform your organization.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8"
          >
            {/* Primary Glowing White Pill Button */}
            <motion.button
              onClick={() => window.location.href = "mailto:contact@fazamous.com"}
              whileHover={{ scale: 1.05, boxShadow: "0 0 35px rgba(0, 229, 255, 0.6)" }}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.2 }}
              className="px-8 py-3.5 rounded-full bg-white text-black font-mono font-bold text-[12px] tracking-wider uppercase shadow-[0_0_25px_rgba(0,229,255,0.35)] flex items-center gap-2.5 transition-all cursor-pointer hover:bg-white"
            >
              <span>Request a Demo</span>
              <ArrowRight size={15} className="text-black" />
            </motion.button>

            {/* Secondary Glass Border Button */}
            <motion.button
              onClick={() => window.location.href = "mailto:sales@fazamous.com"}
              whileHover={{ scale: 1.03, borderColor: "rgba(255,255,255,0.3)", backgroundColor: "rgba(255,255,255,0.05)" }}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.2 }}
              className="px-8 py-3.5 rounded-full bg-white/[0.02] border border-white/15 text-white font-mono font-medium text-[12px] tracking-wider uppercase backdrop-blur-md transition-all cursor-pointer"
            >
              Enterprise Sales
            </motion.button>
          </motion.div>

          {/* Compliance & Trust Badges */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="pt-6 border-t border-white/[0.06] flex flex-wrap items-center justify-center gap-6 md:gap-10 text-[10px] text-white/40 uppercase tracking-[0.2em] font-mono"
          >
            <div className="flex items-center gap-1.5 hover:text-white transition-colors cursor-default">
              <ShieldCheck size={13} className="text-[#00e5ff]" />
              <span>SOC 2 Certified</span>
            </div>
            
            <div className="flex items-center gap-1.5 hover:text-white transition-colors cursor-default">
              <Lock size={13} className="text-[#8B5CF6]" />
              <span>ISO 27001</span>
            </div>

            <div className="flex items-center gap-1.5 hover:text-white transition-colors cursor-default">
              <CheckCircle2 size={13} className="text-[#10B981]" />
              <span>GDPR Compliant</span>
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}
