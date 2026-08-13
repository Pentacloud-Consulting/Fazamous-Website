"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { Search } from "lucide-react";

// ===== Animated Counter =====
function AnimatedNumber({ value, suffix = "", prefix = "" }: { value: number; suffix?: string; prefix?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  
  return (
    <span ref={ref} className="font-mono tabular-nums">
      {isInView ? (
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {prefix}<CountUp target={value} />{suffix}
        </motion.span>
      ) : (
        <span>{prefix}0{suffix}</span>
      )}
    </span>
  );
}

function CountUp({ target }: { target: number }) {
  const [count, setCount] = React.useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  React.useEffect(() => {
    if (!isInView) return;
    const duration = 1500;
    const startTime = Date.now();
    const startValue = count;
    
    const tick = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(startValue + (target - startValue) * eased));
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [isInView, target]);

  return <span ref={ref}>{count}</span>;
}

// ===== Grid Background Pattern =====
function GridBackground() {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none opacity-20"
      style={{
        backgroundImage: `
          linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)
        `,
        backgroundSize: '40px 40px',
        maskImage: 'radial-gradient(ellipse at 50% 0%, black 40%, transparent 70%)',
        WebkitMaskImage: 'radial-gradient(ellipse at 50% 0%, black 40%, transparent 70%)',
      }}
    />
  )
}

