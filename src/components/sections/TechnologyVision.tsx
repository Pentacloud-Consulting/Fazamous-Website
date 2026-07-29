"use client";

import React, { useRef, useState } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { 
  Cpu, 
  GitBranch, 
  Network, 
  Sparkles, 
  ShieldCheck, 
  Zap 
} from "lucide-react";

const capabilities = [
  {
    id: "llm",
    label: "Proprietary LLMs",
    subtitle: "Custom Foundation Models",
    desc: "Domain-specific foundation models trained on secure enterprise datasets with zero data leakage.",
    icon: Cpu,
    accentColor: "#00e5ff",
    spec: "1.4T Parameters • 128k Context",
    orbitLabel: "LLM CORE"
  },
  {
    id: "causal",
    label: "Causal Reasoning Engines",
    subtitle: "Beyond Correlation AI",
    desc: "True cause-and-effect mathematical models that predict systemic outcomes with 99.9% certainty.",
    icon: GitBranch,
    accentColor: "#8B5CF6",
    spec: "Directed Acyclic Graphs",
    orbitLabel: "CAUSAL NET"
  },
  {
    id: "federated",
    label: "Federated Intelligence",
    subtitle: "Privacy-Preserving AI",
    desc: "Distributed mesh learning across multi-cloud infrastructure without exposing raw underlying data.",
    icon: Network,
    accentColor: "#10B981",
    spec: "Homomorphic Encrypted",
    orbitLabel: "FEDERATED"
  },
  {
    id: "quantum",
    label: "Neural Graph Optimization",
    subtitle: "Real-Time Topology",
    desc: "Self-assembling graph neural networks that optimize enterprise data routes dynamically.",
    icon: Sparkles,
    accentColor: "#F59E0B",
    spec: "Sub-millisecond Latency",
    orbitLabel: "GRAPH CORE"
  }
];

