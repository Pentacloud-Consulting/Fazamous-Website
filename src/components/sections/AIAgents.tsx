"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";

const agents = [
  {
    id: "analyst",
    name: "Strategic Analyst",
    role: "Market synthesis & forecasting",
    status: "Analyzing 2.4M data points",
    metrics: { accuracy: "99.2%", latency: "340ms", tasks: "12.8k" },
    color: "#4EA8FF",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 12h4l3-9 5 18 3-9h5" />
      </svg>
    )
  },
  {
    id: "optimizer",
    name: "Process Optimizer",
    role: "Workflow efficiency mapping",
    status: "Optimizing 847 workflows",
    metrics: { accuracy: "98.7%", latency: "120ms", tasks: "45.2k" },
    color: "#10B981",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    )
  },
  {
    id: "operator",
    name: "Operations Lead",
    role: "Task delegation & execution",
    status: "Coordinating 23 subsystems",
    metrics: { accuracy: "99.9%", latency: "8ms", tasks: "1.2M" },
    color: "#F43F5E",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M3 9h18M9 21V9" />
      </svg>
    )
  },
  {
    id: "researcher",
    name: "Deep Researcher",
    role: "Knowledge graph expansion",
    status: "Indexing 400 sources",
    metrics: { accuracy: "97.5%", latency: "850ms", tasks: "3.4k" },
    color: "#8B5CF6",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
      </svg>
    )
  }
];

function LiveTime() {
  const [time, setTime] = useState("");
  useEffect(() => {
    const int = setInterval(() => setTime(new Date().toISOString().slice(11, 19) + " UTC"), 1000);
    return () => clearInterval(int);
  }, []);
  return <>{time || "00:00:00 UTC"}</>;
}