// ===== Premium Card =====
function PremiumCard({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
      className={`
        relative overflow-hidden rounded-3xl border border-white/[0.08]
        bg-[#080808]/80 backdrop-blur-3xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.5)]
        glass-card hover:border-white/15 hover:bg-white/[0.03] hover:shadow-[0_20px_60px_-15px_rgba(78,168,255,0.15)]
        transition-all duration-700 group
        ${className}
      `}
    >
      {/* Light sweep overlay */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-3xl light-sweep" />
      
      {/* Top Edge Glow */}
      <div className="absolute top-0 left-1/4 right-1/4 h-[1px] bg-gradient-to-r from-transparent via-[#4EA8FF]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
      
      {/* Corner glow */}
      <div className="absolute -top-32 -right-32 w-64 h-64 rounded-full bg-gradient-to-br from-[#4EA8FF]/[0.08] to-transparent blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none" />
      
      <div className="relative z-10">
        {children}
      </div>
    </motion.div>
  );
}

export function InsightsPlatform() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeTimeframe, setActiveTimeframe] = React.useState("24H");

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [40, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [0.96, 1]);
  const rotateX = useTransform(scrollYProgress, [0, 0.5], [10, 0]);

  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const chartDataMap: Record<string, number[]> = {
    "1H": [45, 50, 48, 55, 52, 60, 58, 65, 62, 70, 68, 75, 72, 80, 78, 85, 82, 90, 88, 95, 92, 100, 98, 95],
    "24H": [18, 25, 20, 32, 28, 45, 35, 55, 48, 65, 58, 80, 72, 88, 82, 95, 85, 92, 88, 98, 90, 100, 95, 98],
    "7D": [60, 65, 62, 70, 68, 75, 72, 80, 78, 85, 82, 90, 88, 95, 92, 100, 95, 98, 90, 85, 88, 92, 85, 90],
    "30D": [40, 45, 42, 50, 48, 55, 52, 60, 58, 65, 62, 70, 68, 75, 72, 80, 78, 85, 82, 90, 88, 95, 92, 100]
  };

  const statsMap: Record<string, { models: number, decisions: number, confidence: number }> = {
    "1H": { models: 115, decisions: 2800, confidence: 99 },
    "24H": { models: 127, decisions: 2400, confidence: 99 },
    "7D": { models: 142, decisions: 2150, confidence: 98 },
    "30D": { models: 156, decisions: 1950, confidence: 97 }
  };

  const currentChartData = chartDataMap[activeTimeframe];
  const currentStats = statsMap[activeTimeframe];

  return (
    <section ref={containerRef} id="platforms" className="pt-10 md:pt-16 pb-0 relative overflow-hidden bg-[#050505]">
      <GridBackground />
      
      {/* Background ambient */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[600px] rounded-[100%] bg-gradient-to-b from-[#4EA8FF]/[0.04] to-transparent blur-[100px] pointer-events-none" />
      
      <div className="w-full max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
        {/* Header */}
        <div ref={sectionRef} className="flex flex-col md:flex-row items-start md:items-end justify-between w-full max-w-[1000px] mx-auto mb-8 gap-6">
          
          {/* Left Text Content */}
          <div className="flex flex-col items-start text-left max-w-2xl">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 glass-pill mb-4 border-glow"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-[#4EA8FF] shadow-[0_0_8px_#4EA8FF] animate-pulse" />
              <span className="text-white/30 uppercase tracking-widest text-[10px] font-mono">Platform Core</span>
            </motion.div>
            
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="text-2xl md:text-4xl font-bold tracking-tight leading-tight pb-2 md:pb-3"
            >
              Decision <span className="text-gradient">Intelligence.</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-white/40 leading-[1.6] md:leading-[1.8] text-[13px] md:text-[15px] font-light max-w-xl"
            >
              Transform raw data streams into autonomous decisions. INSIGHTS leverages our proprietary knowledge graph to empower enterprise leaders with real-time situational awareness and predictive modeling.
            </motion.p>
          </div>

          {/* Right Button */}
          <motion.a
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            href="#"
            whileHover={{ scale: 1.05 }}
            className="shrink-0 group inline-flex items-center gap-2 md:gap-3 px-5 py-2.5 md:px-6 md:py-3 bg-white/[0.03] hover:bg-white/[0.08] border border-white/10 rounded-full text-white text-[11px] md:text-[13px] font-medium tracking-wide transition-all duration-300 md:mb-4"
          >
            Discover INSIGHTS
            <span className="w-4 h-4 md:w-5 md:h-5 rounded-full bg-[#4EA8FF] text-black flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="scale-[0.8] md:scale-100">
                <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
              </svg>
            </span>
          </motion.a>
        </div>

        {/* Dashboard Mockup */}
        <div style={{ perspective: "1000px" }} className="mb-8 z-20 relative">
          <motion.div style={{ scale, y, rotateX }} className="relative mx-auto w-full max-w-[1000px]">
            <PremiumCard className="p-3 md:p-4">
              <div className="rounded-2xl bg-[#030303] border border-white/[0.05] overflow-hidden relative">
                
                {/* Interface Grid Background */}
                <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
                  style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)', backgroundSize: '20px 20px' }}
                />

                {/* Toolbar */}
                <div className="relative h-12 md:h-14 border-b border-white/[0.05] flex items-center px-4 md:px-6 gap-2 md:gap-4 bg-[#0a0a0a]/50 backdrop-blur-md z-10">
                  <div className="flex gap-1.5 md:gap-2">
                    <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-white/[0.1] hover:bg-red-500/80 transition-colors" />
                    <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-white/[0.1] hover:bg-amber-500/80 transition-colors" />
                    <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-white/[0.1] hover:bg-green-500/80 transition-colors" />
                  </div>
                  <div className="flex-1 flex justify-center">
                    <div className="h-5 md:h-6 w-48 md:w-80 bg-white/[0.03] border border-white/[0.05] rounded-lg flex items-center px-2 md:px-3 gap-1 md:gap-2 overflow-hidden">
                      <Search size={10} className="text-white/20 shrink-0" />
                      <span className="text-[8px] md:text-[10px] text-white/20 font-mono truncate">fazamous.ai/insights/dash-v4</span>
                    </div>
                  </div>
                  <div className="flex gap-2 md:gap-3">
                    <div className="w-5 h-5 md:w-6 md:h-6 rounded-md bg-white/[0.03] border border-white/[0.05]" />
                    <div className="w-5 h-5 md:w-6 md:h-6 rounded-md bg-white/[0.03] border border-white/[0.05]" />
                  </div>
                </div>

                {/* Content grid */}
                <div className="relative z-10 p-4 md:p-6 grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6 min-h-[300px] md:min-h-[350px]">
                  
                  {/* Left sidebar - Stats */}
                  <div className="md:col-span-3 grid grid-cols-2 md:grid-cols-1 md:flex md:flex-col gap-3 md:gap-5">
                    {[
                      { label: "Active Models", value: currentStats.models, color: "text-[#4EA8FF]", bg: "bg-[#4EA8FF]/[0.03]", border: "border-[#4EA8FF]/10", glow: "shadow-[0_0_20px_rgba(78,168,255,0.05)]" },
                      { label: "Decisions/sec", value: currentStats.decisions, prefix: ">", color: "text-emerald-400", bg: "bg-emerald-400/[0.03]", border: "border-emerald-400/10", glow: "shadow-[0_0_20px_rgba(16,185,129,0.05)]" },
                      { label: "Confidence", value: currentStats.confidence, suffix: ".8%", color: "text-violet-400", bg: "bg-violet-400/[0.03]", border: "border-violet-400/10", glow: "shadow-[0_0_20px_rgba(139,92,246,0.05)]" },
                    ].map((stat, i) => (
                      <div key={i} className={`glass-card hover:border-white/15 hover:bg-white/[0.03] relative rounded-2xl border ${stat.border} ${stat.bg} ${stat.glow} p-3 md:p-4 overflow-hidden group hover:scale-[1.02] transition-transform duration-300`}>
                        {/* Hover flare */}
                        <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-2xl light-sweep" />
                        <div className="absolute top-0 right-0 w-12 h-12 md:w-16 md:h-16 bg-white/[0.05] rounded-bl-full translate-x-full -translate-y-full group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-500" />
                        
                        <div className="text-[7px] sm:text-[9px] md:text-[10px] text-white/40 uppercase tracking-widest mb-2 md:mb-3 font-mono flex items-center gap-1.5 md:gap-2">
                          <div className={`w-1 h-1 md:w-1.5 md:h-1.5 rounded-full ${stat.color} opacity-50`} />
                          <span className="truncate">{stat.label}</span>
                        </div>
                        <div className={`text-lg sm:text-2xl md:text-4xl font-medium ${stat.color} font-mono tracking-tight`}>
                          <AnimatedNumber value={stat.value} suffix={stat.suffix} prefix={stat.prefix} />
                        </div>
                      </div>
                    ))}
                    
                    {/* Small map / node visualization placeholder */}
                    <div className="flex-1 min-h-full md:min-h-[120px] rounded-2xl border border-white/[0.05] bg-white/[0.01] p-3 md:p-4 flex flex-col">
                       <span className="text-[9px] text-white/30 uppercase tracking-wider font-mono mb-auto">Global Nodes</span>
                       <div className="relative w-full h-16 flex items-center justify-center gap-3">
                          {[1,2,3,4,5].map(i => (
                            <motion.div 
                              key={i} 
                              animate={{ height: [10 + (i*7)%20, 20 + (i*11)%40, 10 + (i*13)%20] }}
                              transition={{ repeat: Infinity, duration: 1.5 + (i*0.3)%1, ease: "easeInOut" }}
                              className="w-1.5 rounded-full bg-white/[0.1]"
                            />
                          ))}
                       </div>
                    </div>
                  </div>

                  {/* Main chart area */}
                  <div className="md:col-span-9 rounded-2xl border border-white/[0.05] bg-gradient-to-br from-white/[0.02] to-transparent p-4 md:p-6 flex flex-col relative overflow-hidden group min-h-[240px] md:min-h-[auto] mt-2 md:mt-0">
                    {/* Chart Grid Lines */}
                    <div className="absolute inset-0 pointer-events-none flex flex-col justify-between p-6 pb-12 opacity-20">
                      {[1,2,3,4,5].map(i => (
                        <div key={i} className="w-full h-[1px] bg-white/[0.05] border-b border-dashed border-white/[0.05]" />
                      ))}
                    </div>

                    <div className="flex justify-between items-start mb-8 md:mb-12 relative z-10">
                      <div>
                        <span className="text-[9px] md:text-[11px] text-[#4EA8FF] font-mono uppercase tracking-widest block mb-1">Intelligence Output</span>
                        <span className="text-white/80 md:text-white text-xs md:text-sm">Real-time prediction confidence</span>
                      </div>
                      <div className="flex bg-black/40 p-1 rounded-lg border border-white/[0.05] backdrop-blur-md">
                        {["1H", "24H", "7D", "30D"].map(t => (
                          <button
                            key={t}
                            onClick={() => setActiveTimeframe(t)}
                            className={`px-2 py-1 md:px-3 md:py-1.5 rounded-md text-[8px] md:text-[10px] font-mono font-medium transition-all ${t === activeTimeframe ? "bg-white/10 text-white shadow-sm" : "text-white/40 hover:text-white/80 cursor-pointer"}`}
                          >
                            {t}
                          </button>
                        ))}
                      </div>
                    </div>
                    
                    {/* Animated chart bars */}
                    <div className="flex-1 flex items-end justify-between gap-1 md:gap-2.5 relative z-10 mt-auto">
                      {currentChartData.map((val, i) => (
                        <div key={i} className="flex-1 flex flex-col justify-end group/bar h-full">
                          {/* Value tooltip on hover */}
                          <div className="opacity-0 group-hover/bar:opacity-100 transition-opacity mb-2 text-center">
                            <span className="text-[9px] font-mono text-white/70">{val}</span>
                          </div>
                          
                          <motion.div
                            initial={{ height: 0 }}
                            animate={isInView ? { height: `${val}%` } : { height: 0 }}
                            transition={{ duration: 0.8, delay: i * 0.015, ease: [0.22, 1, 0.36, 1] }}
                            className="w-full rounded-t-sm bg-gradient-to-t from-[#4EA8FF]/[0.15] to-[#4EA8FF]/40 border-t border-[#4EA8FF]/50 relative overflow-hidden"
                          >
                            <div className="absolute inset-0 bg-gradient-to-b from-white/[0.15] to-transparent opacity-0 group-hover/bar:opacity-100 transition-opacity" />
                            {/* Inner vertical line */}
                            <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[1px] bg-white/[0.1]" />
                          </motion.div>
                        </div>
                      ))}
                    </div>
                    
                    {/* X-axis labels */}
                    <div className="flex justify-between items-center mt-4 text-[9px] font-mono text-white/30">
                      <span>00:00</span>
                      <span>06:00</span>
                      <span>12:00</span>
                      <span>18:00</span>
                      <span>24:00</span>
                    </div>

                  </div>
                </div>
              </div>
            </PremiumCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
