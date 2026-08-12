"use client";

import React, { useRef, useState } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { 
  AlertTriangle, 
  BrainCircuit, 
  GitMerge, 
  Zap, 
  CheckCircle2 
} from "lucide-react";

const steps = [
  {
    step: "01",
    label: "Problem Identified",
    subtitle: "Data Anomaly Surface",
    desc: "Enterprise challenge automatically surfaces through real-time telemetry anomaly detection.",
    icon: AlertTriangle,
    accentColor: "#F43F5E",
    tag: "DETECTED IN 0.4ms",
    detail: "Anomaly severity score 98.4% across legacy infrastructure nodes."
  },
  {
    step: "02",
    label: "AI Analysis",
    subtitle: "Multi-Agent Reasoning",
    desc: "Autonomous agent network dissects root causes across millions of unstructured data streams.",
    icon: BrainCircuit,
    accentColor: "#F59E0B",
    tag: "AGENT MESH ACTIVE",
    detail: "Synthesized 14,000 telemetry channels into single root cause vector."
  },
  {
    step: "03",
    label: "Decision Intelligence",
    subtitle: "Constraint Simulation",
    desc: "Strategic execution pathways are dynamically generated and stress-tested against enterprise constraints.",
    icon: GitMerge,
    accentColor: "#00e5ff",
    tag: "3 PATHWAYS SIMULATED",
    detail: "Selected optimal action path with 99.4% confidence score."
  },
  {
    step: "04",
    label: "Autonomous Action",
    subtitle: "API-Level Execution",
    desc: "Approved decision vector executes instantly across integrated enterprise software and cloud nodes.",
    icon: Zap,
    accentColor: "#8B5CF6",
    tag: "LIVE DISPATCH",
    detail: "Zero human friction. 1,200 micro-adjustments deployed across grid."
  },
  {
    step: "05",
    label: "Business Outcome",
    subtitle: "Continuous Learning",
    desc: "Measurable impact is verified in real-time. System feeds learnings back into global neural weights.",
    icon: CheckCircle2,
    accentColor: "#10B981",
    tag: "+340% ROI DELIVERED",
    detail: "System weight model updated. Prevented $2.4M systemic failure."
  },
];

