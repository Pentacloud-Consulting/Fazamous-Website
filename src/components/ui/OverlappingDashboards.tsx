import React, { useState, useEffect } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

interface OverlappingDashboardsProps {
  activeHighlight?: number | null;
}

export function OverlappingDashboards({ activeHighlight = null }: OverlappingDashboardsProps) {
  const [trafficBars, setTrafficBars] = useState([30, 50, 40, 70, 55, 80, 65, 90, 75, 100]);

  // Mouse Parallax
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothOptions = { damping: 20, stiffness: 100, mass: 0.5 };
  const smoothX = useSpring(mouseX, smoothOptions);
  const smoothY = useSpring(mouseY, smoothOptions);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { currentTarget, clientX, clientY } = e;
    const { left, top, width, height } = currentTarget.getBoundingClientRect();
    const x = (clientX - left) / width - 0.5; // -0.5 to 0.5
    const y = (clientY - top) / height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setTrafficBars((prev) =>
        prev.map((v) => Math.min(100, Math.max(20, v + Math.floor(Math.random() * 25) - 12)))
      );
    }, 1200);
    return () => clearInterval(interval);
  }, []);

  // Parallax Transforms - Gentle reverse movement
  const omegaX = useTransform(smoothX, [-0.5, 0.5], [-12, 12]);
  const omegaY = useTransform(smoothY, [-0.5, 0.5], [-12, 12]);
  
  const alphaX = useTransform(smoothX, [-0.5, 0.5], [15, -15]);
  const alphaY = useTransform(smoothY, [-0.5, 0.5], [15, -15]);
  
  const trafficX = useTransform(smoothX, [-0.5, 0.5], [-20, 20]);
  const trafficY = useTransform(smoothY, [-0.5, 0.5], [-20, 20]);


  return (
    <div 
      className="relative h-[600px] lg:h-[650px] w-full"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* SVG Connecting Cyber Energy Cables */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-visible opacity-70">
        <defs>
          <linearGradient id="beam-omega-alpha" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#4EA8FF" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#10B981" stopOpacity="0.2" />
          </linearGradient>
          
          <linearGradient id="beam-omega-traffic" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#4EA8FF" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0.2" />
          </linearGradient>
          
          <filter id="glow-strong">
            <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
        
        {/* Connector: Omega (Top Center) -> Alpha (Lower Left) */}
        {/* Omega bottom center ~ (50%, 260px). Alpha top center ~ (25%, 300px) */}
        <motion.path
          d="M 50% 260 C 50% 280, 25% 270, 25% 300"
          fill="none"
          stroke="url(#beam-omega-alpha)"
          strokeWidth="2"
          strokeDasharray="4 6"
          filter="url(#glow-strong)"
        />
        <motion.circle 
          cx="25%" cy="300" r="3" fill="#10B981" filter="url(#glow-strong)"
          animate={{ opacity: [0.2, 1, 0.2] }} transition={{ duration: 2, repeat: Infinity }}
        />

        {/* Connector: Omega (Top Center) -> Traffic (Lower Right) */}
        {/* Omega bottom center ~ (50%, 260px). Traffic top center ~ (80%, 340px) */}
        <motion.path
          d="M 50% 260 C 50% 300, 80% 290, 80% 340"
          fill="none"
          stroke="url(#beam-omega-traffic)"
          strokeWidth="2"
          strokeDasharray="4 6"
          filter="url(#glow-strong)"
        />
        <motion.circle 
          cx="80%" cy="340" r="3" fill="#8B5CF6" filter="url(#glow-strong)"
          animate={{ opacity: [0.2, 1, 0.2] }} transition={{ duration: 2.5, delay: 0.5, repeat: Infinity }}
        />
      </svg>

      {/* 1. Top Center Panel (System.Omega) */}
      <motion.div
        style={{ x: omegaX, y: omegaY }}
        animate={{ 
          y: [-8, 8, -8],
          rotate: activeHighlight === 1 ? -1 : 1,
          scale: activeHighlight === 1 ? 1.02 : 1.0
        }}
        transition={{ 
          y: { duration: 6, repeat: Infinity, ease: "easeInOut" },
          rotate: { duration: 0.6 },
          scale: { duration: 0.6 }
        }}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className={`
          absolute left-1/2 -translate-x-1/2 top-0 w-[260px] rounded-[20px] bg-gradient-to-b from-[#0a0f1a]/95 to-[#02050a]/95 p-5 z-30 transition-all duration-500 overflow-hidden
          shadow-[0_30px_60px_rgba(0,0,0,0.9),inset_0_1px_1px_rgba(255,255,255,0.15),inset_0_-1px_1px_rgba(255,255,255,0.05)] backdrop-blur-3xl border border-white/10
          ${activeHighlight === 1 ? "border-[#4EA8FF]/60 shadow-[0_0_60px_rgba(78,168,255,0.25)] ring-1 ring-[#4EA8FF]/30" : "hover:border-white/30"}
        `}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-white/[0.06] via-transparent to-transparent pointer-events-none" />
        <div className="absolute top-[-50px] left-[-50px] w-32 h-32 bg-[#4EA8FF]/20 rounded-full blur-[50px] pointer-events-none" />
        <div className="flex items-center justify-between mb-5 text-[9px] font-mono">
          <span className="text-white/40 uppercase tracking-widest">System.Omega</span>
          <span className="text-[#4EA8FF] px-2 py-0.5 rounded-full bg-[#4EA8FF]/10 border border-[#4EA8FF]/30 animate-pulse font-medium">
            4.2k ops/s
          </span>
        </div>
        
        {/* Large Circular Gauge */}
        <div className="flex flex-col items-center justify-center my-4 relative">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
            className="absolute w-[130px] h-[130px] rounded-full border border-dashed border-[#4EA8FF]/30"
          />
          
          <svg width="120" height="120" viewBox="0 0 160 160" className="transform -rotate-90 drop-shadow-[0_0_20px_rgba(78,168,255,0.4)]">
            <circle cx="80" cy="80" r="70" fill="rgba(5, 5, 5, 0.4)" />
            <circle cx="80" cy="80" r="70" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="10" />
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
                <stop offset="50%" stopColor="#8B5CF6" />
                <stop offset="100%" stopColor="#00e5ff" />
              </linearGradient>
            </defs>
          </svg>
          
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <motion.span 
              animate={{ opacity: [0.8, 1, 0.8] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-3xl font-mono text-white font-bold tracking-tight"
            >
              98.4<span className="text-lg text-[#4EA8FF]">%</span>
            </motion.span>
            <span className="text-[8px] text-white/40 uppercase font-mono tracking-widest mt-0.5">Precision</span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-2 mt-4">
          <div className="p-2 rounded-[12px] border border-white/[0.05] bg-white/[0.03]">
             <div className="text-[8px] text-white/40 uppercase font-mono mb-0.5">Latency</div>
             <div className="text-base text-white font-mono font-medium">1.4<span className="text-[#4EA8FF] text-[10px] font-normal">ms</span></div>
          </div>
          <div className="p-2 rounded-[12px] border border-white/[0.05] bg-white/[0.03]">
             <div className="text-[8px] text-white/40 uppercase font-mono mb-0.5">Active Nodes</div>
             <div className="text-base text-white font-mono font-medium">4,280</div>
          </div>
        </div>
      </motion.div>

      {/* 2. Lower Left Panel (System.Alpha) */}
      <motion.div
        style={{ x: alphaX, y: alphaY }}
        animate={{ 
          y: [8, -8, 8],
          rotate: activeHighlight === 0 ? 0 : -2,
          scale: activeHighlight === 0 ? 0.98 : 0.96
        }}
        transition={{ 
          y: { duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.5 },
          rotate: { duration: 0.6 },
          scale: { duration: 0.6 }
        }}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className={`
          absolute left-[-2%] md:left-[5%] top-[260px] lg:top-[280px] w-[280px] rounded-[20px] bg-gradient-to-tr from-[#02050a]/95 via-[#050a12]/95 to-[#050f1a]/95 p-5 z-20 transition-all duration-500 overflow-hidden
          shadow-[0_30px_60px_rgba(0,0,0,0.9),inset_0_1px_1px_rgba(255,255,255,0.15)] backdrop-blur-3xl border border-white/10
          ${activeHighlight === 0 ? "border-[#10B981]/60 shadow-[0_0_60px_rgba(16,185,129,0.25)] ring-1 ring-[#10B981]/30" : "hover:border-white/30"}
        `}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-white/[0.06] via-transparent to-transparent pointer-events-none" />
        <div className="absolute bottom-[-50px] left-[-50px] w-40 h-40 bg-[#10B981]/15 rounded-full blur-[60px] pointer-events-none" />
        <div className="absolute top-0 right-0 w-40 h-40 bg-[#4EA8FF]/[0.08] rounded-bl-full blur-3xl pointer-events-none" />
        
        <div className="flex items-center justify-between mb-5 text-[9px] font-mono">
          <div className="flex items-center gap-1.5 text-white/60 uppercase tracking-widest">
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-[0_0_10px_#10B981] animate-pulse" />
            System.Alpha
          </div>
          <span className="text-white/30 text-[8px]">REAL-TIME</span>
        </div>
        
        <div className="space-y-3.5">
          {[
            { label: "Data Ingestion", val: 94, color: "#4EA8FF" },
            { label: "Neural Mapping", val: 98, color: "#10B981" },
            { label: "Threat Mitigation", val: 89, color: "#8B5CF6" },
            { label: "Resource Shift", val: 96, color: "#00e5ff" }
          ].map((item, i) => (
            <div key={i} className="flex flex-col gap-1.5 group">
              <div className="flex justify-between items-center text-[9px] font-mono">
                <span className="text-white/50 uppercase tracking-wider">{item.label}</span>
                <span className="text-white font-medium" style={{ color: item.color }}>{item.val}%</span>
              </div>
              <div className="h-1.5 bg-black/50 rounded-full overflow-hidden relative border border-white/[0.05] shadow-inner">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${item.val}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, delay: 0.4 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute top-0 left-0 bottom-0 rounded-full shadow-[0_0_10px_currentColor]"
                  style={{ backgroundColor: item.color, color: item.color }}
                >
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

        <div className="mt-5 pt-4 border-t border-white/[0.04] flex items-center justify-between text-[9px] font-mono text-white/40">
          <span>STATUS: OPTIMAL</span>
          <span className="text-emerald-400 flex items-center gap-1">
            <span className="w-1 h-1 rounded-full bg-emerald-400 animate-ping" />
            AUTONOMOUS
          </span>
        </div>
      </motion.div>

      {/* 3. Lower Right Panel (Live Traffic) */}
      <motion.div
        style={{ x: trafficX, y: trafficY }}
        animate={{ 
          y: [-5, 5, -5],
          rotate: activeHighlight === 2 ? 1 : -2,
          scale: activeHighlight === 2 ? 0.95 : 0.93
        }}
        transition={{ 
          y: { duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 1 },
          rotate: { duration: 0.6 },
          scale: { duration: 0.6 }
        }}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className={`
          absolute right-[-2%] md:right-[5%] top-[300px] lg:top-[320px] w-[220px] rounded-[20px] bg-gradient-to-bl from-[#05020a]/95 via-[#0a0512]/95 to-[#020205]/95 p-5 z-10 transition-all duration-500 overflow-hidden
          shadow-[0_30px_60px_rgba(0,0,0,0.9),inset_0_1px_1px_rgba(255,255,255,0.15)] backdrop-blur-3xl border border-white/10
          ${activeHighlight === 2 ? "border-[#8B5CF6]/60 shadow-[0_0_60px_rgba(139,92,246,0.25)] ring-1 ring-[#8B5CF6]/30" : "hover:border-white/30"}
        `}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-white/[0.06] via-transparent to-transparent pointer-events-none" />
        <div className="absolute bottom-[-30px] right-[-30px] w-32 h-32 bg-[#8B5CF6]/20 rounded-full blur-[50px] pointer-events-none" />
        <div className="flex items-center justify-between text-[9px] font-mono uppercase tracking-widest mb-3">
          <span className="text-white/60">Live Traffic Stream</span>
          <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-ping" />
        </div>
        
        {/* Dynamic Animated Bar Chart */}
        <div className="flex justify-between gap-1 h-16 items-end pt-2">
            {trafficBars.map((val, i) => (
              <motion.div
                key={i}
                animate={{ height: `${val}%` }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="flex-1 bg-gradient-to-t from-purple-600 via-blue-500 to-cyan-400 hover:brightness-125 transition-all rounded-sm cursor-pointer shadow-[0_0_15px_rgba(0,229,255,0.4)] relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-white/80 blur-[1px]" />
              </motion.div>
            ))}
        </div>

        <div className="mt-2 flex justify-between items-center text-[8px] font-mono text-white/30">
          <span>00:00</span>
          <span>REALTIME FLOW</span>
          <span>LIVE</span>
        </div>
      </motion.div>
    </div>
  );
}
