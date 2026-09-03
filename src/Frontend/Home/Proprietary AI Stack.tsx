"use client";

import React, { useRef } from "react";
import { motion, useInView, useMotionValue, useSpring, useTransform } from "framer-motion";
import Image from "next/image";

const features = [
  {
    title: "Proprietary LLMs",
    tag: "1.4T PARAMETERS - 128K CONTEXT",
    desc: "Domain-specific foundation models trained on secure enterprise datasets with zero data leakage.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect>
        <rect x="9" y="9" width="6" height="6"></rect>
        <line x1="9" y1="1" x2="9" y2="4"></line>
        <line x1="15" y1="1" x2="15" y2="4"></line>
        <line x1="9" y1="20" x2="9" y2="23"></line>
        <line x1="15" y1="20" x2="15" y2="23"></line>
        <line x1="20" y1="9" x2="23" y2="9"></line>
        <line x1="20" y1="14" x2="23" y2="14"></line>
        <line x1="1" y1="9" x2="4" y2="9"></line>
        <line x1="1" y1="14" x2="4" y2="14"></line>
      </svg>
    ),
    color: "#06b6d4", // Cyan
  },
  {
    title: "Causal Reasoning Engines",
    tag: "DIRECTED ACYCLIC GRAPHS",
    desc: "True cause-and-effect mathematical models that predict systemic outcomes with 99.9% certainty.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <circle cx="18" cy="5" r="3"></circle>
        <circle cx="6" cy="12" r="3"></circle>
        <circle cx="18" cy="19" r="3"></circle>
        <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line>
        <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>
      </svg>
    ),
    color: "#a855f7", // Purple
  },
  {
    title: "Federated Intelligence",
    tag: "HOMOMORPHIC ENCRYPTED",
    desc: "Distributed mesh learning across multi-cloud infrastructure without exposing raw underlying data.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <rect x="16" y="16" width="6" height="6" rx="1"></rect>
        <rect x="2" y="16" width="6" height="6" rx="1"></rect>
        <rect x="9" y="2" width="6" height="6" rx="1"></rect>
        <path d="M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3"></path>
        <path d="M12 12V8"></path>
      </svg>
    ),
    color: "#22c55e", // Green
  },
  {
    title: "Neural Graph Optimization",
    tag: "SUB-MILLISECOND LATENCY",
    desc: "Self-assembling graph neural networks that optimize enterprise data routes dynamically.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"></path>
      </svg>
    ),
    color: "#eab308", // Yellow
  },
];

