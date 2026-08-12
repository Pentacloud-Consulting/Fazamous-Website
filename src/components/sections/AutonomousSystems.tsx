"use client";

import React, { useRef, useState } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { OverlappingDashboards } from "@/components/ui/OverlappingDashboards";

export function AutonomousSystems() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [-60, 60]);

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const [activeHighlight, setActiveHighlight] = useState<number | null>(null);

  return (
    <section ref={containerRef} className="py-12 relative bg-[#030303]">
      {/* Background parallax ambient lighting */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <motion.div
          style={{ y: y1 }}
          className="absolute top-[20%] right-0 w-[900px] h-[900px] rounded-full bg-[#4EA8FF]/[0.03] blur-[220px] translate-x-1/3"
        />
        <motion.div
          style={{ y: y2 }}
          className="absolute bottom-0 left-0 w-[700px] h-[700px] rounded-full bg-violet-600/[0.025] blur-[180px] -translate-x-1/4"
        />
        
        {/* Grid Pattern with subtle radial glow */}
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 relative">
          
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
              className="text-2xl md:text-4xl font-bold tracking-tight leading-tight mb-4"
            >
              Beyond <span className="text-gradient-accent">Automation.</span>
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-white/50 text-[15px] leading-[1.8] mb-8 font-light"
            >
              Our systems learn, adapt, and execute complex workflows entirely on their own, requiring human intervention only for high-level strategic alignment. We are replacing rigid rule-based automation with fluid, self-correcting intelligence.
            </motion.p>

            {/* Features List with interactive focus */}
            <div className="flex flex-col gap-16 md:gap-32 my-12 md:my-20 pb-12 lg:pb-32">
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
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ margin: "-40% 0px -40% 0px", once: false }}
                    onViewportEnter={() => setActiveHighlight(item.targetIndex)}
                    transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                    onMouseEnter={() => setActiveHighlight(item.targetIndex)}
                    onMouseLeave={() => setActiveHighlight(null)}
                    className={`
                      p-5 md:p-6 rounded-3xl border transition-all duration-500 cursor-pointer flex items-start gap-4 md:gap-6
                      ${isActive 
                        ? "bg-white/[0.04] border-[#4EA8FF]/40 shadow-[0_0_25px_rgba(78,168,255,0.15)] translate-x-2" 
                        : "bg-white/[0.01] border-white/[0.05] hover:border-white/20 hover:bg-white/[0.02]"
                      }
                    `}
                  >
                    <div className={`
                      w-10 h-10 md:w-12 md:h-12 rounded-xl border flex items-center justify-center shrink-0 mt-0.5 transition-all duration-500
                      ${isActive
                        ? "bg-[#4EA8FF] border-[#4EA8FF] text-black shadow-[0_0_15px_#4EA8FF]"
                        : "border-white/[0.1] bg-white/[0.03] text-white/40"
                      }
                    `}>
                      <span className="font-mono text-sm md:text-base font-bold">{idx + 1}</span>
                    </div>
                    <div>
                      <h4 className={`text-base md:text-lg font-medium transition-colors duration-300 ${isActive ? "text-[#4EA8FF]" : "text-white/90"}`}>
                        {item.title}
                      </h4>
                      <p className="text-sm md:text-base text-white/40 leading-relaxed font-light mt-1.5">{item.desc}</p>
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
          <div className="relative mt-8 lg:mt-0 h-full">
            <div className="lg:sticky lg:top-32 relative h-[600px] lg:h-[650px] w-full perspective-[2000px]">
              <OverlappingDashboards activeHighlight={activeHighlight} />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
