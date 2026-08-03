"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useInView, useScroll, useTransform, useSpring, useMotionValue, useMotionTemplate } from "framer-motion";
import Link from "next/link";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { Contact } from "@/components/sections/Contact";
import { fonts } from "@/styles/tokens";
import { ArrowRight, Activity, Shield, Cpu, Target, Network, Layers, Zap, Brain, Orbit, LineChart, Database, Lock } from "lucide-react";

// --- Data ---
const companyFacts = [
  { label: "Founded", value: "2019", note: "// TODO: confirm", span: "md:col-span-2", icon: Target },
  { label: "Team Size", value: "120+", span: "md:col-span-1", icon: Network },
  { label: "HQ", value: "San Francisco", span: "md:col-span-1", icon: Layers },
  { label: "Engineering Office", value: "Zurich", span: "md:col-span-2", icon: Cpu },
  { label: "Industries Served", value: "10", span: "md:col-span-1", icon: Activity },
  { label: "Active Products", value: "11", span: "md:col-span-1", icon: Zap },
  { label: "Enterprise Clients", value: "50+", note: "// TODO: confirm", span: "md:col-span-2", icon: Shield },
];

const values = [
  {
    title: "Multi-Industry Architecture",
    desc: "We don't build one product and force-fit it across domains. Every module — from TriageAI in telecom to MedVision in healthcare — is engineered with domain-specific data models, compliance requirements, and operational workflows baked in from day one.",
    accent: "#6366F1",
    icon: Layers,
  },
  {
    title: "Autonomous by Default",
    desc: "Our platforms don't just surface insights for humans to act on — they execute. From Aegis neutralising fraud in sub-millisecond response windows to CodeMorph autonomously rewriting legacy codebases, autonomy is the baseline, not a roadmap item.",
    accent: "#22D3EE",
    icon: Zap,
  },
  {
    title: "Enterprise-Scale Reliability",
    desc: "Every platform operates at the throughput and uptime demands of Fortune 500 infrastructure. DataPulse processes 50GB/sec of pipeline telemetry. SignalIQ monitors 2M+ network edge nodes. These aren't demo numbers — they're production guarantees.",
    accent: "#10B981",
    icon: Shield,
  },
  {
    title: "Measurable Outcomes",
    desc: "We tie every engagement to quantifiable business metrics: MTTR reduction, fraud dollars stopped, cost-per-conversion lift. If a deployment doesn't produce measurable ROI, we don't ship it.",
    accent: "#F59E0B",
    icon: Target,
  },
];

// --- Animated Counter Component ---
function Counter({ value }: { value: string }) {
  const isNumber = !isNaN(parseInt(value));
  if (!isNumber) return <span>{value}</span>;
  
  const numericValue = parseInt(value);
  const suffix = value.replace(/[0-9]/g, '');
  
  return (
    <div className="flex items-center">
      <motion.span
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, type: "spring" }}
      >
        {numericValue}
      </motion.span>
      {suffix && <span>{suffix}</span>}
    </div>
  );
}


// --- Bento Card Component with Spotlight & Tilt ---
function BentoCard({ children, className = "", gradient = "rgba(255,255,255,0.06)" }: { children: React.ReactNode, className?: string, gradient?: string }) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springConfig = { damping: 20, stiffness: 300, mass: 0.5 };
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [2, -2]), springConfig);
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-2, 2]), springConfig);

  function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top, width, height } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
    x.set((clientX - left) / width - 0.5);
    y.set((clientY - top) / height - 0.5);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      style={{ rotateX, rotateY, transformPerspective: 1000 }}
      whileHover={{ y: -5 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`group relative rounded-[24px] border border-white/5 bg-[#080808] overflow-hidden shadow-[0_20px_40px_rgba(0,0,0,0.6)] ${className}`}
    >
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-[24px] opacity-0 transition duration-500 group-hover:opacity-100 z-10"
        style={{
          background: useMotionTemplate`radial-gradient(400px circle at ${mouseX}px ${mouseY}px, ${gradient}, transparent 80%)`,
        }}
      />
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.05] pointer-events-none mix-blend-overlay" />
      <div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] to-transparent pointer-events-none z-0" />
      {children}
    </motion.div>
  );
}

