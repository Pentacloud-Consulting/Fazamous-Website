"use client";

import React, { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";

const products = [
  {
    id: "01",
    title: "Quantum Analytics",
    subtitle: "Predictive Intelligence",
    desc: "Predictive modeling that anticipates market shifts before they occur.",
    details: "Analyzing billions of data points in real-time, Quantum Analytics provides an unprecedented view into future market dynamics. Enterprise leaders act proactively rather than reactively, turning volatility into a strategic advantage.",
    metrics: [
      { label: "Prediction Accuracy", value: "99.7%" },
      { label: "Processing Speed", value: "2.4ms" },
      { label: "Data Sources", value: "10K+" },
    ],
    color: "#4EA8FF",
  },
  {
    id: "02",
    title: "Nexus Operations",
    subtitle: "Autonomous Supply Chain",
    desc: "Self-orchestrating supply chain and resource management at global scale.",
    details: "Nexus fully automates complex logistics, dynamically rerouting resources based on global events, weather patterns, and economic indicators to ensure zero downtime. It operates with a level of precision human teams cannot match.",
    metrics: [
      { label: "Downtime", value: "0.001%" },
      { label: "Cost Reduction", value: "34%" },
      { label: "Routes Optimized", value: "1M+" },
    ],
    color: "#10B981", // Emerald
  },
  {
    id: "03",
    title: "Aegis Security",
    subtitle: "Self-Healing Cybersecurity",
    desc: "Autonomous cybersecurity infrastructure that evolves faster than threats.",
    details: "Aegis doesn't just detect threats; it actively neutralizes them and rewrites its own defense protocols in real-time, ensuring impenetrable enterprise boundaries against zero-day exploits.",
    metrics: [
      { label: "Threats Blocked", value: "99.99%" },
      { label: "Response Time", value: "<1ms" },
      { label: "Zero-Days Caught", value: "847" },
    ],
    color: "#F43F5E", // Rose
  },
  {
    id: "04",
    title: "Cortex Platform",
    subtitle: "Enterprise Knowledge",
    desc: "The living knowledge layer that understands your entire organization.",
    details: "Cortex ingests, maps, and contextualizes all enterprise data into a unified knowledge graph, enabling AI agents to reason across the full breadth of organizational intelligence instantly.",
    metrics: [
      { label: "Knowledge Nodes", value: "50B+" },
      { label: "Query Latency", value: "8ms" },
      { label: "Languages", value: "140+" },
    ],
    color: "#8B5CF6", // Violet
  },
];

export function IntelligentProducts() {
  const [expandedId, setExpandedId] = useState<string | null>(products[0].id); // First one open by default for premium feel
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="products" className="py-24 relative bg-[#050505]">
      {/* Background ambient glow */}
      <div className="absolute top-[20%] right-0 w-[800px] h-[800px] rounded-full bg-[#4EA8FF]/[0.02] blur-[150px] pointer-events-none" />
      
      <div className="w-full max-w-[1400px] mx-auto px-6 md:px-12" ref={ref}>
        {/* Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-12 mb-16">
          <div className="max-w-xl">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 glass-pill mb-6 border-glow"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-[#4EA8FF] shadow-[0_0_8px_#4EA8FF] animate-pulse" />
              <span className="text-white/30 uppercase tracking-widest text-[10px] font-mono">The Suite</span>
            </motion.div>
            
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="text-4xl md:text-6xl lg:text-[5.5rem] font-medium tracking-tight leading-[1.02]"
            >
              Intelligent<br />
              <span className="text-gradient">Products.</span>
            </motion.h2>
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:pt-16 max-w-md"
          >
            <p className="text-white/40 text-[15px] leading-[1.8] font-light">
              Purpose-built platforms integrating seamlessly into operations, bringing autonomous capabilities to every department. The foundation of modern enterprise architecture.
            </p>
          </motion.div>
        </div>

        {/* Product Cards (Accordion Style) */}
        <div className="flex flex-col gap-5">
          {products.map((product, idx) => {
            const isExpanded = expandedId === product.id;

            return (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.3 + idx * 0.1, ease: [0.22, 1, 0.36, 1] }}
              >
                <motion.div
                  layout
                  onClick={() => setExpandedId(isExpanded ? null : product.id)}
                  className={`
                    glass-card hover:border-white/15 hover:bg-white/[0.03] relative overflow-hidden rounded-3xl cursor-pointer transition-all duration-700 group hover:scale-[1.01]
                    ${isExpanded
                      ? "border-glow shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
                      : ""
                    }
                  `}
                >
                  {/* Subtle Top Glow for expanded state */}
                  {isExpanded && (
                    <motion.div 
                      layoutId={`glow-${product.id}`}
                      className="absolute top-0 left-1/4 right-1/4 h-[1px]" 
                      style={{ background: `linear-gradient(90deg, transparent, ${product.color}60, transparent)` }} 
                    />
                  )}

                  {/* Ambient background glow when expanded */}
                  {isExpanded && (
                    <div 
                      className="absolute top-0 right-0 w-[500px] h-[300px] blur-[120px] pointer-events-none opacity-20"
                      style={{ backgroundColor: product.color }}
                    />
                  )}

                  {/* Light sweep */}
                  <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-3xl light-sweep" />

                  <div className="p-8 md:p-10 lg:p-12 relative z-10">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                      <div className="flex items-start gap-6 md:gap-8 flex-1">
                        <span className="text-white/20 font-mono text-[11px] pt-2 shrink-0">{product.id}</span>
                        <div className="flex-1">
                          <div className="flex items-center gap-4 mb-3">
                            <h3 className={`text-2xl md:text-3xl lg:text-4xl font-medium tracking-tight transition-colors duration-500 ${isExpanded ? "text-white" : "text-white/60 group-hover:text-white/90"}`}>
                              {product.title}
                            </h3>
                            <span 
                              className={`hidden md:inline text-[10px] font-mono uppercase tracking-[0.15em] px-2.5 py-1 rounded border transition-colors duration-500`}
                              style={{
                                borderColor: isExpanded ? `${product.color}40` : 'rgba(255,255,255,0.08)',
                                backgroundColor: isExpanded ? `${product.color}10` : 'transparent',
                                color: isExpanded ? product.color : 'rgba(255,255,255,0.4)'
                              }}
                            >
                              {product.subtitle}
                            </span>
                          </div>
                          
                          <motion.p 
                            layout
                            className={`text-[15px] transition-colors duration-500 font-light ${isExpanded ? "text-white/70" : "text-white/40"}`}
                          >
                            {product.desc}
                          </motion.p>
                        </div>
                      </div>

                      {/* Toggle Icon */}
                      <div className={`
                        w-12 h-12 rounded-full border flex items-center justify-center shrink-0
                        transition-all duration-700
                        ${isExpanded
                          ? "bg-white border-white text-black rotate-45"
                          : "border-white/[0.1] bg-white/[0.02] text-white/50 group-hover:border-white/[0.2] group-hover:text-white"
                        }
                      `}>
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <line x1="12" y1="5" x2="12" y2="19" />
                          <line x1="5" y1="12" x2="19" y2="12" />
                        </svg>
                      </div>
                    </div>

                    {/* Expanded content */}
                    <AnimatePresence>
                      {isExpanded && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                          className="overflow-hidden"
                        >
                          <div className="pt-8 md:pt-10 mt-8 md:mt-10 border-t border-white/[0.06]">
                            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
                               <div className="lg:col-span-6">
                                  <p className="text-white/60 leading-[1.8] text-[15px] font-light">
                                    {product.details}
                                  </p>
                                  
                                  <motion.button
                                    whileHover={{ x: 5 }}
                                    className="mt-8 flex items-center gap-3 text-white text-[13px] font-medium group/btn"
                                  >
                                    <span style={{ color: product.color }}>View Platform Specs</span>
                                    <span className="w-6 h-6 rounded-full flex items-center justify-center transition-all duration-300" style={{ backgroundColor: `${product.color}20` }}>
                                      <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke={product.color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
                                      </svg>
                                    </span>
                                  </motion.button>
                               </div>
                               
                               <div className="lg:col-span-6">
                                 {/* Metrics Grid */}
                                 <div className="grid grid-cols-3 gap-4 md:gap-6">
                                   {product.metrics.map((metric, mi) => (
                                     <div key={mi} className="flex flex-col p-4 rounded-xl border border-white/[0.04] bg-white/[0.01]">
                                       <div className="text-2xl md:text-3xl font-medium text-white font-mono mb-2 tracking-tight">
                                         {metric.value}
                                       </div>
                                       <div className="text-[10px] text-white/30 uppercase tracking-[0.1em] font-mono leading-tight">
                                         {metric.label}
                                       </div>
                                     </div>
                                   ))}
                                 </div>
                               </div>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
