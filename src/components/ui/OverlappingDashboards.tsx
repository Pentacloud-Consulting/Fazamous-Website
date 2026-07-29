import React, { useState, useEffect } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

interface OverlappingDashboardsProps {
  activeHighlight?: number | null;
}

export function OverlappingDashboards({ activeHighlight = null }: OverlappingDashboardsProps) {
  const [mounted, setMounted] = useState(false);
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
    setMounted(true);
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

  if (!mounted) return null;

  return (
    <div 
      className="relative h-[850px] lg:h-[900px] w-full"
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
        {/* Omega bottom center ~ (50%, 340px). Alpha top center ~ (20%, 420px) */}
        <motion.path
          d="M 50% 340 C 50% 390, 20% 370, 20% 410"
          fill="none"
          stroke="url(#beam-omega-alpha)"
          strokeWidth="2"
          strokeDasharray="4 6"
          filter="url(#glow-strong)"
        />
        <motion.circle 
          cx="20%" cy="410" r="4" fill="#10B981" filter="url(#glow-strong)"
          animate={{ opacity: [0.2, 1, 0.2] }} transition={{ duration: 2, repeat: Infinity }}
        />

        {/* Connector: Omega (Top Center) -> Traffic (Lower Right) */}
        {/* Omega bottom center ~ (50%, 340px). Traffic top center ~ (85%, 450px) */}
        <motion.path
          d="M 50% 340 C 50% 400, 85% 380, 85% 440"
          fill="none"
          stroke="url(#beam-omega-traffic)"
          strokeWidth="2"
          strokeDasharray="4 6"
          filter="url(#glow-strong)"
        />
        <motion.circle 
          cx="85%" cy="440" r="4" fill="#8B5CF6" filter="url(#glow-strong)"
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
          absolute left-1/2 -translate-x-1/2 top-0 w-[320px] rounded-[24px] bg-[#0A0B0F]/80 p-7 z-30 transition-all duration-500 overflow-hidden
          shadow-[0_20px_50px_rgba(0,0,0,0.8),inset_0_1px_0_rgba(255,255,255,0.1)] backdrop-blur-3xl border border-white/[0.08]
          ${activeHighlight === 1 ? "border-[#4EA8FF]/50 shadow-[0_0_50px_rgba(78,168,255,0.2)] bg-[#0A0B0F]/90" : "hover:border-white/20"}
        `}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-white/[0.06] via-transparent to-transparent pointer-events-none" />
        <div className="absolute top-[-50px] left-[-50px] w-32 h-32 bg-[#4EA8FF]/20 rounded-full blur-[50px] pointer-events-none" />
        <div className="flex items-center justify-between mb-6 text-[10px] font-mono">
          <span className="text-white/40 uppercase tracking-widest">System.Omega</span>
          <span className="text-[#4EA8FF] px-2.5 py-1 rounded-full bg-[#4EA8FF]/10 border border-[#4EA8FF]/30 animate-pulse font-medium">
            Processing 4.2k ops/s
          </span>
        </div>
        
        {/* Large Circular Gauge */}
        <div className="flex flex-col items-center justify-center my-6 relative">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
            className="absolute w-[180px] h-[180px] rounded-full border border-dashed border-[#4EA8FF]/30"
          />
          
          <svg width="170" height="170" viewBox="0 0 160 160" className="transform -rotate-90 drop-shadow-[0_0_20px_rgba(78,168,255,0.4)]">
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
              className="text-4xl font-mono text-white font-bold tracking-tight"
            >
              98.4<span className="text-xl text-[#4EA8FF]">%</span>
            </motion.span>
            <span className="text-[9px] text-white/40 uppercase font-mono tracking-widest mt-1">Autonomous Precision</span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div className="p-3 rounded-[16px] border border-white/[0.05] bg-white/[0.03]">
             <div className="text-[9px] text-white/40 uppercase font-mono mb-1">Latency</div>
             <div className="text-lg text-white font-mono font-medium">1.4<span className="text-[#4EA8FF] text-xs font-normal">ms</span></div>
          </div>
          <div className="p-3 rounded-[16px] border border-white/[0.05] bg-white/[0.03]">
             <div className="text-[9px] text-white/40 uppercase font-mono mb-1">Active Nodes</div>
             <div className="text-lg text-white font-mono font-medium">4,280</div>
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
          absolute left-[-2%] md:left-0 top-[380px] lg:top-[410px] w-[340px] lg:w-[350px] rounded-[24px] bg-[#0A0B0F]/80 p-7 z-20 transition-all duration-500 overflow-hidden
          shadow-[0_20px_50px_rgba(0,0,0,0.8),inset_0_1px_0_rgba(255,255,255,0.1)] backdrop-blur-3xl border border-white/[0.08]
          ${activeHighlight === 0 ? "border-[#10B981]/50 shadow-[0_0_50px_rgba(16,185,129,0.2)] bg-[#0A0B0F]/90" : "hover:border-white/20"}
        `}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-white/[0.06] via-transparent to-transparent pointer-events-none" />
        <div className="absolute bottom-[-50px] left-[-50px] w-40 h-40 bg-[#10B981]/15 rounded-full blur-[60px] pointer-events-none" />
        <div className="absolute top-0 right-0 w-40 h-40 bg-[#4EA8FF]/[0.08] rounded-bl-full blur-3xl pointer-events-none" />
        
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
              <div className="h-2 bg-white/[0.03] rounded-full overflow-hidden relative border border-white/[0.04]">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${item.val}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, delay: 0.4 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute top-0 left-0 bottom-0 rounded-full"
                  style={{ backgroundColor: item.color }}
                >
                   <motion.div 
                     animate={{ x: ["-100%", "200%"] }}
                     transition={{ repeat: Infinity, duration: 2.5, delay: i * 0.4, ease: "linear" }}
                     className="absolute inset-0 w-1/2 bg-gradient-to-r from-transparent via-white/40 to-transparent" 
                   />
                </motion.div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 pt-5 border-t border-white/[0.04] flex items-center justify-between text-[11px] font-mono text-white/40">
          <span>STATUS: OPTIMAL</span>
          <span className="text-emerald-400 flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
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
          absolute right-[-2%] md:right-0 top-[420px] lg:top-[440px] w-[260px] rounded-[24px] bg-[#0A0B0F]/80 p-6 z-10 transition-all duration-500 overflow-hidden
          shadow-[0_20px_50px_rgba(0,0,0,0.8),inset_0_1px_0_rgba(255,255,255,0.1)] backdrop-blur-3xl border border-white/[0.08]
          ${activeHighlight === 2 ? "border-[#8B5CF6]/50 shadow-[0_0_50px_rgba(139,92,246,0.25)] bg-[#0A0B0F]/90" : "hover:border-white/20"}
        `}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-white/[0.06] via-transparent to-transparent pointer-events-none" />
        <div className="absolute bottom-[-30px] right-[-30px] w-32 h-32 bg-[#8B5CF6]/20 rounded-full blur-[50px] pointer-events-none" />
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
                className="flex-1 bg-gradient-to-t from-[#8B5CF6]/30 via-[#4EA8FF]/60 to-[#00e5ff] hover:brightness-150 transition-all rounded-[2px] cursor-pointer shadow-[0_0_10px_rgba(78,168,255,0.3)] relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-white/40" />
              </motion.div>
            ))}
        </div>

        <div className="mt-3 flex justify-between items-center text-[9px] font-mono text-white/30">
          <span>00:00</span>
          <span>REALTIME FLOW</span>
          <span>LIVE</span>
        </div>
      </motion.div>
    </div>
  );
}