export function TechnologyVision() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [-80, 80]);

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const [activeTech, setActiveTech] = useState<string | null>(null);

  return (
    <section ref={containerRef} id="technology" className="py-12 relative overflow-hidden bg-[#030303]">
      {/* Ambient background lighting */}
      <motion.div
        style={{ y: y1 }}
        className="absolute top-0 right-0 w-[700px] h-[700px] rounded-full bg-[#00e5ff]/[0.025] blur-[200px] pointer-events-none translate-x-1/3"
      />
      <motion.div
        style={{ y: y2 }}
        className="absolute bottom-0 left-0 w-[600px] h-[600px] rounded-full bg-purple-600/[0.02] blur-[180px] pointer-events-none -translate-x-1/3"
      />

      {/* Grid Pattern */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px',
        }}
      />

      <div className="w-full max-w-[1400px] mx-auto px-6 md:px-12 relative z-10" ref={ref}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          
          {/* Left Column: Capabilities List */}
          <div className="max-w-xl">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="mb-5 flex items-center"
            >
              <span className="glass-pill px-5 py-2 inline-flex items-center gap-2 border-glow text-white/40 uppercase tracking-[0.2em] text-[10px] font-mono">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00e5ff] animate-ping" />
                Proprietary AI Stack
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="text-2xl md:text-4xl font-bold tracking-tight leading-tight mb-6 pb-2 text-white"
            >
              Engineering the <span className="text-gradient-accent">Impossible.</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-white/50 text-[15px] leading-relaxed font-light mb-10"
            >
              Our research labs push the boundaries of autonomous computation. Built from first principles to power hyper-scalable enterprise decision systems.
            </motion.p>

            {/* Interactive Capability Cards */}
            <div className="flex flex-col gap-4">
              {capabilities.map((item, idx) => {
                const Icon = item.icon;
                const isActive = activeTech === item.id;

                return (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, x: -30 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.3 + idx * 0.1, ease: [0.22, 1, 0.36, 1] }}
                    onMouseEnter={() => setActiveTech(item.id)}
                    onMouseLeave={() => setActiveTech(null)}
                    className={`
                      glass-card p-5 rounded-2xl border transition-all duration-500 cursor-pointer relative overflow-hidden group
                      ${isActive 
                        ? "bg-white/[0.05] border-white/30 shadow-[0_0_30px_rgba(0,229,255,0.15)] translate-x-2" 
                        : "border-white/[0.06] hover:border-white/20 hover:bg-white/[0.02]"
                      }
                    `}
                  >
                    {/* Background gradient bloom */}
                    <div 
                      className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none"
                      style={{ background: `radial-gradient(circle at 10% 50%, ${item.accentColor}, transparent 70%)` }}
                    />

                    <div className="relative z-10 flex items-start gap-4">
                      <div 
                        className="w-11 h-11 rounded-xl border flex items-center justify-center shrink-0 mt-0.5 transition-all duration-500 group-hover:scale-110"
                        style={{
                          background: `linear-gradient(135deg, ${item.accentColor}20, rgba(255,255,255,0.02))`,
                          borderColor: `${item.accentColor}40`,
                          boxShadow: isActive ? `0 0 15px ${item.accentColor}40` : "none"
                        }}
                      >
                        <Icon size={20} style={{ color: item.accentColor }} />
                      </div>

                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-1">
                          <h4 className="text-[16px] font-semibold text-white group-hover:text-white transition-colors">
                            {item.label}
                          </h4>
                          <span className="text-[9px] font-mono text-white/30 uppercase tracking-widest px-2 py-0.5 rounded bg-white/[0.03]">
                            {item.spec}
                          </span>
                        </div>
                        <p className="text-[13px] text-white/40 leading-relaxed font-light group-hover:text-white/70 transition-colors">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Right Column: 3D Quantum Neural Core Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="relative h-[550px] md:h-[620px] flex items-center justify-center"
          >
            {/* Ambient Core Glow */}
            <div className="absolute w-[350px] h-[350px] rounded-full bg-gradient-to-r from-[#00e5ff]/20 via-[#8B5CF6]/20 to-[#10B981]/20 blur-[80px] animate-pulse" />

            {/* Orbit Ring 1 (LLM) */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
              className="absolute w-[440px] h-[440px] rounded-full border border-dashed border-[#00e5ff]/30 shadow-[0_0_20px_rgba(0,229,255,0.1)] flex items-center justify-center"
            >
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-3 py-1 rounded-full bg-[#030303] border border-[#00e5ff]/50 text-[#00e5ff] text-[9px] font-mono shadow-[0_0_12px_#00e5ff] flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00e5ff] animate-ping" />
                LLM CORE • 1.4T
              </div>
            </motion.div>

            {/* Orbit Ring 2 (Causal) */}
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
              className="absolute w-[340px] h-[340px] rounded-full border border-dashed border-[#8B5CF6]/40 shadow-[0_0_20px_rgba(139,92,246,0.15)] flex items-center justify-center"
            >
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 px-3 py-1 rounded-full bg-[#030303] border border-[#8B5CF6]/50 text-[#8B5CF6] text-[9px] font-mono shadow-[0_0_12px_#8B5CF6] flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#8B5CF6] animate-ping" />
                CAUSAL ENGINE
              </div>
            </motion.div>

            {/* Orbit Ring 3 (Federated) */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
              className="absolute w-[240px] h-[240px] rounded-full border border-[#10B981]/40 shadow-[0_0_20px_rgba(16,185,129,0.15)] flex items-center justify-center"
            >
              <div className="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 px-2.5 py-1 rounded-full bg-[#030303] border border-[#10B981]/50 text-[#10B981] text-[9px] font-mono shadow-[0_0_12px_#10B981]">
                FEDERATED
              </div>
            </motion.div>

            {/* Central Energy Reactor Core */}
            <motion.div
              animate={{ 
                scale: activeTech ? 1.15 : [1, 1.06, 1],
                boxShadow: activeTech ? "0 0 80px rgba(0,229,255,0.6)" : ["0 0 30px rgba(0,229,255,0.2)", "0 0 60px rgba(0,229,255,0.4)", "0 0 30px rgba(0,229,255,0.2)"]
              }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="relative w-36 h-36 md:w-44 md:h-44 rounded-full bg-gradient-to-br from-[#00e5ff]/20 via-[#8B5CF6]/20 to-[#030303] border-2 border-white/30 backdrop-blur-2xl flex flex-col items-center justify-center shadow-2xl z-20"
            >
              {/* Inner spinning rotor */}
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
                className="absolute inset-2 rounded-full border border-dashed border-white/40"
              />

              <div className="text-center z-10 px-3">
                <div className="w-10 h-10 mx-auto mb-1.5 rounded-xl bg-gradient-to-tr from-[#00e5ff] to-[#8B5CF6] flex items-center justify-center shadow-[0_0_20px_#00e5ff]">
                  <Zap size={20} className="text-black fill-black" />
                </div>
                <span className="text-white font-mono font-bold text-xs md:text-sm tracking-widest block uppercase">
                  FAZAMOUS
                </span>
                <span className="text-[8px] font-mono text-[#00e5ff] tracking-wider block">
                  NEURAL CORE
                </span>
              </div>
            </motion.div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}