export default function AboutPage() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  return (
    <main ref={containerRef} className="relative min-h-screen bg-[#05060A] text-white selection:bg-[#6366F1]/30 overflow-hidden" style={{ fontFamily: fonts.sans }}>
      <Navbar />

      {/* ─── Global Background Atmosphere ─── */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        {/* Subtle noise */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.8%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }} />
        
        {/* Animated Orbs */}
        <motion.div 
          style={{ y: backgroundY }}
          className="absolute top-0 left-[-10%] w-[50%] h-[50vh] bg-gradient-to-br from-[#6366F1]/10 to-[#8B5CF6]/10 blur-[150px] rounded-full mix-blend-screen" 
        />
        <motion.div 
          style={{ y: backgroundY }}
          className="absolute top-[40%] right-[-10%] w-[40%] h-[60vh] bg-gradient-to-br from-[#22D3EE]/10 to-[#4F46E5]/10 blur-[150px] rounded-full mix-blend-screen" 
        />
      </div>

      <div className="relative z-10">
        {/* ═══════════════════════════════════════════════════════════════════
             ULTRA-PREMIUM CINEMATIC HERO — $10B AI COMPANY
           ═══════════════════════════════════════════════════════════════════ */}
        <section className="relative min-h-screen flex items-center overflow-hidden">
          
          {/* ▓▓▓ LAYER 0: Cinematic Background Environment ▓▓▓ */}
          <div className="absolute inset-0 pointer-events-none z-0">
            {/* Deep abyss base */}
            <div className="absolute inset-0 bg-[#04050A]" />
            
            {/* Volumetric spotlight from top-center */}
            <div className="absolute top-[-30%] left-[20%] w-[60%] h-[80vh]" style={{ background: "conic-gradient(from 180deg at 50% 0%, transparent 40%, rgba(90,168,255,0.06) 48%, rgba(138,107,255,0.04) 52%, transparent 60%)" }} />
            
            {/* Primary aurora — electric blue */}
            <motion.div
              animate={{ opacity: [0.12, 0.22, 0.12], x: [0, 30, 0], scale: [1, 1.06, 1] }}
              transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-[-15%] left-[5%] w-[55%] h-[65vh] rounded-full mix-blend-screen"
              style={{ background: "radial-gradient(ellipse at center, rgba(90,168,255,0.18) 0%, rgba(138,107,255,0.06) 50%, transparent 75%)" }}
            />
            
            {/* Secondary aurora — violet */}
            <motion.div
              animate={{ opacity: [0.08, 0.18, 0.08], x: [0, -20, 0], y: [0, 15, 0] }}
              transition={{ duration: 16, repeat: Infinity, ease: "easeInOut", delay: 3 }}
              className="absolute bottom-[-10%] right-[-8%] w-[50%] h-[55vh] rounded-full mix-blend-screen"
              style={{ background: "radial-gradient(ellipse at center, rgba(138,107,255,0.15) 0%, rgba(111,229,255,0.05) 50%, transparent 75%)" }}
            />
            
            {/* Atmospheric fog layer */}
            <motion.div
              animate={{ x: [-60, 60, -60], opacity: [0.04, 0.08, 0.04] }}
              transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-[20%] left-[-10%] w-[120%] h-[40vh] rounded-full"
              style={{ background: "linear-gradient(90deg, transparent, rgba(90,168,255,0.04), rgba(138,107,255,0.03), transparent)" }}
            />
            
            {/* Floating gradient blobs */}
            <motion.div
              animate={{ x: [0, 50, 0], y: [0, -40, 0], scale: [1, 1.1, 1] }}
              transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-[35%] right-[25%] w-[350px] h-[350px] bg-[#8A6BFF]/8 blur-[140px] rounded-full"
            />
            <motion.div
              animate={{ x: [0, -30, 0], y: [0, 25, 0] }}
              transition={{ duration: 14, repeat: Infinity, ease: "easeInOut", delay: 5 }}
              className="absolute bottom-[20%] left-[15%] w-[300px] h-[300px] bg-[#5AA8FF]/6 blur-[120px] rounded-full"
            />
            
            {/* Dot-grid texture */}
            <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.7) 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
            
            {/* Noise grain */}
            <div className="absolute inset-0 opacity-[0.04] mix-blend-overlay" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 512 512%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22n%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%224%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23n)%22/%3E%3C/svg%3E")' }} />
            
            {/* Cinematic vignette */}
            <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 65% 55% at 50% 45%, transparent 0%, rgba(4,5,10,0.4) 60%, #04050A 100%)" }} />
            
            {/* Bottom gradient fade */}
            <div className="absolute bottom-0 left-0 right-0 h-[200px] bg-gradient-to-t from-[#05060A] to-transparent" />
          </div>

          {/* ▓▓▓ LAYER 1: Main Content ▓▓▓ */}
          <div className="relative z-10 w-full max-w-[1440px] mx-auto px-6 md:px-12 pt-40 pb-24">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-center">

              {/* ═══ LEFT COLUMN — Editorial Copy (5 cols) ═══ */}
              <div className="lg:col-span-5 flex flex-col relative">
                
                {/* Floating Glass Badge */}
                <motion.div
                  initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                  className="mb-8"
                >
                  <span className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full border border-white/[0.06] shadow-[0_4px_24px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.04)]" style={{ background: "linear-gradient(135deg, rgba(90,168,255,0.06) 0%, rgba(138,107,255,0.03) 100%)", backdropFilter: "blur(24px)" }}>
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#5AA8FF] opacity-50" />
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-[#5AA8FF] shadow-[0_0_10px_rgba(90,168,255,0.9)]" />
                    </span>
                    <span className="text-[10px] uppercase tracking-[0.22em] text-white/50 font-medium" style={{ fontFamily: fonts.mono }}>Enterprise AI Platform</span>
                  </span>
                </motion.div>
                
                {/* ── Massive Editorial Headline ── */}
                <div className="relative mb-10">
                  {/* Volumetric glow behind gradient words */}
                  <div className="absolute inset-0 pointer-events-none select-none" aria-hidden="true">
                    <div className="text-[clamp(2.5rem,4.5vw,4.5rem)] font-bold tracking-[-0.06em] leading-[1.05] text-transparent bg-clip-text bg-gradient-to-r from-[#5AA8FF] via-[#6FE5FF] to-[#8A6BFF] blur-[50px] opacity-35" style={{ fontFamily: fonts.display }}>
                      We build autonomous enterprise intelligence.
                    </div>
                  </div>
                  
                  {/* Line 1 */}
                  <div className="overflow-hidden">
                    <motion.div
                      initial={{ y: "110%", rotateX: 15 }}
                      animate={{ y: "0%", rotateX: 0 }}
                      transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <span className="block text-[clamp(2.5rem,4.5vw,4.5rem)] font-bold tracking-[-0.06em] leading-[1.05] text-white" style={{ fontFamily: fonts.display }}>
                        We build
                      </span>
                    </motion.div>
                  </div>
                  
                  {/* Line 2 */}
                  <div className="overflow-hidden">
                    <motion.div
                      initial={{ y: "110%", rotateX: 15 }}
                      animate={{ y: "0%", rotateX: 0 }}
                      transition={{ duration: 1, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <span className="block text-[clamp(2.5rem,4.5vw,4.5rem)] font-bold tracking-[-0.06em] leading-[1.05] text-white" style={{ fontFamily: fonts.display }}>
                        autonomous
                      </span>
                    </motion.div>
                  </div>
                  
                  {/* Line 3 — Gradient */}
                  <div className="overflow-hidden">
                    <motion.div
                      initial={{ y: "110%", rotateX: 15 }}
                      animate={{ y: "0%", rotateX: 0 }}
                      transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <span className="block text-[clamp(2.5rem,4.5vw,4.5rem)] font-bold tracking-[-0.06em] leading-[1.05]" style={{ fontFamily: fonts.display, backgroundImage: "linear-gradient(135deg, #5AA8FF 0%, #6FE5FF 35%, #8A6BFF 70%, #5AA8FF 100%)", backgroundSize: "200% 200%", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", animation: "gradientFlow 4s ease infinite" }}>
                        enterprise
                      </span>
                    </motion.div>
                  </div>
                  
                  {/* Line 4 — Gradient */}
                  <div className="overflow-hidden">
                    <motion.div
                      initial={{ y: "110%", rotateX: 15 }}
                      animate={{ y: "0%", rotateX: 0 }}
                      transition={{ duration: 1, delay: 0.65, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <span className="block text-[clamp(2.5rem,4.5vw,4.5rem)] font-bold tracking-[-0.06em] leading-[1.05]" style={{ fontFamily: fonts.display, backgroundImage: "linear-gradient(135deg, #8A6BFF 0%, #5AA8FF 40%, #6FE5FF 80%, #8A6BFF 100%)", backgroundSize: "200% 200%", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", animation: "gradientFlow 4s ease infinite", animationDelay: "0.5s" }}>
                        intelligence.
                      </span>
                    </motion.div>
                  </div>
                </div>
                
                {/* Description */}
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.9, delay: 0.9 }}
                  className="text-white/40 text-[17px] md:text-[18px] leading-[1.8] mb-12 max-w-[480px] font-light"
                  style={{ fontFamily: fonts.body }}
                >
                  Fazamous exists to close the gap between what enterprise data knows
                  and what enterprise teams can act on — by deploying AI systems that
                  reason, decide, and execute at machine speed.
                </motion.p>
                
                {/* Premium CTAs */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.9, delay: 1.1 }}
                  className="flex flex-wrap items-center gap-5"
                >
                  {/* Primary — Liquid glass white */}
                  <Link href="/contact" className="group relative px-10 py-4.5 rounded-full overflow-hidden transition-all duration-500 hover:scale-[1.04] active:scale-[0.97]">
                    <div className="absolute inset-0 bg-white rounded-full shadow-[0_0_40px_rgba(90,168,255,0.15)]" />
                    <div className="absolute inset-0 rounded-full bg-gradient-to-b from-white/40 to-transparent opacity-60 pointer-events-none" />
                    <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 shadow-[0_0_50px_rgba(90,168,255,0.4),0_0_100px_rgba(138,107,255,0.15)]" />
                    <span className="relative z-10 flex items-center gap-3 text-[#04050A] font-bold text-[13px] tracking-[0.08em] uppercase" style={{ fontFamily: fonts.mono }}>
                      Talk to an Expert
                      <motion.span animate={{ x: [0, 5, 0] }} transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}>
                        <ArrowRight size={15} strokeWidth={2.5} />
                      </motion.span>
                    </span>
                  </Link>
                  
                  {/* Secondary — Crystal glass */}
                  <Link href="#snapshot" className="group relative px-9 py-4.5 rounded-full overflow-hidden transition-all duration-500 hover:scale-[1.03]">
        {/* Animated gradient border */}
                    <div className="absolute inset-0 rounded-full overflow-hidden">
                      <motion.div animate={{ rotate: 360 }} transition={{ duration: 6, repeat: Infinity, ease: "linear" }} className="absolute -inset-[100%] origin-center" style={{ background: "conic-gradient(from 0deg, transparent 60%, rgba(90,168,255,0.5) 75%, rgba(138,107,255,0.5) 85%, rgba(111,229,255,0.5) 95%, transparent 100%)" }} />
                      <div className="absolute inset-[1px] rounded-full bg-[#04050A]/90 backdrop-blur-xl" />
                    </div>
                    <span className="relative z-10 flex items-center gap-3 text-white/80 font-medium text-[13px] tracking-[0.08em] uppercase group-hover:text-white transition-colors" style={{ fontFamily: fonts.mono }}>
                      <Cpu size={14} className="text-[#6FE5FF] group-hover:rotate-90 transition-transform duration-700" />
                      View Snapshot
                    </span>
                  </Link>
                </motion.div>
              </div>

              {/* ═══ RIGHT COLUMN — AI Energy Core (7 cols) ═══ */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
                className="lg:col-span-7 relative w-full h-[650px] mx-auto hidden lg:flex items-center justify-center"
                style={{ perspective: "1500px" }}
              >
                {/* ── 1. Deep Space Ambient Aura ── */}
                <div className="absolute w-[100%] h-[100%] bg-[radial-gradient(circle,rgba(111,229,255,0.15)_0%,rgba(138,107,255,0.05)_40%,transparent_70%)] blur-[60px] pointer-events-none z-0" />
                
                {/* ── 2. Holographic Planetary Ring (Tilted 3D Orbit) ── */}
                <motion.div 
                  animate={{ rotateZ: 360 }}
                  transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                  className="absolute w-[600px] h-[600px] rounded-full border border-white/[0.03] z-10 flex items-center justify-center"
                  style={{ transform: "rotateX(70deg) rotateY(-15deg)", transformStyle: "preserve-3d" }}
                >
                  {/* Subtle repeating tick marks */}
                  <div className="absolute inset-[-10px] rounded-full border border-white/[0.02]" style={{ background: "repeating-conic-gradient(from 0deg, transparent 0deg, transparent 4deg, rgba(255,255,255,0.05) 4.1deg, rgba(255,255,255,0.05) 4.2deg)" }} />
                  
                  {/* Glowing orbital scanner sweep */}
                  <motion.div 
                    animate={{ rotateZ: -360 }}
                    transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0 rounded-full"
                    style={{ background: "conic-gradient(from 0deg, transparent 70%, rgba(111,229,255,0.1) 90%, rgba(111,229,255,0.4) 100%)" }}
                  />

                  {/* Orbital Nodes */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-[#6FE5FF] shadow-[0_0_20px_#6FE5FF]" />
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-4 h-4 rounded-full bg-[#8A6BFF] shadow-[0_0_20px_#8A6BFF]" />
                  <div className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-white shadow-[0_0_10px_white]" />
                </motion.div>

                {/* ── 3. Intersecting 3D Glass Containment Rings ── */}
                <div className="absolute z-20 w-[380px] h-[380px] flex items-center justify-center" style={{ transformStyle: "preserve-3d" }}>
                  {/* Ring 1 - Vertical */}
                  <motion.div 
                    animate={{ rotateX: [0, 360], rotateY: [0, 360] }} 
                    transition={{ duration: 25, repeat: Infinity, ease: "linear" }} 
                    className="absolute w-[380px] h-[380px] rounded-full border border-[#5AA8FF]/30 bg-[#5AA8FF]/[0.02] backdrop-blur-[2px] shadow-[inset_0_0_20px_rgba(90,168,255,0.1)] flex items-center justify-center"
                    style={{ transformStyle: "preserve-3d" }}
                  >
                     <div className="w-full h-full rounded-full border border-white/10 scale-[0.95]" />
                  </motion.div>

                  {/* Ring 2 - Horizontal */}
                  <motion.div 
                    animate={{ rotateX: [0, -360], rotateY: [0, 360] }} 
                    transition={{ duration: 35, repeat: Infinity, ease: "linear" }} 
                    className="absolute w-[340px] h-[340px] rounded-full border border-[#8A6BFF]/30 bg-[#8A6BFF]/[0.02] backdrop-blur-[2px] shadow-[inset_0_0_20px_rgba(138,107,255,0.1)] flex items-center justify-center"
                    style={{ transformStyle: "preserve-3d", transform: "rotateZ(45deg)" }}
                  >
                     <div className="w-full h-full rounded-full border border-white/10 scale-[0.95]" />
                  </motion.div>

                  {/* Ring 3 - Diagonal */}
                  <motion.div 
                    animate={{ rotateX: [0, 360], rotateY: [0, -360] }} 
                    transition={{ duration: 30, repeat: Infinity, ease: "linear" }} 
                    className="absolute w-[300px] h-[300px] rounded-full border border-[#6FE5FF]/30 bg-[#6FE5FF]/[0.02] backdrop-blur-[2px] shadow-[inset_0_0_20px_rgba(111,229,255,0.1)] flex items-center justify-center"
                    style={{ transformStyle: "preserve-3d", transform: "rotateZ(-45deg)" }}
                  >
                     <div className="w-full h-full rounded-full border border-white/10 scale-[0.95]" />
                  </motion.div>
                </div>

                {/* ── 4. The Fluid Morphing Core (Apple Intelligence Style) ── */}
                <div className="absolute z-30 w-[240px] h-[240px] flex items-center justify-center pointer-events-none">
                  {/* Layer 1: Base color blob */}
                  <motion.div
                    animate={{ 
                      borderRadius: ["40% 60% 70% 30% / 40% 50% 60% 50%", "60% 40% 30% 70% / 60% 30% 70% 40%", "40% 60% 70% 30% / 40% 50% 60% 50%"],
                      rotate: [0, 90, 0],
                      scale: [1, 1.05, 1]
                    }}
                    transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute inset-0 bg-gradient-to-tr from-[#5AA8FF] via-[#8A6BFF] to-[#6FE5FF] blur-[15px] opacity-80"
                  />
                  
                  {/* Layer 2: Intense inner glow (counter-rotating) */}
                  <motion.div
                    animate={{ 
                      borderRadius: ["60% 40% 30% 70% / 60% 30% 70% 40%", "40% 60% 70% 30% / 40% 50% 60% 50%", "60% 40% 30% 70% / 60% 30% 70% 40%"],
                      rotate: [0, -90, 0],
                      scale: [0.8, 0.9, 0.8]
                    }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute inset-[10%] bg-gradient-to-bl from-white via-[#6FE5FF] to-[#8A6BFF] blur-[10px] mix-blend-overlay"
                  />

                  {/* Layer 3: Crystal shell */}
                  <div className="absolute inset-[5%] rounded-full bg-white/[0.05] backdrop-blur-md border border-white/20 shadow-[inset_0_0_40px_rgba(255,255,255,0.4),0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden">
                     {/* Glass Reflection */}
                     <div className="absolute top-[-20%] left-[-20%] w-[140%] h-[140%] bg-gradient-to-br from-white/40 via-transparent to-transparent opacity-50 rotate-[-15deg]" />
                  </div>

                  {/* Layer 4: The Central Spark */}
                  <motion.div
                    animate={{ scale: [1, 1.2, 1], opacity: [0.8, 1, 0.8] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute z-40 text-white drop-shadow-[0_0_20px_white]"
                  >
                    <Zap size={48} strokeWidth={1.5} />
                  </motion.div>
                </div>

                {/* ── 5. Floating UI Data Panels (Premium Glass) ── */}
                <motion.div 
                  animate={{ y: [-15, 15, -15] }} 
                  transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }} 
                  className="absolute top-[15%] left-[5%] z-40"
                >
                  <div className="px-5 py-3 rounded-xl bg-[#04050a]/60 backdrop-blur-2xl border border-white/10 shadow-[0_20px_40px_rgba(0,0,0,0.8)] relative overflow-hidden group cursor-pointer hover:bg-white/[0.05] transition-colors">
                    <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="flex items-center gap-4">
                      <div className="w-8 h-8 rounded-full border border-[#6FE5FF]/30 bg-[#6FE5FF]/10 flex items-center justify-center">
                         <Activity size={14} className="text-[#6FE5FF]" />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-[10px] text-white/50 font-mono uppercase tracking-widest">Neural Flow</span>
                        <span className="text-sm text-white font-semibold">99.8% Optimal</span>
                      </div>
                    </div>
                  </div>
                </motion.div>

                <motion.div 
                  animate={{ y: [15, -15, 15] }} 
                  transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 1 }} 
                  className="absolute bottom-[20%] right-[5%] z-40"
                >
                  <div className="px-5 py-3 rounded-xl bg-[#04050a]/60 backdrop-blur-2xl border border-white/10 shadow-[0_20px_40px_rgba(0,0,0,0.8)] relative overflow-hidden group cursor-pointer hover:bg-white/[0.05] transition-colors">
                    <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="flex items-center gap-4">
                      <div className="w-8 h-8 rounded-full border border-[#8A6BFF]/30 bg-[#8A6BFF]/10 flex items-center justify-center">
                         <Database size={14} className="text-[#8A6BFF]" />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-[10px] text-white/50 font-mono uppercase tracking-widest">Global Sync</span>
                        <span className="text-sm text-white font-semibold">42ms Latency</span>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* ── 6. Ambient Floating Data Dust ── */}
                <div className="absolute inset-0 z-50 pointer-events-none overflow-hidden rounded-full">
                  {[...Array(12)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 100, x: Math.random() * 400 - 200 }}
                      animate={{ 
                        opacity: [0, 1, 0], 
                        y: -300, 
                        x: Math.random() * 400 - 200 
                      }}
                      transition={{ 
                        duration: 10 + Math.random() * 10, 
                        repeat: Infinity, 
                        delay: Math.random() * 10,
                        ease: "linear"
                      }}
                      className="absolute left-1/2 bottom-1/4 w-1 h-1 rounded-full bg-white shadow-[0_0_10px_white]"
                      style={{ filter: `blur(${Math.random()}px)` }}
                    />
                  ))}
                </div>

              </motion.div>

            </div>
          </div>
          
          {/* Gradient keyframe for flowing text */}
          <style jsx>{`
            @keyframes gradientFlow {
              0% { background-position: 0% 50%; }
              50% { background-position: 100% 50%; }
              100% { background-position: 0% 50%; }
            }
          `}</style>
        </section>

        {/* ─── Inter-section Separator ─── */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent my-10" />

        {/* ─── Company Snapshot (Ultra-Premium Bento Grid) ─── */}
        <section id="snapshot" className="px-6 md:px-12 py-24 max-w-[1300px] mx-auto relative">
          {/* Ambient Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-[radial-gradient(circle,rgba(111,229,255,0.05)_0%,transparent_70%)] blur-[80px] pointer-events-none" />

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="mb-16 text-center relative z-10"
          >
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-white" style={{ fontFamily: fonts.display }}>
              Company Snapshot
            </h2>
            <p className="text-white/40 text-[16px] max-w-md mx-auto font-light" style={{ fontFamily: fonts.body }}>
              The scale at which we operate to deliver uninterrupted enterprise intelligence.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[200px] relative z-10">
            {/* 1. Founded (Wide) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
              className="md:col-span-2 row-span-1 rounded-3xl border border-white/10 bg-[#04050a]/80 backdrop-blur-md overflow-hidden relative group p-8 flex flex-col justify-between hover:bg-white/[0.02] transition-colors shadow-[0_8px_32px_rgba(0,0,0,0.4)]"
            >
              <div className="absolute top-0 right-0 w-[50%] h-full opacity-30 mix-blend-screen pointer-events-none">
                 <div className="absolute -right-20 -top-20 w-64 h-64 rounded-full border-[2px] border-white/10 border-dashed animate-[spin_30s_linear_infinite]" />
                 <div className="absolute -right-10 -top-10 w-48 h-48 rounded-full border-[1px] border-[#6FE5FF]/20 animate-[spin_20s_linear_infinite_reverse]" />
              </div>
              <div className="flex items-center gap-3 text-white/50 mb-2">
                <Target size={18} /> <span className="text-xs uppercase tracking-widest font-mono">Founded</span>
              </div>
              <div>
                <div className="text-6xl font-bold tracking-tighter text-white leading-none mb-1"><Counter value="2019" /></div>
                <div className="text-sm text-white/40">Inception of Fazamous Core</div>
              </div>
            </motion.div>

            {/* 2. Team Size (Square) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}
              className="md:col-span-1 row-span-1 rounded-3xl border border-white/10 bg-[#04050a]/80 backdrop-blur-md overflow-hidden relative group p-8 flex flex-col justify-between hover:bg-white/[0.02] transition-colors shadow-[0_8px_32px_rgba(0,0,0,0.4)]"
            >
               <div className="flex items-center gap-3 text-[#5AA8FF]">
                <Network size={18} /> <span className="text-xs uppercase tracking-widest font-mono text-white/50">Team</span>
              </div>
              <div>
                <div className="text-5xl font-bold tracking-tighter text-white leading-none mb-2"><Counter value="120" />+</div>
                <div className="text-sm text-[#5AA8FF] font-medium leading-tight mt-1">Engineers &<br/>Researchers</div>
              </div>
            </motion.div>

            {/* 3. San Francisco HQ (Tall) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}
              className="md:col-span-1 row-span-2 rounded-3xl border border-white/10 bg-[#04050a]/80 backdrop-blur-md overflow-hidden relative group p-8 flex flex-col hover:bg-white/[0.02] transition-colors shadow-[0_8px_32px_rgba(0,0,0,0.4)]"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-[#8A6BFF]/10 to-transparent opacity-50 pointer-events-none" />
              <div className="absolute top-0 right-0 w-full h-[50%] bg-[radial-gradient(circle_at_top_right,rgba(138,107,255,0.2),transparent_70%)] pointer-events-none" />
              
              <div className="flex items-center gap-3 text-[#8A6BFF] mb-auto relative z-10">
                <Layers size={18} /> <span className="text-xs uppercase tracking-widest font-mono">Headquarters</span>
              </div>
              <div className="relative z-10 mt-12">
                <div className="w-12 h-12 rounded-full bg-[#8A6BFF]/20 flex items-center justify-center mb-6 border border-[#8A6BFF]/30">
                  <div className="w-3 h-3 rounded-full bg-[#8A6BFF] shadow-[0_0_15px_#8A6BFF] animate-pulse" />
                </div>
                <div className="text-4xl font-bold tracking-tighter text-white leading-[1.1] mb-2">San<br/>Francisco</div>
                <div className="text-sm text-white/40">Global Operations Center</div>
              </div>
            </motion.div>

            {/* 4. Zurich Eng (Square) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.3 }}
              className="md:col-span-1 row-span-1 rounded-3xl border border-white/10 bg-[#04050a]/80 backdrop-blur-md overflow-hidden relative group p-8 flex flex-col justify-between hover:bg-white/[0.02] transition-colors shadow-[0_8px_32px_rgba(0,0,0,0.4)]"
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(90,168,255,0.15),transparent_60%)] pointer-events-none" />
              <div className="flex items-center gap-3 text-[#5AA8FF] mb-auto relative z-10">
                <Cpu size={18} /> <span className="text-xs uppercase tracking-widest font-mono text-white/50">Engineering</span>
              </div>
              <div className="relative z-10">
                <div className="text-4xl font-bold tracking-tighter text-white leading-none mb-1">Zurich</div>
                <div className="text-sm text-[#5AA8FF] mt-1 font-medium">AI Research Hub</div>
              </div>
            </motion.div>

            {/* 5. Industries (Square) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.4 }}
              className="md:col-span-1 row-span-1 rounded-3xl border border-white/10 bg-[#04050a]/80 backdrop-blur-md overflow-hidden relative group p-8 flex flex-col justify-between hover:bg-white/[0.02] transition-colors shadow-[0_8px_32px_rgba(0,0,0,0.4)]"
            >
              <div className="flex items-center gap-3 text-white/50">
                <Activity size={18} /> <span className="text-xs uppercase tracking-widest font-mono">Industries</span>
              </div>
              <div>
                <div className="text-5xl font-bold tracking-tighter text-white leading-none mb-2"><Counter value="10" /></div>
                <div className="text-sm text-white/40 mt-1">Sectors Transformed</div>
              </div>
            </motion.div>

            {/* 6. Active Products (Square) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.5 }}
              className="md:col-span-1 row-span-1 rounded-3xl border border-white/10 bg-[#04050a]/80 backdrop-blur-md overflow-hidden relative group p-8 flex flex-col justify-between hover:bg-white/[0.02] transition-colors shadow-[0_8px_32px_rgba(0,0,0,0.4)]"
            >
              <div className="absolute right-8 top-8 flex items-end gap-1.5 opacity-50 pointer-events-none">
                 <motion.div animate={{ height: [12, 24, 12] }} transition={{ duration: 1.5, repeat: Infinity }} className="w-1.5 bg-[#6FE5FF] rounded-full" />
                 <motion.div animate={{ height: [20, 10, 20] }} transition={{ duration: 2, repeat: Infinity }} className="w-1.5 bg-[#6FE5FF] rounded-full" />
                 <motion.div animate={{ height: [15, 28, 15] }} transition={{ duration: 1.8, repeat: Infinity }} className="w-1.5 bg-[#6FE5FF] rounded-full" />
              </div>
              <div className="flex items-center gap-3 text-[#6FE5FF]">
                <Zap size={18} /> <span className="text-xs uppercase tracking-widest font-mono text-white/50">Products</span>
              </div>
              <div>
                <div className="text-5xl font-bold tracking-tighter text-white leading-none mb-2"><Counter value="11" /></div>
                <div className="text-sm text-[#6FE5FF] font-medium mt-1">Deployed Solutions</div>
              </div>
            </motion.div>

            {/* 7. Enterprise Clients (Wide Banner) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.6 }}
              className="md:col-span-4 row-span-1 min-h-[160px] rounded-3xl border border-[#6FE5FF]/30 bg-[#04050a]/90 backdrop-blur-md overflow-hidden relative group p-8 flex flex-col md:flex-row md:items-center justify-between shadow-[0_0_40px_rgba(111,229,255,0.1)]"
            >
              {/* Animated scanning light */}
              <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent,rgba(111,229,255,0.1),transparent)] -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out pointer-events-none" />
              
              <div className="flex items-center gap-8 relative z-10 w-full">
                <div className="w-20 h-20 shrink-0 rounded-2xl bg-gradient-to-br from-[#6FE5FF]/20 to-[#8A6BFF]/20 flex items-center justify-center border border-[#6FE5FF]/30 shadow-[inset_0_0_20px_rgba(111,229,255,0.2)]">
                  <Shield size={32} className="text-[#6FE5FF]" />
                </div>
                <div className="flex-1 flex flex-col md:flex-row md:items-center justify-between">
                  <div>
                    <div className="text-sm uppercase tracking-widest text-[#6FE5FF] font-mono font-bold mb-2 flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#6FE5FF] animate-pulse" /> Global Scale
                    </div>
                    <div className="text-4xl md:text-5xl font-bold text-white tracking-tight">Trusted by <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6FE5FF] to-[#8A6BFF]"><Counter value="50" />+ Enterprise Clients</span></div>
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
        </section>

        {/* ─── Why Choose Fazamous (Compact Premium WOW Grid) ─── */}
        <section className="px-6 md:px-12 py-24 max-w-[1200px] mx-auto relative z-20">
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="mb-12 text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4" style={{ fontFamily: fonts.display }}>
              Why Choose Fazamous?
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            
            {/* CARD 1: Persistent Context (Wide) */}
            <BentoCard className="md:col-span-2 min-h-[320px] flex flex-col md:flex-row p-8" gradient="rgba(139,92,246,0.1)">
              <div className="relative z-20 md:w-1/2 flex flex-col justify-center">
                <h3 className="text-[26px] font-bold text-white mb-3 tracking-tight" style={{ fontFamily: fonts.display }}>Persistent Context</h3>
                <p className="text-[#a0a0a0] text-[15px] leading-relaxed max-w-sm">
                  Long-term memory lets our AI agents retain <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#a78bfa] to-[#e879f9]">institutional knowledge</span>, collaborate, and evolve with every interaction.
                </p>
              </div>
              
              <div className="relative z-10 md:w-1/2 h-[180px] md:h-full flex items-center justify-center mt-6 md:mt-0 pointer-events-none">
                <div className="relative w-full h-full flex flex-col items-center justify-center translate-y-4 md:translate-y-8">
                  <motion.div animate={{ y: [-4, 4, -4] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} className="absolute z-40 top-[-20px] md:top-0">
                    <Brain size={40} strokeWidth={1.5} className="text-[#a78bfa] drop-shadow-[0_0_15px_rgba(167,139,250,0.8)]" />
                  </motion.div>
                  <div className="relative w-48 h-48 -translate-y-8" style={{ transform: "rotateX(60deg) rotateZ(-45deg)", transformStyle: "preserve-3d" }}>
                    <motion.div animate={{ translateZ: [0, 8, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.2 }} className="absolute inset-0 border border-[#8B5CF6]/50 bg-[#8B5CF6]/10 rounded-2xl shadow-[inset_0_0_15px_rgba(139,92,246,0.2),0_8px_20px_rgba(139,92,246,0.3)] backdrop-blur-md" />
                    <motion.div animate={{ translateZ: [-20, -12, -20] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.1 }} className="absolute inset-[-10px] border border-[#8B5CF6]/30 bg-[#8B5CF6]/5 rounded-3xl" />
                    <motion.div animate={{ translateZ: [-40, -32, -40] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} className="absolute inset-[-20px] border border-[#8B5CF6]/10 bg-[#8B5CF6]/5 rounded-[32px] shadow-[0_15px_30px_rgba(0,0,0,0.6)]" />
                  </div>
                </div>
              </div>
            </BentoCard>

            {/* CARD 2: Universal Integration (Compact) */}
            <BentoCard className="md:col-span-1 min-h-[320px] flex flex-col p-8" gradient="rgba(245,158,11,0.1)">
              <div className="relative z-20 mb-6">
                <h3 className="text-[26px] font-bold text-white mb-3 tracking-tight" style={{ fontFamily: fonts.display }}>Integration</h3>
                <p className="text-[#a0a0a0] text-[15px] leading-relaxed">
                  Connect to your data lakes without <span className="text-white">gatekeepers</span>.
                </p>
              </div>

              <div className="relative z-10 flex-grow flex items-center justify-center pointer-events-none overflow-hidden">
                <div className="relative w-full h-full flex items-center justify-center">
                  <svg className="absolute w-[180px] h-[180px]" viewBox="0 0 180 180">
                    <defs><linearGradient id="lineGrad2" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#F59E0B" stopOpacity="0" /><stop offset="50%" stopColor="#F59E0B" stopOpacity="0.5" /><stop offset="100%" stopColor="#F59E0B" stopOpacity="0" /></linearGradient></defs>
                    <line x1="90" y1="90" x2="30" y2="30" stroke="url(#lineGrad2)" strokeWidth="1" />
                    <motion.line x1="90" y1="90" x2="30" y2="30" stroke="#fbbf24" strokeWidth="2" strokeDasharray="10 60" animate={{ strokeDashoffset: [70, -10] }} transition={{ duration: 2, repeat: Infinity, ease: "linear" }} />
                    <line x1="90" y1="90" x2="150" y2="30" stroke="url(#lineGrad2)" strokeWidth="1" />
                    <motion.line x1="90" y1="90" x2="150" y2="30" stroke="#fbbf24" strokeWidth="2" strokeDasharray="10 60" animate={{ strokeDashoffset: [70, -10] }} transition={{ duration: 2.5, repeat: Infinity, ease: "linear", delay: 0.5 }} />
                  </svg>
                  <div className="w-12 h-12 rounded-full bg-[#111] border border-[#F59E0B]/40 shadow-[0_0_30px_rgba(245,158,11,0.2)] z-10 flex items-center justify-center backdrop-blur-xl">
                     <span className="text-[#fbbf24] font-bold text-base" style={{ fontFamily: fonts.display }}>F</span>
                  </div>
                  <div className="absolute w-8 h-8 rounded-full bg-[#1a1a1a] border border-white/10 flex items-center justify-center -translate-x-[60px] -translate-y-[60px] shadow-[0_10px_20px_rgba(0,0,0,0.5)]"><Database size={12} className="text-[#F59E0B]" /></div>
                  <div className="absolute w-8 h-8 rounded-full bg-[#1a1a1a] border border-white/10 flex items-center justify-center translate-x-[60px] -translate-y-[60px] shadow-[0_10px_20px_rgba(0,0,0,0.5)]"><Layers size={12} className="text-[#a0a0a0]" /></div>
                </div>
              </div>
            </BentoCard>

            {/* CARD 3: Autonomous Execution (Compact) */}
            <BentoCard className="md:col-span-1 min-h-[320px] flex flex-col p-8" gradient="rgba(16,185,129,0.1)">
              <div className="relative z-20 mb-6">
                <h3 className="text-[26px] font-bold text-white mb-3 tracking-tight" style={{ fontFamily: fonts.display }}>Autonomous</h3>
                <p className="text-[#a0a0a0] text-[15px] leading-relaxed">
                  Agents execute workflows — <span className="text-white">no manual triggers.</span>
                </p>
              </div>

              <div className="relative z-10 flex-grow flex items-center justify-center pointer-events-none overflow-hidden">
                <div className="relative w-48 h-48 flex items-center justify-center">
                  <div className="absolute w-[90%] h-[90%] border border-[#10B981]/15 rounded-full" />
                  <div className="absolute w-[50%] h-[50%] border border-[#10B981]/25 rounded-full" />
                  <motion.div animate={{ rotate: 360 }} transition={{ duration: 4, repeat: Infinity, ease: "linear" }} className="absolute w-[95%] h-[95%] rounded-full" style={{ background: "conic-gradient(from 0deg, transparent 70%, rgba(16, 185, 129, 0.1) 95%, rgba(16, 185, 129, 0.8) 100%)" }} />
                  <motion.div animate={{ opacity: [0.3, 1, 0.3] }} transition={{ duration: 2, repeat: Infinity }} className="absolute w-1.5 h-1.5 rounded-full bg-[#34d399] -translate-x-12 -translate-y-8 shadow-[0_0_8px_rgba(52,211,153,1)]" />
                  <div className="w-10 h-10 rounded-full bg-[#0a0a0a] border border-[#10B981]/40 shadow-[0_0_20px_rgba(16,185,129,0.3)] z-10 flex items-center justify-center">
                     <Orbit size={16} strokeWidth={1.5} className="text-[#34d399]" />
                  </div>
                </div>
              </div>
            </BentoCard>

            {/* CARD 4: Measurable ROI (Wide) */}
            <BentoCard className="md:col-span-2 min-h-[320px] flex flex-col md:flex-row p-8" gradient="rgba(34,211,238,0.1)">
              <div className="relative z-20 md:w-1/2 flex flex-col justify-center">
                <h3 className="text-[26px] font-bold text-white mb-3 tracking-tight" style={{ fontFamily: fonts.display }}>Measurable ROI</h3>
                <p className="text-[#a0a0a0] text-[15px] leading-relaxed max-w-sm">
                  Every autonomous action is tied to <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#22D3EE] to-[#6366F1]">quantifiable business metrics</span> in real-time.
                </p>
              </div>

              <div className="relative z-10 md:w-1/2 h-[180px] md:h-full flex items-center justify-center mt-6 md:mt-0 pointer-events-none">
                <div className="relative w-full h-full flex items-center justify-center">
                  <motion.div animate={{ rotate: 360, scale: [1, 1.1, 1] }} transition={{ duration: 15, repeat: Infinity, ease: "linear" }} className="absolute w-32 h-32 bg-gradient-to-tr from-[#6366F1]/40 to-transparent blur-[25px] rounded-full translate-x-6 -translate-y-6" />
                  <motion.div animate={{ rotate: -360, scale: [1, 1.2, 1] }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }} className="absolute w-32 h-32 bg-gradient-to-bl from-[#8B5CF6]/40 to-transparent blur-[25px] rounded-full -translate-x-6 translate-y-6" />
                  
                  <div className="w-12 h-12 rounded-full bg-[#111] border border-white/10 shadow-[0_0_30px_rgba(99,102,241,0.5)] z-10 flex items-center justify-center backdrop-blur-xl relative">
                     <LineChart size={18} strokeWidth={1.5} className="text-[#a78bfa]" />
                  </div>

                  <motion.div animate={{ y: [-4, 4, -4] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }} className="absolute top-[10%] left-[5%] px-3 py-2 bg-[#111]/90 border border-white/10 rounded-lg shadow-xl z-20 backdrop-blur-xl">
                    <div className="flex items-center gap-1.5 mb-1.5"><span className="w-1 h-1 rounded-full bg-[#22D3EE] shadow-[0_0_6px_rgba(34,211,238,0.8)]" /><span className="text-[8px] uppercase font-mono tracking-widest text-[#888]">MTTR</span></div>
                    <div className="text-[16px] font-medium text-white tracking-tight leading-none">40.3%</div>
                  </motion.div>

                  <motion.div animate={{ y: [4, -4, 4] }} transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }} className="absolute bottom-[10%] right-[5%] px-3 py-2 bg-[#111]/90 border border-white/10 rounded-lg shadow-xl z-20 backdrop-blur-xl">
                    <div className="flex items-center gap-1.5 mb-1.5"><span className="w-1 h-1 rounded-full bg-[#10B981] shadow-[0_0_6px_rgba(16,185,129,0.8)]" /><span className="text-[8px] uppercase font-mono tracking-widest text-[#888]">Saved</span></div>
                    <div className="text-[16px] font-medium text-white tracking-tight leading-none">$80,000</div>
                  </motion.div>
                </div>
              </div>
            </BentoCard>

          </div>
        </section>

        {/* ─── Premium Bottom CTA ─── */}
        <Contact />

      </div>
      
      <Footer />
    </main>
  );
}
