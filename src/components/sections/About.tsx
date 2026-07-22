"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { 
  Building2, 
  Users, 
  Cpu, 
  ShieldCheck, 
  Globe2, 
  Award 
} from "lucide-react";

const stats = [
  { 
    value: "2019", 
    label: "Founded", 
    subtext: "Silicon Valley & Zurich Labs",
    icon: Building2,
    color: "#00e5ff" 
  },
  { 
    value: "200+", 
    label: "AI Researchers", 
    subtext: "Top 1% PhDs & Systems Engineers",
    icon: Users,
    color: "#8B5CF6" 
  },
  { 
    value: "50B+", 
    label: "Decisions / Day", 
    subtext: "Real-Time Autonomous Telemetry",
    icon: Cpu,
    color: "#10B981" 
  },
  { 
    value: "99.99%", 
    label: "Uptime SLA", 
    subtext: "Mission-Critical Fault Tolerance",
    icon: ShieldCheck,
    color: "#F59E0B" 
  },
];

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-28 relative overflow-hidden bg-[#030303]">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full bg-gradient-to-tr from-[#00e5ff]/[0.02] via-[#8B5CF6]/[0.025] to-transparent blur-[200px] pointer-events-none" />

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
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-12 items-center">
          
          {/* Left Column: Big Mission Statement */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="mb-6 flex items-center gap-3"
            >
              <span className="glass-pill px-5 py-2 inline-flex items-center gap-2 border-glow text-white/40 uppercase tracking-[0.2em] text-[10px] font-mono">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00e5ff] animate-ping" />
                About FAZAMOUS
              </span>

              <span className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 text-[10px] font-mono font-medium">
                <span className="w-1 h-1 rounded-full bg-emerald-400 animate-pulse" />
                DEEP-TECH PIONEERS
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="text-4xl md:text-5xl lg:text-[4rem] font-semibold tracking-tight leading-[1.08] mb-8 text-white"
            >
              We don&apos;t build tools.<br />
              We build <span className="text-gradient-accent">intelligence</span><br />
              that builds the future.
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-white/50 text-[16px] leading-relaxed max-w-xl font-light mb-10"
            >
              FAZAMOUS is a deep-tech enterprise intelligence company. We combine proprietary AI research, 
              autonomous systems engineering, and enterprise-grade platform design to create technology that 
              thinks, decides, and acts at superhuman scale.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex items-center gap-8 pt-6 border-t border-white/[0.06] text-white/40 text-[12px] font-mono"
            >
              <div className="flex items-center gap-2">
                <Globe2 size={16} className="text-[#00e5ff]" />
                <span>Global Multi-Cloud Grid</span>
              </div>
              <div className="flex items-center gap-2">
                <Award size={16} className="text-[#8B5CF6]" />
                <span>ISO/IEC 27001 Certified</span>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Interactive Metric Cards Grid */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {stats.map((stat, idx) => {
                const Icon = stat.icon;
                return (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 40 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    whileHover={{ y: -8, scale: 1.03 }}
                    transition={{ 
                      opacity: { duration: 0.6, delay: 0.3 + idx * 0.1 },
                      y: { duration: 0.3 },
                      scale: { duration: 0.3 }
                    }}
                    className="group glass-card p-6 md:p-7 rounded-[22px] border border-white/[0.08] hover:border-white/25 transition-all duration-500 cursor-pointer relative overflow-hidden flex flex-col justify-between"
                  >
                    {/* Background color bloom on hover */}
                    <div 
                      className="absolute inset-0 opacity-0 group-hover:opacity-15 transition-opacity duration-500 pointer-events-none"
                      style={{ background: `radial-gradient(circle at 80% 20%, ${stat.color}, transparent 70%)` }}
                    />

                    {/* Light sweep */}
                    <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-[22px]">
                      <motion.div 
                        animate={{ x: ["-100%", "200%"] }}
                        transition={{ repeat: Infinity, duration: 4, delay: idx * 0.5, ease: "linear" }}
                        className="w-1/2 h-full bg-gradient-to-r from-transparent via-white/[0.06] to-transparent"
                      />
                    </div>

                    <div className="relative z-10">
                      <div className="flex items-center justify-between mb-5">
                        <div 
                          className="w-10 h-10 rounded-xl border flex items-center justify-center transition-transform duration-500 group-hover:scale-110"
                          style={{
                            background: `linear-gradient(135deg, ${stat.color}20, rgba(255,255,255,0.02))`,
                            borderColor: `${stat.color}40`,
                            boxShadow: `0 0 15px ${stat.color}20`
                          }}
                        >
                          <Icon size={18} style={{ color: stat.color }} />
                        </div>

                        <span className="w-2 h-2 rounded-full opacity-30 group-hover:opacity-100 transition-opacity" style={{ backgroundColor: stat.color }} />
                      </div>

                      <div 
                        className="text-3xl md:text-4xl font-bold text-white font-mono mb-1 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-white/80 transition-all duration-300"
                      >
                        {stat.value}
                      </div>
                      
                      <div className="text-[12px] text-white/80 font-mono font-medium mb-1">
                        {stat.label}
                      </div>

                      <div className="text-[11px] text-white/35 font-light leading-tight">
                        {stat.subtext}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
