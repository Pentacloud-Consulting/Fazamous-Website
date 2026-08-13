"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { OverlappingDashboards } from "@/components/ui/OverlappingDashboards";

export function AutonomousSystems() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const features = [
    { title: "Self-optimizing Resource Allocation", desc: "Dynamically shifts compute and capital based on real-time needs.", idx: 0 },
    { title: "Predictive Maintenance Protocols", desc: "Identifies systemic failures weeks before they materialize.", idx: 1 },
    { title: "Multi-System Coordination", desc: "Orchestrates across disparate enterprise software silently.", idx: 2 },
  ];

  return (
    <section className="py-10 md:py-16 relative bg-[#030303]">
      {/* Static ambient background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[20%] right-0 w-[900px] h-[900px] rounded-full bg-[#4EA8FF]/[0.03] blur-[220px] translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-[700px] h-[700px] rounded-full bg-violet-600/[0.025] blur-[180px] -translate-x-1/4" />
        <div
          className="absolute inset-0 opacity-25"
          style={{
            backgroundImage: `
              radial-gradient(circle at 75% 50%, rgba(78, 168, 255, 0.08) 0%, transparent 60%),
              linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)
            `,
            backgroundSize: '100% 100%, 60px 60px, 60px 60px',
          }}
        />
      </div>

      <div className="w-full max-w-[1400px] mx-auto px-6 md:px-12 relative z-10" ref={ref}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-14 lg:gap-16 items-start">

          {/* ── LEFT: Content ── */}
          <div className="flex flex-col">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 glass-pill mb-5 border-glow w-fit"
            >
              <div className="w-2 h-2 rounded-full bg-[#4EA8FF] shadow-[0_0_10px_#4EA8FF] animate-ping" />
              <span className="text-[#4EA8FF] uppercase tracking-widest text-[10px] font-mono font-medium">Autonomy Engine v4.2</span>
            </motion.div>

            {/* Headline */}
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="text-2xl md:text-4xl font-bold tracking-tight leading-tight mb-4"
            >
              Beyond <span className="text-gradient-accent">Automation.</span>
            </motion.h2>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-white/50 text-[13px] md:text-[15px] leading-[1.7] md:leading-[1.8] mb-6 md:mb-8 font-light"
            >
              Our systems learn, adapt, and execute complex workflows entirely on their own, requiring human intervention only for high-level strategic alignment. We are replacing rigid rule-based automation with fluid, self-correcting intelligence.
            </motion.p>

            {/* Features List — normal static gap */}
            <div className="flex flex-col gap-3 md:gap-4 mb-8 md:mb-10">
              {features.map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                  className="p-4 md:p-5 rounded-2xl border border-white/[0.06] bg-white/[0.02] hover:border-[#4EA8FF]/40 hover:bg-white/[0.04] hover:shadow-[0_0_20px_rgba(78,168,255,0.1)] transition-all duration-400 cursor-pointer flex items-start gap-3 md:gap-4 group"
                >
                  <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg border border-white/[0.1] bg-white/[0.03] group-hover:bg-[#4EA8FF] group-hover:border-[#4EA8FF] group-hover:text-black group-hover:shadow-[0_0_15px_#4EA8FF] flex items-center justify-center shrink-0 mt-0.5 transition-all duration-400 text-white/40">
                    <span className="font-mono text-xs md:text-sm font-bold">{item.idx + 1}</span>
                  </div>
                  <div>
                    <h4 className="text-sm md:text-base font-semibold text-white/90 group-hover:text-[#4EA8FF] transition-colors duration-300 mb-1">
                      {item.title}
                    </h4>
                    <p className="text-[11px] md:text-[13px] text-white/40 leading-relaxed font-light">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA Link */}
            <motion.a
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.7 }}
              href="#technology"
              className="group inline-flex items-center gap-3 text-white text-[11px] md:text-[13px] font-mono tracking-wider uppercase"
            >
              <span className="relative py-1">
                Explore Architecture
                <span className="absolute left-0 bottom-0 w-full h-[1px] bg-[#4EA8FF] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </span>
              <span className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-white/[0.05] border border-white/[0.1] flex items-center justify-center group-hover:bg-[#4EA8FF] group-hover:border-[#4EA8FF] group-hover:text-black transition-all duration-300">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
                </svg>
              </span>
            </motion.a>
          </div>

          {/* ── RIGHT: Dashboard Visualization ── */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="relative w-full lg:h-[560px]"
          >
            <OverlappingDashboards activeHighlight={null} />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