export function UseCases() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const [activeStep, setActiveStep] = useState<number | null>(null);

  // Animated vertical timeline progress height
  const lineHeight = useTransform(scrollYProgress, [0.15, 0.85], ["0%", "100%"]);
  const laserTop = useTransform(scrollYProgress, [0.15, 0.85], ["0%", "100%"]);

  return (
    <section id="process" ref={containerRef} className="py-10 relative overflow-hidden bg-[#030303]">
      {/* Background ambient gradient glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[1000px] h-[1000px] rounded-full bg-gradient-to-br from-[#00e5ff]/[0.02] via-[#8B5CF6]/[0.02] to-transparent blur-[220px] pointer-events-none" />

      {/* Grid pattern */}
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
        {/* Header */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="mb-5 flex justify-center"
          >
            <span className="glass-pill px-5 py-2 inline-flex items-center gap-2 border-glow text-white/40 uppercase tracking-[0.2em] text-[10px] font-mono">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00e5ff] animate-ping" />
              Autonomous Process
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="text-2xl md:text-4xl font-bold tracking-tight leading-tight mb-4 text-white"
          >
            From Insight to <span className="text-gradient-accent">Autonomous Action.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-white/50 max-w-xl mx-auto text-[15px] leading-relaxed font-light"
          >
            How our intelligence core transforms raw telemetry into instant, high-confidence enterprise execution.
          </motion.p>
        </div>

        {/* Workflow Timeline Steps */}
        <div className="relative max-w-4xl mx-auto">
          
          {/* Vertical timeline track background */}
          <div className="absolute left-6 md:left-12 top-4 bottom-4 w-[2px] bg-white/[0.06] rounded-full">
            {/* Animated filling line */}
            <motion.div
              style={{ height: lineHeight }}
              className="w-full bg-gradient-to-b from-[#F43F5E] via-[#00e5ff] to-[#10B981] rounded-full shadow-[0_0_12px_#00e5ff]"
            />
            {/* Laser tip dot */}
            <motion.div
              style={{ top: laserTop }}
              className="absolute left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-[#00e5ff] shadow-[0_0_15px_#00e5ff] border border-white"
            />
          </div>

          {/* Steps */}
          <div className="flex flex-col gap-5">
            {steps.map((item, idx) => {
              const Icon = item.icon;
              const isHovered = activeStep === idx;

              return (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, x: -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.8, delay: idx * 0.1, ease: [0.22, 1, 0.36, 1] }}
                  onMouseEnter={() => setActiveStep(idx)}
                  onMouseLeave={() => setActiveStep(null)}
                  className="relative pl-16 md:pl-28 cursor-pointer group"
                >
                  {/* Timeline Node Ring */}
                  <div 
                    className="absolute left-3 md:left-9 top-6 w-8 h-8 rounded-full border-2 bg-[#030303] flex items-center justify-center z-10 transition-all duration-500"
                    style={{
                      borderColor: isHovered ? item.accentColor : "rgba(255,255,255,0.15)",
                      boxShadow: isHovered ? `0 0 20px ${item.accentColor}` : "none",
                      transform: isHovered ? "scale(1.25)" : "scale(1)"
                    }}
                  >
                    <div 
                      className="w-2.5 h-2.5 rounded-full transition-colors duration-300"
                      style={{ backgroundColor: isHovered ? item.accentColor : "rgba(255,255,255,0.3)" }}
                    />
                  </div>

                  {/* Step Glass Card */}
                  <motion.div
                    whileHover={{ scale: 1.02, x: 6 }}
                    transition={{ duration: 0.3 }}
                    className={`
                      glass-card rounded-[24px] p-5 md:p-6 border relative overflow-hidden transition-all duration-500
                      ${isHovered 
                        ? "border-white/30 bg-white/[0.04] shadow-[0_20px_50px_rgba(0,0,0,0.8)]" 
                        : "border-white/[0.08] hover:border-white/20"
                      }
                    `}
                  >
                    {/* Background accent bloom */}
                    <div 
                      className="absolute inset-0 opacity-0 group-hover:opacity-15 transition-opacity duration-700 pointer-events-none"
                      style={{ background: `radial-gradient(circle at 10% 50%, ${item.accentColor}, transparent 70%)` }}
                    />

                    {/* Light sweep */}
                    <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-[24px]">
                      <motion.div 
                        animate={{ x: ["-100%", "200%"] }}
                        transition={{ repeat: Infinity, duration: 5, delay: idx * 0.6, ease: "linear" }}
                        className="w-1/2 h-full bg-gradient-to-r from-transparent via-white/[0.05] to-transparent"
                      />
                    </div>

                    <div className="relative z-10">
                      {/* Top Header */}
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-4">
                          <div 
                            className="w-12 h-12 rounded-2xl flex items-center justify-center border transition-all duration-500 group-hover:scale-110"
                            style={{
                              background: `linear-gradient(135deg, ${item.accentColor}25, rgba(255,255,255,0.02))`,
                              borderColor: `${item.accentColor}40`,
                              boxShadow: isHovered ? `0 0 20px ${item.accentColor}40` : "none"
                            }}
                          >
                            <Icon size={22} style={{ color: item.accentColor }} />
                          </div>
                          
                          <div>
                            <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-white/30 block mb-0.5">
                              STEP {item.step} — {item.subtitle}
                            </span>
                            <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-white/80 transition-colors">
                              {item.label}
                            </h3>
                          </div>
                        </div>

                        <span 
                          className="hidden sm:inline-block text-[10px] font-mono font-medium px-3 py-1 rounded-full border bg-white/[0.02]"
                          style={{ borderColor: `${item.accentColor}30`, color: item.accentColor }}
                        >
                          {item.tag}
                        </span>
                      </div>

                      {/* Description */}
                      <p className="text-white/50 text-[14px] leading-relaxed font-light mb-4 group-hover:text-white/80 transition-colors">
                        {item.desc}
                      </p>

                      {/* Detail Telemetry Footer */}
                      <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between text-[11px] font-mono">
                        <div className="flex items-center gap-2 text-white/40">
                          <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: item.accentColor }} />
                          <span>{item.detail}</span>
                        </div>
                        
                        <span 
                          className="font-bold tracking-widest transition-transform duration-300 group-hover:translate-x-1"
                          style={{ color: item.accentColor }}
                        >
                          →
                        </span>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
