"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, BrainCircuit, Activity, ShieldAlert, ChevronRight } from "lucide-react";
import { colors, fonts } from "@/styles/tokens";

const overviewProducts = [
  {
    id: "01",
    title: "Predictive Intelligence",
    shortTitle: "Intelligence",
    desc: "Harness multi-modal data to generate root cause analyses and predictive models in real-time. The ultimate command center for decision-making.",
    metric: "Real-time Processing",
    color: "#4EA8FF",
    icon: BrainCircuit,
  },
  {
    id: "02",
    title: "Autonomous Automation",
    shortTitle: "Automation",
    desc: "Deploy self-healing systems that autonomously resolve incidents.",
    metric: "Zero-Touch Resolution",
    color: "#3B82F6",
    icon: Activity,
  },
  {
    id: "03",
    title: "Risk & Security",
    shortTitle: "Security",
    desc: "Multi-layered threat defense using advanced neural networks.",
    metric: "Continuous Protection",
    color: "#F43F5E",
    icon: ShieldAlert,
  },
];

export function IntelligentProducts() {
  return (
    <section id="products" className="py-12 relative bg-[#050505] overflow-hidden border-t border-white/[0.02]">
      {/* Background ambient glow */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full blur-[100px] pointer-events-none opacity-40"
        style={{ background: 'radial-gradient(circle, rgba(78,168,255,0.05) 0%, rgba(59,130,246,0.02) 50%, transparent 100%)' }}
      />
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] mix-blend-overlay pointer-events-none" />

      <div className="w-full max-w-[1400px] mx-auto px-6 relative z-10">
        
        {/* Header Section */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-2.5 py-1 glass-pill mb-4 border-glow">
            <div className="w-1.5 h-1.5 rounded-full bg-[#4EA8FF] shadow-[0_0_8px_#4EA8FF]" />
            <span className="text-white/40 uppercase tracking-[0.2em] text-[9px] font-bold" style={{ fontFamily: fonts.mono }}>Platform Capabilities</span>
          </div>
          
          <h2 className="text-2xl md:text-4xl font-bold tracking-tight leading-tight mb-3 pb-2" style={{ fontFamily: fonts.display }}>
            Intelligent <span className="text-white/40">Products.</span>
          </h2>
          
          <p className="text-white/50 text-[13px] leading-[1.6] font-light max-w-lg mx-auto" style={{ fontFamily: fonts.body }}>
            Purpose-built platforms integrating seamlessly into operations, bringing autonomous capabilities to every department.
          </p>
        </div>

        {/* Bento Box Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 w-full mx-auto mb-10">
          
          {/* Main Large Card (Left) */}
          <div className="lg:col-span-3 group relative rounded-[24px] overflow-hidden bg-[#0A0B0F] border border-white/[0.08] hover:border-white/[0.2] transition-colors duration-500 min-h-[300px] flex flex-col p-6 md:p-8">
            <div className="absolute inset-0 bg-gradient-to-br from-white/[0.04] to-transparent z-0" />
            
            {/* Hover Glow */}
            <div 
              className="absolute -top-20 -left-20 w-[200px] h-[200px] opacity-0 group-hover:opacity-30 blur-[60px] pointer-events-none transition-opacity duration-700 z-0"
              style={{ backgroundColor: overviewProducts[0].color }}
            />

            <div className="relative z-10 flex flex-col h-full">
              <div className="flex justify-between items-start mb-auto">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-white/[0.03] border border-white/5 shadow-2xl backdrop-blur-md">
                  <BrainCircuit size={20} style={{ color: overviewProducts[0].color }} />
                </div>
                <span className="text-[10px] font-bold text-white/10" style={{ fontFamily: fonts.mono }}>01</span>
              </div>

              <div className="mt-8">
                <span 
                  className="inline-block px-2.5 py-1 rounded-full border border-white/[0.1] text-[8px] uppercase tracking-widest font-mono mb-4 bg-black/40 backdrop-blur-md"
                  style={{ color: overviewProducts[0].color }}
                >
                  Key Feature: {overviewProducts[0].metric}
                </span>
                
                <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight mb-3 leading-tight" style={{ fontFamily: fonts.display }}>
                  {overviewProducts[0].title}
                </h3>
                
                <p className="text-[13px] md:text-[14px] text-white/50 leading-[1.6] font-light max-w-md mb-6" style={{ fontFamily: fonts.body }}>
                  {overviewProducts[0].desc}
                </p>

                <Link href="/services">
                  <button className="flex items-center gap-2 text-[12px] font-semibold text-white group/btn">
                    <span style={{ fontFamily: fonts.display }}>Explore Capability</span>
                    <div className="w-5 h-5 rounded-full bg-white/5 flex items-center justify-center group-hover/btn:bg-white/15 transition-all group-hover/btn:translate-x-1">
                      <ChevronRight size={12} style={{ color: overviewProducts[0].color }} />
                    </div>
                  </button>
                </Link>
              </div>
            </div>
            
            {/* 3D Animated Core Element */}
            <div className="absolute -right-20 top-1/2 -translate-y-1/2 w-[500px] h-[500px] pointer-events-none hidden md:flex items-center justify-center opacity-70 group-hover:opacity-100 transition-opacity duration-1000 z-0" style={{ perspective: "1000px" }}>
              
              {/* Ambient Core Glow */}
              <div className="absolute inset-0 bg-[#4EA8FF]/5 blur-[100px] rounded-full" />
              
              {/* Outer 3D Ring */}
              <motion.div
                animate={{ rotateX: [0, 360], rotateY: [0, 360] }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="absolute w-[320px] h-[320px] rounded-full border border-[#4EA8FF]/20 border-l-[#4EA8FF]/60 shadow-[0_0_30px_rgba(78,168,255,0.15)]"
                style={{ transformStyle: "preserve-3d" }}
              >
                <motion.div 
                  className="absolute -top-1.5 left-1/2 w-3 h-3 bg-white rounded-full shadow-[0_0_20px_#ffffff]"
                  animate={{ scale: [1, 1.5, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </motion.div>

              {/* Middle 3D Ring (Purple) */}
              <motion.div
                animate={{ rotateX: [360, 0], rotateZ: [0, 360] }}
                transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
                className="absolute w-[240px] h-[240px] rounded-full border border-[#8B5CF6]/30 border-t-[#8B5CF6]/70 shadow-[0_0_20px_rgba(139,92,246,0.2)]"
                style={{ transformStyle: "preserve-3d" }}
              />

              {/* Inner 3D Ring (Pink) */}
              <motion.div
                animate={{ rotateY: [0, 360], rotateZ: [360, 0] }}
                transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                className="absolute w-[160px] h-[160px] rounded-full border border-[#F43F5E]/30 border-r-[#F43F5E]/80 shadow-[0_0_20px_rgba(244,63,94,0.2)]"
                style={{ transformStyle: "preserve-3d" }}
              >
                <div className="absolute top-1/2 -right-1 w-2 h-2 bg-white/80 rounded-full shadow-[0_0_10px_white]" />
              </motion.div>

              {/* Solid Center Brain Node */}
              <motion.div
                animate={{ scale: [0.95, 1.05, 0.95] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute w-16 h-16 rounded-full bg-gradient-to-br from-[#4EA8FF] to-[#3B82F6] shadow-[0_0_40px_rgba(78,168,255,0.6)] flex items-center justify-center z-10"
              >
                <BrainCircuit size={28} className="text-white drop-shadow-md" />
              </motion.div>
              
              {/* Dynamic 3D Floating Data Particles */}
              <div className="absolute inset-0" style={{ transformStyle: "preserve-3d" }}>
                {[...Array(8)].map((_, i) => {
                  const randomDuration = 3 + Math.random() * 4;
                  return (
                   <motion.div
                     key={i}
                     className="absolute top-1/2 left-1/2 w-1 h-1 bg-[#4EA8FF] rounded-full shadow-[0_0_8px_#4EA8FF]"
                     animate={{ 
                       x: [(Math.random() - 0.5) * 400, (Math.random() - 0.5) * 400], 
                       y: [(Math.random() - 0.5) * 400, (Math.random() - 0.5) * 400],
                       z: [(Math.random() - 0.5) * 400, (Math.random() - 0.5) * 400],
                       opacity: [0, 1, 0],
                       scale: [0, 2, 0]
                     }}
                     transition={{ duration: randomDuration, repeat: Infinity, ease: "linear", delay: Math.random() * 2 }}
                   />
                )})}
              </div>
            </div>
          </div>

          {/* Right Column (Stacked Cards) */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            
            {/* Secondary Card (Top) */}
            <div className="group relative rounded-[24px] overflow-hidden bg-[#0A0B0F] border border-white/[0.08] hover:border-white/[0.2] transition-colors duration-500 flex-1 flex flex-col p-5">
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent to-white/[0.04] z-0" />
              
              <div 
                className="absolute -top-16 -right-16 w-[150px] h-[150px] opacity-0 group-hover:opacity-20 blur-[50px] pointer-events-none transition-opacity duration-700 z-0"
                style={{ backgroundColor: overviewProducts[1].color }}
              />

              <div className="relative z-10 flex flex-col h-full justify-between">
                <div className="flex justify-between items-start mb-4">
                  <div className="w-9 h-9 rounded-lg flex items-center justify-center bg-white/[0.03] border border-white/5 backdrop-blur-md">
                    <Activity size={18} style={{ color: overviewProducts[1].color }} />
                  </div>
                  <span className="text-[10px] font-bold text-white/10" style={{ fontFamily: fonts.mono }}>02</span>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-white tracking-tight mb-1.5" style={{ fontFamily: fonts.display }}>
                    {overviewProducts[1].title}
                  </h3>
                  <p className="text-[12px] text-white/50 leading-[1.5] font-light mb-3 line-clamp-2" style={{ fontFamily: fonts.body }}>
                    {overviewProducts[1].desc}
                  </p>
                  <Link href="/services">
                    <button className="flex items-center gap-1.5 text-[10px] font-semibold text-white/70 hover:text-white transition-colors group/btn">
                      <span className="uppercase tracking-widest">Explore</span>
                      <ChevronRight size={10} style={{ color: overviewProducts[1].color }} className="group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                  </Link>
                </div>
              </div>
            </div>

            {/* Tertiary Card (Bottom) */}
            <div className="group relative rounded-[24px] overflow-hidden bg-[#0A0B0F] border border-white/[0.08] hover:border-white/[0.2] transition-colors duration-500 flex-1 flex flex-col p-5">
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent to-white/[0.04] z-0" />
              
              <div 
                className="absolute -bottom-16 -right-16 w-[150px] h-[150px] opacity-0 group-hover:opacity-20 blur-[50px] pointer-events-none transition-opacity duration-700 z-0"
                style={{ backgroundColor: overviewProducts[2].color }}
              />

              <div className="relative z-10 flex flex-col h-full justify-between">
                <div className="flex justify-between items-start mb-4">
                  <div className="w-9 h-9 rounded-lg flex items-center justify-center bg-white/[0.03] border border-white/5 backdrop-blur-md">
                    <ShieldAlert size={18} style={{ color: overviewProducts[2].color }} />
                  </div>
                  <span className="text-[10px] font-bold text-white/10" style={{ fontFamily: fonts.mono }}>03</span>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-white tracking-tight mb-1.5" style={{ fontFamily: fonts.display }}>
                    {overviewProducts[2].title}
                  </h3>
                  <p className="text-[12px] text-white/50 leading-[1.5] font-light mb-3 line-clamp-2" style={{ fontFamily: fonts.body }}>
                    {overviewProducts[2].desc}
                  </p>
                  <Link href="/services">
                    <button className="flex items-center gap-1.5 text-[10px] font-semibold text-white/70 hover:text-white transition-colors group/btn">
                      <span className="uppercase tracking-widest">Explore</span>
                      <ChevronRight size={10} style={{ color: overviewProducts[2].color }} className="group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                  </Link>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Bottom CTA */}
        <div className="flex justify-center mt-8 relative">
          <Link href="/services">
            <button 
              className="group relative flex items-center gap-3 px-8 py-3.5 bg-transparent rounded-full transition-all duration-500 overflow-hidden border border-white/10 hover:border-white/30 hover:scale-[1.02]"
            >
              {/* Background states */}
              <div className="absolute inset-0 bg-white/5 group-hover:bg-white/10 transition-colors duration-500" />
              
              {/* Shine Sweep Effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                <div className="absolute top-0 left-0 w-[150%] h-full bg-gradient-to-r from-transparent via-white/[0.15] to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
              </div>
              
              <span className="relative z-10 text-[12px] font-bold tracking-widest text-white uppercase font-mono transition-all duration-300">
                View All Platforms
              </span>
              
              <ArrowRight size={14} className="relative z-10 text-white transition-all duration-300 group-hover:translate-x-1.5" />
              
              {/* Subtle ambient glow behind the button on hover */}
              <div className="absolute -inset-1 rounded-full opacity-0 group-hover:opacity-100 bg-gradient-to-r from-[#4EA8FF]/20 via-[#8B5CF6]/20 to-[#F43F5E]/20 blur-md transition-opacity duration-500 -z-10" />
            </button>
          </Link>
        </div>

      </div>
    </section>
  );
}