export function AIAgents() {
  const [activeAgent, setActiveAgent] = useState(agents[0].id);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const active = agents.find(a => a.id === activeAgent)!;

  return (
    <section className="py-12 md:py-16 relative overflow-hidden bg-[#050505]">
      {/* Grid Background */}
      <div className="absolute inset-0 pointer-events-none opacity-10"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
          maskImage: 'radial-gradient(circle at center, black, transparent 80%)',
          WebkitMaskImage: 'radial-gradient(circle at center, black, transparent 80%)',
        }}
      />
      
      {/* Ambient glow based on active agent */}
      <div 
        className="absolute top-1/2 right-[10%] w-[800px] h-[800px] rounded-full blur-[200px] pointer-events-none opacity-10 transition-colors duration-1000"
        style={{ backgroundColor: active.color }}
      />

      <div className="w-full max-w-[1400px] mx-auto px-6 md:px-12 relative z-10" ref={ref}>
        {/* Header */}
        <div className="text-center mb-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.03] border border-white/[0.06] mb-6"
          >
            <div className="w-1.5 h-1.5 rounded-full bg-[#4EA8FF] shadow-[0_0_8px_#4EA8FF]" />
            <span className="text-white/30 uppercase tracking-[0.2em] text-[10px] font-mono">Agent Swarm</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="text-2xl md:text-4xl font-bold tracking-tight leading-tight mb-3"
          >
            Multi-Agent <span className="text-gradient">Orchestration.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-white/40 max-w-xl mx-auto text-[15px] leading-relaxed font-light"
          >
            Specialized AI agent swarms that collaborate, reason, and execute complex strategies thousands of times faster than humanly possible.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
          
          {/* ── LEFT: Agent Selector ── */}
          <div className="lg:col-span-5 flex flex-col gap-3 relative z-20 h-full">
            {agents.map((agent, idx) => {
              const isActive = activeAgent === agent.id;
              
              return (
                <motion.button
                  key={agent.id}
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.3 + idx * 0.1 }}
                  onClick={() => setActiveAgent(agent.id)}
                  className={`
                    group glass-card relative flex flex-1 items-center gap-4 p-4 rounded-3xl text-left transition-all duration-500 overflow-hidden hover:scale-[1.02] hover:border-white/15 hover:bg-white/[0.03]
                    ${isActive
                      ? "bg-white/[0.04] shadow-2xl border-white/15"
                      : ""
                    }
                  `}
                  style={{
                    borderColor: isActive ? `${agent.color}40` : '',
                  }}
                >
                  {/* Active Background Glow */}
                  {isActive && (
                    <div 
                      className="absolute inset-0 opacity-10 pointer-events-none"
                      style={{ background: `radial-gradient(circle at right, ${agent.color}, transparent 70%)` }}
                    />
                  )}
                  
                  {/* Hover Sweep */}
                  <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-3xl">
                    <div className="light-sweep absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.05] to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                  </div>

                  {/* Icon Box */}
                  <div className={`
                    w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-all duration-500 relative z-10
                    ${isActive ? "shadow-lg" : "text-white/40"}
                  `}
                  style={{
                    backgroundColor: isActive ? `${agent.color}20` : 'rgba(255,255,255,0.03)',
                    color: isActive ? agent.color : '',
                    border: `1px solid ${isActive ? `${agent.color}40` : 'rgba(255,255,255,0.05)'}`
                  }}>
                    {agent.icon}
                  </div>
                  
                  <div className="relative z-10">
                    <h4 className={`text-[17px] font-medium mb-1 transition-colors ${isActive ? 'text-white' : 'text-white/70'}`}>
                      {agent.name}
                    </h4>
                    <p className="text-[13px] text-white/40 font-light">{agent.role}</p>
                  </div>
                </motion.button>
              );
            })}
          </div>

          {/* ── RIGHT: Active Agent Display ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:col-span-7 relative z-10 h-full"
          >
            <div className="glass-card rounded-[32px] overflow-hidden h-full shadow-[0_30px_60px_-15px_rgba(0,0,0,0.5)] flex flex-col relative bg-[#080808]/80 backdrop-blur-3xl">
              
              {/* Top accent line */}
              <div 
                className="absolute top-0 left-0 right-0 h-[2px] transition-colors duration-1000"
                style={{ background: `linear-gradient(90deg, transparent, ${active.color}80, transparent)` }}
              />

              {/* Header bar */}
              <div className="px-8 py-5 border-b border-white/[0.04] flex items-center justify-between bg-white/[0.01]">
                <div className="flex items-center gap-3">
                  <div className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-50" style={{ backgroundColor: active.color }} />
                    <span className="relative inline-flex rounded-full h-2 w-2" style={{ backgroundColor: active.color }} />
                  </div>
                  <span className="text-[10px] font-mono text-white/40 uppercase tracking-widest">Agent Console</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-[10px] font-mono text-white/30">
                    <LiveTime />
                  </span>
                  <div className="w-4 h-4 rounded border border-white/10 flex items-center justify-center">
                    <div className="w-1.5 h-1.5 rounded-sm bg-white/20" />
                  </div>
                </div>
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={active.id}
                  initial={{ opacity: 0, y: 10, filter: 'blur(4px)' }}
                  animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                  exit={{ opacity: 0, y: -10, filter: 'blur(4px)' }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  className="p-5 md:p-6 flex-1 flex flex-col"
                >
                  <div className="flex flex-col items-center text-center mb-6 relative">
                    {/* Pulsing visual core */}
                    <div className="relative w-24 h-24 flex items-center justify-center mb-6">
                      <motion.div
                        animate={{ scale: [1, 1.8, 1], opacity: [0.3, 0, 0.3] }}
                        transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                        className="absolute inset-0 rounded-full border border-white"
                        style={{ borderColor: active.color }}
                      />
                      <motion.div
                        animate={{ scale: [1, 1.4, 1], opacity: [0.15, 0, 0.15] }}
                        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut", delay: 0.5 }}
                        className="absolute inset-0 rounded-full border border-white"
                        style={{ borderColor: active.color }}
                      />
                      <div className="w-14 h-14 rounded-full flex items-center justify-center shadow-lg"
                        style={{ 
                          backgroundColor: `${active.color}15`,
                          border: `1px solid ${active.color}40`,
                          color: active.color
                        }}
                      >
                         {active.icon}
                      </div>
                    </div>
                    
                    <h3 className="text-3xl font-medium text-white mb-3 tracking-tight">{active.name}</h3>
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white/[0.03] border border-white/[0.05]">
                       <span className="text-[10px] font-mono uppercase tracking-widest" style={{ color: active.color }}>{active.status}</span>
                       <span className="w-1 h-1 rounded-full bg-white animate-pulse" style={{ backgroundColor: active.color }} />
                    </div>
                  </div>

                  {/* Metrics */}
                  <div className="grid grid-cols-3 gap-3 md:gap-4 mb-6">
                    {Object.entries(active.metrics).map(([key, value]) => (
                      <div key={key} className="flex flex-col items-center justify-center text-center p-5 rounded-2xl border border-white/[0.04] bg-white/[0.01] hover:bg-white/[0.03] transition-colors duration-300">
                        <div className="text-2xl md:text-3xl font-mono text-white mb-2 tracking-tight">{value}</div>
                        <div className="text-[9px] text-white/30 uppercase tracking-[0.15em] font-mono capitalize">{key}</div>
                      </div>
                    ))}
                  </div>

                  {/* Activity visualization */}
                  <div className="mt-auto">
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-[9px] text-white/30 font-mono uppercase tracking-widest">Live Activity Stream</span>
                      <span className="text-[9px] text-white/30 font-mono">100ms interval</span>
                    </div>
                    <div className="flex justify-between gap-1 h-12 items-end">
                      {[...Array(40)].map((_, i) => (
                        <motion.div
                          key={i}
                          animate={{
                            height: ["20%", `${20 + ((i * 47) % 80)}%`, "20%"],
                          }}
                          transition={{
                            repeat: Infinity,
                            duration: 1 + (((i * 19) % 100) / 100),
                            delay: i * 0.05,
                            ease: "easeInOut",
                          }}
                          className="flex-1 rounded-t-[1px]"
                          style={{ backgroundColor: `${active.color}40` }}
                        />
                      ))}
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
