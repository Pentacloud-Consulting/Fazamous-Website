"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";

export function AutonomousSystems() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [-60, 60]);
  const y3 = useTransform(scrollYProgress, [0, 1], [40, -40]);

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const [mounted, setMounted] = useState(false);
  const [activeHighlight, setActiveHighlight] = useState<number | null>(null);
  const [trafficBars, setTrafficBars] = useState([30, 50, 40, 70, 55, 80, 65, 90, 75, 100]);

  useEffect(() => {
    setMounted(true);
    // Simulate real-time live traffic jitter
    const interval = setInterval(() => {
      setTrafficBars((prev) =>
        prev.map((v) => Math.min(100, Math.max(20, v + Math.floor(Math.random() * 25) - 12)))
      );
    }, 1200);
    return () => clearInterval(interval);
  }, []);

  return (
    <section ref={containerRef} className="py-24 relative overflow-hidden bg-[#030303]">
      {/* Background parallax ambient lighting */}
      <motion.div
        style={{ y: y1 }}
        className="absolute top-[20%] right-0 w-[900px] h-[900px] rounded-full bg-[#4EA8FF]/[0.03] blur-[220px] pointer-events-none translate-x-1/3"
      />
      <motion.div
        style={{ y: y2 }}
        className="absolute bottom-0 left-0 w-[700px] h-[700px] rounded-full bg-violet-600/[0.025] blur-[180px] pointer-events-none -translate-x-1/4"
      />
      
      {/* Grid Pattern with subtle radial glow */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-25"
        style={{
          backgroundImage: `
            radial-gradient(circle at 75% 50%, rgba(78, 168, 255, 0.08) 0%, transparent 60%),
            linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)
          `,
          backgroundSize: '100% 100%, 60px 60px, 60px 60px',
        }}
      />

      <div className="w-full max-w-[1400px] mx-auto px-6 md:px-12 relative z-10" ref={ref}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-24 items-center">
          
          {/* ── LEFT: Content ── */}
          <div className="max-w-xl">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 glass-pill mb-6 border-glow"
            >
              <div className="w-2 h-2 rounded-full bg-[#4EA8FF] shadow-[0_0_10px_#4EA8FF] animate-ping" />
              <span className="text-[#4EA8FF] uppercase tracking-widest text-[10px] font-mono font-medium">Autonomy Engine v4.2</span>
            </motion.div>
            
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="text-4xl md:text-5xl lg:text-[4.5rem] font-semibold tracking-tight leading-[1.05] mb-8"
            >
              Beyond<br />
              <span className="text-gradient-accent">Automation.</span>
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-white/50 text-[15px] leading-[1.8] mb-12 font-light"
            >
              Our systems learn, adapt, and execute complex workflows entirely on their own, requiring human intervention only for high-level strategic alignment. We are replacing rigid rule-based automation with fluid, self-correcting intelligence.
            </motion.p>

            {/* Features List with interactive focus */}
            <div className="flex flex-col gap-5 mb-12">
              {[
                { title: "Self-optimizing Resource Allocation", desc: "Dynamically shifts compute and capital based on real-time needs.", targetIndex: 0 },
                { title: "Predictive Maintenance Protocols", desc: "Identifies systemic failures weeks before they materialize.", targetIndex: 1 },
                { title: "Multi-System Coordination", desc: "Orchestrates across disparate enterprise software silently.", targetIndex: 2 },
              ].map((item, idx) => {
                const isActive = activeHighlight === item.targetIndex;
                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.4 + idx * 0.1, ease: [0.22, 1, 0.36, 1] }}
                    onMouseEnter={() => setActiveHighlight(item.targetIndex)}
                    onMouseLeave={() => setActiveHighlight(null)}
                    className={`
                      p-4 rounded-2xl border transition-all duration-500 cursor-pointer flex items-start gap-4
                      ${isActive 
                        ? "bg-white/[0.04] border-[#4EA8FF]/40 shadow-[0_0_25px_rgba(78,168,255,0.15)] translate-x-2" 
                        : "bg-white/[0.01] border-white/[0.05] hover:border-white/20 hover:bg-white/[0.02]"
                      }
                    `}
                  >
                    <div className={`
                      w-9 h-9 rounded-xl border flex items-center justify-center shrink-0 mt-0.5 transition-all duration-500
                      ${isActive
                        ? "bg-[#4EA8FF] border-[#4EA8FF] text-black shadow-[0_0_15px_#4EA8FF]"
                        : "border-white/[0.1] bg-white/[0.03] text-white/40"
                      }
                    `}>
                      <span className="font-mono text-xs font-bold">{idx + 1}</span>
                    </div>
                    <div>
                      <h4 className={`text-[15px] font-medium transition-colors duration-300 ${isActive ? "text-[#4EA8FF]" : "text-white/90"}`}>
                        {item.title}
                      </h4>
                      <p className="text-[13px] text-white/40 leading-relaxed font-light mt-0.5">{item.desc}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            <motion.a
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.7 }}
              href="#technology"
              className="group inline-flex items-center gap-3 text-white text-[13px] font-mono tracking-wider uppercase"
            >
              <span className="relative py-1">
                Explore Architecture
                <span className="absolute left-0 bottom-0 w-full h-[1px] bg-[#4EA8FF] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </span>
              <span className="w-8 h-8 rounded-full bg-white/[0.05] border border-white/[0.1] flex items-center justify-center group-hover:bg-[#4EA8FF] group-hover:border-[#4EA8FF] group-hover:text-black transition-all duration-300 shadow-[0_0_10px_rgba(255,255,255,0.05)]">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
                </svg>
              </span>
            </motion.a>
          </div>

          {/* ── RIGHT: Futuristic Animated Parallax Dashboards ── */}
          <div className="relative h-[620px] lg:h-[720px] w-full perspective-[2000px]">
            {mounted && (
              <>
                {/* SVG Connecting Cyber Energy Cables */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none z-20 overflow-visible opacity-40">
                  <defs>
                    <linearGradient id="beam-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#4EA8FF" stopOpacity="0" />
                      <stop offset="50%" stopColor="#4EA8FF" stopOpacity="1" />
                      <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  {/* Cable from Alpha to Omega */}
                  <motion.path
                    d="M 180 320 C 220 220, 240 180, 310 160"
                    fill="none"
                    stroke="rgba(78, 168, 255, 0.2)"
                    strokeWidth="1.5"
                    strokeDasharray="4 4"
                  />
                  {/* Cable from Alpha to Traffic */}
                  <motion.path
                    d="M 220 400 C 260 480, 280 500, 320 540"
                    fill="none"
                    stroke="rgba(139, 92, 246, 0.2)"
                    strokeWidth="1.5"
                    strokeDasharray="4 4"
                  />
                </svg>

                {/* 1. Back Panel (System.Omega) */}
                <motion.div
                  animate={{ 
                    y: [-8, 8, -8],
                    rotateY: activeHighlight === 1 ? -8 : -14,
                    scale: activeHighlight === 1 ? 1.04 : 1
                  }}
                  transition={{ 
                    y: { duration: 7, repeat: Infinity, ease: "easeInOut" },
                    rotateY: { duration: 0.5 },
                    scale: { duration: 0.5 }
                  }}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className={`
                    absolute right-[2%] top-[5%] w-[330px] rounded-3xl glass-card p-7 shadow-2xl z-10 transition-colors duration-500
                    ${activeHighlight === 1 ? "border-[#4EA8FF]/60 shadow-[0_0_40px_rgba(78,168,255,0.25)] bg-white/[0.05]" : "hover:border-white/20"}
                  `}
                >
                  <div className="flex items-center justify-between mb-6 text-[10px] font-mono">
                    <span className="text-white/40 uppercase tracking-widest">System.Omega</span>
                    <span className="text-[#4EA8FF] px-2.5 py-1 rounded-full bg-[#4EA8FF]/10 border border-[#4EA8FF]/30 animate-pulse font-medium">
                      Processing 4.2k ops/s
                    </span>
                  </div>
                  
                  {/* Large Circular Gauge with Rotating Orbit Ring */}
                  <div className="flex flex-col items-center justify-center my-6 relative">
                    {/* Spinning ring around circle */}
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                      className="absolute w-[180px] h-[180px] rounded-full border border-dashed border-[#4EA8FF]/20"
                    />
                    
                    <svg width="170" height="170" viewBox="0 0 160 160" className="transform -rotate-90 drop-shadow-[0_0_20px_rgba(78,168,255,0.3)]">
                      <circle cx="80" cy="80" r="70" fill="rgba(5, 5, 5, 0.4)" />
                      <circle cx="80" cy="80" r="70" fill="none" stroke="rgba(255,255,255,0.04)" strokeWidth="10" />
                      <motion.circle
                        cx="80" cy="80" r="70" fill="none" stroke="url(#omega-grad)" strokeWidth="10"
                        strokeLinecap="round"
                        strokeDasharray={440}
                        initial={{ strokeDashoffset: 440 }}
                        whileInView={{ strokeDashoffset: 440 * 0.22 }}
                        viewport={{ once: true }}
                        transition={{ duration: 2.5, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
                      />
                      <defs>
                        <linearGradient id="omega-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#4EA8FF" />
                          <stop offset="100%" stopColor="#00e5ff" />
                        </linearGradient>
                      </defs>
                    </svg>
                    
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                      <motion.span 
                        animate={{ opacity: [0.8, 1, 0.8] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="text-4xl font-mono text-white font-bold tracking-tight"
                      >
                        98.4<span className="text-xl text-[#4EA8FF]">%</span>
                      </motion.span>
                      <span className="text-[9px] text-white/40 uppercase font-mono tracking-widest mt-1">Autonomous Precision</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div className="p-3 rounded-2xl border border-white/[0.06] bg-white/[0.02]">
                       <div className="text-[9px] text-white/40 uppercase font-mono mb-1">Latency</div>
                       <div className="text-lg text-white font-mono font-medium">1.4<span className="text-[#4EA8FF] text-xs font-normal">ms</span></div>
                    </div>
                    <div className="p-3 rounded-2xl border border-white/[0.06] bg-white/[0.02]">
                       <div className="text-[9px] text-white/40 uppercase font-mono mb-1">Active Nodes</div>
                       <div className="text-lg text-white font-mono font-medium">4,280</div>
                    </div>
                  </div>
                </motion.div>

                {/* 2. Middle Main Floating Panel (System.Alpha) */}
                <motion.div
                  animate={{ 
                    y: [10, -10, 10],
                    rotateY: activeHighlight === 0 ? 0 : -6,
                    scale: activeHighlight === 0 ? 1.05 : 1
                  }}
                  transition={{ 
                    y: { duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 },
                    rotateY: { duration: 0.5 },
                    scale: { duration: 0.5 }
                  }}
                  initial={{ opacity: 0, x: -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className={`
                    absolute left-[2%] top-[28%] w-[370px] rounded-3xl glass-card p-7 z-30 transition-all duration-500
                    shadow-[0_30px_70px_-15px_rgba(0,0,0,0.9)]
                    ${activeHighlight === 0 ? "border-[#4EA8FF]/80 shadow-[0_0_50px_rgba(78,168,255,0.3)] bg-white/[0.06]" : "border-white/10 hover:border-white/20"}
                  `}
                >
                  <div className="absolute top-0 right-0 w-40 h-40 bg-[#4EA8FF]/[0.06] rounded-bl-full blur-2xl pointer-events-none" />
                  
                  <div className="flex items-center justify-between mb-6 text-[10px] font-mono">
                    <div className="flex items-center gap-2 text-white/60 uppercase tracking-widest">
                      <div className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_10px_#10B981] animate-pulse" />
                      System.Alpha — Active
                    </div>
                    <span className="text-white/30">REAL-TIME</span>
                  </div>
                  
                  <div className="space-y-4">
                    {[
                      { label: "Data Ingestion", val: 94, color: "#4EA8FF" },
                      { label: "Neural Mapping", val: 98, color: "#10B981" },
                      { label: "Threat Mitigation", val: 89, color: "#8B5CF6" },
                      { label: "Resource Shift", val: 96, color: "#00e5ff" }
                    ].map((item, i) => (
                      <div key={i} className="flex flex-col gap-1.5 group">
                        <div className="flex justify-between items-center text-[10px] font-mono">
                          <span className="text-white/50 uppercase tracking-wider">{item.label}</span>
                          <span className="text-white font-medium" style={{ color: item.color }}>{item.val}%</span>
                        </div>
                        <div className="h-2 bg-white/[0.04] rounded-full overflow-hidden relative border border-white/[0.05]">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${item.val}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.5, delay: 0.4 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                            className="absolute top-0 left-0 bottom-0 rounded-full"
                            style={{ backgroundColor: item.color }}
                          >
                             {/* Shimmer sweep effect */}
                             <motion.div 
                               animate={{ x: ["-100%", "200%"] }}
                               transition={{ repeat: Infinity, duration: 2.5, delay: i * 0.4, ease: "linear" }}
                               className="absolute inset-0 w-1/2 bg-gradient-to-r from-transparent via-white/60 to-transparent" 
                             />
                          </motion.div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 pt-5 border-t border-white/[0.06] flex items-center justify-between text-[11px] font-mono text-white/40">
                    <span>STATUS: OPTIMAL</span>
                    <span className="text-emerald-400 flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                      AUTONOMOUS
                    </span>
                  </div>
                </motion.div>

                {/* 3. Front Lower Floating Panel (Live Traffic) */}
                <motion.div
                  animate={{ 
                    y: [-6, 6, -6],
                    rotateY: activeHighlight === 2 ? -4 : 8,
                    scale: activeHighlight === 2 ? 1.05 : 1
                  }}
                  transition={{ 
                    y: { duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 },
                    rotateY: { duration: 0.5 },
                    scale: { duration: 0.5 }
                  }}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className={`
                    absolute right-[8%] bottom-[5%] w-[270px] rounded-3xl glass-card p-6 z-40 transition-all duration-500
                    shadow-[0_25px_50px_rgba(0,0,0,0.8)]
                    ${activeHighlight === 2 ? "border-purple-500/60 shadow-[0_0_40px_rgba(139,92,246,0.3)] bg-white/[0.05]" : "border-white/10 hover:border-white/20"}
                  `}
                >
                  <div className="flex items-center justify-between text-[10px] font-mono uppercase tracking-widest mb-4">
                    <span className="text-white/60">Live Traffic Stream</span>
                    <span className="w-2 h-2 rounded-full bg-purple-400 animate-ping" />
                  </div>
                  
                  {/* Dynamic Animated Bar Chart */}
                  <div className="flex justify-between gap-1.5 h-24 items-end pt-2">
                    {trafficBars.map((val, i) => (
                      <motion.div
                        key={i}
                        animate={{ height: `${val}%` }}
                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                        className="flex-1 bg-gradient-to-t from-[#4EA8FF]/20 via-[#8B5CF6]/40 to-[#00e5ff] hover:brightness-125 transition-all rounded-t-[3px] cursor-pointer"
                      />
                    ))}
                  </div>

                  <div className="mt-3 flex justify-between items-center text-[9px] font-mono text-white/30">
                    <span>00:00</span>
                    <span>REALTIME FLOW</span>
                    <span>LIVE</span>
                  </div>
                </motion.div>
              </>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
