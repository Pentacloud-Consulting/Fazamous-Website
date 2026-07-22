"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { 
  HeartPulse, 
  TrendingUp, 
  Factory, 
  Radio, 
  ShoppingBag, 
  Zap, 
  ArrowUpRight 
} from "lucide-react";

const industries = [
  { 
    name: "Healthcare", 
    desc: "Clinical decision support & autonomous diagnostics with zero latency accuracy.",
    icon: HeartPulse,
    color: "#00e5ff",
    metric: "99.8% Accuracy",
    tags: ["Diagnostics", "Patient Care", "Genomics"]
  },
  { 
    name: "Finance", 
    desc: "Real-time risk modeling, algorithmic compliance, & fraud detection engines.",
    icon: TrendingUp,
    color: "#10B981",
    metric: "sub-ms Execution",
    tags: ["Risk AI", "Trading", "Compliance"]
  },
  { 
    name: "Manufacturing", 
    desc: "Predictive maintenance & smart factory orchestration for zero-downtime ops.",
    icon: Factory,
    color: "#F59E0B",
    metric: "4.8x Output",
    tags: ["Robotics", "IoT Mesh", "Supply Chain"]
  },
  { 
    name: "Telecommunications", 
    desc: "Autonomous network optimization, dynamic bandwidth, & edge intelligence.",
    icon: Radio,
    color: "#3B82F6",
    metric: "99.999% Uptime",
    tags: ["5G/6G Core", "Edge Nodes", "Traffic AI"]
  },
  { 
    name: "Retail & E-Com", 
    desc: "Hyper-personalized demand forecasting & autonomous self-healing inventory.",
    icon: ShoppingBag,
    color: "#EC4899",
    metric: "3.4x Conversion",
    tags: ["Demand AI", "Inventory", "Personalization"]
  },
  { 
    name: "Energy & Utilities", 
    desc: "Smart grid optimization, renewable balancing, & sustainable load management.",
    icon: Zap,
    color: "#8B5CF6",
    metric: "-42% Carbon",
    tags: ["Smart Grid", "Renewables", "Load Balancing"]
  },
];

export function Industries() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="industries" className="py-28 relative overflow-hidden bg-[#030303]">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1100px] h-[1100px] rounded-full bg-gradient-to-tr from-[#00e5ff]/[0.02] via-[#8B5CF6]/[0.02] to-transparent blur-[200px] pointer-events-none" />

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
        {/* Header */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="mb-5 flex justify-center"
          >
            <span className="glass-pill px-5 py-2 inline-flex items-center gap-2 border-glow text-white/40 uppercase tracking-[0.2em] text-[10px] font-mono">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00e5ff] animate-ping" />
              Industry Applications
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="text-4xl md:text-6xl lg:text-7xl font-semibold tracking-tight leading-[1.05] mb-6 text-white"
          >
            Empowering<br />
            <span className="text-gradient-accent">Every Sector.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-white/50 max-w-xl mx-auto text-[15px] leading-relaxed font-light"
          >
            Tailored AI architectures engineered to solve high-stakes challenges across critical global industries.
          </motion.p>
        </div>

        {/* Industry Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ 
                  opacity: { duration: 0.7, delay: 0.2 + idx * 0.08 },
                  y: { duration: 0.3 },
                  scale: { duration: 0.3 }
                }}
                className="group glass-card relative overflow-hidden rounded-[24px] p-8 md:p-9 border border-white/[0.08] hover:border-white/20 transition-all duration-500 cursor-pointer flex flex-col justify-between"
              >
                {/* Dynamic color bloom background on hover */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-15 transition-opacity duration-700 pointer-events-none"
                  style={{
                    background: `radial-gradient(circle at 90% 10%, ${item.color}, transparent 65%)`
                  }}
                />

                {/* Ambient glow in corner */}
                <div 
                  className="absolute -top-12 -right-12 w-36 h-36 rounded-full opacity-20 group-hover:opacity-60 blur-3xl transition-opacity duration-700 pointer-events-none"
                  style={{ backgroundColor: item.color }}
                />

                {/* Light sweep border effect */}
                <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-[24px]">
                  <motion.div 
                    animate={{ x: ["-100%", "200%"] }}
                    transition={{ repeat: Infinity, duration: 4, delay: idx * 0.5, ease: "linear" }}
                    className="w-1/2 h-full bg-gradient-to-r from-transparent via-white/[0.06] to-transparent"
                  />
                </div>

                {/* Top Header: Icon & Index */}
                <div>
                  <div className="flex items-center justify-between mb-8">
                    <div 
                      className="w-14 h-14 rounded-2xl flex items-center justify-center border transition-all duration-500 group-hover:scale-110 shadow-lg"
                      style={{
                        background: `linear-gradient(135deg, ${item.color}20, rgba(255,255,255,0.02))`,
                        borderColor: `${item.color}40`,
                        boxShadow: `0 0 20px ${item.color}25`
                      }}
                    >
                      <Icon size={24} style={{ color: item.color }} className="transition-transform duration-500 group-hover:rotate-6" />
                    </div>

                    <div className="flex items-center gap-3">
                      <span 
                        className="text-[11px] font-mono font-medium px-3 py-1 rounded-full border bg-white/[0.02] transition-colors duration-500"
                        style={{ borderColor: `${item.color}30`, color: item.color }}
                      >
                        {item.metric}
                      </span>
                      <span className="text-[11px] font-mono text-white/20 uppercase tracking-widest">
                        0{idx + 1}
                      </span>
                    </div>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-white/80 transition-all duration-300">
                    {item.name}
                  </h3>
                  
                  <p className="text-white/45 text-[14px] leading-relaxed font-light mb-8 group-hover:text-white/70 transition-colors duration-500">
                    {item.desc}
                  </p>
                </div>

                {/* Bottom Tags & Explore Arrow */}
                <div>
                  <div className="flex flex-wrap gap-2 pt-4 border-t border-white/[0.06] items-center justify-between">
                    <div className="flex flex-wrap gap-1.5">
                      {item.tags.map((tag) => (
                        <span key={tag} className="text-[10px] font-mono text-white/30 px-2 py-0.5 rounded bg-white/[0.03] group-hover:text-white/50 group-hover:bg-white/[0.06] transition-colors">
                          #{tag}
                        </span>
                      ))}
                    </div>

                    <div 
                      className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-white/40 group-hover:text-white group-hover:border-white/30 group-hover:bg-white/10 transition-all duration-300"
                    >
                      <ArrowUpRight size={16} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </div>
                  </div>
                </div>

                {/* Bottom colored accent border */}
                <div 
                  className="absolute bottom-0 left-0 w-full h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ background: `linear-gradient(90deg, transparent, ${item.color}, transparent)` }}
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