export function ProprietaryAIStack() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // 3D Hover Effect setup
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 70, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 70, damping: 20 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["15deg", "-15deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-15deg", "15deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <section className="py-8 md:py-16 relative overflow-hidden bg-[#050505]">
      {/* Background gradients */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#4EA8FF]/[0.02] rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#a855f7]/[0.02] rounded-full blur-[100px] pointer-events-none" />

      <div className="w-full max-w-[1400px] mx-auto px-6 md:px-12 relative z-10" ref={ref}>
        {/* Header Section */}
        <div className="mb-8 md:mb-10 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-sm bg-white/[0.03] border border-white/[0.08] mb-6"
          >
            <div className="w-1.5 h-1.5 rounded-full bg-[#4EA8FF] shadow-[0_0_8px_#4EA8FF]" />
            <span className="text-white/40 uppercase tracking-[0.15em] text-[10px] font-mono">Proprietary AI Stack</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-2xl md:text-4xl font-bold tracking-tight leading-tight mb-3 text-white"
          >
            Engineering the <span className="text-gradient">Impossible.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-white/40 text-[13px] md:text-[15px] leading-relaxed font-light max-w-2xl"
          >
            Our research labs push the boundaries of autonomous computation. Built from first principles to power hyper-scalable enterprise decision systems.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-6 items-center">
          {/* Left Column: Feature Cards */}
          <div className="flex flex-col gap-4">
            {features.map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + idx * 0.1 }}
                className="group relative flex flex-col md:flex-row md:items-start gap-3 md:gap-4 p-4 rounded-xl md:rounded-2xl bg-white/[0.02] border border-white/[0.05] hover:bg-white/[0.04] transition-all duration-500 overflow-hidden"
              >
                {/* Hover Glow */}
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none"
                  style={{ background: `radial-gradient(circle at left center, ${feature.color}, transparent 60%)` }}
                />

                {/* Icon Box */}
                <div 
                  className="w-10 h-10 md:w-11 md:h-11 rounded-lg md:rounded-xl flex items-center justify-center shrink-0 border transition-colors duration-500 relative z-10"
                  style={{
                    backgroundColor: `${feature.color}15`,
                    color: feature.color,
                    borderColor: `${feature.color}30`
                  }}
                >
                  {feature.icon}
                </div>

                <div className="flex-1 relative z-10 pt-1">
                  <div className="flex flex-col xl:flex-row xl:items-center justify-between gap-1.5 md:gap-2 mb-1.5 md:mb-2">
                    <h3 className="text-[14px] md:text-[16px] font-medium text-white">{feature.title}</h3>
                    <div className="inline-flex px-1.5 md:px-2 py-0.5 rounded bg-white/[0.03] border border-white/[0.05]">
                      <span className="text-[8px] md:text-[9px] font-mono uppercase tracking-widest text-white/30">
                        {feature.tag}
                      </span>
                    </div>
                  </div>
                  <p className="text-[12px] md:text-[13px] text-white/40 leading-relaxed font-light">
                    {feature.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right Column: Radar Graphic with 3D effect */}
          <div 
            className="relative w-full aspect-square max-w-[340px] md:max-w-[420px] mx-auto flex items-center justify-center cursor-pointer mt-8 lg:mt-0"
            style={{ perspective: 1200 }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotateX: 20, rotateY: -20 }}
              animate={isInView ? { opacity: 1, scale: 1, rotateX: 0, rotateY: 0 } : {}}
              transition={{ duration: 1, delay: 0.4, type: "spring", stiffness: 60 }}
              style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
              className="relative w-full h-full flex items-center justify-center"
            >
              {/* Base Track Rings */}
              <div className="absolute inset-0 rounded-full border border-white/[0.03]" style={{ transform: "translateZ(-20px)" }} />
              <div className="absolute inset-[15%] rounded-full border border-white/[0.03]" style={{ transform: "translateZ(-10px)" }} />
              <div className="absolute inset-[30%] rounded-full border border-white/[0.03]" style={{ transform: "translateZ(0px)" }} />

              {/* Orbit 1: Outer */}
              <motion.div
                className="absolute inset-0 m-auto w-full h-full rounded-full"
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
                style={{ transformStyle: "preserve-3d" }}
              >
                {/* Arc Trail */}
                <div className="absolute inset-0 rounded-full border-[1.5px] border-transparent border-t-[#06b6d4]/50 border-r-[#06b6d4]/10" />
                
                {/* Orbiting Element */}
                <div className="absolute top-0 left-1/2" style={{ transform: "translate(-50%, -50%) translateZ(60px)", transformStyle: "preserve-3d" }}>
                  <motion.div 
                    animate={{ rotate: -360 }}
                    transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/80 backdrop-blur-md border border-[#06b6d4]/40 shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:scale-105 hover:bg-black transition-all cursor-pointer"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-[#06b6d4] shadow-[0_0_8px_#06b6d4]" />
                    <span className="text-[#06b6d4] font-mono text-[8px] md:text-[9px] uppercase tracking-widest whitespace-nowrap">
                      LLM Core • 1.4T
                    </span>
                  </motion.div>
                </div>
              </motion.div>

              {/* Orbit 2: Middle */}
              <motion.div
                className="absolute inset-[15%] m-auto w-[70%] h-[70%] rounded-full"
                animate={{ rotate: -360 }}
                transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
                style={{ transformStyle: "preserve-3d" }}
              >
                <div className="absolute inset-0 rounded-full border-[1.5px] border-transparent border-b-[#a855f7]/50 border-l-[#a855f7]/10" />
                
                <div className="absolute bottom-0 left-1/2" style={{ transform: "translate(-50%, 50%) translateZ(80px)", transformStyle: "preserve-3d" }}>
                  <motion.div 
                    animate={{ rotate: 360 }}
                    transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/80 backdrop-blur-md border border-[#a855f7]/40 shadow-[0_0_20px_rgba(168,85,247,0.3)] hover:scale-105 hover:bg-black transition-all cursor-pointer"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-[#a855f7] shadow-[0_0_8px_#a855f7]" />
                    <span className="text-[#a855f7] font-mono text-[8px] md:text-[9px] uppercase tracking-widest whitespace-nowrap">
                      Causal Engine
                    </span>
                  </motion.div>
                </div>
              </motion.div>

              {/* Orbit 3: Inner */}
              <motion.div
                className="absolute inset-[30%] m-auto w-[40%] h-[40%] rounded-full"
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
                style={{ transformStyle: "preserve-3d" }}
              >
                <div className="absolute inset-0 rounded-full border-[1.5px] border-transparent border-r-[#22c55e]/50 border-t-[#22c55e]/10" />
                
                <div className="absolute top-1/2 right-0" style={{ transform: "translate(50%, -50%) translateZ(100px)", transformStyle: "preserve-3d" }}>
                  <motion.div 
                    animate={{ rotate: -360 }}
                    transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/80 backdrop-blur-md border border-[#22c55e]/40 shadow-[0_0_20px_rgba(34,197,94,0.3)] hover:scale-105 hover:bg-black transition-all cursor-pointer"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-[#22c55e] shadow-[0_0_8px_#22c55e]" />
                    <span className="text-[#22c55e] font-mono text-[8px] md:text-[9px] uppercase tracking-widest whitespace-nowrap">
                      Federated
                    </span>
                  </motion.div>
                </div>
              </motion.div>

              {/* Center Core */}
              <div className="absolute inset-0 m-auto w-20 h-20 md:w-24 md:h-24 rounded-full bg-black border border-[#4EA8FF]/20 shadow-[0_0_40px_rgba(78,168,255,0.15)_inset,0_0_40px_rgba(78,168,255,0.2)] flex flex-col items-center justify-center z-30" style={{ transform: "translateZ(120px)" }}>
                <motion.div 
                  animate={{ scale: [1, 1.1, 1], opacity: [0.7, 1, 0.7] }}
                  transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                  className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center mb-1"
                >
                  <Image
                    src="/Logo/Final.png"
                    alt="Fazamous Logo"
                    width={48}
                    height={48}
                    className="object-contain w-full h-full drop-shadow-[0_0_15px_rgba(78,168,255,0.5)]"
                  />
                </motion.div>
                <h4 className="text-white text-[10px] md:text-[11px] font-bold tracking-widest leading-none mb-0.5 mt-0.5">
                  FAZAMOUS
                </h4>
                <span className="text-[#4EA8FF] text-[5px] md:text-[6px] font-mono tracking-[0.2em] uppercase">
                  Neural Core
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
